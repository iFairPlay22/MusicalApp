<template>
  <div class="d-flex justify-space-around align-center">
    <v-select
      :items="items"
      :label="title.toUpperCase()"
      :value="selectedItem"
      :item-text="k"
      :item-value="v"
      @change="onSelection"
      :loading="loading"
    ></v-select>
    <v-btn
      icon
      color="green"
      outlined
      @click="onCreate"
      class="ml-5"
      :disabled="parentId === undefined || this.level.max <= this.level.data.length"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "TypeList",
  props: [
    "title",
    "items",
    "selectedItem",
    "parentId",
    "level",
    "k",
    "v",
    "loading",
  ],
  data() {
    return {};
  },
  methods: {
    onSelection(v) {
      this.$emit("selection", this.$vnode.key, v);
    },
    onCreate() {
      this.$emit("creation", this.$vnode.key);
    },
  },
};
</script>