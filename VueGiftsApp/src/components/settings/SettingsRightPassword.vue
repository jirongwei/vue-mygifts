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
            <input v-model.lazy="input_old_pwd" id="form-currentPassword" value="" name="form_currentPassword" class="form-control" type="password" placeholder="请输入当前密码">
          </div>
        </div>

        <div class="form-group">
          <div class="col-md-2 control-label">
            <label for="form-newPassword" class="required">新密码</label>
          </div>
          <div class="controls col-md-8 controls">
            <input v-model.lazy="input_new_pwd" id="form-newPassword" name="form_newPassword" class="form-control" type="password" placeholder="新密码由6-16位字母、数字符号组成">
          </div>
        </div>

        <div class="form-group">
          <div class="col-md-2 control-label">
            <label for="form-confirmPassword" class="required">确认密码</label>
          </div>
          <div class="controls col-md-8 controls">
            <input v-model.lazy="confirm_password" id="form-confirmPassword" name="form_confirmPassword" class="form-control" type="password" placeholder="请确认新密码">
          </div>
          <div class="col-md-5 col-md-offset-2 controls hidden-xs warning-box box-confirmPassword" v-if="showNewPwd">
            <span class="warn-icon"></span>
            <span class="warn-text" id="warn-conpwd-tip" v-text="err_current"></span>
          </div>
        </div>

        <div class="form-group">
          <div class="col-md-2 control-label"></div>
          <div class="controls col-md-8 controls">
            <a id="password-save-btn" class="btn btn-primary" @click="updateSubmit()">提交</a>
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
      // 判断新密码
      showNewPwd:false,
      err_current:'',

      input_old_pwd:'',
      input_new_pwd:'',
      confirm_password:'',
      reg_password:/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/,



    }
  },

  methods: {
    // 提交修改密码
    updateSubmit: function () {
      let vm = this;
      if (this.check_form()) {
        let updateMsg = {
          "old_pwd": this.input_old_pwd,
          "new_pwd": this.input_new_pwd,
        };
        axios({
          method:'POST',
          url:this.GLOBAL.HOST+'user/updatepwd/',
          data:updateMsg,
          headers:{"token":sessionStorage.getItem("token")}
        })
        .then(function (response) {
          if(response.data.code == '808'){
            vm.showNewPwd = false;
            vm.err_current = '';
            alert('修改成功')
          }else if(response.data.code == '401'){
            vm.showNewPwd = true;
            vm.err_current = '用户名与密码不匹配';
          }else if(response.data.code == '410'){
            alert('登录已过期')
          }else if(response.data.code == '403'){
            alert('修改失败')
          }
        })
        .catch(function (error) {
          console.log(error)
        });

      }
    },
    check_form: function () {
      if (!this.input_old_pwd || !this.input_new_pwd || !this.confirm_password) {
        this.showNewPwd = true;
        this.err_current = '修改列表不能为空'
      }
      else if (!this.reg_password.test(this.input_old_pwd) || !this.reg_password.test(this.confirm_password)
        || !this.reg_password.test(this.input_new_pwd)) {
        this.showNewPwd = true;
        this.err_current = '密码格式不规范'
      }
      else if (this.input_new_pwd != this.confirm_password) {

        this.showNewPwd = true;
        this.err_current = '两次密码输入不一致'
      }
      else {
        this.showNewPwd = false;
        this.err_current = '';
        return true
      }


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
