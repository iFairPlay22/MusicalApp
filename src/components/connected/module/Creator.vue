<template>
  <v-card class="px-8 py-4" flat color="white">
    <div>
      <v-subheader class="display-1 my-5">
        <v-btn icon color="black" outlined @click="cancel">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <span class="ml-5">Création - {{ data.type }}</span>
      </v-subheader>
    </div>

    <v-checkbox v-if="data.requireBool" v-model="inputBool" label="Good answer"></v-checkbox>

    <v-file-input
      v-if="data.requireFile"
      v-model="inputFile"
      color="black"
      :multiple="false"
      accept="image/*"
      label="File input"
    ></v-file-input>

    <div class="d-flex justify-space-around align-center">
      <v-text-field v-model="inputName" placeholder="Nom"></v-text-field>
      <v-card-actions>
        <v-spacer />
        <v-btn class="ml-5" icon color="green" outlined @click="create" :disabled="!isValid">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
import { storeImage } from "@/cloudinary.js";

export default {
  name: "Creator",
  props: {
    data: Object,
  },
  data() {
    return {
      isValid: false,
      inputName: "",
      inputFile: null,
      inputBool: false,
    };
  },
  watch: {
    inputName(newVal) {
      if (
        newVal &&
        0 < newVal.length &&
        newVal.length < this.data.lengthLimit &&
        (!this.data.requireFile ||
          (this.data.requireFile &&
            this.inputFile &&
            this.inputFile.length != 0)) &&
        (!this.data.requireBool ||
          (this.data.requireBool &&
            this.inputBool !== null &&
            this.inputBool != this.data.bool))
      ) {
        this.updateFormState(true);
        return;
      }
      this.updateFormState(false);
    },
    inputBool(newVal) {
      if (newVal != this.data.bool) this.updateFormState(true);
    },
    inputFile() {
      this.updateFormState(true);
    },
  },
  methods: {
    updateFormState(b) {
      this.isValid = b;
    },
    cancel() {
      this.$emit("cancel");
    },
    create() {
      return this.inputFile && this.inputFile.length != 0
        ? storeImage(this.$request, this.inputFile, this.createItem)
        : this.createItem("null");
    },
    createItem(fileName) {
      let params = {
        label: this.inputName,
      };

      if (this.data.requireBool) params.goodAnswer = this.inputBool ? 1 : 0;
      if (this.data.requireFile) params.imageLink = fileName;
      if (this.data.beforeId)
        params[`${this.data.beforeType}_id`] = this.data.beforeId;

      this.$request(
        "POST",
        `/questionnary/${this.data.type}`,
        params,
        {},
        () => true,
        `L'élement "${this.data.displayName.toLowerCase()}" a été créé !`,
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