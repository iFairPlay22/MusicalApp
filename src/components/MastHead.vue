<template>
  <v-toolbar 
    color="rgb(219, 214, 214, 0.3)" 
    flat 
    scroll-off-screen 
    app
  >
    <v-toolbar-side-icon class="white--text"></v-toolbar-side-icon>
    <v-btn 
      class="white--text"
      flat
      to="/"
    >
      {{ applicationName }}
    </v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        v-for="({ text, page }, i) in links"
        :key="i"
        :to="page"
        class="white--text"
        flat
      >
        {{ text }}
      </v-btn>

        <v-dialog 
          v-model="logInDialog" 
          width="30%" 
          persistent
        >
          <template v-slot:activator="{ on }">
            <v-btn 
              class="white--text" 
              flat 
              v-on="on"
            >
              Log In
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">User Profile</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12>
                   <v-text-field label="Pseudo" v-model="pseudo" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Password" type="password" required></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="onCancel">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click="onLogIn">Log In</v-btn>              
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="signUpDialog" width="30%" persistent>
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
                    <v-text-field label="Email" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                   <v-text-field label="Pseudo" v-model="pseudo" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Password" type="password" required></v-text-field>
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

    </v-toolbar-items>

    <v-snackbar v-model="logInSnackbar" :multi-line="true" :timeout="5000" :top="true">
      Hello {{ pseudo }}, we are happy to see you again !
      <v-btn color="rgb(233, 51, 51, 0.8)" flat @click="logInSnackbar = false">
        Close
      </v-btn>
    </v-snackbar>

    <v-snackbar v-model="signUpSnackbar" :multi-line="true" :timeout="5000" :top="true">
      Hello {{ pseudo }}, thanks for joining us !
      <v-btn color="rgb(233, 51, 51, 0.8)" flat @click="signUpSnackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'MastHead',
    data () {
      return {
        applicationName: "Musical App",
        links: [
          {
            text: "About Us",
            page: "/about-us"
          }
        ],
        signUpDialog: false,
        signUpSnackbar: false,
        logInDialog: false,
        logInSnackbar: false,
        pseudo: ""
      }
    }, 
    methods: {
      onSignUp() {
        this.signUpSnackbar = true;
        this.onCancel();
      },
      onLogIn() {
        this.logInSnackbar = true;
        this.onCancel();
      },
      onCancel() {
        this.logInDialog = false;
        this.signUpDialog = false;
      }
    }
  }
</script>