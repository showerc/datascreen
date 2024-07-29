<template>
  <dv-border-box-12>
    <div class=""
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title" style="margin-bottom: 10px">关键设备故障停机统计 大类-C</div>
      <dv-charts :option="option" style="width: 100%;align-self: flex-start"/>

    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'A4',
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
        data: ['类型C-1', '类型C-2', '类型C-3', '类型C-4'],
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
      yAxis: {
        name: '数量',
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
          name: '类型C-1',
          type: 'bar',
          data: []
        },
        {
          name: '类型C-2',
          type: 'bar',
          data: []
        },
        {
          name: '类型C-3',
          type: 'bar',
          data: []

        },
        {
          name: '类型C-4',
          type: 'bar',
          data: []
        }
      ]
    }
    // const dateArray = []
    for (let currentDate = startDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
      const month = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'][currentDate.getMonth()]
      const day = currentDate.getDate()
      option.xAxis.data.push(`${day}`)
      // dateArray.push({
      //   date: `${month}月${day}日`
      // })
      option.series[0].data.push(Math.floor(Math.random() * 10))
      option.series[1].data.push(Math.floor(Math.random() * 10))
      option.series[2].data.push(Math.floor(Math.random() * 10))
      option.series[3].data.push(Math.floor(Math.random() * 10))
    }
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
