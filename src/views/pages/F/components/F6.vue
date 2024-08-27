<template>
  <dv-border-box-12 class="box-bg-blue">
    <div class=""
         style="padding:0 10px;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px"
         @click="$router.push({name:'FA'})">
      <div class="chart-title">
        B1030E 产线成型计划完成情况
        <dv-decoration-6 style="width:200px;height:20px;"/>
      </div>
      <dv-charts :option="option" style="align-self: flex-start"/>

    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'FC2',
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
        data: [
          { name: '当日计划', color: '#F8D800' },
          { name: '当日实际', color: '#0396FF' },
          { name: '累计计划', color: '#37A2DA' },
          { name: '累计实际', color: '#EA5455' }
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
          max: 8,
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
          max: 100,
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
          name: '当日计划',
          type: 'bar',
          data: [],
          yAxisIndex: 0,
          gradient: {
            color: ['#FDEB71', '#F8D800']
          }
        },
        {
          name: '当日实际',
          type: 'bar',
          data: [],
          yAxisIndex: 0,
          gradient: {
            color: ['#ABDCFF', '#0396FF']
          }
        },
        {
          name: '累计计划',
          type: 'line',
          data: [],
          label: {
            show: true,
            style: {
              fill: '#FFF'
            }
          },
          lineStyle: {
            stroke: '#37A2DA'
          },
          smooth: true,
          lineArea: {
            show: true,
            gradient: ['rgba(55, 162, 218, 0.3)', 'rgba(55, 162, 218, 0.5)']
          },
          linePoint: {
            radius: 3,
            style: {
              fill: '#37A2DA'
            }
          },
          yAxisIndex: 1
        },
        {
          name: '累计实际',
          type: 'line',
          data: [],
          lineStyle: {
            stroke: '#EA5455'
          },
          label: {
            show: true,
            offset: [0, 10],
            style: {
              fill: '#FFF'
            }
          },
          linePoint: {
            radius: 3,
            style: {
              fill: '#EA5455'
            }
          },
          smooth: true,
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
    onClick(e) {
      console.log('click', e)
    },
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
