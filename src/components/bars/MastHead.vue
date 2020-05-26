<template>
  <v-toolbar color="rgb(219, 214, 214, 0.3)" flat scroll-off-screen app>
    <v-toolbar-side-icon class="white--text"></v-toolbar-side-icon>
    <v-btn class="white--text" flat to="/">Musical App</v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        v-for="({ text, page }, i) in links"
        :key="i"
        :to="page"
        class="white--text"
        flat
      >{{ text }}</v-btn>
      <LogIn />
      <SignUp />
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import LogIn from "@/components/bars/logging/LogIn";
import SignUp from "@/components/bars/logging/SignUp";

export default {
  name: "MastHead",
  components: {
    SignUp,
    LogIn
  },
  data() {
    return {
      links: [
        {
          text: "About Us",
          page: "/about-us"
        }
      ]
    };
  }
};
</script>