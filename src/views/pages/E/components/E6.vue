<template>
  <dv-border-box-12>
    <div class="box-bg-blue"
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;
         align-items: center;">
      <div class="module-title">发货工装库存</div>

      <dv-charts :option="option" style="width:100%;height:100%"/>
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
              { name: 'B1030E', value: 15 },
              { name: 'B1080D', value: 13 },
              { name: 'B973A', value: 11 },
              { name: 'B950A', value: 7 }
            ],
            roseType: true,
            outsideLabel: {
              show: true,
              formatter: '{name} - {value}',
              labelLineBendGap: 1,
              labelLineEndLength: 5,
              style: {
                fontSize: 14,
                fill: '#fff'
              }
            }
            // outsideLabel: {
            //   show: false,
            //   formatter: '{name} - {value}'
            // }
          }
        ]

      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
