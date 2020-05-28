<template>
  <v-card-title class="font-weight-light headline"
    ><v-icon large left color="white">chevron_right</v-icon>{{ title }}
  </v-card-title>
</template>

<script>
export default { name: "Title", props: ["title"] };
</script>
