<template>
  <nav class="navbar navbar-default navbar-static-top">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header" id="header-content">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <!--<span class="glyphicon glyphicon-education" aria-hidden="true"></span>-->
        </button>
        <a class="navbar-brand navbar-icon" href="#">
          <!--<img src="../assets/nav/logo-header.png" alt="">-->
        </a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse row" id="bs-example-navbar-collapse-1">

        <ul class="nav navbar-nav hidden-sm" id="nav-top" style="font-size: 18px;margin-top: 5px">
          <li class="nav-first-images"></li>
          <li class="nav-first-navigation"><a href="#" class="nav-navigation"><router-link to="/">首页</router-link></a></li>
          <li><a href="#" class="nav-navigation"><router-link to="/gifts">创意礼物</router-link></a></li>
          <li><a href="#" class="nav-navigation">创意社区</a></li>
          <li><a href="#" class="nav-navigation">人脉圈</a></li>
          <li><a href="#" class="nav-navigation">关于我们</a></li>
        </ul>

        <!--搜索栏-->
        <form class="navbar-form hidden-sm hidden-md my-search">
          <div class="form-group">
            <input type="text" class="form-control my-search-input" placeholder="Search">
            <button class="my-search-icon btn btn-group-sm">
              <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
            </button>
          </div>
        </form>



        <!--个人中心模块-->
        <ul class="hidden-xs hidden-sm hidden-md my-nav-operate">

          <!--登录成功 显示用户头像-->
          <li id="my-show-operate" v-if="showStatus">
            <div class="my-notice-icon">
              <span class="glyphicon glyphicon-bell icon-notice" aria-hidden="true"></span>
            </div>

            <div class="nav-user-icon">
              <img src="../../assets/user-icon/2.jpg" alt="用户头像" class="img-circle my-nav-icon">
              <!--用户登录hover模块-->
              <div class="user-card">
                <div class="card-inner">
                  <div class="card-top">
                    <a href="#">
                      <img src="../../assets/user-icon/2.jpg" alt="用户登录头像">
                    </a>
                    <div class="card-top-right-box">
                      <a href="#">
                        <span class="name">Memorinal小怪咖</span>
                      </a>
                      <div class="meta">
                        <a href="#">
                          经验<b id="user-mp">30</b>
                        </a>
                        <a href="#">
                          积分<b id="user-credit">0</b>
                        </a>

                      </div>
                    </div>
                  </div>

                  <div class="user-center-box">
                    <ul>
                      <li class="l-style">
                        <router-link to="/">
                          <a href="#">
                            <span class="glyphicon glyphicon-gift" aria-hidden="true"></span>
                            我的礼物
                          </a>
                        </router-link>
                      </li>
                      <li class="l-style">
                        <router-link to="/">
                          <a href="#">
                            <span class="glyphicon glyphicon-tasks" aria-hidden="true"></span>
                            订单中心
                          </a>
                        </router-link>
                      </li>
                      <li class="l-style">
                        <router-link to="/">
                          <a href="#">
                            <span class="glyphicon glyphicon-modal-window" aria-hidden="true"></span>
                            礼物攻略
                          </a>
                        </router-link>
                      </li>
                      <li class="l-style">
                       <router-link to="/personal">
                         <a href="#">
                           <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
                           个人设置
                         </a>
                       </router-link>
                      </li>

                    </ul>
                  </div>

                  <div class="card-sets l-style">
                    <a href="#" @click="LoginOut()">安全退出</a>
                  </div>

                </div>
              </div>
            </div>
          </li>

          <!-- v-if 根据登录状态切换显示-->
          <ul class="user-operate hidden-xs hidden-sm hidden-md" v-else>

            <li class="li-login">
                <a href="#" @click.prevent.stop="UserLogin">登录</a>
            </li>
            <li class="li-sper">|</li>

            <li class="li-regist">
                <a href="#" @click.prevent.stop="userRegist">注册</a>
            </li>

          </ul>
        </ul>

        <!--购物车-->
        <div class="shop-cart hidden-xs hidden-sm hidden-md" id="shop-cart">
          <a href="#" class="shop-cart-icon">
            <span class="glyphicon glyphicon-shopping-cart icon-shopping-cart" aria-hidden="true"></span>
            <span>购物车</span>
          </a>
          <div class="my-cart">
            <div class="cart-title-box">
              <h2>我的购物车</h2>
              <h5>已加入<span class="incart-num">0</span>件礼物</h5>
            </div>
            <div class="cart-wrap">
              <div class="clear-cart">
                <span class="glyphicon glyphicon-shopping-cart cartIcon" aria-hidden="true"></span>
                <h3>购物车空空如也</h3>
                <div class="text">快去这里选购你中意的礼物</div>
                <p>
                  <a href="#" class="go-link">创意礼物</a>
                </p>
                <p>
                  <a href="#" class="go-link">礼物攻略</a>
                </p>
              </div>
            </div>

            <div class="more-box">
              <div class="show-box">
                    <span class="text">
                      <a href="#">我的订单中心</a>
                    </span>
                <a href="#" class="go-cart">去购物车</a>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>

    <!--用户登录-->
    <user-login v-if="loginStatus" @LoginSuccess="LoginFlushSelf" @UserRegist="LoginRegist" @IndexLogin="loginStatus=false"></user-login>

    <!--用户注册-->
    <user-regist v-if="registStatus" @RegistSuccess="RegistFlushSelf" @UserLogin="RegistLogin" @IndexRegist="registStatus=false"></user-regist>
  </nav>
</template>

<script>
export default {
  name: 'NavMain',
  inject: ['reload'],
  data () {
    return {
      // 用户登录状态
      loginStatus:false,
      // 用户注册状态
      registStatus:false,
      // 登录成功
      showStatus:false,
    }
  },
  created () {
    this.LoginFlushSelf();
    this.RegistFlushSelf();
  },

  methods:{
    // 登录成功
    LoginFlushSelf: function(){
      this.loginStatus=false;
      if(sessionStorage.getItem("token")){
        this.showStatus = true;
      }
      // vue实现刷新页面
      this.reload();
    },
    // 注册成功
    RegistFlushSelf:function () {
      this.registStatus=false;
      if(sessionStorage.getItem("token")){
        this.showStatus = true;
      }
      // vue实现刷新页面
      this.reload();
    },


    // 退出登录
    LoginOut:function(){
      window.sessionStorage.removeItem("telephone");
      window.sessionStorage.removeItem("token");
      window.sessionStorage.removeItem("u_id");

      this.showStatus = false;
    },

    // 用户Login
    UserLogin:function () {
      this.loginStatus=true
    },

    // 登录界面跳转注册界面
    LoginRegist:function(){
      this.loginStatus = false;
      this.registStatus = true;
    },

    // 用户Regist
    userRegist:function () {
      this.registStatus=true
    },

    // 注册界面跳转登陆界面
    RegistLogin:function () {
      this.loginStatus = true;
      this.registStatus = false;
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  a{
    text-decoration: none !important;
  }

  ul,li{
    list-style: none !important;

  }

  /*设置导航栏背景*/
  .navbar-default {
    background: #FFF;
  }

  /*[更多]去除背景*/
  .my-nav-dropdown-ul li a:hover {
    background: none;
  }

  /*logo图片*/
  .navbar-header a.navbar-icon {
    height: 60px;
    width: 220px;
    background: url("../../assets/nav/logo-header.png") center no-repeat;
    margin-left: 5px;
  }

  #header-content button {
    margin: 13px 30px 0 0;
  }

  /*顶部导航---search------------*/
  form.my-search {
    margin-top: 13px;
    float: left;
    position: relative;
  }

  @media (max-width: 767px) {
    form.my-search {
      position: relative;
      width: 100%;
      margin-left: 0;
    }

    form.my-search .my-search-icon {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 225px;
    }
  }

  @media (max-width: 767px) {
    #nav-top li{
      margin-left: 20px;
    }
  }

  form.my-search div.form-group {
    border-radius: 15px !important;
    width: 250px;
    border: solid 1px #777;
  }

  form.my-search .my-search-icon {
    position: absolute;
    right: 15px;
    top: 3px;
    color: #777;
    cursor: pointer;
    background: none;
    outline: none;
    box-shadow: none;
  }

  div.form-group input.my-search-input {
    border: none;
    background: none;
    box-shadow: none;
    margin-left: 8px;
    width: 85%;
  }


  /*登录成功展示用户icon,desc*/
  ul.my-nav-operate {
    position: relative;
  }

  li#my-show-operate {
    float: right;
    margin-top: 5px;
    margin-right: 30px;
  }

  li#my-show-operate div {
    float: left;
  }

  li#my-show-operate span.icon-notice {
    font-size: 25px;
    color: #787d82;
    margin: 14px 15px 0 50px;
  }

  li#my-show-operate span.icon-notice:hover {
    color: red;
    cursor: pointer;
  }

  .nav-user-icon{
    float:left;
    padding-bottom: 8px;
  }

  li#my-show-operate img.my-nav-icon{
    width: 45px;
    height: 45px;
    cursor: pointer;
    margin: 5px 10px 0 15px;
  }

  ul.my-nav-operate li#my-show-operate img:hover {
    box-shadow: 1px 1px 2px 2px lightgray;
  }

  /*[登录] [注册]*/
  .user-operate {
    float: right;
    /*用户登录注册*/
    display: block;
    margin-right: 30px;
    position: relative;
  }

  .user-operate li {
    float: left;
    margin-top: 20px;
  }

  .user-operate li a {
    font-size: 16px;
    color: #777;
    font-weight: 600;
  }

  .user-operate li a:hover {
    color: #444;
  }

  .user-operate li.li-sper {
    font-size: 20px;
    margin: 15px 5px 0 0;
    padding-left: 5px;
  }

  /*购物车*/
  .shop-cart {
    float: right;
    position: relative;
    height: 50px;
    margin-top: 5px;
  }

  .shop-cart .shop-cart-icon {
    height: 36px;
    line-height: 36px;
    border: 1px solid #D9DDE1;
    border-radius: 18px;
    display: inline-block;
    padding: 0 18px;
    width: auto;
    box-sizing: border-box;
    color: #787d82;
    text-align: center;
    transition: background-color .2s;
  }

  .shop-cart .shop-cart-icon .icon-shopping-cart {
    position: relative;
    color: #71777d;
  }

  .shop-cart .shop-cart-icon span:last-child {
    margin-left: 5px;
  }

  .shop-cart .shop-cart-icon:hover {
    background: antiquewhite;
  }

  .shop-cart .shop-cart-icon:hover > .icon-shopping-cart,
  .shop-cart .shop-cart-icon:hover > span:last-child {
    color: red;
  }

  .shop-cart .my-cart {
    padding: 0 12px;
    position: absolute;
    top: 49px;
    width: 350px;
    background: #fff;
    display: none;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .shop-cart .my-cart {
    right: 0;
    z-index: 99999;
    box-shadow: 0 8px 16px 0 rgba(7, 17, 27, .2);
    box-sizing: border-box;
  }

  .shop-cart:hover .my-cart {
    display: block;
  }

  .shop-cart .my-cart .cart-title-box {
    padding: 20px 12px;
    border-bottom: 1px solid #d9dde1;
  }

  .shop-cart .my-cart .cart-title-box h2 {
    font-size: 16px;
    color: #07111b;
    float: left;
    margin-top: -8px;

  }

  .shop-cart .my-cart .cart-title-box h5 {
    margin-top: -8px;
    font-size: 12px;
    color: #93999f;
    float: right;
  }

  .shop-cart .my-cart .cart-wrap .clear-cart {
    height: 284px;
    text-align: center;
  }

  .shop-cart .my-cart .cart-wrap .clear-cart .cartIcon {
    margin-top: 36px;
    margin-bottom: 12px;
    display: inline-block;
    width: 60px;
    height: 60px;
    line-height: 60px;
    background: #93999f;
    font-size: 36px;
    color: #fff;
    border-radius: 50%;
  }

  .shop-cart .my-cart .cart-wrap .clear-cart h3 {
    margin: 0 auto;
    width: 180px;
    padding-bottom: 24px;
    border-bottom: 1px solid #d9dde1;
    color: #4d555d;
    font-size: 14px;
    line-height: 14px;
  }

  .shop-cart .my-cart .cart-wrap .clear-cart .text {
    text-align: center;
    margin-top: 24px;
    margin-bottom: 16px;
    font-size: 12px;
    line-height: 12px;
    color: #93999f;
  }

  .shop-cart .my-cart .cart-wrap .clear-cart .go-link {
    display: block;
    color: rgba(240, 20, 20, .6);
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 16px;
  }

  .shop-cart .my-cart .more-box {
    padding: 16px 12px;
    border-top: 1px solid #d9dde1;
  }

  .shop-cart .my-cart .more-box .show-box {
    height: 38px;
    line-height: 38px;
  }

  .shop-cart .my-cart .more-box .show-box .text {
    font-size: 12px;
    color: #93999f;
    line-height: 38px;
  }

  .shop-cart .my-cart .more-box .go-cart {
    float: right;
    color: #fff;
    font-size: 12px;
    line-height: 12px;
    font-weight: 700;
    padding: 12px 16px;
    background: rgba(240, 20, 20, .8);
    border-radius: 16px;
    border: solid 1px rgba(240, 20, 20, .8);
    cursor: pointer;
    transition: all .3s;
    outline: none;
  }

  /*用户登录模块*/
  .user-card{
    position: absolute;
    right: 30px;
    top: 65px;
    width: 306px;
    box-shadow: 0 8px 16px 0 rgba(7,17,27,.2);
    z-index: 1000;
    display: none;
  }

  .user-card, .user-card .card-inner {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .user-card .card-inner {
    background-color: #fff;
    padding: 24px;
    box-sizing: border-box;
  }

  .user-card .card-top {
    color: #93999f;
    position: relative;
  }

  .user-card .card-top a {
    color: #93999f;
    display: inline-block;
    float: left;
  }

  .user-card .card-top img {
    float: left;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    border: 2px solid #fff;
    margin-right: 12px;
  }

  .user-card .card-top .card-top-right-box {
    margin-top: 14px;
    float: left;
  }

  .user-card .card-top .name {
    display: inline-block;
    font-size: 16px;
    color: #07111b;
    width: 170px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .user-card .card-top .meta {
    clear: both;
    font-size: 12px!important;
  }

  .user-card .card-top .meta a {
    margin-right: 12px;
  }

  .user-card .card-top .meta b {
    margin-left: 2px;
    font-weight: bold;
  }

  .user-card .user-center-box {
    margin-top: 16px;
    margin-bottom: 14px;
    padding-bottom: 16px;
    border-bottom: 1px solid #edf1f2;
  }

  .user-card .user-center-box ul{
    padding: 0;
  }


  .user-card .user-center-box ul li {
    position: relative;
    width: 120px;
    height: 36px;
    background: #F8FAFC;
    border-radius: 2px;
    line-height: 36px;
    color: #4d555d;
    font-size: 12px;
    margin: 0 6px 8px 3px;
    box-sizing: border-box;
    padding: 0;
  }

  .l-style{
    float: left;
  }

  .user-card .user-center-box ul li a {
    width: 100%;
    height: 36px;
    line-height: 36px;
    padding-left: 12px;
    text-align: left;
    box-sizing: border-box;
    color: #787d82;
    transition: background-color .2s;
  }

  .user-card .user-center-box ul a span {
    position: relative;
    top: 3px;
    font-size: 16px;
  }

  .user-card .user-center-box ul li:hover{
    background: lightgray;
  }

  .user-card .card-sets {
    margin-top: 16px;
    font-size: 12px;
    line-height: 12px;
  }

  .user-card .card-sets a {
    color: #93999F;
    font-size: 14px;
    font-weight: 500;
  }

  .user-card .card-sets a:hover{
    color: #5e5e5e;
  }

  .nav-user-icon:hover div.user-card{
    display: block;
  }










</style>
