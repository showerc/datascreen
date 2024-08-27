<template>
  <dv-border-box-12>
    <div class="box-bg-blue"
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;justify-content: space-between;position: relative;">
      <div class="module-title">胶机数量统计</div>

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
          data: [{
            name: '胶机数量',
            color: '#FDEB71'
          }, {
            name: '正常使用',
            color: '#0396FF'
          }, {
            name: '待维修',
            color: '#32CCBC'
          }],
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
          data: ['粘接剂混胶机', '电动地牛', '灌注一体机', '三组分手糊机'],
          axisLabel: {
            style: {
              fill: '#FFF'
            }
          },
          splitNumber: 4
        },
        yAxis: {
          name: '',
          min: 0,
          data: 'value',
          axisLabel: {
            style: {
              fill: '#FFF'
            }
          }

        },
        series: [

          {
            name: '胶机数量',

            data: [20, 30, 30, 20],
            type: 'bar',
            gradient: {
              color: ['#FDEB71', '#F8D800']

            },
            label: {
              show: true,
              style: {
                fill: '#FFF'
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
            name: '待维修',
            stack: '1',
            data: [5, 10, 5, 2],
            type: 'bar',
            gradient: {
              color: ['#90F7EC', '#32CCBC']

            },
            label: {
              show: true,
              style: {
                fill: '#000'
              }
            }

          },
          {
            name: '正常使用',
            stack: '1',
            data: [15, 20, 25, 18],
            type: 'bar',
            gradient: {
              color: ['#ABDCFF', '#0396FF']

            },
            label: {
              show: true,
              style: {
                fill: '#fff'
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
