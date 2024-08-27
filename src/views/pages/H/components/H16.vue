<template>
  <div class="box-white">
    <my-header title="员工在岗与出勤情况统计"/>
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
    const option = {
      legend: {
        data: [{
          name: '应出勤',
          color: '#7200da'
        }, {
          name: '实出勤',
          color: '#0396FF'
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
        boundaryGap: true,
        axisLabel: {
          style: {
            rotate: 345,
            textAlign: 'center',
            textBaseline: 'top',
            fontSize: 9,
            fill: '#000'
          }
        }
      },
      yAxis: {
        name: '',
        data: 'value',
        min: 0,
        axisLabel: {
          style: {
            fill: '#000'
          }
        }
      },
      series: [
        {
          name: '应出勤',
          type: 'line',
          data: [],
          label: {
            show: true,
            style: {
              fill: '#7200da'
            }
          },
          lineStyle: {
            stroke: '#7200da',
            lineWidth: 1
          },
          linePoint: {
            radius: 4,
            style: {
              stroke: '#7200da'

            }
          }
        },
        {
          name: '实出勤',
          type: 'bar',
          data: [],
          label: {
            show: true,
            style: {
              fill: '#fff'
            },
            position: 'center'
          },
          gradient: {
            color: ['#ABDCFF', '#0396FF']
          }
        }
      ]
    }
    const jobArr = ['B1030E铺层', 'B1030E灌注', 'B1030E合模', 'B1030E小件', 'B1080D铺层', 'B1080D灌注', 'B1080D合模', 'B1080D小件', 'B950A铺层', 'B950A灌注', 'B950A合模', 'B950A小件', 'B973A铺层', 'B973A灌注', 'B973A合模', 'B973A小件', '半成品维修', '浦永团队', '质量人员', '设备人员', '胶机间', '库房', '技术人员', '准备班', '检查站']
    for (let i = 0; i <= jobArr.length; i++) {
      // option.xAxis.data.push(`${day}`)
      const d2 = Math.floor(Math.floor(Math.random() * 2))
      const d3 = Math.floor(10 + Math.floor(Math.random() * 5))
      const d1 = d3 - d2
      this.dateArray.push({
        job: jobArr[i],
        d1,
        d2,
        d3
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
      option.xAxis.data = dateArray.map(item => item.job)
      option.series[0].data = dateArray.map(item => item.d3)
      option.series[1].data = dateArray.map(item => item.d1)
      // option.series[2].data = dateArray.map(item => item.d3)

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
