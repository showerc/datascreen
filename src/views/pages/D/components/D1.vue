<template>
  <dv-border-box-8 class="box-bg-blue">
    <div
      style="width:100%;height:100%;overflow: hidden;flex-direction: column;align-items: flex-start;display: flex;justify-content: flex-start;position: relative;">
      <div class="module-title">B1030D树脂用量</div>

      <dv-charts :option="option" style="width:calc(100% - 50px);height:calc(100% - 70px)"/>

    </div>
  </dv-border-box-8>

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
          bottom: 20,
          orient: 'horizontal'
        },
        grid: {
          top: '12px'
        },
        xAxis: {
          name: '叶片号',
          // data: ['壳体树脂', '预制叶根树脂', '腹板', '预制UD', '大梁补强', '内补强', '外补强', '隔板补强/导线固定', '配重盒制作', '后缘挡胶边制作', '配重', '修补'],
          data: ['目标值', '01001', '01002', '01003', '01004', '01005', '01006', '01007', '01008', '01009', '01010', '01011'],
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
            stack: 'a',
            independentColor: true,
            independentColors: ['#3e627c', '#619ac3', '#619ac3', '#619ac3', '#619ac3', '#619ac3', '#619ac3', '#619ac3', '#619ac3', '#619ac3', '#619ac3', '#619ac3']
          },
          {
            name: '预制叶根树脂',
            data: [462, 290, 390, 540, 520, 540, 530, 530, 533, 538, 510, 510],
            type: 'bar',
            stack: 'a',
            independentColor: true,
            independentColors: ['#76bd90', '#9fe6b8', '#9fe6b8', '#9fe6b8', '#9fe6b8', '#9fe6b8', '#9fe6b8', '#9fe6b8', '#9fe6b8', '#9fe6b8', '#9fe6b8', '#9fe6b8']
          },
          {
            name: '腹板',
            data: [1064, 1050, 1050, 1050, 1045, 1090, 1060, 1070, 1080, 1137, 1050, 1050],
            type: 'bar',
            stack: 'a',
            independentColor: true,
            independentColors: ['#458493', '#63bbd0', '#63bbd0', '#63bbd0', '#63bbd0', '#63bbd0', '#63bbd0', '#63bbd0', '#63bbd0', '#63bbd0', '#63bbd0', '#63bbd0']
          },
          {
            name: '预制UD',
            data: [637, 590, 585, 585, 585, 585, 570, 585, 580, 580, 570, 570],
            type: 'bar',
            stack: 'a',
            independentColor: true,
            independentColors: ['#d67557', '#ff9f7f', '#ff9f7f', '#ff9f7f', '#ff9f7f', '#ff9f7f', '#ff9f7f', '#ff9f7f', '#ff9f7f', '#ff9f7f', '#ff9f7f', '#ff9f7f']
          }, {
            name: '大梁补强',
            data: [24, 42.29, 30.86, 25.12, 69.36, 47.52, 69.96, 82.36, 41.84, 66.6, 68.64, 58.44],
            type: 'bar',
            stack: 'a',
            independentColor: true,
            independentColors: ['#d3496a', '#fb7293', '#fb7293', '#fb7293', '#fb7293', '#fb7293', '#fb7293', '#fb7293', '#fb7293', '#fb7293', '#fb7293', '#fb7293']
          },
          {
            name: '内补强',
            data: [1064, 1050, 1050, 1050, 1045, 1090, 1060, 1070, 1080, 1137, 1050, 1050],
            type: 'bar',
            stack: 'a',
            independentColor: true,
            independentColors: ['#3b3b60', '#525288', '#525288', '#525288', '#525288', '#525288', '#525288', '#525288', '#525288', '#525288', '#525288', '#525288']
          },
          {
            name: '外补强',
            data: [1064, 1050, 1050, 1050, 1045, 1090, 1060, 1070, 1080, 1137, 1050, 1050],
            type: 'bar',
            stack: 'a',
            independentColor: true,
            independentColors: ['#44815e', '#66c18c', '#66c18c', '#66c18c', '#66c18c', '#66c18c', '#66c18c', '#66c18c', '#66c18c', '#66c18c', '#66c18c', '#66c18c']
          },
          {
            name: '隔板补强/导线固定',
            data: [1064, 1050, 1050, 1050, 1045, 1090, 1060, 1070, 1080, 1137, 1050, 1050],
            type: 'bar',
            stack: 'a',
            independentColor: true,
            independentColors: ['#bc66a6', '#e590d1', '#e590d1', '#e590d1', '#e590d1', '#e590d1', '#e590d1', '#e590d1', '#e590d1', '#e590d1', '#e590d1', '#e590d1']
          },
          {
            name: '配重盒制作',
            data: [1064, 1050, 1050, 1050, 1045, 1090, 1060, 1070, 1080, 1137, 1050, 1050],
            type: 'bar',
            stack: 'a',
            independentColor: true,
            independentColors: ['#bf9cc9', '#e7bcf3', '#e7bcf3', '#e7bcf3', '#e7bcf3', '#e7bcf3', '#e7bcf3', '#e7bcf3', '#e7bcf3', '#e7bcf3', '#e7bcf3', '#e7bcf3']
          },
          {
            name: '后缘挡胶边制作',
            data: [1064, 1050, 1050, 1050, 1045, 1090, 1060, 1070, 1080, 1137, 1050, 1050],
            type: 'bar',
            stack: 'a',
            independentColor: true,
            independentColors: ['#8781d3', '#9d96f5', '#9d96f5', '#9d96f5', '#9d96f5', '#9d96f5', '#9d96f5', '#9d96f5', '#9d96f5', '#9d96f5', '#9d96f5', '#9d96f5']
          },
          {
            name: '配重',
            data: [1064, 1050, 1050, 1050, 1045, 1090, 1060, 1070, 1080, 1137, 1050, 1050],
            type: 'bar',
            stack: 'a',
            independentColor: true,
            independentColors: ['#bf9cc9', '#e7bcf3', '#e7bcf3', '#e7bcf3', '#e7bcf3', '#e7bcf3', '#e7bcf3', '#e7bcf3', '#e7bcf3', '#e7bcf3', '#e7bcf3', '#e7bcf3']
          },
          {
            name: '修补',
            data: [1064, 1050, 1050, 1050, 1045, 1090, 1060, 1070, 1080, 1137, 1050, 1050],
            type: 'bar',
            stack: 'a',
            independentColor: true,
            independentColors: ['#bf9cc9', '#e7bcf3', '#e7bcf3', '#e7bcf3', '#e7bcf3', '#e7bcf3', '#e7bcf3', '#e7bcf3', '#e7bcf3', '#e7bcf3', '#e7bcf3', '#e7bcf3']
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
          },
          {
            name: '',
            data: [14500, 14500, 14500, 14500, 14500, 14500, 14500, 14500, 14500, 14500, 14500, 14500],
            type: 'line',
            label: {
              show: false
            },
            linePoint: {
              show: false
            },

            lineStyle: {
              stroke: '#584fc1'
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
