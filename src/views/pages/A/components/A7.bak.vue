<template>
  <dv-border-box-12>
    <div class="box-bg-blue"
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title" style="margin-bottom: 10px">生产计划</div>
      <div
        style="width: 100%;display: flex;flex-direction:column;justify-content: flex-start;padding:0 10px;align-items: flex-start;box-sizing: border-box;flex-wrap: wrap;align-content: center;row-gap: 10px;gap: 5px;height: 100%;overflow: hidden;">
        <dv-border-box-13 class="text-box item">
          <dv-digital-flop :config="config1" class="num"/>
          <div class="text-box-desc">本月计划</div>
        </dv-border-box-13>
        <dv-border-box-13 class="text-box item">
          <dv-digital-flop :config="config2" class="num"/>
          <div class="text-box-desc">当前完成</div>
        </dv-border-box-13>
        <dv-border-box-13 class="text-box item">
          <dv-digital-flop :config="config3" class="num"/>
          <div class="text-box-desc">当前未完成</div>
        </dv-border-box-13>

      </div>
      <dv-decoration-5 style="width:200px;height:40px;" :dur="2"/>

    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'A4',
  data() {
    return {
      config1: {
        number: [42],
        content: '{nt}台'
      },
      config2: {
        number: [35],
        content: '{nt}台'
      },
      config3: {
        number: [7],
        content: '{nt}台'
      }
      // config4: {
      //   number: [80],
      //   content: '{nt}LX'
      // },
      // config5: {
      //   number: [390],
      //   content: '{nt}粒/升'
      // }
    }
  },
  created() {
    // setTimeout(() => {
    //   // this.config1 = {
    //   //   number: [25 + Math.floor(Math.random() * 5)],
    //   //   content: '{nt}℃'
    //   // }
    //   // this.config2 = {
    //   //   number: [67 + Math.floor(Math.random() * 10)],
    //   //   content: '{nt}RH'
    //   // }
    //   // this.config5 = {
    //   //   number: [390 + Math.floor(Math.random() * 30)],
    //   //   content: '{nt}粒/升'
    //   // }
    // }, 2000)
  }
}
</script>

<style lang="less" scoped>
.item {
  width: 8vw;
  height: 5vw;

}

.num {
  width: 8vw;
  height: 3vw;
}
</style>
