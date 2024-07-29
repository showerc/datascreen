<template>
  <div id="data-view" @click="$router.push('/fa')">
    <dv-full-screen-container>
      <dv-border-box-11 title="后处理工位">
        <div
          style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 10px;padding-top:60px">

          <div class="main-container">

            <div style="overflow: hidden;grid-column: 1 / span 1;grid-row: 1 / span 4;">
              <E1/>
            </div>
            <div style="overflow: hidden;grid-column: 2 / span 1;grid-row: 1 / span 4;">
              <E1/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 1;grid-row: 1 / span 4;">
              <E1/>
            </div>
            <div style="overflow: hidden;grid-column: 4 / span 1;grid-row: 1 / span 4;">
              <E2/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 2;grid-row: 5 / span 2;">
              <E3/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 2;grid-row: 5 / span 2;">
              <E4/>
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

export default {
  name: 'E',
  components: {
    E1,
    E2,
    E3,
    E4

  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>

#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  .main-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 定义三列，每列占1份空间 */
    grid-template-rows: repeat(6, 1fr); /* 定义两行，每行占1份空间 */
    gap: 10px; /* 设置网格项之间的间距 */
    width: 100%; /* 设置容器的宽度 */
    height: auto;
    flex: 1; /* 设置容器的高度 */
    overflow: hidden;
  }
}

</style>
