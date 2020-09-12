<template>
  <v-card class="px-8 py-4" flat color="white">
    <div>
      <v-subheader class="display-1 my-5">
        <v-btn icon color="black" outlined @click="cancel">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <span class="ml-5">Edition - {{ data.type }}</span>
      </v-subheader>
    </div>
    <v-form>
      <v-checkbox v-if="data.requireBool" v-model="inputBool" label="Good answer"></v-checkbox>
      <div v-if="data.requireFile" class="d-flex justify-space-between align-center">
        <v-file-input
          v-model="inputFile"
          color="black"
          :multiple="false"
          accept="image/*"
          label="File input"
        ></v-file-input>
        <v-btn
          icon
          color="black"
          outlined
          :disabled="!data.file"
          @click="openImage(data.file)"
          class="ml-5"
        >
          <v-icon>mdi-eye</v-icon>
        </v-btn>
      </div>
    </v-form>

    <div class="d-flex justify-space-around align-center">
      <v-text-field v-model="inputName" :placeholder="data.name"></v-text-field>
      <v-card-actions>
        <v-spacer />
        <v-btn class="ml-5" icon color="green" outlined @click="update" :disabled="!isValid">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
import { openImage, replaceImage } from "@/cloudinary.js";

export default {
  name: "Editor",
  props: {
    data: Object,
  },
  data() {
    return {
      isValid: false,
      inputName: this.data.name.slice(),
      inputFile: null,
      inputBool: this.data.bool,
    };
  },
  watch: {
    data(newVal) {
      this.isValid = false;
      this.inputFile = null;
      if (!newVal) {
        this.inputName = newVal.name.slice();
        this.inputBool = newVal.bool;
      } else {
        this.inputName = "";
        this.inputBool = false;
      }
    },
    inputName(newVal) {
      if (
        newVal &&
        0 < newVal.length &&
        newVal.length < this.data.lengthLimit &&
        (newVal != this.data.name ||
          (this.data.requireFile &&
            this.inputFile &&
            this.inputFile.length != 0) ||
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
    update() {
      return this.inputFile && this.inputFile.length != 0
        ? replaceImage(
            this.$request,
            this.data.file,
            this.inputFile,
            this.updateItem
          )
        : this.updateItem("null");
    },
    updateItem(fileName) {
      let params = {
        label: this.inputName,
      };

      if (this.data.requireBool) params.goodAnswer = this.inputBool ? 1 : 0;
      if (this.data.requireFile) params.imageLink = fileName;
      if (this.data.beforeId)
        params[`${this.data.beforeType}_id`] = this.data.beforeId;

      this.$request(
        "PUT",
        `/questionnary/${this.data.type}/${this.data.id}`,
        params,
        {},
        () => true,
        `L'élement "${this.data.displayName.toLowerCase()}" a été modifié !`,
        () => {
          this.$emit("edited");
        },
        "Une erreur est survenue !",
        () => {}
      );
    },
    openImage(id) {
      openImage(id);
    },
  },
};
</script>

<style>
</style>