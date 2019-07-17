<template>
      <v-container grid-list-md>
        <v-layout>
          <v-flex 
              xs4 
              v-for="({name, title, bio, imageLink}, i) in cardContent"
              :key="i">
            <v-card>
              <v-img
                class="white--text"
                height="200px"
                :src="require(imageLink)"
                alt="photo de Marc Denouel"
              >
                <v-container 
                  fill-height 
                  fluid 
                  text-xs-center
                >
                  <v-layout 
                    fill-height
                  >
                    <v-flex 
                      xs12 
                      flexbox
                    >
                      <h1 class="headline"> 
                        {{ name }}
                      </h1>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
              <v-card-title>
                <div>
                  <span class="grey--text"> 
                    {{ title }}  
                  </span><br>
                  <span> 
                    {{ bio }}
                  </span>
                </div>
              </v-card-title>
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
            title: "Professeur de musique",
            bio: "En tant que professeur de piano, j'ai créé une méthode pédagogique basée sur les intelligences multiples. Celle-ci porte ses fruits, mes élèves s'épanouissant musicalement sous la forme souhaitée.",
            imageLink: "../assets/AboutUs/MarcDenouel.jpg"
          },
          {
            name: "Ewen Bouquet",
            title: "Etudiant en DUT informatique",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imageLink: "../assets/AboutUs/EwenBouquet.jpg"
          },
          {
            name: "Baptiste Devessier",
            title: "Etudiant à l'école 42",
            bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            imageLink: "../assets/AboutUs/BaptisteDevessier.jpg"
          }
        ]
      }
    }
  }
</script>