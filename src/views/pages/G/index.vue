<template>
  <div id="data-view" @click="$router.push('/')">
    <dv-full-screen-container>
      <dv-border-box-14 title="新疆项⽬部T4 精益运营管理看板">
        <div
          style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 10px;padding-top:60px">

          <div class="main-container">
            <div style="overflow: hidden;grid-column: 1 / span 4;grid-row: 1 / span 1;">
              <safe-count/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 4;grid-row: 2 / span 2;">
              <GA1/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 4;grid-row: 4 / span 3;">
              <GA2/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 4;grid-row: 7 / span 3;">
              <GA3/>
            </div>
            <div style="overflow: hidden;grid-column: 5 / span 8;grid-row: 1 / span 3;">
              <GB1/>

            </div>
            <div style="overflow: hidden;grid-column: 5 / span 4;grid-row: 4 / span 2;">
              <GB2/>

            </div>
            <div style="overflow: hidden;grid-column: 9 / span 4;grid-row: 4 / span 2;">
              <GB3/>

            </div>
            <div style="overflow: hidden;grid-column: 5 / span 4;grid-row: 6 / span 4;">
              <GB4/>

            </div>
            <div style="overflow: hidden;grid-column: 9 / span 4;grid-row: 6 / span 4;">
              <GB5/>

            </div>
            <div style="overflow: hidden;grid-column: 13 / span 4;grid-row: 1 / span 5;">
              <GC1/>
            </div>
            <div style="overflow: hidden;grid-column: 13 / span 4;grid-row: 6 / span 4;">
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
import GA2 from '@/views/pages/G/components/GA2.vue'
import GA3 from '@/views/pages/G/components/GA3.vue'

import GB1 from '@/views/pages/G/components/GB1.vue'
import GB2 from '@/views/pages/G/components/GB2.vue'
import GB3 from '@/views/pages/G/components/GB3.vue'
import GB4 from '@/views/pages/G/components/GB4.vue'
import GB5 from '@/components/notice.vue'
import GC1 from '@/views/pages/G/components/GC1.vue'
import GC2 from '@/views/pages/G/components/GC2.vue'

import SafeCount from '@/views/pages/FA/components/SafeCount.vue'

export default {
  name: 'G',
  components: {
    GA1,
    GA2,
    GA3,
    GB1,
    GB2,
    GB3,
    GB4,
    GB5,
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
  grid-template-rows: repeat(9, 1fr);

}

</style>
