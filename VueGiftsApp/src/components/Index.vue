<template>
  <div class="container-fluid" id="index">
    <div class="changeImg">
      <div class="changeImg_imgs">
        <ul v-bind:style="{ marginLeft:  topmarginleft}">
          <li v-for="img in topimgstyle" v-bind:class="img.class" >
            <div class="ci_content">
              <div class="ci_title" v-text="img.title"></div>
              <div class="ci_detail" v-text="img.content">11111</div>
            </div>
          </li>
          <div class="clear"></div>
        </ul>
      </div>
      <div class="changeImg_lbtn changeImg_btn" v-on:click="top_btnl"></div>
      <ol class="btns">
        <li v-for="i in logolist"  v-bind:class="{'on': i==top_index}" @click="top_btns(i)" ></li>
        <!--<li ss="0" v-bind:class="{'on': 0==top_index}" ></li>-->

        <!--<li ss="1" v-bind:class="{'on': 1==top_index}"></li>-->
        <!--<li ss="2" v-bind:class="{'on': 2==top_index}"></li>-->
        <!--<li ss="3" v-bind:class="{'on': 3==top_index}"></li>-->
      </ol>
      <div class="changeImg_rbtn changeImg_btn" v-on:click="top_btnr"></div>
    </div>
    <div class="strategyContain">
      <div class="sc_title">&nbsp;&nbsp;&nbsp;&nbsp;攻略精选</div>
      <div class="sc_list">
        <ul >
          <li v-for="scm in glmes" >
            <router-link :to="{path:'/talkdetail/'+scm.glid,params:{glid:scm.glid}}">
            <div class="sc_list_img" v-bind:style="{backgroundImage:'url('+scm.glimg+')'}"></div>
            <div class="sc_list_title" v-text="scm.gltitle"></div>
            <div class="sc_list_content" v-text="scm.glcontent"></div>
            </router-link>
            <div class="sc_list_info">
              <i class="sc_list_info_icon sc_list_info_love"></i>
              <span class="sc_list_info_love_" v-text="scm.glclicknum"></span>
              <i class="sc_list_info_icon sc_list_info_comment"></i>
              <span class="sc_list_info_comment_" v-text="scm.glreplynum"></span>
            </div>
          </li>
        </ul>
      </div>
      <div class="sc_more" @click="getmoregl">查阅更多折子</div>
    </div>
    <div class="goodsContain">
      <div class="gc_title">&nbsp;&nbsp;&nbsp;&nbsp;创意礼品</div>
      <div class="gc_list">
        <ul>
          <li v-for="goodm in goodmes" >
            <router-link :to="{path:'/giftInfo/'+goodm.goodid,query:{id:goodm.goodid}}" tag="a">
            <!--<router-link :to="{path:'/giftInfo/'+goodm.goodid,query:{id:goodm.goodid}}" tag="a">-->
            <div class="gc_image" v-bind:style="{backgroundImage:'url('+goodm.goodimg+')'}"></div>
            </router-link>
            <router-link :to="{path:'/giftInfo/'+goodm.goodid,query:{id:goodm.goodid}}" tag="a">
            <div class="gc_title" v-text="goodm.goodtitle"></div>
            </router-link>
            <div class="gc_massage">
              <div class="gc_message_l">
                <i></i>
                <span v-text="goodm.goodprice"></span>
              </div>
              <div class="gc_message_r">
                <i class="gc_like"></i>
                <span class="gc_like_" v-text="goodm.goodclicknum"></span>
                <i class="gc_comment"></i>
                <span class="gc_comment_" v-text="goodm.goodreplynum"></span>
              </div>
              <div class="clear"></div>
            </div>
          </li>
        </ul>
      </div>
      <div class="gc_more" @click="getmoregood">搜寻更多宝贝儿</div>
    </div>
    <div class="postContain">
      <div class="pc_title">&nbsp;&nbsp;&nbsp;&nbsp;礼物杂谈</div>
      <div class="pc_message">
        <div class="pc_message_content">
          Suspendisse potenti. Suspendisse non sem lectus, eu sagittis diam. Nullam quis vestibulum augue. Curabitur augue urna, viverra vel gravida et, aliquet eget erat. Aliquam elit felis, pharetra id fringilla et, dignissim sed velit.
        </div>
        <div class="pc_message_btns">
          <div class="lar">
            <div class="left" @click="post_btnl"></div>
            <div class="right" @click="post_btnr"></div>
          </div>
          <div class="pc_m_btns_more" >查看更多</div>
        </div>
        <div class="pc_message_post">
          <div class="pc_message_post_">
            <ul v-bind:style="{ marginLeft:  postmarginleft}">
              <li v-for="pi in postimgs">
                <div class="pc_m_p_l">
                  <a href="">
                    <!--<router-link :to="{path:'/',query:{userid:pi.userid}}"></router-link>-->
                    <div class="pc_m_p_l_img" v-bind:style="{ backgroundImage:'url('+pi.userImg+')'}"></div>
                    <div class="pc_m_p_l_nickname" v-text="pi.userName"></div>
                  </a>
                </div>
                <div class="pc_m_p_r">
                    <router-link :to="{path:'/postdetail/'+pi.postId,param:{pid:pi.postId}}">
                    <div class="pc_m_p_r_title"v-text="pi.postTitle"></div>
                    <div class="pc_m_p_r_content"v-text="pi.postContent"></div>
                    </router-link>
                </div>
                <div class="clear"></div>
              </li>

              <div class="clear"></div>
            </ul>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "index",
        data:function () {
            return {
                //首页轮播图
                top_index:0,
                topimgstyle:[{
                  class:"topimgs1",
                  title:"11",
                  content:"111111111111111111111"
                },{
                  class:"topimgs2",
                  title:"22",
                  content:"2222222222222222222222222"
                },{
                  class:"topimgs3",
                  title:"33",
                  content:"333333333333333333333"
                },{
                  class:"topimgs4",
                  title:"44",
                  content:"4444444444444444444444444444444"
                }
                ],
                logolist:[0,1,2,3],
                topmarginleft:"0%",
                topInterval:"",

                //获取本地数据来判断
                telephone:"",

                //攻略展示
                glmes:[],
                glpage:1,
                gllikestatus:0,

                //礼品展示
                goodmes:[],
                goodpage:1,
                goodlikestatus:0,

                //帖子的轮播展示
                post_index:0,
                postimgs:[],
                postmarginleft:"0%",
                postInterval:""


            }
        },
        mounted:function() {
          var vm = this;
          //加载首页轮播图
          this.doload();

          //获取用户id


          //axios请求攻略数据
          axios.get('http://localhost:8000/tribune/tribunes/'+this.glpage)
            .then(function (response) {
              console.log(response.data);
              vm.glmes=response.data;
            })
            .catch(function (error) {
              console.log(error)
            });

          //axios修改用户对攻略点赞状态

          //axios请求商品数据
          axios.get('http://localhost:8000/gift/indexgifts/'+this.goodpage)
            .then(function (response) {
              console.log(response.data);
              vm.goodmes=response.data;
            })
            .catch(function (error) {
              console.log(error)
            });

          //axios修改用户对商品点赞状态

          //axios请求帖子数据

          axios.get('http://127.0.0.1:8000/sowingmap/')
            .then(function (response) {
              console.log(response.data)
              vm.postimgs=response.data;
            })
            .catch(function (error) {
              console.log(error)
            });

          //轮播加载帖子
          this.postload();

        },
        methods:{
            //首页轮播图
            top_btnl:function () {
                clearInterval(this.topInterval);
                if(this.top_index>0){
                    this.top_index--;
                }else {
                    this.top_index=this.topimgstyle.length-1;
                }
                 this.topmarginleft=(-100*this.top_index).toString()+"%";
                this.dochangImg()
            },
            top_btnr:function () {
                clearInterval(this.topInterval);
                if(this.top_index<this.topimgstyle.length-1){
                   this.top_index++;
                }else {
                   this.top_index=0
                }
               this.topmarginleft=(-100*this.top_index).toString()+"%";
               this.dochangImg()
            },
            top_btns:function(value){
                clearInterval(this.topInterval);
                this.top_index=value;
                this.topmarginleft=(-100*this.top_index).toString()+"%";
                this.dochangImg()
            },
            doload:function(){
              this.topInterval=setInterval( () => {
                  if(this.top_index<3){
                      this.top_index++;
                  }else {
                      this.top_index=0;
                  }
                 this.topmarginleft=(-100*this.top_index).toString()+"%";
              },3000)
            },
            dochangImg:function () {
                this.topInterval=setInterval( () =>{
                    if(this.top_index<this.topimgstyle.length-1){
                      this.top_index++;
                    }else {
                      this.top_index=0;
                    }
                  this.topmarginleft=(-100*this.top_index).toString()+"%";
                 },3000)
            },

            //axios查看更多攻略
            getmoregl:function(){
              var vnn=this;
              this.glpage+=1;
              axios.get('http://localhost:8000/tribune/tribunes/'+this.glpage)
                .then(function (response) {
                  for (let gl in response.data) {
                      vnn.glmes.push(response.data[gl])
                  }
                })
                .catch(function (error) {
                  console.log(error)
                })
            },

            //获取本地信息来判断用户是否登录
            getuser:function(){
              pass
            },

            //axios查看更多商品
            getmoregood:function(){

            var vnm=this;
            this.goodpage+=1;
            axios.get('http://localhost:8000/gift/indexgifts/'+this.goodpage)
              .then(function (response) {
                for (let go in response.data) {
                  vnm.goodmes.push(response.data[go])
                }
              })
              .catch(function (error) {
                console.log(error)
              })
          },

            //轮播使用帖子
            post_btnl:function () {
              clearInterval(this.postInterval);
              if(this.post_index>0){
                this.post_index--;
              }else {
                this.post_index=this.postimgs.length-1;
              }
              this.postmarginleft=(-100*this.post_index).toString()+"%";
              this.postchangImg()
            },
            post_btnr:function () {
              clearInterval(this.postInterval);
              if(this.post_index<this.postimgs.length-1){
                this.post_index++;
              }else {
                this.post_index=0
              }
              this.postmarginleft=(-100*this.post_index).toString()+"%";
              this.postchangImg()
            },
            postload:function () {
                clearInterval(this.postInterval);
                this.postInterval=setInterval( () => {
                  if(this.post_index<this.postimgs.length-1){
                    this.post_index++;
                  }else {
                    this.post_index=0;
                  }
                  this.postmarginleft=(-100*this.post_index).toString()+"%";
                },3000)
            },
            postchangImg:function(){
                this.postInterval=setInterval( () =>{
                    if(this.post_index<this.postimgs.length-1){
                        this.post_index++;
                    }else {
                        this.post_index=0;
                    }
                    this.postmarginleft=(-100*this.post_index).toString()+"%";
                },3000)
            }
        }
    }
</script>

<style scoped>
html,body,ul,input,button{
  outline: 0;
  padding: 0;
  margin: 0;
}
a{
  color: #ff4000;
  text-decoration: none;
}
ul,li{
  list-style: none;
  margin: 0;
  outline: 0;
  padding: 0;
}
body{
  background-color: #f7f8f8;
}
.clear{
  clear: both;
}

#index{
  margin-top: -20px !important;
}
/*-----------------changeImg------------------------*/
.changeImg{
  height: 450px;
  width: 100%;
  position: relative;
  /*overflow: hidden;*/
}
.changeImg .changeImg_imgs{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.changeImg .changeImg_imgs ul{
  width: 400%;
  height: 100%;
  transition: margin-left 1s linear 0.1s;
}
.changeImg .changeImg_imgs ul li{
  width: 25%;
  height: 100%;
  position: relative;
  float: left;
}
.changeImg .changeImg_imgs ul li .ci_content{
  position: absolute;
  top: 50%;
  right: 15%;
  width: 40%;
  height: 30%;
  background-color: black;
  opacity: 0.3;
  color: white;
  padding: 20px;
  box-sizing: border-box;
}
.changeImg .changeImg_imgs ul li .ci_content .ci_title{
  font-size: 1.1em;
  width: 100%;
  height: 26px;
  margin-bottom: 30px;
}
.changeImg .changeImg_imgs ul li .ci_content .ci_detail{
  font-size: 0.9em;
  width: 100%;
  height: 40px;
}
.changeImg .changeImg_lbtn{
  background-image: url(".././assets/ind_images/limg.svg");
  position: absolute;
  left: 0;
  top: 0;
}
.changeImg .changeImg_rbtn{
  background-image: url(".././assets/ind_images/rimg.svg");
  position: absolute;
  right: 0;
  top: 0;
}
.changeImg .changeImg_btn{
  background-color: #dadada;
  background-repeat: no-repeat;
  background-position: center;
  width: 15%;
  height: 100%;
  opacity: 0.2;
  z-index: 2;
}
.changeImg .changeImg_btn:hover{
  opacity: 0.6;
}
.changeImg .btns{
  position: absolute;
  top: 85%;
  right: 15%;
  width: 120px;
  height: 20px;
  padding:0;
}
.changeImg .btns li{
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: black;
  text-align: center;
  color: #fff;
  margin-left: 5px;
}
.changeImg .btns .on {
  background-color: #ffa000;
}
.topimgs1{
  background-size: cover;
  background-position: center;
  background-image: url("./../assets/ind_images/top1.jpg");
}
.topimgs2{
  background-size: cover;
  background-position: center;
  background-image: url("./../assets/ind_images/top2.jpg");
}
.topimgs3{
  background-size: cover;
  background-position: center;
  background-image: url("./../assets/ind_images/top3.jpg");
}
.topimgs4{
  background-size: cover;
  background-position: center;
   background-image: url("./../assets/ind_images/top4.jpg");
 }

/*--------------------------strategyContain------------------------*/
.strategyContain{
  width: 1200px;
  margin: auto;
  margin-top: 30px;
}
.strategyContain .sc_title{
  font-size: 1.2em;
  width: 100%;
  margin-top: 30px;
  /*color:#ffa000;*/
}
.strategyContain .sc_list ul{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}
.strategyContain .sc_list ul li{
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
}
.strategyContain .sc_list ul li:hover{
  transition: margin-top 0.4s,box-shadow 0.4s linear 0.1s;
  margin-top: 5px;
  box-shadow: 0 3px 5px 2px #dadada;
}
.strategyContain .sc_list ul li a .sc_list_img{
  width: 100%;
  height: 142px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
.strategyContain .sc_list ul li a .sc_list_title{
  width: 100%;
  height: 80px;
  padding: 10px 20px;
  box-sizing: border-box;
  font-size: 1.3em;
}
.strategyContain .sc_list ul li a .sc_list_content{
  width: 100%;
  height: 100px;
  padding: 0 20px 10px;
  box-sizing: border-box;
  font-size: 0.9em;
}
.strategyContain .sc_list ul li .sc_list_info{
  height: 44px;
  padding: 10px;
  box-sizing: border-box;
}
.strategyContain .sc_list ul li .sc_list_info .sc_list_info_icon{
  display: inline-block;
  width: 18px;
  height: 17px;
  margin: 5px 5px 0 10px;
  background-repeat: no-repeat;
  background-size: cover;
}
.strategyContain .sc_list ul li .sc_list_info .sc_list_info_love{
  background-image: url(".././assets/ind_images/heart.svg");
}
.strategyContain .sc_list ul li .sc_list_info .sc_list_info_comment{
  background-image: url(".././assets/ind_images/message.svg");
}
.strategyContain .sc_list ul li .sc_list_info span{
  display: inline-block;
  height: 18px;
  font-size: 1.1em;
  color:#ff6c00;
}
.strategyContain .sc_more{
  display: block;
  width: 100%;
  height: 78px;
  font-size: 1.2em;
  line-height: 78px;
  text-align: center;
  color: #ff6000;
  border: solid 1px #eeeeee;
}
/*----------------------------goodsContain------------------------------------------*/
.goodsContain{
  width: 1200px;
  margin: auto;
  margin-top: 30px;
}
.goodsContain .gc_title{
  font-size: 1.2em;
  width: 100%;
  margin-top: 30px;
  color:#ffa000;
}
.goodsContain .gc_list ul{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}
.goodsContain .gc_list ul li{
  min-width: 297px;
  max-width: 297px;
  height: 360px;
  margin-top: 10px;
  margin-right: 3px;
  box-sizing: border-box;
  flex: 1;
  background-color: #ffffff;
  padding: 30px;
}
.goodsContain .gc_list ul li:hover{
  transition: margin 0.4s,box-shadow 0.4s linear 0.1s;
  margin-top: 7px;
  box-shadow: 3px 3px 3px 1px #dadada;
}
.goodsContain .gc_list ul li a .gc_image{
  width: 237px;
  height: 237px;
  background-color: #ffa000;
  margin-bottom: 15px;
}
.goodsContain .gc_list ul li a .gc_title{
  width: 100%;
  height: 28px;
  margin-bottom: 10px;
  margin-top: 0;
}
.goodsContain .gc_list ul li .gc_massage{
  width: 100%;
  height: 22px;
}
.gc_massage .gc_message_l{
  float: left;
  height: 100%;
}
.gc_massage .gc_message_l i{
  display: inline-block;
  width:10px;
  height: 16px;
  background: url(".././assets/ind_images/rmb.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-top: 5px;
}
.gc_massage .gc_message_l span{
  margin-left: 5px;
  height: 100%;
  color: #ff6c00;
  font-size: 1.2em;
  font-weight: 200;
}
.gc_massage .gc_message_r{
  float: right;
  height: 100%;
}
.gc_massage .gc_message_r i{
  display: inline-block;
  width: 16px;
  height: 16px;
  margin: 5px 5px 0 10px;
  background-repeat: no-repeat;
  background-size: cover;
}
.gc_massage .gc_message_r .gc_like{
  background-image: url(".././assets/ind_images/heart.svg");
}
.gc_massage .gc_message_r .gc_comment{
  background-image: url(".././assets/ind_images/message.svg");
}
.gc_massage .gc_message_r span{
  display: inline-block;
  height: 18px;
  font-size: 1.1em;
  font-weight: 200;
}
.goodsContain .gc_more{
  display: block;
  width: 100%;
  height: 78px;
  font-size: 1.2em;
  line-height: 78px;
  text-align: center;
  color: #ff6000;
  border: solid 1px #eeeeee;
  margin-top: 10px;
}
/*-----------------------------------postContain------------------------------------*/
.postContain{
  width: 1200px;
  margin: 30px auto;
}
.postContain .pc_title{
  font-size: 1.2em;
  width: 100%;
  margin-bottom: 30px;
}
.postContain .pc_message{
  width: 100%;
}
.postContain .pc_message .pc_message_content{
  width: 30%;
  float: left;
  font-size: 0.8em;
  margin-bottom: 5px;
}
.postContain .pc_message .pc_message_post{
  width: 600px;
  height: 90px;
  float: right;
}
.postContain .pc_message .pc_message_post .pc_message_post_{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.postContain .pc_message .pc_message_post .pc_message_post_ ul{
  width: 400%;
  height: 100%;
  transition: margin-left 1s linear 0.1s;
}
.postContain .pc_message .pc_message_post .pc_message_post_ ul li{
  width: 25%;
  height: 100%;
  float: left;
  color: #000;
}
.pc_m_p_l{
  width: 70px;
  height: 90px;
  float: left;
}
.pc_m_p_l a .pc_m_p_l_img{
  display: block;
  width: 55px;
  height: 55px;
  margin: auto;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
}
.pc_m_p_l a .pc_m_p_l_nickname{
  width: 70px;
  height: 20px;
  font-size: 0.9em;
  text-align: center;
  margin-top: 5px;
}
.pc_m_p_r{
  float: left;
  margin-left: 10px;
  width: 500px;
  height: 90px;
}
.pc_m_p_r a .pc_m_p_r_title{
  font-weight: 400;
  /*margin-top: 5px;*/
  height: 25px;
}
.pc_m_p_r a .pc_m_p_r_content{
  font-size: 0.9em;
  font-weight: 200;
  width: 100%;
  height: 55px;
  margin-top: 5px;
}
.postContain .pc_message .pc_message_btns{
  float: right;
  width: 100px;
  height: 90px;
  padding: 15px 21px;
  box-sizing: border-box;
}
.pc_message_btns .lar .left{
  background: url(".././assets/ind_images/l1.svg");
  margin-right: 5px;
  background-color: #ffa000;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-position: center center;
  display: inline-block;
}
.pc_message_btns .lar .right{
  background: url(".././assets/ind_images/r1.svg");
  background-color: #ffa000;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-position: center center;
  display: inline-block;
}
.pc_message_btns .pc_m_btns_more{
  width: 100%;
  height: 24px;
  font-size: 0.9em;
  margin-top: 5px;
  color: #333333;
}


</style>
