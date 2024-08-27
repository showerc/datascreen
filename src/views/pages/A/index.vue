<template>
  <div id="data-view">
    <dv-full-screen-container>
      <dv-border-box-14 title="模具工位">
        <div
          style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 10px;padding-top:60px">

          <div class="main-container">

            <div style="overflow: hidden;grid-column: 1 / span 14;grid-row: 1 / span 3;">
              <A8/>
            </div>
            <div style="overflow: hidden;grid-column: 15 / span 14;grid-row: 1 / span 3;">
              <A5/>
            </div>
            <div style="overflow: hidden;grid-column: 29 / span 14;grid-row: 1 / span 3;">
              <A6/>
            </div>
            <div style="overflow: hidden;grid-column: 43 / span 14;grid-row: 1 / span 3;">

              <A3/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 8;grid-row: 4 / span 3;">
              <A1/>
            </div>
            <div style="overflow: hidden;grid-column: 9 / span 16;grid-row: 4 / span 3;">
              <A7/>
            </div>
            <div style="overflow: hidden;grid-column: 25 / span 16;grid-row: 4 / span 3;">
              <A2/>
            </div>

            <div style="overflow: hidden;grid-column: 41 / span 16;grid-row: 4 / span 3;">
              <Notice :row-num="4"/>
            </div>
          </div>

        </div>

      </dv-border-box-14>

    </dv-full-screen-container>
  </div>
</template>

<script>
import A1 from '@/views/pages/A/components/A1.vue'
import A2 from '@/views/pages/A/components/A2.vue'
import A3 from '@/views/pages/A/components/A3.vue'

import A5 from '@/views/pages/A/components/A5.vue'
import A6 from '@/views/pages/A/components/A6.vue'
import A7 from '@/views/pages/A/components/A7.vue'
import Notice from '@/components/notice.vue'
import A8 from '@/views/pages/A/components/A8.vue'

export default {
  name: 'A',
  components: {
    A1,
    A2,
    A3,
    A5,
    A6,
    A7,
    A8,
    Notice
  },
  data() {
    return {}
  },
  mounted() {
    document.addEventListener('keyup', this.onKeyup)
  },
  beforeDestroy() {
    document.removeEventListener('keyup', this.onKeyup)
  },
  methods: {}
}
</script>

<style lang="less" scoped>

.main-container {
  grid-template-columns: repeat(56, 1fr); /* 定义三列，每列占1份空间 */
  grid-template-rows: repeat(6, 1fr); /* 定义两行，每行占1份空间 */
}

</style>
