<template>
  <dv-border-box-12>
    <div class=""
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title" style="margin-bottom: 10px">安全质量违规与考核</div>
      <dv-charts :option="option" style="width: 90%"/>

    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'A4',
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
        data: ['当日安全违规数量', '当日质量违规数量', '当日安全考核金额', '当日质量考核金额', '累计考核金额'],
        bottom: 10,
        textStyle: {
          fontSize: 12,
          fill: '#FFF'
        },
        orient: 'vertical',
        top: '10%'

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
          max: 10,
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
          name: '金额',
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
          name: '当日安全违规数量',
          type: 'bar',
          data: [],
          yAxisIndex: 0,
          label: {
            show: true
          }
        },
        {
          name: '当日质量违规数量',
          type: 'bar',
          data: [],
          yAxisIndex: 0,
          label: {
            show: true
          }
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
          }
        }

      ]
    }
    const dateArray = []
    for (let currentDate = startDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
      const month = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'][currentDate.getMonth()]
      const day = currentDate.getDate()
      option.xAxis.data.push(`${day}`)
      const d1 = Math.floor(Math.random() * 2)
      const d2 = Math.floor(Math.random() * 2)
      const d3 = d1 * 20
      const d4 = d2 * 30
      dateArray.push({
        date: `${month}月${day}日`,
        d1,
        d2,
        d3,
        d4
      })
    }
    for (let i = 0; i < dateArray.length; i++) {
      dateArray[i].d5 = ((i === 0 ? 0 : dateArray[i - 1].d5) + dateArray[i].d3 + dateArray[i].d4)
      option.series[0].data.push(dateArray[i].d1)
      option.series[1].data.push(dateArray[i].d2)
      option.series[2].data.push(dateArray[i].d3)
      option.series[3].data.push(dateArray[i].d4)
      option.series[4].data.push(dateArray[i].d5)
    }
    console.log(dateArray)
    this.dates = dateArray
    this.option = option
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
