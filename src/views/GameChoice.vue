<template>
  <v-carousel height="100%" hide-delimiters :interval="10000">
    <v-carousel-item
      v-for="({ mainTitle, tagLine, imageLink, choices }, i) in items"
      :key="i"
      :src="imageLink"
    >
      <v-card
        height="90%"
        class="d-flex flex-row justify-center align-center white--text"
        color="transparent"
        text
      >
        <v-card color="transparent" flat>
          <v-card-text class="display-1 text-xs-center">{{
            mainTitle
          }}</v-card-text>
          <v-card-text class="text-xs-center">{{ tagLine }}</v-card-text>
          <v-card-actions
            class="d-flex flex-row justify-center align-center white--text"
          >
            <v-btn
              style="max-width: 150px"
              text
              v-for="({ title, page }, i) in choices"
              :key="i"
              color="success"
              icon
              large
              :to="page"
              >{{ title }}</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "GameChoice",
  data() {
    return {
      items: [
        {
          mainTitle: "Notes",
          tagLine: "Lorem ipsum dolor si amet !",
          imageLink: require("@/assets/GameChoice/Notes.jpg"),
          choices: [
            {
              title: "Theory",
              page: "theory-notes",
            },
            {
              title: "Practice",
              page: "practice-notes",
            },
          ],
        },
        {
          mainTitle: "Rythme",
          tagLine: "Lorem ipsum dolor si amet !",
          imageLink: require("@/assets/GameChoice/Rythme.jpg"),
          choices: [
            {
              title: "Theory",
              page: "theory-rythms",
            },
            {
              title: "Practice",
              page: "practice-rythms",
            },
          ],
        },
        {
          mainTitle: "Ecoute",
          tagLine: "Lorem ipsum dolor si amet !",
          imageLink: require("@/assets/GameChoice/Ecoute.jpg"),
          choices: [
            {
              title: "Play",
              page: "listen-launcher",
            },
          ],
        },
        {
          mainTitle: "Histoire",
          tagLine: "Lorem ipsum dolor si amet !",
          imageLink: require("@/assets/GameChoice/Histoire.jpg"),
          choices: [
            {
              title: "Play",
              page: "history-launcher",
            },
          ],
        },
      ],
    };
  },
};
</script>
