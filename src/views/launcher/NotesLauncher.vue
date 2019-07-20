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
    name: 'NotesLauncher',
    data () {
      return {
        links: [
            {
                tag: "Théorie",
                link: "launcher/theory-notes"
            },
            {
                tag: "Pratique",
                link: "launcher/practice-notes"
            }
        ]
      }
    }
  }
</script>
