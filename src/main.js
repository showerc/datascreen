import Vue from 'vue'
import App from './App.vue'

import './assets/common.less'

import dataV from '@jiaminghi/data-view'
import { changeDefaultConfig } from '@jiaminghi/charts'
import borderBox14 from '@/components/datav/borderBox14'
import myScrollBoard from '@/components/datav/myScrollBoard'

import MyHeader from '@/components/header.vue'

Vue.component('my-header', MyHeader)

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
Vue.use(myScrollBoard)

const config = {
  refreshTime: 5000
}
Vue.prototype.$config = config

const pageArr = ['A', 'BA', 'BB', 'CA', 'CB', 'D', 'E', 'F', 'G', 'H']

new Vue({
  el: '#app',
  router,
  mounted() {
    document.addEventListener('keyup', this.onKeyup)
  },
  beforeDestroy() {
    document.removeEventListener('keyup', this.onKeyup)
  },
  methods: {
    onKeyup(event) {
      console.log(this.$route.name)
      if (pageArr.includes(this.$route.name)) {
        let routeName
        if (event.key === 'ArrowUp') {
          routeName = pageArr.indexOf(this.$route.name) - 1 >= 0 ? pageArr[pageArr.indexOf(this.$route.name) - 1] : pageArr[pageArr.length - 1]
        } else if (event.key === 'ArrowDown') {
          routeName = pageArr.indexOf(this.$route.name) + 1 < pageArr.length ? pageArr[pageArr.indexOf(this.$route.name) + 1] : pageArr[0]
        }
        if (routeName) {
          console.log(routeName)
          this.$router.replace({ name: routeName })
        }
      }
    }
  },
  render: h => h(App)

})
