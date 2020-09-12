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
        @selected="changeRoute($event)"
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

const TYPE_HIERARCHY = ["module", "category", "level", "question", "answer"];
const TYPE_HIERARCHY_DATA = [
  {
    displayName: "Modules",
    next: "categories",
    label: "moduleName",
    requireBool: false,
    requireFile: false,
    lengthLimit: 15,
  },
  {
    displayName: "Catégories",
    next: "levels",
    label: "categoryName",
    requireBool: false,
    requireFile: false,
    lengthLimit: 15,
  },
  {
    displayName: "Niveaux",
    next: "questions",
    label: "levelName",
    requireBool: false,
    requireFile: false,
    lengthLimit: 15,
  },
  {
    displayName: "Questions",
    next: "propositions",
    label: "question",
    requireBool: false,
    requireFile: true,
    lengthLimit: 75,
  },
  {
    displayName: "Réponses",
    next: null,
    label: "proposition",
    requireBool: true,
    requireFile: true,
    lengthLimit: 20,
    max: 4,
  },
];

export default {
  name: "NewQuestionnaryManager",
  components: { List, Editor, Creator },
  data() {
    return {
      loading: false,
      state: "select",
      hierarchy: [],
      typeData: this.initTypeData(),
    };
  },
  watch: {
    $route() {
      this.onRouteChange();
    },
  },
  mounted() {
    this.onRouteChange();
  },
  methods: {
    changeRoute(id) {
      this.$router.push(`${this.$route.fullPath}/${id}`);
    },
    onRouteChange() {
      this.hierarchy = Object.entries(this.$route.params)
        .map((l) => {
          return {
            i: TYPE_HIERARCHY.indexOf(l[0].slice(0, -2)),
            id: l[1],
          };
        })
        .sort((a, b) => a.i > b.i);

      this.typeData = this.initTypeData();

      if (this.hierarchy.length == 0) return;

      const lastEl = this.hierarchy[this.hierarchy.length - 1];
      this.typeData.type = TYPE_HIERARCHY[lastEl.i + 1];
      this.typeData.requireFile = TYPE_HIERARCHY_DATA[lastEl.i + 1].requireFile;
      this.typeData.requireBool = TYPE_HIERARCHY_DATA[lastEl.i + 1].requireBool;
      this.typeData.lengthLimit = TYPE_HIERARCHY_DATA[lastEl.i + 1].lengthLimit;
      this.typeData.labelName = TYPE_HIERARCHY_DATA[lastEl.i + 1].label;
      this.typeData.displayName = TYPE_HIERARCHY_DATA[lastEl.i + 1].displayName;
      this.typeData.beforeType = TYPE_HIERARCHY[lastEl.i];
      this.typeData.nextTypeName = TYPE_HIERARCHY_DATA[lastEl.i].next;
      this.typeData.beforeId = lastEl.id;
    },
    initTypeData() {
      return {
        type: TYPE_HIERARCHY[0],
        beforeType: null,
        nextTypeName: TYPE_HIERARCHY_DATA[0].next,
        requireFile: TYPE_HIERARCHY_DATA[0].requireFile,
        requireBool: TYPE_HIERARCHY_DATA[0].requireBool,
        lengthLimit: TYPE_HIERARCHY_DATA[0].lengthLimit,
        labelName: TYPE_HIERARCHY_DATA[0].label,
        displayName: TYPE_HIERARCHY_DATA[0].displayName,
        id: null,
        beforeId: null,
        name: null,
        file: null,
        bool: null,
      };
    },
    switchState(state, { id, name, bool, file } = {}) {
      this.state = state;
      if (id) this.typeData.id = id;
      if (name) this.typeData.name = name;
      if (bool) this.typeData.bool = bool;
      if (file) this.typeData.file = file;
    },
  },
};
</script>

<style>
</style>