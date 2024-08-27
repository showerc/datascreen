<template>
  <dv-border-box-12>
    <div class="box-bg-blue"
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title">生产状态</div>
      <div
        style="display: flex;flex-direction: column;justify-content: space-between;align-items: center;padding-bottom: 10px;gap:1vh;">
        <div
          style="display: flex;flex-direction: column;justify-content: space-between;align-items: center;flex:1;padding-bottom: 10px;gap:1vh;">
          <dv-border-box-6 :color="['#8360c3','#2ebf91']"
                           class="text-box item"
                           style="font-weight: bold;font-size: 16px;height:4vh;">C1-B1080D-00021-XJ
          </dv-border-box-6>
          <dv-border-box-7 :color="['#D73E68','#FBC79A']" class="text-box item">铺层</dv-border-box-7>
          <dv-border-box-7 class="text-box item">灌注</dv-border-box-7>
          <dv-border-box-8 class="text-box item">合模</dv-border-box-8>
          <dv-border-box-7 class="text-box item">后固化</dv-border-box-7>
        </div>
        <div style="display: flex;justify-content: center;align-items: center;flex-direction: column">
          <dv-decoration-7 style="width:240px;height:30px;margin-bottom: 10px">作业指导书</dv-decoration-7>
          <img src="@/assets/img/qrcode.png" style="width:12vh;object-fit: cover">
        </div>
      </div>
    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'A1',
  data() {
    return {
      option: {
        // title: {
        //   text: '质量情况',
        //   style: {
        //     fill: '#fff',
        //     fontSize: 20
        //   }
        // },

        series: [
          {
            type: 'pie',
            data: [
              { name: '半干沙', value: 15 },
              { name: '褶皱', value: 13 },
              { name: '芯材间隙', value: 11 },
              { name: '芯材台阶', value: 7 },
              { name: '灌注气泡', value: 6 }
            ],
            insideLabel: {
              show: true
            },
            outsideLabel: {
              show: true,
              formatter: '{name} - {value}'
            }
          }
        ]

      }
    }
  }
}
</script>

<style lang="less" scoped>
.item {
  width: 10vw;
  height: 3.5vh;
  font-size: 14px;
}
</style>
