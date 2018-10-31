<template>
  <div class="col-md-12 my-show-passage" style="margin: 30px 0 128px 0">

    <div class="panel panel-default panel-col">
      <div class="panel-heading">安全设置</div>
      <div class="panel-body">

        <!--进度条-->
        <div class="row safety-setting">
          <div class="col-xs-2 tar">
            <span class="glyphicon glyphicon-info-sign text-danger" id="tar-process" style="color: red;"></span>
          </div>
          <div class="col-sm-6 col-xs-5">
            <div class="progress mbs">
              <div class="progress-bar" id="bar-process" style="width: 34%;"></div>
            </div>
          </div>
          <div class="col-sm-4 col-xs-5">
            <span class="text-danger" style="color: red;margin-left: -5px">安全等级：低</span>
          </div>
        </div>

        <hr>

        <!--修改密码-->
        <div class="row">
          <div class="col-xs-2 tar text-success">
            <span class="glyphicon glyphicon-ok"></span>
          </div>

          <span class="col-sm-3 col-xs-6" style="margin-top: 5px;">登录密码</span>

          <span class="col-sm-4 hidden-xs" style="margin-top: 5px;">登录时需要输入的密码</span>

          <button  class="col-xs-offset-1 btn btn-primary update-pwd-btn" @click="$emit('updatePwd')">修改</button>
        </div>

        <hr>

        <!--绑定手机号-->
        <div class="row">
          <div class="col-xs-2 tar text-danger">

            <span class="glyphicon glyphicon-warning-sign" style="color: red"></span>
          </div>

          <span class="col-sm-3 col-xs-6" style="margin-top: 5px;">手机绑定</span>

          <span class="col-sm-4 hidden-xs" style="margin-top: 5px;">账户登录、个人数据的安全性，同时还可以找回登录密码，重置邮箱等。</span>

          <button  class="col-xs-offset-1 btn btn-primary bind-phone-btn" @click="$emit('bindPhone')">绑定</button>
        </div>

        <hr>

        <!--绑定微信-->
        <div class="row">
          <div class="col-xs-2 tar text-danger">

            <span class="glyphicon glyphicon-warning-sign" style="color: red"></span>
          </div>

          <span class="col-sm-3 col-xs-6" style="margin-top: 5px;">微信绑定</span>

          <span class="col-sm-4 hidden-xs" style="margin-top: 5px;">绑定微信，了解最新动态，同时还可以实现小程序数据互通等。</span>
          <button class="col-xs-offset-1 btn btn-primary bind-weixin-btn" @click="$emit('weixin',true)">绑定</button>
        </div>
        <hr>

      </div>


    </div>




  </div>
</template>

<script>

  import axios from 'axios'
  export default {
  name: 'SettingsRightSafe',
  data () {
    return {
      current_obj:''


    }
  },
    mounted:function () {

    },

    methods:{

      // 跳转修改密码
      toRight:function (e) {
        // 改变选中样式
        let $obj = $(e.target);
        this.current_nav = $obj.attr('current_obj');
        alert(this.current_nav);

        // 改变右边模块显示
        this.$emit('changeright', this.current_nav)
      }


    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  div.panel-default > div.panel-heading {
    position: relative;
    font-size: 16px;
    padding: 15px 0;
    border-bottom: 2px solid #f5f5f5;
    color: #919191;
    text-indent: 20px;
    background: #fff;
  }

  /*安全设置-------------------------*/
  .safety-setting{
    margin-top: 10px !important;
  }

  .tar{
    text-align: right;
    font-size: 20px;
  }

  #tar-process{
    font-size: 20px;
  }

  #bar-process{
    background: #0099e5;
    border: none;
  }

  .text-success {
    color: #70d445 !important;
  }

  .update-pwd-btn,.bind-phone-btn,.bind-weixin-btn{
    margin-top: -3px !important;
    background: #0099e5 !important;
    border: none !important;
  }

  /*安全设置 3.绑定微信*/
  #modal-weixin{
    width: 100%;
    height: 100%;
    /*background: #333333;*/
    background: red;
    padding: 50px;

  }

  .impowerBox{
    line-height: 1.6;
    position: relative;
    width: 100%;
    z-index: 1;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
  }

  .impowerBox .title{
    text-align: center;
    font-size: 20px;
    line-height: 1.6;
    color: #fff;
  }

  .impowerBox .qrcode{
    width: 280px;
    margin-top: 15px;
    border: 1px solid #E2E2E2;
  }

  .impowerBox .info{
    width: 280px;
    margin: 0 auto;
  }

  .impowerBox .status.status_browser{
    text-align: center;
  }

  .impowerBox .status{
    padding: 7px 14px;
  }

  .impowerBox .status.normal{
    margin-top: 15px;
    background-color: #232323;
    border-radius: 100px;
    box-shadow: inset 0 5px 10px -5px #191919, 0 1px 0 0 #444;
    color: #fff;
  }



</style>
