<template>
<li :class="{active:isShow}">
        <a class="auto" @click="toggle">
            <span class="pull-right text-muted">
                      <i class="fa fa-fw fa-angle-right text"></i>
                      <i class="fa fa-fw fa-angle-down text-active"></i>
                    </span>
            <i :class="navitem.icon"></i>
            <span>{{navitem.group}}</span>
        </a>
        <ul class="nav nav-sub dk">
            <li class="nav-sub-header">
                <a>
                    <span>{{navitem.group}}</span>
                </a>
            </li>
            <router-link :to="item.to" tag="li" active-class="active" v-for="item in navitem.data" :key="item.to"><a>{{item.name}}</a></router-link>
        </ul> 
</li>
</template>
<script>
export default {
    name: 'nav-item',
    data() {
        return {
        	isShow:false
        }
    },
    props: ['navitem'],
    methods:{
    	toggle:function(){
    		this.isShow=!this.isShow
    	}
    }
}
</script>
