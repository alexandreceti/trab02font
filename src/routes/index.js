'use strict'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Produto from '../pages/Produto'
import Home from '../pages/Home'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/produto/:id',
      name: 'produto',
      props: true,
      component: Produto
    }
  ]
})
