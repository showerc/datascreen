<template>
  <dv-border-box-12>
    <div class="box-bg-blue"
         style="width:100%;height:100%;overflow: hidden;display: flex;flex-direction: column;align-items: center;position: relative;gap: 10px">
      <div class="module-title">{{ title }}</div>
      <div
        style="flex:1;display: flex;flex-direction: column;justify-content: space-between;align-items: center;padding-bottom: 10px;gap:2vh;">
        <div
          style="display: flex;flex-direction: column;justify-content: flex-start;align-items: center;flex:1;padding-bottom: 10px;gap:2vh;">
          <dv-border-box-2 :color="['#8360c3','#2ebf91']"
                           class="text-box item"
          >C1-B1080D

          </dv-border-box-2>
          <dv-border-box-7 :color="['#D73E68','#FBC79A']" class="text-box item">B1080D-01001</dv-border-box-7>
          <dv-border-box-7 class="text-box item">B1080D-01002</dv-border-box-7>
          <dv-border-box-8 class="text-box item">B1080D-01003</dv-border-box-8>
          <dv-border-box-7 class="text-box item">B1080D-01004</dv-border-box-7>
        </div>

      </div>
    </div>
  </dv-border-box-12>

</template>

<script>
export default {
  name: 'B1',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.item {
  width: 10vw;
  height: 5vh;
  font-size: 14px;
}
</style>
