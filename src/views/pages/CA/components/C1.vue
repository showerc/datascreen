<template>
  <dv-border-box-12>
    <div class="box-bg-blue"
         style="height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: stretch;position: relative;gap: 10px;padding: 0 20px;">
      <div class="module-title" style="margin-bottom: 10px">已配料信息</div>
      <dv-scroll-board :config="config" style="height:calc(100% - 80px)"/>
    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'A4',
  data() {
    return {
      config: {
        header: ['叶型号', '叶片号', '模具号', '已配料', '领料人', '配送人'],
        data: [
          ['C1-B1080D', '00021-XJYGPS001', '01001', '已配料', '张三', '李四'],
          ['C1-B1080D', '00021-XJYGPS002', '01002', '<span style="color:red">未配料</span>', '', ''],
          ['D1-B1080D', '00021-XJYGPS003', '01003', '已配料', '张三', '李四'],
          ['D1-B1080D', '00021-XJYGPS004', '01004', '已配料', '张三', '李四'],
          ['C1-B1030E', '00021-XJYGPS005', '01005', '已配料', '张三', '李四'],
          ['C1-B1030E', '00021-XJYGPS006', '01006', '已配料', '张三', '李四'],
          ['C1-B1030E', '00021-XJYGPS001', '01001', '已配料', '张三', '李四'],
          ['C1-B1030E', '00021-XJYGPS002', '01002', '<span style="color:red">未配料</span>', '', ''],
          ['D1-B1030E', '00021-XJYGPS003', '01003', '已配料', '张三', '李四'],
          ['D1-B1030E', '00021-XJYGPS004', '01004', '已配料', '张三', '李四'],
          ['D1-B1030E', '00021-XJYGPS005', '01005', '已配料', '张三', '李四'],
          ['D1-B1030E', '00021-XJYGPS006', '01006', '已配料', '张三', '李四'],
          ['D1-B973A', '00021-XJYGPS001', '01001', '已配料', '张三', '李四'],
          ['D1-B973A', '00021-XJYGPS002', '01002', '<span style="color:red">未配料</span>', '', ''],
          ['D1-B973A', '00021-XJYGPS003', '01003', '已配料', '张三', '李四'],
          ['D1-B973A', '00021-XJYGPS004', '01004', '已配料', '张三', '李四'],
          ['D1-B973A', '00021-XJYGPS005', '01005', '已配料', '张三', '李四'],
          ['D1-B950A', '00021-XJYGPS006', '01006', '已配料', '张三', '李四'],
          ['C1-B1080D', '00021-XJYGPS001', '01001', '已配料', '张三', '李四'],
          ['C1-B1080D', '00021-XJYGPS002', '01002', '<span style="color:red">未配料</span>'],
          ['D1-B1080D', '00021-XJYGPS003', '01003', '已配料', '张三', '李四'],
          ['D1-B1080D', '00021-XJYGPS004', '01004', '已配料', '张三', '李四'],
          ['C1-B1030E', '00021-XJYGPS005', '01005', '已配料', '张三', '李四'],
          ['C1-B1030E', '00021-XJYGPS006', '01006', '已配料', '张三', '李四'],
          ['C1-B1030E', '00021-XJYGPS001', '01001', '已配料', '张三', '李四'],
          ['C1-B1030E', '00021-XJYGPS002', '01002', '<span style="color:red">未配料</span>'],
          ['D1-B1030E', '00021-XJYGPS003', '01003', '已配料', '张三', '李四'],
          ['D1-B1030E', '00021-XJYGPS004', '01004', '已配料', '张三', '李四'],
          ['D1-B1030E', '00021-XJYGPS005', '01005', '已配料', '张三', '李四'],
          ['D1-B1030E', '00021-XJYGPS006', '01006', '已配料', '张三', '李四'],
          ['D1-B973A', '00021-XJYGPS001', '01001', '已配料', '张三', '李四'],
          ['D1-B973A', '00021-XJYGPS002', '01002', '<span style="color:red">未配料</span>'],
          ['D1-B973A', '00021-XJYGPS003', '01003', '已配料', '张三', '李四'],
          ['D1-B973A', '00021-XJYGPS004', '01004', '已配料', '张三', '李四'],
          ['D1-B973A', '00021-XJYGPS005', '01005', '已配料', '张三', '李四'],
          ['D1-B950A', '00021-XJYGPS006', '01006', '已配料', '张三', '李四']

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
