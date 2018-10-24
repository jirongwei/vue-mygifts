<template>
  <div class="container" id="gifts">
    <div class="container" id="gifts-content">
      <!-------------------------搜索部分----------------------------------------->
      <div class="row mynav">
        <div class="col-md-6 liwu">
          <div class="daifudong">
            <div class="glyphicon glyphicon-menu-down" @click="show=!show">礼物分类</div>
          </div>
        </div>
        <div class="col-md-4 search">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search for..." v-model="con">
            <span class="input-group-btn" style="height: 34px">
            <button class="btn btn-default btnsearch" type="button" @click="getAllSelect">Go!</button>
          </span>
          </div>
        </div>
      </div>

      <transition name="slide-fade">
        <div class="fudong1" v-if="show">
          <div class="container-sortbegin">
            <div class="container-sort-1">节日：</div>
            <div class="container-sort-2" >
              <a href="#" class="container-sort-2-a" :day-id="0" :class="{myDayActive:cur_day_id==='0'}" @click="dayChange">全部</a>
              <a href="#" class="container-sort-2-a" :day-id="i.id" v-for="i in type_day"
                 @click="dayChange" v-text="i.dayname" :class="{myDayActive:parseInt(cur_day_id)===i.id}">
              </a>
            </div>

          </div>
          <div class="container-sortbegin">
            <div class="container-sort-1">类型：</div>

            <div class="container-sort-2" >
              <a href="#" class="container-sort-2-a"  :obj-id="0" :class="{myDayActive:cur_obj_id==='0'}" @click="objChange">全部</a>
              <a href="#" class="container-sort-2-a" :obj-id="i.id"  v-for="i in type_obj" v-text="i.typename"
                 @click="objChange"  :class="{myDayActive:parseInt(cur_obj_id)===i.id}"></a>
            </div>

          </div>
          <div class="container-sortbegin">
            <div class="container-sort-1">排序：</div>
            <div class="container-sort-2">
              <a href="#" class="container-sort-2-a" :sort-id="0" :class="{myDayActive:cur_sort_id==='0'}" @click="sortChange">默认</a>
              <a href="#" class="container-sort-2-a" :sort-id="1" :class="{myDayActive:cur_sort_id==='1'}" @click="sortChange">时间升序</a>
              <a href="#" class="container-sort-2-a" :sort-id="2" :class="{myDayActive:cur_sort_id==='2'}" @click="sortChange">时间降序</a>
              <a href="#" class="container-sort-2-a" :sort-id="3" :class="{myDayActive:cur_sort_id==='3'}" @click="sortChange">价格升序</a>
              <a href="#" class="container-sort-2-a" :sort-id="4" :class="{myDayActive:cur_sort_id==='4'}" @click="sortChange">价格降序</a>
            </div>
          </div>
        </div>
      </transition>

      <div class="splitline"></div>

      <div class="row goodsContain">
        <div class="col-md-12 gc_list">
          <ul class="index_pro">
            <li class="good_box" v-for="gift in select_list">
              <dl>
                <dt>
                  <a href="#">
                    <router-link :to="{name:'giftInfo',params: {giftid:gift.id}}">
                      <img class="imga" :src="gift.giftImg" alt="">
                    </router-link>
                  </a>
                </dt>
                <dd class="name">
                  <router-link :to="{name:'giftInfo',params: {giftid:gift.id}}">
                    <a href="#" class="name_a" v-text="gift.gift_name"></a>
                  </router-link>

                </dd>
                <dd class="price_box">
                  <span class="price" v-text="'￥'+gift.price"></span>
                  <p class="likebut-num like " v-text="gift.clicknum"></p>
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row" id="gifts-page">
      <pagination :currentPage="currentPage" :pageCount="parseInt(pageCount)" @prePage="prePage" @nextPage="nextPage" @jumpPage="jumpPage"></pagination>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
export default {
  name: 'Product',
  data:function () {
    return{
      show:false,
      currentPage:1,
      pageCount:'',
      type_obj:[],  // 搜索导航对象
      type_day:[],  // 搜索导航节日

      cur_day_id:'0', // 节日选中搜索条件
      cur_obj_id:'0', //  对象选中所搜条件
      cur_sort_id:'0',// 排序选中搜索条件
      con:'',     // 搜索栏
      select_list:[],

    }
  },
  created:function(){

  },
  mounted:function(){

    this.getGiftsType();  // 礼物组合条件搜索
    this.getAllGifts();   // 展示礼物
    this.getAllPages();   // 获取总页数
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
          vm.pageCount=Math.ceil(response.data.count/4);
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
  .myDayActive{
    color: red;
  }

  body{
    outline: 0;
    margin: 0;
    padding: 0;
  }
  ul,li,ol,h1,h2{
    list-style: none;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  a{
    text-decoration: none;
    color: #6e6e6e;
  }
  a:hover{
    color: #ff624a;
    text-decoration: none;
  }

  .container{
    width: 1200px;
    height: auto;
    background: url("../../assets/goods/bai.jpg");
    padding: 0;
    margin: auto;
    padding-bottom: 20px;

  }
  .mynav{
    padding: 0;
    margin: 0;
  }

  #gifts{
    margin-bottom: 20px;
  }

  #gifts-content{
    min-height: 643px;
    margin-bottom: 20px;
  }

  #gifts-page{
    margin-bottom: 20px;
  }

  /*-------------------------------------搜索模块------------------------------*/
  .mynav{
    padding: 0;
    margin: 0;
    width: 1200px;
    height: 60px;
    line-height: 74px;
    margin-top: 1px;
    position: relative;
    top: 15px;

  }

  .small-box li{
    width: 70px;
    float: left;
    line-height: 34px;
  }

  .liwu{
    float: left;
    line-height: 34px;
    color: #ff624a;
    font-weight: bolder;
    cursor: pointer;
  }
  .search{
    height: 34px;
    float: right;
  }
  .btnsearch{
    top: -20px;
  }
  .fudong1{
    padding: 0;
    margin: 0;
    border-top: lightgray 1px solid;
    border-radius: 0.5em;
  }

  .container-sortbegin{
    width: 920px;
    height: 80px;
    margin: auto;
    font-size: 15px;
  }

  .container-sortbegin .container-sort-1{
    line-height: 40px;
    margin-left: 20px;
    color: gray;
    float: left;
  }
  .container-sortbegin .container-sort-2{
    width: 800px;
    line-height: 40px;
    float: left;
  }

  .container-sort-2-a{
    float: left;
    margin-left: 20px;
    text-decoration: none;
  }


  /*----------------------------------------商品模块--------------------------------*/
  .splitline{
    width: 1200px;
    height: 1px;
    background: #b8b8b8;
  }

  .good_box{
    display: inline-block;
    float: left;
    width: 297px;
    height: 330px;
    padding: 28px 28px 0 28px;
    margin-bottom: 5px;

  }
  .good_box .imga{
    width: 237px;
    height: 237px;
  }
  .index_pro li dd {
    line-height: 22px;
    font-size: 18px;
    height: 44px;
    margin-top: 5px;
    position: relative;
  }
  .name{
    height: 44px;
    line-height: 44;
    text-overflow: ellipsis;
    overflow:hidden;
    white-space:nowrap;

  }
  .name_a{
    color: #424242;
    font-family:  Helvetica,Tahoma,Arial,"Hiragino Sans GB","Microsoft YaHei",SimSun,Heiti,sans-serif;
    font-size: 15px;
  }

  .index_pro li dd a:hover{
    color: red;
  }
  .good_box dl .price_box{
    position: relative;
  }

  .price{
    position: absolute;
    color: red;
    font-family:  Georgia, "Times New Roman", Times, serif;

  }
  .like{
    position: absolute;
    right: 0;
    font-size: 14px;
    cursor: pointer;

  }

  .likebut-num {
    color: #cecece;
    background: url(../../assets/my-icons/icon_all.png) no-repeat -682px -895px;
    float: right;
    height: 24px;
    padding-left: 21px;
    line-height: 24px;
  }

  .likebut-num:hover {
    background: url(../../assets/my-icons/icon_all.png) no-repeat -682px -945px;
    text-decoration: none;
    color: #fd3636;
  }

  .goodsContain{
    width: 1200px;
    margin: auto;
    margin-top: 30px;
  }
  .goodsContain .gc_list{
    padding: 0;
  }
  .goodsContain .gc_list ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
  }
  .goodsContain .gc_list ul li{
    min-width: 297px;
    max-width: 297px;
    height: 360px;
    margin-top: 10px;
    margin-right: 3px;
    box-sizing: border-box;
    flex: 1;
    background-color: #ffeef5;
    padding: 30px;
  }
  .goodsContain .gc_list ul li:hover{
    transition: margin 0.4s,box-shadow 0.4s linear 0.1s;
    margin-top: 7px;
    box-shadow: 3px 3px 3px 1px #dadada;
  }






</style>
