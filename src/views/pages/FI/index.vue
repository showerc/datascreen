<template>
  <div id="data-view" @click="$router.push('/fj')">
    <dv-full-screen-container>
      <dv-border-box-11 title="T4看板 - 人员/设备/物料管理1" :title-width="400">
        <div
          style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 10px;padding-top:60px">

          <div class="main-container">

            <div style="overflow: hidden;grid-column: 1 / span 5;grid-row: 1 / span 1;">
              <FI1/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 5;grid-row: 2 / span 1;">
              <FI2/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 5;grid-row: 3 / span 1;">
              <FI3/>
            </div>
          </div>
        </div>

      </dv-border-box-11>

    </dv-full-screen-container>
  </div>
</template>

<script>
import FI1 from '@/views/pages/FI/components/FI1.vue'
import FI2 from '@/views/pages/FI/components/FI2.vue'
import FI3 from '@/views/pages/FI/components/FI3.vue'

export default {
  name: 'FI',
  components: {
    FI1,
    FI2,
    FI3
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>

.main-container {
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
}

</style>
