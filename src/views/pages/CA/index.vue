<template>
  <div id="data-view">
    <dv-full-screen-container>
      <dv-border-box-14 title="库房 - 1">
        <div
          style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 10px;padding-top:60px">

          <div class="main-container">

            <div style="overflow: hidden;grid-column: 1 / span 5;grid-row: 1 / span 6;">
              <C1/>
            </div>
            <div style="overflow: hidden;grid-column: 6 / span 2;grid-row: 1 / span 3;">
              <C2/>
            </div>
            <div style="overflow: hidden;grid-column: 6 / span 2;grid-row: 4 / span 3;">
              <C3/>
            </div>
          </div>

        </div>

      </dv-border-box-14>

    </dv-full-screen-container>
  </div>
</template>

<script>

import C1 from '@/views/pages/CA/components/C1.vue'
import C2 from '@/views/pages/CA/components/C2.vue'

import C3 from '@/components/notice.vue'

export default {
  name: 'C',
  components: {
    C1,
    C2,
    C3
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>

.main-container {
  grid-template-columns: repeat(7, 1fr); /* 定义三列，每列占1份空间 */
  grid-template-rows: repeat(6, 1fr); /* 定义两行，每行占1份空间 */
}

</style>
