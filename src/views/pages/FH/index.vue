<template>
  <div id="data-view" @click="$router.push('/fi')">
    <dv-full-screen-container>
      <dv-border-box-11 title="T4看板 - 成本管理2">
        <div
          style="height:100%;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;padding: 10px;padding-top:60px">

          <div class="main-container">

            <div style="overflow: hidden;grid-column: 1 / span 1;grid-row: 1 / span 1;">
              <FH1 title="B1030E 纤维布计划外领用与盘点差异统计"/>
            </div>
            <div style="overflow: hidden;grid-column: 2 / span 1;grid-row: 1 / span 1;">
              <FH1 title="B1030E 芯材计划外领用与盘点差异统计"/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 1;grid-row: 1 / span 1;">
              <FH1 title="B1030E 粘结剂计划外领用与盘点差异统计"/>
            </div>
            <div style="overflow: hidden;grid-column: 4 / span 1;grid-row: 1 / span 1;">
              <FH1 title="B1030E 树脂计划外领用与盘点差异统计"/>
            </div>
            <div style="overflow: hidden;grid-column: 5 / span 1;grid-row: 1 / span 1;">
              <FH1 title="B1030E 油漆计划外领用与盘点差异统计"/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 1;grid-row: 2 / span 1;">
              <FH1 title="B1080D 纤维布计划外领用与盘点差异统计"/>
            </div>
            <div style="overflow: hidden;grid-column: 2 / span 1;grid-row: 2 / span 1;">
              <FH1 title="B1080D 芯材计划外领用与盘点差异统计"/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 1;grid-row: 2 / span 1;">
              <FH1 title="B1080D 粘结剂计划外领用与盘点差异统计"/>
            </div>
            <div style="overflow: hidden;grid-column: 4 / span 1;grid-row: 2 / span 1;">
              <FH1 title="B1080D 树脂计划外领用与盘点差异统计"/>
            </div>
            <div style="overflow: hidden;grid-column: 5 / span 1;grid-row: 2 / span 1;">
              <FH1 title="B1080D 油漆计划外领用与盘点差异统计"/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 1;grid-row: 3 / span 1;">
              <FH1 title="B973A 纤维布计划外领用与盘点差异统计"/>
            </div>
            <div style="overflow: hidden;grid-column: 2 / span 1;grid-row: 3 / span 1;">
              <FH1 title="B973A 芯材计划外领用与盘点差异统计"/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 1;grid-row: 3 / span 1;">
              <FH1 title="B973A 粘结剂计划外领用与盘点差异统计"/>
            </div>
            <div style="overflow: hidden;grid-column: 4 / span 1;grid-row: 3 / span 1;">
              <FH1 title="B973A 树脂计划外领用与盘点差异统计"/>
            </div>
            <div style="overflow: hidden;grid-column: 5 / span 1;grid-row: 3 / span 1;">
              <FH1 title="B973A 油漆计划外领用与盘点差异统计"/>
            </div>
            <div style="overflow: hidden;grid-column: 1 / span 1;grid-row: 4 / span 1;">
              <FH1 title="B950A 纤维布计划外领用与盘点差异统计"/>
            </div>
            <div style="overflow: hidden;grid-column: 2 / span 1;grid-row: 4 / span 1;">
              <FH1 title="B950A 芯材计划外领用与盘点差异统计"/>
            </div>
            <div style="overflow: hidden;grid-column: 3 / span 1;grid-row: 4 / span 1;">
              <FH1 title="B950A 粘结剂计划外领用与盘点差异统计"/>
            </div>
            <div style="overflow: hidden;grid-column: 4 / span 1;grid-row: 4 / span 1;">
              <FH1 title="B950A 树脂计划外领用与盘点差异统计"/>
            </div>
            <div style="overflow: hidden;grid-column: 5 / span 1;grid-row: 4 / span 1;">
              <FH1 title="B950A 油漆计划外领用与盘点差异统计"/>
            </div>
          </div>
        </div>

      </dv-border-box-11>

    </dv-full-screen-container>
  </div>
</template>

<script>
import FH1 from '@/views/pages/FH/components/FH1.vue'

export default {
  name: 'FH',
  components: {
    FH1
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>

.main-container {
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
}

</style>
