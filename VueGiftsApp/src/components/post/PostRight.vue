<template>
  <div class="contain_right">
    <!--每日签到蒙态框（未完成/）-->
    <div class="modal fade" id="qiandao" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="height:800px;overflow: scroll">
      <div class="modal-dialog" role="document">
        <div class="modal-content" >
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">每日签到</h4>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <div class="card write_nav">
      <a href="" class="sendPost">
        <svg class="Zi Zi--Paper GlobalWrite-navIcon" fill="#555555" viewBox="0 0 24 24" width="24" height="24"><path d="M9.273 5.63c-1.103 0-1.439.064-1.782.243a1.348 1.348 0 0 0-.576.564c-.183.336-.248.664-.248 1.743v6.64c0 1.079.065 1.407.248 1.743.135.247.323.431.576.564.343.18.68.243 1.782.243h5.454c1.103 0 1.439-.064 1.782-.243.253-.133.44-.317.576-.564.183-.336.248-.664.248-1.743V8.18c0-1.079-.065-1.407-.248-1.743a1.348 1.348 0 0 0-.576-.564c-.343-.18-.68-.243-1.782-.243H9.273zm0-1.63h5.454c1.486 0 2.025.151 2.568.436.543.284.97.7 1.26 1.232.29.532.445 1.059.445 2.512v6.64c0 1.453-.155 1.98-.445 2.512-.29.531-.717.948-1.26 1.232-.543.285-1.082.436-2.568.436H9.273c-1.486 0-2.025-.151-2.568-.436a2.997 2.997 0 0 1-1.26-1.232C5.155 16.8 5 16.273 5 14.82V8.18c0-1.453.155-1.98.445-2.512.29-.531.717-.948 1.26-1.232C7.248 4.15 7.787 4 9.273 4zM8.5 8.076v1.467h7V8.076h-7zm0 2.609v1.467h7v-1.467h-7zm0 2.608v1.468h4.667v-1.468H8.5z"></path></svg>
        <span>发帖子</span>
      </a>
      <a href="" class="reply">
        <svg class="Zi Zi--WriteArticle GlobalWrite-navIcon" fill="#555555" viewBox="0 0 24 24" width="24" height="24"><path d="M15.764 7.279l-3.76 3.765c-.428.43-.555.567-.667.713a1.666 1.666 0 0 0-.208.348c-.076.167-.137.344-.314.926l-.073.243.242-.074c.58-.177.757-.238.925-.314.13-.06.232-.12.347-.209.146-.112.282-.239.712-.668l3.759-3.766-.963-.964zm.963-.965l.963.965.685-.686c.167-.168.227-.263.253-.349a.187.187 0 0 0 0-.12c-.026-.086-.086-.18-.253-.348l-.148-.148c-.167-.167-.262-.228-.348-.254a.187.187 0 0 0-.12 0c-.085.026-.18.087-.347.254l-.685.686zm.87 5.471l1.702-1.705v5.549c0 1.52-.158 2.07-.455 2.626a3.096 3.096 0 0 1-1.287 1.29c-.555.297-1.105.455-2.623.455h-5.57c-1.517 0-2.068-.158-2.622-.455a3.096 3.096 0 0 1-1.287-1.29C5.158 17.7 5 17.15 5 15.63v-5.58c0-1.52.158-2.071.455-2.627a3.096 3.096 0 0 1 1.287-1.289c.554-.297 1.105-.455 2.622-.455h3.497l-1.702 1.705H9.364c-1.126 0-1.47.066-1.82.254-.258.138-.45.33-.588.59-.188.35-.254.694-.254 1.822v5.58c0 1.128.066 1.472.254 1.822.138.259.33.452.588.59.35.188.694.254 1.82.254h5.57c1.127 0 1.47-.066 1.82-.254.258-.138.45-.331.589-.59.187-.35.253-.694.253-1.822v-3.844zm1.593-7.121l.148.147c.33.33.502.616.594.918.09.301.09.61 0 .911-.092.302-.265.587-.594.917l-5.408 5.416c-.486.487-.648.635-.845.786a3.02 3.02 0 0 1-.614.37c-.226.102-.433.176-1.091.376l-.852.26a1.021 1.021 0 0 1-1.275-1.277l.26-.854c.2-.659.273-.866.375-1.092.103-.227.218-.418.369-.616.15-.197.299-.36.785-.846l5.407-5.416c.33-.33.614-.504.915-.595.301-.092.61-.092.91 0 .301.09.586.264.916.595z"></path></svg>
        <span>写回复</span>
      </a>
      <a href="" class="reply">
        <svg class="Zi Zi--WritePin GlobalWrite-navIcon" fill="#555555" viewBox="0 0 24 24" width="24" height="24"><path d="M16.63 6.02V4h1.35v2.02H20v1.35h-2.02V9.4h-1.35V7.36H14.6V6.02h2.03zm-.17 4.9h1.7v4.76c0 1.5-.17 2.05-.46 2.6-.3.55-.73.98-1.28 1.27-.54.3-1.1.45-2.6.45h-5.5c-1.5 0-2.05-.16-2.6-.45-.55-.3-.98-.72-1.27-1.27-.3-.55-.45-1.1-.45-2.6v-5.5c0-1.5.16-2.06.45-2.6.3-.55.72-.98 1.27-1.28.55-.3 1.1-.45 2.6-.45h4.78v1.7H8.3c-1.12 0-1.46.05-1.8.24-.26.1-.45.3-.58.55-.2.35-.26.7-.26 1.8v5.5c0 1.13.07 1.47.26 1.8.13.27.32.46.58.6.34.18.68.25 1.8.25h5.5c1.12 0 1.46-.06 1.8-.25.27-.13.46-.32.6-.58.18-.34.24-.68.24-1.8V10.9l.02.02zm-3.86-.22c.7-.16 1.45.06 1.98.6.83.83.83 2.2 0 3.04l-.03.03c-.84.85-2.2.85-3.04 0l-1.92-2a.628.628 0 0 0-.88 0l-.04.04c-.25.28-.25.7 0 .95.15.16.37.22.57.17.4-.1.82.18.9.58.1.4-.16.82-.57.9-.7.17-1.46-.04-1.98-.58-.83-.85-.83-2.2 0-3.06l.03-.02c.86-.85 2.2-.85 3.05 0l1.93 1.95c.24.25.63.25.87 0l.03-.02a.67.67 0 0 0 0-.93.687.687 0 0 0-.58-.17c-.4.1-.8-.16-.9-.57-.1-.4.16-.8.57-.9l.01-.01z"></path></svg>
        <span>写私信</span>
      </a>
    </div>
    <div class="card personal">
      <div class="personal_mes" :id="usermes.userid">
        <a href="" class="pimg">
          <img :src="user_icon" alt="">
        </a>
        <div class="mes_div">
          <a href="" class="">
            <div v-text="usermes.usernickname"></div>
          </a>
          <button type="button" data-toggle="modal" data-target="#qiandao">每日签到</button>
        </div>
        <div class="clear"></div>
      </div>
      <div class="line"></div>
      <ul class="per_nav">
        <li>
          <a href="">
            <svg class="Zi Zi--Star GlobalSideBar-navIcon" fill="#555555" viewBox="0 0 24 24" width="18" height="18"><path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path></svg>
            <span>我的收藏</span>
          </a>
        </li>
        <li>
          <a href="">
            <svg class="Zi Zi--Community GlobalSideBar-navIcon" fill="#555555" viewBox="0 0 24 24" width="18" height="18"><path d="M5.74 4h12.52c.961 0 1.74.775 1.74 1.73V16.27c0 .955-.779 1.73-1.74 1.73h-3.825l-1.658 2.044a1 1 0 0 1-1.554 0l-1.658-2.044H5.74C4.78 18 4 17.224 4 16.27V5.73C4 4.775 4.778 4 5.74 4zM7 8.98c0 .554.449.996 1.003.996h4.994A.992.992 0 0 0 14 8.981a.997.997 0 0 0-1.003-.995H8.003A.992.992 0 0 0 7 8.98zm0 4c0 .554.446.996.995.996h8.01a.993.993 0 0 0 .995-.995.993.993 0 0 0-.995-.995h-8.01A.993.993 0 0 0 7 12.98z" fill-rule="evenodd"></path></svg>
            <span>我的回复</span>
          </a>
        </li>
        <li>
          <a href="">
            <svg class="Zi Zi--Invite GlobalSideBar-navIcon" fill="#555555" viewBox="0 0 24 24" width="18" height="18"><path d="M4 10V8a1 1 0 1 1 2 0v2h2a1 1 0 0 1 0 2H6v2a1 1 0 0 1-2 0v-2H2a1 1 0 0 1 0-2h2zm10.455 2c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-7 6c0-2.66 4.845-4 7.272-4C17.155 14 22 15.34 22 18v1.375c0 .345-.28.625-.625.625H8.08a.625.625 0 0 1-.625-.625V18z" fill-rule="evenodd"></path></svg>
            <span>我的邀请</span>
          </a>
        </li>
        <li>
          <a href="">
            <svg class="Zi Zi--Comment Button-zi" fill="#555555" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z" fill-rule="evenodd"></path></svg>
            <span>我的私信</span>
          </a>
        </li>
        <li>
          <a href="">
            <svg class="Zi Zi--Copyright GlobalSideBar-navIcon" fill="#555555" viewBox="0 0 24 24" width="18" height="18"><path d="M16.517 15.815a5.871 5.871 0 0 1-4.481 2.078 5.865 5.865 0 0 1-5.859-5.857 5.865 5.865 0 0 1 5.859-5.859c1.63 0 3.204.7 4.319 1.919.085.093.24.432.209.797a1.086 1.086 0 0 1-.436.779c-.248.193-.516.29-.797.29-.402 0-.7-.198-.814-.314A3.473 3.473 0 0 0 12 8.575a3.464 3.464 0 0 0-3.46 3.461 3.464 3.464 0 0 0 3.46 3.46 3.63 3.63 0 0 0 2.654-1.181c.136-.152.458-.306.806-.306.274 0 .542.095.773.274.35.269.45.588.473.809.032.308-.072.585-.188.723m4.686-7.699C20.67 6.883 19.96 5.82 19.07 4.929c-.891-.89-1.954-1.601-3.188-2.133A9.728 9.728 0 0 0 12 2a9.733 9.733 0 0 0-3.883.796c-1.234.532-2.297 1.243-3.186 2.133-.891.891-1.602 1.954-2.134 3.187A9.713 9.713 0 0 0 2 12a9.752 9.752 0 0 0 .797 3.883c.531 1.233 1.242 2.296 2.134 3.186.89.891 1.953 1.602 3.186 2.134A9.725 9.725 0 0 0 12 22a9.72 9.72 0 0 0 3.883-.797c1.233-.532 2.296-1.243 3.188-2.134.89-.89 1.601-1.953 2.132-3.186A9.73 9.73 0 0 0 22 12a9.69 9.69 0 0 0-.797-3.884" fill-rule="evenodd"></path></svg>
            <span>我的积分</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="card tuijian">
      <div class="tj_top">
        <div class="tj_title">热门攻略</div>
        <div class="more_tj"><a href="">查看更多>></a></div>
        <div class="clear"></div>
      </div>
      <ul class="content">
        <li v-for="hotgl in hotgls" v-bind:id="hotgl.glid">
          <a href="" v-text="hotgl.gltitle" style="display:inline-block; width:270px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;"></a>
          <div>
            <span v-text="hotgl.gllovenum"></span>
            <span>&nbsp;人喜欢•</span>
            <span v-text="hotgl.glcomptentnum"></span>
            <span>&nbsp;条回复</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "PostRight",
        data:function(){
          return{
            user_icon:'',
            userid:1,
            usermes:[],

            //热门攻略
            hotgls:[
              {
                "glid":"11",
                "gltitle":"有意义或有意思，感动或开脑洞",
                "gllovenum":"321",
                "glcomptentnum":"223"
              },
              {
                "glid":"22",
                "gltitle":"水水大大撒撒",
                "gllovenum":"424",
                "glcomptentnum":"123"
              },
              {
                "glid":"33",
                "gltitle":"撒大大大苏打大地方服务器",
                "gllovenum":"444",
                "glcomptentnum":"222"
              }
            ]
          }
        },
        mounted:function () {
          var vm=this;
          //post右侧加载用户信息
          axios.post("http://47.106.124.242:8000/user/gettoken/",{
            //将token传给后台，若解析失败则跳转到登录界面
            token:this.userid
          })
            .then(function (response) {
              vm.usermes=response.data;
              vm.user_icon = vm.GLOBAL.IMG + response.data.userimg;
            })
            .catch(function (error) {
              console.log(error)
            })




          //post右侧加载热门攻略
          axios.get("http://47.106.124.242:8000/tribune/hottri/")
            .then(function (response) {
              vm.hotgls=response.data
            })
            .catch(function (error) {
              console.log(error)
            })
        },
        methods:{

        }
    }
</script>

<style scoped>
html,body,ul,input,button{
  outline: 0;
  padding: 0;
  margin: 0;
}
a,button{
  /*color: #ff4000;*/
  text-decoration: none;
  cursor: pointer;
}
ul,li{
  list-style: none;
  margin: 0;
  outline: 0;
  padding: 0;
}
html,body{
  background-color: #f7f8f8!important;
}
.clear{
  clear: both;
}
/*帖子右侧*/
.contain_right{
  width: 30%;
  margin-left: 10px;
  float: left;
}
.contain_right .card{
  background-color: white;
  margin-bottom: 10px;
  width: 100%;
}
.contain_right .write_nav a{
  display: inline-block;
  width: 97px;
  height: 97px;
  padding: 23px;
  box-sizing: border-box;
  color:#333333;
  text-decoration: none;
}
.contain_right .write_nav a:hover{
  color: #ff8000;
}
.contain_right .write_nav a svg{
  margin: auto;
  display: block;
}
.contain_right .write_nav a span{
  margin-left: 4px;
}
.contain_right .personal{

  padding: 20px 30px;
  box-sizing: border-box;
}
.contain_right .card .personal_mes{
  width: 100%;
  padding-bottom: 15px;
}
.contain_right .card .personal_mes .pimg{
  display: block;
  height: 80px;
  width: 80px;
  padding: 2px;
  border :solid 1px #dadada;
  box-sizing: content-box;
  float: left;
}
.contain_right .card .personal_mes .pimg img{

  width: 80px;
  height: 80px;

}
.contain_right .card .personal_mes .mes_div{
  width: 160px;
  height: 86px;
  padding: 15px 20px;
  box-sizing: border-box;
  float: left;
}
.contain_right .card .personal_mes .mes_div a{
  text-decoration: none;
  font-size: 1.1em;
  color: #333333;
}
.contain_right .card .personal_mes .mes_div button{
  border: none;
  background-color: white;
  color: #333333;
  margin-top: 20px;
}
.contain_right .personal .line{
  width: 309px;
  height: 1px;
  border: none;
  background-color: #dadada;
  margin-left: -30px;
}
.contain_right .card .per_nav{
  width: 100%;
  padding-top: 10px;
  display: block;
  box-sizing: border-box;
}
.contain_right .card .per_nav li{
  width: 100%;
  height: 40px;
  padding: 0 20px;
  box-sizing: border-box;
}
.contain_right .card .per_nav li a{
  display: block;
  height: 100%;
  width: 100%;
  padding-top: 11px;
  box-sizing: border-box;
}
.contain_right .card .per_nav li a svg{
  float: left;
}
.contain_right .card .per_nav li a span{
  font-size: 0.9em;
  color: #333333;
  float: left;
  margin-left: 15px;
  font-weight: 200;
}

.contain_right .card .per_nav li a span:hover{
  color: #ffa000;
}
.contain_right .tuijian{
  padding: 20px;
  box-sizing: border-box;
}
.contain_right .tuijian .tj_top{
  width: 100%;
  height: 23px;
  padding-bottom: 10px;
  border-bottom: solid 1px #dadada;
  box-sizing: content-box;
}
.contain_right .tuijian .tj_top .tj_title{
  font-size: 1.2em;
  font-weight: 400;
  float: left;
}
.contain_right .tuijian .tj_top .more_tj{
  float: right;
  text-decoration: none;

}
.contain_right .tuijian .content li{
  padding: 10px 0;
  display: block;
  border-bottom: solid 1px #dadada;
}
.contain_right .tuijian .content li a{
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
