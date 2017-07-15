<template>
    <div class="app">
        <!-- navbar -->
        <v-header></v-header>
        <!-- / navbar -->
        <!-- menu -->
        <v-aside></v-aside>
        <!-- / menu -->
        <!-- content -->
        <div class="app-content">
            <div class="app-content-body">
                <transition mode="out-in" enter-active-class="animated fadeInUp" leave-active-class="animated fadeInDown" >
                    <router-view></router-view>
                </transition>
            </div>
        </div>
        <!-- /content -->
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
</style>
