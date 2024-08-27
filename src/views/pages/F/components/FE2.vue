<template>
  <dv-border-box-12>
    <div class="box-bg-blue"
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;justify-content: space-between;position: relative;">
      <div class="chart-title">
        B1030E 树脂用量统计
        <dv-decoration-3 style="width:200px;height:20px;"/>
      </div>
      <dv-charts :option="option" style="height: calc(100% - 20px)"/>

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
          data: [
            { name: '目标用量', color: '#3CD500' },
            { name: '实际用量', color: '#1D6FA3' }
          ],
          textStyle: {
            fontSize: 14,
            fill: '#FFF'
          },
          bottom: '0'
        },
        grid: {
          bottom: '12px'
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
            name: '目标用量',
            data: [35, 35, 35, 35, 35, 35, 35, 35, 35],
            type: 'line',
            smooth: true,
            label: {
              show: true,
              style: {
                fill: '#3CD500'
              }
            },
            // lineArea: {
            //   show: true,
            //   gradient: ['#FFF720', '#3CD500']
            // },
            lineStyle: {
              stroke: '#3CD500',
              lineWidth: 1
            },
            linePoint: {
              show: false

            }

          },
          {
            name: '实际用量',
            data: [31, 35, 34, 37, 32, 33, 36, 32, 33],
            type: 'bar',
            gradient: {
              color: ['#65FDF0', '#1D6FA3']

            },
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
