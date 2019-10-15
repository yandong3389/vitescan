<template>

<div class="container" style="">

<header class="bd-header" style="margin-bottom: 0rem;">
  <div class="bd-header-titles" >
    <h1 class="title" style="margin-bottom: 0.5rem;margin-left: 0.5rem;">SBP List</h1>
    <p class="is-4" style="margin-bottom: 0.5rem;margin-left: 0.5rem;">Cryptocurrency mining is the validation of transactions on the blockchain. Once validated, these transactions are added to the blockchain's public ledger of past transactions.
<!-- For this effort, successful miners receive new cryptocurrency as a reward. -->
</p>
  </div>
</header>
<div class="table-pdiv" style="margin-bottom: 1rem;">
<div class="container table-div" >

        <table class="table" style="width: 100%;border: solid 1px #dbdbdb;">
        <thead>
            <tr>
            <th style="padding-left: 3rem;">Ranking</th>
            <th>Name</th>
            <th>Votes</th>
            <th>Address</th>
            <th>Last Snapshot</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in nodeListData">
            <td style="padding-left: 3rem;width: 6rem;"><span class="ranking-span" :class="{'top25class':data.ranking<=25, 'nottop25class':data.ranking>25}">{{data.ranking}}</span></td>
            <td><router-link :to="'/address/'+data.nodeAddr">{{data.name}}</router-link></td>
            <td>{{data.voteNum|fomatNumber18(18,0)|fomatNumber3}}</td>
            <td><router-link :to="'/address/'+data.nodeAddr">{{data.nodeAddr|subAddrStr(8)}}</router-link></td>
            <td>{{data.timestamp|fomatTime(data.diffTime)}}</td>
            </tr>
        </tbody>
        </table>
      </div>
    <div>
    </div>

  <!-- 
	<paginate
	    :page-count="20"
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
-->
      </div>
  </div>
</template>

<script>
  import axios from 'axios';
  // import NProgress from 'nprogress'
  export default {
    data: function() {
      return {
        nodeListData:[]
      }
    },
    created() {
        this.loadData();
    },
    beforeDestroy () {
        // clearInterval(this.timer)
    },
    methods: {
	    clickCallback:function(pageNum){
	      console.log(pageNum)
	    },
        loadData:function(){
            // NProgress.start();
            const self = this;
            this.url = "/vs-api/nodeList";

            this.$axios({
                    method: 'get',
                    url:this.url
            }).then(function(response) {
                self.nodeListData = response.data.data;
                // NProgress.done();
            }).catch( function(response) {
                // NProgress.done();
            });

        }
    }
  }
</script>

<style scoped lang="css">
@media screen and (max-width: 750px){
.table-div {
    width: 700px;
}
.table-pdiv {
    overflow-x: auto;
    overflow-y:hidden;
}
}
.top25class{
  background: rgba(68,197,142,.1);
    color: #44c58e;
}
.nottop25class{
    background: rgba(255,149,0,.1);
    color: #ff9500;
}
.ranking-span{
      display: inline-block;
    text-align: center;
    min-width: 30px;
    margin-right: 5px;
    border-radius: 12px;
    font-weight: 500;
}
</style>
