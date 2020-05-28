<template>
  <v-app-bar app absolute dense dark color="rgb(0, 0, 0, 1)">
    <v-toolbar-items>
      <v-btn class="white--text" text @click="redirect('/')">Musical App</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        v-for="({ text, page }, i) in links"
        :key="i"
        @click="redirect(page)"
        class="white--text"
        text
        >{{ text }}</v-btn
      >

      <v-btn class="white--text" text @click="login = true">Log In</v-btn>
      <div data-app>
        <LogIn @cancel="login = false" :active="login" />
      </div>
      <v-btn class="white--text" text @click="signup = true">Sign up</v-btn>
      <div data-app>
        <SignUp @cancel="signup = false" :active="signup" />
      </div>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import LogIn from "@/components/bars/logging/LogIn";
import SignUp from "@/components/bars/logging/SignUp";

export default {
  name: "MastHead",
  components: {
    SignUp,
    LogIn,
  },
  data() {
    return {
      login: false,
      signup: false,
      links: [
        {
          text: "About Us",
          page: "/about-us",
        },
      ],
    };
  },
  methods: {
    redirect(link) {
      this.$router.push(link);
    },
  },
};
</script>
