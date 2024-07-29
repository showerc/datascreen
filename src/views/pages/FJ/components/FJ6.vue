<template>
  <dv-border-box-12>
    <div class=""
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title-sm" style="margin-bottom: -40px">员工在岗与出勤情况统计</div>
      <dv-charts :option="option" style="width: 100%;align-self: flex-start"/>

    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'FJ4',
  data() {
    return {
      option: {}
    }
  },
  created() {
    // const startDate = new Date('2024-07-26')
    // const endDate = new Date('2024-08-25')
    const option = {
      legend: {
        data: ['库房', '技术人员', '准备班', '检查站'],
        bottom: 10,
        textStyle: {
          fontSize: 12,
          fill: '#FFF'
        }

      },
      xAxis: {
        name: '',
        nameLocation: 'center',
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
        axisLine: {
          style: {
            stroke: '#999'
          }
        },
        axisLabel: {
          style: {
            fill: '#999'
          }
        },
        axisTick: {
          show: false
        },
        nameTextStyle: {
          fill: '#FFF',
          fontSize: 12
        }
      },
      series: [
        {
          name: '库房',
          type: 'bar',
          data: []
        },
        {
          name: '技术人员',
          type: 'bar',
          data: []
        },
        {
          name: '准备班',
          type: 'bar',
          data: []
        },
        {
          name: '检查站',
          type: 'bar',
          data: []
        }

      ]
    }
    // const dateArray = []
    for (let i = 0; i < 7; i++) {
      const day = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'][i]
      console.log(day)
      option.xAxis.data.push(`${day}`)
      // dateArray.push({
      //   date: `${day}`
      // })
      console.log('option.series[0]', option.series)
      option.series[0].data.push(Math.floor(1 + Math.random() * 2))
      option.series[1].data.push(Math.floor(2 + Math.random() * 2))
      option.series[2].data.push(Math.floor(3 + Math.random() * 3))
      option.series[3].data.push(Math.floor(4 + Math.random() * 2))
    }
    this.option = option
  }
}
</script>

<style lang="less" scoped>

</style>
