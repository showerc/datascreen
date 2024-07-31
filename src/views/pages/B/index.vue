<template>
  <div id="data-view" @click="$router.push('/c')">
    <dv-full-screen-container>
      <dv-border-box-14 title="预制件工位">
        <div
          style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 10px;padding-top:60px">

          <div class="main-container">

            <div style="overflow: hidden;grid-column: 1 / span 5;grid-row: 1 / span 3;">
              <B1/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 4;grid-row: 4 / span 3;">
              <B2/>
            </div>
            <div style="overflow: hidden;grid-column: 6 / span 1;grid-row: 1 / span 3;">
              <B3/>
            </div>
            <div style="overflow: hidden;grid-column: 5 / span 2;grid-row: 4 / span 3;">
              <B4/>
            </div>
          </div>

        </div>

      </dv-border-box-14>

    </dv-full-screen-container>
  </div>
</template>

<script>

import B1 from '@/views/pages/A/components/A2.vue'
import B2 from '@/views/pages/B/components/B2.vue'
import B3 from '@/components/environment.vue'
import B4 from '@/components/notice.vue'

export default {
  name: 'B',
  components: {
    B1,
    B2,
    B3,
    B4
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>

.main-container {
  grid-template-columns: repeat(6, 1fr); /* 定义三列，每列占1份空间 */
  grid-template-rows: repeat(6, 1fr); /* 定义两行，每行占1份空间 */
}

</style>
