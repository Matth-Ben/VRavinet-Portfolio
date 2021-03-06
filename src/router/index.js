import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Project from '../views/Project.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:slug',
      name: 'single-project',
      component: Project
    }
  ]
})
