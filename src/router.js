import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import QuestionnaryManager from "@/views/QuestionnaryManager.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/questionnary-manager",
      name: "manager",
      component: QuestionnaryManager,
    },
    {
      /*Redirect*/
      path: "*",
      name: "other routes",
      redirect: () => "home",
    },
  ],
});
