<template>
  <div id="personal-wrap">
      <personal-header></personal-header>

      <div id="content-container" class="container">
        <ul class="nav nav-tabs clearfix">
          <li>
            <router-link to="/personal">
              <a href="#">个人介绍</a>
            </router-link>

          </li>
          <li  class="active">
            <router-link to="/personalmycollection">
              <a href="#" >我的收藏</a>
            </router-link>

          </li>

          <li>
            <router-link to="">
              <a href="#" >我的点赞</a>
            </router-link>

          </li>

          <li>
            <router-link to="/trends">
              <a href="#" >动态圈</a>
            </router-link>

          </li>

          <li>
            <router-link to="">
              <a href="#">粉丝交友</a>
            </router-link>

          </li>
        </ul>

        <div class="tab-content personal-content">
          <div class="rt-section-body">

            <div class="container-fluid">
              <div class="row personal-gifts">
                <div class="col-md-3 col-sm-6">
                  <div class="rt-gift-wrap">
                    <div class="gift-layer"></div>
                    <div class="gift-mask">
                      <a href="#" class="btn btn-warning btn-lg gift-mask-btn">查看详情</a>
                    </div>
                    <div class="gift-item">
                      <a href="#">
                        <img src="../../assets/goods/goods_eggs.jpg" alt="" class="img-responsive">
                      </a>
                      <div class="gift-info clearfix">
                        <div class="gift-info-mask"></div>
                        <div class="gift-title">趣易表情套装</div>
                        <div class="gift-metas">共有10 个</div>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="rt-gift-wrap">
                    <div class="gift-layer"></div>
                    <div class="gift-mask">
                      <a href="#" class="btn btn-warning btn-lg gift-mask-btn">查看详情</a>
                    </div>
                    <div class="gift-item">
                      <a href="#">
                        <img src="../../assets/goods/goods_eggs.jpg" alt="" class="img-responsive">
                      </a>
                      <div class="gift-info clearfix">
                        <div class="gift-info-mask"></div>
                        <div class="gift-title">趣易表情套装</div>
                        <div class="gift-metas">共有10 个</div>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="rt-gift-wrap">
                    <div class="gift-layer"></div>
                    <div class="gift-mask">
                      <a href="#" class="btn btn-warning btn-lg gift-mask-btn">查看详情</a>
                    </div>
                    <div class="gift-item">
                      <a href="#">
                        <img src="../../assets/goods/goods_eggs.jpg" alt="" class="img-responsive">
                      </a>
                      <div class="gift-info clearfix">
                        <div class="gift-info-mask"></div>
                        <div class="gift-title">趣易表情套装</div>
                        <div class="gift-metas">共有10 个</div>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="rt-gift-wrap">
                    <div class="gift-layer"></div>
                    <div class="gift-mask">
                      <a href="#" class="btn btn-warning btn-lg gift-mask-btn">查看详情</a>
                    </div>
                    <div class="gift-item">
                      <a href="#">
                        <img src="../../assets/goods/goods_eggs.jpg" alt="" class="img-responsive">
                      </a>
                      <div class="gift-info clearfix">
                        <div class="gift-info-mask"></div>
                        <div class="gift-title">趣易表情套装</div>
                        <div class="gift-metas">共有10 个</div>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="rt-gift-wrap">
                    <div class="gift-layer"></div>
                    <div class="gift-mask">
                      <a href="#" class="btn btn-warning btn-lg gift-mask-btn">查看详情</a>
                    </div>
                    <div class="gift-item">
                      <a href="#">
                        <img src="../../assets/goods/goods_eggs.jpg" alt="" class="img-responsive">
                      </a>
                      <div class="gift-info clearfix">
                        <div class="gift-info-mask"></div>
                        <div class="gift-title">趣易表情套装</div>
                        <div class="gift-metas">共有10 个</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>


      </div>



  </div>


</template>

<script>

export default {
  name: 'PersonalReceiving',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #personal-wrap{
    margin-top: -20px;
  }

  /*personal展示区域*/
  #content-container{
    margin: 30px auto;
    min-height: 400px;
  }

  @media (max-width: 767px){
    #content-container {
      min-height: 250px;
    }
  }


  .nav.nav-tabs{
    position: relative;
    margin-bottom: 25px;
    border-bottom: solid 2px #e8e8e8;
  }

  .nav.nav-tabs li{
    margin-bottom: 0;
  }

  @media(max-width: 1199px){
    .nav.nav-tabs li a{
      padding: 5px 5px 10px;
      font-size: 14px;
    }
  }

  .nav.nav-tabs li a{
    border: none;
    margin-right: 0;
    font-weight: 500;
    font-size: 16px;
    transition: all 0.3s ease;
    color: #0099e5;
    text-decoration: none;
  }


  /*personal-content----------*/
  .personal-content{
    min-height: 500px;
    background: #fff;
    position: relative;
  }

  /*显示待收礼物列表项-------*/
  .rt-section-body .personal-gifts{
    margin-left: -10px;
    margin-right: -10px;
  }

  .personal-gifts .rt-gift-wrap{
    position: relative;
    margin-bottom: 20px;
  }

  .rt-gift-wrap .gift-layer{
    width: 240px;
    height: 180px;
    position: absolute;
    left: 5px;
    right: 5px;
    top: 10px;
    background: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  }

  .rt-gift-wrap .gift-mask{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0;
    margin: 15px;
    transition: all 0.3s ease;
  }

  .rt-gift-wrap .gift-mask .gift-mask-btn{
    position: absolute;
    width: 120px;
    top: 50%;
    margin-top: -20px;
    left: 50%;
    margin-left: -65px;
    transition: all 0.3s ease;
  }

  @media(max-width: 767px){
    .rt-gift-wrap .gift-mask .gift-mask-btn{
      position: absolute;
      left: 115px;
    }
  }

  /*待收礼物响应式*/
  @media (max-width: 767px) {
    .col-md-3.col-sm-6{
      margin-left: 35px;
    }
  }

  @media (max-width: 991px) and (min-width: 768px) {
    .col-md-3.col-sm-6 .rt-gift-wrap{
      margin-left: 40px;
    }
    .rt-gift-wrap .gift-mask .gift-mask-btn{
      position: absolute;
      left: 115px;
    }
  }

  .btn.btn-lg{
    font-size: 14px !important;
  }

  .btn-warning{
    background: #fe6702 !important;
    border-color: #fe6702 !important;
    color: #fff !important;
  }

  .rt-gift-wrap .gift-item {
    width: 250px;
    height: 180px;
    position: relative;
    background: #fff;
    padding: 15px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    margin-top: 10px;
  }

  .gift-item .img-responsive{
    display: block;
    width: 220px;
    height: 166px;
    object-fit: cover;
    margin-top: -1px;
  }

  .rt-gift-wrap .gift-info {
    position: absolute;
    bottom: 15px;
    left: 15px;
    right: 15px;
    height: 60px;
    padding: 22px 20px;
    color: #fff;
  }

  .rt-gift-wrap .gift-info-mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    opacity: 0.8;
    background-image: linear-gradient(rgba(0, 0, 0, 0) 0%, #000000 98%);
  }

  .rt-gift-wrap .gift-title {
    position: relative;
    z-index: 1;
    float: left;
    width: 60%;
    font-size: 16px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }

  .rt-gift-wrap .gift-metas {
    position: relative;
    z-index: 1;
    float: right;
    text-align: right;
    margin: 2px 0;
    width: 30%;
    font-size: 12px;
    opacity: 0.8;
    filter: alpha(opacity=80);
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }

  .rt-gift-wrap:hover .gift-mask {
    transition: all 0.3s ease;
    opacity: 1;
    transform: translateY(-5px);
  }

  .rt-gift-wrap:hover .gift-item {
    transition: all 0.3s ease;
    opacity: 0.6;
    transform: translateY(-5px);
  }
  .rt-gift-wrap:hover .gift-mask {
    z-index: 1;
  }







</style>
