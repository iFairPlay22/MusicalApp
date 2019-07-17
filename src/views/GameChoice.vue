<template>
    <v-carousel>
      <v-carousel-item
        v-for="(imageLink, i) in items"
        :key="i"
        :src="imageLink"
      >
        <h1>
            {{ imageLink }}
        </h1>
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
                imageLink: require('../assets/GameChoice/Notes.jpg')
            },
            {
                imageLink: require('../assets/GameChoice/Rythme.jpg')
            },
            {
                imageLink: require('../assets/GameChoice/Ecoute.jpg')
            },
            {
                imageLink: require('../assets/GameChoice/Histoire.jpg')
            }
        ]
      }
    }
  }
</script>