<template>
  <dv-border-box-12>
    <div class=""
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;display: flex;flex-direction: column;justify-content: space-between;position: relative;
         align-items: center;">
      <div class="module-title">成本</div>

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
          data: ['标准用量', '实际用量'],
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
          data: ['灌注树脂', '手糊树脂', '修补树脂', '粘结剂'],
          axisLabel: {
            style: {
              fill: '#FFF'
            }
          }
        },
        series: [
          {
            name: '标准用量',
            data: [1300, 1900, 1800, 2000],
            type: 'bar'
          },
          {
            name: '实际用量',
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
