<template>
  <v-card class="px-8 py-4" flat color="white">
    <div>
      <v-subheader class="display-1 my-5">
        <v-btn icon color="black" outlined @click="cancel">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <span class="ml-5">Créer un module</span>
      </v-subheader>
    </div>

    <div class="d-flex justify-space-around align-center">
      <v-text-field v-model="inputName" placeholder="Nom du module"></v-text-field>
      <v-card-actions>
        <v-spacer />
        <v-btn class="ml-5" icon color="green" outlined @click="createModule" :disabled="!isValid">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "ModuleCreator",
  data() {
    return {
      isValid: false,
      inputName: "",
    };
  },
  watch: {
    inputName(newVal) {
      if (newVal && 0 < newVal.length && newVal.length < 15) {
        this.updateFormState(true);
        return;
      }
      this.updateFormState(false);
    },
  },
  methods: {
    updateFormState(b) {
      this.isValid = b;
    },
    cancel() {
      this.$emit("cancel");
    },
    createModule() {
      this.$request(
        "POST",
        "/questionnary/module",
        { label: this.inputName },
        {},
        () => true,
        "Le module a été crééé !",
        () => {
          this.$emit("created");
        },
        "Une erreur est survenue !",
        () => {}
      );
    },
  },
};
</script>

<style>
</style>