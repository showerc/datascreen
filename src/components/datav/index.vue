<template>
  <div id="data-view">
    <dv-full-screen-container >
      <dv-border-box-11 title="摸具工位展示">
        <div style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 10px;padding-top:60px">
          <div style="display: flex;justify-content: center;align-items: center;font-size:16px;gap:10px;padding:10px">
            <div >
              C1B1080D
            </div>
            <div  class="tag">
              <dv-border-box-8><div style="padding:5px 10px">铺层</div></dv-border-box-8>
            </div>

            <div class="tag ">灌注</div>
            <div class="tag">合模</div>
            <div class="tag">后固化</div>
          </div>

          <div class="main-container">
            <!--          <chart1 style="flex:1"/>-->
            <!--          <chart1 style="flex:1"/>-->
            <!--          <chart1 style="flex:1"/>-->
            <!--          <chart1 style="flex:1"/>-->
            <!--          <chart1 style="flex:1"/>-->
            <!--          <chart1 style="flex:1"/>-->

            <!--          <chart1 style="flex:1"/>-->
            <!--          <chart2 style="flex:1"/>-->
            <!--          <chart3 style="flex:1"/>-->
            <!--          <chart4 style="flex:1"/>-->
            <!--          <chart5 style="flex:1"/>-->
            <!--          <chart6 style="flex:1"/>-->
            <div style="overflow: hidden;">
              <chart1/>
            </div>
            <div style="overflow: hidden;"><chart2/></div>
            <div style="overflow: hidden;"><chart1/></div>
            <div style="overflow: hidden;"><chart1/></div>
            <div style="overflow: hidden;"><chart1/></div>
            <div style="overflow: hidden;"><chart1/></div>
          </div>

        </div>

      </dv-border-box-11>




    </dv-full-screen-container>
  </div>
</template>

<script>
import Chart1 from "@/components/datav/Chart1.vue";
import Chart2 from "@/components/datav/Chart2.vue";
import Chart3 from "@/components/datav/Chart3.vue";
import Chart4 from "@/components/datav/Chart3.vue";
import Chart5 from "@/components/datav/Chart3.vue";
import Chart6 from "@/components/datav/Chart3.vue";

export default {
  name: 'DataView',
  components: {
    Chart1,
    Chart2,
    Chart3,
    Chart4,
    Chart5,
    Chart6
  },
  data () {
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
    grid-template-columns: repeat(3, 1fr); /* 定义三列，每列占1份空间 */
    grid-template-rows: repeat(2, 1fr);   /* 定义两行，每行占1份空间 */
    gap: 10px;                            /* 设置网格项之间的间距 */
    width: 100%;                         /* 设置容器的宽度 */
    height: auto;
    flex:1;/* 设置容器的高度 */
    overflow: hidden;
  }
}
.tag{


  color:#aaa;

  &.active{
    color:#fff;
    background:rgba(255,255,255,.2);
    border-radius: 2px;
  }
}

</style>
