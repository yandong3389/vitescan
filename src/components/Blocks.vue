<template>

<div class="container" style="">

<header class="bd-header" style="margin-bottom: 0rem;">
  <div class="bd-header-titles" >
    <h1 class="title" style="margin-bottom: 0.5rem;margin-left: 0.5rem;">Blocks</h1>
    <p class="is-4" style="margin-bottom: 0.5rem;margin-left: 0.5rem;">Block #8355250 to #8355274 (Total of 8,355,275 blocks)</p>
  </div>
</header>
<div class="table-pdiv" style="margin-bottom: 1rem;">
<div class="container table-div" >

        <table class="table" style="width: 100%;">
        <thead>
            <tr>
            <th>Block Number</th>
            <th>Txns</th>
            <th>SBP</th>
            <th>Date</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in blocksData">
            <td><a href="#">#{{data.bn}}</a></td>
            <td><a href="#">{{data.txns}} txns</a></td>
            <td><a href="#">{{data.sbp}}</a></td>
            <td>{{data.date }}</td>
            </tr>
        </tbody>
        </table>
      </div>
    <div>
    </div>
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
	  </paginate>
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
@media screen and (max-width: 750px){
.table-div {
    width: 1000px;
}
.table-pdiv {
    overflow-x: auto;
    overflow-y:hidden;
}

}
</style>
