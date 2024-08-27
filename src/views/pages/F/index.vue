<template>
  <div id="data-view">
    <dv-full-screen-container>
      <dv-border-box-14 title="新疆项⽬部T4 精益运营管理看板" :title-width="1800" :font-size="30">
        <div
          style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 10px;padding-top:60px">

          <div class="main-container">

            <div style="overflow: hidden;grid-column: 1 / span 4;grid-row: 1 / span 2;">
              <FA1/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 4;grid-row:  3 / span 3;">
              <FA3/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 4;grid-row: 6 / span 3;">
              <FA4/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 4;grid-row: 9 / span 3;">
              <FB2/>
              <!--<FB1/>-->
            </div>
            <div style="overflow: hidden;grid-column: 5 / span 8;grid-row: 1 / span 2;">
              <safe-count/>
            </div>

            <div style="overflow: hidden;grid-column: 5 / span 4;grid-row: 3 / span 3;">
              <!--项目部成型计划完成情况-->
              <FC1 title="项目部成型计划完成情况"/>
            </div>
            <div style="overflow: hidden;grid-column: 5 / span 4;grid-row: 6 / span 3;">
              <!--B1030E 产线成型计划完成情况-->
              <F6/>
            </div>
            <div style="overflow: hidden;grid-column: 5 / span 4;grid-row: 9 / span 3;">
              <FC3/>
            </div>
            <div style="overflow: hidden;grid-column: 9 / span 4;grid-row: 3  / span 3;">
              <FC1 title="项目部入库计划完成情况"/>
            </div>
            <div style="overflow: hidden;grid-column: 9 / span 4;grid-row: 6 / span 3;">
              <FD3/>
            </div>
            <div style="overflow: hidden;grid-column: 9 / span 4;grid-row: 9 / span 3;">
              <FD4/>
            </div>

            <div style="overflow: hidden;grid-column: 13 / span 4;grid-row: 1 / span 3;">
              <FE1/>
            </div>
            <div style="overflow: hidden;grid-column: 13 / span 4;grid-row: 4 / span 4;">
              <FE2/>
            </div>
            <div style="overflow: hidden;grid-column: 13 / span 4;grid-row: 8 / span 4;">
              <FE3/>
            </div>

          </div>

        </div>

      </dv-border-box-14>

    </dv-full-screen-container>
  </div>
</template>

<script>
import FA1 from '@/views/pages/F/components/FA1.vue'
import FA3 from '@/views/pages/F/components/FA3.vue'
import FA4 from '@/views/pages/F/components/FA4.vue'
import SafeCount from '@/views/pages/F/components/SafeCount.vue'
import FB1 from '@/views/pages/F/components/FB1.vue'
import FB2 from '@/views/pages/F/components/FB2.vue'
import FB3 from '@/views/pages/G/components/G4.vue'
import FB4 from '@/views/pages/F/components/FB4.vue'
import FC1 from '@/views/pages/F/components/FC1.vue'
import F6 from '@/views/pages/F/components/F6.vue'
import FC3 from '@/views/pages/F/components/FC3.vue'

import FD2 from '@/views/pages/F/components/FD2.vue'
import FD3 from '@/views/pages/F/components/FD3.vue'
import FD4 from '@/views/pages/F/components/FD4.vue'
import FE1 from '@/views/pages/F/components/FE1.vue'
import FE2 from '@/views/pages/F/components/FE2.vue'
import FE3 from '@/views/pages/F/components/FE3.vue'

export default {
  name: 'F',
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
    F6,
    FC3,
    FD3,
    FD4,
    FE1,
    FE2,
    FE3

  },
  data() {
    return {}
  },
  methods: {
    onClick(e) {
      console.log('onClick', e)
    }
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
  grid-template-rows: repeat(11, 1fr);

}

</style>
