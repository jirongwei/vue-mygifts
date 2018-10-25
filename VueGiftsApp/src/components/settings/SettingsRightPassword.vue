<template>
  <div class="panel panel-default panel-col" style="margin: 30px 0 210px 0">
    <div class="panel-heading">安全设置</div>
    <div class="panel-body">

      <ul class="breadcrumb">
        <li><a href="#">安全设置</a></li>
        <li class="active">登录密码修改</li>
      </ul>

      <form class="form-horizontal" method="post">

        <div class="form-group">
          <div class="col-md-2 control-label">
            <label for="form-currentPassword" class="required">当前密码</label>
          </div>
          <div class="controls col-md-8 controls">
            <input id="form-currentPassword" value="" name="form_currentPassword" class="form-control" type="password" placeholder="请输入当前密码">
          </div>
          <div class="col-md-5 col-md-offset-2 controls hidden-xs warning-box box-pwdError" v-if="showOldPwd">
            <span class="warn-icon"></span>
            <span class="warn-text" v-text="err_old"></span>
          </div>
        </div>

        <div class="form-group">
          <div class="col-md-2 control-label">
            <label for="form-newPassword" class="required">新密码</label>
          </div>
          <div class="controls col-md-8 controls">
            <input id="form-newPassword" name="form_newPassword" class="form-control" type="password" placeholder="新密码由6-16位字母、数字符号组成">
          </div>
        </div>

        <div class="form-group">
          <div class="col-md-2 control-label">
            <label for="form-confirmPassword" class="required">确认密码</label>
          </div>
          <div class="controls col-md-8 controls">
            <input id="form-confirmPassword" name="form_confirmPassword" class="form-control" type="password" placeholder="请确认新密码">
          </div>
          <div class="col-md-5 col-md-offset-2 controls hidden-xs warning-box box-confirmPassword" v-if="showNewPwd">
            <span class="warn-icon"></span>
            <span class="warn-text" id="warn-conpwd-tip" v-text="err_current"></span>
          </div>
        </div>

        <div class="form-group">
          <div class="col-md-2 control-label"></div>
          <div class="controls col-md-8 controls">
            <a id="password-save-btn" class="btn btn-primary">提交</a>
          </div>
        </div>

      </form>

    </div>
  </div>
</template>

<script>

  import axios from 'axios'
  export default {
  name: 'SettingsRightPassword',
  data () {
    return {
      // 判断当前密码
      showOldPwd:false,
      err_old:'',

      // 判断新密码
      showNewPwd:false,
      err_current:'',



    }
  },
    mounted:function () {

    },

    methods:{


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

  /*安全设置 1.修改密码*/
  ul.breadcrumb li a{
    text-decoration: none;
    color: #919191;
    transition: all 0.3s ease;
  }

  ul.breadcrumb li a:hover{
    color: #0099e5;
  }

  #password-save-btn{
    background: #0099e5;
    border: none;
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
