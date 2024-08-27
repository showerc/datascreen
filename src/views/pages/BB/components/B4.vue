<template>
  <dv-border-box-12>
    <div class="box-bg-blue"
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;justify-content:space-between;position: relative;
         align-items: center;">
      <div class="" style="display: flex;flex-direction: column;align-items: center">
        <div class="module-title">预制件合格数量</div>
        <dv-decoration-3 style="width:200px;height:20px;"/>
      </div>
      <dv-scroll-ranking-board :config="config" style="width: calc(100% - 80px);height:calc(100% - 100px)"/>
      <!--      <dv-capsule-chart :config="config" style="width:calc(100% - 100px);height:calc(100% - 120px)"/>-->

      <!--      <dv-conical-column-chart :config="config" style="width:90%;height:80%;margin-bottom: 20px"/>-->
      <dv-decoration-2 :reverse="true" style="width:10px;height:90%;position: absolute;top:5%;left:20px"/>

    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'A2',
  data() {
    return {
      config: {
        rowNum: 3,
        showValue: true,
        fontSize: 16,
        data: [

          {
            name: '辅梁帽拉挤板',
            value: 88
          },
          {
            name: '腹板',
            value: 64
          }
        ]
      }

    }
  }
}
</script>

<style lang="less" scoped>

</style>
