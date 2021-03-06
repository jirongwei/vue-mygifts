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


import PostReply from '@/components/post/PostReply'
import PostDetail from '@/components/post/PostDetail'
import Post from '@/components/post/Post'

import Settings from '@/components/settings/Settings'













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

    {
      path:'/postdetail',
      name:'postdetail',
      component:PostDetail
    },

    {
      path:'/reply',
        name:'reply',
      component:PostReply
    },

    {
      path:'/post',
      name:'post',
      component:Post
    },


    // 个人设置
    {
      path:'/settings',
      name:'settings',
      component:Settings
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






  ],
  mode:'history'
})
