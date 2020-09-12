<template>
  <v-card
    :loading="loading"
    height="100%"
    class="d-flex flex-row flex-wrap justify-space-around align-center"
    flat
    color="transparent"
  >
    <v-card min-width="50%" class="pa-5" flat color="white">
      <List
        v-if="state == 'select'"
        :data="typeData"
        @createMode="switchState('create')"
        @updateMode="switchState('update', $event)"
        @loading="loading=true"
        @loaded="loading=false"
      />
      <Editor v-else-if="state == 'update'" :data="typeData" @cancel="switchState('select')" />
      <Creator v-else :data="typeData" @cancel="switchState('select')" />
    </v-card>
  </v-card>
</template>

<script>
import List from "@/components/connected/module/List";
import Editor from "@/components/connected/module/Editor";
import Creator from "@/components/connected/module/Creator";

export default {
  name: "NewQuestionnaryManager",
  components: { List, Editor, Creator },
  data() {
    return {
      loading: false,
      state: "select",
      typeData: { type: "module", id: -1, name: "", file: {}, bool: false },
    };
  },
  methods: {
    switchState(state, data) {
      this.state = state;
      if (data) {
        this.typeData = data;
        this.typeData.type = "module";
      }
    },
  },
};
</script>

<style>
</style>