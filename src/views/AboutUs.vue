<template>
 <v-container grid-list-md class="container">
    <v-layout align-center justify-center space-around column fill-height>
        <v-card v-for="({name, title, text, imageLink}, i) in cardContent" :key="i" color="rgba(145,145,145,.3)" class="white--text mb-5">
            <v-card-title>
                <v-icon large left color="white">
                    chevron_right
                </v-icon>
                <span class="font-weight-light headline" style="border-bottom: 1px solid white">
                    {{ title }}
                </span>
            </v-card-title>
            <v-card-text class="headline justify-center">
                {{ text }}
            </v-card-text>
            <v-card-text>
            <v-icon large left color="white">
                account_circle
              </v-icon>
            <span class="title">
                {{ name }}
            </span>
            </v-card-text>
        </v-card>
    </v-layout>
 </v-container>
</template>

<script>

  export default {
    name: 'AboutUs',
    data () {
      return {
        cardContent: [
          {
            name: "Marc Denouel",
            title: "MusicalApp",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
            imageLink: require("../assets/AboutUs/MarcDenouel.jpg")
          },
          {
            name: "Ewen Bouquet",
            title: "MusicalApp",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
            imageLink: require("../assets/AboutUs/EwenBouquet.jpg")
          }
        ]
      }
    }
  }
</script>