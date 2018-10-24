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
          <li>
            <router-link to="/receive">
              <a href="#" >我的礼物</a>
            </router-link>

          </li>

          <li>
            <router-link to="">
              <a href="#" >我的点赞</a>
            </router-link>

          </li>

          <li  class="active">
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
          <div class="container-fluid personal-trends">
            <div class="div-trend">
              <div class="user-pic">
                <img src="../../assets/user-icon/head_icon_1.jpg" alt="">
              </div>
              <div class="trend-right">
                <div class="trend-header">
                  <div class="trend-user">
                    <a href="#" target="_blank">Memorinal小怪咖</a>
                  </div>
                  <div class="trend-time">32分钟前</div>
                </div>
                <div class="trend-content">动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容</div>
                <div class="trend-tool">
                  <div class="trend-operate">
                    <a href="javascript:void(0)">
                      <i class="i-transmit">
                        <span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>
                      </i>
                      <span>0</span>
                    </a>
                    <a href="javascript:void(0)">
                      <i class="i-revert">
                        <span class="glyphicon glyphicon-comment" aria-hidden="true"></span>
                      </i>
                      <span>0</span>
                    </a>
                    <a href="javascript:void(0)">
                      <i class="i-like">
                        <span class="glyphicon glyphicon-thumbs-up"  aria-hidden="true"></span>
                      </i>
                      <span>0</span>
                    </a>
                </div>

                  <div class="trend-delete">
                    <a href="javascript:;" class="trend-share-btn">
                      <i class="i-points">
                        <span class="glyphicon glyphicon-option-horizontal"  aria-hidden="true"></span>
                      </i>
                    </a>

                    <div class="trend-share">

                      <div class="trend-btn">
                        <a class="trend-sina-btn"></a>
                        <a class="trend-qq-btn"></a>
                      </div>
                      <a href="javascript:;" class="trend-delete" @click="delTrends()">删除</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-trend">
              <div class="user-pic">
                <img src="../../assets/user-icon/head_icon_1.jpg" alt="">
              </div>
              <div class="trend-right">
                <div class="trend-header">
                  <div class="trend-user">
                    <a href="#" target="_blank">Memorinal小怪咖</a>
                  </div>
                  <div class="trend-time">32分钟前</div>
                </div>
                <div class="trend-content">动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容</div>
                <div class="trend-tool">
                  <div class="trend-operate">
                    <a href="javascript:void(0)">
                      <i class="i-transmit">
                        <span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>
                      </i>
                      <span>0</span>
                    </a>
                    <a href="javascript:void(0)">
                      <i class="i-revert">
                        <span class="glyphicon glyphicon-comment" aria-hidden="true"></span>
                      </i>
                      <span>0</span>
                    </a>
                    <a href="javascript:void(0)">
                      <i class="i-like">
                        <span class="glyphicon glyphicon-thumbs-up"  aria-hidden="true"></span>
                      </i>
                      <span>0</span>
                    </a>
                  </div>

                  <div class="trend-delete">
                    <a href="javascript:;" class="trend-share-btn">
                      <i class="i-points">
                        <span class="glyphicon glyphicon-option-horizontal"  aria-hidden="true"></span>
                      </i>
                    </a>

                    <div class="trend-share">

                      <div class="trend-btn">
                        <a class="trend-sina-btn"></a>
                        <a class="trend-qq-btn"></a>
                      </div>
                      <a href="javascript:;" class="trend-delete">删除</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-trend">
              <div class="user-pic">
                <img src="../../assets/user-icon/head_icon_1.jpg" alt="">
              </div>
              <div class="trend-right">
                <div class="trend-header">
                  <div class="trend-user">
                    <a href="#" target="_blank">Memorinal小怪咖</a>
                  </div>
                  <div class="trend-time">32分钟前</div>
                </div>
                <div class="trend-content">动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容</div>
                <div class="trend-tool">
                  <div class="trend-operate">
                    <a href="javascript:void(0)">
                      <i class="i-transmit">
                        <span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>
                      </i>
                      <span>0</span>
                    </a>
                    <a href="javascript:void(0)">
                      <i class="i-revert">
                        <span class="glyphicon glyphicon-comment" aria-hidden="true"></span>
                      </i>
                      <span>0</span>
                    </a>
                    <a href="javascript:void(0)">
                      <i class="i-like">
                        <span class="glyphicon glyphicon-thumbs-up"  aria-hidden="true"></span>
                      </i>
                      <span>0</span>
                    </a>
                  </div>

                  <div class="trend-delete">
                    <a href="javascript:;" class="trend-share-btn">
                      <i class="i-points">
                        <span class="glyphicon glyphicon-option-horizontal"  aria-hidden="true"></span>
                      </i>
                    </a>

                    <div class="trend-share">

                      <div class="trend-btn">
                        <a class="trend-sina-btn"></a>
                        <a class="trend-qq-btn"></a>
                      </div>
                      <a href="javascript:;" class="trend-delete">删除</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-trend">
              <div class="user-pic">
                <img src="../../assets/user-icon/head_icon_1.jpg" alt="">
              </div>
              <div class="trend-right">
                <div class="trend-header">
                  <div class="trend-user">
                    <a href="#" target="_blank">Memorinal小怪咖</a>
                  </div>
                  <div class="trend-time">32分钟前</div>
                </div>
                <div class="trend-content">动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容动态圈内容</div>
                <div class="trend-tool">
                  <div class="trend-operate">
                    <a href="javascript:void(0)">
                      <i class="i-transmit">
                        <span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>
                      </i>
                      <span>0</span>
                    </a>
                    <a href="javascript:void(0)">
                      <i class="i-revert">
                        <span class="glyphicon glyphicon-comment" aria-hidden="true"></span>
                      </i>
                      <span>0</span>
                    </a>
                    <a href="javascript:void(0)">
                      <i class="i-like">
                        <span class="glyphicon glyphicon-thumbs-up"  aria-hidden="true"></span>
                      </i>
                      <span>0</span>
                    </a>
                  </div>

                  <div class="trend-delete">
                    <a href="javascript:;" class="trend-share-btn">
                      <i class="i-points">
                        <span class="glyphicon glyphicon-option-horizontal"  aria-hidden="true"></span>
                      </i>
                    </a>

                    <div class="trend-share">

                      <div class="trend-btn">
                        <a class="trend-sina-btn"></a>
                        <a class="trend-qq-btn"></a>
                      </div>
                      <a href="javascript:;" class="trend-delete">删除</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <pagination :currentPage="currentPage" :pageCount="pageCount" @prePage="prePage" @nextPage="nextPage" @jumpPage="jumpPage"></pagination>



          </div>



          </div>
        </div>

      <!--动态圈删除模态框-->
      <div class="trend-modal-del" v-if="del_flag">
        <div class="trend-del">
          <div class="trend-del-wrap">
            <div class="trend-wrap-content">
              确认删除该条动态内容？动态删除后将无法回复！
            </div>
            <div class="trend-modal-btn">
              <a href="javascript:void(0)" class="btn-modal trend-btn-cancel" @click="CancelDel()">
                <span>取消</span>
              </a>
              <a href="javascript:void(0)" class="btn-modal trend-btn-submit" @click="CancelDel()">
                <span>确定</span>
              </a>

            </div>

          </div>
        </div>
      </div>




  </div>















</template>

<script>

export default {
  name: 'PersonalTrends',
  data () {
    return {
      // 动态删除模态框
      del_flag:false,

      //当前页码、总叶数
      currentPage:10,
      pageCount:20,


    }
  },
  methods:{
    // 删除模态框展示
    delTrends:function () {
      this.del_flag=true
    },
    CancelDel:function () {
      this.del_flag=false;
    },

    // 分页
    prePage() {
      this.currentPage--

      // 重新渲染数据

    },
    nextPage() {
      this.currentPage++

      // 重新渲染数据
    },
    jumpPage(pageIndex) {
      if (pageIndex > this.pageCount) {
        pageIndex = this.pageCount
      }
      if (!pageIndex || pageIndex < 1) {
        pageIndex = 1
      }
      this.currentPage = pageIndex

      // 重新渲染数据
    }
  },

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
    padding-bottom: 20px;
  }

  /*动态圈-------*/
  .personal-trends *{
    word-break: break-all!important;
  }

  .personal-trends{
    padding: 20px 40px;
  }

  .personal-trends .div-trend{
    padding: 24px;
    margin: 0 100px 8px;
    position: relative;
    overflow: hidden;
    background: #FFF;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.1);
    border-radius: 8px;
  }

  @media (max-width: 767px) {
    .personal-trends .div-trend{
      padding: 0;
      margin: 0 0 15px 0;
      width: 100%;
    }
  }

  .div-trend .user-pic{
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    float: left;
  }

  .div-trend .user-pic img{
    width: 48px;
    height: 48px;
  }

  .personal-trends .div-trend .trend-right{
    padding-left: 64px;
  }

  .div-trend .trend-header{
    overflow: hidden;
  }

  .div-trend .trend-header .trend-user{
    float: left;
    font-size: 14px;
    color: #07111B;
    line-height: 24px;
    font-weight: 700;
  }

  .div-trend .trend-header .trend-user a{
    float: left;
    margin-right: 8px;
    font-weight: 700;
    font-size: 14px;
    color: #1c1f21;
    line-height: 24px;
    transition: all .3s;
    text-decoration: none;
  }

  .div-trend .trend-header .trend-user a:hover{
    color: #0099e5;
    transition: all 0.3s ease;
  }

  .trend-right .trend-time{
    float: right;
    font-size: 12px;
    color: #9199a1;
    line-height: 24px;
  }

  .trend-right .trend-content{
    text-align: left;
    padding-top: 2px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #1c1f21;
    line-height: 24px;
    word-wrap: break-word;
  }

  .trend-right .trend-tool{
    overflow: hidden;
  }

  .trend-right .trend-tool .trend-operate a{
    float: left;
    margin-right: 24px;
    font-size: 12px;
    line-height: 32px;
    height: 32px;
    color: #9199a1;
  }

  .trend-right .trend-tool .trend-operate i{
    width: 16px;
    height: 32px;
    float: left;
    margin: 0 5px 0 2px;
    font-size: 16px;
    color: #9199a1;
    line-height: 32px;
  }

  .trend-right .trend-tool span{
    float: left;
    font-size: 12px;
    color: #9199a1;
    line-height: 32px;
  }

  .trend-right .trend-tool a.trend-share-btn{
    float: right;
    line-height: 24px;
    text-decoration: none;
    margin-right: 0;
  }

  .trend-tool .trend-delete:hover .trend-share{
    display: block;
  }

  .trend-share-btn .i-points span{
    font-size: 18px;
  }

  .trend-tool .trend-share{
    float: right;
    display: none;
  }

  .trend-tool .trend-share .trend-delete{
    margin: 3px 24px 0 10px;
    font-size: 12px;
    line-height: 24px;
    color: #9199a1;
    transition: all .3s;
    text-decoration: none;
    float: right;
  }

  .trend-tool .trend-share .trend-btn{
    float: left;
  }

  .trend-tool .trend-share .trend-btn a{
    width: 24px;
    height: 24px;
    float: left;
    margin: 3px 10px 0 10px;
    cursor: pointer;
  }

  .trend-tool .trend-share .trend-btn a.trend-sina-btn{
    background: url("../../assets/my-icons/sina.svg") center no-repeat;
  }

  .trend-tool .trend-share .trend-btn a.trend-qq-btn{
    background: url("../../assets/my-icons/qq.svg") center no-repeat;
  }

  .trend-tool .trend-share a.trend-delete:hover{
    color: #787d82;
  }

  .personal-trends .div-trend:hover{
    transition: all 0.3s ease;
    box-shadow: 2px 8px 8px 0 rgba(0,0,0,.1);;
  }

  /*动态圈删除模态框*/

  .trend-modal-del{
    width: 100%;
    height: 100%;
    background: #d1d1d1;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    z-index: 1001;
    opacity: 0.9;
    display: block;
  }

  .trend-modal-del .trend-del{
    position: absolute;
    background: #fff;
    box-shadow: 0 8px 16px 0 rgba(7,17,27,0.2);
    border-radius: 12px;
    left: 600px;
    top: 287px;
    opacity: 1;
    z-index: 200;

  }

  .trend-modal-del .trend-del .trend-del-wrap{
    box-sizing: border-box;
    width: 320px;
    padding: 32px;
    line-height: 1;
  }

  .trend-modal-del .trend-wrap-content{
    font-size: 16px;
    font-weight: bold;
    color: #1c1f21;
    line-height: 24px;
  }

  .trend-modal-del .trend-modal-btn{
    padding-top: 32px;
    text-align: right;
  }

  .trend-modal-btn a.btn-modal{
    margin-left: 12px;
    border: solid 1px #9199a1;
    border-radius: 18px;
    opacity: 1;
    padding: 7px 16px;
    font-size: 14px;
    line-height: 1.42857143;
    text-decoration: none;
  }

  .trend-modal-btn a:first-child{
    color: #9199a1;
  }

  .trend-modal-btn a:first-child:hover{
    color: #1c1f21;
    border-color: #1c1f21;
  }

  .trend-modal-btn a:last-child{
    color: #FFF;
    background: #545c63;
  }

  .trend-modal-btn a:last-child:hover{
    background: #1c1f21;
  }


</style>
