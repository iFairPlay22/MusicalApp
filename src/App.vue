<template>
  <div id="app">
    <v-app id="content">
      <mast-head />

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

      <mast-foot />
    </v-app>
  </div>
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
#content {
  background: url("./assets/background.jpg");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
</style>