<template>
  <v-card class="px-8 py-4" flat color="white">
    <p class="text-center display-1 black--text">Edition</p>
    <v-card-subtitle>Type : {{level.title}}</v-card-subtitle>
    <v-checkbox v-if="level.requireBoolean" v-model="inputBoolean" label="Good answer"></v-checkbox>
    <v-text-field v-model="inputName" :value="data[level.name]"></v-text-field>
    <v-card-actions>
      <v-spacer />
      <v-dialog v-model="dialog" persistent width="450px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon color="red" outlined>
            <v-icon>mdi-delete</v-icon>
          </v-btn>

          <v-btn icon color="orange" outlined @click="onModify">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="headline">Voulez vous supprimer cet élément ?</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="onDelete(true)">Oui</v-btn>
            <v-btn color="green darken-1" text @click="onDelete(false)">Non</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "TypeEditor",
  props: ["level", "parentId", "data"],
  data() {
    return {
      dialog: false,
      inputName: this.data[this.level.name],
      inputBoolean: false,
    };
  },
  methods: {
    onModify() {
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
          this.$emit("edited");
        },
        "An error occured!",
        () => {}
      );
    },

    onDelete(valid) {
      if (valid) {
        alert("ok");
      }
      this.dialog = false;
    },
  },
};
</script>

<style>
</style>