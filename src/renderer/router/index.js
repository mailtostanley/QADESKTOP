import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('@/components/index').default
    },
    {
      path: '/market',
      name: 'market',
      component: require('@/components/market').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
