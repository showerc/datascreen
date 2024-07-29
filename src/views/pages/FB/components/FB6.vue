<template>
  <dv-border-box-12>
    <div class=""
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title" style="margin-bottom: 10px">B950A产线 DPU数据统计</div>
      <dv-charts :option="option" style="width: 95%;align-self: flex-start"/>

    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'FB6',
  data() {
    return {
      option: {}
    }
  },
  created() {
    const startDate = new Date('2024-07-26')
    const endDate = new Date('2024-08-25')
    const option = {
      legend: {
        data: ['成型检验', '半成品检验', '监造检验', 'DPU目标', '相控阵检验'],
        bottom: 10,
        textStyle: {
          fontSize: 12,
          fill: '#FFF'
        }

      },
      xAxis: {
        name: '日期',
        nameTextStyle: {
          fill: '#FFF',
          fontSize: 12
        },
        data: [],
        axisLabel: {
          style: {
            rotate: 20,
            textAlign: 'left',
            textBaseline: 'top',
            fill: '#FFF'
          }
        }
      },
      yAxis: [
        {
          name: '数量',
          data: 'value',
          min: 0,
          max: 140,
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
          name: '数量',
          data: 'value',
          position: 'right',
          min: 0,
          max: 50,
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
          name: '成型检验',
          type: 'bar',
          data: [],

          yAxisIndex: 0
        },
        {
          name: '半成品检验',
          type: 'bar',
          data: [],

          yAxisIndex: 0
        },
        {
          name: '监造检验',
          type: 'bar',
          data: [],

          yAxisIndex: 0
        },
        {
          name: 'DPU目标',
          type: 'line',
          data: [],

          yAxisIndex: 1

        },
        {
          name: '相控阵检验',
          type: 'line',
          data: [],

          yAxisIndex: 1
        }
      ]
    }
    const dateArray = []
    for (let currentDate = startDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
      const month = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'][currentDate.getMonth()]
      const day = currentDate.getDate()
      option.xAxis.data.push(`${day}`)
      dateArray.push({
        date: `${month}月${day}日`
      })
      option.series[0].data.push(Math.random() * 100)
      option.series[1].data.push(Math.random() * 100)
      option.series[2].data.push(Math.random() * 100)
      option.series[3].data.push(Math.random() * 30)
      option.series[4].data.push(Math.random() * 30)
    }

    this.option = option
  }
}
</script>

<style lang="less" scoped>

</style>
