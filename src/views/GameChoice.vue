<template>
    <v-carousel
      height="100%"
      hide-delimiters
      :interval=10000
    >
      <v-carousel-item
        v-for="({mainTitle, tagLine, imageLink, choices}, i) in items"
        :key="i"
        :src="imageLink"
      >
        <v-card class="mt-5" color="transparent" height="100%">
            
                <v-card-title class="white--text justify-center display-1">
                  {{ mainTitle }}
                </v-card-title>
                <v-card-text class="white--text text-xs-center">
                  {{ tagLine }}
                </v-card-text>
                <v-card-actions>
                  <v-container 
                    grid-list-md
                  >
                    <v-layout 
                      align-center
                      justify-center
                      fill-height
                    >
                      <v-btn 
                        text
                        v-for="({title, page}, i) in choices"
                        :key="i"
                        color="success"
                        round
                        large
                        :to="page"
                        >
                          {{ title }}
                      </v-btn>
                    </v-layout>
                  </v-container>
                </v-card-actions>
            
        </v-card>
      </v-carousel-item>
    </v-carousel>
</template>

<script>

  export default {
    name: 'GameChoice',
    data () {
      return {
        items: [
            {
                mainTitle: "Notes",
                tagLine: "Lorem ipsum dolor si amet !",
                imageLink: require('../assets/GameChoice/Notes.jpg'),
                choices: [
                  {
                    title: "Theory",
                    page: "theory-notes"
                  },
                  {
                    title: "Practice",
                    page: "practice-notes"
                  }
                ]
            },
            {
                mainTitle: "Rythme",
                tagLine: "Lorem ipsum dolor si amet !",
                imageLink: require('../assets/GameChoice/Rythme.jpg'),
                choices: [
                  {
                    title: "Theory",
                    page: "theory-rythms"
                  },
                  {
                    title: "Practice",
                    page: "practice-rythms"
                  }
                ]
            },
            {
                mainTitle: "Ecoute",
                tagLine: "Lorem ipsum dolor si amet !",
                imageLink: require('../assets/GameChoice/Ecoute.jpg'),
                choices: [
                  {
                    title: "Play",
                    page: "listen-launcher"
                  }
                ]
            },
            {
                mainTitle: "Histoire",
                tagLine: "Lorem ipsum dolor si amet !",
                imageLink: require('../assets/GameChoice/Histoire.jpg'),
                choices: [
                  {
                    title: "Play",
                    page: "history-launcher"
                  }
                ]
            }
        ]
      }
    }
  }
</script>