<template>
  <div class="box-white">
    <my-header title="质量预警宣讲材料(总部下发)" type="red"/>
    <img v-if="type===1" src="@/assets/img/2.png" style="height: calc(100% - 60px);object-fit: contain	"/>
    <img v-else-if="type===2" src="@/assets/img/2.gif" style="height: calc(100% - 60px);object-fit: contain	"/>
  </div>

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
