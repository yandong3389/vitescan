<template>

<div class="container" style="">

<header class="bd-header" style="margin-bottom: 0rem;">
  <div class="bd-header-titles" >
    <h1 class="title" style="margin-bottom: 0.5rem;margin-left: 0.5rem;">Top Accounts by VITE Balance</h1>
    <!-- <p class="is-4" style="margin-bottom: 0.5rem;margin-left: 0.5rem;">
      A total of > 1,999,999 accounts found (107,357,467.03 VITE)
(Showing the last 10,000 top accounts only)</p> -->
  </div>
</header>
<div class="table-pdiv" style="margin-bottom: 1rem;">
<div class="container table-div" >

        <table class="table" style="width: 100%;border: solid 1px #dbdbdb;">
        <thead>
            <tr>
            <th>Rank</th>
            <th>Address</th>
            <th>Name Tag</th>
            <th><i class="fa fa-angle-down text-secondary"></i> Balance</th>
            <th>Percentage</th>
            <th>Txn Count</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in accountsData">
              <td>{{data.rank }}</td>
              <td>
                <span v-if="data.addrType=='1'" >
                    <i class="fa fa-file-contract theme-color-font"></i>
                </span>
                <router-link :to="'/address/'+data.address">{{data.address}}</router-link>
              </td>
              <td>{{data.nameTag}}</td>
              <td>{{data.balance|fomatNumber18(0,0)|fomatNumber3}} VITE</td>
              <td>{{data.percentage }}</td>
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
        accountsData:[],
        pageCount:1
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
