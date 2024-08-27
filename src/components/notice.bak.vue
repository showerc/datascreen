<template>
  <dv-border-box-12>
    <div class="box-bg-blue"
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title" style="margin-bottom: 10px">消息公告</div>
      <dv-scroll-board :config="config" style="width:90%;height:calc(100% - 80px)"/>
    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'Notice',
  props: {
    rowNum: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      config: {
        header: [],
        data: [
          {
            title: '标题1',
            content: '测试内容1测试内容1测试内容1测试内容1测试内容1测试内容1测试内容1测试内容1测试内容1测试内容1测试内容1测试内容1测试内容1测试内容1测试内容1测试内容1测试内容1测试内容1'
          },
          {
            title: '标题2',
            content: 'content'
          },
          {
            title: '时间',
            value: 'time'
          }

        ],
        rowNum: 5,
        index: true,
        columnWidth: [50],
        align: ['center']
      }
    }
  },
  created() {
    this.config.rowNum = this.rowNum
  }
}
</script>

<style lang="less" scoped>

</style>
