<template>
  <v-bottom-navigation app absolute dense dark class="transparent white--text">
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
        >{{ text }}</v-btn>
      </div>

      <p style="text-align: center;">&copy;2020 — Ewen Bouquet</p>
    </div>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "MastFoot",
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
    };
  },
  methods: {
    redirect(link) {
      this.$router.push(link);
    },
  },
};
</script>
