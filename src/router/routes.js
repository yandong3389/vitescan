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
    path: '/block/:height',
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
    path: '/tx/:hash',
    component: transaction,
    meta:{
        title:'Transaction'
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
    path: '/token/:tokenId',
    component: token,
    meta:{
        title:'Token'
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
  {
    path: '/address/:address',
    component: address,
    meta:{
        title:'Address'
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
