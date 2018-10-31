<template>
  <div class="container-fluid" id="index">
    <div class="changeImg">
      <div class="changeImg_imgs">
        <ul v-bind:style="{ marginLeft:  topmarginleft}">
          <li v-for="img in topimgstyle" v-bind:class="img.class" >
            <div class="ci_content">
              <div class="ci_title" v-text="img.title"></div>
              <div class="ci_detail" v-text="img.content">11111</div>
            </div>
          </li>
          <div class="clear"></div>
        </ul>
      </div>
      <div class="changeImg_lbtn changeImg_btn" v-on:click="top_btnl"></div>
      <ol class="btns">
        <li v-for="i in logolist"  v-bind:class="{'on': i==top_index}" @click="top_btns(i)" ></li>
        <!--<li ss="0" v-bind:class="{'on': 0==top_index}" ></li>-->

        <!--<li ss="1" v-bind:class="{'on': 1==top_index}"></li>-->
        <!--<li ss="2" v-bind:class="{'on': 2==top_index}"></li>-->
        <!--<li ss="3" v-bind:class="{'on': 3==top_index}"></li>-->
      </ol>
      <div class="changeImg_rbtn changeImg_btn" v-on:click="top_btnr"></div>
    </div>
    <div class="strategyContain">
      <div class="sc_title">&nbsp;&nbsp;&nbsp;&nbsp;攻略精选</div>
      <div class="sc_list">
        <ul >
          <li v-for="scm in glmes" >
            <router-link :to="{path:'/talkdetail/'+scm.glid,params:{glid:scm.glid}}">
            <div class="sc_list_img" v-bind:style="{backgroundImage:'url('+scm.glimg+')'}"></div>
            <div class="sc_list_title" v-text="scm.gltitle"></div>
            <div class="sc_list_content" v-text="scm.glcontent"></div>
            </router-link>
            <div class="sc_list_info">
              <svg t="1540213544665" @click="glthumb(scm.glid)" v-if="!scm.colstatus" style="float: left;margin-right: 5px;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1998" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"><path d="M782.036 447.65h-172.29c66.761-246.563-45.998-259.156-45.998-259.156-47.791 0-37.884 37.791-41.498 44.092 0 120.58-128.074 215.065-128.074 215.065v341.946c0 33.754 45.998 45.91 64.042 45.91h258.866c24.363 0 44.202-63.892 44.202-63.892 64.043-217.77 64.043-282.564 64.043-282.564 0.001-44.993-43.293-41.398-43.293-41.398v0 0zM782.036 447.65z" fill="#bfbfbf" p-id="1999"></path><path d="M323.472 447.763h-103.167c-21.306 0-21.635 20.927-21.635 20.927l21.306 344.864c0 21.95 21.987 21.95 21.987 21.95h89.291c18.602 0 18.437-14.52 18.437-14.52v-347.069c0-26.486-26.221-26.151-26.221-26.151v0 0zM323.472 447.763z" fill="#bfbfbf" p-id="2000"></path></svg>
              <svg t="1540213544665" @click="glthumb(scm.glid)" v-if="scm.colstatus" style="float: left;margin-right: 5px;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1998" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"><path d="M782.036 447.65h-172.29c66.761-246.563-45.998-259.156-45.998-259.156-47.791 0-37.884 37.791-41.498 44.092 0 120.58-128.074 215.065-128.074 215.065v341.946c0 33.754 45.998 45.91 64.042 45.91h258.866c24.363 0 44.202-63.892 44.202-63.892 64.043-217.77 64.043-282.564 64.043-282.564 0.001-44.993-43.293-41.398-43.293-41.398v0 0zM782.036 447.65z" fill="#FF7204" p-id="1999"></path><path d="M323.472 447.763h-103.167c-21.306 0-21.635 20.927-21.635 20.927l21.306 344.864c0 21.95 21.987 21.95 21.987 21.95h89.291c18.602 0 18.437-14.52 18.437-14.52v-347.069c0-26.486-26.221-26.151-26.221-26.151v0 0zM323.472 447.763z" fill="#FF7204" p-id="2000"></path></svg>
              <span v-text="scm.glclicknum" @click="glthumb(scm.glid)" style="float: left;margin-right: 5px;" :class="{olp:scm.colstatus}"></span>
              <svg t="1540213654320" @click="glcollect(scm.glid)" v-if="!scm.praisestatus" class="icon" style="float: left;margin-right: 5px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3578" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"><path d="M673.15625001 166.90624999c-63.703125 0-122.765625 32.0625-162.00000002 84.79687501-38.8125-52.734375-98.296875-84.796875-161.99999998-84.79687501-114.75 0-207.984375 102.09375001-207.98437501 227.39062501 0 74.671875 33.328125 127.40625001 60.328125 169.59375C279.546875 686.65625001 476.140625 838.953125 484.578125 845.28125001c8.015625 6.328125 17.296875 9.28125001 26.57812501 9.28124999s18.5625-2.953125 26.57812499-9.28125001c8.4375-6.328125 204.609375-159.046875 283.078125-281.39062499 27-42.1875 60.328125-94.921875 60.328125-169.59375 0-125.296875-93.234375-227.390625-207.98437501-227.39062499z" fill="#bfbfbf" p-id="3579"></path></svg>
              <svg t="1540213654320" @click="glcollect(scm.glid)" v-if="scm.praisestatus" class="icon" style="float: left;margin-right: 5px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3578" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"><path d="M673.15625001 166.90624999c-63.703125 0-122.765625 32.0625-162.00000002 84.79687501-38.8125-52.734375-98.296875-84.796875-161.99999998-84.79687501-114.75 0-207.984375 102.09375001-207.98437501 227.39062501 0 74.671875 33.328125 127.40625001 60.328125 169.59375C279.546875 686.65625001 476.140625 838.953125 484.578125 845.28125001c8.015625 6.328125 17.296875 9.28125001 26.57812501 9.28124999s18.5625-2.953125 26.57812499-9.28125001c8.4375-6.328125 204.609375-159.046875 283.078125-281.39062499 27-42.1875 60.328125-94.921875 60.328125-169.59375 0-125.296875-93.234375-227.390625-207.98437501-227.39062499z" fill="#FF7204" p-id="3579"></path></svg>
              <span v-text="scm.colnum" @click="glcollect(scm.glid)" style="float: left;margin-right: 5px;" :class="{olp:scm.praisestatus}"></span>
              <router-link :to="{path:'/talkdetail/'+scm.glid,params:{glid:scm.glid}}">
                <svg t="1540213734953" class="icon" style="float: left;margin-right: 5px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4403" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"><path d="M329.86709543 249.22599137c-50.40069004 0-91.41166249 41.01097245-91.41166248 91.4116625v267.19269925c0 50.40069004 41.01097245 91.41166249 91.41166248 91.41166249h115.5763769l69.18012524 74.42732036 69.31820931-74.42732036h110.19109769c50.40069004 0 91.41166249-41.01097245 91.41166248-91.41166249V340.63765387c0-50.40069004-41.01097245-91.41166249-91.41166248-91.4116625H329.86709543z m184.06608172 554.40759046c-7.59462453 0-14.63691274-3.59018613-20.02219193-9.94205393l-61.03316439-65.5899391h-103.0107254c-66.2803595 0-120.2712357-53.99087618-120.27123568-120.27123568V340.63765387c0-66.2803595 53.99087618-120.2712357 120.27123568-120.2712357h364.26580914c66.2803595 0 120.2712357 53.99087618 120.27123568 120.2712357v267.19269925c0 66.2803595-53.99087618 120.2712357-120.27123568 120.27123568h-97.6254462l-61.44741662 66.00419135c-1.65700898 1.51892491-9.66588576 9.52780169-21.1268646 9.52780168z" p-id="4404" fill="#FF7204"></path><path d="M618.1866593 474.16496145c0 9.94205392 4.14252247 19.74602377 11.04672657 26.78831197 7.18037229 7.04228819 16.70817396 11.04672658 26.78831198 11.04672658 9.94205392 0 19.74602377-4.14252247 26.78831195-11.04672658 7.04228819-7.04228819 11.04672658-16.84625804 11.04672659-26.78831197 0-9.94205392-4.14252247-19.74602377-11.04672659-26.78831197-7.18037229-7.04228819-16.70817396-11.04672658-26.78831195-11.04672658-9.94205392 0-19.74602377 4.14252247-26.78831198 11.04672658-7.04228819 7.18037229-11.04672658 16.70817396-11.04672657 26.78831197z m-145.1263705 0c0 9.94205392 4.14252247 19.74602377 11.04672657 26.78831197 7.04228819 7.04228819 16.84625804 11.04672658 26.78831198 11.04672658 9.94205392 0 19.74602377-4.14252247 26.78831196-11.04672658 7.04228819-7.04228819 11.04672658-16.84625804 11.04672659-26.78831197 0-9.94205392-4.14252247-19.74602377-11.04672659-26.78831197-7.04228819-7.04228819-16.84625804-11.04672658-26.78831196-11.04672658-9.94205392 0-19.74602377 4.14252247-26.78831198 11.04672658-7.04228819 7.18037229-11.04672658 16.70817396-11.04672657 26.78831197z m-139.87917538 0c0 9.94205392 4.14252247 19.74602377 11.04672658 26.78831197 7.18037229 7.04228819 16.70817396 11.04672658 26.78831197 11.04672658 9.94205392 0 19.74602377-4.14252247 26.78831197-11.04672658 7.04228819-7.18037229 11.04672658-16.70817396 11.04672658-26.78831197 0-9.94205392-4.14252247-19.74602377-11.04672658-26.78831197-7.18037229-7.04228819-16.70817396-11.04672658-26.78831197-11.04672658-9.94205392 0-19.74602377 4.14252247-26.78831197 11.04672658-6.90420412 7.04228819-11.04672658 16.84625804-11.04672658 26.78831197z" p-id="4405" fill="#FF7204"></path></svg>
                <span v-text="scm.glreplynum" style="float: left;margin-right: 5px;" :class="{olp:true}"></span>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
      <div class="sc_more" @click="getmoregl">查阅更多折子</div>
    </div>
    <div class="goodsContain">
      <div class="gc_title">&nbsp;&nbsp;&nbsp;&nbsp;创意礼品</div>
      <div class="gc_list">
        <ul>
          <li v-for="goodm in goodmes" >
            <router-link :to="{path:'/giftInfo/'+goodm.goodid,query:{id:goodm.goodid}}" tag="a">
            <!--<router-link :to="{path:'/giftInfo/'+goodm.goodid,query:{id:goodm.goodid}}" tag="a">-->
            <div class="gc_image" v-bind:style="{backgroundImage:'url('+goodm.goodimg+')'}"></div>
            </router-link>
            <router-link :to="{path:'/giftInfo/'+goodm.goodid,query:{id:goodm.goodid}}" tag="a">
            <div class="gc_title" v-text="goodm.goodtitle"></div>
            </router-link>
            <div class="gc_massage">
              <div class="gc_message_l">
                <i></i>
                <span v-text="goodm.goodprice"></span>
              </div>
              <div class="gc_message_r">
                <svg t="1540213544665" @click="goodsthumb(goodm.goodid)" v-if="!goodm.colstatus" class="icon" style="float: left;margin-right: 5px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1998" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"><path d="M782.036 447.65h-172.29c66.761-246.563-45.998-259.156-45.998-259.156-47.791 0-37.884 37.791-41.498 44.092 0 120.58-128.074 215.065-128.074 215.065v341.946c0 33.754 45.998 45.91 64.042 45.91h258.866c24.363 0 44.202-63.892 44.202-63.892 64.043-217.77 64.043-282.564 64.043-282.564 0.001-44.993-43.293-41.398-43.293-41.398v0 0zM782.036 447.65z" fill="#bfbfbf" p-id="1999"></path><path d="M323.472 447.763h-103.167c-21.306 0-21.635 20.927-21.635 20.927l21.306 344.864c0 21.95 21.987 21.95 21.987 21.95h89.291c18.602 0 18.437-14.52 18.437-14.52v-347.069c0-26.486-26.221-26.151-26.221-26.151v0 0zM323.472 447.763z" fill="#bfbfbf" p-id="2000"></path></svg>
                <svg t="1540213544665" @click="goodsthumb(goodm.goodid)" v-if="goodm.colstatus" class="icon" style="float: left;margin-right: 5px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1998" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"><path d="M782.036 447.65h-172.29c66.761-246.563-45.998-259.156-45.998-259.156-47.791 0-37.884 37.791-41.498 44.092 0 120.58-128.074 215.065-128.074 215.065v341.946c0 33.754 45.998 45.91 64.042 45.91h258.866c24.363 0 44.202-63.892 44.202-63.892 64.043-217.77 64.043-282.564 64.043-282.564 0.001-44.993-43.293-41.398-43.293-41.398v0 0zM782.036 447.65z" fill="#FF7204" p-id="1999"></path><path d="M323.472 447.763h-103.167c-21.306 0-21.635 20.927-21.635 20.927l21.306 344.864c0 21.95 21.987 21.95 21.987 21.95h89.291c18.602 0 18.437-14.52 18.437-14.52v-347.069c0-26.486-26.221-26.151-26.221-26.151v0 0zM323.472 447.763z" fill="#FF7204" p-id="2000"></path></svg>
                <span class="gc_like_" @click="goodsthumb(goodm.goodid)" v-text="goodm.goodclicknum" :class="{olp:goodm.colstatus}" style="float: left;margin-right: 5px;"></span>
                <svg t="1540213654320" @click="goodscollect(goodm.goodid)" v-if="!goodm.praisestatus" class="icon" style="float: left;margin-right: 5px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3578" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"><path d="M673.15625001 166.90624999c-63.703125 0-122.765625 32.0625-162.00000002 84.79687501-38.8125-52.734375-98.296875-84.796875-161.99999998-84.79687501-114.75 0-207.984375 102.09375001-207.98437501 227.39062501 0 74.671875 33.328125 127.40625001 60.328125 169.59375C279.546875 686.65625001 476.140625 838.953125 484.578125 845.28125001c8.015625 6.328125 17.296875 9.28125001 26.57812501 9.28124999s18.5625-2.953125 26.57812499-9.28125001c8.4375-6.328125 204.609375-159.046875 283.078125-281.39062499 27-42.1875 60.328125-94.921875 60.328125-169.59375 0-125.296875-93.234375-227.390625-207.98437501-227.39062499z" fill="#bfbfbf" p-id="3579"></path></svg>
                <svg t="1540213654320" @click="goodscollect(goodm.goodid)" v-if="goodm.praisestatus" class="icon" style="float: left;margin-right: 5px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3578" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"><path d="M673.15625001 166.90624999c-63.703125 0-122.765625 32.0625-162.00000002 84.79687501-38.8125-52.734375-98.296875-84.796875-161.99999998-84.79687501-114.75 0-207.984375 102.09375001-207.98437501 227.39062501 0 74.671875 33.328125 127.40625001 60.328125 169.59375C279.546875 686.65625001 476.140625 838.953125 484.578125 845.28125001c8.015625 6.328125 17.296875 9.28125001 26.57812501 9.28124999s18.5625-2.953125 26.57812499-9.28125001c8.4375-6.328125 204.609375-159.046875 283.078125-281.39062499 27-42.1875 60.328125-94.921875 60.328125-169.59375 0-125.296875-93.234375-227.390625-207.98437501-227.39062499z" fill="#FF7204" p-id="3579"></path></svg>
                <span class="gc_comment_" @click="goodscollect(goodm.goodid)" v-text="goodm.goodreplynum" :class="{olp:goodm.praisestatus}" style="float: left;margin-right: 5px;"></span>
                <div class="clear"></div>
              </div>
              <div class="clear"></div>
            </div>
          </li>
        </ul>
      </div>
      <div class="gc_more" @click="getmoregood">搜寻更多宝贝儿</div>
    </div>
    <div class="postContain">
      <div class="pc_title">&nbsp;&nbsp;&nbsp;&nbsp;礼物杂谈</div>
      <div class="pc_message">
        <div class="pc_message_content">
          Suspendisse potenti. Suspendisse non sem lectus, eu sagittis diam. Nullam quis vestibulum augue. Curabitur augue urna, viverra vel gravida et, aliquet eget erat. Aliquam elit felis, pharetra id fringilla et, dignissim sed velit.
        </div>
        <div class="pc_message_btns">
          <div class="lar">
            <div class="left" @click="post_btnl"></div>
            <div class="right" @click="post_btnr"></div>
          </div>
          <div class="pc_m_btns_more" >查看更多</div>
        </div>
        <div class="pc_message_post">
          <div class="pc_message_post_">
            <ul v-bind:style="{ marginLeft:  postmarginleft}">
              <li v-for="pi in postimgs">
                <div class="pc_m_p_l">
                  <router-link :to="{path:'/postdetail/'+pi.postId,param:{pid:pi.postId}}">
                    <div class="pc_m_p_l_img" v-bind:style="{ backgroundImage:'url('+pi.userImg+')'}"></div>
                    <div class="pc_m_p_l_nickname" v-text="pi.userName"></div>
                  </router-link>
                </div>
                <div class="pc_m_p_r">
                  <router-link :to="{path:'/postdetail/'+pi.postId,param:{pid:pi.postId}}">
                    <div class="pc_m_p_r_title"v-text="pi.postTitle"></div>
                    <div class="pc_m_p_r_content"v-text="pi.postContent"></div>
                  </router-link>
                </div>
                <div class="clear"></div>
              </li>

              <div class="clear"></div>
            </ul>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "index",
        data:function () {
            return {
                //首页轮播图
                top_index:0,
                topimgstyle:[
                  {
                  class:"topimgs1",
                  title:"11",
                  content:"111111111111111111111"
                },{
                  class:"topimgs2",
                  title:"22",
                  content:"2222222222222222222222222"
                },{
                  class:"topimgs3",
                  title:"33",
                  content:"333333333333333333333"
                },{
                  class:"topimgs4",
                  title:"44",
                  content:"4444444444444444444444444444444"
                }
                ],
                logolist:[0,1,2,3],
                topmarginleft:"0%",
                topInterval:"",

                //获取本地数据来判断
                telephone:"",
                uid:1,
                //攻略展示
                glmes:[],
                glpage:1,

                //礼品展示
                goodmes:[],
                goodpage:1,

                //帖子的轮播展示
                post_index:0,
                postimgs:[],
                postmarginleft:"0%",
                postInterval:""


            }
        },

        mounted:function() {
          var vm = this;
          //加载首页轮播图
          this.doload();

          //获取用户id
          this.getuserid();

          //axios请求攻略数据
          axios.get('http://localhost:8000/tribune/tribunes/'+this.glpage)
            .then(function (response) {
              console.log(response.data);
              vm.glmes=response.data;
            })
            .catch(function (error) {
              console.log(error)
            });

          //axios请求商品数据
          axios.get('http://localhost:8000/gift/indexgifts/'+this.goodpage)
            .then(function (response) {
              console.log(response.data);
              vm.goodmes=response.data;
            })
            .catch(function (error) {
              console.log(error)
            });

          //axios请求帖子数据

          axios.get('http://127.0.0.1:8000/sowingmap/')
            .then(function (response) {
              console.log(response.data)
              vm.postimgs=response.data;
            })
            .catch(function (error) {
              console.log(error)
            });

          //轮播加载帖子
          this.postload();

        },
        methods:{
            //首页轮播图
            top_btnl:function () {
                clearInterval(this.topInterval);
                if(this.top_index>0){
                    this.top_index--;
                }else {
                    this.top_index=this.topimgstyle.length-1;
                }
                 this.topmarginleft=(-100*this.top_index).toString()+"%";
                this.dochangImg()
            },
            top_btnr:function () {
                clearInterval(this.topInterval);
                if(this.top_index<this.topimgstyle.length-1){
                   this.top_index++;
                }else {
                   this.top_index=0
                }
               this.topmarginleft=(-100*this.top_index).toString()+"%";
               this.dochangImg()
            },
            top_btns:function(value){
                clearInterval(this.topInterval);
                this.top_index=value;
                this.topmarginleft=(-100*this.top_index).toString()+"%";
                this.dochangImg()
            },
            doload:function(){
              this.topInterval=setInterval( () => {
                  if(this.top_index<3){
                      this.top_index++;
                  }else {
                      this.top_index=0;
                  }
                 this.topmarginleft=(-100*this.top_index).toString()+"%";
              },3000)
            },
            dochangImg:function () {
                this.topInterval=setInterval( () =>{
                    if(this.top_index<this.topimgstyle.length-1){
                      this.top_index++;
                    }else {
                      this.top_index=0;
                    }
                  this.topmarginleft=(-100*this.top_index).toString()+"%";
                 },3000)
            },

            //获取当前用户id
            getuserid:function(){
              if(window.sessionStorage.getItem("u_id")){
                this.uid=window.sessionStorage.getItem("u_id")
              }
            },

            //axios查看更多攻略
            getmoregl:function(){
              var vnn=this;
              this.glpage+=1;
              axios.get('http://localhost:8000/tribune/tribunes/'+this.glpage)
                .then(function (response) {
                  for (let gl in response.data) {
                      vnn.glmes.push(response.data[gl])
                  }
                })
                .catch(function (error) {
                  console.log(error)
                })
            },

            //攻略点赞
            glthumb:function(triid){
              var vm=this
              if (window.sessionStorage.getItem("token")){
                this.getuserid()
                for(let i=0 ; i<this.glmes.length;i++){
                if(this.glmes[i].glid==triid){
                  this.glmes[i].colstatus=!this.glmes[i].colstatus
                  if(this.glmes[i].colstatus){
                    this.glmes[i].glclicknum+=1
                  }else{
                    this.glmes[i].glclicknum-=1
                  }
                  axios.post(this.GLOBAL.HOST+'tribune/thumbup/',{
                    my_token:window.sessionStorage.getItem("token"),
                    postid:this.glmes[i].glid,
                    praisestatus:this.glmes[i].clickstatus
                  })
                    .then(function (response) {
                      console.log(response.data)
                    })
                    .catch(function (error) {
                      console.log(error)
                    })
                }
              }
              }else{
                alert("请您先进行登录")
              }
            },

            //攻略收藏
            glcollect:function(triid){
              var vm=this
              if (window.sessionStorage.getItem("token")){
                this.getuserid()
                for(let i=0 ; i<this.glmes.length;i++) {
                  if(this.glmes[i].glid==triid){
                    this.glmes[i].praisestatus=!this.glmes[i].praisestatus
                    if(this.glmes[i].praisestatus){
                      this.glmes[i].colnum+=1
                    }else {
                      this.glmes[i].colnum-=1
                    }
                    axios.post(this.GLOBAL.HOST+'tribune/collect/',{
                      my_token:window.sessionStorage.getItem("token"),
                      postid:this.glmes[i].glid,
                      collectstatus:this.glmes[i].praisestatus
                    })
                      .then(function (response) {
                        console.log(response.data)
                      })
                      .catch(function (error) {
                        console.log(error)
                      })
                  }
                }
              }else{
                alert("请您先进行登录")
              }

            },


            //axios查看更多商品
            getmoregood:function(){

            var vnm=this;
            this.goodpage+=1;
            axios.get('http://localhost:8000/gift/indexgifts/'+this.goodpage)
              .then(function (response) {
                for (let go in response.data) {
                  vnm.goodmes.push(response.data[go])
                }
              })
              .catch(function (error) {
                console.log(error)
              })
          },

            //商品点赞
            goodsthumb:function(gooid){
              var vm=this
              if(window.sessionStorage.getItem("token")){
                this.getuserid()
                for(let i=0 ; i<this.goodmes.length;i++){
                  if(this.goodmes[i].goodid==gooid){
                    this.goodmes[i].colstatus=!this.goodmes[i].colstatus;
                    if(this.goodmes[i].colstatus){
                      this.goodmes[i].goodclicknum+=1;
                    }else{
                      this.goodmes[i].goodclicknum-=1;
                    }
                    axios.post(this.GLOBAL.HOST+'gift/indexthumbgifts/',{
                      userid:window.sessionStorage.getItem("token"),
                      postid:this.goodmes[i].goodid,
                      dianzanstatus:this.goodmes[i].colstatus
                    })
                      .then(function (response) {
                        console.log(response.data)
                      })
                      .catch(function (error) {
                        console.log(error)
                      })
                  }
                }
              }else{
                alert("请您先进行登录")
              }
            },

            //商品收藏
            goodscollect:function(triid){
              var vm=this
              if(window.sessionStorage.getItem("token")){
                this.getuserid()
                for(let i=0 ; i<this.goodmes.length;i++) {
                  if(this.goodmes[i].goodid==triid){
                    this.goodmes[i].praisestatus=!this.goodmes[i].praisestatus;
                    if  (this.goodmes[i].praisestatus){
                      this.goodmes[i].goodreplynum+=1;
                    }else{
                      this.goodmes[i].goodreplynum-=1;
                    }
                    axios.post(this.GLOBAL.HOST+'gift/indexcolgifts/',{
                      userid:window.sessionStorage.getItem("token"),
                      postid:this.goodmes[i].goodid,
                      collectstatus:this.goodmes[i].praisestatus
                    })
                      .then(function (response) {
                        console.log(response.data)
                      })
                      .catch(function (error) {
                        console.log(error)
                      })
                  }
                }
              }else{
                alert("请您先进行登录")
              }
            },

            //轮播使用帖子
            post_btnl:function () {
              clearInterval(this.postInterval);
              if(this.post_index>0){
                this.post_index--;
              }else {
                this.post_index=this.postimgs.length-1;
              }
              this.postmarginleft=(-100*this.post_index).toString()+"%";
              this.postchangImg()
            },
            post_btnr:function () {
              clearInterval(this.postInterval);
              if(this.post_index<this.postimgs.length-1){
                this.post_index++;
              }else {
                this.post_index=0
              }
              this.postmarginleft=(-100*this.post_index).toString()+"%";
              this.postchangImg()
            },
            postload:function () {
                clearInterval(this.postInterval);
                this.postInterval=setInterval( () => {
                  if(this.post_index<this.postimgs.length-1){
                    this.post_index++;
                  }else {
                    this.post_index=0;
                  }
                  this.postmarginleft=(-100*this.post_index).toString()+"%";
                },3000)
            },
            postchangImg:function(){
                this.postInterval=setInterval( () =>{
                    if(this.post_index<this.postimgs.length-1){
                        this.post_index++;
                    }else {
                        this.post_index=0;
                    }
                    this.postmarginleft=(-100*this.post_index).toString()+"%";
                },3000)
            }
        }
    }
</script>

<style scoped>
html,body,ul,input,button{
  outline: 0;
  padding: 0;
  margin: 0;
}
a{
  color: #ff4000;
  text-decoration: none;
}
ul,li{
  list-style: none;
  margin: 0;
  outline: 0;
  padding: 0;
}
body{
  background-color: #f7f8f8;
}
.clear{
  clear: both;
}
.olp{
  color:#ff8000!important;
}
#index{
  margin-top: -20px !important;
}
/*-----------------changeImg------------------------*/
.changeImg{
  height: 450px;
  width: 100%;
  position: relative;
  /*overflow: hidden;*/
}
.changeImg .changeImg_imgs{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.changeImg .changeImg_imgs ul{
  width: 400%;
  height: 100%;
  transition: margin-left 1s linear 0.1s;
}
.changeImg .changeImg_imgs ul li{
  width: 25%;
  height: 100%;
  position: relative;
  float: left;
}
.changeImg .changeImg_imgs ul li .ci_content{
  position: absolute;
  top: 50%;
  right: 15%;
  width: 40%;
  height: 30%;
  background-color: black;
  opacity: 0.3;
  color: white;
  padding: 20px;
  box-sizing: border-box;
}
.changeImg .changeImg_imgs ul li .ci_content .ci_title{
  font-size: 1.1em;
  width: 100%;
  height: 26px;
  margin-bottom: 30px;
}
.changeImg .changeImg_imgs ul li .ci_content .ci_detail{
  font-size: 0.9em;
  width: 100%;
  height: 40px;
}
.changeImg .changeImg_lbtn{
  background-image: url(".././assets/ind_images/limg.svg");
  position: absolute;
  left: 0;
  top: 0;
}
.changeImg .changeImg_rbtn{
  background-image: url(".././assets/ind_images/rimg.svg");
  position: absolute;
  right: 0;
  top: 0;
}
.changeImg .changeImg_btn{
  background-color: #dadada;
  background-repeat: no-repeat;
  background-position: center;
  width: 15%;
  height: 100%;
  opacity: 0.2;
  z-index: 2;
}
.changeImg .changeImg_btn:hover{
  opacity: 0.6;
}
.changeImg .btns{
  position: absolute;
  top: 85%;
  right: 15%;
  width: 120px;
  height: 20px;
  padding:0;
}
.changeImg .btns li{
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: black;
  text-align: center;
  color: #fff;
  margin-left: 5px;
}
.changeImg .btns .on {
  background-color: #ffa000;
}
.topimgs1{
  background-size: cover;
  background-position: center;
  background-image: url("./../assets/ind_images/top1.jpg");
}
.topimgs2{
  background-size: cover;
  background-position: center;
  background-image: url("./../assets/ind_images/top2.jpg");
}
.topimgs3{
  background-size: cover;
  background-position: center;
  background-image: url("./../assets/ind_images/top3.jpg");
}
.topimgs4{
  background-size: cover;
  background-position: center;
   background-image: url("./../assets/ind_images/top4.jpg");
 }

/*--------------------------strategyContain------------------------*/
.strategyContain{
  width: 1200px;
  margin: auto;
  margin-top: 30px;
}
.strategyContain .sc_title{
  font-size: 1.2em;
  width: 100%;
  margin-top: 30px;
  /*color:#ffa000;*/
}
.strategyContain .sc_list ul{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}
.strategyContain .sc_list ul li{
  min-width: 365px;
  max-width: 350px;
  margin-top: 10px;
  margin-bottom: 20px;
  height: 370px;
  box-sizing: border-box;
  flex: 1;
  border: solid 1px #dadada;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  transition: margin-top 0.4s linear;
}
.strategyContain .sc_list ul li:hover{
  transition: margin-top 0.4s,box-shadow 0.4s linear 0.1s;
  margin-top: 5px;
  box-shadow: 0 3px 5px 2px #dadada;
}
.strategyContain .sc_list ul li a .sc_list_img{
  width: 100%;
  height: 142px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
.strategyContain .sc_list ul li a .sc_list_title{
  width: 100%;
  height: 80px;
  padding: 10px 20px;
  box-sizing: border-box;
  font-size: 1.3em;
}
.strategyContain .sc_list ul li a .sc_list_content{
  width: 100%;
  height: 100px;
  padding: 0 20px 10px;
  box-sizing: border-box;
  font-size: 0.9em;
}
.strategyContain .sc_list ul li .sc_list_info{
  height: 44px;
  padding: 10px;
  box-sizing: border-box;
}
.strategyContain .sc_list ul li .sc_list_info .sc_list_info_icon{
  display: inline-block;
  width: 18px;
  height: 17px;
  margin: 5px 5px 0 10px;
  background-repeat: no-repeat;
  background-size: cover;
}
.strategyContain .sc_list ul li .sc_list_info .sc_list_info_love{
  background-image: url(".././assets/ind_images/heart.svg");
}
.strategyContain .sc_list ul li .sc_list_info .sc_list_info_comment{
  background-image: url(".././assets/ind_images/message.svg");
}
.strategyContain .sc_list ul li .sc_list_info span{
  display: inline-block;
  height: 18px;
  font-size: 1.1em;
  color:#555;
}
.strategyContain .sc_more{
  display: block;
  width: 100%;
  height: 78px;
  font-size: 1.2em;
  line-height: 78px;
  text-align: center;
  color: #ff6000;
  border: solid 1px #eeeeee;
}
/*----------------------------goodsContain------------------------------------------*/
.goodsContain{
  width: 1200px;
  margin: auto;
  margin-top: 30px;
}
.goodsContain .gc_title{
  font-size: 1.2em;
  width: 100%;
  margin-top: 30px;
  color:#ffa000;
}
.goodsContain .gc_list ul{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}
.goodsContain .gc_list ul li{
  min-width: 297px;
  max-width: 297px;
  height: 360px;
  margin-top: 10px;
  margin-right: 3px;
  box-sizing: border-box;
  flex: 1;
  background-color: #ffffff;
  padding: 30px;
}
.goodsContain .gc_list ul li:hover{
  transition: margin 0.4s,box-shadow 0.4s linear 0.1s;
  margin-top: 7px;
  box-shadow: 3px 3px 3px 1px #dadada;
}
.goodsContain .gc_list ul li a .gc_image{
  width: 237px;
  height: 237px;
  background-color: #ffa000;
  margin-bottom: 15px;
}
.goodsContain .gc_list ul li a .gc_title{
  width: 100%;
  height: 28px;
  margin-bottom: 10px;
  margin-top: 0;
}
.goodsContain .gc_list ul li .gc_massage{
  width: 100%;
  height: 22px;
}
.gc_massage .gc_message_l{
  float: left;
  height: 100%;
}
.gc_massage .gc_message_l i{
  display: inline-block;
  width:10px;
  height: 16px;
  background: url(".././assets/ind_images/rmb.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-top: 5px;
}
.gc_massage .gc_message_l span{
  margin-left: 5px;
  height: 100%;
  color: #ff6c00;
  font-size: 1.2em;
  font-weight: 200;
}
.gc_massage .gc_message_r{
  float: right;
  height: 100%;
}
.gc_massage .gc_message_r i{
  display: inline-block;
  width: 16px;
  height: 16px;
  margin: 5px 5px 0 10px;
  background-repeat: no-repeat;
  background-size: cover;
}
.gc_massage .gc_message_r .gc_like{
  background-image: url(".././assets/ind_images/heart.svg");
}
.gc_massage .gc_message_r .gc_comment{
  background-image: url(".././assets/ind_images/message.svg");
}
.gc_massage .gc_message_r span{
  display: inline-block;
  height: 18px;
  font-size: 1.1em;
  font-weight: 200;
}
.goodsContain .gc_more{
  display: block;
  width: 100%;
  height: 78px;
  font-size: 1.2em;
  line-height: 78px;
  text-align: center;
  color: #ff6000;
  border: solid 1px #eeeeee;
  margin-top: 10px;
}
/*-----------------------------------postContain------------------------------------*/
.postContain{
  width: 1200px;
  margin: 30px auto;
}
.postContain .pc_title{
  font-size: 1.2em;
  width: 100%;
  margin-bottom: 30px;
}
.postContain .pc_message{
  width: 100%;
}
.postContain .pc_message .pc_message_content{
  width: 30%;
  float: left;
  font-size: 0.8em;
  margin-bottom: 5px;
}
.postContain .pc_message .pc_message_post{
  width: 600px;
  height: 90px;
  float: right;
}
.postContain .pc_message .pc_message_post .pc_message_post_{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.postContain .pc_message .pc_message_post .pc_message_post_ ul{
  width: 400%;
  height: 100%;
  transition: margin-left 1s linear 0.1s;
}
.postContain .pc_message .pc_message_post .pc_message_post_ ul li{
  width: 25%;
  height: 100%;
  float: left;
  color: #000;
}
.pc_m_p_l{
  width: 70px;
  height: 90px;
  float: left;
}
.pc_m_p_l a .pc_m_p_l_img{
  display: block;
  width: 55px;
  height: 55px;
  margin: auto;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
}
.pc_m_p_l a .pc_m_p_l_nickname{
  width: 70px;
  height: 20px;
  font-size: 0.9em;
  text-align: center;
  margin-top: 5px;
}
.pc_m_p_r{
  float: left;
  margin-left: 10px;
  width: 500px;
  height: 90px;
}
.pc_m_p_r a .pc_m_p_r_title{
  font-weight: 400;
  /*margin-top: 5px;*/
  height: 25px;
}
.pc_m_p_r a .pc_m_p_r_content{
  font-size: 0.9em;
  font-weight: 200;
  width: 100%;
  height: 55px;
  margin-top: 5px;
}
.postContain .pc_message .pc_message_btns{
  float: right;
  width: 100px;
  height: 90px;
  padding: 15px 21px;
  box-sizing: border-box;
}
.pc_message_btns .lar .left{
  background: url(".././assets/ind_images/l1.svg");
  margin-right: 5px;
  background-color: #ffa000;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-position: center center;
  display: inline-block;
}
.pc_message_btns .lar .right{
  background: url(".././assets/ind_images/r1.svg");
  background-color: #ffa000;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-position: center center;
  display: inline-block;
}
.pc_message_btns .pc_m_btns_more{
  width: 100%;
  height: 24px;
  font-size: 0.9em;
  margin-top: 5px;
  color: #333333;
}


</style>
