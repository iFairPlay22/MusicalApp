<template>
      <v-container grid-list-md>
        <v-layout 
          align-center 
          fill-height
        >
          <v-flex
              xs4 
              v-for="({name, bio, imageLink}, i) in cardContent"
              :key="i"
          >
            <v-card height="350px">
              <v-img
                cover
                class="white--text"
                height="200px"
                :src="imageLink"
                alt="cardIcon"
              >
              </v-img>
                <v-card-title class="grey--text title ml-0 mr-0 mb-2 mt-2 pa-0 justify-center"> 
                  {{ name }}
                </v-card-title>
                <v-card-text class="pb-0 pt-0">
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
            bio: "En tant que professeur de piano, j'ai créé une méthode pédagogique basée sur les intelligences multiples. Celle-ci porte ses fruits, mes élèves s'épanouissant musicalement sous la forme souhaitée.",
            imageLink: require("../assets/AboutUs/MarcDenouel.jpg")
          },
          {
            name: "Ewen Bouquet",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imageLink: require("../assets/AboutUs/EwenBouquet.jpg")
          },
          {
            name: "Baptiste Devessier",
            bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            imageLink: require("../assets/AboutUs/BaptisteDevessier.jpg")
          }
        ]
      }
    }
  }
</script>