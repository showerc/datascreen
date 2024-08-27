<template>
  <dv-border-box-12 class="box-bg-blue">
    <div
      style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;">
      <div class="chart-title">
        车辆到场及放行信息统计
        <dv-decoration-6 style="width:200px;height:20px;"/>
      </div>
      <dv-charts :option="option" style="width: 100%;align-self: flex-start"/>

    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'A4',
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
        // '预计放行车辆', '无法放行车辆', '预计到达车辆'
        data: [
          { name: '预计放行车辆', color: '#F8D800' },
          { name: '无法放行车辆', color: '#0396FF' },
          { name: '预计到达车辆', color: '#EA5455' }
        ],
        bottom: 10,
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
      yAxis: {
        name: '',
        data: 'value',
        min: 0,
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
      series: [
        {
          name: '预计放行车辆',
          type: 'bar',
          data: [],
          label: {
            show: true
          },
          gradient: {
            color: ['#FDEB71', '#F8D800']
          }
        },
        {
          name: '无法放行车辆',
          type: 'bar',
          data: [],
          label: {
            show: true
          },
          gradient: {
            color: ['#ABDCFF', '#0396FF']
          }
        },
        {
          name: '预计到达车辆',
          type: 'bar',
          data: [],
          label: {
            show: true
          },
          gradient: {
            color: ['#FEB692', '#EA5455']
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
        d1: Math.floor(Math.random() * 8),
        d2: Math.floor(Math.random() * 8),
        d3: Math.floor(Math.random() * 8)
      })
    }
    for (let i = 0; i < this.dateArray.length; i++) {
      this.dateArray[i].d5 = ((i === 0 ? 0 : this.dateArray[i - 1].d5) + this.dateArray[i].d1 + this.dateArray[i].d2 + this.dateArray[i].d3 + this.dateArray[i].d4)
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
