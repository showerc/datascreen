<template>
  <dv-border-box-12 >
    <div class="" style="width:100%;height:100%;overflow: hidden">
      <div style="position: absolute;left:50%;top:11%;transform: translate(-50%,0);color:#999">缺陷总数: 50</div>
      <dv-charts :option="option" />

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

        series: [
          {
            type: 'pie',
            data: [
              { name: '半干沙', value: 93 },
              { name: '褶皱', value: 32 },
              { name: '芯材间隙', value: 65 },
              { name: '芯材台阶', value: 44 },
              { name: '灌注气泡', value: 52 },
            ],
            insideLabel: {
              show: false
            }
          }
        ],
        legend:{
          show:{
            orient:'vertical',
            right:'20%',
            top:'10%'
          }
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
