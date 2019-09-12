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
                    v-if="questionnary[i].image !== undefined"
                    :src="questionnary[i].image"
                    max-width="200px"
                    max-height="200px"
                    contain
                    class="mx-auto"
                />
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
                                v-for="({proposition, image, goodAnswer}, j) in questionnary[i].propositions"
                                :key="j"
                                :value="goodAnswer"
                                color="rgb(75, 219, 91, 0.8)"
                                dark
                            >
                                <template 
                                    v-slot:label
                                > 
                                    <v-item-group>
                                        <v-item v-slot:default="{ active, toggle }" class="text-right">
                                            <v-img
                                                v-if="image !== undefined"
                                                :src="image"
                                                width="100px"
                                                height="100px"
                                                contain
                                                class="mx-auto"
                                            >
                                                <span 
                                                    class="white--text"
                                                >
                                                    {{ proposition }} 
                                                </span>
                                            </v-img>
                                            <span 
                                                v-else
                                                class="white--text"
                                            >
                                                {{ proposition }} 
                                            </span>
                                        </v-item>
                                    </v-item-group>
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
        <v-snackbar v-model="onGoodAnswer" :multi-line="true" :timeout="2000" :top="true" color="success">
            <span>
                Good answer !
            </span>
            <v-btn color="white" flat @click="onGoodAnswer = false">
                Close
            </v-btn>
        </v-snackbar>
        <v-snackbar v-model="onBadAnswer" :multi-line="true" :timeout="2000" :top="true" color="error">
            <span>
                Bad answer ! It was: 
            </span>
            <ul
                v-for="(answer, i) in goodAnswers"
                :key="i"
            >
                <li>
                        {{ answer }}
                </li>
            </ul>
            <v-btn color="white" flat @click="onBadAnswer = false">
                Close
            </v-btn>
        </v-snackbar>
    </v-container>
</template>

<script>
    export default {
        name: "Qcm",
        props: {
            questionnary: Array
        },
        data() {
            return {
                radioGroup: -1,
                goodAnswersNumber: 0,
                i: 0,

                goodAnswers: [],
                onGoodAnswer: false,
                onBadAnswer: false,
            }
            
        },
        methods: {
            onValidation() {
                if (this.radioGroup) {
                    this.goodAnswersNumber++;
                    this.onGoodAnswer = true;
                } else {
                    this.goodAnswers = []
                    this.questionnary[this.i].propositions.map(({proposition, goodAnswer}) => {
                        if (goodAnswer) {
                            this.goodAnswers.push(proposition)                            
                        }
                    })
                    this.onBadAnswer = true;
                }
                if (this.i < this.questionnary.length - 1) {
                    this.i++;
                } else {
                    this.$emit('game-end', this.goodAnswersNumber, this.questionnary.length);
                }
            }
        }
    }
</script>
