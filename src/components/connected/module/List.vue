<template>
  <v-list two-line color="transparent">
    <div>
      <v-subheader class="display-1 my-5">
        Sélectionner un {{ data.type }}
        <v-spacer />
        <v-btn icon color="black" outlined @click="onCreate">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-subheader>
    </div>
    <!-- <v-list-item-group v-model="selected"> -->
    <template v-for="({ id, name }, i) in items">
      <v-list-item :key="i" @click="onClick(id)">
        <v-list-item-avatar>
          <v-icon>mdi-playlist-music</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ name }}</v-list-item-title>
        </v-list-item-content>

        <ItemActions @update="onUpdate(i)" @delete="onDelete(id)" />
      </v-list-item>
    </template>
    <!-- </v-list-item-group> -->
  </v-list>
</template>

<script>
import ItemActions from "@/components/connected/all/ItemActions";

export default {
  name: "List",
  components: { ItemActions },
  props: {
    data: Object,
    // data: {
    //   id: Number,
    //   name: String,
    //   type: String,
    //   file: Boolean,
    //   bool: Boolean,
    // },
  },
  data() {
    return {
      // selected: [],
      items: [],
    };
  },
  mounted() {
    this.fetchItems();
  },
  methods: {
    fetchItems() {
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
              name: e[`${this.data.type}Name`],
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
      this.$router.push(`/questionnary-manager/${id}`);
    },
    onDelete(id) {
      this.$emit("loading");
      this.$request(
        "DELETE",
        `/questionnary/${this.data.type}/${id}`,
        {},
        {},
        () => true,
        `Le ${this.data.type} a été supprimé !`,
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
      });
    },
  },
};
</script>

<style>
</style>