<template>
  <v-bottom-navigation
    app
    absolute
    dense
    dark
    style="background-color:black"
    class="green white--text"
  >
    <div class="d-flex flex-column align-center justify-space-between">
      <div
        class="d-flex flex-row flew-wrap justify-center align-center"
        style="padding-top: 5px; padding-bottom: 3px"
      >
        <v-btn
          v-for="({ page, text }, i) in links"
          :key="i"
          @click="redirect(page)"
          text
          icon
          >{{ text }}</v-btn
        >
        <v-btn text icon dark @click="share = true">Share</v-btn>
        <Share @cancel="share = false" v-if="share" />
      </div>

      <p style="text-align: center;">
        &copy;2019 — Ewen Bouquet
      </p>
    </div>
  </v-bottom-navigation>
</template>

<script>
import Share from "./sharing/Share";

export default {
  name: "MastFoot",
  components: { Share },
  data() {
    return {
      links: [
        {
          text: "Home",
          page: "./",
        },
        {
          text: "About Us",
          page: "/about-us",
        },
      ],
      share: false,
    };
  },
  methods: {
    redirect(link) {
      this.$router.push(link);
    },
  },
};
</script>
