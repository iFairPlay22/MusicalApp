<template>
  <v-dialog width="400px" persistent v-model="active">
    <v-card>
      <v-card-title>
        <span class="headline">Log In</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field label="Pseudo" v-model="pseudo" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Password" type="password" v-model="password" required></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="onCancel">Cancel</v-btn>
        <v-btn color="blue darken-1" text @click="onLogIn">Log In</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import json from "@/assets/.password.json";
import { mutations } from "@/store.js";

const USER = json["user"];
const PASSWORD = json["password"];

export default {
  name: "Login",
  props: ["active"],
  data() {
    return {
      pseudo: "",
      password: "",
    };
  },
  methods: {
    onLogIn() {
      if (this.pseudo == USER && this.password == PASSWORD) {
        mutations.connect();
        this.$router.push("/questionnary-manager");
      }

      this.onCancel();
    },
    onCancel() {
      this.pseudo = "";
      this.password = "";
      this.$emit("cancel");
    },
  },
};
</script>
