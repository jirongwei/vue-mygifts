<template>
  <div id="content">
    <div class="box220 fl mr40">
      <div class="menu_box">
        <ul>
          <router-link to="/PersonalMyCollection">
            <li><a href="#">礼物收藏</a></li>
          </router-link>
          <router-link to="/personalmycolstrategy">
            <li class="active"><a href="#">攻略收藏</a></li>
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
          <h2 class="tith">攻略收藏</h2>
        </div>

        <div class="row goodsContain">
          <div class="row">
            <div class="col-sm-6 col-md-4"  v-for="st in stra_list">
              <router-link :to="{name:'talkdetail',params:{tid:st.tribune_id__id}}">
                <div class="thumbnail">
                  <img alt="..." :src="st.tribune_id__ttitleimg">
                  <div class="caption">
                    <h3 v-text="st.tribune_id__ttitle">这些有趣的居家小物件，给你送来生活里的小确幸</h3>
                    <p v-text="st.tribune_id__tdetailcont">想要家里变得不那么沉闷？我有小妙招！也许大改造大动工不是一时就能实现，但选择一些充满创意的小巧家具，同样能为家里增添不少乐趣。而且往往小家具更容易成为吸引人的亮点哦~生活有时平淡，乐趣还需自己创造。下面就和小礼君一起挑选这些有趣小家具，发现乐趣吧~</p>
                    <div style="height: 5px"></div>
                    <div class="ps"><img src="../../assets/my-icons/smallHH.svg" alt="">收藏</div>
                    <div class="ps"><img src="../../assets/my-icons/smallPP.svg" alt="">评论</div>

                  </div>
                </div>
              </router-link>
            </div>


          </div>

        </div>



      </div>
    </div>
  </div>
</template>


<script>
  import axios from 'axios'
export default {
  name: 'CollectionStrategy',
  data () {
    return {
      stra_list:[], // 攻略收藏列表
      u_id:1          // 用户id
    }
  },

  mounted:function(){
    this.getStraList()
  },
  methods: {
    // 遍历攻略收藏列表
    getStraList: function () {
      let vm = this;
      axios.get('http://127.0.0.1:8000/tribune/collection/',{
        params:{u_id:this.u_id}
      })
        .then(function (response) {
          vm.stra_list = response.data;
          console.log(vm.stra_list)
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


  .index_pro li dd {
    line-height: 22px;
    font-size: 18px;
    height: 44px;
    margin-top: 5px;
    position: relative;
  }

  .index_pro li dd a:hover{
    color: red;
  }

  .goodsContain{
    width: 870px;
    margin: auto;
    margin-top: 30px;
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
    background-color: #ffeef5;
    padding: 30px;
  }
  .goodsContain .gc_list ul li:hover{
    transition: margin 0.4s,box-shadow 0.4s linear 0.1s;
    margin-top: 7px;
    box-shadow: 3px 3px 3px 1px #dadada;
  }


  /*----------------------------右 下----------------------------*/

  .thumbnail{
    padding: 0;
    /*border: none;*/
    box-sizing: border-box;
    height: 340px;
    background: #ffeaf1;
    /*border: #2aabd2 1px solid;*/
  }

  .thumbnail:hover{
    box-shadow: 0px 2px 8px rgba(34, 25, 25, 0.2);
  }
  .thumbnail img{
    width: 400px;
    height: 160px;
  }
  .caption h3{
    height: 50px;
    font-size: 1.5em;
    padding: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .caption p{
    padding: 5px;
    font-size: 14px;
    color: #949494;
    /*这里是只显示三行后面的省略*/
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .caption img{
    width: 20px;
    height: 20px;
    float: left;
    margin-top: 6px
  }
  .caption .ps{
    width:50px;
    height: 30px;
    line-height: 30px;
    float: left;
    margin-left: 10px;
    cursor: default;
  }
  .caption .ps:hover{
    color: #d80000;
  }

</style>
