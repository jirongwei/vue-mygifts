import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Personal from '@/components/Personal'
import PersonalReceiving from '@/components/PersonalReceiving'
import PersonalTrends from '@/components/PersonalTrends'
import Settings from '@/components/Settings'
import Product from '@/components/Product'
import DetailFlower from '@/components/DetailFlower'
import GoodsCart from '@/components/GoodsCart'
import TalkDetail from '@/components/TalkDetail'
import PostLeft from '@/components/PostLeft'
import MyCollection from '@/components/MyCollection'
import PersonalMyCollection from '@/components/PersonalMyCollection'
import CollectionStrategy from '@/components/CollectionStrategy'
import CollectionNote from '@/components/CollectionNote'
import PersonalMyColnote from '@/components/PersonalMyColnote'
import PersonalMyColstrategy from '@/components/PersonalMyColstrategy'





Vue.use(Router)


export default new Router({
  routes: [

    //首页: index
    {
      path:'/',
      name:'index',
      component:Index
    },


    // 个人首页
    {
      path: '/personal',
      name: 'personal',
      component: Personal,
    },


    // 待收礼物
    {
      path: '/receive',
      name: 'receive',
      component: PersonalReceiving
    },

    // 动态圈
    {
      path: '/trends',
      name: 'trends',
      component: PersonalTrends
    },

    // 个人设置
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },

    // 创意礼物
    {
      path: '/gifts',
      name: 'gifts',
      component: Product
    },

    // 礼物详情
    {
      path: '/giftInfo/:giftid',
      name: 'giftInfo',
      component: DetailFlower
    },

    // 购物车
    {
      path: '/goodscart',
      name: 'goodscart',
      component: GoodsCart
    },

    // 论坛详情
    {
      path: '/talkdetail/:tid',
      name: 'talkdetail',
      component: TalkDetail
    },
    // PostLeft
    {
      path: '/postleft',
      name: 'postleft',
      component: PostLeft
    },
   // 礼物的收藏
    {
      path: '/mycollection',
      name: 'mycollection',
      component: MyCollection
    },
    // 攻略的收藏
    {
      path: '/collectionstrategy',
      name: 'collectionstrategy',
      component: CollectionStrategy
    },
    // 帖子的收藏
    {
      path: '/collectionnote',
      name: 'collectionnote',
      component: CollectionNote
    },

    // 我的收藏
    {
      path: '/personalmycollection',
      name: 'personalmycollection',
      component: PersonalMyCollection
    },
    // 我的帖子的收藏
    {
      path: '/personalmycolnote',
      name: 'personalmycolnote',
      component: PersonalMyColnote
    },
    // 我的攻略的收藏
    {
      path: '/personalmycolstrategy',
      name: 'personalmycolstrategy',
      component: PersonalMyColstrategy
    },



  ],
  mode:'history'
})
