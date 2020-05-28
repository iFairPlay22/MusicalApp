<template>
  <v-card color="transparent" class="white--text">
    <Title :title="questionnary[actualQuestionIndex].question" />

    <CardImage
      :isNotEmpty="isNotEmpty"
      :image="questionnary[actualQuestionIndex].image"
      :width="200"
      :height="200"
    />

    <Answers
      :questions="questionnary[actualQuestionIndex].propositions"
      :isNotEmpty="isNotEmpty"
      :isSelected="isSelected"
      :onClick="onClick"
    />

    <Button :onValidation="onValidation" />
  </v-card>
</template>

<script>
import Answers from "./qcm/Answers";
import CardImage from "./qcm/CardImage";
import Button from "./qcm/Button";
import Title from "./qcm/Title";

export default {
  name: "Qcm",
  components: {
    Answers,
    CardImage,
    Button,
    Title,
  },
  props: {
    questionnary: Array,
  },
  data() {
    return {
      actualQuestionIndex: 0,
      nbCorrectAnswers: 0,
      correcAnswers: [],
      selectedAnswers: [],
    };
  },
  methods: {
    isNotEmpty(element) {
      return element !== undefined && element.length !== 0;
    },
    isSelected(i) {
      return this.selectedAnswers.includes(i);
    },
    isAnswerCorrect() {
      if (this.selectedAnswers.length === 0) {
        return false;
      }
      let correct = true;
      this.correcAnswers = [];
      this.questionnary[this.actualQuestionIndex].propositions.map(
        ({ proposition, goodAnswer }, i) => {
          if (goodAnswer === true) {
            this.correcAnswers.push(proposition);
          }
          if (
            (goodAnswer === true && !this.isSelected(i)) ||
            (goodAnswer === false && this.isSelected(i))
          ) {
            correct = false;
          }
        }
      );
      return correct;
    },
    onClick(i) {
      if (!this.isSelected(i)) {
        this.selectedAnswers.push(i);
      } else {
        this.selectedAnswers = this.removeFromArray(this.selectedAnswers, i);
      }
    },
    onValidation() {
      if (this.selectedAnswers.length !== 0) {
        this.printMessage();
        this.selectedAnswers = [];
        this.toNextState();
      }
    },
    printMessage() {
      if (this.isAnswerCorrect()) {
        this.$toastr.success(
          "- " + this.correcAnswers.join(", <br>- "),
          "Good answer"
        );
        this.nbCorrectAnswers++;
      } else {
        this.$toastr.error(
          "The good one was:<br>- " + this.correcAnswers.join(", <br>- "),
          "Bad answer"
        );
      }
    },
    toNextState() {
      if (this.actualQuestionIndex < this.questionnary.length - 1) {
        this.actualQuestionIndex++;
      } else {
        this.$emit("game-end", this.nbCorrectAnswers, this.questionnary.length);
      }
    },
    removeFromArray(array, element) {
      let newArray = [];
      array.map((elmt) => {
        if (elmt !== element) {
          newArray.push(elmt);
        }
      });
      return newArray;
    },
  },
};
</script>
