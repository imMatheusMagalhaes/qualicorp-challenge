import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "listPostView",
    component: () => import("../views/ListPostView.vue"),
  },
  {
    path: "/post/create",
    name: "writePostView",
    component: () => import("../views/WritePostView.vue"),
  },
  {
    path: "/post/view",
    name: "postView",
    component: () => import("../views/PostView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
