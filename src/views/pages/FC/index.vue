<template>
  <div id="data-view" @click="$router.push('/fd')">
    <dv-full-screen-container>
      <dv-border-box-11 title="T4看板 - 质量管理2">
        <div
          style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 10px;padding-top:60px">

          <div class="main-container">

            <div style="overflow: hidden;grid-column: 1 / span 2;grid-row: 1 / span 2;">
              <FC1/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 2;grid-row: 1 / span 2;">
              <FC2/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 3;grid-row: 3 / span 4;">
              <FC3/>
            </div>
            <div style="overflow: hidden;grid-column: 4 / span 1;grid-row: 3 / span 4;">
              <FC4/>
            </div>
          </div>
        </div>

      </dv-border-box-11>

    </dv-full-screen-container>
  </div>
</template>

<script>
import FC1 from '@/views/pages/FC/components/FC1.vue'
import FC2 from '@/views/pages/FC/components/FC2.vue'
import FC3 from '@/views/pages/FC/components/FC3.vue'
import FC4 from '@/views/pages/FC/components/FC4.vue'

export default {
  name: 'FD',
  components: {
    FC1,
    FC2,
    FC3,
    FC4

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
