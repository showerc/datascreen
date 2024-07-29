<template>
  <div id="data-view" @click="$router.push('/fg')">
    <dv-full-screen-container>
      <dv-border-box-11 title="T4看板 - 交付管理3">
        <div
          style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 10px;padding-top:60px">

          <div class="main-container">

            <div style="overflow: hidden;grid-column: 1 / span 3;grid-row: 1 / span 2;">
              <FF1/>
            </div>
            <div style="overflow: hidden;grid-column: 4 / span 3;grid-row: 1 / span 2;">
              <FF2/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 2;grid-row: 3 / span 2;">
              <FF3/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 2;grid-row: 3 / span 2;">
              <FF4/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 2;grid-row: 5 / span 2;">
              <FF5/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 2;grid-row: 5 / span 2;">
              <FF6/>
            </div>
            <div style="overflow: hidden;grid-column: 5 / span 2;grid-row: 3 / span 4;">
              <FF7/>
            </div>
          </div>
        </div>

      </dv-border-box-11>

    </dv-full-screen-container>
  </div>
</template>

<script>
import FF1 from '@/views/pages/FF/components/FF1.vue'
import FF2 from '@/views/pages/FF/components/FF2.vue'
import FF3 from '@/views/pages/FF/components/FF3.vue'
import FF4 from '@/views/pages/FF/components/FF4.vue'
import FF5 from '@/views/pages/FF/components/FF5.vue'
import FF6 from '@/views/pages/FF/components/FF6.vue'
import FF7 from '@/views/pages/FF/components/FF7.vue'

export default {
  name: 'FF',
  components: {
    FF1,
    FF2,
    FF3,
    FF4,
    FF5,
    FF6,
    FF7
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
