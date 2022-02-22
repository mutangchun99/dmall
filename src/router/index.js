import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/Login.vue'
import Forget from '@/views/Forget/Forget.vue'
import Home from '@/views/Home/Home.vue'
import CreateProject from '@/views/Home/CreateProject.vue'
import ProjectList from '@/views/Home/ProjectList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/forget',
    name: 'Forget',
    component: Forget
  },
  {
    path: '/homepage',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'createproject',
        component: CreateProject
      },
      {
        path:'projectlist',
        component:ProjectList
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
