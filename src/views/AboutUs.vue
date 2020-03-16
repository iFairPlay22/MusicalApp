<template>
  <v-container grid-list-md class="container">
    <v-layout align-center justify-center space-around column fill-height>
      <v-card
        v-for="({name, title, text, imageLink}, i) in cardContent"
        :key="i"
        color="rgba(145,145,145,.3)"
        class="white--text mb-5"
        style="max-width: 70%"
      >
        <v-card-title>
          <v-icon large left color="white">chevron_right</v-icon>
          <span
            class="font-weight-light headline"
            style="border-bottom: 1px solid white"
          >{{ title }}</span>
        </v-card-title>
        <v-card-text class="headline justify-center text-justify">{{ text }}</v-card-text>
        <v-card-text class="d-flex">
          <v-icon large left color="white" style="max-width: 50px">account_circle</v-icon>
          <div class="title d-flex align-center">{{ name }}</div>
        </v-card-text>
      </v-card>
    </v-layout>
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
          title: "Professeur de musique au conservatoire",
          text:
            "En tant que professeur de piano, j'ai pu créer et appliquer une methode d'apprentissage pas comme les autres. J'ai eu l'idée de créer ce site pour l'appliquer.",
          imageLink: require("../assets/AboutUs/MarcDenouel.jpg")
        },
        {
          name: "Ewen Bouquet",
          title: "Développeur de l'application",
          text:
            "Je suis étudiant en 2 ème année de DUT Informatique et j'ai réalisé ce site sous la demande de Marc.",
          imageLink: require("../assets/AboutUs/EwenBouquet.jpg")
        }
      ]
    };
  }
};
</script>