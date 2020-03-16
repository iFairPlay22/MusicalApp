<template>
  <div>
    <music-sheet></music-sheet>

    <key-board></key-board>
  </div>
</template>


<script>
import KeyBoard from "../../components/KeyBoard";
import MusicSheet from "../../components/MusicSheet";

export default {
  name: "NotesPracticeGame",
  components: {
    KeyBoard,
    MusicSheet
  }
};
</script>
