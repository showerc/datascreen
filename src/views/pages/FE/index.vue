<template>
  <div id="data-view" @click="$router.push('/ff')">
    <dv-full-screen-container>
      <dv-border-box-11 title="T4看板 - 交付管理2">
        <div
          style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 10px;padding-top:60px">

          <div class="main-container">

            <div style="overflow: hidden;grid-column: 1 / span 2;grid-row: 1 / span 2;">
              <FE1/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 2;grid-row: 1 / span 2;">
              <FE2/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 2;grid-row: 3 / span 2;">
              <FE3/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 2;grid-row: 3 / span 2;">
              <FE4/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 2;grid-row: 5 / span 2;">
              <FE5/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 2;grid-row: 5 / span 2;">
              <FE6/>
            </div>
          </div>
        </div>

      </dv-border-box-11>

    </dv-full-screen-container>
  </div>
</template>

<script>
import FE1 from '@/views/pages/FE/components/FE1.vue'
import FE2 from '@/views/pages/FE/components/FE2.vue'
import FE3 from '@/views/pages/FE/components/FE3.vue'
import FE4 from '@/views/pages/FE/components/FE4.vue'
import FE5 from '@/views/pages/FE/components/FE5.vue'
import FE6 from '@/views/pages/FE/components/FE6.vue'

export default {
  name: 'FE',
  components: {
    FE1,
    FE2,
    FE3,
    FE4,
    FE5,
    FE6
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

.tag {

  color: #aaa;

  &.active {
    color: #fff;
    background: rgba(255, 255, 255, .2);
    border-radius: 2px;
  }
}

</style>
