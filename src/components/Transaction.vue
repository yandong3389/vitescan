<template>

<div class="container">

<header class="bd-header" style="margin-bottom: 0rem;">
  <div class="bd-header-titles" >
    <h1 class="title" style="margin-bottom: 0.5rem;margin-left: 0.5rem;">Transaction Details</h1>
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
              <th width="240">Transaction Hash：</th>
              <td>{{txDetail.hash}}</td>
            </tr>
            <tr>
              <th>Request Transaction Hash：</th>
              <td><router-link :to="'/tx/'+txDetail.receiveBlockHash">{{txDetail.receiveBlockHash}}</router-link></td>
            </tr>
            <tr>
              <th>Response Transaction Hash：</th>
              <td><router-link :to="'/tx/'+txDetail.receiveBlockHash">{{txDetail.receiveBlockHash}}</router-link></td>
            </tr>
            <tr>
              <th>Transaction Type：</th>
              <td>{{txDetail.blockType|fomatBlockType}}</td>
            </tr>
            <tr>
              <th>Transaction Status：</th>
              <td></td>
            </tr>
            <tr>
              <th>Confirmations：</th>
              <td>{{txDetail.confirmations}}</td>
            </tr>
            <tr>
              <th>Firstly Snapshotted By：</th>
              <td><router-link :to="'/block/'+txDetail.firstSnapshotHash">{{txDetail.firstSnapshotHash}}</router-link></td>
            </tr>
            <tr>
              <th>Producer：</th>
              <td><router-link :to="'/address/' + txDetail.producer">{{txDetail.producer}}</router-link></td>
            </tr>
            <tr>
              <th>Age：</th>
              <td>{{txDetail.timestamp|fomatTime(txDetail.diffTime)}}（{{txDetail.timestamp|fomatDate}}）</td>
            </tr>
            <tr>
              <th>From：</th>
              <td><router-link :to="'/address/'+txDetail.fromAddress">{{txDetail.fromAddress}}</router-link></td>
            </tr>
            <tr>
              <th>To：</th>
              <td><router-link :to="'/address/'+txDetail.toAddress">{{txDetail.toAddress}}</router-link></td>
            </tr>
            <tr>
              <th>Token：</th>
              <td><a href="#">{{txDetail.tokenSymbol}}</a></td>
            </tr>
            <tr>
              <th>Quantity：</th>
              <td>{{txDetail.amount|fomatNumber18(txDetail.decimals,txDetail.decimals)}}</td>
            </tr>
            <tr>
              <th>UT Used：</th>
              <td>{{txDetail.utUsed}}</td>
            </tr>
            <tr>
              <th>Input Data：</th>
              <td><textarea readonly class="text-data">{{txDetail.data}}</textarea></td>
            </tr>
            <tr>
              <th>Input Data（Base64.decode）：</th>
              <td><textarea readonly class="text-data">{{txDetail.data2}}</textarea></td>
            </tr>
        </tbody>
        </table>
      </div>
      </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import NProgress from 'nprogress';
  export default {
    data: function() {
      return {
        txDetail:{},
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
            this.url = "/vs-api/tx/getTxDetail";
            const params = {
                txHash:self.$route.params.hash
            }

            this.$axios({
                    method: 'get',
                    url:this.url,
                    params:params
            }).then(function(response) {      
                self.txDetail = response.data.data;
                
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
.text-data {
    margin: 0px;
    max-width: 700px;
    width: 700px;
    height: 110px;
    outline: none;
    resize: none;
}
</style>
