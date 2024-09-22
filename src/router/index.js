import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Teachers from "@/views/Teachers.vue";
import Students from "@/views/Students.vue";
import EachOne from "@/views/EachOne.vue";


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/teachers",
      name: "teachers",
      component: Teachers,
    },
    { path: "/students", name: "students", component: Students },
    { path: "/teachers/:id", name: "eachone", component: EachOne },
  ]
})

export default router
