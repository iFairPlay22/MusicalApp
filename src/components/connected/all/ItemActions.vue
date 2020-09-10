<template>
  <div class="d-flex">
    <v-spacer />
    <v-dialog v-model="dialog" persistent width="450px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon color="red" outlined v-bind="attrs" v-on="on">
          <v-icon>mdi-delete</v-icon>
        </v-btn>

        <v-btn icon color="green" outlined class="mr-2" @click="onModify">
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
  </div>
</template>

<script>
export default {
  name: "ItemActions",
  data() {
    return {
      dialog: false,
    };
  },

  methods: {
    onDelete(validation) {
      if (validation) this.$emit("delete");
      this.dialog = false;
    },
    onModify() {
      this.$emit("update");
    },
  },
};
</script>

<style>
</style>