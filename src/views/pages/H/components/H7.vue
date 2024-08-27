<template>
  <div class="box-white">
    <my-header title="B1030E树脂用量统计"/>
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
          name: '树脂实际用量',
          color: '#F8D800'
        }, {
          name: '结构胶实际用量',
          color: '#0396FF'
        }, {
          name: '树脂目标用量',
          color: '#7200da'
        }, {
          name: '结构胶目标用量',
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
          name: '数量',
          nameGap: 5,
          data: 'value',
          min: 0,
          max: 8,
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
          name: '树脂实际用量',
          type: 'bar',
          data: [],
          gradient: {
            color: ['#FDEB71', '#F8D800']
          },
          yAxisIndex: 0
        },
        {
          name: '结构胶实际用量',
          type: 'bar',
          data: [],
          gradient: {
            color: ['#ABDCFF', '#0396FF']
          },
          yAxisIndex: 0
        },
        {
          name: '树脂目标用量',
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
          smooth: true,
          // lineArea: {
          //   show: true,
          //   gradient: ['rgba(114, 0, 218, 0.1)', 'rgba(114, 0, 218, 0.3)']
          // },
          linePoint: {
            style: {
              stroke: '#7200da'
            },
            radius: 2
          },
          yAxisIndex: 1
        },
        {
          name: '结构胶目标用量',
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
          yAxisIndex: 1
        }
      ]
    }

    for (let currentDate = startDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
      const month = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'][currentDate.getMonth()]
      const day = currentDate.getDate()
      this.dateArray.push({
        date: `${month}月${day}日`,
        d1: Math.floor(2 + Math.random() * 2),
        d2: Math.floor(1 + Math.random() * 3)
      })
    }
    for (let i = 0; i < this.dateArray.length; i++) {
      this.dateArray[i].d3 = ((i === 0 ? this.dateArray[i].d1 : this.dateArray[i - 1].d3) + this.dateArray[i].d1)
      this.dateArray[i].d4 = ((i === 0 ? this.dateArray[i].d2 : this.dateArray[i - 1].d4) + this.dateArray[i].d2)
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
      option.series[1].data = dateArray.map(item => item.d2)
      option.series[2].data = dateArray.map(item => item.d3)
      option.series[3].data = dateArray.map(item => item.d4)

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
