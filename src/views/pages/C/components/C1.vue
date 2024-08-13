<template>
  <dv-border-box-12>
    <div class="box-bg-blue"
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title" style="margin-bottom: 10px">已配料信息</div>
      <dv-scroll-board :config="config" style="width:95%;height:calc(100% - 80px)"/>
    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'A4',
  data() {
    return {
      config: {
        header: ['叶型号', '叶片号', '已配料'],
        data: [
          ['B1080D', '00021-XJYGPS001', '已配料'],
          ['B1080D', '00021-XJYGPS002', '已配料'],
          ['B1080D', '00021-XJYGPS003', '已配料'],
          ['B1080D', '00021-XJYGPS004', '已配料'],
          ['B1080D', '00021-XJYGPS005', '已配料'],
          ['B1080D', '00021-XJYGPS006', '已配料'],
          ['B1080D', '00021-XJYGPS007', '已配料'],
          ['B1080D', '00021-XJYGPS008', '已配料'],
          ['B1080D', '00021-XJYGPS009', '已配料'],
          ['B1080D', '00021-XJYGPS010', '已配料'],
          ['B1080D', '00021-XJYGPS001', '已配料'],
          ['B1080D', '00021-XJYGPS002', '已配料'],
          ['B1080D', '00021-XJYGPS003', '已配料'],
          ['B1080D', '00021-XJYGPS004', '已配料'],
          ['B1080D', '00021-XJYGPS005', '已配料'],
          ['B1080D', '00021-XJYGPS006', '已配料'],
          ['B1080D', '00021-XJYGPS007', '已配料'],
          ['B1080D', '00021-XJYGPS008', '已配料'],
          ['B1080D', '00021-XJYGPS009', '已配料'],
          ['B1080D', '00021-XJYGPS010', '已配料']
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
