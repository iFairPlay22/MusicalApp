<template>
  <div class="d-flex justify-space-around align-center">
    <v-select :items="items" :label="title.toUpperCase()" @change="onSelection"></v-select>
    <v-btn
      icon
      color="green"
      outlined
      @click="onCreate"
      class="ml-5"
      :disabled="parentId === undefined"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "TypeList",
  props: ["title", "items", "parentId", "level"],
  methods: {
    onSelection(v) {
      this.$emit("selection", this.$vnode.key, this.items.indexOf(v));
    },
    onCreate() {
      this.$emit("creation", this.$vnode.key);
    },
  },
};
</script>