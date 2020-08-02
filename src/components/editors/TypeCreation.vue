<template>
  <v-card class="px-8 py-4" flat color="white">
    <p class="text-center display-1 black--text">Création</p>

    <v-card-subtitle>Type : {{level.title}}</v-card-subtitle>
    <v-checkbox v-if="level.requireBoolean" v-model="inputBoolean" label="Good answer"></v-checkbox>
    <div class="d-flex justify-space-around align-center">
      <v-text-field v-model="inputName"></v-text-field>
      <v-card-actions>
        <v-spacer />
        <v-btn class="ml-5" icon color="green" outlined @click="onCreate">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "TypeCreation",
  props: ["level", "parentId"],
  data() {
    return {
      inputName: "",
      inputBoolean: false,
    };
  },
  methods: {
    onCreate() {
      let params = { label: this.inputName, imageLink: "null" };

      if (this.level.requireBoolean)
        params["goodAnswer"] = this.inputBoolean ? 1 : 0;
      if (this.parentId !== null) params[this.level.before] = this.parentId;

      this.$request(
        "POST",
        this.level.url,
        params,
        () => true,
        "Item created!",
        () => {
          this.$emit("created");
        },
        "An error occured!",
        () => {}
      );
    },
  },
};
</script>

<style>
</style>