<template>
  <v-container
    fluid
    style="height: 100%;"
    class="d-flex flex-column justify-space-around align-center"
  >
    <v-card
      v-for="({ name, title, text, imageLink }, i) in cardContent"
      :key="i"
      style="max-width: 50%"
      color="rgba(145,145,145,.3)"
      class="white--text mb-5"
    >
      <v-card-title>
        <v-icon large left color="white">chevron_right</v-icon>
        <span
          class="font-weight-light headline"
          style="border-bottom: 1px solid white"
          >{{ title }}</span
        >
      </v-card-title>
      <v-card-text class="headline justify-center text-justify">{{
        text
      }}</v-card-text>
      <v-card-text class="d-flex">
        <v-icon large left color="white" style="max-width: 50px"
          >account_circle</v-icon
        >
        <div class="title d-flex align-center">{{ name }}</div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      cardContent: [
        {
          name: "Marc Denouel",
          title: "Professeur de musique",
          text:
            "En tant que professeur de piano, j'ai pu créer et appliquer une methode d'apprentissage pas comme les autres. J'ai eu l'idée de créer ce site pour l'appliquer.",
          imageLink: require("@/assets/AboutUs/MarcDenouel.jpg"),
        },
        {
          name: "Ewen Bouquet",
          title: "Développeur",
          text:
            "Apprenti à l'école d'ingénieurs ESIEE Paris en filière Informatique et applications",
          imageLink: require("@/assets/AboutUs/EwenBouquet.jpg"),
        },
      ],
    };
  },
};
</script>
