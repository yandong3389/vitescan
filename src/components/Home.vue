<template>

<div class="container" style="padding: 20px 0px;">

<section class="hero">


<div class="level is-desktop" style="padding: 20px;background: white;margin-bottom: 0rem;">
  <div class="column level-item has-text-centered">
    <div><p class="heading">{{ $t("index.blockHeight") }}</p><p class="title">{{indexData.chainHeight}}</p></div>
  </div>
  <div class="column level-item has-text-centered">
    <div><p class="heading">{{ $t("index.tps") }}</p><p class="title">{{indexData.sysTps}}/{{indexData.sysTpsMax}}</p></div>
  </div>
  <div class="column level-item has-text-centered">
    <div><p class="heading">{{ $t("index.lastTxs") }}</p><p class="title">{{indexData.last24HTxAmount|fomatNumber3}}</p></div>
  </div>
  <div class="column level-item has-text-centered">
    <div><p class="heading">{{ $t("index.totalAccounts") }}</p><p class="title">{{indexData.addressTotal|fomatNumber3}}</p></div>
  </div>
  <div class="column level-item has-text-centered">
    <div><p class="heading">{{ $t("index.totalSupply") }}</p><p class="title">{{indexData.viteTokenTotal|fomatNumber3}}</p></div>
  </div>
</div>
<hr class="navbar-divider" style="margin: 0px;">
<div class="level is-desktop" style="padding: 20px;background: white;">
    <div class="column level-item has-text-centered">
    <div><p class="heading">{{ $t("index.totalSBP") }}</p><p class="title">{{indexData.SBPTotal}}</p></div>
  </div>
  <div class="column level-item has-text-centered">
    <div><p class="heading">{{ $t("index.totalNodes") }}</p><p class="title">{{indexData.fullNodeTotal}}</p></div>
  </div>
  <div class="column level-item has-text-centered">
    <div><p class="heading">{{ $t("index.totalTokens") }}</p><p class="title">{{indexData.TokenAmount}}</p></div>
  </div>
  <div class="column level-item has-text-centered">
    <div><p class="heading">{{ $t("index.price") }}</p><p class="title">{{indexData.VitePrice}}<span style="font-size: 14px;color: rgba(0,0,0,.45);"> USD</span></p></div>
  </div>
  <div class="column level-item has-text-centered">
    <div><p class="heading">{{ $t("index.rank") }}</p><p class="title">No.{{indexData.ViteRank}}</p></div>
  </div>
</div>
</section>

 <section class="hero" style="margin-top: 20px;">
<div class="columns is-desktop" style="margin-right: 0rem;">
  <div class="column" style="padding-right: 0rem;">
    <div class="bd-notification" style="background: white;padding-bottom: 0rem;">
    	<div class=" has-text-centered" style="border: none; border-radius: 0px;">
        <h5 class="m-0 lh-150 theme-color-font"><span>{{ $t("index.last14dayTxs") }}</span></h5>
        <!-- <h5 class="m-0 lh-150 theme-color-font"><span>14 days Transaction History</span></h5> -->
        </div>
    	  <div class="card-body pt-0" style="padding-left: 1rem; padding-right: 1rem;">
    	    <div style="min-width: 255px; height: 200px;">
    	      <x-chart :id="id" :option="option"></x-chart>
    	    </div>
    	</div>
	</div>
  </div>

  <div class="column" style="padding-right: 0rem;">
    <div class="bd-notification" style="background: white;padding-bottom: 0rem;">
    	<div class=" has-text-centered" style="border: none; border-radius: 0px;">
        <h5 class="m-0 lh-150 theme-color-font"><span>{{ $t("index.last14dayAcAccs") }}</span></h5>
        <!-- <h5 class="m-0 lh-150 theme-color-font"><span>14 days Active Account</span></h5> -->
      </div>
    	<div class="card-body pt-0" style="padding-left: 1rem; padding-right: 1rem;">
    	  <div id="container" style="min-width: 255px; height: 200px;">
    	      <x-chart :id="id2" :option="option2"></x-chart>
    	  </div>
    	</div>
    </div>
  </div>
</div>
</section>


<section class="hero" style="margin-top: 20px;">
<div class="columns is-desktop" style="margin-right: 0rem;">
  <div class="column" style="padding-right: 0rem;">
    <div class="" style="background: white;">
      <div class="card-div">
      <i class="fa fa-cubes fa_width_20 theme-color-font"></i>
      <h5 class="ml-10 lh-220 theme-color-font"><span>Latest Blocks</span></h5>
    <router-link class="button theme-color is-outlined" style="border-radius: 0.15rem;margin-left: auto !important;font-size: 14px;" to="/blocks">View All Blocks</router-link>
      </div>
    </div>
    <div class="list-group">
        <div class="mCSB_container" style="position: relative; top: 0px; left: 0px;">
        	<div v-for="(block, index) in blocksData" class="row">
				<div class="card" style="width: 100%;"><div class="card-content">
					<div class="media">
						<div class=""><i class="fa fa-cube fa_width_15 theme-color-font" style=""></i></div>
						<div class="media-content"><p><router-link :to="'/block/'+block.height">#{{block.height}}</router-link></p></div>
						<div class="media-content"><p><router-link :to="'/block/'+block.height">&nbsp;{{block.txCount}} txns</router-link></p></div>
						<div class="media-content" style="max-width: 180px;"><p>&nbsp;SBP: <a href="#">{{block.nodeName}}</a></p> </div>
						<div class="media-right"><p class="text-secondary">&nbsp;{{block.timestamp|fomatTime(block.diffTime)}}</p> </div>
					</div>
				</div></div>
			</div>
        </div>
    </div>
    
  </div>
  <div class="column" style="padding-right: 0rem;">
    <div class="" style="background: white;">
      <div class="card-div">
      <i class="fa fa-server fa_width_20 theme-color-font"></i>
      <h5 class="ml-10 lh-220 theme-color-font"><span>Transactions</span></h5>
    <router-link class="button theme-color is-outlined" style="border-radius: 0.15rem;margin-left: auto !important;font-size: 14px;" to="/txs">View All Transactions</router-link>
      </div>
    </div>
	<div class="list-group">
        <div class="mCSB_container" style="position: relative; top: 0px; left: 0px;">
        	<div v-for="(txObj, index) in txnsData" class="row">
				<div class="card" style="width: 100%;"><div class="card-content">
					<div class="media">
						<div class=""><i class="fa fa-bars fa_width_15 theme-color-font" style=""></i></div>
						<div class="media-content"><p class="is-4"><router-link :to="'/tx/'+txObj.hash">TX#{{txObj.hash|subAddrStr(3)}}</router-link></p></div>
						<div class="media-content"><p class="is-6">&nbsp;from:<router-link :to="'/address/'+txObj.fromAddress">{{txObj.fromAddress|subAddrStr(6)}}</router-link></p></div>
						<div class="media-content"><p class="is-4">&nbsp;to:<router-link :to="'/address/'+txObj.toAddress">{{txObj.toAddress|subAddrStr(6)}}</router-link></p> </div>
						<div class="media-right" style="min-width: 70px;">
              <p style="text-align: right;" class="is-6" :class="{'text-color-add':txObj.blockTypeFlag==0, 'text-color-sub':txObj.blockTypeFlag==1}">{{txObj.blockType|blockTypeStr}}&nbsp;{{txObj.amount|fomatNumber18(txObj.decimals,2)}} {{txObj.tokenSymbol}}</p>
            </div>
					</div>
				</div></div>
			</div>
        </div>
    </div>
    
  </div>
</div>
</section>
    
  </div>
  


</template>

<script>
  import axios from 'axios';
  import i18n from '../i18n/i18n';
  import logo from './../assets/logo-white.png';
  import blogo from './../assets/logo-black.png';
  import countTo from 'vue-count-to';
  // 导入chart组件
import XChart from './chart.vue'
// 导入chart组件模拟数据
import options from '../chart-options/options'
import HighCharts from 'highcharts'

  export default {

    data: function() {
    let option = options.bar
      return {
        'logo': logo,
        'blogo':blogo,
        last:'-',
        id:'test', 
        option: option,
        id2:'test2',
        option2: option,
        indexData:{},
        blocksData:[],
        startVal:0,
        txnsData:[],
        charInit1:false,
        charInit2:false,
        msgType:""
      }
    },
  components: {
    XChart,countTo
  },
    created() {
        this.loadData();
        this.timer = setInterval(this.loadData, 1000);
    },
    beforeDestroy () {
        clearInterval(this.timer)
    },
    methods: {

        loadData:function(){

            const self = this;
            this.url = "/vs-api/index/data";

            this.$axios({
                    method: 'get',
                    url:this.url
            }).then(function(response) {    
              
              let locale1 = localStorage.getItem('locale') || 'en';

              // 切换语言重加载图表
              if (self.msgType != "" && self.msgType != locale1) {
                self.charInit1 = false;
                self.charInit2 = false;
              }

                self.msgType = locale1;
                let mess = i18n.messages[locale1].index;
                let txs = mess.txs;
                let acaccs = mess.acaccs;

                self.blocksData = response.data.data.snapshotBlockInfos;
                self.txnsData = response.data.data.accountBlockInfos;
                self.indexData = response.data.data;

                self.option.xAxis.categories = response.data.data.cateArr;
                self.option.series[0].data = response.data.data.valArr;
                self.option.series[0].name = txs;
                // self.option = options.bar;
                if (!self.charInit1) {
                  HighCharts.chart(self.id,self.option);
                  self.charInit1 = true;
                }

                self.option2.xAxis.categories = response.data.data.cateArr2;
                self.option2.series[0].data = response.data.data.valArr2;
                self.option2.series[0].name = acaccs;
                // self.option2 = options.bar;
                if (!self.charInit2) {
                  HighCharts.chart(self.id2,self.option2);
                  self.charInit2 = true;
                }

            }).catch( function(response) {

            });

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
.fa_width_15 {
    font-size: 1.3rem;
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
    /** height: 456px; */
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


.mCSB_container {
    overflow: hidden;
    width: auto;
    height: auto;
}

.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -7.5px;
    margin-left: -7.5px;
}
.text-secondary {
    color: #77838f!important;
    font-size: 90%;
    font-weight: 400;
}
.card-content {
    background-color: transparent;
    padding: 0.8rem 1.5rem;
}
.pt-0, .py-0 {
    padding-top: 0!important;
}
.card-body {
    flex: 1 1 auto;
    padding: 1.25rem;
}
.text-color-sub{
      color: rgb(230, 126, 34)!important;
    font-size: 90%;
    font-weight: 400;
}
.text-color-add{
      color: rgb(92, 184, 92)!important;
    font-size: 90%;
    font-weight: 400;
}
</style>
