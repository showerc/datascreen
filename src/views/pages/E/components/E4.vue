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
          data: ['切边', '外补强', '修型', '大面打磨', '装配', '称重', '入库', '配重'],
          axisLabel: {
            style: {
              fill: '#FFF'
            }
          }
        },
        yAxis: {
          name: '',
          data: 'value',
          axisLabel: {
            style: {
              fill: '#FFF'
            }
          }
        },
        series: [
          {
            name: '实际工时',
            data: [10, 5, 15, 16, 19, 5, 10, 14],
            type: 'bar',
            label: {
              show: true
            }
          },
          {
            name: '标准工时',
            data: [15, 19, 20, 17, 20, 4, 14, 17],
            type: 'bar',
            label: {
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
