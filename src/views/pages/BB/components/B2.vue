<template>
  <dv-border-box-12>
    <div class="box-bg-blue"
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title" style="margin-bottom: 10px">预制件状态</div>
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
        header: ['名称', '编号', '状态'],
        data: [
          ['拉挤板', 'B1080D-YGPS001', '合格'],
          ['腹板', 'B1080D-YGPS002', '<span style="color:red;">不合格</span>'],
          ['腹板', 'B1080D-YGPS003', '合格'],
          ['腹板', 'B1080D-YGPS004', '合格'],
          ['拉挤板', 'B1080D-YGPS005', '<span style="color:red;">不合格</span>'],
          ['腹板', 'B1080D-YGPS006', '合格'],
          ['拉挤板', 'B1080D-YGPS007', '<span style="color:red;">不合格</span>'],
          ['腹板', 'B1080D-YGPS008', '合格'],
          ['拉挤板', 'B1080D-YGPS009', '合格'],
          ['腹板', 'B1080D-YGPS010', '合格']

        ],
        index: true,
        columnWidth: [50],
        align: ['center']
      }
    }
  },
  created() {

  }
}
</script>

<style lang="less" scoped>

</style>
