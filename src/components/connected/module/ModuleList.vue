<template>
  <v-list two-line color="transparent">
    <div>
      <v-subheader class="display-1 my-5">
        Modules
        <v-spacer />
        <v-btn icon color="black" outlined @click="onCreate">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-subheader>
    </div>
    <v-list-item-group v-model="selected">
      <template v-for="({ moduleId, moduleName }, i) in modules">
        <v-list-item :key="i" @click="onClick(moduleId)">
          <v-list-item-avatar>
            <v-icon>M</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ moduleName }}</v-list-item-title>
          </v-list-item-content>

          <ItemActions @update="onUpdate(moduleId)" @delete="onDelete(moduleId)" />
        </v-list-item>
      </template>
    </v-list-item-group>
  </v-list>
</template>

<script>
import ItemActions from "@/components/connected/all/ItemActions";

export default {
  name: "ModuleList",
  components: { ItemActions },
  data() {
    return {
      selected: [],
      modules: [],
    };
  },
  mounted() {
    this.fetchModules();
  },
  methods: {
    fetchModules() {
      this.$emit("loading");

      this.$request(
        "GET",
        "/questionnary/module",
        {},
        {},
        () => true,
        "",
        (response) => {
          this.modules = response.data;
          this.$emit("loaded");
        },
        "An error occured!",
        (e) => {
          console.log(e);
        }
      );
    },
    onClick(moduleId) {
      this.$router.push(`/questionnary-manager/${moduleId}`);
    },
    onDelete(moduleId) {
      this.$emit("loading");
      this.$request(
        "DELETE",
        `/questionnary/module/${moduleId}`,
        {},
        {},
        () => true,
        "Item deleted!",
        () => {
          this.fetchModules();
        },
        "An error occured!",
        (e) => {
          console.log(e);
        }
      );
    },
    onCreate() {
      this.$emit("createMode");
    },
    onUpdate(moduleId) {
      this.$emit("updateMode", this.modules[moduleId]);
    },
  },
};
</script>

<style>
</style>