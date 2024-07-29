<template>
  <div id="data-view" @click="$router.push('/fe')">
    <dv-full-screen-container>
      <dv-border-box-11 title="T4看板 - 交付管理1">
        <div
          style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 10px;padding-top:60px">

          <div class="main-container">

            <div style="overflow: hidden;grid-column: 1 / span 2;grid-row: 1 / span 2;">
              <FD1/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 2;grid-row: 1 / span 2;">
              <FD2/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 2;grid-row: 3 / span 2;">
              <FD3/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 2;grid-row: 3 / span 2;">
              <FD4/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 2;grid-row: 5 / span 2;">
              <FD5/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 2;grid-row: 5 / span 2;">
              <FD6/>
            </div>
          </div>
        </div>

      </dv-border-box-11>

    </dv-full-screen-container>
  </div>
</template>

<script>
import FD1 from '@/views/pages/FD/components/FD1.vue'
import FD2 from '@/views/pages/FD/components/FD2.vue'
import FD3 from '@/views/pages/FD/components/FD3.vue'
import FD4 from '@/views/pages/FD/components/FD4.vue'
import FD5 from '@/views/pages/FD/components/FD5.vue'
import FD6 from '@/views/pages/FD/components/FD6.vue'

export default {
  name: 'FD',
  components: {
    FD1,
    FD2,
    FD3,
    FD4,
    FD5,
    FD6
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
