<template>
  <v-app-bar app absolute dense dark color="transparent">
    <v-toolbar-items>
      <v-btn class="white--text" text @click="redirect('/')">Musical App</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn
      color="#444964"
      class="ma-1"
      text
      @click="isConnected ? logout() : openDialog()"
    >{{ isConnected ? 'Logout' : 'Login' }}</v-btn>
    <div data-app>
      <LogIn @cancel="login = false" :active="login" />
    </div>
  </v-app-bar>
</template>

<script>
import { getters, mutations } from "@/store.js";
import LogIn from "@/components/logging/LogIn";

export default {
  name: "MastHead",
  components: {
    LogIn,
  },
  computed: {
    ...getters,
  },
  data() {
    return {
      login: false,
    };
  },
  methods: {
    redirect(link) {
      this.$router.push(link).catch(() => {});
    },
    openDialog() {
      this.login = true;
    },
    logout() {
      this.disconnect();
      this.redirect("/");
    },
    ...mutations,
  },
};
</script>
