<template>
  <div id="data-view" @click="$router.push('/g')">
    <dv-full-screen-container>
      <dv-border-box-14 title="新疆项⽬部T4 精益运营管理看板" :title-width="1800" :font-size="30">
        <div
          style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 10px;padding-top:60px">

          <div class="main-container">
            <div style="overflow: hidden;grid-column: 1 / span 4;grid-row: 1 / span 1;">
              <safe-count/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 4;grid-row: 2 / span 3;">
              <FA1/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 4;grid-row:  5 / span 3;">
              <FA3/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 4;grid-row: 8 / span 3;">
              <FA4/>
            </div>
            <div style="overflow: hidden;grid-column: 5 / span 4;grid-row: 5 / span 2;">
              <FB1/>
            </div>
            <div style="overflow: hidden;grid-column: 5 / span 4;grid-row: 7 / span 2;">
              <FB2/>
            </div>
            <div style="overflow: hidden;grid-column: 5 / span 4;grid-row: 9 / span 2;">
              <FB3/>
            </div>
            <div style="overflow: hidden;grid-column: 5 / span 12;grid-row: 1 / span 2;">
              <FD1/>
            </div>
            <div style="overflow: hidden;grid-column: 9 / span 4;grid-row: 5 / span 2;">
              <FC1/>
            </div>
            <div style="overflow: hidden;grid-column: 9 / span 4;grid-row: 7 / span 2;">
              <FC2/>
            </div>
            <div style="overflow: hidden;grid-column: 9 / span 4;grid-row: 9  / span 2;">
              <FC3/>
            </div>
            <div style="overflow: hidden;grid-column: 5 / span 12;grid-row: 3 / span 2;">
              <FB4/>
            </div>
            <div style="overflow: hidden;grid-column: 13 / span 4;grid-row: 5 / span 2;">
              <FD2/>
            </div>
            <div style="overflow: hidden;grid-column: 13 / span 4;grid-row: 7 / span 2;">
              <FD3/>
            </div>
            <div style="overflow: hidden;grid-column: 13 / span 4;grid-row: 9 / span 2;">
              <FD4/>
            </div>
          </div>

        </div>

      </dv-border-box-14>

    </dv-full-screen-container>
  </div>
</template>

<script>
import FA1 from '@/views/pages/FA/components/FA1.vue'
import FA3 from '@/views/pages/FA/components/FA3.vue'
import FA4 from '@/views/pages/FA/components/FA4.vue'
import SafeCount from '@/views/pages/FA/components/SafeCount.vue'
import FB1 from '@/views/pages/FA/components/FB1.vue'
import FB2 from '@/views/pages/FA/components/FB2.vue'
import FB3 from '@/views/pages/FA/components/FB3.vue'
import FB4 from '@/views/pages/FA/components/FB4.vue'
import FC1 from '@/views/pages/FA/components/FC1.vue'
import FC2 from '@/views/pages/FA/components/FC2.vue'
import FC3 from '@/views/pages/FA/components/FC3.vue'

import FD1 from '@/views/pages/FA/components/FD1.vue'
import FD2 from '@/views/pages/FA/components/FD2.vue'
import FD3 from '@/views/pages/FA/components/FD3.vue'
import FD4 from '@/views/pages/FA/components/FD4.vue'

export default {
  name: 'FA',
  components: {
    FD2,
    FA1,
    FA3,
    FA4,
    SafeCount,
    FB1,
    FB2,
    FB3,
    FB4,
    FC1,
    FC2,
    FC3,
    FD1,
    FD3,
    FD4

  },
  data() {
    return {}
  }
  // mounted() {
  //   setTimeout(() => {
  //     this.$router.push('/fb')
  //   }, 5000)
  // }
}
</script>

<style lang="less" scoped>

.main-container {

  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(10, 1fr);

}

</style>
