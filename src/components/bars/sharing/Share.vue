<template>
  <v-bottom-sheet>
    <v-list>
      <v-subheader>Share in</v-subheader>
      <v-list-tile
        v-for="({ title, img }, i) in tiles"
        :key="i"
        @click="onCancel"
      >
        <v-list-tile-avatar>
          <v-avatar size="32px" tile>
            <img
              :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${img}`"
              :alt="title"
            />
          </v-avatar>
        </v-list-tile-avatar>
        <v-list-tile-title>{{ title }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-bottom-sheet>
</template>

<script>
export default {
  data() {
    return {
      tiles: [
        {
          img: "keep.png",
          title: "Keep",
        },
        {
          img: "inbox.png",
          title: "Inbox",
        },
        {
          img: "hangouts.png",
          title: "Hangouts",
        },
        {
          img: "messenger.png",
          title: "Messenger",
        },
      ],
    };
  },
  methods: {
    onCancel() {
      this.$emit("cancel");
    },
  },
};
</script>

<style></style>
