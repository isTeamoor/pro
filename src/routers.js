import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "test",
    path: "/test",
    component: () => import("./components/Screens/tests.vue"),
  },
  {
    name: "home-ice",
    path: "/",
    component: () => import("./components/Screens/home-ice.vue"),
  },
  {
    name: "dailyMenu-ice",
    path: "/dailyMenu-ice",
    component: () => import("./components/Screens/dailyMenu-ice.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
