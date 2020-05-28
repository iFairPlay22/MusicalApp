<template>
  <v-container
    fluid
    style="height: 100%"
    class="d-flex flex-column justify-center align-center"
  >
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
  </v-container>
</template>

<script>
//https://musical-app-back.herokuapp.com/api/questionnary/answer?label=Answer2&imageLink=null&question_id=5&goodAnswer=1
import Qcm from "@/components//questionnary/Qcm";
import GameEndMessage from "@/components//questionnary/GameEndMessage";

export default {
  name: "NotesTheoryGame",
  components: {
    Qcm,
    GameEndMessage,
  },
  data() {
    return {
      inGame: true,
      nbCorrectAnswers: 0,
      nbQuestions: 0,
      questionnary: [{}],

      category: 1,
      number: 10,
    };
  },
  mounted() {
    this.regame();
  },
  methods: {
    fetchQuestionnary() {
      this.$request(
        "GET",
        "/questionnary/category",
        {
          category: this.category,
          number: this.number,
        },
        () => true,
        "",
        (questionnary) => {
          this.questionnary = questionnary;
        },
        "Error when loading questionnary!",
        () => {}
      );
    },
    onGameEnd(nbCorrectAnswers, nbQuestions) {
      this.inGame = false;
      this.nbCorrectAnswers = nbCorrectAnswers;
      this.nbQuestions = nbQuestions;
    },
    regame() {
      this.inGame = true;
      this.fetchQuestionnary();
    },
  },
};
</script>
