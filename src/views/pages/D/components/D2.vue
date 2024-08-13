<template>
  <dv-border-box-12 class="box-bg-blue">
    <div class=""
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;display: flex;flex-direction: column;justify-content: space-between;position: relative;
         align-items: center;">
      <div class="module-title">B1030D粘接剂用量统计</div>

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
          data: ['一粘', '二粘', '隔板', '防雨环粘接', '外补强', '配重', '修补', '总值'],
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
          min: 0,
          max: 12000
        },
        series: [
          {
            name: '一粘',
            data: [4948, 5188, 5177, 5330, 5350, 5332, 5310, 5260, 5300, 5250, 5300, 5215],
            type: 'bar',
            stack: 'a',
            independentColor: true,
            independentColors: ['#5e57ab', '#8378ea', '#8378ea', '#8378ea', '#8378ea', '#8378ea', '#8378ea', '#8378ea', '#8378ea', '#8378ea', '#8378ea', '#8378ea']
          },
          {
            name: '二粘',
            data: [462, 290, 390, 540, 520, 540, 530, 530, 533, 538, 510, 510],
            type: 'bar',
            stack: 'a',
            independentColor: true,
            independentColors: ['#76bd90', '#9fe6b8', '#9fe6b8', '#9fe6b8', '#9fe6b8', '#9fe6b8', '#9fe6b8', '#9fe6b8', '#9fe6b8', '#9fe6b8', '#9fe6b8', '#9fe6b8'],
            shapeType: 'leftEchelon'
          },
          {
            name: '隔板',
            data: [1064, 1050, 1050, 1050, 1045, 1090, 1060, 1070, 1080, 1137, 1050, 1050],
            type: 'bar',
            stack: 'a',
            independentColor: true,
            independentColors: ['#d5b234', '#ffdb5c', '#ffdb5c', '#ffdb5c', '#ffdb5c', '#ffdb5c', '#ffdb5c', '#ffdb5c', '#ffdb5c', '#ffdb5c', '#ffdb5c', '#ffdb5c']
          },
          {
            name: '防雨环粘接',
            data: [637, 590, 585, 585, 585, 585, 570, 585, 580, 580, 570, 570],
            type: 'bar',
            stack: 'a',
            independentColor: true,
            independentColors: ['#d67557', '#ff9f7f', '#ff9f7f', '#ff9f7f', '#ff9f7f', '#ff9f7f', '#ff9f7f', '#ff9f7f', '#ff9f7f', '#ff9f7f', '#ff9f7f', '#ff9f7f']

          }, {
            name: '外补强',
            data: [24, 42.29, 30.86, 25.12, 69.36, 47.52, 69.96, 82.36, 41.84, 66.6, 68.64, 58.44],
            type: 'bar',
            stack: 'a',
            independentColor: true,
            independentColors: ['#d3496a', '#fb7293', '#fb7293', '#fb7293', '#fb7293', '#fb7293', '#fb7293', '#fb7293', '#fb7293', '#fb7293', '#fb7293', '#fb7293']
          },
          {
            name: '配重',
            data: [1064, 1050, 1050, 1050, 1045, 1090, 1060, 1070, 1080, 1137, 1050, 1050],
            type: 'bar',
            stack: 'a',
            independentColor: true,
            independentColors: ['#b73983', '#e062ae', '#e062ae', '#e062ae', '#e062ae', '#e062ae', '#e062ae', '#e062ae', '#e062ae', '#e062ae', '#e062ae', '#e062ae']
          },
          {
            name: '修补',
            data: [1064, 1050, 1050, 1050, 1045, 1090, 1060, 1070, 1080, 1137, 1050, 1050],
            type: 'bar',
            stack: 'a',
            independentColor: true,
            independentColors: ['#a28514', '#cda819', '#cda819', '#cda819', '#cda819', '#cda819', '#cda819', '#cda819', '#cda819', '#cda819', '#cda819', '#cda819']
          },
          {
            name: '总值',
            data: [9200, 9200, 9300, 9600, 9650, 9800, 9650, 9650, 9650, 9750, 9600, 9500],
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
            data: [9200, 9200, 9200, 9200, 9200, 9200, 9200, 9200, 9200, 9200, 9200, 9200],
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
