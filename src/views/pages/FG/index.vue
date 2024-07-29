<template>
  <div id="data-view" @click="$router.push('/fh')">
    <dv-full-screen-container>
      <dv-border-box-11 title="T4看板 - 成本管理1">
        <div
          style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 10px;padding-top:60px">

          <div class="main-container">

            <div style="overflow: hidden;grid-column: 1 / span 2;grid-row: 1 / span 3;">
              <FG1/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 2;grid-row: 1 / span 3;">
              <FG2/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 2;grid-row: 4 / span 3;">
              <FG3/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 2;grid-row: 4 / span 3;">
              <FG4/>
            </div>

          </div>
        </div>

      </dv-border-box-11>

    </dv-full-screen-container>
  </div>
</template>

<script>
import FG1 from '@/views/pages/FG/components/FG1.vue'
import FG2 from '@/views/pages/FG/components/FG2.vue'
import FG3 from '@/views/pages/FG/components/FG3.vue'
import FG4 from '@/views/pages/FG/components/FG4.vue'

export default {
  name: 'FG',
  components: {
    FG1,
    FG2,
    FG3,
    FG4
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>

.main-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 10px; /* 设置网格项之间的间距 */
  width: 100%; /* 设置容器的宽度 */
  height: auto;
  flex: 1; /* 设置容器的高度 */
  overflow: hidden;
}

</style>
