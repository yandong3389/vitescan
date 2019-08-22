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

        <table class="table" style="width: 100%;border: solid 1px #dbdbdb;">
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
            <td><a href="#">#{{data.height}}</a></td>
            <td><a href="#">{{data.txCount}} txns</a></td>
            <td><a href="#">{{data.nodeName}}</a></td>
            <td>{{data.timestamp|fomatTime }}</td>
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
// import 'nprogress/nprogress.css'
  export default {
    data: function() {
      return {
        blocksData:[],
        txnsData:[],
        pageCount:10
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
            this.url = "http://localhost/blocks?pageNo=" + pageNum;

            this.$axios({
                    method: 'get',
                    url:this.url
            }).then(function(response) {
                NProgress.done();
                self.blocksData = response.data.data.snapBlockList;
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
@media screen and (max-width: 750px){
.table-div {
    width: 700px;
}
.table-pdiv {
    overflow-x: auto;
    overflow-y:hidden;
}

}
</style>
