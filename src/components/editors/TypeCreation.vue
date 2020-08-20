<template>
  <v-card class="px-8 py-4" flat color="white">
    <p class="text-center display-1 black--text">Création</p>

    <v-card-subtitle>Type : {{level.title}}</v-card-subtitle>
    <div v-if="level.requireBoolean">
      <v-checkbox v-model="inputBoolean" label="Good answer"></v-checkbox>
      <v-file-input
        v-model="inputFile"
        color="black"
        :multiple="false"
        accept="image/*"
        label="File input"
      ></v-file-input>
    </div>
    <div class="d-flex justify-space-around align-center">
      <v-text-field v-model="inputName" placeholder="Label"></v-text-field>
      <v-card-actions>
        <v-spacer />
        <v-btn
          class="ml-5"
          icon
          color="green"
          outlined
          @click="onCreate"
          :disabled="inputName == ''"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "TypeCreation",
  components: {},
  props: ["level", "parentId"],
  data() {
    return {
      inputName: "",
      inputBoolean: false,
      inputFile: null,
    };
  },
  methods: {
    savePictureAndQuestion() {
      let reader = new FileReader();

      reader.addEventListener("load", () => {
        let formData = new FormData();
        formData.append("upload_preset", "Musical_App_Cloudinary");
        formData.append("file", reader.result);

        this.$request(
          "POST",
          `https://api.cloudinary.com/v1_1/dqzpiqo2q/image/upload`,
          {},
          formData,
          () => true,
          "Picture saved!",
          (response) => {
            this.saveQuestion(response.url);
          },
          "An error occured!",
          (error) => {
            console.log(error);
          }
        );
      });

      reader.readAsDataURL(this.inputFile[0]);
    },
    saveQuestion(fileUrl) {
      let params = { label: this.inputName, imageLink: fileUrl };

      if (this.level.requireBoolean)
        params["goodAnswer"] = this.inputBoolean ? 1 : 0;

      if (this.parentId !== null) params[this.level.before] = this.parentId;

      this.$request(
        "POST",
        this.level.url,
        params,
        {},
        () => true,
        "Item created!",
        () => {
          this.$emit("created");
        },
        "An error occured!",
        () => {}
      );
    },

    onCreate() {
      return this.inputFile.length != 0
        ? this.savePictureAndQuestion()
        : this.saveQuestion("null");
    },
  },
};
</script>

<style>
</style>