<template>

<div class="container" style="">

<header class="bd-header" style="margin-bottom: 0rem;">
  <div class="bd-header-titles" >
    <h1 class="title" style="margin-bottom: 0.5rem;margin-left: 0.5rem;">Transactions</h1>
    <p class="is-4" style="margin-bottom: 0.5rem;margin-left: 0.5rem;">More than > 999,999,999 transactions found(Showing the last 500k records)</p>
  </div>
</header>
<div class="table-pdiv" style="margin-bottom: 1rem;">
<div class="container table-div" >

        <table class="table" style="width: 100%;border: solid 1px #dbdbdb;">
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
            <!-- <th>Confirmations</th> -->
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in txnsData">
            <td><router-link :to="'/tx/'+data.hash">{{data.hash|subAddrStr(5)}}</router-link></td>
            <td>{{data.tokenSymbol}}</td>
            <td>{{data.amount|fomatNumber18(data.decimals,2)}}</td>
            <td><router-link :to="'/address/' + data.fromAddress">{{data.fromAddress|subAddrStr(5)}}</router-link></td>
            <td><router-link :to="'/address/' + data.toAddress">{{data.toAddress|subAddrStr(5)}}</router-link></td>
            <td>{{data.blockType|fomatBlockType}}</td>
            <!-- <td><a href="#">{{data.snapshotHash|subAddrStr(5)}}</a></td> -->
            <td>{{data.timestamp|fomatTime(data.diffTime)}}</td>
            <!-- <td>{{blockData.confirmations}}</td> -->
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
        txnsData:[],
        pageCount:1
      }
    },
    created() {
        this.loadData(1);
    },
    beforeDestroy () {
        // clearInterval(this.timer)
    },
    methods: {
	    clickCallback:function(pageNum){
	      this.loadData(pageNum);
	    },
        loadData:function(pageNum){

            const self = this;
            this.url = "/vs-api/txs/?pageNo=" + pageNum;

            this.$axios({
                    method: 'get',
                    url:this.url
            }).then(function(response) {
                NProgress.done();
                self.txnsData = response.data.data.accountBlockInfos;
                self.total = response.data.data.total;
                self.pageCount = response.data.data.pageCount;
            }).catch( function(response) {
                NProgress.done();
            });

        }
    }
  }
</script>

<style scoped lang="css">
@media screen and (max-width: 900px){
.table-div {
    width: 900px;
}
.table-pdiv {
    overflow-x: auto;
    overflow-y:hidden;
}

}
</style>
