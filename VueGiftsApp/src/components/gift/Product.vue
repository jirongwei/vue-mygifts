<template>
  <!--导航栏部分-->
  <div>
    <div class="search-nav text-center">
      <!--搜索-->
      <div class="search">
        <div class="search-ipt">
          <div class="ipt">
            <input type="text" placeholder="搜索感兴趣礼物" v-model="con" @keydown.enter="getAllSelect">
          </div>
          <div class="search-icon" @click.prevent.stop="getAllSelect">
            <span></span>
          </div>
        </div>
      </div>
      <!--导航-->
      <!--节日-->
      <div style="position: relative; display: inline-block;" class="text-left">
        <!--对象-->
        <div class="nav-part nav-cate">
          <span class="title">对象:</span>
          <ul id="ul-category">
            <li :key="0">
            <span :class="{gray_white:cur_obj_id==='0'}" :obj-id="0"
                  @click.prevent.stop="objChange"
            >全部
            </span>
            </li>
            <!--模板-->
            <li v-for="obj in type_obj" :key="obj.id">
            <span :class="{gray_white:parseInt(cur_obj_id)===obj.id}"
                  :obj-id="obj.id" v-text="obj.typename" @click.prevent.stop="objChange"
            >
            </span>
            </li>
          </ul>
        </div>
        <div class="nav-part">
          <span class="title">节日:</span>
          <ul id="ul-direction">
            <li :key="0">
            <span :day-id="0" :class="{gray_white:cur_day_id==='0'}"
                  @click.prevent.stop="dayChange"
            >全部
            </span>
            </li>
            <!--模板-->
            <li v-for="dire in type_day" :key="dire.id">
            <span :class="{gray_white:parseInt(cur_day_id)===dire.id}"
                  :day-id="dire.id" v-text="dire.dayname" @click.prevent.stop="dayChange"
            >
            </span>
            </li>
          </ul>
        </div>
        <!--难度-->
        <div class="nav-part">
          <span class="title">排序:</span>
          <ul id="ul-degree">
            <li>
            <span :sort-id="0" :class="{gray_white:cur_sort_id==='0'}"
                  @click.prevent.stop="sortChange"
            >默认
            </span>
            </li>
            <li>
            <span :sort-id="1" :class="{gray_white:cur_sort_id==='1'}"
                  @click.prevent.stop="sortChange"
            >时间升序
            </span>
            </li>
            <li>
            <span :sort-id="2" :class="{gray_white:cur_sort_id==='2'}"
                  @click.prevent.stop="sortChange"
            >时间降序
            </span>
            </li>
            <li>
            <span :sort-id="3" :class="{gray_white:cur_sort_id==='3'}"
                  @click.prevent.stop="sortChange"
            >价格升序
            </span>
            </li>
            <li>
            <span :sort-id="4" :class="{gray_white:cur_sort_id==='4'}"
                  @click.prevent.stop="sortChange"
            >价格降序
            </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="gifts-list">
      <div class="gifts-container" v-for="list in select_list">

        <router-link :to="{name:'giftInfo',params: {giftid:list.id}}">
          <div class="gift-card-top">
            <img :src="list.giftImg" alt="" style="display: inline">
          </div>
        </router-link>

        <router-link :to="{name:'giftInfo',params: {giftid:list.id}}">
          <div>
            <div class="gift-card-content">
              <h3 class="gift-card-name" v-text="list.gift_name"></h3>
            </div>
          </div>
        </router-link>

        <div class="gift-card-bottom">
          <div class="gift-card-info">
            <span v-text="'￥'+list.price"></span>
          </div>


          <div class="like-num" v-if="showCollect">
            <span class="glyphicon glyphicon-heart" aria-hidden="true"
                   :id="list.id" @click="thumbupGift">
            </span>
            <span class="num" v-text="list.clicknum"></span>
          </div>
          <div class="like-num" v-else>
            <span class="glyphicon glyphicon-heart" aria-hidden="true"
                  :class="{selectedStatus:list.giftscollect__collectStatus ?true:false}" :id="list.id" @click="thumbupGift">
            </span>
            <span class="num" v-text="list.clicknum"></span>
          </div>

        </div>

        <p class="gift-card-desc" v-text="list.remark"></p>


      </div>


    </div>

    <pagination :currentPage="currentPage" :pageCount="parseInt(pageCount)" @prePage="prePage" @nextPage="nextPage" @jumpPage="jumpPage" id="gifts-pagination"></pagination>

    <NavFooter></NavFooter>

    <NotLogin v-if="showTip" @sureclick="showTip=false"></NotLogin>


  </div>

</template>

<script>

  import axios from 'axios'
  import $ from 'jquery'
  import NavFooter from '../public/NavFooter'
  import '../../../static/js/message'
  import NotLogin from './NotLogin'

export default {
  name: 'Product',
  data:function () {
    return{
      showTip:false,
      currentPage:1,
      pageCount:'',
      type_obj:[],  // 搜索导航对象
      type_day:[],  // 搜索导航节日

      cur_day_id:'0', // 节日选中搜索条件
      cur_obj_id:'0', //  对象选中所搜条件
      cur_sort_id:'0',// 排序选中搜索条件
      con:'',     // 搜索栏
      select_list:[],

      thumb_id:'',
      showCollect:true,


    }
  },
  components:{
    NavFooter,
    NotLogin
  },
  created:function(){

  },
  mounted:function(){
    if(window.sessionStorage.getItem("token")){
      this.showCollect = false;
    }else{
      this.showCollect = true;
    }
    this.getGiftsType();  // 礼物组合条件搜索
    this.getAllGifts();   // 展示礼物
    this.getAllPages();   // 获取总页数
  },

  updated: function () {
    // 处理分类导航 hover 显示全部(jQuery 操作DOM元素)
    let $NavCate = $('.nav-cate');
    let CateH = $NavCate.height();
    if (CateH > 140) {
      $NavCate.addClass('nav_cate');
      $NavCate.next().css('marginTop', '150px')
    } else {
      $NavCate.removeClass('nav_cate');
      $NavCate.next().css('marginTop', '0')
    }
  },

  methods:{
    // 节日导航点击
    dayChange:function (e) {
      let $day_id = $(e.target).attr('day-id');
      this.cur_day_id = $day_id;
      this.currentPage = 1;
      this.getAllGifts();
      this.getAllPages();
    },
    // 对象导航点击
    objChange:function(e){
      let $obj_id = $(e.target).attr('obj-id');
      this.cur_obj_id = $obj_id;
      this.currentPage = 1;
      this.getAllGifts();
      this.getAllPages();
    },
    // 排序导航点击
    sortChange:function(e){
      let $sort_id = $(e.target).attr('sort-id');
      this.cur_sort_id = $sort_id;
      this.currentPage = 1;
      this.getAllGifts();
      this.getAllPages();
    },

    // 礼物搜索条件
    getGiftsType:function(){
      let vm=this;
      axios.get(this.GLOBAL.HOST+'gift/type')
        .then(function (response) {
          vm.type_obj=response.data.type_obj;
          vm.type_day=response.data.type_day;
        })
        .catch(function (error) {
          console.log(error)
        });
    },

   // 多条件查询礼物
    getAllGifts:function(){
      let vm=this;
      axios.get(this.GLOBAL.HOST+'gift/getSelectGifts/'+ this.cur_day_id +','+this.cur_obj_id+','+
        this.cur_sort_id+','+this.con+','+this.currentPage+'/')
        .then(function (response) {
          vm.select_list=response.data.gifts;
        })
        .catch(function (error) {
          console.log(error)
        });
    },
    // 获取总页数
    getAllPages:function(){
      let vm=this;
      axios.get(this.GLOBAL.HOST+'gift/getAllPages/'+ this.cur_day_id +','+this.cur_obj_id+','+
        this.cur_sort_id+','+this.con+','+this.currentPage+'/')
        .then(function (response) {
          vm.pageCount=Math.ceil(response.data.count/8);
          vm.currentPage=1;
        })
        .catch(function (error) {
          console.log(error)
        });

    },
    // 搜索查询
    getAllSelect:function(){
      this.currentPage = 1;
      this.getAllGifts();
      this.getAllPages();
    },


    // 点赞
    thumbupGift:function(e){

      if(window.sessionStorage.getItem("token")){
        let obj = e.target.id;
        this.thumb_id = obj;
        if (e.target.className.toString().indexOf('selectedStatus') != -1) {
          $(e.target).removeClass('selectedStatus');
          this.click_num --;
        }else {
          $(e.target).addClass('selectedStatus');
          this.click_num ++;
        }
        let vm = this;
        // 发送axios请求数据
        axios({
          method:'POST',
          url:this.GLOBAL.HOST+'gift/thumbGift/'+vm.thumb_id+'/',
          headers:{"token":window.sessionStorage.getItem("token")}
        })
        .then(function (response) {
          if(response.data.code === '808'){
            vm.getAllGifts();
            $.message({
              message:'收藏成功！',
              type:'success'
            });
          }else if(response.data.code ==='809'){
            vm.getAllGifts();
            $.message({
              message:'取消收藏！',
              type:'success'
            });
          }
        })
        .catch(function (error) {
          console.log(error)
        });
      }else{
        this.showTip = true;
      }

    },



    // 分页
    prePage() {
      this.currentPage--;
      this.getAllGifts();
    },
    nextPage() {
      this.currentPage++;
      // 重新渲染数据
      this.getAllGifts();
    },
    jumpPage(pageIndex) {
      if (pageIndex > this.pageCount) {
        pageIndex = this.pageCount
      }
      if (!pageIndex || pageIndex < 1) {
        pageIndex = 1
      }
      this.currentPage = pageIndex;
      this.getAllGifts();
    }




  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*已点赞*/
  .selectedStatus{
    color: #FF4949 !important;
  }
  /*改变收藏样式*/
  .numStatus{
    color: #FF4949 !important;
  }

  ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a{
    text-decoration: none;
  }
  /*搜索和导航*/
  .search-nav {
    margin-top: -20px;
    margin-bottom: 20px;
    width: 100%;
    /*border-bottom: 1px solid gray;*/
    box-shadow: 0 2px 15px gray;
  }
  /*搜索部分-开始*/
  .search-nav .search {
    width: 1100px;
    height: 85px;
    line-height: 85px;
    margin: auto;
    border-bottom: 1px solid lightgray;
  }

  /*搜索div*/
  .search-nav .search .search-ipt {
    width: 500px;
    height: 40px;
    float: right;
    margin-right: -15px;
  }

  .search-nav .search .search-ipt > div {
    float: left;
  }

  /*搜索输入框*/
  .search-nav .search .search-ipt .ipt input {
    outline: none;
    width: 445px;
    height: 40px;
    background: white;
    padding: 0 15px;
    box-sizing: border-box;
    border: none;
    border-radius: 10px 0 0 10px;
    font-size: 1.1em;
    color: gray;

  }

  /*搜索图标*/
  .search-nav .search .search-ipt .search-icon {
    width: 40px;
    height: 40px;
    margin-top: 22px;
    border-radius: 0 10px 10px 0;
    box-sizing: border-box;
    background: white;
  }

  .search-nav .search .search-ipt .search-icon span {
    display: inline-block;
    width: 100%;
    height: 100%;
    background: url("../../assets/my-icons/search.svg") no-repeat 8px 1px;
  }

  .search-nav .search .search-ipt .search-icon span:hover {
    cursor: pointer;
  }

  /*搜索部分-结束*/
  /*导航部分*/
  .search-nav .nav-part {
    width: 1100px;
    border-bottom: 1px solid whitesmoke;
    box-sizing: border-box;
    margin: auto;
  }

  /*节日、对象、难度*/
  .search-nav .nav-part .title {
    display: inline-block;
    width: 60px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
    position: absolute;
  }

  .search-nav .nav-part ul {
    width: 1040px;
    margin-left: 60px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
  }

  .search-nav .nav-part > ul li {
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
  }

  .search-nav .nav-part li span {
    padding: 5px;
    border-radius: 10px;
    color: black;
  }

  .search-nav .nav-part li span:hover {
    color: white;
    background: #bebebe;
    cursor: pointer;
  }

  #ul-category, #ul-direction {
    border-bottom: 1px solid lightgray;
  }
  .nav_cate{
    position: absolute;
    left: 0;
    max-height: 150px;
    overflow: hidden;
  }
  .nav_cate:hover {
    border-radius: 20px;
    background: ghostwhite;
    box-shadow: 0 0 5px gray;
    max-height: 300px;
    z-index: 3;
  }
  .gray_white {
    background: rgba(242,13,13,.06);
    color: #F20D0D !important;
  }
  .margin_top{
    margin-top: 150px;
  }

  /*礼物展示部分*/
  .gifts-list{
    padding: 10px 0 20px;
    width: 1152px;
    min-height: 500px;
    margin: auto;
    margin-bottom: 20px;
    overflow: hidden;
  }

  .gifts-list .gifts-container{
    float: left;
    margin: 0 40px 25px 32px;
    height: auto;
    width: 216px;
    position: relative;
    cursor: pointer;
    min-height: 348px;
  }

  .gifts-list .gifts-container:hover{
    transition: box-shadow 0.3s linear 0.1s;
    box-shadow: 0 3px 5px 2px #dadada;
    border-radius: 12px;
  }

  .gifts-list .gifts-container .gift-card-top{
    width: 216px;
    height: 220px;
    position: relative;
    border-radius: 8px;
    transition: all .3s;
    background: yellow;
  }

  .gifts-list .gifts-container .gift-card-top img{
    width: 100%;
    height: 100%;
    background-color: #f3f5f7;
    border-radius: 8px;
    border: 0;
  }

  .gifts-container .gift-card-content .gift-card-name{
    font-size: 16px;
    color: #07111B;
    line-height: 18px;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-height: 46px;
    transition: all .3s;
    font-weight: 400;
    margin-top: 8px;
    margin-left: 8px;
  }

  .gifts-container .gift-card-content .gift-card-name:hover{
    color: #FF4949;
  }

  .gift-card-bottom .gift-card-info{
    float: left;
  }

  .gift-card-bottom .gift-card-info{
    font-size: 12px;
    color: #93999F;
    line-height: 24px;
    font-weight: 400;
    margin-top: 2px;
  }


  .gift-card-bottom .gift-card-info span{
    margin-right: 12px;
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    font-family:  Georgia, "Times New Roman", Times, serif;
    color: #FF4949;
    margin-left: 8px;
  }

  .gift-card-bottom .like-num{
    display: inline-block;
    margin-top: 4px;
    margin-left: 15px;
  }

  .gift-card-bottom .like-num span:first-child{
    color: #93999F;
  }

  .gift-card-bottom .like-num span:last-child{
    font-family:  Georgia, "Times New Roman", Times, serif;
    font-size: 16px;
    color: #93999F;
  }

  .gift-card-desc{
    font-size: 12px;
    font-weight: 300;
    color: #93999F;
    line-height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 44px;
    margin: 2px 8px;
  }

  #gifts-pagination{
    margin-bottom: 40px;
  }


</style>
