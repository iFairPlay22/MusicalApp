<template>
  <v-card class="transparent white--text ma-auto" min-width="200px" max-width="1000px">
    <v-card-title>
      <v-icon large left color="white">chevron_right</v-icon>
      <span
        class="font-weight-light headline"
        style="border-bottom: 1px solid white"
      >{{ questionnary[actualQuestionIndex].question }}</span>
    </v-card-title>
    <v-card-text>
      <v-img
        v-if="questionnary[actualQuestionIndex].image !== undefined && isNotEmpty(questionnary[actualQuestionIndex].image)"
        :src="questionnary[actualQuestionIndex].image"
        max-width="200px"
        max-height="200px"
        contain
        class="mx-auto"
      />
    </v-card-text>
    <div class="d-flex">
      <v-card
        v-for="({proposition, image}, i) in questionnary[actualQuestionIndex].propositions"
        :key="i"
        @click="onClick(i)"
        class="transparent white--text ma-2"
      >
        <div v-if="isSelected(i)" class="clickableItem selectedItem">
          <v-card-text v-if="image !== undefined && isNotEmpty(image)">
            <v-img :src="image" width="100px" height="100px" contain class="mx-auto" />
          </v-card-text>
          <v-card-text class="headline mx-auto">{{ proposition }}</v-card-text>
        </div>
        <div v-else class="clickableItem">
          <v-card-text v-if="image !== undefined && isNotEmpty(image)">
            <v-img :src="image" width="100px" height="100px" contain class="mx-auto" />
          </v-card-text>
          <v-card-text class="headline mx-auto">{{ proposition }}</v-card-text>
        </div>
      </v-card>
    </div>
    <v-card-actions>
      <v-btn outlined fab class="mx-auto" color="success" @click="onValidation">
        <v-icon>done</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Qcm",
  props: {
    questionnary: Array
  },
  data() {
    return {
      actualQuestionIndex: 0,
      nbCorrectAnswers: 0,
      correcAnswers: [],
      selectedAnswers: []
    };
  },
  methods: {
    /*
            loadImages() {
                this.questionnary.map(question => {console.log(question)
                    if (question.image !== undefined && this.isNotEmpty(question.image)) {
                        question.image = require(question.image)
                    }
                    question.propositions.map(proposition => {
                        if (proposition.image !== undefined && this.isNotEmpty(proposition.image)) {
                            proposition.image = require(proposition.image)
                        }
                    })
                })
            },
            */
    isNotEmpty(element) {
      return element.length !== 0;
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
      array.map(elmt => {
        if (elmt !== element) {
          newArray.push(elmt);
        }
      });
      return newArray;
    }
  }
};
</script>

<style scoped>
.clickableItem {
  cursor: pointer;
}

.clickableItem:hover,
.selectedItem {
  background-color: rgb(219, 214, 214, 0.3);
  transition: 0.5s ease-in-out;
}
</style>