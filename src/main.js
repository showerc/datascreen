import Vue from 'vue'
import App from './App.vue'

import './assets/common.less'

import dataV from '@jiaminghi/data-view'

Vue.config.productionTip = false
import router from './router'

Vue.use(dataV)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
