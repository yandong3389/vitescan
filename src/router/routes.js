import home from '@/components/Home'
//import blogs from '@/components/Blogs'
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
//  ,
//  {
//    path: '/reward',
//    component: voteReward,
//    meta:{
//        title:'Vote Rewards'
//    }
//  },
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
