<template>
  <div id="data-view" @click="$router.push('/d')">
    <dv-full-screen-container>
      <dv-border-box-14 title="库房 - 2 ">
        <div
          style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 10px;padding-top:60px">

          <div class="main-container">

            <div style="overflow: hidden;grid-column: 1 / span 6;grid-row: 1 / span 6;">
              <C1/>
            </div>

          </div>

        </div>

      </dv-border-box-14>

    </dv-full-screen-container>
  </div>
</template>

<script>

import C1 from '@/views/pages/C1/components/C1-1.vue'

export default {
  name: 'C',
  components: {
    C1

  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>

.main-container {
  grid-template-columns: repeat(6, 1fr); /* 定义三列，每列占1份空间 */
  grid-template-rows: repeat(6, 1fr); /* 定义两行，每行占1份空间 */
}

</style>
