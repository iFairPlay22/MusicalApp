import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import NewQuestionnaryManager from "@/views/NewQuestionnaryManager.vue";
import { getters } from "@/store.js";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/questionnary-manager/:moduleId/:categoryId/:levelId/:questionId",
      name: "answer-manager",
      component: NewQuestionnaryManager,
      meta: {
        mustBeAuthenticated: true,
      },
    },
    {
      path: "/questionnary-manager/:moduleId/:categoryId/:levelId",
      name: "question-manager",
      component: NewQuestionnaryManager,
      meta: {
        mustBeAuthenticated: true,
      },
    },
    {
      path: "/questionnary-manager/:moduleId/:categoryId",
      name: "level-manager",
      component: NewQuestionnaryManager,
      meta: {
        mustBeAuthenticated: true,
      },
    },
    {
      path: "/questionnary-manager/:moduleId",
      name: "category-manager",
      component: NewQuestionnaryManager,
      meta: {
        mustBeAuthenticated: true,
      },
    },
    {
      path: "/questionnary-manager",
      name: "module-manager",
      component: NewQuestionnaryManager,
      meta: {
        mustBeAuthenticated: true,
      },
    },

    {
      /*Redirect*/
      path: "*",
      name: "other routes",
      redirect: () => "home",
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.mustBeAuthenticated === true && !getters.isConnected()) {
    next("/");
    return;
  }
  next();
});

export default router;
