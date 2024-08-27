<template>
  <dv-border-box-12>
    <div class="box-bg-blue"
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;justify-content: space-between;position: relative;">
      <div class="chart-title">
        B1030E 结构胶用量统计
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
            { name: '目标用量', color: '#32CCBC' },
            { name: '实际用量', color: '#EA5455' }
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
                fill: '#32CCBC'
              }
            },
            // lineArea: {
            //   show: true,
            //   gradient: ['#90F7EC', '#32CCBC']
            // },
            lineStyle: {
              stroke: '#32CCBC',
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
              color: ['#FEB692', '#EA5455']

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
