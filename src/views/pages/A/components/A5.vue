<template>
  <dv-border-box-12>
    <div class=""
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;display: flex;flex-direction: column;justify-content: space-between;position: relative;
         align-items: center;">
      <div class="module-title">工时</div>

      <dv-charts :option="option" style="width:90%;"/>

    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'A5',
  data() {
    return {
      option: {
        legend: {
          data: ['实际工时', '标准工时'],
          textStyle: {
            fontSize: 14,
            fill: '#FFF'
          },
          top: '8px'
        },
        grid: {
          top: '12px'
        },
        xAxis: {
          name: '',
          data: 'value',
          axisLabel: {
            style: {
              fill: '#FFF'
            }
          }
        },
        yAxis: {
          name: '',
          data: ['铺层', '灌注', '合模', '后固化'],
          axisLabel: {
            style: {
              fill: '#FFF'
            }
          }
        },
        series: [
          {
            name: '实际工时',
            data: [1300, 1900, 1800, 2000],
            type: 'bar'
          },
          {
            name: '标准工时',
            data: [1200, 2000, 1900, 2100],
            type: 'bar'
          }
        ]
      }

    }
  }
}
</script>

<style lang="less" scoped>

</style>
