<template>
  <dv-border-box-12>
    <div class="box-bg-blue"
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;display: flex;flex-direction: column;justify-content: space-between;position: relative;
         align-items: center;">
      <div class="module-title">成本</div>

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
          data: ['标准用量', 'A1101用量'],
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
          data: ['灌注树脂', '手糊树脂', '修补树脂', '粘结剂'],
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
            data: [1300, 1900, 1800, 2000],
            type: 'line',
            label: {
              show: true,
              style: {
                fill: '#EA5455'
              }
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
            name: 'A1101用量',
            data: [1200, 2000, 1900, 2100],
            type: 'bar',
            gradient: {
              color: ['#90F7EC', '#32CCBC']
            },
            label: {
              show: true
            }
          }

          // {
          //   name: 'A1102用量',
          //   data: [1100, 1800, 1800, 2000],
          //   type: 'bar',
          //   gradient: {
          //     color: ['#81FBB8', '#28C76F']
          //   },
          //   label: {
          //     show: true
          //   }
          // }

        ]
      }

    }
  }
}
</script>

<style lang="less" scoped>

</style>
