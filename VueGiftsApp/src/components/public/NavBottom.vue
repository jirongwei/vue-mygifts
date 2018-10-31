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
    background: #333;
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
    margin-top: 29px;
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
    color: white;
  }

  div.footer-top dl dd{
    line-height: 26px;
  }

  div.footer-top dl dd a{
    color: #666;
  }

  div.footer-top dl dd a:hover{
    color: #f4604b;
  }

  div.copyright{
    clear: both;
    text-align: center;
    width: 100%;
    height: 40px;
    border-top: solid 2px #666;
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
