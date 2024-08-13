<template>
  <dv-border-box-12>
    <div class="box-bg-blue"
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title" style="margin-bottom: 10px">库存信息</div>
      <dv-scroll-board :config="config" style="width:95%;height:calc(100% - 100px)"/>
    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'A4',
  data() {
    return {
      config: {
        header: ['名称', '编号', '库存数量'],
        data: [
          ['木材', '12345A', 45],
          ['钢材', '67890B', 23],
          ['水泥', '12345C', 76],
          ['砖块', '67890D', 98],
          ['玻璃', '12345E', 12],
          ['电线', '67890F', 34],
          ['水管', '12345G', 56],
          ['涂料', '67890H', 78],
          ['瓷砖', '12345I', 43],
          ['门窗', '67890J', 67],
          ['木材', '12345K', 32],
          ['钢材', '67890L', 54],
          ['水泥', '12345M', 75],
          ['砖块', '67890N', 89],
          ['玻璃', '12345O', 15],
          ['电线', '67890P', 45],
          ['水管', '12345Q', 67],
          ['涂料', '67890R', 23],
          ['瓷砖', '12345S', 56],
          ['门窗', '67890T', 34]
        ],
        index: true,
        columnWidth: [50],
        align: ['center'],
        rowNum: 20
      }
    }
  },
  created() {

  }
}
</script>

<style lang="less" scoped>

</style>
