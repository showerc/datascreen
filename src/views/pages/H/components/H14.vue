<template>
  <div class="box-white">
    <my-header title="B1030E 成型周期数据统计"/>
    <dv-charts :option="option"/>
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
          name: '铺层周期',
          color: '#F8D800'
        }, {
          name: '灌注周期',
          color: '#0396FF'
        }, {
          name: '一粘周期',
          color: '#EA5455'
        }, {
          name: '二粘周期',
          color: '#32CCBC'
        }, {
          name: '成型周期目标',
          color: '#7200da'
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
      yAxis: {
        name: '',
        data: 'value',
        min: 0,
        max: 80,
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
      series: [
        {
          name: '铺层周期',
          type: 'bar',
          data: [],
          gradient: {
            color: ['#FDEB71', '#F8D800']
          }
        },
        {
          name: '灌注周期',
          type: 'bar',
          data: [],
          gradient: {
            color: ['#ABDCFF', '#0396FF']
          }
        },
        {
          name: '一粘周期',
          type: 'bar',
          data: [],
          gradient: {
            color: ['#FEB692', '#EA5455']
          }
        },
        {
          name: '二粘周期',
          type: 'bar',
          data: [],
          gradient: {
            color: ['#90F7EC', '#32CCBC']
          }
        },
        {
          name: '成型周期目标',
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

          linePoint: {
            style: {
              stroke: '#7200da'
            },
            radius: 2
          }
        }
      ]
    }

    for (let currentDate = startDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
      const month = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'][currentDate.getMonth()]
      const day = currentDate.getDate()

      this.dateArray.push({
        date: `${month}月${day}日`,
        d1: Math.floor(30 + Math.floor(Math.random() * 30)),
        d2: Math.floor(30 + Math.floor(Math.random() * 30)),
        d3: Math.floor(30 + Math.floor(Math.random() * 30)),
        d4: Math.floor(30 + Math.floor(Math.random() * 30)),
        d5: 48
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
