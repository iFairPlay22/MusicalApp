<template>
    <v-container>
        <v-layout row align-center justify-center grid-list-md class="pt-5">
          <v-flex 
            xs1
            v-for="({name}, i) in blackNotes"
            :key="i"
        >
            <v-btn 
                color="rgb(0,0,0,0.9)"
                :value="name"
                class="white--text"
            >
                {{ name }}
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row align-center justify-center>
          <v-flex 
            xs1
            v-for="({name}, j) in whiteNotes"
            :key="j"
          >
            <v-btn
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

