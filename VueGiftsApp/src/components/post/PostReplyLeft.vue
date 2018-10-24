<template>
  <div class="contain_left">
    <div class="postReply_nav">
      <ul>
        <li>
          <a href="" class="{on:postnav}" @click.prevent="changeReply">收到的评论</a>
        </li>
        <li>
          <a href="" class="{on:!postnav}" @click.prevent="changeReply">曾经的评论</a>
       </li>
      </ul>
    </div>
    <div class="postReply_con">
      <ul>
        <li v-for="postreply in postReplys" :id="postreply.replyID">
          <div class="pitem_cont">
            <div class="replyImg" v-bind:style="{backgroundImage:'url('+postreply.replymanImg+')'}"></div>
            <div class="replycontent">
              <div class="pitem_author">
                <a href="" v-text="postreply.replymanNickname" :id="'replyman'+postreply.replymanID"></a>
              </div>
              <div class="pitem_date" v-text="postreply.replyTime"></div>
              <div class="post_cont">
                <span >回复</span>
                <a class="font_color" v-text="'@'+postreply.username"></a>
                <span v-text="postreply.replycontent"></span>
              </div>

              <div class="old_reply">
                <span>回复我的评论：</span>
                <a src="" v-text="'回复@'+postreply.replymanNickname+':'+postreply.oldreplycontent">回复@阿正鹿丸丸:无论如何，他母亲都活不下来</a>
              </div>
            </div>
          </div>
          <div class="pitem_nav">
            <a href="" class="jub">举报</a>
            <div class="reply">
              <input type="text" v-model="replycontent">
              <a href="" >回复</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PostReply",
        // props:[user],
        mounted:function(){
          var vm=this;
          // axios.post("",{
          //   postnav:postNav,
          //   userid:user.userid,
          //   postpage:postPage
          // })
          //   .then(function (response) {
          //     vm.postReplys=response.data
          //   })
          //   .catch(function (error) {
          //     console.log(error)
          //   })
        },
        data:function () {
          return{
            //其中username要通过父组件向子组件传值获取，这里是假数据
            replycontent:"",
            user:{
              userid:"1",
              username:"疯流涕淌"
            },
            postReplys:[
              {
                replyID:"1",
                replymanID:"2",
                replymanImg:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3626678142,3205717399&fm=26&gp=0.jpg",
                replyTime:"10月8日 11:34",
                replymanNickname:"阿正鹿丸丸",
                replycontent:"大王也有杀境州母亲的动机  没那么大， 对大王来说  真都督死后  假都督比真都督都还真   还有利用价值",
                oldreplycontent:"无论如何，他母亲都活不下来",
                username:"疯流涕淌"
              },
              {
                replyID:"1",
                replymanID:"2",
                replyTime:"10月8日 11:34",
                replymanImg:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3626678142,3205717399&fm=26&gp=0.jpg",
                replymanNickname:"阿正鹿丸丸",
                replycontent: "31没那么大， 对大王来说  真都督死后  假都督比真都督都还真   还有利用价值",
                oldreplycontent:"无论如何，他母亲都活不下来",
                username:"疯流涕淌"
              }
            ],
            postNav:true,
            postPage:1
          }
        },
        methods:{
          changeReply:function () {
            this.postNav = !this.postNav;
            var vm=this;
            // axios.post('',{
            //   postnav:postNav,
            //   userid:user.userid,
            //   postpage:postPage
            // })
            //   .then(function (response) {
            //     vm.postReplys=response.data
            //   })
            //   .catch(function (error) {
            //     console.log(error)
            //   })
          },
          replyotherReply:function (oldrId) {
            var vm=this;
            // axios.post("",{
            //   userid:user.userid,
            //   oldrplyID:oldrId,
            //   replycon:replycontent
            // })
            //   .then(function (response) {
            //     alert(评论成功);
            //     vm.changeReply();
            //   })
            //   .catch(function (error) {
            //     console.log(error)
            //   })
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
html,body{
  background-color: #f7f8f8!important;
}
.clear{
  clear: both;
}
.contain_left{
  min-height: 736px;
  width: 67%;
  background-color: white;
  float: left;
}
.contain_left .postReply_nav{
  width: 100%;
  height: 60px;
}
.contain_left .postReply_nav ul{
  height: 100%;
  border-bottom: solid 1px #dadada;
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
  font-weight: 200;
}
.contain_left .postReply_nav ul li .on{
  font-weight: 500;
}
.contain_left .postReply_con ul{
  width: 100%;
}
.contain_left .postReply_con ul li{
  width:100%;
  padding:20px 20px 10px 20px;
  box-sizing: border-box;
  border-bottom: dashed 1px #dadada;
  position: relative;
  font-size: 0.8em;
}
.contain_left .postReply_con ul li .replyImg{
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ff4000;
  background-size:cover;
  background-position: center;
  position: absolute;
  top: 20px;
  left: 20px;
}
.contain_left .postReply_con ul li .replycontent{
  display: inline-block;
  margin-left: 70px;
  width: 580px;
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
.contain_left .postReply_con ul li .post_cont .font_color{
  color: #ff8000;
  text-decoration: none;
  cursor: pointer;
}
.contain_left .postReply_con ul li .old_reply{
  background-color: #f2f2f5;
  padding: 5px 16px;
  box-sizing: border-box;
}
.contain_left .postReply_con ul li .old_reply span{
  font-weight: 200;
}
.contain_left .postReply_con ul li .old_reply a{
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
}
.contain_left .postReply_con ul li .pitem_nav{
  width: 100%;
  font-weight: 200;
  margin-bottom: 0;
}
.contain_left .postReply_con ul li .pitem_nav .jub{
  padding: 7px 70px;
  box-sizing: border-box;
  font-weight: 200;
  border-right: solid 1px #dadada;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  color: #000;
}
.contain_left .postReply_con ul li .pitem_nav .reply{
  display: inline-block;
  padding: 7px 30px;
  box-sizing: border-box;
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

</style>
