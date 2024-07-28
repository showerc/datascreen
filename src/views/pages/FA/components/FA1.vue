<template>
  <dv-border-box-12>
    <div class=""
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title" style="margin-bottom: 10px">安全事故统计</div>
      <div style="display: flex;flex-wrap: wrap;padding: 20px">
        <div v-for="(d,index) in dates" :key="index" class="date-item" :class="{'danger':d.type==='danger'}">

          <dv-border-box-8 v-if="d.type==='danger'" :color="['red','red']" class="text-box">{{
              d.date
            }}
          </dv-border-box-8>
          <div v-else>{{ d.date }}</div>
        </div>
      </div>
      <dv-decoration-1 style="width:200px;height:50px;"/>

    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'A4',
  data() {
    return {

      dates: []
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
  color: #8ad153;
  font-size: 12px;

  &.danger {
    border-color: transparent;
    color: red;
  }
}
</style>
