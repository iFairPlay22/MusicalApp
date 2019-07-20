<template>
    <v-container 
        grid-list-md
      >
        <v-layout 
          align-center 
          justify-space-around
          fill-height
        >
        <v-btn 
            v-for="({tag, link}, i) in links"
            :key="i"
            color="success"
            round
            large
            :to="link"
        >
            {{ tag }}
        </v-btn>

        </v-layout>
    </v-container>
</template>

<script>

  export default {
    name: 'RythmsLauncher',
    data () {
      return {
        links: [
            {
                tag: "Théorie",
                link: "game/theory-rythms"
            },
            {
                tag: "Pratique",
                link: "game/practice-rythms"
            }
        ]
      }
    }
  }
</script>
