
<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <SettingsLeft @changeright="changeRight"></SettingsLeft>
        </div>
        <div class="col-md-9">
          <SettingsRight @flushnav="$emit('flushnav')" v-if="showRight" @changeright="changeRight" :nowShow="rightName"  @SettingsWeixin="WeixinModel"></SettingsRight>
        </div>
      </div>

      <!--微信模态框-->
      <div class="panel-body" id="weixin-panel" v-show="showWeixin" @click="HideWeixin">
        <div id="modal-weixin">
          <div class="main impowerBox">
            <div class="loginPanel normalPanel">
              <div class="title">微信登录</div>
              <div class="waiting panelContent">
                <div class="wrp_code"><img class="qrcode lightBorder" src="../../assets/my-icons/safe_weixin.png"></div>
                <div class="info">
                  <div class="status status_browser js_status normal" id="wx_default_tip">
                    <p>请使用微信扫描二维码登录</p>
                    <p>“左心房”</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer>

    <!--<MakeSureDel v-if="showTip" @quxiaoclick="showTip=false" @sureclick="delAddr(addr.id)"></MakeSureDel>-->

  </div>

</template>

<script>
  import axios from 'axios'
  import SettingsLeft from'./SettingsLeft'
  import SettingsRight from'./SettingsRight'
  // import MakeSureDel from './MakeSureDel'

  export default {
  name: 'Settings',
  data () {
    return {
      // shoeTip:false,
      // 强制刷新子组件
      showRight: true,
      // 右侧显示当前组件名
      rightName: 'RightBasicInfo',

      // 显示微信模态框
      showWeixin:false
    }
  },
    components:{
      SettingsLeft,
      SettingsRight
      // MakeSureDel
  },
    methods:{

    // 切换右边容器
      changeRight: function(name){
        this.showRight = false;
        this.$nextTick(() =>{
          this.rightName = name;
          this.showRight = true;
        })
      },

      // 微信model
      WeixinModel:function (e) {
        this.showWeixin = e;
      },
      HideWeixin:function () {
        this.showWeixin = false;
      }

    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /*安全设置 3.绑定微信*/

  #weixin-panel{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1001;
    padding: 0;
    margin: 0;

  }

  #modal-weixin{
    width: 100%;
    height: 100%;
    background: #333333;
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
