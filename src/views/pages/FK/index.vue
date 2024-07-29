<template>
  <div id="data-view" @click="$router.push('/')">
    <dv-full-screen-container>
      <dv-border-box-11 title="T4看板 - 人员/设备/物料管理2" :title-width="400">
        <div
          style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 10px;padding-top:60px">

          <div class="main-container">

            <div style="overflow: hidden;grid-column: 1 / span 3;grid-row: 1 / span 3;">
              <FK1/>
            </div>
            <div style="overflow: hidden;grid-column: 4 / span 1;grid-row: 1 / span 1;">
              <dv-border-box-3 class="text-box">
                <dv-border-box-8
                  style="width:240px;height:60px;margin-bottom: 20px;font-weight: bold;font-size:22px;color:#17caeb">
                  车间连续安全生产
                </dv-border-box-8>

                <dv-water-level-pond :config="{
                  shape: 'roundRect',
                  formatter:'1088天',
                  data:[30,20]

                }"
                                     style="width:240px;height:100px"/>

              </dv-border-box-3>

            </div>
            <div style="overflow: hidden;grid-column: 4 / span 1;grid-row: 2 / span 2;">
              <FK2/>
            </div>
          </div>
        </div>

      </dv-border-box-11>

    </dv-full-screen-container>
  </div>
</template>

<script>
import FK1 from '@/views/pages/FK/components/FK1.vue'
import FK2 from '@/views/pages/FK/components/FK2.vue'

export default {
  name: 'FK',
  components: {
    FK1,
    FK2
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>

.main-container {
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
}

</style>
