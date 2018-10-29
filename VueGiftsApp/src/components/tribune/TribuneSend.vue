<template>
  <div class="content">
    <div class="titleImg">
      <div class="imgContent">
        <svg t="1540799494194" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2064" xmlns:xlink="http://www.w3.org/1999/xlink" width="46" height="46"><path d="M908.984 224.728H743.752v-14.504c0-64.144-52.2-116.336-116.352-116.336H396.568c-64.144 0-116.32 52.192-116.32 116.336v14.504H114.984C51.584 224.728 0 276.248 0 339.568v475.704c0 63.312 51.584 114.832 114.984 114.832h794c63.432 0 115.016-51.52 115.016-114.832V339.568c0-63.32-51.584-114.84-115.016-114.84z m54.336 590.544c0 29.856-24.384 54.16-54.336 54.16h-794c-29.952 0-54.304-24.296-54.304-54.16V339.568c0-29.864 24.352-54.16 54.304-54.16h195.608a30.32 30.32 0 0 0 30.336-30.336v-44.84a55.696 55.696 0 0 1 55.64-55.656h230.832c30.696 0 55.672 24.96 55.672 55.656v44.84a30.32 30.32 0 0 0 30.344 30.336h195.568c29.952 0 54.336 24.296 54.336 54.16v475.704z" fill="#8a8a8a" p-id="2065"></path><path d="M512 350.616c-106.84 0-193.736 86.896-193.736 193.704 0 106.816 86.896 193.712 193.736 193.712 106.832 0 193.736-86.896 193.736-193.712 0-106.808-86.904-193.704-193.736-193.704z m0 326.736c-73.36 0-133.056-59.672-133.056-133.032 0-73.352 59.696-133.024 133.056-133.024s133.064 59.672 133.064 133.024c0 73.36-59.704 133.032-133.064 133.032z" fill="#8a8a8a" p-id="2066"></path></svg>
        <div>添加标题图片</div>
      </div>
      <input type="file" accept=".jpeg, .jpg, .png" class="upimg" @change="showImg">
      <img src="" alt="" id="imgshow">
    </div>
    <textarea rows="1" class="input" placeholder="请输入标题（最多 50 个字）" style="height: 44px;" v-model="title"></textarea>
    <weidtor :getcontent="getcon"></weidtor>
  </div>
</template>

<script>
    import Weidtor from '../../components/Weidtor'
    import axios from 'axios'

    export default {
        name: "TribuneSend",
        components: {Weidtor},
        data:function(){
          return{
            token:"",
            titleimg:"",
            title:"",
            contentHTML:"",
            contentText:""
          }
        },
        methods:{
          showImg:function () {
            var file=$('.upimg')[0].files[0];
            var reader=new FileReader();
            var imgFile;
            reader.onload=function (e) {
              imgFile=e.target.result;
              console.log(imgFile);
              $("#imgshow").attr('src',imgFile)
            }
            reader.readAsDataURL(file);
          },
          getcon:function (contentmes) {
            this.contentHTML=contentmes.htmls;
            this.contentText=contentmes.texts;

          }
        }
    }
</script>

<style scoped>
  input,textarea,div{
    outline: none;
  }
  .content {
    width: 600px;
    margin: 10px auto;
  }

  .postsendleft {
    float: left;
    margin-right: 50px;
  }
  .titleImg{
    position: relative;
    background-color: white;
  }
  .titleImg input{
    position: absolute;
    left: 0;
    top:0;
  }
  .titleImg .imgContent{
    width: 600px;
    height: 200px;
  }
  .imgContent{
    align-content: center;
    padding: 70px 240px 0 240px;
    box-sizing: border-box;
  }
  .imgContent svg{
    margin-left:25px;
  }
  .imgContent div{
    font-size:1.2em;
    color: #8a8a8a;

  }
  .input {
    height: 44px;
    min-height: 44px;
    display: block;
    width: 100%;
    border: 0;
    font-size: 32px;
    line-height: 1.4;
    font-weight: 600;
    font-synthesis: style;
    outline: none;
    box-shadow: none;
    overflow: hidden;
  }
  .upimg{
    width: 600px;
    height:200px;
    display: block;
    z-index: 5;
    opacity: 0;
  }
  #imgshow{
    width: 600px;
    height: 200px;
    position: absolute;
    top:0;
    left:0;
    z-index: 2;
    outline: none;
    margin: 10px auto;
  }
</style>
