<template>
  <dv-border-box-12>
    <div class=""
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title" style="margin-bottom: 10px">B950A树脂、结构胶用量统计</div>
      <dv-charts :option="option" style="width: 95%;align-self: flex-start"/>

    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'FG1',
  data() {
    return {
      option: {},
      dates: []
    }
  },
  created() {
    const startDate = new Date('2024-07-26')
    const endDate = new Date('2024-08-25')
    const option = {
      legend: {
        data: ['树脂实际用量', '结构胶实际用量', '树脂目标用量', '结构胶目标用量'],
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
          name: '',
          data: 'value',
          min: 7500,
          max: 9000,
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
          min: 750,
          max: 1000,
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
          name: '树脂实际用量',
          type: 'bar',
          data: [],
          yAxisIndex: 0
        },
        {
          name: '结构胶实际用量',
          type: 'bar',
          data: [],
          yAxisIndex: 1
        },
        {
          name: '树脂目标用量',
          type: 'line',
          data: [],
          yAxisIndex: 0

        },
        {
          name: '结构胶目标用量',
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
      option.series[0].data.push(8000 + Math.random() * 1000)
      option.series[1].data.push(800 + Math.random() * 150)

      option.series[2].data.push(7920)
      option.series[3].data.push(880)
    }

    console.log(dateArray)
    this.dates = dateArray
    this.option = option
  }
}
</script>

<style lang="less" scoped>

</style>
