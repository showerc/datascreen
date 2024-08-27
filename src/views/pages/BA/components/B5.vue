<template>
  <dv-border-box-12>
    <div class="box-bg-blue"
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;justify-content: space-between;position: relative;">
      <div class="module-title">{{ title }}</div>

      <dv-charts :option="option" style="width:calc(100% - 40px);height:calc(100% - 40px)"/>
      <dv-decoration-2 style="width:80%;height:50px;position: absolute;bottom:0px;left:10%"/>

    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'A5',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      option: {
        legend: {
          data: ['标准时间', '实际时间', '实际趋势'],
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
          data: ['01001', '01002', '01003', '01004', '01005', '01006', '01007', '01008', '01009'],
          axisLabel: {
            style: {
              fill: '#FFF'
            }
          },
          splitNumber: 4
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
            name: '标准时间',
            data: [35, 35, 35, 35, 35, 35, 35, 35, 35],
            type: 'line',
            smooth: true,
            label: {
              show: true,
              style: {
                fill: '#FFF720'
              }
            },
            lineArea: {
              show: true,
              gradient: ['#FFF720', '#3CD500']
            },
            lineStyle: {
              stroke: '#FFF720',
              lineWidth: 1
            },
            linePoint: {
              show: false

            }

          },
          {
            name: '实际时间',
            data: [31, 35, 34, 37, 32, 33, 36, 32, 33],
            type: 'bar',
            gradient: {
              color: ['#65FDF0', '#1D6FA3']

            },
            label: {
              show: true
            }

          },
          {
            name: '实际趋势',
            data: [31, 35, 34, 37, 32, 33, 36, 32, 33],
            type: 'line',
            // smooth: true,
            // label: {
            //   show: true,
            //   style: {
            //     fill: '#FDEB71'
            //   }
            // },
            // lineArea: {
            //   show: true,
            //   gradient: ['#65FDF0', '#1D6FA3']
            // },
            lineStyle: {
              stroke: '#65FDF0',
              lineWidth: 1
            },
            linePoint: {
              radius: 4,
              style: {
                stroke: '#65FDF0'

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
