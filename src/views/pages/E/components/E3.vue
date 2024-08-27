<template>
  <dv-border-box-12 class="box-bg-blue">
    <div class=""
         style="height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: stretch;position: relative;gap: 10px;padding: 0 20px;">
      <div class="module-title" style="margin-bottom: 10px">后处理工序状态</div>
      <dv-scroll-board :config="config" style="height: calc(100% - 80px)"/>
    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'A4',
  data() {
    return {
      config: {
        header: ['叶片型号', '叶片号', '工序', '工位号', '项目名称'],
        data: [
          ['B1080D', '00021-XJYGPS001', '外补强', 1, '华电项目'],
          ['B1080D', '00021-XJYGPS002', '切边', 2, '华电项目'],
          ['B1080D', '00021-XJYGPS003', '修型', 3, '华电项目'],
          ['B1080D', '00021-XJYGPS004', '装配', 4, '华电项目'],
          ['B1080D', '00021-XJYGPS005', '外补强', 5, '华电项目'],
          ['B1080D', '00021-XJYGPS006', '修型', 6, '华电项目'],
          ['B1080D', '00021-XJYGPS007', '切边', 7, '华电项目'],
          ['B1080D', '00021-XJYGPS008', '外补强', 8, '华电项目']

        ],
        index: true,
        columnWidth: [50, 150, 300, 150, 120, 150],
        align: ['center'],
        rowNum: 5
      }
    }
  },
  created() {

  }
}
</script>

<style lang="less" scoped>

</style>
