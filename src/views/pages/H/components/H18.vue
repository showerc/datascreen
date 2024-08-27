<template>
  <div class="box-white">
    <my-header title="B973A产线 DPU数据统计" type="red"/>
    <dv-charts :option="option" style="width: 100%;align-self: flex-start"/>
  </div>
</template>

<script>
export default {
  name: 'FB2',
  data() {
    return {
      option: {},
      dateArray: [],
      startIndex: 0,
      refreshInterval: null
    }
  },
  created() {
    const startDate = new Date('2024-07-26')
    const endDate = new Date('2024-08-25')
    const option = {
      legend: {
        data: [{
          name: '检验数据',
          color: '#0396FF'
        }, {
          name: 'DPU目标',
          color: '#7200da'
        }, {
          name: '相控阵检验',
          color: '#f9320c'
        }],
        top: 13,
        textStyle: {
          fontSize: 12,
          fill: '#000'
        }

      },
      grid: {
        top: 60,
        bottom: 30
      },
      xAxis: {
        name: '',
        data: [],
        axisLabel: {
          style: {
            fontSize: 9,
            rotate: 350,
            textAlign: 'center',
            textBaseline: 'top',
            fill: '#000'
          }
        }
      },
      yAxis: [
        {
          name: '',
          data: 'value',
          min: 0,
          max: 140,
          axisLabel: {
            style: {
              fill: '#000'
            }
          }
        },
        {
          name: '',
          data: 'value',
          position: 'right',
          min: 0,
          max: 50,
          axisLabel: {
            style: {
              fill: '#FFF'
            }
          },
          nameTextStyle: {
            fill: '#FFF',
            fontSize: 12
          }
        }
      ],
      series: [
        {
          name: '检验数据',
          type: 'bar',
          data: [],
          label: {
            show: true,
            style: {
              fill: '#0396FF'
            }
          },
          gradient: {
            color: ['#ABDCFF', '#0396FF']
          },
          yAxisIndex: 0
        },

        {
          name: 'DPU目标',
          type: 'line',
          data: [],

          yAxisIndex: 0

        },
        {
          name: '相控阵检验',
          type: 'line',
          data: [],
          label: {
            show: true,
            style: {
              fill: '#f9320c'
            }
          },
          linePoint: {
            style: {
              stroke: '#f9320c'
            },
            radius: 2
          },
          lineStyle: {
            stroke: '#f9320c'
          },
          smooth: true,
          yAxisIndex: 1,
          lineArea: {
            show: true,
            gradient: ['rgba(249, 50, 12, 0.1)', 'rgba(249, 50, 12, 0.3)']
          }

        }
      ]
    }

    for (let currentDate = startDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
      const month = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'][currentDate.getMonth()]
      const day = currentDate.getDate()
      // option.xAxis.data.push(`${day}`)
      this.dateArray.push({
        date: `${month}月${day}日`,
        d1: Math.floor(Math.random() * 100),
        // d2: Math.floor(Math.random() * 100),
        // d3: Math.floor(Math.random() * 100),
        d4: Math.floor(Math.random() * 30),
        d5: Math.floor(Math.random() * 30)
      })
    }

    this.option = option

    this.refreshOption()
    // this.refreshInterval = setInterval(() => this.refreshOption(), this.$config.refreshTime || 5000)
  },
  beforeDestroy() {
    // clearInterval(this.refreshInterval)
  },
  methods: {
    refreshOption() {
      const totalLength = this.dateArray.length
      const day = 7
      const option = Object.assign({}, this.option)
      const dateArray = this.dateArray.slice(this.startIndex, this.startIndex + day)
      option.xAxis.data = dateArray.map(item => item.date)
      option.series[0].data = dateArray.map(item => item.d1)
      // option.series[1].data = dateArray.map(item => item.d2)
      // option.series[2].data = dateArray.map(item => item.d3)
      option.series[1].data = dateArray.map(item => item.d4)
      option.series[2].data = dateArray.map(item => item.d5)

      this.startIndex++
      if (this.startIndex + day >= totalLength) {
        this.startIndex = 0
      }
      this.option = option
    }
  }
}
</script>

<style lang="less" scoped>

</style>
