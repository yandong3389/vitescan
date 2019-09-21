<template>

<div class="container" style="">

<header class="bd-header" style="margin-bottom: 0rem;">
  <div class="bd-header-titles" >
    <h1 class="title" style="margin-bottom: 0.5rem;margin-left: 0.5rem;">Snapshot Block Details</h1>
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
              <th width="200">Status：</th>
              <td><span class="success-span"><span>CONFIRMED</span></span></td>
            </tr>
            <tr>
              <th width="200">Snapshot Block Height：</th>
              <td>{{blockData.height}}</td>
            </tr>
            <tr>
              <th style="">Snapshot Block Hash：</th>
              <td>{{blockData.hash}}</td>
            </tr>
            <tr>
              <th style="">Snapshot Block Age：</th>
              <td>{{blockData.timestamp|fomatTime(blockData.diffTime)}}（{{blockData.timestamp|fomatDate}}）</td>
            </tr>
            <tr>
              <th style="">Snapshot Accounts：</th>
              <td>{{blockData.accountCount}}</td>
            </tr>
            <tr>
              <th style="">Snapshot Transactions：</th>
              <td>{{blockData.txCount}}</td>
            </tr>
            <tr>
              <th style="">Block Creation Node：</th>
              <td><a href="#">{{blockData.nodeName}}</a></td>
            </tr>
            <tr>
              <th style="">Block Creation Address：</th>
              <td><router-link :to="'/address/' + blockData.nodeAddr">{{blockData.nodeAddr}}</router-link></td>
            </tr>
        </tbody>
        </table>
      </div>
      </div>
<div class="tabs is-medium" style="background-color: #fff;margin-bottom: 0rem;">
  <ul>
    <li class="is-active"><span>Transactions</span></li>
    <!--<li><a>Contract Internal Transactions</a></li>-->
  </ul>
</div>

<div class="table-pdiv" style="margin-bottom: 1rem;">
<div class="container table-div" style="padding: 2rem;background: white;" >

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
            <tr v-for="data in txnsData">
            <td><router-link :to="'/tx/'+data.hash">{{data.hash|subAddrStr(5)}}</router-link></td>
            <td>{{data.tokenSymbol}}</td>
            <td>{{data.amount|fomatNumber18(data.decimals,2)}}</td>
            <td><router-link :to="'/address/' + data.fromAddress">{{data.fromAddress|subAddrStr(5)}}</router-link></td>
            <td><router-link :to="'/address/' + data.toAddress">{{data.toAddress|subAddrStr(5)}}</router-link></td>
            <td>{{data.blockType|fomatBlockType}}</td>
            <!-- <td><a href="#">{{data.snapshotHash|subAddrStr(5)}}</a></td> -->
            <td>{{blockData.timestamp|fomatTime(blockData.diffTime)}}</td>
            <td>{{blockData.confirmations}}</td>
            </tr>
        </tbody>
        </table>
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
  import NProgress from 'nprogress';
  export default {
    data: function() {
      return {
        blockData:{},
        txnsData:[],
        pageCount:1
      }
    },
    created() {
        // this.timer = setInterval(this.loadData, 1000)
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
            NProgress.start();
            const self = this;
            this.url = "http://localhost/block";
            const params = {
                blockHeight:self.$route.params.height
            }

            this.$axios({
                    method: 'get',
                    url:this.url,
                    params:params
            }).then(function(response) {      
                self.blockData = response.data.data.snapshotBlockInfo;
                self.txnsData = response.data.data.accountBlockInfos;
                NProgress.done();
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

.tabs span{
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
    border-bottom-color: #3273dc;
    color: #3273dc;
}

</style>
