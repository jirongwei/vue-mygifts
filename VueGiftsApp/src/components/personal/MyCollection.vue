<template>
  <div id="content">
    <div class="box220 fl mr40">
      <div class="menu_box">
        <ul class="active">
          <router-link to="/PersonalMyCollection">
            <li class="hover"><a href="#">礼物收藏</a></li>
          </router-link>
          <router-link to="/personalmycolstrategy">
            <li><a href="#">攻略收藏</a></li>
          </router-link>
          <router-link to="/personalmycolnote">
            <li><a href="#">帖子收藏</a></li>
          </router-link>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
        </ul>
      </div>
    </div>

    <div class="box940 fl">

      <div class="listbox1 mh600">
        <div class="title line mb30">
          <h2 class="tith">礼物收藏</h2>
        </div>


        <div class="row goodsContain">
          <div class="col-md-12 gc_list">
            <ul class="index_pro">
              <li class="good_box" v-for="gift in gift_list">
                <dl>
                  <dt>
                    <a href="#">
                      <router-link :to="{name:'giftInfo',params: {giftid:gift.id}}">
                        <img class="imga" :src="gift.gifts__giftImg" alt="">
                      </router-link>
                    </a>
                  </dt>
                  <dd class="name">
                    <router-link :to="{name:'giftInfo',params: {giftid:gift.id}}">
                      <a href="#" class="name_a" v-text="gift.gifts__gift_name"></a>
                    </router-link>

                  </dd>
                  <dd class="price_box">
                    <span class="price" v-text="'￥'+gift.gifts__price"></span>
                    <p class="likebut-num like " v-text="gift.gifts__clicknum"></p>
                  </dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import axios from 'axios'
export default {
  name: 'MyCollection',
  data () {
    return {
      gift_list:[], // 礼物列表
      u_id:1          //  用户id
    }
  },
  mounted:function(){
    this.getGiftsList();

  },
  methods: {
    // 礼物列表
    getGiftsList: function () {
      let vm = this;
      axios.get('http://localhost:8000/gift/addcollect/',{
        params:{
          "u_id":this.u_id
        }
      })
        .then(function (response) {
          vm.gift_list = response.data.gifts;
        })
        .catch(function (error) {
          console.log(error)
        })
    },

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html {
    color: #333;
    background: #f8f8f8;
  }

  body, h1, h2, h3, h4, h5, h6, hr, p, blockquote,
  dl, dt, dd, ul, ol, li, pre, form, fieldset,
  legend, button, input, textarea, th, td {
    margin: 0;
    padding: 0;
  }

  body, button, input, select, textarea {
    font: 14px/1.5 Helvetica, Tahoma, Arial, "Hiragino Sans GB", "Microsoft YaHei", SimSun, Heiti, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
  }

  address, cite, dfn, em, var {
    font-style: normal;
  }

  code, kbd, pre, samp {
    font-family: courier new, courier, monospace;
  }

  small {
    font-size: 12px;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  sup {
    vertical-align: text-top;
  }

  sub {
    vertical-align: text-bottom;
  }

  legend {
    color: #000;
  }

  fieldset,
  img {
    border: 0;
  }

  button,
  input,
  select,
  textarea {
    font-size: 100%;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  a:hover, a:focus {
    text-decoration: none;
    color: #f4604b;
  }

  strong {
    font-weight: bold;
  }

  input[type=submit] {
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }

  *:focus {
    outline: none;
  }

  /*content*/
  #content {
    margin-bottom: 10px;
    width: 1200px;
    margin: 0 auto 20px auto;
    min-height: 1000px;
  }
  .box220 {
    width: 200px;
  }
  .fl {
    float: left;
  }
  .mr40 {
    margin-right: 40px;
  }

  /*menu_box*/
  .menu_box {
    background: #FFF;
  }


  .menu_box li {
    border-bottom: 1px solid #f9f9f9;
    height: 59px;
    line-height: 59px;
    text-align: center;
  }

  .menu_box li a {
    float: left;
    width: 218px;
    font-size: 18px;
    border-left: 2px solid #FFF;
    color: #999;
  }

  .menu_box li a:hover,
  .menu_box li.hover a {
    color: #fd3636;
    border-left: 2px solid #fd3636;
  }

  .menu_box li a:hover {
    font-weight: normal;
  }

  /*----------------------右侧-------------------------*/
  .box940 {
    width: 900px;
  }
  .mh600 {
    min-height: 600px;
    height: auto !important;
    height: 600px;
    overflow: visible;
  }

  .listbox1 {
    background: #FFF;
    padding: 25px 35px;
    margin-left: -30px;
  }

  .listbox1 .title {
    padding-bottom: 20px;
  }
  .mb30 {
    margin-bottom: 30px;
  }
  .listbox1 .title.line {
    border-bottom: 1px solid #f1f1f1;
  }

  .listbox1 .title .tith {
    font-size: 28px;
    font-weight: normal;
    color: #333;
  }

  .listbox1 .cont {
    line-height: 30px;
    font-size: 16px;
    color: #666;
  }



  .index_pro{
    width: 100%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

  }


  .good_box{
    width: 270px;
    height: 300px;
    padding: 28px 28px 0 28px;
    margin-bottom: 5px;

  }
  .good_box:after {
    content: "";
    flex: auto;
  }
  .good_box .imga{
    width: 210px;
    height: 210px;
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
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

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
    color: #464646;
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
    width: 870px;
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
    justify-content: space-between;
  }
  .goodsContain .gc_list ul li{
    min-width: 280px;
    max-width: 280px;
    height: 330px;
    margin-top: 10px;
    margin-right: 3px;
    box-sizing: border-box;
    flex: 1;
    background-color: #fff5fa;
    padding: 30px;
  }
  .goodsContain .gc_list ul li:hover{
    transition: margin 0.4s,box-shadow 0.4s linear 0.1s;
    margin-top: 7px;
    box-shadow: 3px 3px 3px 1px #dadada;
  }
</style>
