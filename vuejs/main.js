var app = new Vue({
	el: "#app",
	data: {
		city: "",
	},
	methods: {
		searchWeather: function(){
			// console.log("天气查询");
			// console.log(this.city);
			// 调用接口
			// http://wthrcdn.etouch.cn/warther_mini
			// 这个接口好像有问题
			axios.get('http://wthrcdn.etouch.cn/warther_mini?city='+this.city)
			.then(function(response){
				console.log(response);
			})
			.catch(function(err){})
		}
	}
})

