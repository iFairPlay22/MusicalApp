<template>
  <div>
    <div class="d-flex justify-space-around align-space-around flex-wrap">
      <v-card
        v-for="({ proposition, image }, i) in questions"
        :key="i"
        @click="onClick(i)"
        class="transparent white--text ma-2"
      >
        <div v-if="isSelected(i)" class="clickableItem selectedItem">
          <CardImage
            :key="i"
            :isNotEmpty="isNotEmpty"
            :image="image"
            :width="100"
            :height="100"
          />
          <v-card-text class="headline">{{ proposition }}</v-card-text>
        </div>
        <div v-else class="clickableItem">
          <CardImage
            :key="i"
            :isNotEmpty="isNotEmpty"
            :image="image"
            :width="100"
            :height="100"
          />
          <v-card-text class="headline">{{ proposition }}</v-card-text>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import CardImage from "./CardImage";

export default {
  name: "Answer",
  components: { CardImage },
  props: ["questions", "isSelected", "onClick", "isNotEmpty"],
};
</script>

<style scoped>
.clickableItem {
  cursor: pointer;
}

.clickableItem:hover,
.selectedItem {
  background-color: rgb(219, 214, 214, 0.3);
  transition: 0.5s ease-in-out;
}
</style>
