<template>

  <!--尾部布局-->
  <footer id="footer">
    <div class="footer-top">
      <div class="footer-top-image">
        <a href="#"></a>
      </div>

      <dl>
        <dt><h3>介绍</h3></dt>
        <dd><a href="#">关于我们</a></dd>
        <dd><a href="#">用户协议</a></dd>
        <dd><a href="#">版权申明</a></dd>
      </dl>

      <dl>
        <dt><h3>社区</h3></dt>
        <dd><a href="#">热门</a></dd>
        <dd><a href="#">交友</a></dd>
        <dd><a href="#">隐私条款</a></dd>
        <dd><a href="#">帮助</a></dd>
      </dl>

      <dl>
        <dt><h3>创意礼物</h3></dt>
        <dd><a href="#">创意专区</a></dd>
        <dd><a href="#">如何购买</a></dd>
        <dd><a href="#">意见反馈</a></dd>
        <dd><a href="#">送礼顾问</a></dd>
      </dl>

      <dl>
        <dt><h3>联系我们</h3></dt>
        <dd><a href="#">88-8888-8888</a></dd>
        <dd><a href="#">left-heart@lh.com</a></dd>
      </dl>
    </div>

    <div class="footer-middle">
      <strong class="bt">友情链接:</strong>

      <div class="link">
        <a target="_blank" href="http://www.51fashion.com.cn/">饰品品牌</a>
        <a target="_blank" href="http://zhidao.cocodiy.com/">礼物百科</a>
        <a target="_blank" href="http://pet.pclady.com.cn/">宠物</a>
        <a target="_blank" href="http://www.53shop.com/">53货源网</a>
        <a target="_blank" href="http://www.huangye88.com/">黄页88网</a>
        <a target="_blank" href="http://www.vsigo.cn/">隐形眼镜</a>
        <a target="_blank" href="http://www.lovenus.cn/">求婚钻戒</a>
        <a target="_blank" href="http://www.darryring.com/">darry ring</a>
        <a target="_blank" href="http://www.zbird.com/">钻石小鸟</a>
        <a target="_blank" href="http://www.hua.com/">鲜花网</a>
        <a target="_blank" href="http://www.hao224.com/">团购网</a>
        <a target="_blank" href="http://www.zhidiy.com/">手工制作</a>
        <a target="_blank" href="http://www.91lai.com/">返利网</a>
        <a target="_blank" href="http://www.cunan.com/">村安商城</a>
        <a target="_blank" href="http://www.qqqnm.com/">海淘</a>
        <a target="_blank" href="http://iask.sina.com.cn/c/166.html">爱问礼节礼仪</a>
        <a target="_blank" href="http://www.36588.com.cn/">个性礼品定制</a>
        <a target="_blank" href="http://www.hznzcn.com/">女装批发</a>
        <a target="_blank" href="http://www.hunliji.com/">婚纱摄影</a>
        <a target="_blank" href="http://www.drlmeng.com/">多肉植物</a>
        <a target="_blank" href="/about/link.html">更多</a>
      </div>
    </div>

    <div class="copyright">
      <span>© 2018 leftheart.com All Rights Reserved. 鲁ICP备09018381号</span>
      <span class="bottom-image"></span>
      <span>鲁公网安备37021302000046号</span>
    </div>

  </footer>

</template>

<script>
export default {
  name: 'NavBottom',
  data () {
    return {

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

  a{
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  #footer{
    width: 100%;
    text-align: center;
    padding: 20px 0 0 0;
    border-top: solid 3px lightgray;
  }

  div.footer-top{
    width: 1200px;
    height: 172px;
    margin: 0 auto;
    padding: 30px 0 30px 0;
  }

  .footer-top div.footer-top-image{
    float: left;
    width: 190px;
    margin-right: 50px;
  }

  .footer-top div.footer-top-image a{
    display: block;
    width: 200px;
    height: 56px;
    margin-top: 58px;
    background: url("../../assets/nav/logo-header.png") center no-repeat;
  }

  dl {
    display: block;
  }

  div.footer-top dl{
    float: left;
    width: 240px;
    text-align: left;
  }

  div.footer-top dl dt{
    line-height: 26px;
    margin-bottom: 10px;
    font-size: 16px;
    color: #333;
  }

  div.footer-top dl dd{
    line-height: 26px;
  }

  div.footer-top dl dd a{
    color: #666;
  }

  div.footer-middle{
    width: 1200px;
    height: 70px;
    margin: 0 auto 0 auto;
    border: 1px solid #e6e6e6;
    border-left: none;
    border-right: none;
    padding: 8px 0 0 0;
    text-align: left;
  }

  div.footer-middle strong.bt{
    float: left;
    width: 75px;
    line-height: 26px;
    font-weight: normal;
    color: #666;
  }

  div.footer-middle div.link{
    float: left;
    width: 1125px;
    line-height: 26px;
  }

  div.footer-middle div.link a{
    margin-right: 15px;
    color: #c1c1c1;
    display: inline-block;
    zoom: 1;
    vertical-align: top;
    line-height: 26px;
  }

  div.copyright{
    clear: both;
    text-align: center;
    width: 100%;
    height: 40px;
    margin-bottom: 0;
  }

  div.copyright span{
    line-height: 40px;
    float: left;
    font-size: 14px;
    color: darkgray;
  }

  div.copyright span:first-child{
    margin-left: 29%;
  }

  div.copyright span.bottom-image{
    width: 20px;
    height: 20px;
    background: #ff6000;
    background: url("../../assets/my-icons/beian.jpg") no-repeat;
    margin-top: 10px;
  }

</style>
