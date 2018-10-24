<template>

  <div class="container-fluid">
    <div class="user-center-header has-blurr">
      <div class="blurr-bg" :style="{background: blurr}"></div>
      <div class="container clearfix" id="personal-head">
        <div class="user-avatar">
          <div class="avatar-wrap">
            <img class="avatar-lg" src="../../assets/user-icon/head_icon_1.jpg">
          </div>
          <div class="nickname">
            Memorial小怪咖
          </div>
          <div class="position">
            <span class="mrm">暂无头衔</span>
          </div>
          <div class="mates">
            <span class="mrm">0</span>粉丝<span class="mlm mrm">｜</span><span class="mrm">0</span>关注<span class="mlm mrm">｜</span><span class="mrm">0</span>积分
          </div>
        </div>
        <div class="user-about hidden-sm hidden-xs">
          <div class="user-about-content">
            暂无签名      </div>
        </div>
      </div>
      <router-link to="/settings">
        <div class="settings-btn hidden-md hidden-xs hidden-sm">
          <a href="#" class="btn-set">
            <i class="btn-set-img"></i>个人设置
          </a>
        </div>
      </router-link>
      <div class="mask"></div>
    </div>

  </div>



</template>

<script>
export default {
  name: 'PersonalHeader',
  data () {
    return {
      blurr:'url(' + require('../../assets/user-icon/head_icon_1.jpg') + ') center center / 150%',


    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .user-center-header {
    position: relative;
    height: 220px;
    padding: 40px 0;
    background-color: #313131;
    z-index: 1;
    overflow: hidden;
  }

  /*设置背景图片为头像放大模糊化*/
  .blurr-bg{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 1519px;
    filter: blur(60px);
    -webkit-filter:blur(60px);
    transform: translateZ(0px);

  }


  #personal-head{
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
  }

  @media(max-width: 1199px){
    .user-center-header .container {
      padding: 0 30px !important;
    }
  }

  .user-center-header .user-avatar {
    position: relative;
    float: left;
    width: 66.67%;
    padding-left: 140px;
  }

  @media (max-width: 767px){
    .user-center-header .user-avatar {
      text-align: center;
      padding-left: 0;
    }
  }

  @media (max-width: 991px){
    .user-center-header .user-avatar {
      width: 100%;
      float: none;
    }
  }


  .avatar-wrap{
    position: absolute;
    top: 0;
    left: 0;
    border: 6px solid rgba(255, 255, 255, 0.5);
    display: inline-block;
    border-radius: 50%;
    margin-left: -40px;
  }

  @media (max-width: 767px){
    .user-center-header .user-avatar .avatar-wrap {
      position: relative;
      margin-bottom: 10px;
      border: 3px solid rgba(255, 255, 255, 0.5);
      margin-left: -10px;
    }
  }


  .avatar-lg{
    border-radius: 50%;
    width: 120px !important;
    height: 120px !important;
  }

  @media (max-width: 767px){
    .user-center-header .user-avatar .avatar-wrap .avatar-lg {
      width: 60px !important;
      height: 60px !important;
    }
  }


  .user-center-header .nickname{
    color: #fff;
    font-size: 18px;
    margin-bottom: 10px;
  }

  .user-center-header .position{
    margin-bottom: 10px;
    color: rgba(255, 255, 255, 0.5);
  }

  .mrm{
    margin-right: 10px !important;
  }

  .mlm {
    margin-left: 10px !important;
  }

  .user-center-header .mates{
    font-size: 18px;
    margin-bottom: 15px;
    color: #fff;
  }

  .user-center-header .user-about{
    float: left;
    width: 33.33%;
    padding: 15px 10px;
    background-color: rgba(255, 255, 255, 0.3);
    color: #fff;
    border-radius: 4px;
    margin-left: -100px;
  }

  .user-center-header .user-about-content{
    height: 100px;
    overflow: hidden;
    line-height: 25px;
  }

  .user-center-header .mask{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0 !important;
  }

  /*[个人设置]按钮*/
  .user-center-header div.settings-btn{
    position: absolute;
    right: 160px;
    top: 80px;
    line-height: 48px;
    vertical-align: middle;
    height: 48px;
    width: 110px;
    cursor: pointer;
    z-index: 101;
  }

  @media (max-width: 991px) anx (min-width: 768px) {
    .user-center-header div.settings-btn{
      position: absolute;
      right: 225px;

    }
  }


  .settings-btn a.btn-set{
    position: relative;
    padding: 8px 16px 8px 32px;
    border: 1px solid rgba(255,255,255,.4);
    border-radius: 18px;
    font-size: 18px;
    line-height: 20px;
    height: 20px;
    color: rgba(255,255,255,.4);
    text-decoration: none;

  }

  .settings-btn a.btn-set i.btn-set-img{
    position: absolute;
    left: 6px;
    top: 10px;
    width: 20px;
    height: 20px;
    background: url("../../assets/my-icons/settings.svg") center no-repeat;
  }

  .user-center-header div.settings-btn:hover a{
    cursor: pointer;
    border: 2px solid rgba(255,255,255,.8);
    color: rgba(255,255,255,.8);
  }

</style>
