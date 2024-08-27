<template>
  <div id="data-view">
    <dv-full-screen-container>
      <dv-border-box-14 title="打胶房">
        <div
          style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 10px;padding-top:60px">

          <div class="main-container">

            <div style="overflow: hidden;grid-column: 1 / span 4;grid-row: 1 / span 3;">
              <D1/>
            </div>
            <div style="overflow: hidden;grid-column: 5 / span 4;grid-row: 1 / span 3;">
              <D2/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 2;grid-row: 4 / span 3;">
              <D3/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 4;grid-row: 4 / span 3;">
              <D4/>
            </div>
            <div style="overflow: hidden;grid-column: 7 / span 2;grid-row: 4 / span 3;">
              <Notice/>
            </div>
          </div>

        </div>

      </dv-border-box-14>

    </dv-full-screen-container>
  </div>
</template>

<script>

import D1 from '@/views/pages/D/components/D1.vue'
import D2 from '@/views/pages/D/components/D2.vue'
import D3 from '@/views/pages/D/components/D3.vue'
import D4 from '@/views/pages/D/components/D4.vue'

import Notice from '@/components/notice.vue'

export default {
  name: 'D',
  components: {
    D1,
    D2,
    D3,
    D4,
    Notice
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>

.main-container {
  grid-template-columns: repeat(8, 1fr); /* 定义三列，每列占1份空间 */
  grid-template-rows: repeat(6, 1fr); /* 定义两行，每行占1份空间 */
}

</style>
