<template>
  <div class="col-md-12 my-show-passage">
    <!--个人设置模块-->
    <div class="panel panel-default panel-col" style="margin: 30px 0 110px 0">
      <div class="panel-heading">头像设置</div>
      <div class="panel-body">
        <form class="form-horizontal" method="post" enctype="multipart/form-data">
          <div class="form-group">
            <div class="col-md-2 control-label"><b>当前头像</b></div>
            <div class="controls col-md-8" id="current-img">
              <img :src="user_icon" class="img-thumbnail" style="width: 210px;height: 210px;">
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
                <div class="webuploader-pick" @click="readyUp">上传新头像</div>
                <div class="my-icon-button">
                  <input id="file" type="file" accept="image/png,image/jpg,image/jpeg,imge/bmp,image/gif">
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
  import $ from 'jquery'
  import * as qiniu from 'qiniu-js'

  export default {
    name: 'SettingsRightIcon',
    data() {
      return {
        // 获取当前用户头像
        current_icon:[],
        user_icon:'',
        // 上传头像错误信息
        showError: false,
        err_message: '',
        file: '',
      }
    },
    mounted: function () {
      this.getUserIcon();
      this.file =$('#file').get(0).files[0];
    },

    methods: {
      // 获取用户当前头像
      getUserIcon:function(){
        let vm = this;
        axios({
          method:'POST',
          url:this.GLOBAL.HOST+'user/usericon/',
          headers:{"token":window.sessionStorage.getItem("token")}
        })
        .then(function (response) {
          if(response.data.code == '410'){
            alert('登录已过期')
          }else if(response.data.icons_url){
            vm.current_icon = response.data.icons_url[0];
            vm.user_icon = vm.GLOBAL.IMG + response.data.icons_url[0].iconurl;
          }
        })
        .catch(function (error) {
          console.log(error)
        });
      },

      // 展示图片
      showPic: function (f) {
        let img = new Image();
        img.src = URL.createObjectURL(f);
        let url = img.src;
        let $img = $(img);
        img.onload = function () {
          URL.revokeObjectURL(url);
          // $img.css('width', '100%').css('height', '100%').css('object-fit', 'contain')
          $img.addClass('img-thumbnail');
          $('#current-img').empty().append($img)
        }
      },
      // 上传按钮点击事件 （召唤出图片上传input）
      readyUp: function () {
        // 保存当前图片
        // this.file = $ipt.get(0).files[0]
        let $ipt = $('#file');
        let ie = false;
        if (navigator.appName === 'Microsoft Internet Explorer') {
          ie = true
        }
        if (ie) {
          $ipt.click()
        } else {
          let a = document.createEvent('MouseEvents');
          a.initEvent('click', true, true);
          $ipt.get(0).dispatchEvent(a);
          $ipt.change( ()=>{
            // 将图片存到data当中的file对象中
            let file = $ipt.get(0).files[0];
            // 展示图片
            this.showPic(file);
            if(this.file !== file) {
              this.file = file;
              // 上传图片
              this.getQiniuToken(file)
            }
          })
        }
      },
      // 获取七牛token
      getQiniuToken: function (file) {
        // 发送到服务器，获取七牛token
        let that = this;
        $.ajax({
          url: this.GLOBAL.HOST+'user/qiniutoken/?key=' + file.name,
          success: (res) => {
            // 返回七牛token和头像名，上传到七牛云服务器
            console.log(res);
            let token = res.token;
            let newname = res.filename;
            this.upImgToQiniu(token, newname,file)
          }
        })
      },
      // 上传到七牛云
      upImgToQiniu: function (token, newname,file) {
        let newfile = new File([file], newname);
        let observable;
        let config = {
          useCdnDomain: false,
          disableStatisticsReport: true,
          retryCount: 6,
          region: qiniu.region.z0
        }
        let putExtra = {
          fname: '',
          params: {},
          mimeType: ['image/png', 'image/jpeg', 'image/gif', 'image/jpg']
        }
        let key = newfile.name;
        // 添加上传dom面板
        putExtra.params['x:name'] = key.split('.')[0];
        let subscription;
        // 调用sdk上传接口获得相应的observable，控制上传和暂停
        observable = qiniu.upload(file, key, token, putExtra);
        let that = this;
        subscription = observable.subscribe({
          next( res ) {
          },
          error(err){
            alert('error！');
            console.log(err)
          },
          complete (res) {
            // 保存本地服务器
            // res.key 为文件名
            that.updateIcon(res.key)
          }
        });

      },

      // 保存本地服务器
      updateIcon: function (filename) {
        let vm = this;
        axios({
          method: 'POST',
          url: this.GLOBAL.HOST+'user/iconurl/' + filename + '/',
          headers: {"token": window.sessionStorage.getItem('token')}

        })
        .then(function (response) {
          let res = response.data.code;
          if (res === '808') {
            alert('上传成功');
            vm.getUserIcon();
            vm.$emit('flushnav');
          } else {
            alert('登录过期')
          }
        })
        .catch(function (error) {
          console.log(error)
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*图片容器、图片样式*/
  /*#current-img {
    width: 210px;
    height: 210px;
  }
  #current-img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }*/

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

  /*#upload-picture-btn {
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
  }*/

  input {
    display: none;
  }

  /*#upload-picture-btn input{
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: pointer;
  }*/

  /*警告昵称合法性---*/
  .warning-box {
    padding-top: 8px;
  }

  .warn-icon {
    float: left;
    background: url("../../assets/my-icons/common.png") no-repeat 0 0;
    width: 20px;
    height: 20px;
  }

  .warn-text {
    float: left;
    line-height: 22px;
    text-align: left;
    color: #cc3333;
  }

</style>
