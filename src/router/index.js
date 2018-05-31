import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import detalle from '@/components/detalle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/detalle/:id',
      name: 'detalle',
      component: detalle
    }
  ]
})
