import Vue from 'vue'
import App from './App.vue'

import './assets/common.less'

import dataV from '@jiaminghi/data-view'
import { changeDefaultConfig } from '@jiaminghi/charts'
import borderBox14 from '@/components/datav/borderBox14'

changeDefaultConfig('color', ['#8378ea', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293', '#e062ae', '#cda819', '#e690d1', '#e7bcf3', '#9d96f5', '#8378ea', '#96bfff'])
changeDefaultConfig('xAxis', {
  axisLabel: {
    style: {
      fill: '#FFF', fontSize: 12
    }
  },
  splitLine: {
    show: false
  }
})

changeDefaultConfig('yAxis', {
  axisLabel: {
    style: {
      fill: '#FFF', fontSize: 12
    }
  },
  splitLine: {
    show: false
  }
})

Vue.config.productionTip = false
import router from './router'

Vue.use(dataV)
Vue.use(borderBox14)

const config = {
  refreshTime: 5000
}
Vue.prototype.$config = config

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
