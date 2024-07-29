<template>
  <dv-border-box-12>
    <div class=""
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title" style="margin-bottom: 10px">B1030E产线成型计划完成情况</div>
      <dv-charts :option="option" style="width: 95%;align-self: flex-start"/>

    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'FD3',
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
        data: ['当日计划', '当日实际', '累计计划', '累计实际'],
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
          name: '数量',
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
          yAxisIndex: 0
        },
        {
          name: '当日实际',
          type: 'bar',
          data: [],
          yAxisIndex: 0
        },
        {
          name: '累计计划',
          type: 'line',
          data: [],
          label: {
            show: true
          },
          yAxisIndex: 1
        },
        {
          name: '累计实际',
          type: 'line',
          data: [],
          label: {
            show: true
          },
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
        d1: Math.floor(2 + Math.random() * 2),
        d2: Math.floor(1 + Math.random() * 3)
      })
    }
    for (let i = 0; i < dateArray.length; i++) {
      dateArray[i].d3 = 0
      dateArray[i].d4 = 0
      dateArray[i].d3 = ((i === 0 ? 0 : dateArray[i - 1].d3) + dateArray[i].d1)
      dateArray[i].d4 = ((i === 0 ? 0 : dateArray[i - 1].d4) + dateArray[i].d2)

      option.series[0].data.push(dateArray[i].d1)
      option.series[1].data.push(dateArray[i].d2)
      option.series[2].data.push(dateArray[i].d3)
      option.series[3].data.push(dateArray[i].d4)
    }
    this.option = option
  }
}
</script>

<style lang="less" scoped>

</style>
