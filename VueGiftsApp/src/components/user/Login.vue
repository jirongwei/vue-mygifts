<template>
  <div class="login">

    <div class="close-btn">

      <!--关闭登录页面 跳转首页-->
      <span class="glyphicon glyphicon-remove" aria-hidden="true" @click.prevent.stop="$emit('IndexLogin')"></span>

    </div>

    <div class="div-login">
      <h1 class="h1-welcome">
        欢迎回来
        <span>还不是会员?<a href="#" @click.prevent.stop="$emit('UserRegist')">立即注册</a></span>
      </h1>

      <div class="user-acount">
        <span class="tel-image"></span>
        <input class="username" type="text" name="username" placeholder="手机号/邮箱" v-model="user.telephone" @blur="validateTel()">
      </div>

      <div class="user-password">
        <span class="pwd-image"></span>
        <input class="password" type="password" placeholder="密码" v-model="user.password" @blur="validatePwd()">
      </div>
      <div class="help-block" v-text="helpMsg"></div>
      <input type="button" value="登  录" class="login-btn" @click="Login()" >
      <div>
        <input type="checkbox" id="auto_login" @click="remember" v-model="checked"><label for="auto_login">记住密码</label>
        <a href="#">忘记密码?</a>
      </div>

      <div class="login-bottom">
        <div>
          <p>您还可以通过以下方式直接登录</p>
          <hr>
        </div>

        <div class="login-image">
          <a href="#"><span></span><strong>微信</strong></a>
          <a href="#"><span></span><strong>微博</strong></a>

        </div>
      </div>

    </div>

  </div>


</template>

<script>

  import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {

      // 用户登录信息
      user:{
        telephone:"",
        password:""
      },
      // 验证不合法提示信息
      helpMsg:'',
      // 是否记住密码
      checked:null,

    }
  },
  mounted:function(){
    // 是否记住密码
    setTimeout(()=>{
      this.helpMsg='';
    },5000);
    if(localStorage.getItem("tel")){
      this.user.telephone=localStorage.getItem('tel');
      this.user.password=localStorage.getItem('pwd');
      this.checked=true;
    }else{
      this.checked=false;
    }
  },

  methods:{
    // 用户登录
    Login:function () {
      let vm=this;
      if(!vm.user.username && !vm.user.password){
        vm.helpMsg='请输入手机号码或邮箱';
      }else{
        // 表单验证
        let flag_tel=vm.validateTel();
        let flag_pwd=vm.validatePwd();

        // 发送axios请求数据
        if(flag_tel && flag_pwd){
          axios({
            method:'POST',
            url:this.GLOBAL.HOST+'user/login/',
            data:this.user
          })
          .then(function (response) {
            if(response && response.data.id){
              sessionStorage.setItem('telephone', vm.user.telephone);
              sessionStorage.setItem('token', response.headers.token);
              sessionStorage.setItem('u_id', response.data.id);

              // 关闭登录窗口
              // vm.$router.push('/');
              vm.$emit('LoginSuccess')

            //   登录成功跳转刷新当前页
            //   let from = sessionStorage.getItem('from');
            //   if (from) {
            //     // location.href = from;
            //     vm.$router.push({path: from});
            //   } else {
            //     vm.$router.push({path: "/"});
            //   }
            }

            // 该用户不存在 跳转注册界面
            if (response && response.data.code == '403') {
              vm.$emit('UserRegist');
            }

            // 用户名或密码错误
            if (response && response.data.code == '409') {
              vm.helpMsg = '用户名或密码错误';
            }
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          });
        }
      }
    },

    // 记住密码
    remember:function(){
      if(!this.checked){
        this.checked=true;
        localStorage.setItem("tel",this.user.telephone);
        localStorage.setItem("pwd",this.user.password);
      }else{
        this.checked=false;
        localStorage.setItem("tel",'');
        localStorage.setItem("pwd",'');
      }
    },

    // 手机号码表单验证
    validateTel:function () {
      let reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      let regEmail= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

      if(this.user.telephone==''){
        this.helpMsg='请输入手机或邮箱';
        return false;

      }else if(!reg.test(this.user.telephone) && !regEmail.test(this.user.telephone)){
        this.helpMsg='手机号码格式不正确';
        return false;

      }else{
        this.helpMsg='';
        return true;
      }
    },

    // 密码验证
    validatePwd:function () {
      let reg_pwd=/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/;
      if(this.user.password==''){
        this.helpMsg='请输入密码';
        return false;
      }else if(!reg_pwd.test(this.user.password)){
        this.helpMsg='密码包含数字、字母，长度6-20';
        return false;
      }else{
        this.helpMsg='';
        return true;
      }
    }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /*定义全局样式*/
  *{
    margin: 0;
    padding: 0;
  }

  ul, li{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  h1,h2,h3,h4,h5,h6{
    margin: 0 0 5px;
    line-height: 1.35;
    color: #000;
    font-weight: normal;
  }

  /*[登录]模态框*/
  .login{
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
  .login .close-btn span{
    position: absolute;
    left: 1020px;
    top: 145px;
    font-size: 28px;
    cursor: pointer;
  }

  .login .close-btn span:hover{
    color: lightgray;
  }


  /*用户登录*/
  div.div-login{
    width: 400px;
    background: #fff;
    border: solid 1px gray;
    border-radius: 5px;
    position: relative;
    z-index: 100000 !important;
    opacity: 1;
  }

  div.div-login>h1.h1-welcome{
    margin-bottom: 30px;
    font-size: 18px;
    color: #2b2b2b;
    text-align: left;
  }

  div.div-login h1.h1-welcome span{
    float: right;
    margin-top: 5px;
    font-size: 14px;
    color: #2d2d2e;
    font-weight: normal;
  }

  div.div-login span a{
    margin-left: 10px;
    color: #d24381;
  }

  div.div-login span a:hover{
    text-decoration: underline;
  }

  .help-block{
    font-size: 13px;
    color: red;
    height: 20px;
  }

  div.user-acount,div.user-password{
    position: relative;
    margin-bottom: 10px;
  }

  div.div-login div.user-acount input,div.user-password input{
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
    text-indent: 25px;
  }

  div.div-login div.user-acount input:focus,div.user-password input:focus{
    border: solid 1px orange;
  }

  div.user-acount span.tel-image{
    width: 32px;
    height: 32px;
    position: absolute;
    background: url("../../assets/my-icons/tel-image.svg") no-repeat 0 2px;
  }

  div.user-password span.pwd-image{
    width: 32px;
    height: 32px;
    position: absolute;
    background: url("../../assets/my-icons/pwd-image.svg") no-repeat 2px 3px;
  }

  div.div-login>input[type='password']{
    margin-top: 12px;
    margin-bottom: 26px;
    outline: none;
  }

  div.div-login>input[type='button']{
    width: 100%;
    height: 45px;
    padding: 0;
    line-height: 45px;
    font-size: 18px;
    color: #fff;
    background-color: #000;
    cursor: pointer;
    margin-bottom: 12px;
    outline: none;
    border: none;
    border-radius: 3px;
  }

  div.div-login>input[type='button']:focus{
    border: solid 1px gray;
  }


  div.div-login>input[type='button']:hover{
    background: #2b2b2b;
  }

  div.div-login div:nth-child(6){
    width: 100%;
    height: 30px;
  }

  div.div-login div:nth-child(6)>label{
    font-size: 14px;
    margin-left: 5px;
    color: #2d2d2e;
    cursor: pointer;
  }

  div.div-login div:nth-child(6)>a{
    float: right;
    font-size: 14px;
    color: #2b2b2e;
  }

  div.div-login div:nth-child(6)>a:hover{
    text-decoration: underline;
  }


  div.div-login div:last-child>div:first-child p{
    position: relative;
    left: 90px;
    z-index: 2;
    float: left;
    padding: 0 15px;
    font-size: 14px;
    color: #bfbfbf;
    background-color: #f8f8f8;
    margin-top: 16px;
  }

  div.div-login div:last-child>div:first-child hr{
    position: relative;
    top: -9px;
    z-index: 1;
    width: 100%;
    border: none;
    border-bottom: 1px solid #c2c2c2;
  }

  div.div-login div:last-child>div:last-child{
    text-align: center;
    padding-top: 15px;
    height: 93px;
    width: 100%;
  }

  .login-bottom div.login-image a{
    display: inline-block;
    width: 52px;
    margin: 0 12px 0 12px;
  }

  .login-bottom div.login-image strong{
    font-size: 14px;
    color: #bfbfbf;
    font-weight: normal;
  }

  .login-bottom div.login-image span{
    width: 52px;
    height: 52px;
    display: inline-block;
    background: url('../../assets/my-icons/icon-login-bg.png') no-repeat;

  }

  .login-bottom div.login-image a:first-child span{
    background-position: 0 -1px;
  }

  .login-bottom div.login-image a:last-child span{
    background-position: 0 -63px;
  }

  .login-bottom div.login-image a:first-child span:hover{
    background: url('../../assets/my-icons/icon-login-bg.png') no-repeat -54px -1px;

  }

  .login-bottom div.login-image a:last-child span:hover{
    background: url('../../assets/my-icons/icon-login-bg.png') no-repeat -54px -63px;

  }


</style>
