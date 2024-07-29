<template>
  <dv-border-box-12>
    <div class=""
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title" style="margin-bottom: 10px">生产状态</div>
      <div
        style="display: flex;flex-direction: column;justify-content: space-between;align-items: center;flex:1;padding-bottom: 25px">
        <div>
          <dv-border-box-2 class="text-box item">C1-B1080D</dv-border-box-2>
          <dv-border-box-7 class="text-box item">铺层</dv-border-box-7>
          <dv-border-box-8 class="text-box item">灌注</dv-border-box-8>
          <dv-border-box-7 class="text-box item">合模</dv-border-box-7>
          <dv-border-box-7 class="text-box item">后固化</dv-border-box-7>
        </div>
        <img src="../img/qrcode.png" style="width:7vw;object-fit: cover">
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
  height: 2vw;
}
</style>
