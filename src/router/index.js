import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Buttons from '@/components/ui/Buttons'

Vue.use(Router)

const template = {
    template: "<router-view></router-view>"
}

export default new Router({
    routes: [{
        path: '/',
        name: 'Hello',
        component: Hello
    }, {
        path: '/ui',
        name: 'ui',
        component: template,
        children: [{
            // 当 /user/:id/profile 匹配成功，
            // UserProfile 会被渲染在 User 的 <router-view> 中
            path: 'buttons',
            component: Buttons
        }]
    }]
})
