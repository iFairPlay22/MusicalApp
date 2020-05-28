<template>
  <v-container grid-list-md>
    <v-layout align-center justify-center fill-height row wrap>
      <v-flex xs12>
        <v-card-title>
          <h2 class="mx-auto">Fin du jeu</h2>
        </v-card-title>
        <v-card-title>
          <h3 class="mx-auto">
            Vous avez {{ nbCorrectAnswers }} bonnes réponses sur
            {{ nbQuestions }} !
          </h3>
        </v-card-title>
        <v-layout justify-center>
          <v-btn
            color="rgb(219, 214, 214, 0.2)"
            class="white--text"
            icon
            large
            @click="onRegame"
            >Regame</v-btn
          >
          <v-btn
            color="rgb(219, 214, 214, 0.2)"
            class="white--text"
            icon
            large
            to="/game-choice"
            >Quit</v-btn
          >
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "GameEndMessage",
  props: {
    nbCorrectAnswers: Number,
    nbQuestions: Number,
  },
  data() {
    return {};
  },
  methods: {
    onRegame() {
      this.$emit("regame");
    },
  },
};
</script>
