<template>
  <div class="container all">
    <div class="top row ">
      <div class="col-lg-9">
        <div class="title">精选攻略</div>
      </div>
      <div class="col-lg-3">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="中秋节送妈妈什么好" v-model="search" style="outline: none;">
          <span class="input-group-btn" style="height: 34px">
            <button class="btn btn-default btnsearch" type="button" @click="getAllSelectgl"  style="outline: none;">Go!</button>
          </span>
        </div>
      </div>
    </div>
    <div class="content container">
      <div class="row" style="width: 100%;margin:0 auto;">
        <div class="tuijian col-lg-3" >
          <div class="hotgoods" v-for="hg in hotgoods">
            <router-link tag="a" :to="{name:'talkdetail',params:{giftid:hg.id}}">
              <div class="gotile">精美礼品</div>
              <div class="gocon">
                <div class="goimg" :style="{backgroundImage:'url('+hg.giftImg+')'}"></div>
                <div class="goname" v-text="hg.gift_name"></div>
                <div class="goprice">
                  <span style="margin-right:-4px;">￥</span>
                  <span v-text="hg.price"></span>
                </div>
              </div>
            </router-link>
          </div>

        </div>
        <div class="gl col-lg-9">
          <ul >
            <li v-for="gl in gls">
              <router-link :to="{name:'postdetail',params:{tid:gl.id}}">
                <div class="sc_list_img" :style="{backgroundImage:'url('+gl.ttitleimg+')'}"></div>
                <div class="sc_list_title" v-text="gl.ttitle"></div>
                <div class="sc_list_content" v-text="gl.tbriefcont"></div>
              </router-link>
              <div class="sc_list_info">
                <i class="sc_list_info_icon sc_list_info_love"></i>
                <span class="sc_list_info_love_" v-text="gl.clicknum"></span>
                <i class="sc_list_info_icon sc_list_info_comment"></i>
                <span class="sc_list_info_comment_" v-text="gl.replynum">11</span>
              </div>
            </li>
          </ul>
        </div>
      </div>


      <pagination :currentPage="page" :pageCount="parseInt(pagecount)" @prePage="prePage" @nextPage="nextPage" @jumpPage="jumpPage"></pagination>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "DetailTalkbody",
    data: function () {
      return {
        search: '',
        page:1,
        pagecount:1,
        hotgoods:[],
        gls:[]
      }

    },
    mounted: function () {
      this.getAllSelect();
      this.getAllSelectpages();
      this.gethotgoods();
    },
    methods: {
      //加载推荐商品
      gethotgoods:function(){
        let vm=this;
        axios({
          method:'GET',
          url:this.GLOBAL.HOST+'gift/hotgoods/',
        })
          .then(function (response) {
            console.log(response.data)
            vm.hotgoods=response.data;
          })
          .catch(function (error) {
            console.log(error)
          })
      },

      //搜索攻略
      getAllSelect:function () {
        let vm=this;
        axios({
          method:'POST',
          url:this.GLOBAL.HOST+'tribune/searchgl/',
          data:{
            page:this.page,
            tiaojian:this.search
          }
        })
          .then(function (response) {
            vm.gls=response.data
          })
          .catch(function (error) {
            console.log(error)
          })
      },

      //搜索攻略页数
      getAllSelectpages:function () {
        let vm=this;
        axios({
          method:'POST',
          url:this.GLOBAL.HOST+'tribune/searchglpages/',
          data:{
            tiaojian:this.search,
          }
        })
          .then(function (response) {
            vm.pagecount=response.data
          })
          .catch(function (error) {
            console.log(error)
          })
      },

      //点击搜索按钮
      getAllSelectgl:function () {
        this.getAllSelect();
        this.getAllSelectpages()
      },

      // 分页
      prePage() {
        this.page--;
        this.getAllSelect();
      },
      nextPage() {
        this.page++;
        // 重新渲染数据
        this.getAllSelect();
      },
      jumpPage(pageIndex) {
        if (pageIndex > this.pagecount) {
          pageIndex = this.pagecount
        }
        if (!pageIndex || pageIndex < 1) {
          pageIndex = 1
        }
        this.page = pageIndex;
        this.getAllSelect();
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input,button{
    outline:none;
  }
  a{
    text-decoration: none;
    color:black;
  }
  a:hover{
    color:#ff8000;
  }
  ul,li{
    list-style: none;
  }
  .all{
    width: 1200px;
    min-height:643px;
    border:solid 1px #dadada;
  }
  .top{
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    border-bottom: solid 1px #dadada;
    margin:auto;
  }
  .title{
    font-size: 1.5em;
    font-weight: 400;
    color: #666;
    margin-left: 30px;
  }
  .content{
    margin: 20px auto;
    width: 100%;
  }
  /*______________热门商品________________*/
  .tuijian{
    min-height:600px
  }
  .hotgoods{
    margin: 10px auto 30px auto;
    width: 208px;
    border: solid 1px #dadada;
    box-sizing: border-box;
    background-color: white;
  }
  .gotile{
    width: 100%;
    height: 32px;
    padding: 4px 0;
    box-sizing: border-box;
    color: #666;
    font-size: 1.1em;
    font-weight: 500;
    text-align: center;
    background-color: #ffd3ee;
  }
  .gocon{
    width: 100%;
    height: 290px;
    padding: 10px 9px;
    box-sizing: border-box;
  }
  .gocon .goimg{
    width: 180px;
    height:196px;
    margin: 0 auto;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .gocon .goname{
    width: 100%;
    height: 48px;
    font-size:0.8em;
    color: #666;
    margin-bottom: 5px;
  }
  .gocon .goprice{
    width: 100%;
    height: 18px;
    font-size: 0.8em;
    color: #ff8000;
    text-align: center;
  }
  /*_______________攻略展示___________________*/
  .gl ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
  .gl ul li{
    min-width: 365px;
    max-width: 350px;
    margin-top: 10px;
    margin-bottom: 20px;
    height: 370px;
    box-sizing: border-box;
    flex: 1;
    border: solid 1px #dadada;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    transition: margin-top 0.4s linear;
    background-color: white;
  }
  .gl ul li:hover{
    transition: margin-top 0.4s,box-shadow 0.4s linear 0.1s;
    margin-top: 5px;
    box-shadow: 0 3px 5px 2px #dadada;
  }
  .gl ul li a .sc_list_img{
    width: 100%;
    height: 142px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  .gl ul li a .sc_list_title{
    width: 100%;
    height: 80px;
    padding: 10px 20px;
    box-sizing: border-box;
    font-size: 1.3em;
  }
  .gl ul li a .sc_list_content{
    width: 100%;
    height: 100px;
    padding: 0 20px 10px;
    box-sizing: border-box;
    font-size: 0.9em;
  }
  .gl ul li .sc_list_info{
    height: 44px;
    padding: 10px;
    box-sizing: border-box;
  }
  .gl ul li .sc_list_info .sc_list_info_icon{
    display: inline-block;
    width: 18px;
    height: 17px;
    margin: 5px 5px 0 10px;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .gl ul li .sc_list_info .sc_list_info_love{
    background-image: url("../.././assets/ind_images/heart.svg");
  }
  .gl ul li .sc_list_info .sc_list_info_comment{
    background-image: url("../.././assets/ind_images/message.svg");
  }
  .gl ul li .sc_list_info span{
    display: inline-block;
    height: 18px;
    font-size: 1.1em;
    color:#ff6c00;
  }
</style>
