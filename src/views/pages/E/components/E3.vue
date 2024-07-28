<template>
  <dv-border-box-12>
    <div class=""
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title" style="margin-bottom: 10px">后处理工序状态</div>
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
        header: ['叶片型号', '叶片号', '工序'],
        data: [
          ['B1080D', '00021-XJYGPS001', '外补强'],
          ['B1080D', '00021-XJYGPS002', '切边'],
          ['B1080D', '00021-XJYGPS003', '修型'],
          ['B1080D', '00021-XJYGPS004', '装配'],
          ['B1080D', '00021-XJYGPS005', '外补强'],
          ['B1080D', '00021-XJYGPS006', '修型'],
          ['B1080D', '00021-XJYGPS007', '切边'],
          ['B1080D', '00021-XJYGPS008', '外补强']

        ],
        index: true,
        columnWidth: [50],
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
