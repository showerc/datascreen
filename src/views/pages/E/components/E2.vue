<template>
  <dv-border-box-12>
    <div class=""
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title" style="margin-bottom: 10px">关键控制点</div>
      <img src="@/assets/img/2.gif" style="width:90%"/>

    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'A4',
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
    setInterval(() => {
      this.config3 = {
        number: [40 + Math.floor(Math.random() * 10)],
        content: '{nt}DB'
      }
      this.config4 = {
        number: [80 + Math.floor(Math.random() * 5)],
        content: '{nt}LX'
      }
      this.config5 = {
        number: [390 + Math.floor(Math.random() * 30)],
        content: '{nt}粒/升'
      }
    }, 2000)
  }
}
</script>

<style lang="less" scoped>

</style>
