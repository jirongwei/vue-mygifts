
<template>
  <div class="regist">

    <div class="close-btn">
      <!--关闭登录页面 跳转首页-->
      <span class="glyphicon glyphicon-remove" aria-hidden="true" @click.prevent.stop="$emit('IndexRegist')"></span>
    </div>

    <div class="div-regist">
      <h1 class="h1-welcome">
        注册
        <span>已经是会员?<a href="#" @click="$emit('UserLogin')">立即登录</a></span>
      </h1>

      <div class="regist-phone">
        <div class="tel-image">
          <span class="tel-regist-image"></span>
          <input type="text" placeholder="手机号" class="regist-telephone" v-model.lazy="telephone">
        </div>

        <div class="code-image">
          <span class="tel-code-image"></span>
          <input type="text" placeholder="短信验证码" class="phone-code" v-model.lazy="telCode">
          <input class="btn-code" type="button" :disabled="disabled" v-model="codeMsg" @click="mobileCode()">
        </div>

      </div>


      <div class="pwd-input">
        <span class="pwd-image"></span>
        <input type="password" class="regist-pwd" placeholder="密码由6-20位字母、数字符号组成" v-model.lazy="password">
      </div>

      <div class="confirm-input">
        <span class="confirm-image"></span>
        <input type="password" class="regist-pwd-confirm" placeholder="确认密码" v-model.lazy="password_confirm">
      </div>

      <div class="regist-code">
        <span class="validate-image"></span>
        <input type="text" placeholder="右图中字母数字" class="code-content" v-model.lazy="my_vcode">
        <canvas id="canvas" width="150px" height="50px" @click="validateCode" v-model.lazy="validate_code"></canvas>
      </div>

      <div class="regist-agree">
        <input type="checkbox" id="checked-agree" class="check-agree" @click="remember" v-model="checked"><label for="checked-agree">我已阅读和同意</label>
        <span class="tip-server">《左心房服务条款》</span>
      </div>
      <div class="help-block" v-text="err_message"></div>

      <input class="btn-regist" type="button" value="注  册" @click="Register()">

    </div>



  </div>





</template>

<script>

  import axios from 'axios'
  import {drawPic} from "../../../static/js/vcode";

export default {
  name: 'Regist',
  inject:['reload'],
  data () {
    return {
      // 存放验证码
      validate_code:'',
      my_vcode:'',


      // 用户名密码
      telephone:'',
      password:'',
      reg_telephone:/^1[3456789]\d{9}$/,
      reg_password:/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/,

      password_confirm:'',
      err_message:'',
      checked:true,
      codeMsg:'获取验证码',

      // 存放用户输入短信验证码
      telCode:'',
      disabled:false,



    }
  },
  mounted:function(){
    // 模板渲染完成,加载验证码
    this.validateCode();
  },
  methods:{

    // 单击事件更换验证码
    validateCode:function () {
      this.validate_date=drawPic();
    },

    // 选择同意服务
    remember:function(){
      if(!this.checked){
        this.checked = true;
      }else{
        this.checked = false;
      }
    },

    // 用户注册
    Register:function() {
      let vm = this;
      // 用户注册数据
      if(this.check_form()){
        let user = {
          "telephone":this.telephone,
          "password":this.password,
          "message_code":this.telCode
        };
        axios({
          method:'POST',
          url:this.GLOBAL.HOST+'user/regist/',
          data:user
        })
          .then(function (response) {
            if(response.headers.token){
              sessionStorage.setItem("token",response.headers.token);
              sessionStorage.setItem("telephone",vm.telephone);
              sessionStorage.setItem("u_id",response.data.id);

              vm.$emit('RegistSuccess')


            }
            else{
              if(response.data.code == '407'){
                vm.err_message = '验证码过期'
              }
              if(response.data.code == '401'){
                vm.err_message = '用户名已存在';
              }else{
                vm.err_message = '未知错误 请重试';
              }
            }
          })
          .catch(function (error) {
            console.log(error)
          });
      }
    },
    check_form : function () {
      if(!this.telephone || !this.password || !this.password_confirm || !this.my_vcode){
        this.err_message = '注册列表不能为空'
      }else if(this.validate_date != this.my_vcode){
        this.err_message = '验证码错误'
      }else if(!this.checked){
        this.err_message = '请同意服务条款'
      }
      else if(!this.reg_telephone.test(this.telephone)){
        this.err_message = '请输入正确的手机号'
      }
      else if (!this.reg_password.test(this.password)||!this.reg_password.test(this.password_confirm)){
        this.err_message = '密码格式不规范'
      }
      else if (this.password != this.password_confirm){
        this.err_message = '两次密码输入不一致'
      }
      else{
        this.err_message = '';
        return true
      }
    },

    // [获取验证码]按钮
    mobileCode:function () {
      if(this.reg_telephone.test(this.telephone)){
        this.disabled = true;
        // 发送请求验证码
        let vm = this;
        axios.get(this.GLOBAL.HOST+'user/sendmessage/'+vm.telephone+'/')
          .then(function (response) {
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
            this.disabled = false;
          }
        },1000);
      }
    }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  *{
    margin: 0;
    padding: 0;
  }

  h1,h2,h3,h4,h5,h6{
    margin: 0 0 5px;
    line-height: 1.35;
    color: #000;
    font-weight: normal;
  }

  ul,a,div{
    list-style: none;
    text-decoration: none;
  }

  .regist{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #000;
    z-index: 1040;
    opacity: 0.80;
    display:flex;
    justify-content:center;
    align-items:center;
  }

  /*close按钮*/
  .regist .close-btn span{
    position: absolute;
    left: 1020px;
    top: 145px;
    font-size: 28px;
    cursor: pointer;
  }

  .regist .close-btn span:hover{
    color: lightgray;
  }

  div.div-regist{
    width: 400px;
    background: white;
    border: solid 1px darkgray;
    border-radius: 5px;
    text-align: center;
  }

  div.div-regist>h1.h1-welcome{
    margin-bottom: 30px;
    font-size: 18px;
    color: #2b2b2b;
    text-align: left;
  }

  div.div-regist h1.h1-welcome span{
    float: right;
    margin-top: 5px;
    font-size: 14px;
    color: #2d2d2e;
    font-weight: normal;
  }

  div.div-regist span a{
    margin-left: 10px;
    color: #d24381;
  }

  div.div-regist span a:hover{
    text-decoration: underline;
  }

  div.div-regist input{
    height: 35px;
    box-sizing: border-box;
    width: 100%;
    padding: 8px 10px;
    border: 1px solid #bfbfbf;
    border-radius: 3px;
    line-height: 14px;
    font-size: 14px;
    color: #2b2b2b;
    outline: none;
    margin-bottom: 15px;
    text-indent: 25px;
  }

  div.regist-phone div.tel-image span.tel-regist-image{
    width: 32px;
    height: 32px;
    position: absolute;
    background: url("../../assets/my-icons/tel-image.svg") no-repeat 0 2px;
  }

  div.regist-phone div.code-image{
    position: relative;
  }

  div.regist-phone div.code-image span.tel-code-image{
    width: 32px;
    height: 32px;
    position: absolute;
    left:0;
    background: url("../../assets/my-icons/message_image.svg") no-repeat 6px 6px;
    opacity: 0.6;
  }

  div.regist-phone div.code-image input[type="text"]{
    float: left;
    width: 75%;
    text-indent: 25px;
  }

  div.regist-phone div.code-image input:last-child{
    float: right;
    width: 22%;
    text-indent: 0;
    cursor: pointer;
  }

  div.regist-phone>input:last-child{
    height: 32px;
    margin-top: 2px;
    border-radius: 2px;
    padding: 0;
    border: 1px solid #bfbfbf;
    line-height: 31px;
    font-size: 14px;
    color: #2d2d2e;
    background-color: #fff;

  }

  div.regist-phone div.tel-image{
    position: relative;
  }

  .help-block{
    clear: both;
    text-align: left;
    font-size: 13px;
    color: red;
    height: 20px;
    padding-top: 5px;
  }

  div.regist-phone div.code-image input:last-child:hover{
    border-color: rgba(42, 53, 48, 0.58);
  }

  div.pwd-input,div.confirm-input{
    clear: both;
    position: relative;
  }
  div.pwd-input span{

    width: 32px;
    height: 32px;
    position: absolute;
    background: url("../../assets/my-icons/pwd-image.svg") no-repeat 4px 3px;
    opacity: 0.6;
  }

  div.confirm-input span{

    width: 32px;
    height: 32px;
    position: absolute;
    background: url("../../assets/my-icons/pwd-image.svg") no-repeat 4px 3px;
    opacity: 0.6;
  }

  div.regist-code{
    position: relative;
  }


  div.regist-code input{
    display: inline-block;
    width: 75%;
    margin-left: -11px;
  }

  div.regist-code span{
    width: 32px;
    height: 32px;
    position: absolute;
    left: 0;
    background: url("../../assets/my-icons/validate_image.svg") no-repeat 6px 6px;
    opacity: 0.6;
  }

  div.regist-code canvas{
    float: right;
    width: 22%;
    height: 32px;
    margin-top: 2px;
    border-radius: 2px;
    cursor: pointer;
  }

  div.div-regist input[type="text"]:focus,div.div-regist input[type="password"]:focus{
    border: solid 1px orange;
  }


  div.div-regist div.regist-agree input{
    margin: -1px 0 0 6px;
    float: left;
    width: 13px;
    height: 13px;
  }

  div.div-regist div.regist-agree label{
    margin-top: -3px;
    float: left;
    font-size: 14px;
    margin-left: 5px;
    color: #2d2d2e;
  }

  div.div-regist div.regist-agree span{
    margin-top: -3px;
    float: left;
    cursor: pointer;
    color: #0099cc;
    font-size: 14px;

  }

  div.div-regist>input:last-child{
    width: 100%;
    height: 45px;
    font-size: 18px;
    color: #fff;
    background-color: #000;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 5px;
    text-indent: -10px;
  }

  div.div-regist>input:last-child:hover{
    background: #2b2b2b;
  }








</style>
