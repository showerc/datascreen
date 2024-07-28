<template>
  <div id="data-view">
    <dv-full-screen-container>
      <dv-border-box-11 title="模具工位">
        <div
          style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 10px;padding-top:60px">
          <!--          <div style="display: flex;justify-content: center;align-items: center;font-size:16px;gap:10px;padding:10px">-->
          <!--            <div>-->
          <!--              C1B1080D-->
          <!--            </div>-->
          <!--            <div class="tag">-->
          <!--              <dv-border-box-8>-->
          <!--                <div style="padding:5px 10px">铺层</div>-->
          <!--              </dv-border-box-8>-->
          <!--            </div>-->

          <!--            <div class="tag ">灌注</div>-->
          <!--            <div class="tag">合模</div>-->
          <!--            <div class="tag">后固化</div>-->
          <!--          </div>-->

          <div class="main-container">

            <div style="overflow: hidden;grid-column: 1 / span 1;grid-row: 1 / span 3;">
              <A1/>
            </div>
            <div style="overflow: hidden;grid-column: 2 / span 2;grid-row: 1 / span 4;">
              <A2/>
            </div>
            <div style="overflow: hidden;grid-column: 4 / span 1;grid-row: 1 / span 3;">
              <A3/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 1;grid-row: 4 / span 3;">
              <A4/>
            </div>
            <div style="overflow: hidden;grid-column: 2 / span 1;grid-row: 5 / span 2;">
              <A5/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 1;grid-row: 5 / span 2;">
              <A6/>
            </div>
            <div style="overflow: hidden;grid-column: 4 / span 1;grid-row: 4 / span 3;">
              <A7/>
            </div>
          </div>

        </div>

      </dv-border-box-11>

    </dv-full-screen-container>
  </div>
</template>

<script>
import A1 from '@/views/pages/A/components/A1.vue'
import A2 from '@/views/pages/A/components/A2.vue'
import A3 from '@/views/pages/A/components/A3.vue'
import A4 from '@/components/environment.vue'
import A5 from '@/views/pages/A/components/A5.vue'
import A6 from '@/views/pages/A/components/A6.vue'
import A7 from '@/components/notice.vue'

export default {
  name: 'A',
  components: {
    A1,
    A2,
    A3,
    A4,
    A5,
    A6,
    A7
  },
  data() {
    return {}
  }
}
</script>

<style lang="less">
#dv-full-screen-container {
  background-image: url('./img/bg.png');
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
