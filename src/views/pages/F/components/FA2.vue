<template>
  <dv-border-box-12>
    <div class=""
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title" style="margin-bottom: 10px">事故列表</div>
    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'FA2',
  data() {
    return {
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
        columnWidth: [100, 55, 200, 70, 85],
        align: ['left', 'center', 'left', 'left', 'left'],
        rowNum: 6
      }
    }
  },
  created() {

  }
}
</script>

<style lang="less" scoped>

</style>
