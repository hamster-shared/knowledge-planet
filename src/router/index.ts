import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "market",
    meta: {
      title: "market",
      keepAlive: true,
    },
    component: () => import("@/views/market/index.vue"),
  },
  {
    path: "/chat",
    name: "chat",
    meta: {
      title: "chat",
    },
    component: () => import("@/views/chat/index.vue"),
  },
  {
    path: "/follower",
    name: "follower",
    meta: {
      title: "follower",
    },
    component: () => import("@/views/follower/index.vue"),
  },
  {
    path: "/following",
    name: "following",
    meta: {
      title: "following",
    },
    component: () => import("@/views/following/index.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    meta: {
      title: "profile",
    },
    component: () => import("@/views/profile/index.vue"),
  },
  {
    path: "/balance",
    name: "balance",
    meta: {
      title: "balance",
    },
    component: () => import("@/views/balance/index.vue"),
  },
  {
    path: "/404",
    name: "404",
    meta: {
      title: "404",
    },
    component: () => import("@/views/404.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
