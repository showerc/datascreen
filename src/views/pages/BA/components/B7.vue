<template>
  <dv-border-box-12>
    <div class="box-bg-blue"
         style="height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px;padding:20px;">
      <!--      <div class="module-title">工艺文件</div>-->
      <div
        style="width:100%;display: flex;flex-direction: column;justify-content: flex-start;align-items: stretch;padding-bottom: 10px;gap:2vh;">

        <div style="display: flex;justify-content: center;align-items: center;flex-direction: column;width:100%">
          <dv-decoration-11 style="width:100%;height:50px;margin-bottom: 10px">工艺文件1</dv-decoration-11>
          <img src="@/assets/img/qrcode.png" style="width:12vh;object-fit: cover">
        </div>
        <div style="display: flex;justify-content: center;align-items: center;flex-direction: column;width:100%">
          <dv-decoration-11 style="width:100%;height:50px;margin-bottom: 10px">工艺文件2</dv-decoration-11>
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
  height: 4vh;
}
</style>
