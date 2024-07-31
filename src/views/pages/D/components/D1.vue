<template>
  <dv-border-box-12>
    <div class="box-bg-blue"
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
          data: ['壳体树脂', '预制叶根树脂', '腹板', '预制UD', '大梁补强', '内补强', '外补强', '隔板补强/导线固定', '配重盒制作', '后缘挡胶边制作', '配重', '修补', '总值'],
          textStyle: {
            fill: '#FFF'
          },
          orient: 'vertical',
          right: '100%'
        },
        grid: {
          top: '12px'
        },
        xAxis: {
          name: '叶片号',
          // data: ['壳体树脂', '预制叶根树脂', '腹板', '预制UD', '大梁补强', '内补强', '外补强', '隔板补强/导线固定', '配重盒制作', '后缘挡胶边制作', '配重', '修补'],
          data: ['目标值', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
          axisLabel: {
            style: {
              fill: '#FFF'
            }
          },
          nameTextStyle: {
            fill: '#FFF',
            fontSize: 10
          }
        },
        yAxis: {
          name: '',
          data: 'value',
          axisLabel: {
            style: {
              fill: '#FFF'
            }
          },
          min: 0
        },
        series: [
          {
            name: '壳体树脂',
            data: [4948, 5188, 5177, 5330, 5350, 5332, 5310, 5260, 5300, 5250, 5300, 5215],
            type: 'bar',
            stack: 'a'
          },
          {
            name: '预制叶根树脂',
            data: [462, 290, 390, 540, 520, 540, 530, 530, 533, 538, 510, 510],
            type: 'bar',
            stack: 'a'
          },
          {
            name: '腹板',
            data: [1064, 1050, 1050, 1050, 1045, 1090, 1060, 1070, 1080, 1137, 1050, 1050],
            type: 'bar',
            stack: 'a'
          },
          {
            name: '预制UD',
            data: [637, 590, 585, 585, 585, 585, 570, 585, 580, 580, 570, 570],
            type: 'bar',
            stack: 'a'
          }, {
            name: '大梁补强',
            data: [24, 42.29, 30.86, 25.12, 69.36, 47.52, 69.96, 82.36, 41.84, 66.6, 68.64, 58.44],
            type: 'bar',
            stack: 'a'
          },
          {
            name: '内补强',
            data: [1064, 1050, 1050, 1050, 1045, 1090, 1060, 1070, 1080, 1137, 1050, 1050],
            type: 'bar',
            stack: 'a'
          },
          {
            name: '外补强',
            data: [1064, 1050, 1050, 1050, 1045, 1090, 1060, 1070, 1080, 1137, 1050, 1050],
            type: 'bar',
            stack: 'a'
          },
          {
            name: '隔板补强/导线固定',
            data: [1064, 1050, 1050, 1050, 1045, 1090, 1060, 1070, 1080, 1137, 1050, 1050],
            type: 'bar',
            stack: 'a'
          },
          {
            name: '配重盒制作',
            data: [1064, 1050, 1050, 1050, 1045, 1090, 1060, 1070, 1080, 1137, 1050, 1050],
            type: 'bar',
            stack: 'a'
          },
          {
            name: '后缘挡胶边制作',
            data: [1064, 1050, 1050, 1050, 1045, 1090, 1060, 1070, 1080, 1137, 1050, 1050],
            type: 'bar',
            stack: 'a'
          },
          {
            name: '配重',
            data: [1064, 1050, 1050, 1050, 1045, 1090, 1060, 1070, 1080, 1137, 1050, 1050],
            type: 'bar',
            stack: 'a'
          },
          {
            name: '修补',
            data: [1064, 1050, 1050, 1050, 1045, 1090, 1060, 1070, 1080, 1137, 1050, 1050],
            type: 'bar',
            stack: 'a'
          },
          {
            name: '总值',
            data: [14500, 14500, 14700, 14900, 14900, 15300, 14900, 14900, 14900, 15600, 14900, 14700],
            type: 'line',
            label: {
              show: true
            },

            lineStyle: {
              stroke: '#f5d94e'
            },
            linePoint: {
              radius: 4,
              style: {
                fill: '#f5d94e',
                stroke: 'transparent'
              }
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
