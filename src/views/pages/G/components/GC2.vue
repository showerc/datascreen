<template>
  <dv-border-box-8 :dur="4" class="box-bg-blue">
    <div
      style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title" style="margin-bottom: 10px">关键设备故障停机统计</div>
      <dv-scroll-board :wait-time="4000" :config="config" style="width:95%;height:calc(100% - 100px)"/>
    </div>
  </dv-border-box-8>

</template>

<script>
export default {
  name: 'GB1',
  data() {
    return {

      nameArr: ['设备1', '设备2', '设备3', '设备4', '设备5', '设备6', '设备7', '设备8'],
      titleIndex: 0,
      config: {
        header: ['设备类型', '数量', '26日', '27日', '28日', '29日'],
        data: [],
        index: true,
        columnWidth: [50, 140, 80, 80, 80, 80, 80],
        align: ['center', 'center', 'center'],
        rowNum: 8,
        carousel: 'page'
      }
    }
  },
  created() {
    this.refreshTable()
    // this.refreshInterval = setInterval(() => {
    //   this.refreshTable()
    // }, 4000)
  },
  beforeDestroy() {
    // clearInterval(this.refreshInterval)
  },
  methods: {
    refreshTable() {
      const data = []
      // if (this.titleIndex >= this.title.length - 1) {
      //   this.titleIndex = 0
      // } else {
      //   this.titleIndex++
      // }
      const config = Object.assign({}, this.config)
      this.nameArr.forEach((item, index) => {
        const d1 = Math.floor(3 + Math.random() * 4)
        const d2 = Math.floor(Math.random() * 1.5)
        const d3 = Math.floor(Math.random() * 2)
        const d4 = Math.floor(Math.random() * 1.5)
        const d5 = Math.floor(Math.random() * 1.5)

        data.push([
          item, d1, d2, d3, d4, d5
        ])
      })
      config.data = data
      this.config = config
    }
  }
}
</script>

<style lang="less" scoped>

</style>
