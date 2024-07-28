<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {}
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

.module-title {
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  padding-top: 20px;
  line-height: 28px;
}

.module-sub-title {
  font-size: 16px;
  color: #999;
  line-height: 20px;
}

.text-box {
  box-sizing: border-box;

  .border-box-content {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    flex-direction: column;
  }

  .text-box-title {
  }

  .text-box-desc {
    font-size: 16px;
    color: #999;
    line-height: 20px;
  }
}

</style>
