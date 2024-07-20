import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "home",
    path: "/",
    component: () => import("./components/Screens/home.vue"),
  },
  {
    name: "check1",
    path: "/check1",
    component: () => import("./components/Screens/check1.vue"),
  },
  {
    name: "check2",
    path: "/check2",
    component: () => import("./components/Screens/check2.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
