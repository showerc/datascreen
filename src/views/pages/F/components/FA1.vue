<template>
  <dv-border-box-12 class="box-bg-blue">
    <div class=""
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px;align-content: center">
      <div class="module-title">安全事故统计</div>
      <!--      <div style="display: flex;flex-wrap: wrap;padding: 20px">-->
      <!--        <div v-for="(d,index) in dates" :key="index" class="date-item" :class="{'danger':d.type==='danger'}">-->

      <!--          <dv-border-box-8 v-if="d.type==='danger'" :color="['red','red']" class="text-box">{{-->
      <!--              d.date-->
      <!--            }}-->
      <!--          </dv-border-box-8>-->
      <!--          <div v-else>{{ d.date }}</div>-->
      <!--        </div>-->
      <!--      </div>-->
      <dv-scroll-board :config="config" style="width:95%;height:calc(100% - 80px)"/>

    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'FA1',
  data() {
    return {

      dates: [],
      config: {
        header: ['日期', '等级', '事故描述', '责任人', '整改'],
        data: [
          ['8月4日', 'D', '事故描述描述描述', '责任人', '8月5日'],
          ['8月18日', 'C', '事故描述描述描述', '责任人', '8月20日'],
          ['8月4日', 'D', '事故描述描述描述', '责任人', '8月5日'],
          ['8月18日', 'C', '事故描述描述描述', '责任人', '8月20日'],
          ['8月4日', 'D', '事故描述描述描述', '责任人', '8月5日'],
          ['8月18日', 'C', '事故描述描述描述', '责任人', '8月20日']

        ],
        columnWidth: [90, 55, 190, 85, 90],
        align: ['left', 'center', 'left', 'left', 'left'],
        rowNum: 3
      }
    }
  },
  created() {
    const startDate = new Date('2024-07-26')
    const endDate = new Date('2024-08-25')

    const dateArray = []
    for (let currentDate = startDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
      const month = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'][currentDate.getMonth()]
      const day = currentDate.getDate()

      if (day !== 18 && day !== 4) {
        dateArray.push({
          date: `${month}月${day}日`
        })
      } else {
        dateArray.push({
          date: `${month}月${day}日`,
          type: 'danger'
        })
      }
    }
    this.dates = dateArray
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
  color: #fff;
  background: #8ad153;
  font-size: 12px;

  &.danger {
    border-color: transparent;
    background: red;
  }
}
</style>
