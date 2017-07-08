<template>
	<div class="news">
		<h2 class="text-center">{{data.title}}</h2>
		
		<div class="alert alert-warning" v-show="showLoading">
			<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
			<strong>Title!</strong> 
		</div>

		<table class="table table-bordered table-hover">
			<thead>
				<tr>
					<th colspan="2">{{data.title}}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in data.data">
					<td>{{item.name}}</td>
					<td>{{item.age}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
    name: 'news',
    data() {
        return {
            data:[]
        }
    },
    created() {
        // 组件创建完后获取数据，
        // 此时 data 已经被 observed 了
        this.fetchData();
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            this.error = this.post = null
            var url="static/testdata.json";
            this.$http.get(url).then(function(data){
                this.data=data.body;
            },function(response){
                console.info(response);
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
