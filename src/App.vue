<template>
  <v-app id="app">
    <mast-head />
    <v-content id="background">
      <router-view />
      <message-snackbar
        v-for="({ color, text, buttonText, timeout }, i) in snacks"
        :key="i"
        :color="color"
        :text="text"
        :buttonText="buttonText"
        :timeout="timeout"
        @close="onSnackClose(i)"
      />
    </v-content>
    <mast-foot />
  </v-app>
</template>

<script>
import MastHead from "@/components/bars/MastHead";
import MastFoot from "@/components/bars/MastFoot";
import MessageSnackbar from "@/components/messages/MessageSnackbar.vue";
import { getters, mutations } from "@/store.js";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    MastHead,
    MastFoot,
    MessageSnackbar
  },

  computed: {
    ...getters
  },

  methods: {
    ...mutations,
    onSnackClose(i) {
      this.removeSnack(this.snacks[i]);
    }
  }
};
</script>

<style>
#background {
  /* background: url("./assets/background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 100vh; */

  background-image: linear-gradient(
    to right top,
    #051937,
    #444964,
    #808195,
    #bfbec8,
    #ffffff
  ) !important;
}
</style>
