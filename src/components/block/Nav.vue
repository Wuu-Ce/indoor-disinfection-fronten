<template>

  <div class="app-aside hidden-xs" :class="settings.asideColor">
    <div class="aside-wrap">
      <div class="navi-wrap">
        <!-- list -->
        <nav class="navi">
          <ul class="nav">
            <router-link
              tag="li"
              :key="path.id"
              :to="path.path"
              active-class="active"
              class="btn table-item"
              v-for="path in routPath"
              @click="setCurTab(path.id)"
              :class="{active:showTabId=== path.id}"
            >
              <i class="fa inline pull-left" :class="path.icon"></i>
              <span class="pull-left routerLink">{{ path.name }}</span>
            </router-link>
          </ul>
        </nav>
        <!-- / list -->
      </div>
    </div>
  </div>
</template>
<script>
import navItem from './Nav-item.vue'
import { mapGetters, mapActions } from 'vuex'
import app from "../../App";
import device from "../table/device";
import tab from "../bootstrap/Tab"

export default {
  name: 'navT',
  data() {
    return {
      routPath: [
        {
          id: 0,
          name: "消毒",
          icon: 'fa-support',
          path: '/home/table/disinfect'
        },
        {
          id: 1,
          name: "设备",
          icon: 'fa-sun-o',
          path: '/home/table/device'
        },
        {
          id: 2,
          name: "环境",
          icon: 'fa-cube',
          path: '/home/table/environment'
        },
        {
          id: 3,
          name: "关于",
          icon: 'icon-paper-plane',
          path: '/home/table/about'
        }],
      showTabId: -1,
      err_msg: [
        "无法获取设备列表！"
      ]

    }
  },
  components: {
    'nav-item': navItem,
    "v-tab": tab
  },
  created() {
    this.setCurNav();
  },
  mounted() {
  },
  computed: {
    ...mapGetters(['settings'])
  },
  watch: { // 如果路由有变化，会再次执行该方法
    '$route': 'setCurNav'
  },
  methods: {
    setCurTab(id) {
      this.showTabId = id;
    },
    setCurNav() {
      //取自路由配置里的菜单分组name值
      this.curRoute = this.$route.matched[0].name;
      // console.log(this.curRoute)
      // console.log(this.$route)
    }
  }
}

</script>
<!-- Add "scoped " attribute to limit CSS to this component only -->
<style>
.table-item{
  height: 40px;
  padding-left: 20px;
  padding-top: 10px;
}
.btn.active  {
  background: rgba(205, 231, 230, 0.1);
  box-shadow: none;
  color: #56c4c8;
}
.btn:hover{
  color: #56c4c8;
  box-shadow: none;
}
.routerLink{
  margin-left: 30px;
}

</style>
