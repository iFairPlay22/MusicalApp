<template>
    <div class="white--text title">
        
        <qcm
            v-if="inGame"
            v-on:game-end="onGameEnd"
        >
        </qcm>

        <game-end-message
            v-if="!inGame"
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
                goodAnswers: 0
            };
        },
        components: {
            Qcm,
            GameEndMessage
        },
        methods: {
            onGameEnd(goodAnswers) {
                this.inGame = false;
                this.goodAnswers = goodAnswers;
            }
        }
    }
</script>
