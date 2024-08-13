<template>
  <dv-border-box-12 class="box-bg-blue">
    <div
      style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;">
      <div class="chart-title">
        员工在岗与出勤情况统计
        <dv-decoration-6 style="width:200px;height:20px;"/>
      </div>
      <dv-charts :option="option" style="width: 100%;align-self: flex-start"/>

    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'GB2',
  data() {
    return {
      option: {},
      dateArray: [],
      startIndex: 0,
      refreshInterval: null
    }
  },
  created() {
    // const startDate = new Date('2024-07-26')
    // const endDate = new Date('2024-08-25')
    const option = {
      legend: {
        data: ['在岗', '离职', '在编'],
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
            textAlign: 'center',
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
          name: '在岗',
          type: 'line',
          data: [],
          smooth: true,
          lineArea: {
            show: true,
            gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
          },
          label: {
            show: true
          },
          linePoint: {
            radius: 4,
            style: {
              fill: '#00db95'
            }
          }
        },
        {
          name: '离职',
          type: 'bar',
          data: []
        },
        {
          name: '在编',
          type: 'bar',
          data: []
        }]
    }
    const jobArr = ['B1030E铺层', 'B1030E灌注', 'B1030E合模', 'B1030E小件', 'B1080D铺层', 'B1080D灌注', 'B1080D合模', 'B1080D小件', 'B950A铺层', 'B950A灌注', 'B950A合模', 'B950A小件', 'B973A铺层', 'B973A灌注', 'B973A合模', 'B973A小件']
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
    // clearInterval(this.refreshInterval)
  },
  methods: {
    refreshOption() {
      console.log('refresh')
      const totalLength = this.dateArray.length
      const day = 9
      const option = Object.assign({}, this.option)
      const dateArray = this.dateArray.slice(this.startIndex, this.startIndex + day)
      option.xAxis.data = dateArray.map(item => item.job)
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
