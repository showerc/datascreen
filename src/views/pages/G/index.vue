<template>
  <div id="data-view">
    <dv-full-screen-container>
      <dv-border-box-14 title="新疆项⽬部T4 精益运营管理看板" :title-width="1800" :font-size="30">
        <div
          style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 10px;padding-top:60px">

          <div class="main-container">
            <div style="overflow: hidden;grid-column: 5 / span 8;grid-row: 1 / span 2;">
              <safe-count/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 4;grid-row: 1 / span 2;">
              <G1/>
            </div>

            <div style="overflow: hidden;grid-column: 1 / span 12;grid-row: 3 / span 2;">
              <G3/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 12;grid-row: 5 / span 2;">
              <G4/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 5;grid-row: 7 / span 4;">
              <G2/>
            </div>
            <div style="overflow: hidden;grid-column: 6 / span 4;grid-row: 7 / span 4;">
              <G6/>

            </div>
            <div style="overflow: hidden;grid-column: 10 / span 4;grid-row: 7 / span 4;">
              <G5/>

            </div>

            <div style="overflow: hidden;grid-column: 5 / span 8;grid-row: 4 / span 2;">
              <!--<GB2/>-->

            </div>

            <div style="overflow: hidden;grid-column: 5 / span 4;grid-row: 6 / span 4;">

            </div>

            <div style="overflow: hidden;grid-column: 13 / span 4;grid-row: 1 / span 6;">
              <GC1 :type="2"/>
            </div>
            <div style="overflow: hidden;grid-column: 14 / span 3;grid-row: 7 / span 4;">
              <GC2/>
            </div>
          </div>
        </div>

      </dv-border-box-14>

    </dv-full-screen-container>
  </div>
</template>

<script>
import GA1 from '@/views/pages/G/components/GA1.vue'
import G1 from '@/views/pages/G/components/G1.vue'
import G2 from '@/views/pages/G/components/G2.vue'
import G3 from '@/views/pages/G/components/G3.vue'
import G4 from '@/views/pages/G/components/G4.vue'
import G5 from '@/views/pages/G/components/G5.vue'
import G6 from '@/views/pages/G/components/G6.vue'

import GA2 from '@/views/pages/G/components/GA2.vue'
import GA3 from '@/views/pages/G/components/GA3.vue'

import GB1 from '@/views/pages/G/components/GB1.vue'
import GB2 from '@/views/pages/G/components/GB2.vue'

import GC2 from '@/components/notice.vue'
import GC1 from '@/views/pages/G/components/GC1.vue'
// import GC2 from '@/views/pages/G/components/GB4.vue'

import SafeCount from '@/views/pages/F/components/SafeCount.vue'

export default {
  name: 'G',
  components: {
    G1,
    G2,
    G3,
    G4,
    G5,
    G6,

    GC2,
    GC1,
    SafeCount
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
