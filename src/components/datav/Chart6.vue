<template>
<dv-border-box-12 >
    <div class="" style="width:100%;height:100%;overflow: hidden">

      <dv-charts :option="option" />

      <dv-decoration-2 style="height:10px;" />
    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'Chart6',
  data () {
    return {
      option: {
        title: {
          text: '畅销饮料占比饼状图'
        },
        series: [
          {
            type: 'pie',
            data: [
              { name: '可口可乐', value: 93 },
              { name: '百事可乐', value: 32 },
              { name: '哇哈哈', value: 65 },
              { name: '康师傅', value: 44 },
              { name: '统一', value: 52 },
            ],
            insideLabel: {
              show: true
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
