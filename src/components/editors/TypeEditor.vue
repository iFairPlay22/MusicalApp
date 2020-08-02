<template>
  <v-card class="px-8 py-4" flat color="white">
    <p class="text-center display-1 black--text">Edition</p>
    <v-card-subtitle>Type : {{level.title}}</v-card-subtitle>
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
    };
  },
  methods: {
    onModify() {},

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