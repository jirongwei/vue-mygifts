<template>

    <div>
      <div class="allContent">
        <personal-header></personal-header>

        <div id="content-container" class="container">
          <ul class="nav nav-tabs clearfix">
            <li>
              <router-link to="/personal">
                <a href="#">个人介绍</a>
              </router-link>
            </li>
            <li>
              <router-link to="/receive">
                <a href="#" >我的礼物</a>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <a href="#" >我的点赞</a>
              </router-link>
            </li>
          </ul>

          <div class="cart" style="margin-top: 20px;">
            <div class="container" style="margin-right: 0;margin-left: -15px">

              <!--订单导航-->
              <div class="order_nav">
                <ul>
                  <li><a href="" :class="{on: this.nav=='all'}" @click.prevent="chengenav('all')">全部订单</a></li>
                  <li><a href="" :class="{on: this.nav=='nopay'}"  @click.prevent="chengenav('nopay')">未支付订单</a></li>
                  <li><a href="" :class="{on: this.nav=='nofinish'}"  @click.prevent="chengenav('nofinish')">未完成订单</a></li>
                  <li><a href="" :class="{on: this.nav=='history'}"  @click.prevent="chengenav('history')">历史订单</a></li>
                </ul>
              </div>


              <!-- 订单车详情头 -->
              <table class="cart-header">
                <tbody>
                <tr>
                  <td class="cart-col-select col-md-3 col-xs-4 col-sm-4">

                    <span class="cart-select-title">订单列表</span>

                  </td>
                  <td class="cart-col-price col-md-3 hidden-xs hidden-sm">商品信息</td>
                  <td class="cart-col-number col-md-2 hidden-xs hidden-sm">数量</td>
                  <td class="cart-col-total col-md-2 hidden-xs hidden-sm">总金额</td>
                  <td class="cart-col-ctrl col-md-2 hidden-xs hidden-sm">订单状态</td>
                </tr>
                </tbody>
              </table>

              <!-- 订单信息列表 -->
              <div class="cart-merchant-list">
                <div class="cart-merchant">
                  <table class="cart-merchant-body">
                    <tbody>
                    <tr class="cart-product" v-for="good in goodsList">

                      <!--商品主图片-->
                      <td class="cart-col-select col-md-3 col-xs-4 col-sm-4">
                        <a href="#" class="cart-product-link">
                          <img :src="good.gifts__giftImg" class="cart-product-img" alt="" width="50">
                        </a>
                      </td>

                      <!--商品名字-->
                      <td class="cart-col-name col-md-3 col-xs-8 col-sm-8">
                        <a href="#" class="cart-product-link">
                          <p v-text="good.gifts__gift_name"></p>
                        </a>
                        <span class="cart-product-desc" v-text="good.gifts__descr"></span>
                      </td>

                      <!--商品数量-->
                      <td class="cart-col-price col-md-2 hidden-xs hidden-sm">
                        <p>
                          <span  v-text="good.cart_num"></span>
                        </p>
                      </td>


                      <!--金额-->
                      <td class="cart-col-total col-md-2 hidden-xs hidden-sm">
                        <span class="cart-product-price total" >{{good.gifts__price*good.cart_num}}</span>
                      </td>

                      <!--订单状态-->
                      <td class="cart-col-ctrl col-md-2 hidden-xs hidden-sm">
                        <span v-text="good.order_status"></span>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <pagination :currentPage="page" :pageCount="parseInt(pagecount)" @prePage="prePage" @nextPage="nextPage" @jumpPage="jumpPage"></pagination>


            </div>

          </div>
        </div>
      </div>
      <NavFooter></NavFooter>
    </div>




</template>

<script>
  import axios from 'axios'
  import NavFooter from '../public/NavFooter'
export default {
  name: 'GiftCart',
  data () {
    return {
      userid:1,
      page:1,
      pagecount:"",
      goodsList:[{
        cart_num: 1,
        gifts__descr: "FlowerSong系列：厄瓜多尔粉玫瑰1朵(直径6-7cm)，进口双色绣球、白色小星花，米花",
        gifts__giftImg: "http://img.cocodiy.com/Images/200/113s.jpg",
        gifts__gift_name: "忘情巴黎--33枝红玫瑰",
        gifts__price: 198,
        gifts_id: 1,
        order_status:"未支付",
        order_time:""
      }],
      nav:"all"
    }

  },
  mounted:function(){
    this.changeOrderShow();
    this.getpagesize()
  },
  components:{
    NavFooter
  },

  methods: {
    //改变导航条
    chengenav:function (navshuxing) {
      this.nav=navshuxing;
      console.log(this.nav);
      this.page=1;
      this.changeOrderShow()
      this.getpagesize()
    },

    //  改变订单显示
    changeOrderShow:function(){
      let vm=this;
      axios.get(this.GLOBAL.HOST+"gift/showorder/"+this.userid+','+this.nav+","+this.page)
        .then(function (response) {
          console.log(response.data)
          vm.goodsList=response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    // 分页组件
    prePage() {
      this.page--;
      this.changeOrderShow();
    },
    nextPage() {
      this.page++;
      // 重新渲染数据
      this.changeOrderShow();
    },
    jumpPage(pageIndex) {
      if (pageIndex > this.pageCount) {
        pageIndex = this.pageCount
      }
      if (!pageIndex || pageIndex < 1) {
        pageIndex = 1
      }
      this.page = pageIndex;
      this.changeOrderShow();
    },
    getpagesize:function () {
      let vm=this;
      axios.get(this.GLOBAL.HOST+"gift/getorderpage/"+this.userid+','+this.nav)
        .then(function (response) {
          console.log(response.data)
          vm.pagecount=response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }

  },




}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  body{
    padding: 0;
  }

  ul li{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  .allContent{
    margin-top: -20px;
  }
  .cart{
    min-height: 600px;
    padding-bottom:100px;
    margin-top: 10px;

  }


  /*personal展示区域*/
  #content-container{
    margin: 30px auto;
    min-height: 400px;
  }

  @media (max-width: 767px){
    #content-container {
      min-height: 250px;
    }
  }


  .nav.nav-tabs{
    position: relative;
    margin-bottom: 25px;
    border-bottom: solid 2px #e8e8e8;
  }

  .nav.nav-tabs li{
    margin-bottom: 0;
  }

  @media(max-width: 1199px){
    .nav.nav-tabs li a{
      padding: 5px 5px 10px;
      font-size: 14px;
    }
  }

  .nav.nav-tabs li a{
    border: none;
    margin-right: 0;
    font-weight: 500;
    font-size: 16px;
    transition: all 0.3s ease;
    color: #0099e5;
    text-decoration: none;
  }


  /*personal-content----------*/
  .content{
    min-height: 500px;
    background: #fff;
    position: relative;
    padding-bottom: 20px;
  }


  /*订单头部*/
  .order_nav{
    width: 100%;
    height:60px;
    background-color: white;
    padding: 16px 0;
    box-sizing: border-box;
  }
  /*.order_nav ul{*/
    /*min-height: 750px;*/
    /*background-color: white;*/
  /*}*/
  .order_nav ul li{
    padding: 0 20px;
    box-sizing: border-box;
    display: inline-block;
  }
  .order_nav ul li a{
    color:black;
    cursor: pointer;
    font-size: 1.2em;
    font-weight: 400;
  }
  .order_nav ul li .on{
    color: #ff8000;
  }



  /*购物车主体部分*/
  .mainbody{
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  /*购物车详情头*/
  .cart .cart-header {
    width: 100%;
    height: 50px;
    margin-top: 10px;
    background-color: #fff;
    color: #333;
    border-bottom: 1px solid #efefef;
  }
  .cart .cart-select-all .cart-select-title {
    display: inline-block;
    vertical-align: middle
  }
  .cart .mz-checkbox {
    margin-right: 10px
  }
  .cart .cart-col-name {
    text-align: left;
  }

  .cart .cart-col-price {
    text-align: center
  }

  .cart .cart-col-number {
    text-align: center
  }

  .cart .cart-col-total {
    text-align: center
  }

  .cart .cart-col-ctrl {
    text-align: right;
    padding-right: 40px
  }

  /*顶部全选按钮*/
  .mz-checkbox {
    display: inline-block;
    width: 17px;
    height: 17px;
    border: 1px solid #bdbdbd;
    border-radius: 2px;
    background-color: #fff;
    text-align: center;
    font-size: 10px;
    line-height: 17px
  }


  /*此处注意: 点击改变状态*/
  .mz-checkbox.checked {
    border-color: #00c3f5;
    background-color: #00c3f5
  }
  .mz-checkbox.checked:before {
    content: '\e013';
    color: #fff;
    font-family: 'Glyphicons Halflings';
  }

  .cart .cart-col-select {
    text-align: left;
    padding-left: 30px;
  }
  .cart .cart-select-all {
    display: inline-block;
    color: #333;
    line-height: 0
  }
  .cart .cart-select-all,.mz-checkbox {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    cursor: pointer
  }

  /*购物清单信息列表*/
  .cart-merchant,.cart-merchant-list {
    width: 100%;
    margin-bottom: 10px;
  }
  .cart-merchant {
    background-color: #fff;
  }
  .cart-merchant.disabled {
    background-color: #fafafc;
  }
  .cart-merchant.disabled .cart-merchant-body {
    width: 100%;
    opacity: .5;
  }
  .cart-merchant.disabled .cart-product-price.total,.cart-merchant.disabled .cart-product-remove {
    color: #666;
  }

  .cart-merchant.disabled .cart-product-remove:hover {
    background-color: #ddd
  }


  .cart-merchant .cart-merchant-header .cart-select-all {
    color: #666;
    font-weight: 400;
  }

  .cart-merchant .cart-merchant-body {
    width: 100%;
    border-bottom: 1px solid #efefef;
  }
  .cart-merchant-body tbody{
    width: 100%;
  }
  .cart-product {
    width: 100%;
    height: 150px;
    border-top: 1px solid #efefef;
  }
  .cart-product .cart-product-link {
    display: inline-block;
    vertical-align: middle;
    color: #666;
  }
  .cart-product .cart-col-select .cart-product-link {
    margin-left: 35px
  }

  .cart-product .cart-col-name .cart-product-link {
    display: inline;
    line-height: 22px;
    width: 100%
  }
  .cart-product .cart-product-img {
    width: 100px;
    height: 100px
  }
  .cart-product .cart-col-name p {
    width: 256px;
    height: 1.5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .cart-product .cart-col-name .cart-product-desc {
    color: #999;
    font-size: 12px;
  }
  .cart-product .cart-product-price {
    font-size: 16px;
    color: #666;
    font-weight: bolder
  }
  .cart-product .cart-product-price:before {
    content: '￥'
  }
  .cart-product .cart-product-number-adder {
    position: relative
  }

  .cart-product .cart-product-number-max {
    display: none;
    position: absolute;
    top: 46px;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 14px;
    margin-top: 4px;
    color: #999
  }

  .cart-product .cart-product-number-max.show {
    display: block
  }
  .cart-product .cart-product-discount,.cart-product .cart-product-remove,.cart-product .mz-adder {
    display: inline-block;
    vertical-align: middle
  }

  .mz-adder {
    width: 140px;
    height: 40px;
    border: 1px solid #efefef;
    border-radius: 4px;
    background-color: #fff
  }
  .mz-adder .mz-adder-add,.mz-adder .mz-adder-subtract {
    position: relative;
    float: left;
    width: 40px;
    height: 100%;
    cursor: pointer;
    background-color: transparent;
    outline: 0;
    padding: 0;
    margin: 0;
    border: none
  }

  .mz-adder .mz-adder-add:after,.mz-adder .mz-adder-add:before,.mz-adder .mz-adder-subtract:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transition: background-color .5s
  }

  .mz-adder .mz-adder-add.disabled,.mz-adder .mz-adder-subtract.disabled {
    cursor: no-drop
  }

  .mz-adder .mz-adder-add:before,.mz-adder .mz-adder-subtract:before {
    margin-top: -1px;
    margin-left: -6px;
    width: 12px;
    height: 2px;
    background-color: #333
  }

  .mz-adder .mz-adder-add:hover:before,.mz-adder .mz-adder-subtract:hover:before {
    background-color: #00c3f5
  }

  .mz-adder .mz-adder-add.disabled:before,.mz-adder .mz-adder-subtract.disabled:before {
    background-color: #999!important
  }

  .mz-adder .mz-adder-num {
    float: left;
    width: 58px;
    height: 100%;
    line-height: 40px;
    text-align: center;
    border-left: 1px solid #efefef;
    border-right: 1px solid #efefef
  }
  .mz-adder .mz-adder-num .mz-adder-input {
    width: 100%;
    height: 100%;
    border: none;
    outline: 0;
    padding: 0;
    margin: -4px 0 0;
    background-color: transparent;
    font-size: 14px;
    color: #333
  }

  .mz-adder .mz-adder-add:hover:after {
    background-color: #00c3f5
  }

  .mz-adder .mz-adder-add.disabled:after {
    background-color: #999!important
  }

  .mz-adder .mz-adder-add:after {
    margin-top: -6px;
    margin-left: -1px;
    width: 2px;
    height: 12px;
    background-color: #333
  }

  .mz-adder .mz-adder-num .mz-adder-input,.mz-btn {
    display: inline-block;
    text-align: center;
    vertical-align: middle
  }
  .cart-product .cart-product-remove {
    width: 24px;
    height: 24px;
    border-radius: 100%;
    background-color: transparent;
    transition: all .7s;
    text-align: center;
    line-height: 24px;
    font-size: 14px;
    cursor: pointer;
    color: #bdbdbd;
  }
  .cart-product .cart-product-remove:hover {
    background-color: #efefef;
  }

  /*结算详情*/
  .cart-footer {
    position: relative;
    width: 100%;
    height: 70px;
    font-size: 14px;
    color: #666;
    line-height: 67px;
    transition: background-color 1s;
  }

  .cart-footer .container {
    width: 1142px;
    background-color: #fff;
    height: 100%;
    padding-left: 0;
  }

  .cart-footer.fixed {
    position: fixed;
    z-index: 999;
    bottom: 0;
    left: 0;
    margin-bottom: 0;
    box-shadow: 0 -2px 5px rgba(153,153,153,.2);
    background-color: rgba(255,255,255,.95)
  }

  .cart-footer .cart-footer-left {
    padding-left: 30px;
    height: 100%
  }

  .cart-footer .cart-footer-right {
    height: 100%;
    padding-left: 30px
  }

  .cart-footer .cart-remove-selected {
    color: #999;
    margin: 0 30px 0 20px;
    cursor: pointer;
    vertical-align: middle
  }

  .cart-footer .cart-footer-count,.cart-footer .cart-footer-sum {
    vertical-align: middle
  }

  .cart-footer .cart-footer-num {
    margin: 0 5px;
    color: #333;
    font-weight: bolder
  }

  .cart-merchant,.cart-merchant-list {
    margin-bottom: 10px
  }

  .cart-footer .cart-footer-num.blue {
    color: #00c3f5
  }

  .cart-footer .cart-footer-num.red {
    color: #e02b41
  }

  .cart-footer .cart-footer-total {
    font-size: 20px;
    font-weight: bolder;
    color: #e02b41;
    margin-right: 30px;
    vertical-align: baseline
  }

  .cart-footer .cart-footer-total:before {
    content: '￥';
  }
  .mz-btn {
    border-style: solid;
    border-width: 1px;
    border-radius: 4px;
    outline: 0;
    cursor: pointer;
    font-size: 14px;
    min-width: 58px;
    min-height: 34px;
    line-height: 34px;
    transition: .5s all;
    padding: 0 20px
  }
  .mz-btn.success {
    color: #fff;
    border-color: #00c3f5;
    background-color: #00c3f5
  }

  .mz-btn.success:hover {
    border-color: #40d2f8;
    background-color: #40d2f8
  }

  .mz-btn.success:active {
    border-color: #08Aee2;
    background-color: #08Aee2;
  }

</style>
