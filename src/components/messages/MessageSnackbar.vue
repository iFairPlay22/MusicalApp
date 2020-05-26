<template>
  <v-snackbar :visible="testMode" :value="true" :color="color" :timeout="timeout" :top="true">
    {{ text }}
    <v-btn color="transparent" class="px-2" @click="onClick" text>{{ buttonText }}</v-btn>
  </v-snackbar>
</template> <script>
export default {
  name: "MessageSnackbar",
  props: ["color", "text", "buttonText", "timeout"],
  data() {
    return { testMode: false };
  },
  methods: {
    onClick() {
      this.$emit("close");
    }
  }
};
</script>