<template>
    <v-container grid-list-md >
        <v-layout row align-center justify-space-between>
          <v-flex>
            <v-btn
                v-for="({name, white}, i) in notes"
                :key="i"
                :color="black"
                :value="name"
                v-if="!white"
            >
            <v-btn
                v-for="({name, white}, i) in notes"
                :key="i"
                :color="white"
                :value="name"
                v-if="white"
            >
            </v-btn>
          </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "KeyBoard",
        data() {
            return {
                notes: [
                    {
                        name: "C",
                        fullName: "Do",
                        white: true
                    },
                    {
                        name: "C#",
                        fullName: "Do dièse",
                        white: false
                    },
                    {
                        name: "D",
                        fullName: "Ré",
                        white: true
                    },
                    {
                        name: "D#",
                        fullName: "Ré dièse",
                        white: false
                    },
                    {
                        name: "E",
                        fullName: "Mi",
                        white: true
                    },
                    {
                        name: "F",
                        fullName: "Fa",
                        white: true
                    },
                    {
                        name: "F#",
                        fullName: "Fa dièse",
                        white: false
                    },
                    {
                        name: "G",
                        fullName: "Sol",
                        white: true
                    },
                    {
                        name: "G#",
                        fullName: "Sol dièse",
                        white: false
                    },
                    {
                        name: "A",
                        fullName: "La",
                        white: true
                    },
                    {
                        name: "A#",
                        fullName: "La dièse",
                        white: false
                    },
                    {
                        name: "B",
                        fullName: "Si",
                        white: true
                    },
                ]
            }
        }
    }
</script>

