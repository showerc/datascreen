<template>
  <dv-border-box-2 :color="['#234d84','#031694']">
    <div style="padding:20px;display: flex;align-items: center;justify-content: space-between">
      <div>
        <div style="font-weight: bold;font-size: 24px">车间连续安全生产</div>
        <dv-decoration-3 style="width:200px;height:20px;"/>
        <div style="font-size: 14px;color: #00c0ff;font-weight: bold;">2023年8月1日 - 2024年8月1日</div>

      </div>
      <div style="display: flex;position: absolute;right:20px;top:50%;transform: translate(0,-50%)">
        <dv-decoration-9 style="width:80px;height:80px;color: #00c0ff;font-weight: bold">366天</dv-decoration-9>

      </div>
    </div>
  </dv-border-box-2>

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
        data: ['当日安全违规数量', '当日质量违规数量', '当日安全考核金额', '当日质量考核金额', '累计考核金额'],
        textStyle: {
          fontSize: 12,
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
      yAxis: [
        {
          data: 'value',
          min: 0,
          max: 4,
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
        {
          data: 'value',
          position: 'right',
          splitLine: {
            show: false
          },
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

        }
      ],
      series: [
        {
          name: '当日安全违规数量',
          type: 'bar',
          data: [],
          yAxisIndex: 0

        },
        {
          name: '当日质量违规数量',
          type: 'bar',
          data: [],
          yAxisIndex: 0

        },
        {
          name: '当日安全考核金额',
          type: 'line',
          data: [],
          yAxisIndex: 1

        },
        {
          name: '当日质量考核金额',
          type: 'line',
          data: [],
          yAxisIndex: 1

        },
        {
          name: '累计考核金额',
          type: 'line',
          data: [],
          yAxisIndex: 1,
          label: {
            show: true
          },
          smooth: true,
          lineArea: {
            show: true,
            gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
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

    this.refreshInterval = setInterval(() => this.refreshOption(), 2000)
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
.date-item {
  width: 70px;
  height: 70px;
  border: 1px solid #8ad153;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8ad153;
  font-size: 12px;

  &.danger {
    border-color: transparent;
    color: red;
  }
}
</style>
