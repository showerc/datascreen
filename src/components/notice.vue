<template>
  <dv-border-box-12 class="box-bg-blue">
    <div
      style="height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: stretch;position: relative;gap: 10px;padding: 0 20px;">
      <div class="module-title" style="margin-bottom: 10px;text-align: center">消息公告</div>
      <div style="display: flex;gap:20px;justify-content: space-between">

        <dv-border-box-2 :color="['#8360c3','#2ebf91']" class="text-box item">
          <div class="text-box-desc">温度</div>

          <dv-digital-flop :config="config1"
                           class="num"
          />
        </dv-border-box-2>
        <dv-border-box-2 :color="['#8360c3','#2ebf91']" class="text-box item">
          <div class="text-box-desc">湿度</div>

          <dv-digital-flop :config="config2" class="num"/>
        </dv-border-box-2>
      </div>
      <dv-scroll-board :config="config" style="height:calc(100% - 150px)"/>
      <!--      <dv-decoration-2 :reverse="true" style="width:10px;height:90%;position: absolute;top:5%;left:20px"/>-->

    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'Notice',
  props: {
    rowNum: {
      type: Number,
      default: 4
    }
  },
  data() {
    return {
      config1: {
        number: [25],
        content: '{nt}℃',
        style: { fontSize: 22 }
      },
      config2: {
        number: [67],
        content: '{nt}RH',
        style: { fontSize: 22 }

      },
      config: {
        header: [],
        data: [
          ['A1011工艺文件1已下发'],
          ['A1011操作流程1已发下'],
          ['A1011工艺文件2已下发'],
          ['A1012操作流程2已发下'],
          ['A1011工艺文件3已下发'],
          ['A1011操作流程4已发下'],
          ['A1011工艺文件5已下发'],
          ['A1012操作流程6已发下']

        ],
        rowNum: 5,
        index: true,
        columnWidth: [50],
        align: ['center']
      }
    }
  },
  created() {
    this.config.rowNum = this.rowNum
  }
}
</script>

<style lang="less" scoped>
.item {
  padding: 10px;
  align-items: baseline;
}

.num {
  height: 2vw
}
</style>
