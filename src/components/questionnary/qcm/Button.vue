<template>
  <v-card-actions>
    <v-btn outlined icon class="mx-auto" color="success" @click="onValidation">
      <v-icon>done</v-icon>
    </v-btn>
  </v-card-actions>
</template>

<script>
export default { name: "Button", props: ["onValidation"] };
</script>

<style></style>
