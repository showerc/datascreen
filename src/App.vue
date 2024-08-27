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

.chart-title {
  text-align: right;
  position: absolute;
  right: 20px;
  font-size: 14px;
  top: 20px;
}

.box-bg-blue {
  background: rgba(6, 30, 93, .5)
}

.box-white {
  padding: 0 5px;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 10px;
  align-content: center;
  background: #fff;
  box-shadow: inset 0 0 10px 5px rgba(0, 123, 254, 0.5);

  .module-title {
    color: #000;
    text-align: left;
    font-size: 12px;
    line-height: 14px;
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

#dv-full-screen-container {
  background-image: url('~@/assets/img/bg.png');
  background-size: 100% 100%;
  box-shadow: 0 0 3px blue;
  display: flex;
  flex-direction: column;
}

#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  .main-container {
    display: grid;

    gap: 12px; /* 设置网格项之间的间距 */
    width: 100%; /* 设置容器的宽度 */
    height: auto;
    flex: 1; /* 设置容器的高度 */
    overflow: hidden;
  }
}

.module-title {
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  padding-top: 20px;
  line-height: 28px;
}

.module-title-sm {
  text-align: center;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  padding-top: 15px;
  line-height: 28px;
}

.module-sub-title {
  font-size: 16px;
  padding-top: 20px;

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
  }

  .text-box-title {
  }

  .text-box-desc {
    font-size: 18px;
    color: #999;
    line-height: 16px;
  }
}

.dv-scroll-board .rows .ceil {
  position: relative;
}

</style>
