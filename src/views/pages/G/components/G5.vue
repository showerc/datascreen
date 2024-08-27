<template>
  <dv-border-box-12 class="box-bg-blue">
    <div
      style="padding:0 10px;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title" style="margin-bottom: 10px">{{ title[titleIndex] }}物料超领明细</div>
      <dv-scroll-board :wait-time="4000" :config="config" style="height:calc(100% - 80px)"/>
    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'GB1',
  data() {
    return {
      title: ['B1030E', 'B1080D', 'B973A', 'B950A'],
      refreshInterval: null,
      // nameArr: ['纤维布', '芯材', '粘合剂', '树脂', '油漆', '双头螺栓', '法兰', '螺栓套'],
      titleIndex: 0,
      config: {
        header: ['名称', '规格型号', '数量', '叶型', '领用人', '领用日期'],
        data: [
          ['铝合金板材', 'AL-1030E', 12, 'B1030E', '张三', '2023-04-01'],
          ['高强度螺栓', 'HS-1080D', 7, 'B1080D', '李四', '2023-04-02'],
          ['不锈钢管', 'SS-973A', 23, 'B973A', '王五', '2023-04-03'],
          ['铸铁件', 'CI-950A', 5, 'B950A', '赵六', '2023-04-04'],
          ['轴承', 'BR-1030E', 18, 'B1030E', '孙七', '2023-04-05'],
          ['齿轮', 'GR-1080D', 10, 'B1080D', '周八', '2023-04-06'],
          ['铜合金棒材', 'CA-973A', 15, 'B973A', '吴九', '2023-04-07'],
          ['密封圈', 'SC-950A', 20, 'B950A', '郑十', '2023-04-08'],
          ['塑料件', 'PL-1030E', 9, 'B1030E', '钱十一', '2023-04-09'],
          ['弹簧', 'SP-1080D', 22, 'B1080D', '孙十二', '2023-04-10'],
          ['钢丝绳', 'SR-973A', 13, 'B973A', '李十三', '2023-04-11'],
          ['法兰盘', 'FP-950A', 4, 'B950A', '赵十四', '2023-04-12'],
          ['铝型材', 'AT-1030E', 17, 'B1030E', '陈十五', '2023-04-13'],
          ['焊接材料', 'WM-1080D', 8, 'B1080D', '杨十六', '2023-04-14'],
          ['绝缘材料', 'IM-973A', 21, 'B973A', '黄十七', '2023-04-15'],
          ['紧固件', 'FF-950A', 11, 'B950A', '刘十八', '2023-04-16'],
          ['橡胶制品', 'RP-1030E', 16, 'B1030E', '许十九', '2023-04-17'],
          ['液压元件', 'HY-1080D', 19, 'B1080D', '何二十', '2023-04-18'],
          ['电缆', 'CB-973A', 6, 'B973A', '郭二十一', '2023-04-19'],
          ['阀门', 'VL-950A', 14, 'B950A', '沈二十二', '2023-04-20']
        ],
        index: true,
        columnWidth: [50, 130, 130, 70, 80, 100, 130],
        align: ['center', 'center', 'center'],
        rowNum: 8
      }
    }
  },
  created() {
    // this.refreshTable()
    // this.refreshInterval = setInterval(() => {
    //   this.refreshTable()
    // }, 4000)
  },
  beforeDestroy() {
    clearInterval(this.refreshInterval)
  },
  methods: {
    // refreshTable() {
    //   const data = []
    //   if (this.titleIndex >= this.title.length - 1) {
    //     this.titleIndex = 0
    //   } else {
    //     this.titleIndex++
    //   }
    //   const config = Object.assign({}, this.config)
    //   this.nameArr.forEach((item, index) => {
    //     const d1 = Math.floor(50 + Math.random() * 30)
    //     const d2 = d1 + Math.floor(10 + Math.random() * 10)
    //     const d3 = d1 + Math.floor(5 + Math.random() * 5)
    //     const d4 = d1 + Math.floor(5 + Math.random() * 5)
    //     const d5 = d1 + Math.floor(5 + Math.random() * 5)
    //     data.push([
    //       item, d1, d2, d3, d4, d5
    //     ])
    //   })
    //   config.data = data
    //   this.config = config
    // }
  }
}
</script>

<style lang="less" scoped>

</style>
