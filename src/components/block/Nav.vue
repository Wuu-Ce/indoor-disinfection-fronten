<template>
    <!-- list -->
    <div class="navi">
        <ul class="nav" v-for="item in menu">
            <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
                <span>{{item.group}}</span>
            </li>
            <nav-item :navitem="item" v-for="item in item.data" :key="item.icon">
                
            </nav-item>
        </ul>
    </div>
    <!-- / list -->
</template>
<script>
const menu = [{
    group: "组件",
    data: [{
        group: "UI 套件",
        icon: "glyphicon glyphicon-briefcase",
        data: [{
            name: "按钮",
            to: "/ui/buttons"
        }, {
            name: "图标",
            to: "/ui/icons"
        }, {
            name: "网格",
            to: "/ui/grid"
        }, {
            name: "小部件",
            to: "/ui/widgets"
        }, {
            name: "Bootstrap",
            to: "/ui/bootstrap"
        }, {
            name: "Portlet",
            to: "/ui/portlet"
        }, {
            name: "时间线",
            to: "/ui/timeline"
        },]
    },{
        group: "表格",
        icon: "glyphicon glyphicon-list",
        data: [{
            name: "静态表格",
            to: "/table/static"
        }, {
            name: "Foottable",
            to: "/ui/foottable"
        }]
    },{
        group: "表单",
        icon: "glyphicon glyphicon-edit",
        data: [{
            name: "表单元素",
            to: "/form/elements"
        }]
    },{
        group: "图表",
        icon: "glyphicon glyphicon-signal",
        data: [{
            name: "百度Echarts",
            to: "/echart/baidu"
        }]
    }]
}]

import navItem from './Nav-item.vue'

export default {
    name: 'nav',
    data() {
        return {
            menu:menu,
            curRoute: 'index'
        }
    },
    components:{
      'nav-item':navItem
    },
    created() {
        this.setCurNav();
    },
    watch: { // 如果路由有变化，会再次执行该方法
        '$route': 'setCurNav'
    },
    methods: {
        setCurNav() {
            this.curRoute = this.$route.name;
            console.log(this.$route)
        }
    }
}
</script>
<!-- Add "scoped " attribute to limit CSS to this component only -->
<style>
</style>
