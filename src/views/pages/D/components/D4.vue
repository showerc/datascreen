<template>
  <dv-border-box-12>
    <div class="box-bg-blue"
         style="height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: stretch;position: relative;gap: 10px;padding: 0 20px;">
      <div class="module-title" style="margin-bottom: 10px">设备列表</div>
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
        header: ['设备类型', '编号', '原材料厂家', '状态', '作业位置'],
        data: [
          ['粘接剂混胶机', 'AB-1234', '上海材料厂', '正常', 'C1-1080D'],
          ['电动地牛', 'CD-5678', '北京材料厂', '<span style="color: red">待维修</span>', ''],
          ['灌注一体机', 'EF-9012', '广州材料厂', '正常', 'C2-1080D'],
          ['三组分手糊机', 'GH-3456', '深圳材料厂', '<span style="color: red">待维修</span>', ''],
          ['粘接剂混胶机', 'IJ-7890', '天津材料厂', '正常', 'C3-1080D'],
          ['电动地牛', 'KL-1357', '重庆材料厂', '<span style="color: red">待维修</span>', ''],
          ['灌注一体机', 'MN-2468', '成都材料厂', '正常', 'C4-1080D'],
          ['三组分手糊机', 'OP-1122', '西安材料厂', '正常', ''],
          ['粘接剂混胶机', 'QR-3344', '武汉材料厂', '正常', 'C5-1080D'],
          ['电动地牛', 'ST-5566', '南京材料厂', '<span style="color: red">待维修</span>', ''],
          ['灌注一体机', 'UV-7788', '杭州材料厂', '正常', 'C6-1080D'],
          ['三组分手糊机', 'WX-9900', '宁波材料厂', '正常', ''],
          ['粘接剂混胶机', 'YZ-1111', '苏州材料厂', ''],
          ['电动地牛', 'AA-2222', '无锡材料厂', '正常', ''],
          ['灌注一体机', 'BB-3333', '常州材料厂', ''],
          ['三组分手糊机', 'CC-4444', '南通材料厂', '正常', ''],
          ['粘接剂混胶机', 'DD-5555', '泰州材料厂'],
          ['电动地牛', 'EE-6666', '扬州材料厂', '正常', ''],
          ['灌注一体机', 'FF-7777', '镇江材料厂', ''],
          ['三组分手糊机', 'GG-8888', '盐城材料厂', '正常', '']
        ],
        index: true,
        columnWidth: [50],
        align: ['center'],
        rowNum: 10
      }
    }
  },
  created() {

  }
}
</script>

<style lang="less" scoped>

</style>
