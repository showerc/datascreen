<template>
  <dv-border-box-12>
    <div class=""
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title">各模具生产信息</div>
      <dv-scroll-board :config="config" style="width:95%;height: calc(100% - 70px)"/>
    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'GA1',
  data() {
    return {
      config: {
        header: ['叶片型号', '摸具号', '在制叶片'],
        data: [
          ['B1030E', 'C1', '00195'],
          ['B1030E', 'C2', '00196'],
          ['B1030E', 'C3', '00197'],
          ['B1030E', 'C4', '00198'],
          ['B1030E', 'C5', '00199'],
          ['B1030E', 'C6', '00200'],
          ['B1030E', 'C1', '00195'],
          ['B1030E', 'C2', '00196'],
          ['B1030E', 'C3', '00197'],
          ['B1030E', 'C4', '00198'],
          ['B1030E', 'C5', '00199'],
          ['B1030E', 'C6', '00200']
        ],
        index: true,

        align: ['left', 'left', 'center', 'center'],
        rowNum: 4
      }
    }
  },
  created() {

  }
}
</script>

<style lang="less" scoped>

</style>
