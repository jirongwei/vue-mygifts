<template>
  <div class="container bg-grey">
    <div class="row">
      <div class="col-md-12">
        <div class="bg-header"></div>
        <div class="container my-container">

          <div class="row">
            <div style="margin-top: 20px" v-for="t in tri_list">
              <div class="col-md-1">
                <img :src="t.t_userid__icon" alt="..." class="img-circle my-circle">
              </div>
              <div class="col-md-11 laizi">
                <a href="" class="text-center" v-text="t.t_userid__nickname">zmm</a>
                <div class="laizi">
                  <a href="" target="_blank" v-text="t.t_createtime">今天20:30</a>"来自"
                  <a href="" target="_blank">iPhoneX</a>
                </div>
              </div>
            </div>

            <div class="col-md-11 laizi" style="margin-left: 65px" v-for="t in tri_list">
              <h1 v-text="t.ttitle">应该送男朋友礼物大全</h1>
              <div class="my-center">
                <p><img :src="t.ttitleimg" class="my-img" alt=""></p>
                <p>&nbsp;</p>
                <p  v-text="t.tdetailcont"></p>
                <p>&nbsp;</p>
                <p><a href="http://www.douban.com/thing/175/?on=1050083">参考攻略</a></p>
                <p v-text="'来源:'+t.t_userid__nickname"></p>
                <p>&nbsp;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="zong">
        <ul>
          <li class="daotiao">
            <a class="spz">
              <img class="spz_img" src="../../assets/ind_images/shou.svg" alt="">
              <a class="spz_in">收藏</a>
            </a>
          </li>
          <li class="daotiao">
            <div class="spz">
              <img class="spz_img1" src="../../assets/ind_images/pinglun.svg" alt="" >
              <a class="spz_in">评论</a>
            </div>
          </li>
          <li class="daotiao">
            <div class="spz">
              <img class="spz_img2" src="../../assets/ind_images/dianzan.svg" alt="">
              <a class="spz_in">点赞</a>
            </div>
          </li>
        </ul>
    </div>


      <div class="comment" v-for="t in tri_list">
        <div class="col-md-1">
          <img :src="t.t_userid__icon" alt="..." class="img-circle my-circle">
        </div>
        <div class="col-md-11 input-wrap">
            <textarea  class="comment-input" placeholder="写下您的评论..." v-model="comment"></textarea>
            <button type="button" class="button_btn" @click="add">评论</button>

        </div>
      </div>

    <div class="row acb">
      <div class="col-md-12">
        <div class="contain_left">
          <div class="postReply_nav">
            <ul>
              <li class="sdpl">
                <a href="" class="on">评论列表</a>
              </li>
            </ul>
          </div>
          <div class="postReply_con">

            <ul>
              <li v-for="re in comments">
                <div class="pitem_cont" >
                  <a href="" class="replyImg">
                    <img class="Img" src="../../assets/user-icon/friends-1.jpg" :src="re.tReply_uid__icon"alt="">
                  </a>
                  <div class="replycontent">
                    <div class="pitem_author">
                      <a href="" v-text="re.tReply_uid__nickname">阿正鹿丸丸</a>
                    </div>
                    <div class="pitem_date" v-text="re.tReply_time">10月8日 11:34</div>
                    <div class="post_cont">
                      <span v-text="re.tReply_con">大王也有杀境州母亲的动机&nbsp;&nbsp;没那么大， 对大王来说&nbsp;&nbsp;真都督死后&nbsp;&nbsp;假都督比真都督都还真&nbsp;&nbsp;&nbsp;还有利用价值</span>
                    </div>
                  </div>
                </div>
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
  name: 'TalkDetail',
  data () {
    return {
      comments:'',          // 评论列表
      // id:'1',       // 文章id
      comment:'' ,    // 评论内容
      uid_id:'' ,    // 用户id
      tri_id:'' ,    // 攻略id
      tri_list:'',   // 攻略列表
    }
  },
  created:function(){
    this.addComment();
    this.tri_id = this.$route.params.tid;
    console.log(this.tri_id)
    this.getTribune()
  },
  mounted:function(){
  },
  methods:{

//    添加收藏
    addCollect:function(){
      let vm = this;
      axios.get('', {
        params:{"tid":this.tri_id}
      })
        .then(function (response) {
          vm.tri_list=response.data;
          console.log(vm.tri_list)
        })
        .catch(function (error) {
          console.log(error)
        })
    },

//渲染攻略详情渲染数据
    getTribune:function(){
      let vm = this;
      axios.get('http://127.0.0.1:8000/tribune/publisher/',{
        params:{"tid":this.tri_id}
      })
        .then(function (response) {
          vm.tri_list=response.data;
          console.log(vm.tri_list)
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    addComment:function(){
      let vm = this;
      axios.get('http://127.0.0.1:8000/tribune/comment/')
        .then(function (response) {
          vm.comments = response.data;
          console.log(vm.comments)
        })
        .catch(function (error) {
          console.log(error)
        });

    },
    add:function(){
      let vm = this;
      axios.post('http://localhost:8000/tribune/zmAddComment/',{
        "tReply_pid_id":this.id,
        "tReply_con":this.comment,
        "tReply_time":"123456",
        "tReply_uid_id":"2"
      })
        .then(function (response) {
          console.log(response.data);
          vm.addComment()
        })
        .catch(function (error) {
          console.log(error)
        });
      vm.comment=""
    },

  }


  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .zong{
    height: 60px;
    width: 800px;
    margin: auto;
    box-sizing: border-box;
    border: gainsboro 1px solid;
    border-top: none;
    border-bottom: none;

  }
 .daotiao{
   background: #fffad7;
   width: 266px;
   height: 40px;
   float: left;
   box-sizing: border-box;
   border: gainsboro 1px solid;
   border-right: none;
   border-top: none;

 }
.spz{
  display: block;
  height: 30px;
  width: 60px;
  margin: auto;
  margin-top: 7px;
 }
.spz_in{
  margin: auto;
  font-size: 16px;
  color: gray;
}
.spz_img{
  width: 22px;
  height: 22px;
  background: url("../../assets/ind_images/shou.svg") no-repeat;
  background-size: 22px;
}
  .spz_img1{
    width: 22px;
    height: 22px;
    background: url("../../assets/ind_images/pinglun.svg") no-repeat;
    background-size: 22px;
  }
  .spz_img2{
    width: 22px;
    height: 22px;
    background: url("../../assets/ind_images/dianzan.svg") no-repeat;
    background-size: 22px;
  }
  .spz_img:hover{
    width: 22px;
    height: 22px;
    background: url("../../assets/ind_images/shou1.svg") no-repeat;
    background-size: 22px;

  }
  .spz_img1:hover{
    width: 22px;
    height: 22px;
    background: url("../../assets/ind_images/pinglun1.svg") no-repeat;
    background-size: 22px;
  }
  .spz_img2:hover{
    width: 22px;
    height: 22px;
    background: url("../../assets/ind_images/dianzan1.svg") no-repeat;
    background-size: 22px;
  }
.spz_in:hover{
   color: red;
 }
.spz_img:hover{
  color: red;
}
 .shoucang{
   height: 20px;
   width: 20px;
   background:olive;
 }



  html,body,ul,input,button{
    outline: 0;
    padding: 0;
    margin: 0;
  }
  a,button{
    /*color: #ff4000;*/
    text-decoration: none;
    cursor: pointer;
  }
  ul,li{
    list-style: none;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  .acb{
    width: 800px;
    border: solid 1px gainsboro;
    border-top: none;
    margin-left: 35px;
  }


  .collect{
    width: 800px;
    height: 30px;
    border-right: #c2c2c2 1px solid;
    border-left: #c1c1c1 1px solid;
    margin: auto;
  }
  .collect-click{
    line-height: 30px;
    float: right;
    font-size: 17px;
    color: gray;
    cursor: default;
  }
  .comment{
    width: 800px;
    margin: auto;
  }
  .input-wrap{
    position: relative;
  }
  .comment-input{
    width: 625px;
    height: 50px;
    resize:none;
  }
  .button{
    height: 50px;
    width: 100px;
    /*background: #00003b;*/
    color: white;
    position: absolute;
    right: 0px;
    top: 0px;
    line-height: 50px;
    font-size: 17px;
    cursor: default;
  }

  .button_btn{
    height: 50px;
    width: 100px;
    background: #00003b;
    color: white;
    position: absolute;
    right: 0px;
    top: 0px;
    line-height: 50px;
    font-size: 17px;
    border: none;
    cursor: default;
  }
  .maincontain .contain_left{
    min-height: 756px;
    width: 800px;
    background-color: white;
    border: 1px solid gainsboro;
  }
   .contain_left .postReply_nav{
    width: 100%;
    height: 60px;
  }
   .contain_left .postReply_nav ul{
    height: 100%;
  }
   .contain_left .postReply_nav ul li{
    padding: 20px 0;
    box-sizing: border-box;
    height: 100%;
    width: 150px;
    display: inline-block;
  }
   .contain_left .postReply_nav ul li a{
    display: block;
    height: 100%;
    padding: 0 30px;
    box-sizing: border-box;
    color: black;
    font-size: 1.2em;
    text-decoration: none;
  }

  .contain_left .postReply_con ul li{
    width:800px;
    padding:20px 20px 10px 20px;
    box-sizing: border-box;
    border-bottom: dashed 1px #dadada;
    position: relative;
    font-size: 0.8em;
  }
  .sdpl{
    width: 800px;
    height: 40px;
    font-size: 18px;
    line-height: 40px;
    box-sizing: border-box;
  }
  .contain_left .postReply_con ul li .replyImg{
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ff4000;
    position: absolute;
    top: 20px;
    left: 20px;
  }
  .contain_left .postReply_con ul li .Img{
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .contain_left .postReply_con ul li .replycontent{
    display: inline-block;
    margin-left: 70px;
    width: 580px;
    border-bottom: solid 1px #dadada;
  }
  .contain_left .postReply_con ul li div{
    margin-bottom: 10px;
  }
  .contain_left .postReply_con ul li .pitem_author a{
    font-weight: 500;
    color: #000;
    cursor: pointer;
  }
  .contain_left .postReply_con ul li .pitem_date{
    font-weight: 200;
  }
  .contain_left .postReply_con ul li .post_cont{
    font-weight: 400;
  }

  .contain_left .postReply_con ul li .old_reply span{
    font-weight: 200;
  }
  .contain_left .postReply_con ul li .old_reply a{
    font-weight: 400;
    text-decoration: none;
    cursor: pointer;
  }

  .contain_left .postReply_con ul li .pitem_nav .reply input{
    display: inline-block;
    outline: none;
    width: 300px;
  }
  .contain_left .postReply_con ul li .pitem_nav .reply a{
    display:inline-block;
    margin-left: 20px;
    color: black;
    text-decoration: none;
    cursor: pointer;
  }


  .bg-grey{
    width: 900px;
    background: #fffad7;
  }
  .bg-header{
    width: 900px;
    height: 20px;
    background: url("../../assets/nav/header.png") no-repeat;
    background-size: 900px 20px;
    margin-left: -16px;
  }
  .my-container{
    width: 800px;
    border: #cdcdcd 1px solid;
    margin: auto;
  }
  .my-circle{
    width: 50px;
    height: 50px;
  }
  .img-circle {
    border-radius: 50%;
  }
  .laizi{
    margin-top: 5px;
  }
  .my-center{
    /*background: white;*/
    margin-top: 20px;

  }
  .my-img{
    width: 700px;
    height: 450px;
  }

  .xihuan a{
    font-size: 18px;
  }
  .xihuan :hover{
    color: #ff2e0e;
    text-decoration: none;

  }


  body {
    height: 100%;
    width: 100%;

  }



  .modal fade {
    background-color: #00b3ee;
  }



  .aaa a {
    font-size: x-small;
    color: #ff0628;
    text-underline: none;
  }


  .sc img {
    width: 26px;
    height: 26px;
    margin-top: -5px;

  }



  .pick-img img {
    width: 180px;
    height: 196px;
    margin-top: 12px;
    margin-left: 13px;
  }


  .pick-text a {

    font-size: 0.1em;
    color: #575a71;
    text-decoration: none;
  }

  .aaa p {
    margin-left: 80px;
  }




</style>
