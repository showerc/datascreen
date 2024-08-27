<template>
  <div class="box-white">
    <my-header title="安全事故统计"/>
    <my-scroll-board :config="config" style="height:calc(100% - 70px)"/>
  </div>
</template>

<script>
export default {
  name: 'FA1',
  data() {
    return {

      dates: [],
      config: {
        header: ['日期', '等级', '事故描述', '责任人', '整改'],
        headerBGC: '#bdf8fd',
        oddRowBGC: '#fff',
        evenRowBGC: '#bdf8fd',
        data: [
          ['8月4日', 'D', '<span style="white-space: break-spaces;overflow-wrap: break-word;text-overflow: ellipsis;">事故描述描述11112121111111111111111111111111111111描述</span>', '责任人', '8月5日'],
          ['8月4日', 'D', '<span style="white-space: break-spaces">事故描述描述描述</span>', '责任人', '8月5日'],

          ['8月4日', 'D', '<span style="white-space: break-spaces">事故描述描述描述</span>', '责任人', '8月5日'],

          ['8月4日', 'D', '<span style="white-space: break-spaces">事故描述描述描述</span>', '责任人', '8月5日'],
          ['8月4日', 'D', '<span style="white-space: break-spaces">事故描述描述描述</span>', '责任人', '8月5日'],
          ['8月4日', 'D', '<span style="white-space: break-spaces;overflow-wrap: break-word;text-overflow: ellipsis;">事故描述描述11112121111111111111111111111111111111描述</span>', '责任人', '8月5日'],
          ['8月4日', 'D', '<span style="white-space: break-spaces">事故描述描述描述</span>', '责任人', '8月5日'],

          ['8月4日', 'D', '<span style="white-space: break-spaces">事故描述描述描述</span>', '责任人', '8月5日'],

          ['8月4日', 'D', '<span style="white-space: break-spaces">事故描述描述描述</span>', '责任人', '8月5日'],
          ['8月4日', 'D', '<span style="white-space: break-spaces">事故描述描述描述</span>', '责任人', '8月5日']

        ],
        columnWidth: [90, 55, 190, 85, 90],
        align: ['left', 'center', 'left', 'left', 'left'],
        rowNum: 8,
        hoverPause: true,
        headerHeight: 30
      }
    }
  },
  created() {
    // const startDate = new Date('2024-07-26')
    // const endDate = new Date('2024-08-25')
    //
    // const dateArray = []
    // for (let currentDate = startDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
    //   const month = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'][currentDate.getMonth()]
    //   const day = currentDate.getDate()
    //
    //   if (day !== 18 && day !== 4) {
    //     dateArray.push({
    //       date: `${month}月${day}日`
    //     })
    //   } else {
    //     dateArray.push({
    //       date: `${month}月${day}日`,
    //       type: 'danger'
    //     })
    //   }
    // }
    // this.dates = dateArray
  }
}
</script>

<style lang="less" scoped>

</style>
