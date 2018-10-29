// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'

// 导入全局组件
import NavMain from './components/public/NavMain'
import NavFooter from './components/public/NavFooter'
import NavBottom from './components/public/NavBottom'
import Pagination from './components/public/Pagination'
import VDistpicker from 'v-distpicker'



// user
import Login from './components/user/Login'
import Regist from './components/user/Regist'
import UserAddress from './components/user/UserAddress'

// 个人中心
import PersonalNothing from './components/personal/PersonalNothing'
import PersonalHeader from './components/personal/PersonalHeader'


// 礼物模块
import Product from './components/gift/Product'

// 论坛模块
import PostRight from './components/post/PostRight'
import PostLeft from './components/post/PostLeft'
import PostReplyLeft from './components/post/PostReplyLeft'
import PostDetailLeft from './components/post/PostDetailLeft'


//  我的收藏
import MyCollection from './components/personal/MyCollection'
import CollectionNote from './components/personal/CollectionNote'
import CollectionStrategy from './components/personal/CollectionStrategy'








// 导入第三方模块
import $ from 'jquery'    // 用到第三方插件导入jQuery

import 'bootstrap/dist/js/bootstrap.min.js'   // bootstrap js文件

import global_ from './components/public/Global'//引用文件

Vue.prototype.GLOBAL = global_; //挂载到Vue实例上面



Vue.config.productionTip = false;

/* eslint-disable no-new */

// 注册全局组件

Vue.component('v-distpicker', VDistpicker)

// 1.页面顶部导航
Vue.component('nav-main',NavMain);

// 2-1.页面底部导航--其他
Vue.component('nav-footer',NavFooter);

// 2-2.页面底部导航--首页
Vue.component('nav-bottom',NavBottom);

// 3.用户登录
Vue.component('user-login',Login);

// 4.用户注册
Vue.component('user-regist',Regist);

// 7.分页样式1
Vue.component('pagination',Pagination);



// 8.礼物
Vue.component('product',Product);


//帖子（人脉圈）右侧
Vue.component('post-right',PostRight);

//帖子（人脉圈）展示
Vue.component('post-show',PostLeft);

//帖子（人脉圈）回复展示
Vue.component('post-replyleft',PostReplyLeft);

//帖子详情左侧
Vue.component('post-detailleft',PostDetailLeft);



// 5.个人首页--nothing
Vue.component('personal-nothing',PersonalNothing);

// 6.个人首页--icon区
Vue.component('personal-header',PersonalHeader);


//为订单添加地址
Vue.component('user_addr',UserAddress);

// 8.我收藏的礼物
Vue.component('my-collection',MyCollection);

// 9.我收藏的帖子
Vue.component('collection-note',CollectionNote);

// 9.我收藏的攻略
Vue.component('collection-strategy',CollectionStrategy);






new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
