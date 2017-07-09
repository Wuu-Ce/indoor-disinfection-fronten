<template>
    <!-- list -->
    <div class="navi">
        <ul class="nav">
            <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
                <span>组件</span>
            </li>
            <li v-toggleClass="{class:'active'}">
                <a class="auto">
                    <span class="pull-right text-muted">
                      <i class="fa fa-fw fa-angle-right text"></i>
                      <i class="fa fa-fw fa-angle-down text-active"></i>
                    </span>
                    <i class="glyphicon glyphicon-briefcase icon"></i>
                    <span>UI 套件</span>
                </a>
                <ul class="nav nav-sub dk">
                    <li class="nav-sub-header">
                        <a>
                            <span>UI 套件</span>
                        </a>
                    </li>
                    <router-link to="/ui/buttons" tag="li" active-class="active"><a>Buttons</a></router-link>

                    <li ui-sref-active="active">
                        <a ui-sref="app.ui.icons">
                            <b class="badge bg-info pull-right">3</b>
                            <span>Icons</span>
                        </a>
                    </li>
                    <li ui-sref-active="active">
                        <a ui-sref="app.ui.grid">
                            <span>Grid</span>
                        </a>
                    </li>
                    <li ui-sref-active="active">
                        <a ui-sref="app.ui.widgets">
                            <b class="badge bg-success pull-right">13</b>
                            <span>Widgets</span>
                        </a>
                    </li>
                    <li ui-sref-active="active">
                        <a ui-sref="app.ui.bootstrap">
                            <b class="badge bg-primary pull-right">16</b>
                            <span>Bootstrap</span>
                        </a>
                    </li>
                    <li ui-sref-active="active">
                        <a ui-sref="app.ui.sortable">
                            <span>Sortable</span>
                        </a>
                    </li>
                    <li ui-sref-active="active">
                        <a ui-sref="app.ui.portlet">
                            <span>Portlet</span>
                        </a>
                    </li>
                    <li ui-sref-active="active">
                        <a ui-sref="app.ui.timeline">
                            <span>Timeline</span>
                        </a>
                    </li>
                    <li ui-sref-active="active">
                        <a ui-sref="app.ui.tree">
                            <span>Tree</span>
                        </a>
                    </li>
                    <li ui-sref-active="active">
                        <a ui-sref="app.ui.toaster">
                            <span>Toaster</span>
                        </a>
                    </li>
                    <li ui-sref-active="active">
                        <a ui-sref="app.ui.jvectormap">
                            <span>Vector Map</span>
                        </a>
                    </li>
                    <li ui-sref-active="active">
                        <a ui-sref="app.ui.googlemap">
                            <span>Google Map</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li v-toggleClass="{class:'active'}">
                <a class="auto">
                    <span class="pull-right text-muted">
        <i class="fa fa-fw fa-angle-right text"></i>
        <i class="fa fa-fw fa-angle-down text-active"></i>
      </span>
                    <b class="label bg-primary pull-right">2</b>
                    <i class="glyphicon glyphicon-list"></i>
                    <span>表格</span>
                </a>
                <ul class="nav nav-sub dk">
                    <li class="nav-sub-header">
                        <a>
                            <span>表格</span>
                        </a>
                    </li>
                    <li ui-sref-active="active">
                        <a ui-sref="app.table.static">
                            <span>Table static</span>
                        </a>
                    </li>
                    <li ui-sref-active="active">
                        <a ui-sref="app.table.datatable">
                            <span>Datatable</span>
                        </a>
                    </li>
                    <li ui-sref-active="active">
                        <a ui-sref="app.table.footable">
                            <span>Footable</span>
                        </a>
                    </li>
                    <li ui-sref-active="active">
                        <a ui-sref="app.table.grid">
                            <span>ngGrid</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li v-toggleClass="{class:'active'}">
                <a class="auto">
                    <span class="pull-right text-muted">
        <i class="fa fa-fw fa-angle-right text"></i>
        <i class="fa fa-fw fa-angle-down text-active"></i>
      </span>
                    <i class="glyphicon glyphicon-edit"></i>
                    <span>表单</span>
                </a>
                <ul class="nav nav-sub dk ">
                    <li class="nav-sub-header ">
                        <a>
                            <span>表单</span>
                        </a>
                    </li>
                    <li ui-sref-active="active ">
                        <a ui-sref="app.form.elements ">
                            <span>Form elements</span>
                        </a>
                    </li>
                    <li ui-sref-active="active ">
                        <a ui-sref="app.form.validation ">
                            <span>Form validation</span>
                        </a>
                    </li>
                    <li ui-sref-active="active ">
                        <a ui-sref="app.form.wizard ">
                            <span>Form wizard</span>
                        </a>
                    </li>
                    <li ui-sref-active="active ">
                        <a ui-sref="app.form.fileupload ">
                            <span>File upload</span>
                        </a>
                    </li>
                    <li ui-sref-active="active ">
                        <a ui-sref="app.form.imagecrop ">
                            <span>Image crop</span>
                        </a>
                    </li>
                    <li ui-sref-active="active ">
                        <a ui-sref="app.form.select ">
                            <span>Select</span>
                        </a>
                    </li>
                    <li ui-sref-active="active ">
                        <a ui-sref="app.form.slider ">
                            <span>Slider</span>
                        </a>
                    </li>
                    <li ui-sref-active="active ">
                        <a ui-sref="app.form.editor ">
                            <span>Editor</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li ui-sref-active="active ">
                <a ui-sref="app.chart ">
                    <i class="glyphicon glyphicon-signal "></i>
                    <span>图表</span>
                </a>
            </li>
            <li v-toggleClass="{class: 'active'} ">
                <a class="auto ">
                    <span class="pull-right text-muted ">
        <i class="fa fa-fw fa-angle-right text "></i>
        <i class="fa fa-fw fa-angle-down text-active "></i>
      </span>
                    <i class="glyphicon glyphicon-file icon "></i>
                    <span>页面</span>
                </a>
                <ul class="nav nav-sub dk ">
                    <li class="nav-sub-header ">
                        <a>
                            <span>页面</span>
                        </a>
                    </li>
                    <li ui-sref-active="active ">
                        <a ui-sref="app.page.profile ">
                            <span>Profile</span>
                        </a>
                    </li>
                    <li ui-sref-active="active ">
                        <a ui-sref="app.page.post ">
                            <span>Post</span>
                        </a>
                    </li>
                    <li ui-sref-active="active ">
                        <a ui-sref="app.page.search ">
                            <span>Search</span>
                        </a>
                    </li>
                    <li ui-sref-active="active ">
                        <a ui-sref="app.page.invoice ">
                            <span>Invoice</span>
                        </a>
                    </li>
                    <li ui-sref-active="active ">
                        <a ui-sref="app.page.price ">
                            <span>Price</span>
                        </a>
                    </li>
                    <li>
                        <a ui-sref="lockme ">
                            <span>Lock screen</span>
                        </a>
                    </li>
                    <li>
                        <a ui-sref="access.signin ">
                            <span>Signin</span>
                        </a>
                    </li>
                    <li>
                        <a ui-sref="access.signup ">
                            <span>Signup</span>
                        </a>
                    </li>
                    <li>
                        <a ui-sref="access.forgotpwd ">
                            <span>Forgot password</span>
                        </a>
                    </li>
                    <li>
                        <a ui-sref="access.404 ">
                            <span>404</span>
                        </a>
                    </li>
                </ul>
            </li>
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


export default {
    name: 'nav',
    data() {
        return {
            menu:menu,
            curRoute: 'index'
        }
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
