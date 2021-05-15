<template>

<div class="container" style="">

<header class="bd-header" style="margin-bottom: 0rem;">
  <div class="bd-header-titles" >
    <h1 class="title" style="margin-bottom: 0.5rem;margin-left: 0.5rem;">SBP Detail</h1>
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
              <td>{{sbpInfo.nodeName}}</td>
            </tr>
            <tr>
              <th style="">Registration Time：</th>
              <td>{{sbpInfo.registrationTime|fomatDate}}</td>
            </tr>
            <tr>
              <th style="">Registration Address：</th>
              <td><router-link :to="'/address/'+sbpInfo.registrationAddress">{{sbpInfo.registrationAddress}}</router-link></td>
            </tr>
            <tr>
              <th style="">Block Creation Address：</th>
              <td><router-link :to="'/address/'+sbpInfo.blockCreationAddress">{{sbpInfo.blockCreationAddress}}</router-link></td>
            </tr>
            <tr>
              <th style="">Count：</th>
              <td>{{sbpInfo.count}}</td>
            </tr>
            <tr>
              <th>Ratio：	</th>
              <td>{{sbpInfo.ratio|fomatNumberFixed(2)}}%</td>
            </tr>

            <tr>
              <th>Block Creation Rewards：</th>
              <td>{{sbpInfo.blockCreationRewards|fomatNumberFixed(4)|fomatNumber3}} VITE</td>
            </tr>
            <tr>
              <th>Rewards of Votes：</th>
              <td>{{sbpInfo.rewardsOfVotes|fomatNumberFixed(4)|fomatNumber3}} VITE</td>
            </tr>
            <tr>
              <th>Rewards in Total：</th>
              <td>{{sbpInfo.rewardsInTotal|fomatNumberFixed(4)|fomatNumber3}} VITE</td>
            </tr>
            <tr>
              <th>Rewards not claimed：</th>
              <td>{{sbpInfo.rewardsNotClaimed|fomatNumberFixed(4)|fomatNumber3}} VITE</td>
            </tr>
        </tbody>
        </table>
      </div>
      </div>
<div class="tabs is-medium" style="background-color: #fff;margin-bottom: 0rem;">
  <ul>
    <li :class="{'is-active':tabFlag=='rewards'}"><a href="javascript:;" @click="changeTab('rewards')">Rewards</a></li>
    <li :class="{'is-active':tabFlag=='snaplist'}"><a href="javascript:;" @click="changeTab('snaplist')">Snapshot Block List</a></li>
    <li :class="{'is-active':tabFlag=='voters'}"><a href="javascript:;" @click="changeTab('voters')">Voters</a></li>
  </ul>
</div>

<div class="table-pdiv" style="margin-bottom: 1rem;">
    <div class="container table-div" style="padding: 2rem;background: white;" >

      <div v-if="tabFlag=='rewards'">
        <table class="table is-striped" style="width: 100%;border: solid 1px #dbdbdb;">
        <thead>
            <tr>
            <th>Cycle</th>
            <th>Time</th>
            <th>Block creation count</th>
            <th>Missed</th>
            <th>Block creation rewards</th>
            <th>Rewards of votes</th>
            <th>Rewards in total</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in nodeRewardInfos">
            <td>{{data.cycle}}</td>
            <td>{{data.startTime|fomatDate}} - {{data.endTime|fomatDate}}</td>
            <td>{{data.producedBlocks}}</td>
            <td>{{data.targetBlocks-data.producedBlocks}}</td>
            <td>{{data.blockProducingReward|fomatNumberFixed(4)|fomatNumber3}} VITE</td>
            <td>{{data.votingReward|fomatNumberFixed(4)|fomatNumber3}} VITE</td>
            <td>{{data.totalReward|fomatNumberFixed(4)|fomatNumber3}} VITE</td>
            <!-- target="_blank"  -->
            <td><router-link :to="'/sbp_voting_details/'+sbpInfo.nodeName+'/'+data.cycle">Voting Details</router-link></td>
            </tr>
        </tbody>
        </table>
        </div>


      <div v-if="tabFlag=='snaplist'">
        <table class="table is-striped" style="width: 100%;border: solid 1px #dbdbdb;">
        <thead>
            <tr>
            <th>Block Number</th>
            <th>Txns</th>
            <th>Date</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in snapBlockInfos">
            <td><router-link :to="'/block/'+data.height">#{{data.height}}</router-link></td>
            <td><router-link :to="'/block/'+data.height">{{data.txCount}} txns</router-link></td>
            <td>{{data.timestamp|fomatTime(data.diffTime)}}</td>
            </tr>
        </tbody>
        </table>
        </div>

      <div v-if="tabFlag=='voters'">
        <table class="table is-striped" style="width: 100%;border: solid 1px #dbdbdb;">
        <thead>
            <tr>
            <th>No</th>
            <th>Voters</th>
            <th>Votes</th>
            <th>Percentage</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in accountVoterResults">
              <td>{{data.no}}</td>
            <td><router-link :to="'/address/'+data.voters">{{data.voters}}</router-link></td>
            <td>{{data.votes|fomatNumber18(0,4)|fomatNumber3}}</td>
            <td>{{data.percentage|fomatNumber18(0,4)}}%</td>
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
        sbpInfo:{},
        total:0,
        tabFlag:"rewards",
        nodeRewardInfos:[],
        snapBlockInfos:[],
        accountVoterResults:[]
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

            this.url = "/vs-api/sbp?sbp="+ sbp +"&tabFlag="+ self.tabFlag +"&pageNo=" + pageNum;

            this.$axios({
                    method: 'get',
                    url:this.url
            }).then(function(response) {
                NProgress.done();
                

                self.total = response.data.data.total;
                self.pageCount = response.data.data.pageCount;

                self.sbpInfo = response.data.data.sbpInfo;

                self.nodeRewardInfos = response.data.data.nodeRewardInfos;
                self.snapBlockInfos = response.data.data.snapBlockInfos;
                self.accountVoterResults = response.data.data.accountVoterResults;

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
