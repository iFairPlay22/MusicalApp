<template>
  <v-dialog width="30%" persistent v-model="active">
    <v-card>
      <v-card-title>
        <span class="headline">User Profile</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field
                label="Pseudo"
                v-model="pseudo"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                label="Password"
                type="password"
                v-model="password"
                required
              ></v-text-field>
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
      this.$request(
        "GET",
        "/users/login",
        {
          pseudo: this.pseudo,
          password: this.password,
        },
        (data) => data === true,
        `Hello ${this.pseudo}, we are happy to see you again!`,
        (data) => {
          console.log("yes", data);
          this.$router.push("/game-choice");
          this.onCancel();
        },
        `${this.pseudo} account does not exists!`,
        (data) => {
          console.log("no", data);
        }
      );
    },
    onCancel() {
      this.$emit("cancel");
    },
  },
};
</script>
