<template>
  <div class="d-flex justify-space-around mb-6 my-auto">
      <v-card v-for="({name, bio, imageLink}, i) in cardContent" :key="i" color="rgb(255, 255, 255, 0.95)" max-width="400px" min-width="300px">
        <v-img
          cover
          class="white--text top-image"
          height="200px"
          position="top center"
          :src="imageLink"
          alt="cardIcon"
        >
        </v-img>
          <v-card-title class="grey--text title ml-0 mr-0 mb-2 mt-2 pa-0 justify-center"> 
            {{ name }}
          </v-card-title>
          <v-card-text class="pb-3 pt-0" >
            {{ bio }}
          </v-card-text>
      </v-card>
  </div>
</template>

<script>

  export default {
    name: 'AboutUs',
    data () {
      return {
        cardContent: [
          {
            name: "Marc Denouel",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
            imageLink: require("../assets/AboutUs/MarcDenouel.jpg")
          },
          {
            name: "Ewen Bouquet",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
            imageLink: require("../assets/AboutUs/EwenBouquet.jpg")
          }
        ]
      }
    }
  }
</script>