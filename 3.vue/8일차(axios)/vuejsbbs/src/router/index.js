import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
//추가
import Read from '../components/Read'
import Create from '../components/Create'
import Detail from '../components/Detail'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name:'Read',//name: 'Home',
    component:Read//component: Home
  },
  {
    path: '/create/:contentid?',
    name:'Create',
    component:Create
  },
  {
    path: '/detail/:contentid',
    name:'Detail',
    component:Detail
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
