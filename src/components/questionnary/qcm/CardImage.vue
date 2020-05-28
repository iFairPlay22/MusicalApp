<template>
  <v-card-text>
    <v-img
      v-if="isNotEmpty(image)"
      :src="image"
      :max-width="width"
      :max-height="height"
      contain
    />
  </v-card-text>
</template>

<script>
export default {
  name: "CardImage",
  props: ["isNotEmpty", "image", "width", "height"],
};
</script>
