<template>
  <v-dialog v-model="active" width="30%" persistent>
    <template v-slot:activator="{ on }">
      <v-btn class="white--text" flat v-on="on">Sign up</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">User Profile</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field label="Email" v-model="email" type="email" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Pseudo" v-model="pseudo" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Password" v-model="password" type="password" required></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="onCancel">Cancel</v-btn>
        <v-btn color="blue darken-1" flat @click="onSignUp">Sign Up</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      active: false,
      email: "",
      pseudo: "",
      password: ""
    };
  },
  methods: {
    onSignUp() {
      this.$request(
        "POST",
        "/users",
        {
          pseudo: this.pseudo,
          email: this.email,
          password: this.password
        },
        () => true,
        `Hello ${this.pseudo}, thanks for joining us!`,
        () => {
          this.$router.push("/game-choice");
          this.onCancel();
        },
        `${this.pseudo} account already exists!`,
        () => {}
      );
    },
    onCancel() {
      this.active = false;
    }
  }
};
</script>