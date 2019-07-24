<template>
  <div id="app">
    <v-app id="content">
      
      <mast-head/>

      <router-view/>
      
    </v-app>
  </div>
</template>

<script>
  import MastHead from './components/MastHead';

  export default {
    name: 'App',
    data () {
      return {
        
      }
    },
    components: {
      MastHead
    }
  }
</script>

<style>
    #content {
      background: url('./assets/background.jpg');
      height: 100vh;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
    }
</style>