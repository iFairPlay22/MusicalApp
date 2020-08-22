<template>
  <v-card class="px-8 py-4" flat color="white">
    <p class="text-center display-1 black--text">Edition</p>
    <v-card-subtitle>Type : {{ level.title }}</v-card-subtitle>

    <div v-if="level.requireBoolean">
      <v-checkbox v-if="level.requireBoolean" v-model="inputBoolean" label="Good answer"></v-checkbox>
      <div class="d-flex justify-space-between align-center">
        <v-file-input
          v-model="inputFile"
          color="black"
          :multiple="false"
          accept="image/*"
          label="File input"
        ></v-file-input>
        <v-btn icon color="black" outlined :disabled="fileId == ''" @click="openUrl" class="ml-5">
          <v-icon>mdi-eye</v-icon>
        </v-btn>
      </div>
    </div>
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
const sha1 = require("js-sha1");
export default {
  name: "TypeEditor",
  props: ["level", "parentId", "data"],
  data() {
    return {
      dialog: false,
      inputName: "",
      inputBoolean: false,
      inputFile: null,
      fileId: "",
    };
  },
  watch: {
    data(newVal) {
      if (newVal !== undefined) {
        this.inputName = newVal[this.level.name].slice();
        this.inputBoolean = newVal["goodAnswer"];
        this.fileId = newVal["image"];
      } else {
        this.inputName = "";
        this.inputBoolean = false;
        this.fileId = "";
      }
      this.inputFile = null;
    },
  },
  methods: {
    destroyPictureAndCallback(callback) {
      if (this.fileId == "") return callback();

      const timestamp = Date.now();
      const public_id = "Musical_App_Cloudinary/" + this.fileId;

      this.$request(
        "POST",
        `https://api.cloudinary.com/v1_1/dqzpiqo2q/image/destroy`,
        {
          api_key: "787883953883479",
          timestamp: timestamp,
          public_id: public_id,
          invalidate: true,
          signature: sha1(
            "invalidate=true&public_id=" +
              public_id +
              "&timestamp=" +
              timestamp +
              "j7qoVPHLHsEzVLwO0KszufFrM6E"
          ),
        },
        {},
        () => true,
        "Picture deleted!",
        () => {
          callback();
        },
        "An error occured!",
        (error) => {
          console.log(error);
        }
      );
    },

    destroyQuestion() {
      this.$request(
        "DELETE",
        this.level.url + "/" + this.data[this.level.nameId],
        {},
        {},
        () => true,
        "Item deleted!",
        () => {
          this.$emit("deleted");
        },
        "An error occured!",
        () => {}
      );
      this.dialog = false;
    },

    onDelete(valid) {
      if (!valid) {
        this.dialog = false;
        return;
      }

      return this.destroyPictureAndCallback(() => this.destroyQuestion());
    },

    updatePictureAndQuestion() {
      this.destroyPictureAndCallback(() => {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
          this.fileId = new Date()
            .toISOString()
            .replace(/[^0-9]/g, "")
            .slice(0, -3);
          let formData = new FormData();
          formData.append("upload_preset", "Musical_App_Cloudinary");
          formData.append("file", reader.result);
          formData.append("public_id", this.fileId);
          this.$request(
            "POST",
            `https://api.cloudinary.com/v1_1/dqzpiqo2q/image/upload`,
            {},
            formData,
            () => true,
            "Picture saved!",
            () => {
              this.updateQuestion(this.fileId);
            },
            "An error occured!",
            (error) => {
              console.log(error);
            }
          );
        });
        reader.readAsDataURL(this.inputFile[0]);
      });
    },

    updateQuestion(fileId) {
      let params = {
        label: this.inputName,
        imageLink: fileId == "" ? "null" : fileId,
      };

      if (this.level.requireBoolean)
        params["goodAnswer"] = this.inputBoolean ? 1 : 0;

      if (this.parentId !== null) params[this.level.before] = this.parentId;

      this.$request(
        "PUT",
        this.level.url + "/" + this.data[this.level.nameId],
        params,
        {},
        () => true,
        "Item modified!",
        () => {
          this.$emit("edited");
        },
        "An error occured!",
        () => {}
      );
    },

    onModify() {
      return this.inputFile != null && this.inputFile.length != 0
        ? this.updatePictureAndQuestion()
        : this.updateQuestion(this.fileId);
    },

    openUrl() {
      window.open(
        "http://res.cloudinary.com/dqzpiqo2q/image/upload/v1597937619/Musical_App_Cloudinary/" +
          this.fileId
      );
    },
  },
};
</script>

<style></style>
