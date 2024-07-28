<template>
  <dv-border-box-12>
    <div class=""
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title" style="margin-bottom: 10px">预制件状态</div>
      <dv-scroll-board :config="config" style="width:95%;height:70%"/>
    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'A4',
  data() {
    return {
      config: {
        header: ['名称', '编号', '状态'],
        data: [
          ['预制叶根PS', 'B1080D-YGPS001', '合格'],
          ['预制叶根PS', 'B1080D-YGPS002', '合格'],
          ['预制叶根PS', 'B1080D-YGPS003', '合格'],
          ['预制叶根PS', 'B1080D-YGPS004', '合格'],
          ['预制叶根PS', 'B1080D-YGPS005', '合格'],
          ['预制叶根PS', 'B1080D-YGPS006', '合格'],
          ['预制叶根PS', 'B1080D-YGPS007', '合格'],
          ['预制叶根PS', 'B1080D-YGPS008', '合格'],
          ['预制叶根PS', 'B1080D-YGPS009', '合格'],
          ['预制叶根PS', 'B1080D-YGPS010', '合格']

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
