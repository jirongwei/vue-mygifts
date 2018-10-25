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

import Settings from '@/components/settings/Settings'
import SettingsIcon from '@/components/settings/SettingsIcon'














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

    // 上传头像
    {
      path:'/upload',
      name:'upload',
      component:SettingsIcon
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



  ],
  mode:'history'
})
