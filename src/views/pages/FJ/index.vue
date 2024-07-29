<template>
  <div id="data-view" @click="$router.push('/fk')">
    <dv-full-screen-container>
      <dv-border-box-11 title="T4看板 - 人员/设备/物料管理2" :title-width="400">
        <div
          style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 10px;padding-top:60px">

          <div class="main-container">

            <div style="overflow: hidden;grid-column: 1 / span 2;grid-row: 1 / span 1;">
              <FJ1/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 2;grid-row: 1 / span 1;">
              <FJ2/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 2;grid-row: 2 / span 1;">
              <FJ3/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 2;grid-row: 2 / span 1;">
              <FJ4/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 2;grid-row: 3 / span 1;">
              <FJ5/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 2;grid-row: 3 / span 1;">
              <FJ6/>
            </div>
          </div>
        </div>

      </dv-border-box-11>

    </dv-full-screen-container>
  </div>
</template>

<script>
import FJ1 from '@/views/pages/FJ/components/FJ1.vue'
import FJ2 from '@/views/pages/FJ/components/FJ2.vue'
import FJ3 from '@/views/pages/FJ/components/FJ3.vue'
import FJ4 from '@/views/pages/FJ/components/FJ4.vue'
import FJ5 from '@/views/pages/FJ/components/FJ5.vue'
import FJ6 from '@/views/pages/FJ/components/FJ6.vue'

export default {
  name: 'FJ',
  components: {
    FJ4,
    FJ3,
    FJ2,
    FJ1,
    FJ5,
    FJ6
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
