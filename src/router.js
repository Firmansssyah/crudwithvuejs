import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'home', component: Home},
    { path: '/instagram', name: 'instagram',
      component: () => import(/* webpackChunkName: "about" */ './views/Instagram.vue')},
    { path: '/settings', name: 'settings',
      component: () => import(/* webpackChunkName: "about" */ './views/Settings.vue')},
    { path: '/about', name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')},
  ]
})
