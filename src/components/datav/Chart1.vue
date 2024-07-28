<template>
  <dv-border-box-12 >
    <div class="" style="width:100%;height:100%;overflow: hidden">
      <div style="position: absolute;left:50%;top:11%;transform: translate(-50%,0);color:#999">缺陷总数: 50</div>
      <dv-charts :option="option" />
      <dv-decoration-2 style="width:80%;height:50px;position: absolute;bottom:0px;left:10%" />

    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'Chart1',
  data () {
    return {
      option: {
        title: {
          text: '质量情况',
          style:{
            fill:'#fff',
            fontSize:20
          }
        },
        legend: {
          show:true,
          data: [{name:'半干沙'}],
          orient: 'vertical',
        },
        series: [
          {
            type: 'pie',
            data: [
              { name: '半干沙', value: 15 },
              { name: '褶皱', value: 13 },
              { name: '芯材间隙', value: 11 },
              { name: '芯材台阶', value: 7 },
              { name: '灌注气泡', value: 6 },
            ],
            insideLabel: {
              show: true
            },
            outsideLabel:{
              show:true,
              formatter: '{name} - {value}'
            }
          }
        ],

      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
