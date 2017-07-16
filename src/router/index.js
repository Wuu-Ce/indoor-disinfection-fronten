import Vue from 'vue'
import Router from 'vue-router'

import uiHello from '@/components/Hello'
import uiButtons from '@/components/ui/Buttons'
import uiBootstrap from '@/components/ui/Bootstrap'
import uiIcons from '@/components/ui/Icons'
import uiGrid from '@/components/ui/Grid'
import uiWidgets from '@/components/ui/Widgets'
import uiPortlet from '@/components/ui/Portlet'
import uiTimeline from '@/components/ui/Timeline'
import tableStatic from '@/components/table/Static'
import tableFootable from '@/components/table/Footable'

Vue.use(Router)

const template = {
  template: "<router-view></router-view>"
}

export default new Router({
  routes: [{
    path: '/',
    component: uiHello
  }, {
    path: '/ui',
    name: 'ui',
    component: template,
    children: [{
      path: 'buttons',
      component: uiButtons
    }, {
      path: 'bootstrap',
      component: uiBootstrap
    }, {
      path: 'icons',
      component: uiIcons
    }, {
      path: 'grid',
      component: uiGrid
    }, {
      path: 'widgets',
      component: uiWidgets
    }, {
      path: 'portlet',
      component: uiPortlet
    }, {
      path: 'timeline',
      component: uiTimeline
    }]
  }, {
    path: '/table',
    name: 'table',
    component: template,
    children: [{
      path: 'static',
      component: tableStatic
    },{
      path: 'footable',
      component: tableFootable
    }]
  }]
})
