<template>
  <div id="data-view" @click="$router.push('/fc')">
    <dv-full-screen-container>
      <dv-border-box-11 title="T4看板 - 质量管理1">
        <div
          style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 10px;padding-top:60px">

          <div class="main-container">

            <div style="overflow: hidden;grid-column: 1 / span 2;grid-row: 1 / span 2;">
              <FB1/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 2;grid-row: 1 / span 2;">
              <FB2/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 2;grid-row: 3 / span 2;">
              <FB3/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 2;grid-row: 3 / span 2;">
              <FB4/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 2;grid-row: 5 / span 2;">
              <FB5/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 2;grid-row: 5 / span 2;">
              <FB6/>
            </div>
          </div>
        </div>

      </dv-border-box-11>

    </dv-full-screen-container>
  </div>
</template>

<script>
import FB1 from '@/views/pages/FB/components/FB1.vue'
import FB2 from '@/views/pages/FB/components/FB2.vue'
import FB3 from '@/views/pages/FB/components/FB3.vue'
import FB4 from '@/views/pages/FB/components/FB4.vue'
import FB5 from '@/views/pages/FB/components/FB5.vue'
import FB6 from '@/views/pages/FB/components/FB6.vue'

export default {
  name: 'FB',
  components: {
    FB1,
    FB2,
    FB3,
    FB4,
    FB5,
    FB6

  },
  data() {
    return {}
  }
}
</script>

<style lang="less">
#dv-full-screen-container {
  background-image: url('~@/assets/img/bg.png');
  background-size: 100% 100%;
  box-shadow: 0 0 3px blue;
  display: flex;
  flex-direction: column;
}

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
