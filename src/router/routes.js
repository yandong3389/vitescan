import home from '@/components/Home'
import blocks from '@/components/Blocks'
import block from '@/components/Block'
import transactions from '@/components/Transactions'
import transaction from '@/components/Transaction'
import tokens from '@/components/Tokens'
import token from '@/components/Token'
import sbps from '@/components/SBPList'
import accounts from '@/components/Accounts'
import address from '@/components/Address'
//import showblog from '@/components/ShowBlog'
//import aboutus from '@/components/AboutUs'
//import contact from '@/components/Contact'
//import voteReward from '@/components/VoteReward'
//import voteCycleRewardTotal from '@/components/VoteCycleRewardTotal'
//import adminReward from '@/components/AdminReward'

// const home = () => import('../components/Home')
// const blogs = () => import('../components/Blogs')
// const showblog = () => import('../components/ShowBlog')
// const aboutus = () => import('../components/AboutUs')
// const voteReward = () => import('../components/VoteReward')

export default [
  {
    path: '/',
    component: home,
    meta:{
        title:'ViteScan'
    }
  }
  ,
  {
    path: '/blocks',
    component: blocks,
    meta:{
        title:'ViteScan Blocks'
    }
  },
  {
    path: '/block/:height',
    component: block,
    meta:{
        title:'ViteScan Block'
    }
  },
  {
    path: '/txs',
    component: transactions,
    meta:{
        title:'ViteScan Transactions'
    }
  },
  {
    path: '/tx/:hash',
    component: transaction,
    meta:{
        title:'ViteScan Transaction'
    }
  },
  {
    path: '/tokens',
    component: tokens,
    meta:{
        title:'ViteScan Tokens'
    }
  },
  {
    path: '/token/:tokenId',
    component: token,
    meta:{
        title:'ViteScan Token'
    }
  },
  {
    path: '/sbps',
    component: sbps,
    meta:{
        title:'ViteScan SBP List'
    }
  },
  {
    path: '/accounts',
    component: accounts,
    meta:{
        title:'ViteScan Top Accounts'
    }
  },
  {
    path: '/address/:address',
    component: address,
    meta:{
        title:'ViteScan Address'
    }
  },
//  {
//    path: '/cycleRewardTotal',
//    component: voteCycleRewardTotal,
//    meta:{
//        title:'Vote Rewards for Cycle'
//    }
//  },
//  {
//    path: '/blogs',
//    component: blogs,
//    meta:{
//        title:'Blogs'
//    }
//  },
//  {
//    path: '/blog/:id',
//    component: showblog,
//    meta:{
//        title:'Blogs'
//    }
//  },
//  {
//    path: '/aboutus',
//    component: aboutus,
//    meta:{
//        title:'About us'
//    }
//  },
//  {
//    path: '/contact',
//    component: contact,
//    meta:{
//        title:'Contact us'
//    }
//  },
//  {
//    path: '/adminReward',
//    component: adminReward,
//    meta:{
//        title:'adminReward'
//    }
//  }
];
