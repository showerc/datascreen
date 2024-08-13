<template>
  <dv-border-box-8 :dur="4" class="box-bg-blue">
    <div
      style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title" style="margin-bottom: 10px">{{ title[titleIndex] }}计划外领⽤与盘点差异统计</div>
      <dv-scroll-board :wait-time="4000" :config="config" style="width:95%;height:calc(100% - 100px)"/>
    </div>
  </dv-border-box-8>

</template>

<script>
export default {
  name: 'GB1',
  data() {
    return {
      title: ['B1030E', 'B1080D', 'B973A', 'B950A'],
      refreshInterval: null,
      nameArr: ['纤维布', '芯材', '粘合剂', '树脂', '油漆', '双头螺栓', '法兰', '螺栓套'],
      titleIndex: 0,
      config: {
        header: ['主材', '安全库存', '库存', '周一', '周二', '周三'],
        data: [],
        index: true,
        columnWidth: [50, 100, 80],
        align: ['center', 'center', 'center'],
        rowNum: 8,
        carousel: 'page'
      }
    }
  },
  created() {
    this.refreshTable()
    this.refreshInterval = setInterval(() => {
      this.refreshTable()
    }, 4000)
  },
  beforeDestroy() {
    clearInterval(this.refreshInterval)
  },
  methods: {
    refreshTable() {
      const data = []
      if (this.titleIndex >= this.title.length - 1) {
        this.titleIndex = 0
      } else {
        this.titleIndex++
      }
      const config = Object.assign({}, this.config)
      this.nameArr.forEach((item, index) => {
        const d1 = Math.floor(50 + Math.random() * 30)
        const d2 = d1 + Math.floor(10 + Math.random() * 10)
        const d3 = d1 + Math.floor(5 + Math.random() * 5)
        const d4 = d1 + Math.floor(5 + Math.random() * 5)
        const d5 = d1 + Math.floor(5 + Math.random() * 5)
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
