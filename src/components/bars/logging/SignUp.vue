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
                label="Email"
                v-model="email"
                type="email"
                required
              ></v-text-field>
            </v-flex>
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
                v-model="password"
                type="password"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="onCancel">Cancel</v-btn>
        <v-btn color="blue darken-1" text @click="onSignUp">Sign Up</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "SignUp",
  props: ["active"],
  data() {
    return {
      email: "",
      pseudo: "",
      password: "",
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
          password: this.password,
        },
        () => true,
        `Hello ${this.pseudo}, thanks for joining us!`,
        () => {
          this.$router.push("/game-choice");
          this.onCancel();
        },
        `${this.pseudo} can't be create!`,
        () => {}
      );
    },
    onCancel() {
      this.$emit("cancel");
    },
  },
};
</script>
