<template>
  <dv-border-box-12>
    <div class="box-bg-blue"
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;justify-content: space-between;position: relative;">
      <div class="module-title">工序用时</div>

      <dv-charts :option="option" style="width:calc(100% - 40px);height:calc(100% - 40px)"/>
      <dv-decoration-2 style="width:80%;height:50px;position: absolute;bottom:0px;left:10%"/>

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
          data: ['标准工时', '实际工时'],
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
          data: ['铺层', '灌注', '合模', '后固化'],
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
            name: '标准工时',
            data: [35, 35, 45, 25],
            type: 'line',
            label: {
              show: true,
              style: {
                fill: '#FDEB71'
              }
            },
            lineArea: {
              show: true,
              gradient: ['#FDEB71', '#F8D800']
            },
            lineStyle: {
              stroke: '#FDEB71',
              lineWidth: 1
            },
            linePoint: {
              radius: 4,
              style: {
                stroke: '#FDEB71'

              }
            }

          },
          {
            name: '实际工时',
            data: [31, 42, 48, 22],
            type: 'bar',
            gradient: {
              color: ['#ABDCFF', '#0396FF']
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
