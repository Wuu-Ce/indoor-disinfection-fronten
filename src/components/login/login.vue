6<template>
  <div class="container container">
    <div class="inner">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.container {
  position: relative;
  max-width: 100%;
  height: 100%;
  width: 100%;
  min-height: 400px;
  background: url(../../assets/app/img/img_logBG.png) center  no-repeat;
  background-size: cover;
}
.inner {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5) no-repeat center center;
  background-size: cover;
}
body{
  height: 125vh;
}
</style>
