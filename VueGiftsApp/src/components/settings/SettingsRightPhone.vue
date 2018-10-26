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
            <input v-model.lazy="input_old_pwd" type="password" id="password" name="password" class="form-control" value="" placeholder="请输入当前登录密码">
          </div>
        </div>

        <div class="form-group row">
          <div class="col-md-3 control-label"><label for="mobile">手机号码</label></div>
          <div class="col-md-4 controls">
            <input v-model.lazy="input_telephone" type="text" id="mobile" name="mobile" class="form-control" value="" placeholder="请输入手机号">
          </div>
        </div>

        <div class="form-group row">
          <div class="col-md-3 control-label"><label for="sms-code">短信验证码</label></div>

          <div class="col-md-2 controls">
            <input v-model.lazy="input_code" type="text" id="sms-code" name="sms_code" class="form-control" value="">
          </div>

          <div class="col-md-4 controls">
            <a href="#modal" data-toggle="modal" class="btn btn-default btn-sm js-sms-send" @click.prevent.stop="getPhoneCode()">
              <span id="js-time-left"></span>
              <span id="js-fetch-btn-text" v-text="codeMsg"></span>
            </a>
          </div>
          <div class="col-md-5 col-md-offset-3 controls hidden-xs warning-box box-code" v-if="showError">
            <span class="warn-icon"></span>
            <span class="warn-text" id="warn-code-tip" v-text="err_message"></span>
          </div>

        </div>
        <div class="form-group row">
          <div class="col-md-4 col-md-offset-3  controls">
            <a id="submit-btn" class="btn btn-primary" @click="bindPhone()">提交</a>
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

      // 判断数据合法性
      showError:false,
      err_message:'',

      codeMsg:'获取短信验证码',

      reg_telephone:/^1[3456789]\d{9}$/,
      reg_password:/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/,
      input_old_pwd:'',
      input_telephone:'',
      input_code:'',

    }
  },
    mounted:function () {

    },

    methods:{
      // 获取手机验证码
      getPhoneCode:function () {
        // 发送请求验证码
        let vm = this;
        axios.get(this.GLOBAL.HOST+'user/sendmessage/'+vm.input_telephone+'/')
          .then(function (response) {
            if(response.data.code == '408'){
              alert('该手机号已被绑定')
            }
          })
          .catch(function (error) {
            console.log(error)
          });
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
      },

      // 绑定手机号
      bindPhone:function(){
        let vm = this;
        if(this.check_form()){
          let bindMsg = {
            "old_pwd": this.input_old_pwd,
            "new_telephone": this.input_telephone,
            "phone_code":this.input_code
          };
          axios({
            method:'POST',
            url:this.GLOBAL.HOST+'user/bindphone/',
            data:bindMsg,
            headers:{"token":sessionStorage.getItem("token")}
          })
            .then(function (response) {
              if(response.data.code == '808'){
                vm.showNewPwd = false;
                vm.err_current = '';
                alert('绑定成功')
              }else if(response.data.code == '402'){
               alert('该用户已绑定')
              }else if(response.data.code == '410'){
                alert('登录已过期')
              }
            })
            .catch(function (error) {
              console.log(error)
            });

        }
      },

      check_form : function () {
        if(!this.input_old_pwd || !this.input_telephone || !this.input_code) {
          this.showError = true;
          this.err_message = '绑定列表不能为空';
        }
        else if(!this.reg_telephone.test(this.input_telephone)){
          this.showError = true;
          this.err_message = '请输入正确的手机号'
        }
        else if (!this.reg_password.test(this.input_old_pwd)){
          this.showError = true;
          this.err_message = '密码格式不规范'
        }
        else{
          this.showError = false;
          this.err_message = '';
          return true
        }
      },


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
