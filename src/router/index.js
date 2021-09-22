import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/About"),
  },
  {
    path: "/ressource/:id",
    name: "Ressource",
    component: () =>
      import(/* webpackChunkName: "ressource" */ "@/views/Ressource"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ "@/views/Login"),
  },
  {
    path: "/admin",
    name: "Admin",
    meta: { needAuth: true },
    component: () =>
      import(/* webpackChunkName: "admin" */ "@/views/admin/Admin"),
    children: [
      {
        path: "/management",
        name: "AdminManagement",
        component: () =>
          import(
            /* webpackChunkName: "adminManagement" */ "@/views/admin/AdminManagement"
          ),
      },
      {
        path: "/validation",
        name: "AdminValidation",
        component: () =>
          import(
            /* webpackChunkName: "adminValidation" */ "@/views/admin/AdminValidation"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const { accessToken } = store.state.auth.user;
  const isPageProtected = to.matched.some((route) => route.meta.needAuth);

  if (!accessToken && isPageProtected) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
