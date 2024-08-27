<template>
  <div id="data-view" @click="$router.go(-1)">
    <dv-full-screen-container>
      <dv-border-box-14 title="成型计划完成情况" :title-width="800" :font-size="30">
        <div
          style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 10px;padding-top:60px">

          <div class="main-container">

            <div style="overflow: hidden;grid-column: 1 / span 4;grid-row: 1 / span 4;">
              <FA1 title="B1030E"/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 4;grid-row: 5 / span 4;">
              <FA1 title="B1080D"/>
            </div>
            <div style="overflow: hidden;grid-column: 5 / span 4;grid-row: 1 / span 4;">
              <FA1 title="B973A"/>
            </div>
            <div style="overflow: hidden;grid-column: 5 / span 4;grid-row: 5 / span 4;">
              <FA1 title="B950A"/>
            </div>
          </div>

        </div>

      </dv-border-box-14>

    </dv-full-screen-container>
  </div>
</template>

<script>
import FA1 from '@/views/pages/FA/components/FA1.vue'

export default {
  name: 'FA',
  components: {
    FA1
  },
  data() {
    return {}
  }

}
</script>

<style lang="less" scoped>

.main-container {

  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);

}

</style>
