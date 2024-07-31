<template>
  <dv-border-box-12>
    <div class="box-bg-blue"
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;
         align-items: center;">
      <div class="module-title">质量情况</div>
      <div class="module-sub-title">缺陷总数: 50</div>

      <dv-charts :option="option" style="width:150%;"/>
      <dv-decoration-2 style="width:80%;height:50px;position: absolute;bottom:0;left:10%"/>

    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'A3',
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
              show: true,
              formatter: '{name} - {value}',
              style: {
                fontSize: 14,
                fill: '#000318'
              }
            },
            outsideLabel: {
              show: false,
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

</style>
