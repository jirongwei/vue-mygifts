import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'


import Personal from '@/components/personal/Personal'
import PersonalReceiving from '@/components/personal/PersonalReceiving'
import PersonalTrends from '@/components/personal/PersonalTrends'


import Product from '@/components/gift/Product'
import DetailFlower from '@/components/gift/DetailFlower'
import GiftCart from '@/components/gift/GiftCart'
import GiftOrder from '@/components/gift/GiftOrder'


import PostReply from '@/components/post/PostReply'
import PostDetail from '@/components/post/PostDetail'
import Post from '@/components/post/Post'
import PostSend from '@/components/post/PostSend'


import DetailTalk from '@/components/tribune/DetailTalk'
import TribuneSend from '@/components/tribune/TribuneSend'

import MyCollection from '@/components/personal/MyCollection'
import PersonalMyCollection from '@/components/personal/PersonalMyCollection'
import CollectionStrategy from '@/components/personal/CollectionStrategy'
import CollectionNote from '@/components/personal/CollectionNote'
import PersonalMyColnote from '@/components/personal/PersonalMyColnote'
import PersonalMyColstrategy from '@/components/personal/PersonalMyColstrategy'
import TalkDetail from '@/components/tribune/TalkDetail'













Vue.use(Router)


export default new Router({
  routes: [

    //首页: index
    {
      path:'/',
      name:'index',
      component:Index
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
      path: '/giftCart/',
      name: 'giftCart',
      component: GiftCart
    },

    //订单页面
    {
      path:'/giftorder/',
      name:'giftorder',
      component:GiftOrder
    },

    //帖子详情页
    {
      path:'/postdetail/:pid',
      name:'postdetail',
      component:PostDetail
    },

    //帖子回复
    {
      path:'/reply',
        name:'reply',
      component:PostReply
    },

    //帖子主页
    {
      path:'/post',
      name:'post',
      component:Post
    },

    //帖子发送
    {
      path:'/postsend',
      name:'postsend',
      component:PostSend
    },

    //攻略搜索
    {
      path:'/tribuneSearch',
      name:'tribuneSearch',
      component:DetailTalk
    },

    //写攻略
    {
      path:'/tribunesend',
      name:'tribunesend',
      component:TribuneSend
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
    // 论坛详情
    {
      path: '/talkdetail/:tid',
      name: 'talkdetail',
      component: TalkDetail
    },



  ],
  mode:'history'
})
