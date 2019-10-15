<template>

<div class="container" style="">

<header class="bd-header" style="margin-bottom: 0rem;">
  <div class="bd-header-titles" >
    <h1 class="title" style="margin-bottom: 0.5rem;margin-left: 0.5rem;">Token Info</h1>
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
              <th width="200">代币名称：</th>
              <td>{{tokenInfo.tokenName}}</td>
            </tr>
            <tr>
              <th>代币简称:	</th>
              <td>{{tokenInfo.tokenSymbol}}</td>
            </tr>
            <tr>
              <th>持币用户数：</th>
              <td>{{holderCount}}</td>
            </tr>
            <tr>
              <th>总供应量：</th>
              <td>{{tokenInfo.tokenSupply|fomatNumber18(tokenInfo.decimals,0)|fomatNumber3}}</td>
            </tr>
            <tr>
              <th>铸币地址：</th>
              <td><router-link :to="'/address/'+tokenInfo.owner">{{tokenInfo.owner}}</router-link></td>
            </tr>
            <tr>
              <th>是否可增发：</th>
              <td>{{tokenInfo.isReissuable == '0'?'否':'是'}}</td>
            </tr>
            <tr>
              <th>是否仅支持铸币者销毁：</th>
              <td>{{tokenInfo.ownBurnOnly == '0'?'否':'是'}}</td>
            </tr>
            <tr>
              <th>小数位数：</th>
              <td>{{tokenInfo.decimals}}</td>
            </tr>
        </tbody>
        </table>
      </div>
      </div>
<div class="tabs is-medium" style="background-color: #fff;margin-bottom: 0rem;">
  <ul>
    <li :class="{'is-active':tabFlag=='holders'}"><a href="javascript:;" @click="changeTab('holders')">Holders</a></li>
    <li :class="{'is-active':tabFlag=='txns'}"><a href="javascript:;" @click="changeTab('txns')">Transactions</a></li>
  </ul>
</div>

<div class="table-pdiv" style="margin-bottom: 1rem;">
    <div class="container table-div" style="padding: 2rem;background: white;" >

      <div v-if="tabFlag=='holders'">
        <table class="table is-striped table-th" style="width: 100%;border: solid 1px #dbdbdb;">
                <thead>
            <tr>
            <th>Rank</th>
            <th>Address</th>
            <th>Name Tag</th>
            <th>Wallet Balance</th>

            <th>ViteX DEX <br />Available / Locked</th>
            <th><i class="fa fa-angle-down text-secondary"></i> Balance Total</th>
            <th>Percentage</th>
            <th>Txn Count</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in accountsResults">
              <td>{{data.rank }}</td>
              <td>
                <span v-if="data.addrType=='1'" >
                    <i title="Contract" class="fa fa-file-contract theme-color-font"></i>
                </span>
                <router-link :to="'/address/'+data.address">{{data.address|subAddrStr(12)}}</router-link>
              </td>
              <td>{{data.nameTag}}</td>
              <td>{{data.balance|fomatNumber18(tokenInfo.decimals,4)|fomatNumber3}}</td>

              <td>{{data.dexAvailableBalance|fomatNumber18(tokenInfo.decimals,4)|fomatNumber3}} / {{data.dexLockedBalance|fomatNumber18(tokenInfo.decimals,4)|fomatNumber3}}</td>
              <td>{{data.totalBalance|fomatNumber18(tokenInfo.decimals,4)|fomatNumber3}}</td>
              <td>{{data.percentage|fomatNumber18(0,4)}}%</td>
              <td>{{data.txnCount|fomatNumber3 }}</td>
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
        accountsResults:[],
        accountBlockInfoList:[],
        pageCount:1,
        total:0,
        tabFlag:"holders",
        tokenInfo:{},
        holderCount:''
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
           if ("holders" == tabFlag) {
             this.loadData(1);
           }
      },
	    clickCallback:function(pageNum){
	      this.loadData(pageNum);
	    },
        loadData:function(pageNum){
            NProgress.start();
            const self = this;
            const tokenId = self.$route.params.tokenId;

            this.url = "/vs-api/token?tokenId="+ tokenId +"&tabFlag="+ self.tabFlag +"&pageNo=" + pageNum;

            this.$axios({
                    method: 'get',
                    url:this.url
            }).then(function(response) {
                NProgress.done();
                self.tokenInfo = response.data.data.tokenInfo;
                self.holderCount = response.data.data.holderCount;
                self.accountsResults = response.data.data.accountsResults;

                self.total = response.data.data.total;
                self.pageCount = response.data.data.pageCount;
                self.accountBlockInfoList = response.data.data.accountBlockInfoList;
            }).catch( function(response) {
                NProgress.done();
            });

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
.table-th th {
      text-align: center;
    display: table-cell;
    vertical-align: middle;
}
.table-th td {
      text-align: center;
    display: table-cell;
    vertical-align: middle;
}
</style>
