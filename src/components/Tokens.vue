<template>

<div class="container" style="">

<header class="bd-header" style="margin-bottom: 0rem;">
  <div class="bd-header-titles" >
    <h1 class="title" style="margin-bottom: 0.5rem;margin-left: 0.5rem;">Tokens</h1>
    <p class="is-4" style="margin-bottom: 0.5rem;margin-left: 0.5rem;">A total of {{total}} Token found</p>
  </div>
</header>
<div class="table-pdiv" style="margin-bottom: 1rem;">
<div class="container table-div" >

        <table class="table" style="width: 100%;border: solid 1px #dbdbdb;">
        <thead>
            <tr>
            <th>Token ID</th>
            <th>Token Symbol</th>
            <th>Token Name</th>
            <th>Decimals</th>
            <th>Token Supply</th>
            <th>Owner</th>
            <!-- 
            <th>Is Reissuable</th>
            <th>Max Supply</th>
            <th>Owner BurnOnly</th>
             -->
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in tokenListData">
            <td>{{data.tokenId}}</td>
            <td><router-link :to="'/token/'+data.tokenId">{{data.tokenSymbol}}</router-link></td>
            <td>{{data.tokenName}}</td>
            <td>{{data.decimals}}</td>
            <td>{{data.tokenSupply|fomatNumber18(data.decimals,4)|fomatNumber3}}</td>
            <td><router-link :to="'/address/'+data.owner">{{data.owner|subAddrStr(8)}}</router-link></td>
            <!-- 
            <td>{{data.isReissuable}}</td>
            <td>{{data.maxSupply|fomatNumber18}}</td>
            <td>{{data.ownBurnOnly}}</td>
             -->
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
        tokenListData:[],
        pageCount:10,
        total:''
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
            NProgress.start();
            const self = this;
            this.url = "/vs-api/tokenList?pageNo=" + pageNum;

            this.$axios({
                    method: 'get',
                    url:this.url
            }).then(function(response) {
                NProgress.done();
                self.tokenListData = response.data.data.tokenList;
                self.pageCount = response.data.data.pageCount;
                self.total = response.data.data.total;
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
