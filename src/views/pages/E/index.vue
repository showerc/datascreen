<template>
  <div id="data-view">
    <dv-full-screen-container>
      <dv-border-box-11 title="后处理工位">
        <div
          style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 10px;padding-top:60px">

          <div class="main-container">

            <div style="overflow: hidden;grid-column: 1 / span 6;grid-row: 1 / span 2;">
              <E1/>
            </div>

            <div style="overflow: hidden;grid-column: 1 / span 3;grid-row: 3 / span 2;">
              <E3/>
            </div>
            <div style="overflow: hidden;grid-column: 4 / span 3;grid-row: 3 / span 2;">

              <E4/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 3;grid-row: 5 / span 2;">
              <E5/>
            </div>
            <div style="overflow: hidden;grid-column: 4 / span 2;grid-row: 5 / span 2;">
              <E2/>
            </div>
            <div style="overflow: hidden;grid-column: 6 / span 1;grid-row: 5 / span 2;">
              <E6/>
            </div>
          </div>

        </div>

      </dv-border-box-11>

    </dv-full-screen-container>
  </div>
</template>

<script>

import E1 from '@/views/pages/E/components/E1.vue'
import E2 from '@/views/pages/E/components/E2.vue'
import E3 from '@/views/pages/E/components/E3.vue'
import E4 from '@/views/pages/E/components/E4.vue'
import E5 from '@/views/pages/E/components/E5.vue'
import E6 from '@/views/pages/E/components/E6.vue'

export default {
  name: 'E',
  components: {
    E1,
    E2,
    E3,
    E4,
    E5,
    E6
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>

.main-container {
  gap: 20px;
  grid-template-columns: repeat(6, 1fr); /* 定义三列，每列占1份空间 */
  grid-template-rows: repeat(6, 1fr); /* 定义两行，每行占1份空间 */

}

</style>
