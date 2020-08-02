<template>
  <v-card
    height="100%"
    class="d-flex flex-row flex-wrap justify-space-around align-center"
    flat
    color="transparent"
  >
    <v-card class="px-8 py-4 ma-5" flat color="white">
      <p class="text-center display-1 black--text">Sélection</p>
      <TypeList
        v-for="({title, name, nameId, data, item}, i) in hierarchy"
        :key="i"
        :title="title"
        :items="data.map((e) => {
          let obj = {};
          obj[name] = e[name];
          obj[nameId] = e[nameId]
          return obj;
          })"
        :k="name"
        :v="nameId"
        :selectedItem="item"
        :level="hierarchy[i]"
        :parentId="i === 0 ? null : hierarchy[i - 1].item"
        @selection="onSelection"
        @creation="onCreation"
      />
    </v-card>

    <TypeCreation
      v-if="create === true"
      :level="hierarchy[selectedLevel]"
      :parentId="selectedLevel === 0 ? null : hierarchy[selectedLevel - 1].item"
      @created="refresh"
    ></TypeCreation>

    <TypeEditor
      v-if="create === false"
      :level="hierarchy[selectedLevel]"
      :parentId="selectedLevel === 0 ? null : hierarchy[selectedLevel - 1].item"
      :data="getSelectedValue(hierarchy[selectedLevel].data, hierarchy[selectedLevel].nameId, hierarchy[selectedLevel].item)"
      @edited="refresh"
      @deleted="updateAndRefresh"
    ></TypeEditor>
  </v-card>
</template>

<script>
import TypeList from "@/components/lists/TypeList";
import TypeCreation from "@/components/editors/TypeCreation";
import TypeEditor from "@/components/editors/TypeEditor";

export default {
  name: "GameChoice",
  components: {
    TypeList,
    TypeCreation,
    TypeEditor,
  },
  data() {
    return {
      create: undefined,
      selectedLevel: 0,
      hierarchy: [
        {
          title: "Modules",
          url: "/questionnary/module",
          urlId: "module",
          name: "moduleName",
          nameId: "moduleId",
          before: "",
          next: "categories",
          data: [],
          item: undefined,
        },
        {
          title: "Catégories",
          url: "/questionnary/category",
          urlId: "category",
          name: "categoryName",
          nameId: "categoryId",
          before: "module_id",
          next: "levels",
          data: [],
          item: undefined,
        },
        {
          title: "Niveaux",
          url: "/questionnary/level",
          urlId: "level",
          name: "levelName",
          nameId: "levelId",
          before: "category_id",
          next: "questions",
          data: [],
          item: undefined,
        },
        {
          title: "Questions",
          url: "/questionnary/question",
          urlId: "question",
          name: "question",
          nameId: "questionId",
          before: "level_id",
          next: "propositions",
          data: [],
          item: undefined,
        },
        {
          title: "Réponses",
          url: "/questionnary/answer",
          urlId: "answer",
          name: "proposition",
          nameId: "answerId",
          before: "question_id",
          next: "",
          data: [],
          item: undefined,
          requireBoolean: true,
        },
      ],
    };
  },
  mounted() {
    this.fetchModules();
  },
  methods: {
    fetchModules() {
      this.$request(
        "GET",
        this.hierarchy[0].url,
        {},
        () => true,
        "",
        (data) => {
          this.hierarchy[0].data = data.data;
        },
        "An error occured!",
        () => {}
      );
    },
    fetch(i) {
      if (i <= 0 || this.hierarchy.length - 1 < i) return;

      if (this.hierarchy[i - 1].item === undefined) {
        this.hierarchy[i - 1].data = [];
        return;
      }

      this.$request(
        "GET",
        this.hierarchy[i - 1].url + "/" + this.hierarchy[i - 1].item,
        { depth: 2 },
        () => true,
        "",
        (data) => {
          this.hierarchy[i].data = data.data[this.hierarchy[i - 1].next];
        },
        "An error occured!",
        () => {}
      );
    },
    onSelection(k, v) {
      this.hierarchy[k].item = v;

      for (let i = k + 1; i < this.hierarchy.length; i++)
        this.hierarchy[i].item = undefined;

      this.refresh();

      this.selectedLevel = k;
      this.create = false;
    },
    onCreation(level) {
      this.selectedLevel = level;
      this.create = true;
    },
    refresh() {
      this.fetchModules();
      const n = this.hierarchy.filter((e) => e.item !== undefined).length + 1;
      for (let i = 1; i <= n; i++) this.fetch(i);
    },
    updateAndRefresh() {
      this.fetchModules();
      for (let i = 1; i < this.hierarchy.length; i++)
        this.hierarchy[i].item = undefined;
      this.selectedLevel = 0;
      this.create = undefined;
    },
    getSelectedValue(data, nameId, item) {
      for (let el of data) if (el[nameId] == item) return el;
    },
  },
};
</script>
