<template>
  <div class="app" :class="{'app-aside-folded':!sidebar,'app-header-fixed':settings.headerFixed,'app-aside-fixed':settings.asideFixed,'app-aside-folded':settings.asideFolded,'app-aside-dock':settings.asideDock,container:settings.container}">
    <!-- navbar -->
    <v-header></v-header>
    <!-- / navbar -->

    <!-- nav -->
    <v-nav></v-nav>
    <!-- / nav -->

    <!-- nav -->
    <v-settings></v-settings>
    <!-- / nav -->

    <!-- content -->
    <div class="app-content">
      <div class="app-content-body">
        <transition mode="out-in" enter-active-class="animated fadeInUp" leave-active-class="animated fadeInDown">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <!-- /content -->
  </div>
</template>
<script>
import header from './block/Header'
import nav from './block/Nav'
import settings from './block/Setings'
import { mapGetters} from 'vuex'
import app from "../App";

export default {
  name: 'home',
  components: {
    'v-header': header,
    'v-nav': nav,
    'v-settings': settings,
  },
  created() {
    this.getDevices();
  },
  methods: {
    getDevices() {
      let that = this
      let request = {
        accessToken: sessionStorage.getItem("accessToken")
      }
      $.ajax({
        type:"POST",
        xhrFields: {
          withCredentials: true
        },

        crossDomain: true,
        data: request,
        dataType: 'json',
        scriptCharset: "utf-8",
        url: app.http_root+"/user/getDeviceList",
        success(Data){
          switch (Data.code){
            case 0:{
              sessionStorage.setItem("device_list",JSON.stringify(Data.device_list));
            } break;

            case 1:{
              app.comment.message("IP地址改变请重新登录", "danger");
              sessionStorage.removeItem("username");
              sessionStorage.removeItem("accessToken")
              that.$router.push("/longin/sign");
            } break;

            case 2:{
              app.comment.message("凭证失效请重新登录", "danger");
              sessionStorage.removeItem("username");
              sessionStorage.removeItem("accessToken")
              that.$router.push("/longin/sign");
            }
          }
        },
        error: function (){
          app.comment.message(that.err_msg[0],"danger");
        }
      });
    },
    copy(obj1,obj2){
      obj2 = obj2||{}; //最初的时候给它一个初始值=它自己或者是一个json
      for(let name in obj1){
        if(typeof obj1[name] === "object"){ //先判断一下obj[name]是不是一个对象
          obj2[name]= (obj1[name].constructor===Array)?[]:{}; //我们让要复制的对象的name项=数组或者是json
          this.copy(obj1[name],obj2[name]); //然后来无限调用函数自己 递归思想
        }else{
          obj2[name]=obj1[name];  //如果不是对象，直接等于即可，不会发生引用。
        }
      }
      return obj2; //然后在把复制好的对象给return出去
    },
  },
  computed: mapGetters([
    'sidebar',
    'settings'
  ])
}

</script>
<style>


</style>
