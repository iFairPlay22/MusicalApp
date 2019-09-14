<template>
    <div class="white--text title my-auto">
        <qcm
            loading="true"
            v-if="inGame && questionnary"
            v-bind="{ questionnary }"
            v-on:game-end="onGameEnd"
        />

        <game-end-message
            v-if="!inGame"
            v-bind="{ nbCorrectAnswers, nbQuestions }"
            @regame="regame"
        />
    </div>

</template>

<script>
    //https://musical-app-back.herokuapp.com/api/questionnary/answer?label=Answer2&imageLink=null&question_id=5&goodAnswer=1
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
                nbCorrectAnswers: 0,
                nbQuestions: 0,
                questionnary: [{}],
                
                category: 6,
                number: 10
            };
        },
        mounted() {
            this.regame()
        },
        methods: {
            fetchQuestionnary() {
                
                    fetch(`https://cors-anywhere.herokuapp.com/musical-app-back.herokuapp.com/api/questionnary/category/?category=${this.category}&number=${this.number}`, {
                        mode: 'cors',
                        method: 'GET',
                    })
                    .then(result => result.json())
                    .then(questionnary => {
                        this.questionnary = questionnary
                    }).catch(error => console.log(error))
                /*
                    this.questionnary = [
                    {
                        question: "Quelle est la bonne réponse à ma question ?",
                        image: "../../assets/Game/TheoryNotes/note.jpg",
                        propositions: [
                            {
                                proposition: "Celle-ci",
                                image: undefined,
                                goodAnswer: true
                            },
                            {
                                proposition: "Celle-là",
                                image: undefined,
                                goodAnswer: false
                            },
                            {
                                proposition: "Ah non, c'est bien celle-ci !",
                                image: undefined,
                                goodAnswer: false
                            },
                            {
                                proposition: "Rien de tout ça",
                                image: undefined,
                                goodAnswer: false
                            }
                        ]
                    },
                    {
                        question: "Quelle est la bonne réponse à ma deuxième question ?",
                        image: undefined,
                        propositions: [
                            {
                                proposition: "Celle-ci",
                                image: "../../assets/Game/TheoryNotes/note.jpg",
                                goodAnswer: true
                            },
                            {
                                proposition: "Celle-là",
                                image: "../../assets/Game/TheoryNotes/note.jpg",
                                goodAnswer: true
                            },
                            {
                                proposition: "Ah non, c'est bien celle-ci !",
                                image: "../../assets/Game/TheoryNotes/note.jpg",
                                goodAnswer: false
                            },
                            {
                                proposition: "Rien de tout ça",
                                image: "../../assets/Game/TheoryNotes/note.jpg",
                                goodAnswer: false
                            }
                        ]
                    },
                    {
                        question: "Quelle est la bonne réponse à ma troisième question ?",
                        image: "../../assets/Game/TheoryNotes/note.jpg",
                        propositions: [
                            {
                                proposition: "Celle-ci",
                                image: "../../assets/Game/TheoryNotes/note.jpg",
                                goodAnswer: true
                            },
                            {
                                proposition: "Celle-là",
                                image: "../../assets/Game/TheoryNotes/note.jpg",
                                goodAnswer: true
                            },
                            {
                                proposition: "Ah non, c'est bien celle-ci !",
                                image: "../../assets/Game/TheoryNotes/note.jpg",
                                goodAnswer: false
                            },
                            {
                                proposition: "Rien de tout ça",
                                image: "../../assets/Game/TheoryNotes/note.jpg",
                                goodAnswer: false
                            }
                        ]
                    },
                    {
                        question: "Quelle est la bonne réponse à ma quatrième question ?",
                        image: undefined,
                        propositions: [
                            {
                                proposition: "Celle-ci",
                                image: undefined,
                                goodAnswer: true
                            },
                            {
                                proposition: "Celle-là",
                                image: undefined,
                                goodAnswer: false
                            },
                            {
                                proposition: "Ah non, c'est bien celle-ci !",
                                image: undefined,
                                goodAnswer: false
                            },
                            {
                                proposition: "Rien de tout ça",
                                image: undefined,
                                goodAnswer: false
                            }
                        ]
                    },
                ]
                */
                
            },
            onGameEnd(nbCorrectAnswers, nbQuestions) {
                this.inGame = false;
                this.nbCorrectAnswers = nbCorrectAnswers;
                this.nbQuestions = nbQuestions;
            },
            regame() {
                this.inGame = true
                this.fetchQuestionnary()
            }
        }
    }
</script>
