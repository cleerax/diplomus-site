import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    props: (route) => ({ page: route.query.page }),
  },
  {
    path: "/auth",
    name: "auth",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AuthorizationView.vue"),
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegistrationView.vue"),
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: "/contractor/:id",
    name: "contractor",
    component: () => import("../views/ContractorView.vue"),
    props: (route) => ({ page: route.query.page }),
  },
  {
    path: "/contractors",
    name: "contractors",
    component: () => import("../views/ContractorsView.vue"),
    props: (route) => ({ page: route.query.page }),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
