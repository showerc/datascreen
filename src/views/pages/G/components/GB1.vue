<template>
  <dv-border-box-12 class="box-bg-blue">
    <div class=""
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title" style="margin-bottom: 10px">T4行动计划</div>
      <dv-scroll-board :config="config" style="width:95%;height:calc(100% - 80px)"/>
    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'A4',
  data() {
    return {
      config: {
        header: ['提出', '提出时间', '问题描述', '行动计划', '责任', '目标时间', '完成时间', '状态'],
        data: [
          ['张三', '2023-08-01', '设备故障导致生产线停机', '检查并更换故障部件', '李四', '2023-08-02', '2023-08-03', '<span style="color:green;">已完成</span>'],
          ['王五', '2023-08-04', '原料供应延迟', '联系供应商加快供货速度', '赵六', '2023-08-05', '2023-08-06', '<span style="color:yellow;">进行中</span>'],
          ['陈七', '2023-08-07', '产品检验标准不明确', '制定详细的产品检验流程', '周八', '2023-08-08', '2023-08-09', '<span style="color:red;">未完成</span>'],
          ['吴九', '2023-08-10', '员工培训不足', '组织专业技能培训课程', '郑十', '2023-08-11', '', '未开始'],
          ['刘十一', '2023-08-12', '生产效率低下', '优化生产流程，提高自动化水平', '钱十二', '2023-08-13', '2023-08-14', '<span style="color:red;">未完成</span>'],
          ['孙十三', '2023-08-15', '客户投诉产品质量', '调查原因，改进生产工艺', '冯十四', '2023-08-16', '2023-08-17', '<span style="color:red;">未完成</span>'],
          ['朱十五', '2023-08-18', '库存积压严重', '调整生产计划，减少过剩库存', '白十六', '2023-08-19', '2023-08-20', '<span style="color:yellow;">进行中</span>'],
          ['柳十七', '2023-08-21', '安全措施不到位', '加强安全培训，完善安全设施', '崔十八', '2023-08-22', '', '<span style="color:yellow;">进行中</span>'],
          ['秦十九', '2023-08-23', '环保指标超标', '升级环保处理系统，确保达标排放', '何二十', '2023-08-24', '2023-08-25', '<span style="color:green;">已完成</span>'],
          ['胡二十一', '2023-08-26', '市场反馈不佳', '收集用户意见，改进产品设计', '耿二十二', '2023-08-27', '2023-08-28', '<span style="color:green;">已完成</span>']
        ],
        index: true,
        columnWidth: [40, 65, 95, 190, 220, 65, 95, 95, 65],
        align: ['center'],
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
