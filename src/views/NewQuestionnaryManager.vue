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
        v-if="state == 'select'"
        @createMode="switchState('create')"
        @updateMode="switchState('update')"
        @loading="loading=true"
        @loaded="loading=false"
      />
      <ModuleEditor v-else-if="state == 'update'" />
      <ModuleCreator v-else />
    </v-card>
  </v-card>
</template>

<script>
import ModuleList from "@/components/connected/module/ModuleList";
import ModuleEditor from "@/components/connected/module/ModuleEditor";
import ModuleCreator from "@/components/connected/module/ModuleCreator";

export default {
  name: "NewQuestionnaryManager",
  components: { ModuleList, ModuleEditor, ModuleCreator },
  data() {
    return {
      loading: false,
      state: "select",
    };
  },
  methods: {
    switchState(state) {
      this.state = state;
    },
  },
};
</script>

<style>
</style>