<template>
    <div class="white--text title">
        <v-container 
          grid-list-md
        >
          <v-layout 
            class="pt-5" 
            align-center
            justify-center
            column
            fill-height
          >
            <v-card-title>
            {{ questionnary[i].question }}
            </v-card-title>
            <v-flex
                row
                v-for="(proposition, i) in questionnary[i].propositions"
                :key="i"
            >
                <v-checkbox
                    v-model="checkbox"
                    dark
                    color="rgb(75, 219, 91, 0.8)"
                    :label="proposition"
                >
                </v-checkbox>
            </v-flex>
            <v-btn 
                round 
                color="rgb(219, 214, 214, 0.2)" 
                class="white--text"
            >
                Send
            </v-btn>
          </v-layout>
        </v-container>
    </div>

</template>

<script>
    export default {
        name: "NotesTheoryGame",
        data() {
            return {
                inGame: true,
                i: 0,
                questionnary: 
                [
                    {
                        question: "A quoi corresponds cette note ?",
                        img: "",
                        propositions: 
                        [
                            "Do",
                            "Ré",
                            "Mi",
                            "Fa"
                        ],
                        answers:
                        [
                            0,
                            1
                        ]
                    },
                    {
                        question: "A quoi corresponds cette note ?",
                        img: undefined,
                        answers: 
                        [
                            "Do",
                            "Ré",
                            "Mi",
                            "Fa"
                        ],
                        goodAnswers:
                        [
                            0
                        ]
                    }
                ]
            }
            
        }
    }
</script>
