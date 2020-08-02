<template>
  <v-card
    height="100%"
    class="d-flex flex-row flex-wrap justify-space-around align-center"
    flat
    color="transparent"
  >
    <v-card class="px-8 py-4" flat color="white">
      <p class="text-center display-1 black--text">Sélection</p>
      <TypeList
        v-for="({title, name, data}, i) in hierarchy"
        :key="i"
        :title="title"
        :items="data.map((e) => e[name])"
        :level="hierarchy[actualLevel]"
        :parentId="i === 0 ? null : hierarchy[i - 1].item"
        @selection="onSelection"
        @creation="onCreation"
      />
    </v-card>

    <TypeCreation
      v-if="create"
      :level="hierarchy[selectedLevel]"
      :parentId="selectedLevel === 0 ? null : hierarchy[selectedLevel - 1].item"
      @created="refresh"
    ></TypeCreation>

    <!-- <TypeEditor v-else
        :level="hierarchy[actualLevel]"
        :data="hierarchy[actualLevel].data[hierarchy[actualLevel].item]"
        :parentId="actualLevel === 0 ? null : hierarchy[actualLevel - 1].item"
    ></TypeEditor>-->
  </v-card>
</template>

<script>
import TypeList from "@/components/lists/TypeList";

import TypeCreation from "@/components/editors/TypeCreation";
// import TypeEditor from "@/components/editors/TypeEditor";

export default {
  name: "GameChoice",
  components: { TypeList, TypeCreation /*TypeEditor*/ },
  computed: {
    actualLevel() {
      return this.hierarchy.filter((e) => e.item !== undefined).length - 1;
    },
  },
  data() {
    return {
      create: false,
      selectedLevel: 0,
      hierarchy: [
        {
          title: "Modules",
          url: "/questionnary/module",
          urlId: "module",
          name: "moduleName",
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
      if (i == 0 || i == this.hierarchy.length) return;

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
      this.hierarchy[k].item = this.hierarchy[k].data[v][
        this.hierarchy[k].urlId + "Id"
      ];

      for (let i = this.hierarchy + 1; i < this.hierarchy.length; i++)
        this.hierarchy[i].item = undefined;

      this.refresh();
      this.create = false;
    },
    onCreation(level) {
      this.selectedLevel = level;
      this.create = true;
    },
    refresh() {
      this.fetchModules();
      for (let i = 1; i <= this.actualLevel + 1; i++) this.fetch(i);
    },
  },
};
</script>
