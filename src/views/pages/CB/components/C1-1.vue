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
        header: ['叶型', '名称', '物料编码', '库存数量', '预测生产天数'],
        data: [
          ['B1030D', '木材', '12345A', 45, '<span style="color:red">11</span>'],
          ['B1030D', '钢材', '67890B', 23, 21],
          ['B1030D', '水泥', '12345C', 76, '<span style="color:red">11</span>'],
          ['B1030D', '砖块', '67890D', 98, '<span style="color:red">11</span>'],
          ['B1030D', '玻璃', '12345E', 12, 21],
          ['B1030D', '电线', '67890F', 34, 21],
          ['B1030D', '水管', '12345G', 56, '<span style="color:red">11</span>'],
          ['B1030D', '涂料', '67890H', 78, 21],
          ['B1030D', '瓷砖', '12345I', 43, '<span style="color:red">11</span>'],
          ['B1030D', '门窗', '67890J', 67, 21],
          ['B1030D', '木材', '12345K', 32, '<span style="color:red">11</span>'],
          ['B1030D', '钢材', '67890L', 54, 21],
          ['B1030D', '水泥', '12345M', 75, '<span style="color:red">11</span>'],
          ['B1030D', '砖块', '67890N', 89, '<span style="color:red">11</span>'],
          ['B1030D', '砖块', '12345O', 15, '<span style="color:red">11</span>'],
          ['B1030D', '电线', '67890P', 45, 21],
          ['B1030D', '水管', '12345Q', 67, '<span style="color:red">11</span>'],
          ['B1030D', '涂料', '67890R', 23, '<span style="color:red">11</span>'],
          ['B1030D', '瓷砖', '12345S', 56, 21],
          ['B1030D', '门窗', '67890T', 34, 21]
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
