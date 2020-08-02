<template>
  <v-app-bar app absolute dense dark color="transparent">
    <v-toolbar-items>
      <v-btn class="white--text" text @click="redirect('/')">Musical App</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn class="green ma-1s white--text" text @click="login = true">Login</v-btn>
    <div data-app>
      <LogIn @cancel="login = false" :active="login" />
    </div>
  </v-app-bar>
</template>

<script>
import LogIn from "@/components/logging/LogIn";

export default {
  name: "MastHead",
  components: {
    LogIn
  },
  data() {
    return {
      login: false
    };
  },
  methods: {
    redirect(link) {
      this.$router.push(link);
    }
  }
};
</script>
