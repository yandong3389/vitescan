import home from '@/components/Home'
import blocks from '@/components/Blocks'
import block from '@/components/Block'
import transactions from '@/components/Transactions'
import tokens from '@/components/Tokens'
import sbps from '@/components/SBPList'
import accounts from '@/components/Accounts'
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
        title:'Home'
    }
  }
  ,
  {
    path: '/blocks',
    component: blocks,
    meta:{
        title:'Blocks'
    }
  },
  {
    path: '/block/:id',
    component: block,
    meta:{
        title:'Block'
    }
  },
  {
    path: '/txs',
    component: transactions,
    meta:{
        title:'Transactions'
    }
  },
  {
    path: '/tokens',
    component: tokens,
    meta:{
        title:'Tokens'
    }
  },
  {
    path: '/sbps',
    component: sbps,
    meta:{
        title:'SBP List'
    }
  },
  {
    path: '/accounts',
    component: accounts,
    meta:{
        title:'Top Accounts'
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
