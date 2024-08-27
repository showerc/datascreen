<template>
  <dv-border-box-8>
    <div class="box-bg-blue"
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;display: flex;flex-direction: column;justify-content: space-between;position: relative;
         align-items: center;">
      <div class="module-title">预制件树脂成本</div>

      <dv-charts :option="option" style="width:calc(100% - 40px);height:calc(100% - 40px)"/>
      <!--      <dv-decoration-2 style="width:80%;height:50px;position: absolute;bottom:0px;left:10%"/>-->

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
          data: [{
            name: '标准用量',
            color: '#EA5455'
          }, {
            name: '实际用量',
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
          data: ['预制叶根', '预制UD'],
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
            name: '标准用量',
            data: [1300, 1900],
            type: 'bar',
            label: {
              show: true
              // style: {
              //   fill: '#EA5455'
              // }
            },
            gradient: {
              color: ['#FEB692', '#EA5455']
            },
            lineArea: {
              show: true,
              gradient: ['#FEB692', '#EA5455']
            },
            lineStyle: {
              stroke: '#EA5455',
              lineWidth: 1
            },
            linePoint: {
              radius: 4,
              style: {
                stroke: '#EA5455'

              }
            }
          },
          {
            name: '实际用量',
            data: [1200, 2000],
            type: 'bar',
            gradient: {
              color: ['#90F7EC', '#32CCBC']
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
