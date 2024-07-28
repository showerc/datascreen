<template>
  <dv-border-box-12>
    <div class=""
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;display: flex;flex-direction: column;justify-content: space-between;position: relative;
         align-items: center;">
      <div class="module-title">B1030D树脂用量</div>

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
          name: '叶片号',
          data: ['壳体树脂', '预制叶根树脂', '腹板', '预制UD', '大梁补强', '内补强', '外补强', '隔板补强/导线固定', '配重盒制作', '后缘挡胶边制作', '配重', '修补'],
          // data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
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
            name: '目标用量',
            data: [4948, 462, 1064, 637, 24, 60, 60, 24, 10, 10, 10, 0],
            type: 'bar',
            label: { show: true, position: 'top' }
          },
          {
            name: '实际用量',
            data: [4948, 462, 1064, 637, 24, 60, 60, 24, 10, 10, 10, 0],
            type: 'bar',
            label: { show: true, position: 'top' }
          }
        ]
      }

    }
  }
}
</script>

<style lang="less" scoped>

</style>
