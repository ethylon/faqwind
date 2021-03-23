import { createRouter, createWebHistory } from 'vue-router'

import Home from "./pages/Home.vue";
import GetStarted from "./pages/GetStarted.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/get-started",
      name: "getstarted",
      component: GetStarted
    }
  ]
})