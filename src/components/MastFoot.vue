<template>
  <v-footer height="auto" color="rgb(219, 214, 214, 0.1)" class="white--text" :app="true">
    <v-layout justify-center row wrap>
        <v-btn
            v-for="link in links"
            :key="link.text"
            to="link.page"
            class="white--text"
            flat
            round
        >
            {{ link.text }}
        </v-btn>
        
        <div class="text-xs-center">
            <v-bottom-sheet v-model="sheet">
                <template v-slot:activator>
                    <v-btn
                        color="rgb(233, 51, 51, 0.8)"
                        dark
                        round
                    >
                        Share
                    </v-btn>
                </template>
                <v-list>
                    <v-subheader>Share in</v-subheader>
                    <v-list-tile
                        v-for="tile in tiles"
                        :key="tile.title"
                        @click="sheet = false"
                    >
                        <v-list-tile-avatar>
                            <v-avatar size="32px" tile>
                                <img
                                :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                                :alt="tile.title"
                                >
                            </v-avatar>
                        </v-list-tile-avatar>
                        <v-list-tile-title>
                            {{ tile.title }}
                        </v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-bottom-sheet>
        </div>


        <v-flex py-2 text-xs-center xs12>
            &copy;2018 — Bouquet / Devessier
        </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
  
  export default {
    name: 'MastFoot',
    data () {
      return {
        links: [
      {text: 'Home', page: "./"},
      {text: 'About Us', page: "./pages/AboutUs"},
      {text: 'Contact Us', page: "./pages/ContactUs"}
            ],
      sheet: false,
      tiles: [
        { img: 'keep.png', title: 'Keep' },
        { img: 'inbox.png', title: 'Inbox' },
        { img: 'hangouts.png', title: 'Hangouts' },
        { img: 'messenger.png', title: 'Messenger' }
            ]
      }
    }
  }
</script>
