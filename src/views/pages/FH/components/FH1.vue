<template>
  <dv-border-box-12>
    <div class=""
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title-sm" style="margin-bottom: -35px">{{ title }}</div>
      <dv-charts :option="option" style="width: 100%;align-self: flex-start"/>

    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'FG1',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
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
        data: ['库存套数', '发货套数'],
        bottom: 10,
        textStyle: {
          fontSize: 12,
          fill: '#FFF'
        }

      },
      radar: {
        polygon: true,
        indicator: [
          { name: '周一', max: 100 },
          { name: '周二', max: 100 },
          { name: '周三', max: 100 },
          { name: '周四', max: 100 },
          { name: '周五', max: 100 },
          { name: '周六', max: 100 },
          { name: '周日', max: 100 }
        ],
        axisLabel: {
          show: true,
          color: ['#fff'],
          labelGap: 5
        }
      },
      series: [
        {
          name: '库存套数',
          type: 'radar',
          data: [],
          label: {
            show: true,
            style: {
              fontSize: 14,
              fill: '#fff'
            }
          },
          animationCurve: 'easeOutBounce'
        },
        {
          name: '发货套数',
          type: 'radar',
          data: [],
          label: {
            show: true,
            style: {
              fontSize: 14,
              fill: '#fff'
            }
          },
          animationCurve: 'easeOutBounce'
        }
      ]
      // xAxis: {
      //   name: '',
      //   nameLocation: 'center',
      //   data: [],
      //   axisLabel: {
      //     style: {
      //       rotate: 20,
      //       textAlign: 'left',
      //       textBaseline: 'top',
      //       fill: '#FFF'
      //     }
      //   }
      // },
      // yAxis: {
      //   name: '',
      //   data: 'value',
      //   min: 0,
      //   axisLabel: {
      //     style: {
      //       fill: '#FFF'
      //     }
      //   },
      //   nameTextStyle: {
      //     fill: '#FFF',
      //     fontSize: 12
      //   }
      // },
      // series: [
      //   {
      //     name: '库存套数',
      //     type: 'bar',
      //     data: []
      //   },
      //   {
      //     name: '发货套数',
      //     type: 'bar',
      //     data: []
      //   }
      //
      // ]
    }
    // const dateArray = []
    for (let i = 0; i < 7; i++) {
      const day = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'][i]
      console.log(day)
      // option.xAxis.data.push(`${day}`)
      // dateArray.push({
      //   date: `${day}`
      // })
      console.log('option.series[0]', option.series)
      option.series[0].data.push(Math.floor(30 + Math.random() * 60))
      option.series[1].data.push(Math.floor(30 + Math.random() * 60))
    }
    this.option = option
  }
}
</script>

<style lang="less" scoped>

</style>
