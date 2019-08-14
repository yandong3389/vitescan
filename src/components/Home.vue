<template>

<div class="container" style="padding: 20px 0px;">

<section class="hero">

<nav class="level" style="padding: 20px;background: white;">
  <div class="level-item has-text-centered">
    <div><p class="heading">线上节点</p><p class="title">3,456</p></div>
  </div>
  <div class="level-item has-text-centered">
    <div><p class="heading">区块高度</p><p class="title">3,456</p></div>
  </div>
  <div class="level-item has-text-centered">
    <div><p class="heading">当前/峰值TPS</p><p class="title">123</p></div>
  </div>
  <div class="level-item has-text-centered">
    <div><p class="heading">过去24小时交易量</p><p class="title">456K</p></div>
  </div>
  <div class="level-item has-text-centered">
    <div><p class="heading">总地址数</p><p class="title">789</p></div>
  </div>
  <div class="level-item has-text-centered">
    <div><p class="heading">价格</p><p class="title">789</p></div>
  </div>
</nav>
</section>

 <section class="hero" style="margin-top: 20px;">
<div class="columns is-desktop">
  <div class="column">
    <div class="bd-notification" style="background: white;">
    	<div class=" has-text-centered" style="border: none; border-radius: 0px;"><h5 class="m-0 lh-150"><a href="#" style="color: #00d1b2;"><span> 过去14天交易数</span></a></h5></div>
    	<div class="card-body pt-0" style="padding-left: 2rem; padding-right: 2rem;">
    	  <div style="min-width: 255px; height: 200px;">
    	      <x-chart :id="id" :option="option"></x-chart>
    	  </div>
    	</div>
    </div>
  </div>
  <div class="column">
    <div class="bd-notification" style="background: white;">
    	<div class=" has-text-centered" style="border: none; border-radius: 0px;"><h5 class="m-0 lh-150"><a href="#" style="color: #00d1b2;"><span> 过去14天地址数</span></a></h5></div>
    	<div class="card-body pt-0" style="padding-left: 2rem; padding-right: 2rem;">
    	  <div id="container" style="min-width: 255px; height: 200px;">
    	      <x-chart :id="id2" :option="option2"></x-chart>
    	  </div>
    	</div>
    </div>
  </div>
</div>
</section>

<section class="hero" style="margin-top: 20px;">
<div class="columns is-desktop">
  <div class="column">
    <div class="" style="background: white;">
      <div class="card-div">
      <i class="fa fa-cubes fa_width_20 color-grey-100"></i>
      <h5 class="ml-10 lh-220 color-grey-100"><span>区块</span></h5>
	  <a class="button is-primary is-outlined" style="border-radius: 0.15rem;margin-left: auto !important;">查看全部</a>
      </div>
    </div>
    <ul class="list-group">
    </ul>
    
  </div>
  <div class="column">
    <div class="" style="background: white;">
      <div class="card-div">
      <i class="fa fa-server fa_width_20 color-grey-100"></i>
      <h5 class="ml-10 lh-220 color-grey-100"><span>转账</span></h5>
	  <a class="button is-primary is-outlined" style="border-radius: 0.15rem;margin-left: auto !important;">查看全部</a>
      </div>
    </div>
    <ul class="list-group">
    </ul>
    
  </div>
</div>
</section>
    
  </div>
  


</template>

<script>
  import axios from 'axios';
  import logo from './../assets/logo-white.png';
  
  // 导入chart组件
import XChart from './chart.vue'
// 导入chart组件模拟数据
import options from '../chart-options/options'
  
  export default {
    data: function() {
    let option = options.bar
      return {
        'logo': logo,
        last:'-',
        id: 'test',
      option: option,
        id2: 'test2',
      option2: option
      }
    },
  components: {
    XChart
  },
    created() {
        // this.timer = setInterval(this.loadData, 1000)
    },
    beforeDestroy () {
        // clearInterval(this.timer)
    },
    methods: {

        loadData:function(){

            const self = this;
            this.url = "http://39.100.79.183:8888/index/blockData";

            this.$axios({
                    method: 'get',
                    url:this.url
            }).then(function(response) {
                console.log(response)
                self.last = response.data.data.result.current;
            }).catch( function(response) {
                console.log(response)
            });

        },
        findViteInfo: function() {
            this.$http.get('https://jsonplaceholder.typicode.com/posts', {
            title: this.userInput.Subject,
            body: this.userInput.Message,
            userId: 1
            }).then(function(data){
            this.showForm = false
            this.clearPost()
            })
        }
    }
  }
</script>

<style scoped>

.card-div{
    text-align: center !important;
    display: flex !important;
    margin-bottom: 0px;
    background-color: rgba(248, 245, 240, 0.25);
    padding: 0.75rem 1.25rem;
    border-bottom: 1px solid rgba(223, 215, 202, 0.75);
}
.fa, .fas {
    font-weight: 900 !important;
}
.fa_width_20 {
    font-size: 2rem;
    width: 30px !important;
}
.mr-3, .mx-3 {
    margin-right: 1rem !important;
}
.tron-light .home .color-grey-100 {
    color: rgb(51, 51, 51) !important;
}
.lh-220 {
    line-height: 2.2;
}
.ml-10 {
    margin-left: 10px;
}
h5 {
    font-size: 16px;
}
.list-group {
    display: flex;
    flex-direction: column;
    padding-left: 0px;
    margin-bottom: 0px;
    height: 594px;
    background: white;
}

.lh-150 {
    line-height: 1.5;
}
.m-0 {
    margin: 0px !important;
}
#test {
  width: 400px;
  height: 400px;
  margin: 40px auto;
}
</style>
