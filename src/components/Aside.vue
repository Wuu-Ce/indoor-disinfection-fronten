<template>
  <div class="app-aside hidden-xs bg-black">
    <div class="aside-wrap">
      <!-- if you want to use a custom scroll when aside fixed, use the slimScroll
      <div class="navi-wrap" ui-jq="slimScroll" ui-options="{height:'100%', size:'8px'}">
      -->
      <div class="navi-wrap">
        <!-- nav -->
        <div class="navi">
          <nav-menu></nav-menu>
        </div>
        <!-- nav -->

        <!-- aside footer -->
        <div class="wrapper m-t">
          <div class="text-center-folded">
            <span class="pull-right pull-none-folded">60%</span>
            <span class="hidden-folded ng-scope" translate="aside.MILESTONE">里程碑</span>
          </div>
          <div class="progress-xxs m-t-sm dk progress ng-isolate-scope" value="60" type="info">
            <div class="progress-bar progress-bar-info" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" ng-style="{width: percent + '%'}" aria-valuetext="60%" ng-transclude="" style="width: 60%;"></div>
          </div>
          <div class="text-center-folded">
            <span class="pull-right pull-none-folded">35%</span>
            <span class="hidden-folded ng-scope" translate="aside.RELEASE">发布</span>
          </div>
          <div class="progress-xxs m-t-sm dk progress ng-isolate-scope" value="35" type="primary">
            <div class="progress-bar progress-bar-primary" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" ng-style="{width: percent + '%'}" aria-valuetext="35%" ng-transclude="" style="width: 35%;"></div>
          </div>
        </div>
        <!-- / aside footer --> </div>
    </div>
  </div>
</template>

<script>
import NavMenu from './Nav';

export default {
  name: 'aside',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  components: {
    NavMenu,
  },
};
</script>