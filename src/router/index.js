import Vue from 'vue'
import Router from 'vue-router'

import device from "../components/table/device";
import disinfect from "../components/table/disinfect";
import about from "../components/table/about";
import environment from "../components/table/environment";
import setting from "../components/table/setting";

import home from '@/components/Home'
import login from "@/components/login/login"


const sign = () => import('../components/login/sign')
const create = () => import('../components/login/register')

Vue.use(Router)

const template = {
  template: "<router-view></router-view>"
}

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: disinfect
    },
    {
      path: '/home',
      name: "home",
      component: home,
      children: [
        {
        path: 'table',
        name: 'table',
        component: template,
        children: [
          {
            path: 'device',
            name: "device",
            component: device
          },
          {
            path: 'about',
            name: "about",
            component: about
          },
          {
            path: 'disinfect',
            name: "disinfect",
            component: disinfect
          },
          {
            path: 'environment',
            name: "environment",
            component: environment
          },
          {
            path: 'setting',
            name: "setting",
            component: setting
          }]
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      children: [
        {
          path: 'create',
          name: "create",
          component: create
        }, {
          path: 'sign',
          name: "sign",
          component: sign
        }]
    }
  ]
})

router.beforeEach((to, from, next) => {
  let role = sessionStorage.getItem("username");
  if ((to.path !== "/login/sign" && to.path!=="/login/create")&&role === null) {
    next('/login/sign');
  } else {
    next();
  }
});

export default router
