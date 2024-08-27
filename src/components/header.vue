<template>
  <div class="module-title" style="display: flex;align-items: center;padding:15px 0 15px 15px ">
    <img src="@/assets/img/1.svg" style="width: 10px;height: 20px;margin-right: 5px;">
    {{ title }}
    <img v-if="type ==='blue'"
         src="@/assets/img/alarm-blue.svg"
         style="width: 30px;height: 30px;position: absolute;top:15px;right:15px;">
    <img v-if="type ==='red'"
         src="@/assets/img/alarm-red.svg"
         style="width: 30px;height: 30px;position: absolute;top:15px;right:15px;">
  </div>
</template>
<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'blue'
    }
  }
}
</script>
<style scoped lang="less">

</style>
