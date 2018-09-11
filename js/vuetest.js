Vue.component('like',{
	template:'<button :class="{liked: liked}" @click="toggle_like">zan {{like_count}}</button>',
	data:function(){
		return{
			like_count:0,
			licked:false,
		}
	},
	methods:{
		toggle_like:function(){
			if(!this.liked)
			this.like_count++;
		else
			this.like_count--;
		this.liked=!this.liked;

		}
	}
});

new Vue({
	el:'#app1'
})