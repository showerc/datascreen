<template>
  <dv-border-box-12 class="box-bg-blue" style="overflow: hidden">
    <div class=""
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px;overflow: hidden">
      <div v-if="type===1" class="module-title" style="margin-bottom: 10px">质量预警宣讲材料</div>
      <div v-else-if="type===2" class="module-title" style="margin-bottom: 10px">临时专项工作</div>
      <img v-if="type===1" src="@/assets/img/2.png" style="height: calc(100% - 80px);object-fit: contain	"/>
      <img v-else-if="type===2" src="@/assets/img/2.gif" style="height: calc(100% - 80px);object-fit: contain	"/>

    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'FC4',
  props: {
    type: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      config: {
        header: [],
        data: [
          ['消息公告1'],
          ['消息公告2'],
          ['消息公告3'],
          ['消息公告4'],
          ['消息公告5'],
          ['消息公告6'],
          ['消息公告7'],
          ['消息公告8'],
          ['消息公告9'],
          ['消息公告10'],
          ['消息公告11'],
          ['消息公告12']

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
