<template>
  <div id="data-view">
    <dv-full-screen-container>
      <dv-border-box-14 title="新疆项⽬部T4 精益运营管理看板" :title-width="1800" :font-size="30">
        <div
          style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 10px;padding-top:60px">

          <div class="main-container">
            <div style="overflow: hidden;grid-column: 1 / span 1;grid-row: 1 / span 1;">
              <H1/>
            </div>
            <div style="overflow: hidden;grid-column: 2 / span 1;grid-row: 1 / span 1;">
              <H2/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 1;grid-row: 1 / span 1;">
              <H3/>
            </div>
            <div style="overflow: hidden;grid-column: 4 / span 1;grid-row: 1 / span 1;">
              <H4/>
            </div>
            <div style="overflow: hidden;grid-column: 5 / span 1;grid-row: 1 / span 1;">
              <H5/>
            </div>
            <div style="overflow: hidden;grid-column: 6 / span 1;grid-row: 1 / span 1;">
              <H6/>
            </div>
            <div style="overflow: hidden;grid-column: 7 / span 1;grid-row: 1 / span 1;">
              <H7/>
            </div>
            <div style="overflow: hidden;grid-column: 8 / span 1;grid-row: 1 / span 1;">
              <H8/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 1;grid-row: 2 / span 1;">
              <H9/>
            </div>
            <div style="overflow: hidden;grid-column: 2 / span 1;grid-row: 2 / span 1;">
              <H10/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 1;grid-row: 2 / span 1;">
              <H11/>
            </div>
            <div style="overflow: hidden;grid-column: 4 / span 1;grid-row: 2 / span 1;">
              <H12/>
            </div>
            <div style="overflow: hidden;grid-column: 5 / span 1;grid-row: 2 / span 1;">
              <H13/>
            </div>
            <div style="overflow: hidden;grid-column: 6 / span 1;grid-row: 2 / span 1;">
              <H14/>
            </div>
            <div style="overflow: hidden;grid-column: 7 / span 1;grid-row: 2 / span 1;">
              <H15/>
            </div>
            <div style="overflow: hidden;grid-column: 8 / span 1;grid-row: 2 / span 1;">
              <H16/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 1;grid-row: 3 / span 1;">
              <H17/>
            </div>
            <div style="overflow: hidden;grid-column: 2 / span 1;grid-row: 3 / span 1;">
              <H18/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 1;grid-row: 3 / span 1;">
              <H19/>
            </div>
            <div style="overflow: hidden;grid-column: 4 / span 1;grid-row: 3 / span 1;">
              <H20/>
            </div>
            <div style="overflow: hidden;grid-column: 5 / span 1;grid-row: 3 / span 1;">
              <H21/>
            </div>
            <div style="overflow: hidden;grid-column: 6 / span 1;grid-row: 3 / span 1;">
              <H22/>
            </div>
            <div style="overflow: hidden;grid-column: 7 / span 1;grid-row: 3 / span 1;">
              <H23/>
            </div>
            <div style="overflow: hidden;grid-column: 8 / span 1;grid-row: 3 / span 1;">
              <H24/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 8;grid-row: 4 / span 1;">
              <H25/>
            </div>
          </div>
        </div>

      </dv-border-box-14>

    </dv-full-screen-container>
  </div>
</template>

<script>
import H1 from '@/views/pages/H/components/H1.vue'
import H2 from '@/views/pages/H/components/H2.vue'
import H3 from '@/views/pages/H/components/H3.vue'
import H4 from '@/views/pages/H/components/H4.vue'
import H5 from '@/views/pages/H/components/H5.vue'
import H6 from '@/views/pages/H/components/H6.vue'
import H7 from '@/views/pages/H/components/H7.vue'
import H8 from '@/views/pages/H/components/H8.vue'
import H9 from '@/views/pages/H/components/H9.vue'
import H10 from '@/views/pages/H/components/H10.vue'
import H11 from '@/views/pages/H/components/H11.vue'
import H12 from '@/views/pages/H/components/H12.vue'
import H13 from '@/views/pages/H/components/H13.vue'
import H14 from '@/views/pages/H/components/H14.vue'
import H15 from '@/views/pages/H/components/H15.vue'
import H16 from '@/views/pages/H/components/H16.vue'
import H17 from '@/views/pages/H/components/H17.vue'
import H18 from '@/views/pages/H/components/H18.vue'
import H19 from '@/views/pages/H/components/H19.vue'
import H20 from '@/views/pages/H/components/H20.vue'
import H21 from '@/views/pages/H/components/H21.vue'
import H22 from '@/views/pages/H/components/H22.vue'
import H23 from '@/views/pages/H/components/H23.vue'
import H24 from '@/views/pages/H/components/H24.vue'

import H25 from '@/views/pages/H/components/H25.vue'

export default {
  name: 'H',
  components: {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    H7,
    H8,
    H9,
    H10,
    H11,
    H12,
    H13,
    H14,
    H15,
    H16,
    H17,
    H18,
    H19,
    H20,
    H21,
    H22,
    H23,
    H24,
    H25
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

  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);

}

</style>
