<template>
    <div class="white--text title">
        
        <qcm
            v-if="inGame"
            v-bind="{ questionnary }"
            v-on:game-end="onGameEnd"
        >
        </qcm>

        <game-end-message
            v-if="!inGame"
            v-bind="{ goodAnswers, nbQuestions }"
        >
        </game-end-message>
    </div>

</template>

<script>
    import Qcm from '../../components/Qcm';
    import GameEndMessage from '../../components/GameEndMessage';

    export default {
        name: "NotesTheoryGame",
        data() {
            return {
                inGame: true,
                nbQuestions: 0,
                goodAnswers: 0,
                questionnary: 
                [
                    {
                        question: "A quoi correspond cette note ?",
                        img: require("../../assets/Game/TheoryNotes/note.png"),
                        propositions: 
                        [
                            "Do",
                            "Ré",
                            "Mi",
                            "Fa"
                        ],
                        answer: 0
                    },
                    {
                        question: "A quoi correspond cette note ?",
                        img: require("../../assets/Game/TheoryNotes/note2.png"),
                        propositions: 
                        [
                            "Do",
                            "Ré",
                            "Mi",
                            "Fa"
                        ],
                        answer: 1
                    },
                    {
                        question: "Comment t'appelles-tu ?",
                        img: undefined,
                        propositions: 
                        [
                            "Tiphaine",
                            "Ewen",
                            "Sixtine",
                            "Philippe"
                        ],
                        answer: 2
                    }
                ]
            };
        },
        components: {
            Qcm,
            GameEndMessage
        },
        methods: {
            onGameEnd(goodAnswers, nbQuestions) {
                this.inGame = false;
                this.goodAnswers = goodAnswers;
                this.nbQuestions = nbQuestions;
            }
        }
    }
</script>
