import Vue from "vue";
import VueRouter from "vue-router";
import WritePostView from "../views/WritePostView.vue";
import ListPostView from "../views/ListPostView.vue";
import PostView from "../views/PostView.vue";

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
