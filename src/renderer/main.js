/* jshint esversion: 6 */
import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import MuseUI from 'muse-ui'
import './muse-ui.css'
import './theme-carbon.css'
Vue.use(MuseUI)
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (sessionStorage.user) {
      console.log(sessionStorage.user)
      next()
    } else {
      next({
        path: '/sign',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
