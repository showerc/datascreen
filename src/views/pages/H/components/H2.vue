<template>
  <div class="box-white">
    <my-header title="壳体L3缺陷数据统计"/>
    <dv-charts :option="option" style="width: 100%;align-self: flex-start"/>

  </div>

</template>

<script>
export default {
  name: 'H2',
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
          name: 'B1030E',
          color: '#F8D800'
        }, {
          name: 'B1080D',
          color: '#0396FF'
        }, {
          name: 'B973A',
          color: '#EA5455'
        }, {
          name: 'B950A',
          color: '#32CCBC'
        }, {
          name: '项目部累计',
          color: '#7200da'
        }],
        top: 20,
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
          name: '数量',
          nameGap: 5,
          data: 'value',
          min: 0,
          max: 30,
          axisLabel: {
            style: {
              fill: '#000'
            }
          },
          nameTextStyle: {
            fill: '#000',
            fontSize: 12
          }
        },
        {
          name: '累计',
          nameGap: 5,
          data: 'value',
          position: 'right',
          min: 0,
          axisLabel: {
            style: {
              fill: '#000'
            }
          },
          nameTextStyle: {
            fill: '#000',
            fontSize: 12
          }
        }
      ],
      series: [
        {
          name: 'B1030E',
          type: 'bar',
          data: [],
          gradient: {
            color: ['#FDEB71', '#F8D800']
          },
          yAxisIndex: 0
        },
        {
          name: 'B1080D',
          type: 'bar',
          data: [],
          gradient: {
            color: ['#ABDCFF', '#0396FF']
          },
          yAxisIndex: 0
        },
        {
          name: 'B973A',
          type: 'bar',
          data: [],
          gradient: {
            color: ['#FEB692', '#EA5455']
          },
          yAxisIndex: 0
        },
        {
          name: 'B950A',
          type: 'bar',
          data: [],
          gradient: {
            color: ['#90F7EC', '#32CCBC']
          },
          yAxisIndex: 0

        },
        {
          name: '项目部累计',
          type: 'line',
          data: [],
          label: {
            show: true,
            style: {
              fill: '#7200da'
            }
          },
          lineStyle: {
            stroke: '#7200da'
          },
          linePoint: {
            style: {
              stroke: '#7200da'
            },
            radius: 2
          },
          yAxisIndex: 1
        }
      ]
    }

    for (let currentDate = startDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
      const month = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'][currentDate.getMonth()]
      const day = currentDate.getDate()
      // option.xAxis.data.push(`${day}`)
      this.dateArray.push({
        date: `${month}月${day}日`,
        d1: Math.floor(Math.random() * 20),
        d2: Math.floor(Math.random() * 20),
        d3: Math.floor(Math.random() * 20),
        d4: Math.floor(Math.random() * 20)
      })
    }
    for (let i = 0; i < this.dateArray.length; i++) {
      this.dateArray[i].d5 = ((i === 0 ? 0 : this.dateArray[i - 1].d5) + this.dateArray[i].d1 + this.dateArray[i].d2 + this.dateArray[i].d3 + this.dateArray[i].d4)
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
      console.log('refresh')
      const totalLength = this.dateArray.length
      const day = 7
      const option = Object.assign({}, this.option)
      const dateArray = this.dateArray.slice(this.startIndex, this.startIndex + day)
      option.xAxis.data = dateArray.map(item => item.date)
      option.series[0].data = dateArray.map(item => item.d1)
      option.series[1].data = dateArray.map(item => item.d2)
      option.series[2].data = dateArray.map(item => item.d3)
      option.series[3].data = dateArray.map(item => item.d4)
      option.series[4].data = dateArray.map(item => item.d5)

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
