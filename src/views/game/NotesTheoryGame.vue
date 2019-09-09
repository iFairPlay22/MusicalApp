<template>
    <div class="white--text title my-auto">
        
        <qcm
            v-if="inGame"
            v-bind="{ questionnary }"
            v-on:game-end="onGameEnd"
        />

        <game-end-message
            v-if="!inGame"
            v-bind="{ goodAnswers, nbQuestions }"
            @regame="regame"
        />
    </div>

</template>

<script>
    import Qcm from '../../components/Qcm';
    import GameEndMessage from '../../components/GameEndMessage';

    export default {
        name: "NotesTheoryGame",
        components: {
            Qcm,
            GameEndMessage
        },
        data() {
            return {
                inGame: true,
                nbQuestions: 0,
                goodAnswers: 0,
                questionnary: []
            };
        },
        mounted() {
            this.regame()
        },
        methods: {
            fetchQuestionnary() {
                this.questionnary = 
                    [
                        {
                            question: "A quoi correspond cette note ?",
                            img: require("../../assets/Game/TheoryNotes/note.png"),
                            propositions: 
                            [
                                {
                                    proposition: "Do",
                                    image: require("../../assets/Game/TheoryNotes/note.png")
                                },
                                {
                                    proposition: "Ré",
                                    image: require("../../assets/Game/TheoryNotes/note2.png")
                                },
                                {
                                    proposition: "Mi",
                                    image: require("../../assets/Game/TheoryNotes/note.png")
                                },
                                {
                                    proposition: "Fa",
                                    image: require("../../assets/Game/TheoryNotes/note2.png")
                                }
                            ],
                            answer: 0
                        },
                        {
                            question: "A quoi correspond cette note ?",
                            img: require("../../assets/Game/TheoryNotes/note2.png"),
                            propositions: 
                            [
                                {
                                    proposition: "Do",
                                    image: undefined
                                },
                                {
                                    proposition: "Ré",
                                    image: undefined
                                },
                                {
                                    proposition: "Mi",
                                    image: undefined
                                },
                                {
                                    proposition: "Fa",
                                    image: undefined
                                }
                            ],
                            answer: 1
                        },
                        {
                            question: "Comment t'appelles-tu ?",
                            img: undefined,
                            propositions: 
                            [
                                {
                                    proposition: "Tiphaine",
                                    image: undefined
                                },
                                {
                                    proposition: "Ewen",
                                    image: undefined
                                },
                                {
                                    proposition: "Sixtine",
                                    image: undefined
                                },
                                {
                                    proposition: "Philippe",
                                    image: undefined
                                }
                            ],
                            answer: 2
                        },
                        {
                            question: "Comment t'appelles-tu ?",
                            img: undefined,
                            propositions: 
                            [
                                {
                                    proposition: "Tiphaine",
                                    image: undefined
                                },
                                {
                                    proposition: "Ewen",
                                    image: undefined
                                }
                            ],
                            answer: 0                        
                        }
                    ]
            },
            onGameEnd(goodAnswers, nbQuestions) {
                this.inGame = false;
                this.goodAnswers = goodAnswers;
                this.nbQuestions = nbQuestions;
            },
            regame() {
                this.inGame = true
                this.fetchQuestionnary()
            }
        }
    }
</script>
