<template>
  <div class="box-white">
    <my-header title="安全质量违规与考核" type="red"/>
    <dv-charts :option="option" style="width: 100%;align-self: flex-start"/>
  </div>
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
        // '当日安全违规数量', '当日质量违规数量', '当日安全考核金额', '当日质量考核金额', '累计考核金额'
        data: [
          { name: '当日安全违规数量', color: '#0396FF' },
          { name: '当日质量违规数量', color: '#3CD500' },
          { name: '当日安全考核金额', color: '#7200da' },
          { name: '当日质量考核金额', color: '#f9320c' },
          { name: '累计考核金额', color: '#f9c00c' }
        ],

        iconStyle: {
          fontSize: 12
        },
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
        nameTextStyle: {
          fill: '#000',
          fontSize: 10
        },
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
          data: 'value',
          min: 0,
          max: 4,
          axisLabel: {
            style: {
              fill: '#000'
            }
          },
          splitLine: {
            show: false
          }
        },
        {
          name: '元',
          data: 'value',
          position: 'right',
          splitLine: {
            show: false
          },
          min: 0,
          axisLabel: {
            style: {
              fill: '#000'
            }
          },
          nameGap: 5,
          nameTextStyle: {
            fill: '#FFF',
            fontSize: 12
          }

        }
      ],
      series: [
        {
          name: '当日安全违规数量',
          type: 'bar',
          data: [],
          yAxisIndex: 0,
          gradient: {
            color: ['#ABDCFF', '#0396FF']
          },
          label: {
            show: true
          }

        },
        {
          name: '当日质量违规数量',
          type: 'bar',
          data: [],
          yAxisIndex: 0,
          gradient: {
            color: ['#FFF720', '#3CD500']
          },
          label: {
            show: true
          }
        },
        {
          name: '当日安全考核金额',
          type: 'line',
          data: [],
          yAxisIndex: 1,
          lineStyle: {
            stroke: '#7200da'
          }
        },
        {
          name: '当日质量考核金额',
          type: 'line',
          data: [],
          yAxisIndex: 1,
          lineStyle: {
            stroke: '#f9320c'
          }
        },
        {
          name: '累计考核金额',
          type: 'line',
          data: [],
          yAxisIndex: 1,
          label: {
            show: true,
            style: {
              fill: '#fff'
            }
          },
          lineStyle: {
            stroke: '#f9c00c'
          },
          smooth: true,
          lineArea: {
            show: true,
            gradient: ['rgba(249, 192, 12, 0.2)', 'rgba(249, 192, 12, 0.2)']
          },

          linePoint: {
            radius: 2,
            style: {
              fill: '#f9c00c',
              stroke: '#f9c00c'

            }
          }
        }

      ]
    }
    for (let currentDate = startDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
      const month = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'][currentDate.getMonth()]
      const day = currentDate.getDate()
      const d1 = Math.floor(Math.random() * 2)
      const d2 = Math.floor(Math.random() * 2)
      const d3 = d1 * 2
      const d4 = d2 * 3
      this.dateArray.push({
        date: `${month}月${day}日`,
        d1,
        d2,
        d3,
        d4
      })
    }
    for (let i = 0; i < this.dateArray.length; i++) {
      this.dateArray[i].d5 = ((i === 0 ? 0 : this.dateArray[i - 1].d5) + this.dateArray[i].d3 + this.dateArray[i].d4)
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
