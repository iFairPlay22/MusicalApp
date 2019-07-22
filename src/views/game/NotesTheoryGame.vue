<template>
    <div class="white--text title">
        <v-container 
          grid-list-md
        >
          <v-layout
            v-if="inGame" 
            class="pt-5" 
            align-center
            justify-center
            row 
            wrap
          >
            <v-flex 
                xs12
            >
                <v-card-title class="">
                    <h2 class="mx-auto">
                        {{ questionnary[i].question }}
                    </h2>
                </v-card-title>
            </v-flex>
            <v-flex 
                xs12
            >
                <v-img
                    v-if="questionnary[i].img !== undefined"
                    :src="questionnary[i].img"
                    max-width="200px"
                    max-height="200px"
                    contain
                    class="mx-auto"
                >
                </v-img>
            </v-flex>
            <v-flex xs12>
                <v-layout 
                    align-center
                    justify-center
                    wrap
                >
                    <v-flex 
                        xs4
                    >
                        <v-layout 
                            align-center
                            justify-center
                            wrap
                        >
                            <v-checkbox
                                v-for="(proposition, i) in questionnary[i].propositions"
                                :key="i"
                                v-model="checkbox"
                                dark
                                color="rgb(75, 219, 91, 0.8)"
                            >
                                <template 
                                    v-slot:label
                                > 
                                    <div 
                                        class="white--text"
                                    >
                                        {{ proposition }} 
                                    </div>
                                </template>
                            </v-checkbox>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex 
                xs12
            >
                <v-layout 
                    justify-center
                >
                    <v-btn 
                        round 
                        color="rgb(219, 214, 214, 0.2)" 
                        class="white--text"
                        @click="onValidation"
                    >
                        Send
                    </v-btn>
                </v-layout>
            </v-flex>
          </v-layout>
        </v-container>

        <v-container 
          grid-list-md
        >
          <v-layout
            v-if="!inGame" 
            class="pt-5" 
            align-center
            justify-center
            row 
            wrap
          >
            <v-flex 
                xs12
            >
                <v-card-title class="">
                    <h2 class="mx-auto">
                        Fin du jeu
                    </h2>
                </v-card-title>
            </v-flex>
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
                        img: require("../../assets/Game/TheoryNotes/note.png"),
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
                        propositions: 
                        [
                            "Do",
                            "Ré",
                            "Mi",
                            "Fa"
                        ],
                        answers:
                        [
                            0
                        ]
                    }
                ]
            }
            
        },
        methods: {
            onValidation() {
                if (this.i < this.questionnary.length - 1) {
                    this.i++;
                } else {
                    this.inGame = false;
                }
            }
        }
    }
</script>
