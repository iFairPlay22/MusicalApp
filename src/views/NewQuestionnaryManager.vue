<template>
  <v-card
    :loading="loading"
    height="100%"
    class="d-flex flex-row flex-wrap justify-space-around align-center"
    flat
    color="transparent"
  >
    <v-card min-width="50%" class="pa-5" flat color="white">
      <ModuleList
        @createMode="createMode"
        @updateMode="updateMode"
        @loading="loading=true"
        @loaded="loading=false"
      />
    </v-card>
  </v-card>
</template>

<script>
import ModuleList from "@/components/connected/module/ModuleList";

export default {
  name: "NewQuestionnaryManager",
  components: { ModuleList },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    createMode() {},
    updateMode() {},
  },
};
</script>

<style>
</style>