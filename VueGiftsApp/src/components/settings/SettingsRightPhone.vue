<template>
  <div class="panel panel-default panel-col" style="margin: 30px 0 170px 0">
    <div class="panel-heading">绑定手机</div>
    <div class="panel-body">
      <ul class="breadcrumb">
        <li><a href="#">安全设置</a></li>
        <li class="active">手机号码绑定</li>
      </ul>

      <form class="form-horizontal" method="post">

        <div class="form-group row">
          <div class="col-md-3 control-label"><label for="password">您的登录密码</label></div>
          <div class="col-md-4 controls">
            <input type="password" id="password" name="password" class="form-control" value="" placeholder="请输入当前登录密码">
            <div class="col-md-5 col-md-offset-3 controls hidden-xs warning-box box-bindPhone" v-if="showPwd">
              <span class="warn-icon"></span>
              <span class="warn-text" id="warn-password-tip" v-text="err_pwd"></span>
            </div>
          </div>
        </div>

        <div class="form-group row">
          <div class="col-md-3 control-label"><label for="mobile">手机号码</label></div>
          <div class="col-md-4 controls">
            <input type="text" id="mobile" name="mobile" class="form-control" value="" placeholder="请输入手机号">
          </div>
          <div class="col-md-5 col-md-offset-3 controls hidden-xs warning-box box-bindPhone" v-if="showPhone">
            <span class="warn-icon"></span>
            <span class="warn-text" id="warn-phone-tip" v-text="err_phone"></span>
          </div>
        </div>

        <div class="form-group row">
          <div class="col-md-3 control-label"><label for="sms-code">短信验证码</label></div>

          <div class="col-md-2 controls">
            <input type="text" id="sms-code" name="sms_code" class="form-control" value="">
          </div>

          <div class="col-md-4 controls">
            <a href="#modal" data-toggle="modal" class="btn btn-default btn-sm js-sms-send" @click.prevent.stop="getPhoneCode()">
              <span id="js-time-left"></span>
              <span id="js-fetch-btn-text" v-text="codeMsg"></span>
            </a>
          </div>
          <div class="col-md-5 col-md-offset-3 controls hidden-xs warning-box box-code" v-if="validate_code">
            <span class="warn-icon"></span>
            <span class="warn-text" id="warn-code-tip" v-text="err_code"></span>
          </div>

        </div>
        <div class="form-group row">
          <div class="col-md-4 col-md-offset-3  controls">
            <a id="submit-btn" class="btn btn-primary">提交</a>
          </div>
        </div>


      </form>


    </div>
  </div>

</template>

<script>

  import axios from 'axios'
  export default {
  name: 'SettingsRightPhone',
  data () {
    return {
      // 判断当前密码
      showPwd:false,
      err_pwd:'',

      // 判断手机号
      showPhone:false,
      err_phone:'',

      // 判断验证码
      validate_code:false,
      err_code:'',

      codeMsg:'获取短信验证码',





    }
  },
    mounted:function () {

    },

    methods:{
      // 获取手机验证码
      getPhoneCode:function () {
        // 发送请求验证码


        // 判断获取验证码时间
        let timer = 60;
        this.codeMsg = timer+'(s)';
        let auth_time = setInterval(()=>{
          timer--;
          this.codeMsg = timer+'(s)';
          if(timer <= 0){
            this.codeMsg = '获取验证码';
            clearInterval(auth_time);
          }
        },1000);
      }


    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .form-horizontal .form-group {
    margin-bottom: 30px;
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

  ul.breadcrumb li a{
    text-decoration: none;
    color: #919191;
    transition: all 0.3s ease;
  }

  ul.breadcrumb li a:hover{
    color: #0099e5;
  }


  /*安全设置 2.绑定手机*/
  #submit-btn{
    background: #0099e5;
    border: none;
  }

  .btn-default {
    color: #616161;
    background-color: #f5f5f5;
    border-color: #dcdcdc;
    transition: all 0.3s ease;
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





</style>
