<template>
      <v-container 
        grid-list-md
      >
        <v-layout 
          align-center 
          fill-height
          wrap
        >
          <v-flex
              lg4 
              sm6
              xs12
              v-for="({name, bio, imageLink}, i) in cardContent"
              :key="i"
          >
            <v-card> <!-- height="350px" -->
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
                <v-card-text class="pb-3 pt-0">
                  {{ bio }}
                </v-card-text>
            </v-card>
          </v-flex>
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
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
            imageLink: require("../assets/AboutUs/MarcDenouel.jpg")
          },
          {
            name: "Ewen Bouquet",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
            imageLink: require("../assets/AboutUs/EwenBouquet.jpg")
          },
          {
            name: "Baptiste Devessier",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
            imageLink: require("../assets/AboutUs/BaptisteDevessier.jpg")
          }
        ]
      }
    }
  }
</script>