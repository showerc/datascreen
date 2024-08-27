<template>
  <div id="data-view">
    <dv-full-screen-container>
      <dv-border-box-14 title="预制件工位 - 预制叶根/预制UD">
        <div
          style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 60px 10px 10px;">

          <div class="main-container">

            <div style="overflow: hidden;grid-column: 1 / span 1;grid-row:1 / span 2;">
              <B1 title="预制叶根生产状态"/>
            </div>
            <div style="overflow: hidden;grid-column: 2 / span 1;grid-row:1 / span 2;">
              <B1 title="预制UD生产状态"/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 2;grid-row: 1 / span 2;">
              <B3/>
            </div>
            <div style="overflow: hidden;grid-column: 5 / span 2;grid-row: 1 / span 2;">
              <B5 title="预制叶根 CT"/>
            </div>
            <div style="overflow: hidden;grid-column: 7 / span 2;grid-row: 1 / span 2;">
              <B5 title="预制UD CT"/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 1;grid-row: 3 / span 2;">
              <B7/>
            </div>
            <div style="overflow: hidden;grid-column: 2 / span 2;grid-row: 3 / span 1;">
              <B6/>
            </div>
            <div style="overflow: hidden;grid-column: 2 / span 2;grid-row: 4 / span 1;">
              <B4/>
            </div>
            <div style="overflow: hidden;grid-column: 4 / span 3;grid-row: 3 / span 2;">
              <B2/>
            </div>

            <div style="overflow: hidden;grid-column: 7 / span 2;grid-row: 3 / span 2;">
              <Notice/>
            </div>
          </div>

        </div>

      </dv-border-box-14>

    </dv-full-screen-container>
  </div>
</template>

<script>

import B1 from '@/views/pages/BA/components/B1.vue'
import B2 from '@/views/pages/BA/components/B2.vue'
import B3 from '@/views/pages/BA/components/B3.vue'
import B4 from '@/views/pages/BA/components/B4.vue'
import B5 from '@/views/pages/BA/components/B5.vue'
import B6 from '@/views/pages/BA/components/B6.vue'
import B7 from '@/views/pages/BA/components/B7.vue'
import Notice from '@/components/notice.vue'

export default {
  name: 'BA',
  components: {
    B1,
    B2,
    B3,
    B4,
    B5,
    B6,
    B7,
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
  grid-template-rows: repeat(4, 1fr); /* 定义两行，每行占1份空间 */
}

</style>
