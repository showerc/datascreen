<template>
  <dv-border-box-12 class="box-bg-blue">
    <div class=""
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;">
      <div class="chart-title">
        隐患排查与整改
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
        // '当日实际', '当日目标', '累计实际'
        data: [{ name: '当日实际', color: '#F8D800' }, { name: '当日目标', color: '#EA5455' }, {
          name: '累计实际',
          color: '#37A2DA'
        }],
        textStyle: {
          fontSize: 8,
          fill: '#FFF'
        }

      },
      xAxis: {
        name: '',
        nameTextStyle: {
          fill: '#FFF',
          fontSize: 10
        },
        data: [],
        axisLabel: {
          style: {
            textAlign: 'left',
            textBaseline: 'top',
            fill: '#FFF',
            fontSize: 10
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
          name: '当日实际',
          type: 'bar',
          data: [],
          gradient: {
            color: ['#FDEB71', '#F8D800']
          },
          label: {
            show: true
          }
        },
        {
          name: '当日目标',
          type: 'bar',
          data: [],
          gradient: {
            color: ['#FEB692', '#EA5455']
          },
          label: {
            show: true
          }
        },
        {
          name: '累计实际',
          type: 'line',
          data: [],
          label: {
            show: true,
            style: {
              fill: '#fff'
            }
          },
          lineStyle: {
            stroke: '#37A2DA'
          },
          smooth: true,
          lineArea: {
            show: true,
            gradient: ['rgba(55, 162, 218, 0.2)', 'rgba(55, 162, 218, 0.5)']
          },
          linePoint: {
            radius: 3,
            style: {
              fill: '#37A2DA',
              stroke: '#37A2DA'

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
        d2: Math.floor(Math.random() * 2)
      })
    }
    for (let i = 0; i < this.dateArray.length; i++) {
      this.dateArray[i].d3 = ((i === 0 ? 0 : this.dateArray[i - 1].d3) + this.dateArray[i].d2)
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
      option.series[0].data = dateArray.map(item => item.d2)
      option.series[1].data = dateArray.map(() => 2)
      option.series[2].data = dateArray.map(item => item.d3)

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
