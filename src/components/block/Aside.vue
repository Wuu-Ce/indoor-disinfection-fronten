<template>
    <div class="app-aside hidden-xs bg-black">
        <div class="aside-wrap">
            <div class="navi-wrap">
                <!-- user -->
                <div class="clearfix hidden-xs text-center hide" id="aside-user">
                    <div class="dropdown wrapper" dropdown>
                        <a ui-sref="app.page.profile">
                            <span class="thumb-lg w-auto-folded avatar m-t-sm">
              <img src="../../assets/app/img/a0.jpg" class="img-full" alt="..."></span>
                        </a>
                        <a href class="dropdown-toggle hidden-folded" dropdown-toggle>
                            <span class="clear">
              <span class="block m-t-sm"> <strong class="font-bold text-lt">John.Smith</strong> <b class="caret"></b>
              </span>
                            <span class="text-muted text-xs block">Art Director</span>
                            </span>
                        </a>
                        <!-- dropdown -->
                        <ul class="dropdown-menu animated fadeInRight w hidden-folded">
                            <li class="wrapper b-b m-b-sm bg-info m-t-n-xs">
                                <span class="arrow top hidden-folded arrow-info"></span>
                                <div>
                                    <p>300mb of 500mb used</p>
                                </div>
                            </li>
                            <li>
                                <a href>Settings</a>
                            </li>
                            <li>
                                <a>Profile</a>
                            </li>
                            <li>
                                <a href>
                                    <span class="badge bg-danger pull-right">3</span> Notifications
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a>Logout</a>
                            </li>
                        </ul>
                        <!-- / dropdown -->
                    </div>
                    <div class="line dk hidden-folded"></div>
                </div>
                <!-- / user -->
                <!-- nav -->
                <v-nav></v-nav>
                <!-- nav -->
            </div>
        </div>
    </div>
</template>
<script>
import nav from './Nav.vue'
export default {
    name: 'aside',
    components: {
        'v-nav': nav
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
