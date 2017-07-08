<template>
  <div class="app">
    <v-header></v-header>
    <v-aside></v-aside>

    <!-- 路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/block/Header.vue'
import aside from './components/block/Aside.vue'

export default {
  name: 'app',
  components: {
    'v-header': header,
    'v-aside': aside
  }
}
</script>

<style>
.container{margin-top:100px;}
</style>
