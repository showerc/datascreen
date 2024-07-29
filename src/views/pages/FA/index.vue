<template>
  <div id="data-view" @click="$router.push('/fb')">
    <dv-full-screen-container>
      <dv-border-box-11 title="T4看板 - 安全管理">
        <div
          style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 10px;padding-top:60px">

          <div class="main-container">

            <div style="overflow: hidden;grid-column: 1 / span 3;grid-row: 1 / span 2;">
              <FA1/>
            </div>
            <div style="overflow: hidden;grid-column: 4 / span 2;grid-row: 1 / span 2;">
              <FA2/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 5;grid-row: 3 / span 2;">
              <FA3/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 5;grid-row: 5 / span 2;">
              <FA4/>
            </div>

          </div>

        </div>

      </dv-border-box-11>

    </dv-full-screen-container>
  </div>
</template>

<script>
import FA1 from '@/views/pages/FA/components/FA1.vue'
import FA2 from '@/views/pages/FA/components/FA2.vue'
import FA3 from '@/views/pages/FA/components/FA3.vue'
import FA4 from '@/views/pages/FA/components/FA4.vue'

export default {
  name: 'FA',
  components: {
    FA1,
    FA2,
    FA3,
    FA4

  },
  data() {
    return {}
  }
  // mounted() {
  //   setTimeout(() => {
  //     this.$router.push('/fb')
  //   }, 5000)
  // }
}
</script>

<style lang="less" scoped>

.main-container {

  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);

}

</style>
