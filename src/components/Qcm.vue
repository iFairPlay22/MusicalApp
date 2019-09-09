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
                                v-for="({proposition, image}, j) in questionnary[i].propositions"
                                :key="j"
                                :value="j"
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
