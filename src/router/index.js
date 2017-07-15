import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Buttons from '@/components/ui/Buttons'
import Bootstrap from '@/components/ui/Bootstrap'
import Icons from '@/components/ui/Icons'

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
        children: [
            {
                path: 'buttons',
                component: Buttons
            },{
                path: 'bootstrap',
                component: Bootstrap
            },{
                path: 'icons',
                component: Icons
            }
        ]
    }]
})
