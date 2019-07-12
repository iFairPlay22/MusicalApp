<template>
  <v-toolbar color="rgb(219, 214, 214, 0.3)" flat scroll-off-screen>
    <v-toolbar-side-icon class="white--text"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text"> 
      {{ applicationName }} 
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        v-for="link in links"
        :key="link"
        class="white--text"
        flat
      >
        {{ link }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'MastHead',
    data () {
      return {
        applicationName: "Musical App",
        links: [
      'Contact us',
      'Log in',
      'Sign up'
        ]
      }
    }
  }
</script>