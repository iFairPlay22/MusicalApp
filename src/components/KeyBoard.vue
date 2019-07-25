<template>
    <v-container>
        <v-layout row align-center justify-center grid-list-md class="pt-5">
          <v-flex xs8 class="pl-5">
            <v-btn 
                v-for="({name}, i) in blackNotes"
                :key="i"
                color="transparent"
                :value="name"
                class="white--text"
            >
                {{ name }}
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row align-center justify-center>
          <v-flex xs8>
            <v-btn
                v-for="({name}, j) in whiteNotes"
                :key="j"
                color="rgb(255,255,255,0.9)"
                :value="name"
            >
                {{ name }}
            </v-btn>
          </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {blackNotes, whiteNotes} from "../files/notes.json";
    
    export default {
        name: "KeyBoard",
        data() {
            return {
                blackNotes,
                whiteNotes
            }
        }
    }
</script>

