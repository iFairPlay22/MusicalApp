<template>
    <div class="white--text title my-auto">
        <qcm
            v-if="inGame && questionnary"
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
                nbQuestions: 0,
                goodAnswers: 0,
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
                    })
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
