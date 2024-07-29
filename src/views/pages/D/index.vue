<template>
  <div id="data-view" @click="$router.push('/e')">
    <dv-full-screen-container>
      <dv-border-box-11 title="打胶房">
        <div
          style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 10px;padding-top:60px">

          <div class="main-container">

            <div style="overflow: hidden;grid-column: 1 / span 2;grid-row: 1 / span 3;">
              <D1/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 2;grid-row: 4 / span 3;">
              <D2/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 1;grid-row: 1 / span 3;">
              <D3/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 1;grid-row: 4 / span 3;">
              <D4/>
            </div>
          </div>

        </div>

      </dv-border-box-11>

    </dv-full-screen-container>
  </div>
</template>

<script>

import D1 from '@/views/pages/D/components/D1.vue'
import D2 from '@/views/pages/D/components/D2.vue'

import D3 from '@/components/environment.vue'
import D4 from '@/components/notice.vue'

export default {
  name: 'D',
  components: {
    D1,
    D2,
    D3,
    D4
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
    grid-template-columns: repeat(3, 1fr); /* 定义三列，每列占1份空间 */
    grid-template-rows: repeat(6, 1fr); /* 定义两行，每行占1份空间 */
    gap: 10px; /* 设置网格项之间的间距 */
    width: 100%; /* 设置容器的宽度 */
    height: auto;
    flex: 1; /* 设置容器的高度 */
    overflow: hidden;
  }
}

</style>
