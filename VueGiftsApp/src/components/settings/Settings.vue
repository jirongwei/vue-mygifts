
<template>
  <div class="container" id="personal-basic">
    <div class="col-md-12">
      <div id="content-container" class="container">
        <div class="row">
          <div class="col-md-3">

            <!--左侧导航-->
            <settingsNav></settingsNav>
          </div>

          <div class="col-md-9 my-show-passage">

            <!--个人设置模块-->
            <div class="panel panel-default panel-col" style="margin-top: 30px">
              <div class="panel-heading">基础信息</div>
              <div class="panel-body">

                <span class="my-passage-tip">完善个人资料是让别人认识你的第一步</span>

                <form id="user-profile-form" class="form-horizontal" method="post">

                  <!--div:用户名-->
                  <div class="form-group">
                    <label class="col-md-2 control-label">用户名</label>
                    <div class="col-md-7 controls">
                      <div class="Info_username" v-text="userBasic.user__telephone"></div>
                    </div>
                  </div>

                  <!--DIY昵称-->
                  <div class="form-group">
                    <label class="col-md-2 control-label nickname-label" for="Info-nickname"><em class="sign">*</em>DIY昵称</label>
                    <div class="col-md-7 controls radios">
                      <input type="text" id="Info-nickname" class="form-control Info-input" name="Info_nickname" @blur="showNickname" v-model="UserNickname=userBasic.nickname">
                    </div>
                    <div class="col-md-2 controls hidden-xs warning-box box-nickname" v-if="isNickname">
                      <span class="warn-icon"></span>
                      <span class="warn-text">昵称不能为空</span>
                    </div>
                    <div class="col-md-4 col-md-offset-2 basic-tip">用于礼物论坛提问回复,显示系统登录名</div>
                  </div>

                  <!--性别-->
                  <div class="form-group">
                    <label class="col-md-2 control-label">性别</label>
                    <div class="col-md-7 controls radios">
                      <div class="Info_gender">
                        <input type="radio" id="Info-gender-0" name="Info_gender" required="required" value="male" :checked="userBasic.gender__sexname=='男'" @click="getUserSex">
                        <label for="Info-gender-0" class="required">男</label>
                        <input type="radio" id="Info-gender-1" name="Info_gender" required="required" value="female" :checked="userBasic.gender__sexname=='女'" @click="getUserSex">
                        <label for="Info-gender-1" class="required">女</label>
                        <input type="radio" id="Info-gender-2" name="Info_gender" required="required" value="secrecy" :checked="userBasic.gender__sexname=='保密'" @click="getUserSex">
                        <label for="Info-gender-2" class="required">保密</label>
                      </div>
                    </div>
                  </div>

                  <!--城市-->
                  <div class="form-group form-forIam-group form-notStudent-group">
                    <label class="col-md-2 control-label"><em class="sign">*</em>城市</label>
                    <div class="col-md-7 controls" id="city-wrap">
                      <input type="text" id="Info-city" name="Info_city" class="form-control Info-input" v-model="UserLocation=userBasic.location">
                    </div>
                    <div class="col-md-4 col-md-offset-2 basic-tip">留下居住地的足迹</div>
                  </div>

                  <!--个人签名-->
                  <div class="form-group">
                    <label class="col-md-2 control-label"><em class="sign">*</em>个人签名</label>
                    <div class="col-md-7 controls">
                      <textarea type="text" rows="4" maxlength="80" id="Info-signature" name="Info_signature" @keyup = "descInput" v-model="UserSignature=userBasic.signature" class="form-control Info-input" placeholder="用一段话介绍你自己，会在你的个人页面显示"></textarea>
                    </div>
                    <div class="col-md-4 col-md-offset-2 basic-tip">还可以输入<em id="count_chars" v-text="num_word"></em>个字符</div>
                  </div>

                  <!--联系信息-->
                  <div class="contact-info panel-heading">联系信息</div>

                  <!--真实姓名-->
                  <div class="form-group">
                    <label class="col-md-2 control-label"><em class="sign">*</em>真实姓名</label>
                    <div class="col-md-7 controls">
                      <input type="text" id="Info-name" name="Info_name" class="form-control Info-input" v-model="UserName=userBasic.username">
                    </div>
                    <div class="col-md-5 col-md-offset-2 basic-tip">用于礼物商品的寄送，不会以任何形式向第三方透露</div>
                  </div>

                  <!--微博-->
                  <div class="form-group">
                    <div class="col-md-2 control-label">
                      <label for="Info-email">邮箱</label>
                    </div>
                    <div class="col-md-7 controls">
                      <input type="text" id="Info-email" name="Info_email" class="form-control" v-model="UserEmail=userBasic.user__email">
                    </div>
                  </div>

                  <!--qq-->
                  <div class="form-group">
                    <label for="Info-qq" class="col-md-2 control-label"><em class="sign">*</em>QQ</label>
                    <div class="col-md-7 controls">
                      <input type="text" id="Info-qq" name="Info_qq" class="form-control Info-input" v-model="UserQQ=userBasic.qq">
                    </div>
                    <div class="col-md-2 controls mts"><input type="checkbox" name="Info_isQQPublic" value="1">公开</div>
                    <div class="col-md-5 col-md-offset-2 basic-tip">定时更新物流信息，最新私信动态</div>
                  </div>

                  <div class="row">
                    <div class="col-md-7 col-md-offset-2">
                      <a href="#" class="btn btn-primary" id="btn-save" @click="updateUserBasic()">
                        保存
                      </a>
                    </div>
                  </div>
                </form>

              </div>
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
  name: 'Settings',
  data () {
    return {
      // 昵称不能为空
      isNickname:false,

      num_word:80,

      // 存放用户基本信息
      userBasic:[],
      UserNickname:'',
      UserSex:'',
      UserLocation:'',
      UserSignature:'',
      UserEmail:'',
      UserName:'',
      UserQQ:'',

    }
  },
    mounted:function () {
      this.getUserBasic();
    },

    methods:{
      // 获取用户选择性别
      getUserSex:function(e){
        let $day_id = $(e.target).val();
        if($day_id == 'male'){
          this.UserSex = 1;
        }else if($day_id == 'female'){
          this.UserSex = 2;
        }else{
          this.UserSex = 3;
        }

      },
      // 获取用户基本信息
      getUserBasic:function(){
        let vm = this;
        axios({
          method:'POST',
          url:this.GLOBAL.HOST+'user/userinfo/',
          headers:{"token":sessionStorage.getItem("token")}
        })
        .then(function (response) {
          vm.userBasic = response.data.userMsg[0];
        })
        .catch(function (error) {
          console.log(error)
        });
      },

      // 修改用户基本信息
      updateUserBasic:function(){
        let vm = this;
        axios({
          method:'POST',
          url:this.GLOBAL.HOST+'user/updatemsg/',
          data:{
            "nickname":this.UserNickname,
            "gender_id":this.UserSex,
            "location":this.UserLocation,
            "signature":this.UserSignature,
            "username":this.UserName,
            "qq":this.UserQQ,
            "email":this.UserEmail
          },
          headers:{"token":sessionStorage.getItem("token")}
        })
        .then(function (response) {
          if(response.data.code == '808'){
            alert('保存成功');
          }
        })
        .catch(function (error) {
          console.log(error)
        });
      },

      // 昵称不能为空
      showNickname:function () {
        if(this.UserNickname){
          this.isNickname = false;
        }else{
          this.isNickname = true;
        }
      },
      // 个性签名
      descInput(){
        let maxChars=80; // 设置最大字符数 p
        let curr=maxChars-this.UserSignature.length;
        if(curr>0){
          this.num_word=curr.toString();
        }else{
          this.num_word='0';
        }
      },

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /*基本信息--------------------*/
  .form-horizontal .form-group {
    margin-bottom: 30px;
  }

  .Info_username{
    display: inline-block;
    min-height: 34px;
    padding: 6px 0;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;
  }

  div.panel-default > div.panel-heading {
    position: relative;
    font-size: 16px;
    padding: 15px 0;
    border-bottom: 2px solid #f5f5f5;
    color: #919191;
    text-indent: 20px;
    background: #fff;
  }

  /*特别提示符号 *----*/

  em.sign{
    color: red;
    font-size: 20px;
    margin-right: 5px;
    vertical-align: middle;
  }

  .Info-input{
    margin-top: 3px;
  }

  /*警告昵称合法性---*/
  .warning-box{
    padding-top: 8px;
  }

  .warn-icon{
    float: left;
    background: url("../../assets/my-icons/common.png") no-repeat 0 0;
    width: 20px;
    height: 20px;
  }

  .warn-text{
    float: left;
    line-height: 22px;
    text-align: left;
    color: #cc3333;
  }

  /*不合法提示信息---*/

  .my-passage-tip{
    color: #919191;
    font-size: 12px;
    display: block;
    margin: -10px 0 20px 5px;
  }

  .basic-tip{
    font-size: 12px;
    color: #919191;
    padding-top: 5px;
  }

  /*性别标签---*/

  div.Info_gender *{
    margin-top: 8px;
    cursor: pointer;
  }

  div.Info_gender label{
    color:  #919191;
    margin-right: 10px;
  }

  /*联系信息---*/
  div.contact-info{
    font-size: 16px;
    padding: 15px 0;
    border-bottom: 2px solid #f5f5f5;
    margin: 0 0 25px 10px;
    color: #919191;
    background: #fff;
  }

  /*[保存按钮]---*/
  #btn-save{
    background: #0099e5;
    border: none;
  }

  /*省市区三级联动---*/
  ._citys {
    position: absolute;
    width: 282px;
    display: inline-block;
    background: #eee;
    padding: 5px;
    height: 305px;
    overflow: hidden;
  }

  ._citys span {
    color: #56b4f8;
    height: 15px;
    width: 15px;
    line-height: 15px;
    text-align: center;
    border-radius: 3px;
    position: absolute;
    right: 10px;
    top: 10px;
    border: 1px solid #56b4f8;
    cursor: pointer;
  }

  ._citys0 {
    width: 100%;
    height: 34px;
    display: inline-block;
    border-bottom: 2px solid #56b4f8;
    padding: 0;
    margin: 0;
  }

  ._citys0 li {
    display: inline-block;
    line-height: 34px;
    font-size: 15px;
    color: #888;
    width: 80px;
    text-align: center;
    cursor: pointer;
  }

  .citySel {
    background-color: #56b4f8;
    color: #fff !important;
  }

  ._citys1 {
    width: 100%;
    display: inline-block;
    padding: 10px 0;
    height: 270px;
    overflow: scroll;
  }

  ._citys1 a {
    width: 83px;
    height: 35px;
    display: inline-block;
    background-color: #f5f5f5;
    color: #666;
    margin-left: 6px;
    margin-top: 3px;
    line-height: 35px;
    text-align: center;
    cursor: pointer;
    font-size: 13px;
    overflow: hidden;
  }

  ._citys1 a:hover {
    color: #fff;
    background-color: #56b4f8;
  }

  .AreaS {
    background-color: #56b4f8 !important;
    color: #fff !important;
  }

  #PoPy {
    top: 35px;
  }
  ._citys1 {
    padding-bottom: 50px;
  }




</style>
