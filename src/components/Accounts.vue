<template>

<div class="container" style="">

<header class="bd-header" style="margin-bottom: 0rem;">
  <div class="bd-header-titles" >
    <h1 class="title" style="margin-bottom: 0.5rem;margin-left: 0.5rem;">Top Accounts by VITE Balance Total</h1>
    <p class="is-4" style="margin-bottom: 0.5rem;margin-left: 0.5rem;">
      A total of {{total}} accounts found ({{viteTokenTotal|fomatNumber3}} VITE)   
(Showing the last 10,000 top accounts only)</p>
  </div>
</header>
<div class="table-pdiv" style="margin-bottom: 1rem;">
<div class="container table-div" >

        <table class="table table-th" style="width: 100%;border: solid 1px #dbdbdb;">
        <thead>
            <tr>
            <th>Rank</th>
            <th>Address</th>
            <th>Name Tag</th>
            <th>Wallet Balance</th>
            <th>Staking Quota</th>
            <th>Staking Mining</th>
            <th>Staking VIP / SVIP</th>
            <th>ViteX DEX <br />Available / Locked</th>
            <th><i class="fa fa-angle-down text-secondary"></i> Balance Total</th>
            <th>Percentage</th>
            <th>Txn Count</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in accountsData">
              <td>{{data.rank }}</td>
              <td style="text-align: right;width: 228px;">
                <template v-if="data.vipStaking > 0">
                  <span class="vip-span">VIP</span>
                </template>
                <template v-if="data.svipStaking > 0">
                  <span class="svip-span">SVIP</span>
                </template>

                <span v-if="data.addrType=='1'" >
                    <i title="Contract" class="fa fa-file-contract theme-color-font"></i>
                </span>
                <router-link :to="'/address/'+data.address">{{data.address|subAddrStr(10)}}</router-link>
              </td>
              <td>{{data.nameTag}}</td>
              <td>{{data.balance|fomatNumber18(0,0)|fomatNumber3}}</td>
              <td>
                <template v-if="data.quotaStaking == 0">-</template>
                <template v-if="data.quotaStaking > 0">
                {{data.quotaStaking|fomatNumber18(0,0)|fomatNumber3}}
                </template>
              </td>
              <td>
                <template v-if="data.miningStaking == 0">-</template>
                <template v-if="data.miningStaking > 0">
                {{data.miningStaking|fomatNumber18(0,0)|fomatNumber3}}
                </template>
              </td>
              <td>
                <template v-if="data.vipStaking == 0 && data.svipStaking == 0">-</template>
                <template v-if="data.vipStaking > 0 || data.svipStaking > 0">
                  {{data.vipStaking|fomatNumber18(0,0)|fomatNumber3}} / {{data.svipStaking|fomatNumber18(0,0)|fomatNumber3}}
                </template>
              </td>
              <td>{{data.dexAvailableBalance|fomatNumber18(0,0)|fomatNumber3}} / {{data.dexLockedBalance|fomatNumber18(0,0)|fomatNumber3}}</td>
              <td>{{data.totalBalance|fomatNumber18(0,0)|fomatNumber3}} VITE</td>
              <td>{{data.percentage|fomatNumber18(0,4)}}%</td>
              <td>{{data.txnCount|fomatNumber3 }}</td>
            </tr>
        </tbody>
        </table>
      </div>
    <div>
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

      <!-- <li ><a tabindex="0">Next</a></li> -->
      <li>
  <div class="select">
    <select>
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </div>

      </li>

      <li><input class="input" type="text" placeholder="Normal input"></li>
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
        accountsData:[],
        pageCount:1,
        viteTokenTotal:0,
        total:0

      }
    },
    created() {
        this.loadData(1);
    },
    beforeDestroy () {
       
    },
    methods: {
	    clickCallback:function(pageNum){
	      this.loadData(pageNum);
	    },
        loadData:function(pageNum){
            NProgress.start();
            const self = this;
            this.url = "/vs-api/accounts?pageNo=" + pageNum;

            this.$axios({
                    method: 'get',
                    url:this.url
            }).then(function(response) {
                NProgress.done();
                self.accountsData = response.data.data.accountsResults;
                self.total = response.data.data.total;
                self.pageCount = response.data.data.pageCount;
                self.viteTokenTotal = response.data.data.viteTokenTotal;
            }).catch( function(response) {
                NProgress.done();
            });

        }
    }
  }
</script>

<style scoped lang="css">
@media screen and (max-width: 1340px){
.table-div {
    width: 1340px;
}
.table-pdiv {
    overflow-x: auto;
    overflow-y:hidden;
}

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

.vip-span {
      display: inline-block;
    text-align: center;
    min-width: 26px;
    margin-right: 2px;
    border-radius: 2px;
    font-weight: 500;
    background: rgba(68,197,142,.1);
    color: #44c58e;
    font-style: italic;
}
.svip-span {
      display: inline-block;
    text-align: center;
    min-width: 30px;
    margin-right: 2px;
    border-radius: 2px;
    font-weight: 500;
    background: rgba(68,197,142,.1);
    color: #ff9500;
    font-style: italic;
}
</style>
