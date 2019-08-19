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
              <td>7498914</td>
            </tr>
            <tr>
              <th style="">Snapshot Block Hash：</th>
              <td>fc1a802f48a893cd3a8d1bf58a6a871ac49c4283ef9f91eb3723ec5a1d8ebf04</td>
            </tr>
            <tr>
              <th style="">Snapshot Block Age：</th>
              <td>2s ago（2019-08-19 18:42:12）</td>
            </tr>
            <tr>
              <th style="">Snapshot Accounts：</th>
              <td>1</td>
            </tr>
            <tr>
              <th style="">Snapshot Transactions：</th>
              <td>32</td>
            </tr>
            <tr>
              <th style="">Block Creation Node：</th>
              <td><a href="#">N4Q.org</a></td>
            </tr>
            <tr>
              <th style="">Block Creation Address：</th>
              <td><a href="#">vite_165a295e214421ef1276e79990533953e901291d29b2d4851f</a></td>
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
            <th>Type</th>
            <th>Status</th>
            <th>Snapshotted By</th>
            <th>Age</th>
            <th>Confirmations</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in blocksData">
            <td><a href="#">#{{data.bn}}</a></td>
            <td><a href="#">{{data.txns}} txns</a></td>
            <td><a href="#">{{data.sbp}}</a></td>
            <td>{{data.date }}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>
        </tbody>
        </table>
      </div>
  
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

      </div>
  </div>
</template>

<script>
  import axios from 'axios';
  
  export default {
    data: function() {
      return {
        blocksData:[
        {bn:14564, txns:123, sbp:'N4Y', date:'1 mins 6 secs ago'},
        {bn:14563, txns:12, sbp:'N4Y', date:'1 mins 6 secs ago'},
        {bn:14562, txns:33, sbp:'N4Y', date:'1 mins 6 secs ago'},
        {bn:14561, txns:119, sbp:'N4Y', date:'1 mins 6 secs ago'},
        {bn:14560, txns:13, sbp:'N4Y', date:'1 mins 6 secs ago'},
        {bn:14559, txns:23, sbp:'N4Y', date:'1 mins 6 secs ago'},
        {bn:14558, txns:993, sbp:'N4Y', date:'1 mins 6 secs ago'},
        {bn:14557, txns:45, sbp:'N4Y', date:'1 mins 6 secs ago'},
        {bn:14556, txns:553, sbp:'N4Y', date:'1 mins 6 secs ago'},
        {bn:14555, txns:857, sbp:'N4Y', date:'1 mins 6 secs ago'}
        ],
        txnsData:[]
      }
    },
    created() {
        // this.timer = setInterval(this.loadData, 1000)
    },
    beforeDestroy () {
        // clearInterval(this.timer)
    },
    methods: {
	    clickCallback:function(pageNum){
	      console.log(pageNum)
	    },
        loadData:function(){

            const self = this;
            this.url = "http://39.100.79.183:8888/index/blockData";

            this.$axios({
                    method: 'get',
                    url:this.url
            }).then(function(response) {
                console.log(response)
                self.last = response.data.data.result.current;
            }).catch( function(response) {
                console.log(response)
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
