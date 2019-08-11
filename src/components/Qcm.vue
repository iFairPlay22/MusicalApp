<template>
    <v-container 
        grid-list-md
      >
        <v-layout 
          align-center 
          fill-height
          wrap
        >
            <v-flex 
                xs12
            >
                <v-card-title>
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
                        
                        <v-radio-group 
                            :column=false 
                            v-model="radioGroup">
                            <v-radio
                                v-for="(proposition, i) in questionnary[i].propositions"
                                :key="i"
                                :value="i"
                                color="rgb(75, 219, 91, 0.8)"
                                dark
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
                            </v-radio>
                        </v-radio-group>
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
</template>

<script>
    class Questionnary {
        [
            {
                question: String,
                img: String,
                propositions: 
                [
                    String
                ],
                answer: Number
            }
        ]
    }
    export default {
        name: "Qcm",
        props: {
            questionnary: Questionnary
        },
        data() {
            return {
                radioGroup: -1,
                goodAnswers: 0,
                i: 0
            }
            
        },
        methods: {
            onValidation() {
                if (this.radioGroup === this.questionnary[this.i].answer) {
                    this.goodAnswers++;
                }
                if (this.i < this.questionnary.length - 1) {
                    this.i++;
                } else {
                    this.$emit('game-end', this.goodAnswers, this.questionnary.length);
                }
            }
        }
    }
</script>
