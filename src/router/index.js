import Vue from "vue"
import VueRouter from "vue-router"
import ListOfPosts from "../views/ListOfPosts.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "ListOfPosts",
    component: ListOfPosts,
  },
  {
    path: "/post/:id",
    name: "Post",
    component: () => import("../views/Post.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
