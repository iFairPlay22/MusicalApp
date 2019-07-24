<template>
   <v-container 
        grid-list-md
      >
        <v-layout
            align-center
            justify-center
            fill-height
            row
            wrap
        >
        <v-flex 
            xs12
        >
            <v-card-title>
                <h2 class="mx-auto">
                    Fin du jeu
                </h2>
            </v-card-title>
            <v-card-title>
                <h3 class="mx-auto">
                    Vous avez {{ goodAnswers }} bonnes réponses sur {{ nbQuestions }} !
                </h3>
            </v-card-title>
            <v-layout
                justify-center
            >
                <v-btn
                    color="rgb(219, 214, 214, 0.2)" 
                    class="white--text"
                    round
                    large
                    v-for="({text, link}, i) in buttons"
                    :key="i"
                    :to="link"
                >
                    {{ text }}
                </v-btn>
            </v-layout>
        </v-flex>
        </v-layout>
   </v-container>
</template>

<script>
    export default {
        name: "GameEndMessage",
        props: {
            goodAnswers: Number,
            nbQuestions: Number
        },
        data() {
            return {
                buttons: 
                [
                    {
                        text: "Retry",
                        link: ""
                    },
                    {
                        text: "Quit",
                        link: ""
                    }
                ]
            }
        }
    }
</script>