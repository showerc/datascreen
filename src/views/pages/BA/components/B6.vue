<template>
  <dv-border-box-12>
    <div class="box-bg-blue"
         style="padding:0 10px;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title" style="margin-bottom: 10px">生产计划</div>

      <dv-scroll-board :config="config" style="height:calc(100% - 80px)"/>
    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'A4',
  data() {
    return {
      config: {
        header: ['预制件名称', '本月计划', '完成数量'],
        data: [
          ['预制叶根', 12, '<div style="left:0;right:50px;position: absolute;top:50%;height:40px;transform: translate(0,-50%);display: flex;align-content: center;justify-content: flex-start"><span style="height:16px;top:12px;border-radius:4px;background: #eee;width:100%;position: absolute;"></span><span style="height:16px;top:12px;border-radius:4px;background: linear-gradient(90deg, #FEB692 0%, #EA5455 100%);width:25%;position: absolute;z-index: 2;line-height: 16px;text-align: center;font-weight: bold;font-size: 14px">3</span></div><div style="width:40px;right:0;position: absolute;height:40px;display: flex;align-content: center;justify-content: flex-start"<span style="position: absolute;top:-20px;left:0;height:20px;">25%</span></div>'],
          ['预制UD', 24, '<div style="left:0;right:50px;position: absolute;top:50%;height:40px;transform: translate(0,-50%);display: flex;align-content: center;justify-content: flex-start"><span style="height:16px;top:12px;border-radius:4px;background: #eee;width:100%;position: absolute;"></span><span style="height:16px;top:12px;border-radius:4px;background: linear-gradient(90deg, #FEB692 0%, #EA5455 100%);width:50%;position: absolute;z-index: 2;line-height: 16px;text-align: center;font-weight: bold;font-size: 14px">12</span></div><div style="width:40px;right:0;position: absolute;height:40px;display: flex;align-content: center;justify-content: flex-start"<span style="position: absolute;top:-20px;left:0;height:20px;">50%</span></div>']
        ],
        index: true,
        rowNum: 2,
        columnWidth: [50, 120, 100, 400],
        align: ['center']
      }
    }
  },
  created() {

  }
}
</script>

<style lang="less" scoped>
.total {
  background-color: #eee;
  width: 200px
}
</style>
