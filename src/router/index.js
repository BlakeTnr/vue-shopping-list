import Vue from 'vue'
import VueRouter from 'vue-router'
import CodeHandler from '../components/CodeHandler'
import ListViewer from '../components/ListViewer'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: CodeHandler
  },
  {
    path: '/:id',
    name: 'List',
    component: ListViewer,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
