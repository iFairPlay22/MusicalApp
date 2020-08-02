import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import QuestionnaryManager from "@/views/QuestionnaryManager.vue";
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
      path: "/questionnary-manager",
      name: "manager",
      component: QuestionnaryManager,
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
