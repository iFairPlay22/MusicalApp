<template>
  <v-list two-line color="transparent">
    <div>
      <v-subheader class="display-1 my-5">
        {{ data.displayName }}
        <v-spacer />
        <v-btn
          :disabled="data.max && items.length < data.max"
          icon
          color="black"
          outlined
          @click="onCreate"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-subheader>
    </div>
    <v-subheader v-if="items.length == 0">Il n'y a aucun élément.</v-subheader>
    <!-- <v-list-item-group v-else v-model="selected"> -->
    <template v-else v-for="({ id, name }, i) in items">
      <v-list-item :key="i" @click="onClick(id)">
        <v-list-item-avatar>
          <v-icon>mdi-playlist-music</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ name }}</v-list-item-title>
        </v-list-item-content>

        <ItemActions @update="onUpdate(i)" @delete="onDelete(i, id)" />
      </v-list-item>
    </template>
    <!-- </v-list-item-group> -->
  </v-list>
</template>

<script>
import { deleteImage } from "@/cloudinary.js";
import ItemActions from "@/components/connected/all/ItemActions";

export default {
  name: "List",
  components: { ItemActions },
  props: {
    data: Object,
  },
  data() {
    return {
      // selected: [],
      items: [],
    };
  },
  watch: {
    data() {
      this.fetchItems();
    },
  },
  mounted() {
    this.fetchItems();
  },
  methods: {
    fetchFirstItem() {
      this.$emit("loading");

      this.$request(
        "GET",
        `/questionnary/${this.data.type}`,
        {},
        {},
        () => true,
        "",
        (response) => {
          this.items = response.data.map((e) => {
            return {
              id: e[`${this.data.type}Id`],
              name: e[`${this.data.labelName}`],
            };
          });
          this.$emit("loaded");
        },
        "Une erreur est survenue !",
        (e) => {
          console.log(e);
        }
      );
    },
    fetchItems() {
      if (!(this.data.beforeType && this.data.beforeId)) {
        return this.fetchFirstItem();
      }

      this.$emit("loading");

      this.$request(
        "GET",
        `/questionnary/${this.data.beforeType}/${this.data.beforeId}`,
        { depth: 1 },
        {},
        () => true,
        "",
        (response) => {
          this.items = response.data[this.data.nextTypeName].map((e) => {
            console.log(e);
            return {
              id: e[`${this.data.type}Id`],
              name: e[`${this.data.labelName}`],
              file: e["image"],
              bool: e["goodAnswer"],
            };
          });
          this.$emit("loaded");
        },
        "Une erreur est survenue !",
        (e) => {
          console.log(e);
        }
      );
    },
    onClick(id) {
      this.$emit("selected", id);
    },
    onDelete(i, id) {
      deleteImage(this.$request, this.items[i].file, () => this.deleteItem(id));
    },
    deleteItem(id) {
      this.$emit("loading");

      this.$request(
        "DELETE",
        `/questionnary/${this.data.type}/${id}`,
        {},
        {},
        () => true,
        `L'élement "${this.data.type}" a été supprimé !`,
        () => {
          this.fetchItems();
        },
        "Une erreur est survenue !",
        (e) => {
          console.log(e);
        }
      );
    },
    onCreate() {
      this.$emit("createMode");
    },
    onUpdate(i) {
      this.$emit("updateMode", {
        id: this.items[i].id,
        name: this.items[i].name,
        bool: this.items[i].bool,
        file: this.items[i].file,
      });
    },
  },
};
</script>

<style>
</style>