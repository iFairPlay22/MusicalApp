<template>
    <v-carousel
      height="100%"
      hide-delimiters
      :interval=10000
    >
      <v-carousel-item
        v-for="({title, tagLine, imageLink, page}, i) in items"
        :key="i"
        :src="imageLink"
      >
        <v-card-title 
          class="white--text display-1 justify-center mt-5 pt-5"
        >
          {{ title }}
        </v-card-title>
        <v-card-text 
          class="white--text text-xs-center pt-0">
          {{ tagLine }}
        </v-card-text>
        <v-container 
          grid-list-md
        >
          <v-layout 
            class="pt-5" 
            align-center
            justify-center
            fill-height
          >
            <v-btn 
              color="success"
              round
              large
              :to="page"
            >
              Play
            </v-btn>
          </v-layout>
        </v-container>
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
                title: "Notes",
                tagLine: "Lorem ipsum dolor si amet !",
                imageLink: require('../assets/GameChoice/Notes.jpg'),
                page: "notes-launcher"
            },
            {
                title: "Rythme",
                tagLine: "Lorem ipsum dolor si amet !",
                imageLink: require('../assets/GameChoice/Rythme.jpg'),
                page: "rythms-launcher"
            },
            {
                title: "Ecoute",
                tagLine: "Lorem ipsum dolor si amet !",
                imageLink: require('../assets/GameChoice/Ecoute.jpg'),
                page: "listen-launcher"
            },
            {
                title: "Histoire",
                tagLine: "Lorem ipsum dolor si amet !",
                imageLink: require('../assets/GameChoice/Histoire.jpg'),
                page: "history-launcher"
            }
        ]
      }
    }
  }
</script>