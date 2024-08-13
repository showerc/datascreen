<template>
  <dv-border-box-12 class="box-bg-blue">
    <div class=""
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;">
      <div class="chart-title">
        B1030E 结构胶用量统计
        <dv-decoration-3 style="width:200px;height:20px;"/>
      </div>
      <dv-charts :option="option"/>

    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'FA3',
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
        data: [{ name: '实际用量', icon: 'rect', color: 'rgba(255,219,92,0.8)' }, { name: '目标用量', icon: 'line' }],
        textStyle: {
          fontSize: 11,
          fill: '#FFF'
        }

      },
      xAxis: {
        name: '',

        data: [],
        axisLabel: {
          style: {
            textAlign: 'left',
            textBaseline: 'top',
            fill: '#FFF',
            fontSize: 11
          }
        }
      },
      yAxis: {
        data: 'value',
        min: 0,
        axisLabel: {
          style: {
            fill: '#FFF'
          }
        },
        splitLine: {
          show: false
        },
        nameTextStyle: {
          fill: '#FFF',
          fontSize: 12
        }

      },
      series: [
        {
          name: '实际用量',
          type: 'bar',
          data: [],
          barStyle: {
            fill: 'rgba(255,219,92,0.8)'
          }
        },

        {
          name: '目标用量',
          type: 'line',
          data: [],
          label: {
            show: true
          },
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
      // option.xAxis.data.push(`${day}日`)
      this.dateArray.push({
        date: `${month}月${day}日`,
        d1: Math.floor(800 + Math.random() * 150)
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
      console.log('refresh')
      const totalLength = this.dateArray.length
      const day = 7
      const option = Object.assign({}, this.option)
      const dateArray = this.dateArray.slice(this.startIndex, this.startIndex + day)
      option.xAxis.data = dateArray.map(item => item.date)
      option.series[0].data = dateArray.map(item => item.d1)
      option.series[1].data = dateArray.map(() => 880)

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
