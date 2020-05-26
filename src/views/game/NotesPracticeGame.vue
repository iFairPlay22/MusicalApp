<template>
  <div>
    <music-sheet></music-sheet>

    <key-board></key-board>
  </div>
</template>


<script>
import KeyBoard from "@/components//instruments/KeyBoard";
import MusicSheet from "@/components//instruments/MusicSheet";

export default {
  name: "NotesPracticeGame",
  components: {
    KeyBoard,
    MusicSheet
  }
};
</script>
