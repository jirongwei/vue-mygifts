<template>
  <div id="content">
    <div class="box220 fl mr40">
      <div class="menu_box">
        <ul class="active">
          <router-link to="/PersonalMyCollection">
            <li><a href="#">礼物收藏</a></li>
          </router-link>
          <router-link to="/personalmycolstrategy">
            <li><a href="#">攻略收藏</a></li>
          </router-link>
          <router-link to="/personalmycolnote">
            <li class="active"><a href="#">帖子收藏</a></li>
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
          <h2 class="tith">帖子收藏</h2>
        </div>

        <div class="row goodsContain">

          <ul>
            <li v-for="note in note_list">
              <div class="NoImg">
                <router-link :to="{name:'postdetail',params:{pid:note.post_id_id}}">
                  <a href="" class="p_title" v-text="note.post_id__ptitle"></a>
                </router-link>
                <div class="simple">
                  <div class="p_content">
                    <span v-text="note.post_id__pbriefcont"></span>
                    <router-link :to="{name:'postdetail',params:{pid:note.post_id_id}}">
                      <button class="readMore">
                        阅读全文
                      </button>
                    </router-link>
                  </div>
                  <div class="p_nav">
                    <svg class="Zi Zi--Comment Button-zi" fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z" fill-rule="evenodd"></path></svg>
                    <button>
                      <span>222</span><span> 条回复</span>
                    </button>
                    <router-link to="{name:'',params:{userid:1}"></router-link>
                    <svg class="Zi Zi--Star Button-zi" @click="colloectpost(pmes.postid)"  fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path></svg>
                    <!--<svg class="Zi Zi&#45;&#45;Star Button-zi" @click="colloectpost(pmes.postid)" v-if="pmes.postcollectstatus"  fill="#ff8000" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path></svg>-->
                    <button @click="colloectpost(pmes.postid)">
                      <span v-text="note.coll_count"></span><span>收藏</span>
                    </button>
                    <svg class="Zi Zi--Heart Button-zi"fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z" fill-rule="evenodd"></path></svg>
                    <!--<svg class="Zi Zi&#45;&#45;Heart Button-zi" @click="danzanpost(pmes.postid)" v-if="pmes.postdianzanstatus"  fill="#ff8000" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z" fill-rule="evenodd"></path></svg>-->
                    <button @click="danzanpost(pmes.postid)">
                      <span>254</span><span>点赞</span>
                    </button>
                    <!--<svg class="Zi Zi&#45;&#45;Share Button-zi" fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z" fill-rule="evenodd"></path></svg>-->
                    <div class="clear"></div>
                  </div>
                </div>


              </div>
            </li>

          </ul>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
  import axios from 'axios'
export default {
  name: 'CollectionNote',
  data () {
    return {
      note_list:[], // 礼物列表
      u_id:1,     // 用户id
    }
  },
  mounted:function(){
    this.getNoteList();

  },
  methods: {
    // 收藏帖子信息
    getNoteList: function () {
      let vm = this;
      axios.get('http://localhost:8000/post/collects/',{
        params:{
        "u_id":this.u_id}
      }).then(function (response) {
          vm.note_list = response.data;
          // vm.noteList()
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

  .goodsContain li{
    width: 100%;
    padding: 15px;
    border-bottom: #d2d2d2 1px solid;
    background-color: #fff2fe;
  }
  .p_title{
    font-size: 1.6em;
    font-weight: bolder;
  }
  .p_content span{
    font-size: 16px;
  }

  .p_content{
    display: block;
    margin-top: 30px;
  }
  .readMore{
    border: none;
    background: none;
    color: orange;
  }
  .p_nav{
    margin-top: 20px;
  }
  .p_nav button{
    /*margin-left: 20px;*/
    border: none;
    background: none;
    margin-right: 20px;
  }

  .p_nav button span{
    position: relative;
    top: -4px;
  }
  .p_nav button span:hover{
    color: red;
  }


  .index_pro li dd a:hover{
    color: red;
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
    background-color: #ffeef5;
    padding: 30px;
  }
  .goodsContain .gc_list ul li:hover{
    transition: margin 0.4s,box-shadow 0.4s linear 0.1s;
    margin-top: 7px;
    box-shadow: 3px 3px 3px 1px #dadada;
  }
</style>
