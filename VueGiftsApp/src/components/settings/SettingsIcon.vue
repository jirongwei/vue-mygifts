<template>

  <div class="container" id="personal-icon">
    <div class="col-md-12">
      <div id="content-container" class="container">
        <div class="row">
          <div class="col-md-3">

            <!--左侧导航-->
            <settingsNav></settingsNav>
          </div>

          <div class="col-md-9 my-show-passage">

            <!--个人设置模块-->
            <div class="panel panel-default panel-col" style="margin-top: 30px">
              <div class="panel-heading">头像设置</div>
              <div class="panel-body">
                <form class="form-horizontal" method="post" enctype="multipart/form-data">
                  <div class="form-group">
                    <div class="col-md-2 control-label"><b>当前头像</b></div>
                    <div class="controls col-md-8 controls">
                      <img src="../../assets/user-icon/head_icon_1.jpg" alt="上传图片" class="img-thumbnail">
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="col-md-2 control-label">
                    </div>
                    <div class="controls col-md-8 controls">
                      <p class="help-block">你可以上传JPG、GIF或PNG格式的文件，文件大小不能超过<strong>2M</strong>。</p>
                    </div>
                    <div class="col-md-5 col-md-offset-2 controls hidden-xs warning-box box-headicon">
                      <span class="warn-icon"></span>
                      <span class="warn-text">头像上传错误信息</span>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="col-md-2 control-label"></div>
                    <div class="controls col-md-8 controls">
                      <a id="upload-picture-btn" class="btn btn-primary webuploader-container">
                        <div class="webuploader-pick">上传新头像</div>
                        <div class="my-icon-button">
                          <input type="file" name="file" accept="image/png,image/jpg,image/jpeg,imge/bmp,image/gif">
                        </div>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>


          </div>



        </div>
      </div>
    </div>
  </div>




</template>

<script>

  import axios from 'axios'
  export default {
  name: 'Settings',
  data () {
    return {


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

  /*头像设置----------------------------------*/

  #personal-icon{
    margin-bottom: 70px;
  }

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

  #upload-picture-btn {
    height: 34px;
    width: 96px;
    position: relative;
    cursor: pointer;
    color: #fff;
    background: #0099e5;
    border: none;
    border-radius: 4px;
    overflow: hidden;
    display: inline-block;
  }

  #upload-picture-btn input{
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: pointer;
  }






</style>
