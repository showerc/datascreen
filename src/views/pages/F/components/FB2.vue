<template>
  <dv-border-box-12 class="box-bg-blue">
    <div class=""
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;">
      <div class="chart-title">
        B1030E产线 DPU数据统计
        <dv-decoration-6 style="width:200px;height:20px;"/>
      </div>
      <dv-charts :option="option" style="width: 100%;align-self: flex-start"/>

    </div>
  </dv-border-box-12>

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
        data: ['检验数据', 'DPU目标', '相控阵检验'],
        textStyle: {
          fontSize: 12,
          fill: '#FFF'
        }

      },
      xAxis: {
        name: '',
        nameTextStyle: {
          fill: '#FFF',
          fontSize: 12
        },
        data: [],
        axisLabel: {
          style: {
            rotate: 0,
            textAlign: 'left',
            textBaseline: 'top',
            fill: '#FFF'
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
              fill: '#FFF'
            }
          },
          nameTextStyle: {
            fill: '#FFF',
            fontSize: 12
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
              fill: '#FFF'
            }
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
            show: true
          },
          yAxisIndex: 1,
          smooth: true,
          lineArea: {
            show: true,
            gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
          },
          linePoint: {
            radius: 4,
            style: {
              fill: '#00db95'
            }
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
    this.refreshInterval = setInterval(() => this.refreshOption(), this.$config.refreshTime || 5000)
  },
  beforeDestroy() {
    clearInterval(this.refreshInterval)
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
