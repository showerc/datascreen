<template>
  <dv-border-box-12>
    <div class=""
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title" style="margin-bottom: 10px">环境数据</div>
      <div
        style="width: 100%;display: flex;justify-content: center;padding:0 10px;align-items: center;box-sizing: border-box;flex-wrap: wrap;align-content: center;row-gap: 10px;column-gap: 5px">
        <dv-border-box-13 class="text-box item">
          <dv-digital-flop :config="config1" class="num"/>
          <div class="text-box-desc">温度</div>
        </dv-border-box-13>
        <dv-border-box-13 class="text-box item">
          <dv-digital-flop :config="config2" class="num"/>
          <div class="text-box-desc">湿度</div>
        </dv-border-box-13>
        <dv-border-box-13 class="text-box item">
          <dv-digital-flop :config="config3" class="num"/>
          <div class="text-box-desc">噪音</div>
        </dv-border-box-13>
        <dv-border-box-13 class="text-box item">
          <dv-digital-flop :config="config4" class="num"/>
          <div class="text-box-desc">照度</div>
        </dv-border-box-13>
        <dv-border-box-13 class="text-box item">
          <dv-digital-flop :config="config5" class="num"/>
          <div class="text-box-desc">粉尘含量</div>
        </dv-border-box-13>
      </div>
      <dv-decoration-5 style="width:300px;height:40px;" dur="2"/>

    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'A4',
  data() {
    return {
      config1: {
        number: [25],
        content: '{nt}℃'
      },
      config2: {
        number: [67],
        content: '{nt}RH'
      },
      config3: {
        number: [42],
        content: '{nt}DB'
      },
      config4: {
        number: [80],
        content: '{nt}LX'
      },
      config5: {
        number: [390],
        content: '{nt}粒/升'
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
.item {
  width: 6.5vw;
  height: 4vw;
}

.num {
  width: 7vw;
  height: 1.5vw;
}
</style>
