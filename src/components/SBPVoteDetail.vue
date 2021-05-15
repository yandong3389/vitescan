<template>

<div class="container" style="">

<header class="bd-header" style="margin-bottom: 0rem;">
  <div class="bd-header-titles" >
    <h1 class="title" style="margin-bottom: 0.5rem;margin-left: 0.5rem;">SBP Voting Details</h1>
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
              <th width="200">Node Name：</th>
              <td>{{nodeRewardInfo.nodeName}}</td>
            </tr>
            <tr>
              <th style="">Cycle：</th>
              <td>{{nodeRewardInfo.cycle}} ({{nodeRewardInfo.startTime|fomatDate}} - {{nodeRewardInfo.endTime|fomatDate}})</td>
            </tr>
            <tr>
              <th style="">Votes：</th>
              <td>{{nodeRewardInfo.votes|fomatNumberFixed(4)|fomatNumber3}} VITE</td>
            </tr>
        </tbody>
        </table>
      </div>
      </div>
<div class="tabs is-medium" style="background-color: #fff;margin-bottom: 0rem;">
  <ul>
    <li class="is-active"><a href="javascript:;" >Voting Details</a></li>
  </ul>
</div>

<div class="table-pdiv" style="margin-bottom: 1rem;">
    <div class="container table-div" style="padding: 2rem;background: white;" >

      <div>
        <table class="table is-striped" style="width: 100%;border: solid 1px #dbdbdb;">
        <thead>
            <tr>
            <th>No.</th>
            <th>Address</th>
            <th>Votes</th>
            <th>Ratio</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(data,index) in nodeVoteDetailInfos">
            <td>{{(pageNum-1) * 10 + index + 1}}</td>
            <td>{{data.address}}</td>
            <td>{{data.votes|fomatNumberFixed(4)|fomatNumber3}} VITE</td>
            <td>{{data.ratio}}%</td>
            </tr>
        </tbody>
        </table>
        </div>
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
        blocksData:[],
        pageCount:1,
        pageNum:1,
        nodeRewardInfo:{},
        total:0,
        nodeVoteDetailInfos:[]
      }
    },
    created() {
        this.loadData(1);
    },
    beforeDestroy () {
    },
    methods: {
      changeTab:function(tabFlag){
           this.tabFlag = tabFlag;
           this.pageCount = 1;
           this.loadData(1);
      },
	    clickCallback:function(pageNum){
	      this.loadData(pageNum);
	    },
        loadData:function(pageNum){
            NProgress.start();
            const self = this;
            const sbp = self.$route.params.sbp;
            const cycle = self.$route.params.cycle;

            this.url = "/vs-api/sbp_voting_details?sbp="+ sbp +"&cycle="+ cycle +"&pageNo=" + pageNum;

            this.$axios({
                    method: 'get',
                    url:this.url
            }).then(function(response) {
                NProgress.done();
                self.pageNum = pageNum;
                self.total = response.data.data.total;
                self.pageCount = response.data.data.pageCount;
                self.nodeRewardInfo = response.data.data.nodeRewardInfo;
                self.nodeVoteDetailInfos = response.data.data.nodeVoteDetailInfos;
            }).catch( function(response) {
                NProgress.done();
            });

        }
    },
    watch :{
  　'$route': function (to, from) {
       //执行数据更新查询
       this.tabFlag="balance";
　　   this.loadData(1);
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

.tabs span, .tabs a{
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

}
.tabs .is-active span, .tabs .is-active a{
    border-bottom-color: #3273dc;
    color: #3273dc;
}
.text-danger {
    color: #d9534f!important;
}
.text-success {
    color: #93c54b!important;
}
</style>
