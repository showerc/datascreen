<template>
  <div class="box-white">
    <my-header title="关键设备故障停机统计"/>
    <my-scroll-board :config="config" style="height:calc(100% - 40px)"/>
  </div>
</template>

<script>
export default {
  name: 'H8',
  data() {
    return {

      nameArr: ['设备1', '设备2', '设备3', '设备4', '设备5', '设备6', '设备7', '设备8', '设备9'],
      titleIndex: 0,
      config: {
        headerBGC: '#bdf8fd',
        oddRowBGC: '#fff',
        evenRowBGC: '#bdf8fd',
        header: ['设备名称', '设备编号', '本周', '本月', '总停机'],
        data: [],
        index: true,
        columnWidth: [50, 120, 120, 70, 70, 90],
        align: ['center', 'center', 'center', 'center', 'center', 'center'],
        rowNum: 8
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
        const d1 = 'JQ-' + Math.floor(1000 + Math.random() * 800)
        const d3 = Math.floor(Math.random() * 1)
        const d4 = Math.floor(2 + Math.random() * 2)
        const d5 = Math.floor(4 + Math.random() * 3)

        data.push([
          item, d1, d3, d4, d5
        ])
      })
      config.data = data
      this.config = config
    }
  }
}
</script>

<style lang="less" scoped>
.date-item {
  width: 70px;
  height: 70px;
  border: 1px solid #8ad153;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #8ad153;
  font-size: 12px;

  &.danger {
    border-color: transparent;
    background: red;
  }
}
</style>
