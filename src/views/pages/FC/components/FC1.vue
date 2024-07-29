<template>
  <dv-border-box-12>
    <div class=""
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title" style="margin-bottom: 10px">壳体L3在制品数据统计</div>
      <dv-charts :option="option" style="width: 95%;align-self: flex-start"/>

    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'FC1',
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
        data: ['B1030E', 'B1080D', 'B973A', 'B950A', '项目部累计', '削减计划'],
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
          max: 30,
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
          name: 'B1030E',
          type: 'bar',
          data: [],

          yAxisIndex: 0
        },
        {
          name: 'B1080D',
          type: 'bar',
          data: [],

          yAxisIndex: 0
        },
        {
          name: 'B973A',
          type: 'bar',
          data: [],

          yAxisIndex: 0
        },
        {
          name: 'B950A',
          type: 'bar',
          data: [],

          yAxisIndex: 0

        },
        {
          name: '项目部累计',
          type: 'line',
          data: [],
          label: {
            show: true
          },
          yAxisIndex: 1
        },
        {
          name: '削减计划',
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
        date: `${month}月${day}日`,
        d1: Math.floor(Math.random() * 20),
        d2: Math.floor(Math.random() * 20),
        d3: Math.floor(Math.random() * 20),
        d4: Math.floor(Math.random() * 20)
      })
    }
    for (let i = 0; i < dateArray.length; i++) {
      dateArray[i].d5 = ((i === 0 ? 0 : dateArray[i - 1].d5) + dateArray[i].d1 + dateArray[i].d2 + dateArray[i].d3 + dateArray[i].d4)
      option.series[0].data.push(dateArray[i].d1)
      option.series[1].data.push(dateArray[i].d2)
      option.series[2].data.push(dateArray[i].d3)
      option.series[3].data.push(dateArray[i].d4)
      option.series[4].data.push(dateArray[i].d5)
      option.series[5].data.push(Math.random() * 150)
    }
    this.option = option
  }
}
</script>

<style lang="less" scoped>

</style>
