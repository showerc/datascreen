<template>
  <dv-border-box-12>
    <div class=""
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;justify-content:space-between;position: relative;
         align-items: center;">
      <div class="" style="display: flex;flex-direction: column;align-items: center">
        <div class="module-title">预制件合格数量</div>
        <dv-decoration-3 style="width:200px;height:20px;"/>
      </div>

      <dv-conical-column-chart :config="config" style="width:90%;height:80%;margin-bottom: 20px"/>
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
        showValue: true,
        fontSize: 9,
        data: [
          {
            name: '预制叶根 PS',
            value: 55
          },
          {
            name: '预制叶根 SS',
            value: 120
          },
          {
            name: '预制UD PS',
            value: 56
          },
          {
            name: '预制UD SS',
            value: 88
          },
          {
            name: '主梁帽垃圾版 PS',
            value: 64
          },
          {
            name: '主梁帽垃圾版 SS',
            value: 31
          },
          {
            name: '辅梁帽垃圾版 PS',
            value: 46
          },
          {
            name: '辅梁帽垃圾版 SS',
            value: 89
          },
          {
            name: '腹板 SW1',
            value: 76
          },
          {
            name: '腹板 SW2',
            value: 51
          },
          {
            name: '腹板 SW3',
            value: 65
          }

        ]
      }

    }
  }
}
</script>

<style lang="less" scoped>

</style>
