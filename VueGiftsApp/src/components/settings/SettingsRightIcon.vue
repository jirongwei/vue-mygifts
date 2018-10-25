<template>
  <div class="col-md-12 my-show-passage">

    <!--个人设置模块-->
    <div class="panel panel-default panel-col" style="margin: 30px 0 110px 0">
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
            <div class="col-md-5 col-md-offset-2 controls hidden-xs warning-box box-headicon" v-if="showError">
              <span class="warn-icon"></span>
              <span class="warn-text" v-text="err_message"></span>
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
</template>

<script>

  import axios from 'axios'
  export default {
  name: 'SettingsRightIcon',
  data () {
    return {
      // 上传头像错误信息
      showError:false,
      err_message:'',


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
