<template>

<div class="container" style="">

<header class="bd-header" style="margin-bottom: 0rem;">
  <div class="bd-header-titles" >
    <h1 class="title" style="margin-bottom: 0.5rem;margin-left: 0.5rem;">Address</h1>
    <!--<p class="is-4" style="margin-bottom: 0.5rem;margin-left: 0.5rem;">#8355250</p>-->
  </div>
</header>
<div class="tabs is-medium" style="background-color: #fff;margin-bottom: 0rem;">
  <ul>
    <li class="is-active"><span>Overview</span></li>
  </ul>
</div>

<div class="table-pdiv" style="margin-bottom: 1rem;">
<div class="container table-div" style="padding: 2rem;background: white;">

        <table class="table is-striped" style="width: 100%;">
        <tbody>
            <tr>
              <th width="200">Address：</th>
              <td><span v-if="accountInfo.addrType=='1'" ><i title="Contract" class="fa fa-file-contract theme-color-font"></i></span> {{accountInfo.address}}</td>
            </tr>
            <tr>
              <th style="">Transactions：</th>
              <td>{{accountInfo.totalNumber|fomatNumber3}} &nbsp;&nbsp;&nbsp;<a href="http://vitetxs.de/" target="_blank">Click to download transaction history</a></td>
              <!-- <td>39182（转入<i class="fa fa-arrow-down text-success"></i>25369 转出<i class="fa fa-arrow-up  text-danger"></i>13813 )</td> -->
            </tr>
            <tr>
              <th style="">Quota：</th>
              <td>{{pledgeQuota.utps}} UTPS</td>
            </tr>
            <tr>
              <th style="">VITE Balance：</th>
              <td>{{accountInfo.viteBalance|fomatNumber18(18,18)|fomatNumber3}} VITE</td>
            </tr>
            <tr>
              <th style="">Vote Node：</th>
              <td>
                <template v-if="accountInfo.voteNodeName != '' && accountInfo.voteNodeName != null">
                   <router-link :to="'/sbp/'+voteNodeName">{{accountInfo.voteNodeName}}</router-link>
                </template>
              </td>
            </tr>
            <!-- 节点有效状态{{accountInfo.voteNodeStatus}} -->
            <tr>
              <th>Total Votes:	</th>
              <td>
                <template v-if="accountInfo.voteNodeName != '' && accountInfo.voteNodeName != null">
                   {{accountInfo.viteBalance|fomatNumber18(18,18)|fomatNumber3}} VITE
                </template>
              </td>
            </tr>

            <tr>
              <th>Staking SBP:	</th>
              <td>{{accountInfo.sbpStaking == null ? 0 : accountInfo.sbpStaking|fomatNumber3}} VITE</td>
            </tr>
            <tr>
              <th>Staking Quota:	</th>
              <td>{{accountInfo.quotaStaking|fomatNumber3}} VITE</td>
            </tr>
            <tr>
              <th>Staking Mining:	</th>
              <td>{{accountInfo.miningStaking|fomatNumber3}} VITE</td>
            </tr>
            <tr>
              <th>Staking VIP / SVIP:	</th>
              <td>{{accountInfo.vipStaking|fomatNumber3}} VITE / {{accountInfo.svipStaking|fomatNumber3}} VITE</td>
            </tr>
        </tbody>
        </table>
      </div>
      </div>
<div class="tabs is-medium" style="background-color: #fff;margin-bottom: 0rem;">
  <ul>
    <li :class="{'is-active':tabFlag=='balance'}"><a href="javascript:;" @click="changeTab('balance')">Token Balance</a></li>
    <li :class="{'is-active':tabFlag=='txns'}"><a href="javascript:;" @click="changeTab('txns')">Transactions</a></li>
    <li :class="{'is-active':tabFlag=='untxns'}"><a href="javascript:;" @click="changeTab('untxns')">Unreceived Transactions</a></li>
    <li :class="{'is-active':tabFlag=='contract'}"><a href="javascript:;" @click="changeTab('contract')">Contract</a></li>
  </ul>
</div>

<div class="table-pdiv" style="margin-bottom: 1rem;">
    <div class="container table-div" style="padding: 2rem;background: white;" >

      <div v-if="tabFlag=='balance'">
        <table class="table is-striped" style="width: 100%;border: solid 1px #dbdbdb;">
        <thead>
            <tr>
            <th>Token</th>
            <th>TokenId</th>
            <th>decimals</th>
            <th>Wallet Balance</th>
            <th>Dex Available</th>
            <th>Dex Locked</th>
            <th>Balance Total</th>
            <th>Price</th>
            <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in accountBalanceInfos">
            <td><router-link :to="'/token/'+data.tokenId">{{data.tokenSymbol}}</router-link></td>
            <td>{{data.tokenId}}</td>
            <td>{{data.decimals}}</td>
            <td>{{data.balance|fomatNumber18(data.decimals,data.decimals)|fomatNumber3}}</td>
            <td>{{data.dexAvailableBalance|fomatNumber18(data.decimals,data.decimals)|fomatNumber3}}</td>
            <td>{{data.dexLockedBalance|fomatNumber18(data.decimals,data.decimals)|fomatNumber3}}</td>
            <td>{{data.totalBalance|fomatNumber18(data.decimals,data.decimals)|fomatNumber3}}</td>
            <td>-</td>
            <td>-</td>
            </tr>
        </tbody>
        </table>
        </div>


      <div v-if="tabFlag=='txns' || tabFlag=='untxns'">
        <table class="table is-striped" style="width: 100%;border: solid 1px #dbdbdb;">
        <thead>
            <tr>
            <th>Hash</th>
            <th>Token</th>
            <th>Quantity</th>
            <th>From</th>
            <th>To</th>
            <th>Status</th>
            <!-- <th>Snapshotted By</th> -->
            <th>Age</th>
            <th>Confirmations</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in accountBlockInfoList">
            <td><router-link :to="'/tx/'+data.hash">{{data.hash|subAddrStr(5)}}</router-link></td>
            <td>{{data.tokenSymbol}}</td>
            <td>{{data.amount|fomatNumber18(data.decimals,8)}}</td>
            <td><router-link :to="'/address/' + data.fromAddress">{{data.fromAddress|subAddrStr(5)}}</router-link></td>
            <td><router-link :to="'/address/' + data.toAddress">{{data.toAddress|subAddrStr(5)}}</router-link></td>
            <td>{{data.blockType|fomatBlockType}}</td>
            <!-- <td><a href="#">{{data.snapshotHash|subAddrStr(5)}}</a></td> -->
            <td>{{data.timestamp|fomatTime(data.diffTime)}}</td>
            <td>{{data.confirmations}}</td>
            </tr>
        </tbody>
        </table>
        </div>

      </div>
  
	<paginate
	    :page-count="pageCount"
	    :page-range="3"
	    :margin-pages="2"
	    :click-handler="clickCallback"
	    :prev-text="'Prev'"
	    :next-text="'Next'"
	    :container-class="'paginationV'"
	    :page-class="'page-itemV'"
	    :page-link-class="'page-itemVA'">

      <li ><a tabindex="0">Next</a></li>
	  </paginate>

      </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import NProgress from 'nprogress'
  export default {
    data: function() {
      return {
        blocksData:[],
        txnsData:[],
        accountBalanceInfos:[],
        accountBlockInfoList:[],
        pageCount:1,
        total:0,
        tabFlag:"balance",
        accountInfo:{},
        pledgeQuota:{},
        snapBlockInfos:[],
        accountVoterResults:[],
        voteNodeAddress:''
      }
    },
    created() {
        this.loadData(1);
    },
    beforeDestroy () {
    },
    methods: {
      changeTab:function(tabFlag){
           this.tabFlag = tabFlag;
           this.pageCount = 1;
           this.loadData(1);
      },
	    clickCallback:function(pageNum){
	      this.loadData(pageNum);
	    },
        loadData:function(pageNum){
            NProgress.start();
            const self = this;
            const addr = self.$route.params.address;

            this.url = "/vs-api/address?address="+ addr +"&tabFlag="+ self.tabFlag +"&pageNo=" + pageNum;

            this.$axios({
                    method: 'get',
                    url:this.url
            }).then(function(response) {
                NProgress.done();
                self.accountInfo = response.data.data.accountInfo;
                self.pledgeQuota = response.data.data.pledgeQuota;
                self.accountBalanceInfos = response.data.data.accountBalanceInfos;

                self.total = response.data.data.total;
                self.pageCount = response.data.data.pageCount;
                self.accountBlockInfoList = response.data.data.accountBlockInfoList;

                self.voteNodeAddress = response.data.data.voteNodeAddress;

                self.snapBlockInfos = response.data.data.snapBlockInfos;
                self.accountVoterResults = response.data.data.accountVoterResults;

            }).catch( function(response) {
                NProgress.done();
            });

        }
    },
    watch :{
  　'$route': function (to, from) {
       //执行数据更新查询
       this.tabFlag="balance";
　　   this.loadData(1);
　　}
}
  }
</script>

<style scoped lang="css">
@media screen and (max-width: 1023px){
.table-div {
    width: 1000px;
}
.table-pdiv {
    overflow-x: auto;
    overflow-y:hidden;
}

}
.success-span{
  background: rgba(105,194,101,.2);
  color: #2eac28;
  border-radius: 2px;
  font-size: 12px;
  padding: 3px 14px;
}

.tabs span, .tabs a{
      align-items: center;
    border-bottom-color: #dbdbdb;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    color: #4a4a4a;
    display: flex;
    justify-content: center;
    margin-bottom: -1px;
    padding: .5em 1em;
    vertical-align: top;

}
.tabs .is-active span, .tabs .is-active a{
    border-bottom-color: #3273dc;
    color: #3273dc;
}
.text-danger {
    color: #d9534f!important;
}
.text-success {
    color: #93c54b!important;
}
</style>
