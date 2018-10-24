<template>
  <div class="content">
    <div class="postContent">
      <div class="NoImg"  v-if="!post.postImg">
        <a href="" class="p_title" v-text="post.posttitle"></a>
        <div class="rich">
          <div class="p_rcontent" v-html="post.postdetailcon"></div>
          <div class="p_nav">
            <svg class="Zi Zi--Comment Button-zi" fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z" fill-rule="evenodd"></path></svg>
            <button>
              <span v-text="post.postreplynum"></span><span>条回复</span>
            </button>
            <svg class="Zi Zi--Star Button-zi" @click="colloectpost" v-if="!post.postcollectstatus" fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path></svg>
            <svg class="Zi Zi--Star Button-zi" @click="colloectpost" v-if="post.postcollectstatus" fill="#ff8000" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path></svg>
            <button >
              <span v-text="post.postcollectnum" @click="colloectpost"  :class="{on:post.postcollectstatus}"></span><span @click="colloectpost" :class="{on:post.postcollectstatus}">收藏</span>
            </button>
            <svg class="Zi Zi--Heart Button-zi" @click="danzanpost" v-if="!post.postdianzanstatus" fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z" fill-rule="evenodd"></path></svg>
            <svg class="Zi Zi--Heart Button-zi" @click="danzanpost" v-if="post.postdianzanstatus" fill="#ff8000" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z" fill-rule="evenodd"></path></svg>
            <button >
              <span v-text="post.postdianzannum" @click="danzanpost"  :class="{on:post.postdianzanstatus}"></span><span @click="danzanpost" :class="{on:post.postdianzanstatus}">点赞</span>
            </button>
            <svg class="Zi Zi--Share Button-zi" fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z" fill-rule="evenodd"></path></svg>
            <button>
              <span>分享</span>
            </button>
            <svg viewBox="0 0 18 20" fill="#8590a6" class="Icon Icon--report Icon--left" width="11" height="16" aria-hidden="true" style="height: 16px; width: 11px;"><title></title><g><path d="M16.947 1.13c-.633.135-3.927.638-5.697.384-3.133-.45-4.776-2.54-9.95-.888C.305 1.04.025 1.664.025 2.646L0 18.807c0 .3.1.54.304.718.195.202.438.304.73.304.275 0 .52-.102.73-.304.202-.18.304-.418.304-.718v-6.58c4.533-1.235 8.047.668 8.562.864 2.343.893 5.542.008 6.774-.657.397-.178.596-.474.596-.887V1.964c0-.6-.42-.972-1.053-.835z"></path></g></svg>
            <button>
              <span>举报</span>
            </button>
            <div class="clear"></div>
          </div>
        </div>
      </div>

      <div class="Img" v-if="post.postImg">
        <a href="" class="p_title" v-text="post.posttitle"></a>
        <div class="rich">
          <div class="big_img"  :style="{backgroundImage:'url('+post.postImg+')'}">

          </div>
          <div class="p_rcontent" v-html="post.postdetailcon"></div>
          <div class="p_nav">
            <svg class="Zi Zi--Comment Button-zi" fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z" fill-rule="evenodd"></path></svg>
            <button>
              <span v-text="post.postreplynum"></span><span>条回复</span>
            </button>
            <svg class="Zi Zi--Star Button-zi" @click="colloectpost" v-if="!post.postcollectstatus" fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path></svg>
            <svg class="Zi Zi--Star Button-zi" @click="colloectpost"  v-if="post.postcollectstatus" fill="#ff8000" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path></svg>
            <button  >
              <span v-text="post.postcollectnum" @click="colloectpost"  :class="{on:post.postcollectstatus}"></span><span @click="colloectpost" :class="{on:post.postcollectstatus}">收藏</span>
            </button>
            <svg class="Zi Zi--Heart Button-zi" @click="danzanpost" v-if="!post.postdianzanstatus" fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z" fill-rule="evenodd"></path></svg>
            <svg class="Zi Zi--Heart Button-zi" @click="danzanpost" v-if="post.postdianzanstatus" fill="#ff8000" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z" fill-rule="evenodd"></path></svg>
            <button >
              <span v-text="post.postdianzannum" @click="danzanpost"  :class="{on:post.postdianzanstatus}"></span><span @click="danzanpost" :class="{on:post.postdianzanstatus}">点赞</span>
            </button>
            <svg class="Zi Zi--Share Button-zi" fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z" fill-rule="evenodd"></path></svg>
            <button>
              <span>分享</span>
            </button>
            <svg viewBox="0 0 18 20" fill="#8590a6" class="Icon Icon--report Icon--left" width="11" height="16" aria-hidden="true" style="height: 16px; width: 11px;"><title></title><g><path d="M16.947 1.13c-.633.135-3.927.638-5.697.384-3.133-.45-4.776-2.54-9.95-.888C.305 1.04.025 1.664.025 2.646L0 18.807c0 .3.1.54.304.718.195.202.438.304.73.304.275 0 .52-.102.73-.304.202-.18.304-.418.304-.718v-6.58c4.533-1.235 8.047.668 8.562.864 2.343.893 5.542.008 6.774-.657.397-.178.596-.474.596-.887V1.964c0-.6-.42-.972-1.053-.835z"></path></g></svg>
            <button>
              <span>举报</span>
            </button>

            <div class="clear"></div>
          </div>
        </div>
      </div>

    </div>
    <div class="postReply">
      <div class="replyPost">
        <div class="img" v-bind:style="{backgroundImage:'url('+user.userimg+')'}"></div>
        <div class="replyinput">
          <input type="text" v-model="replycontent">
          <button>评论</button>
          <div class="clear"></div>
        </div>
        <div class="clear"></div>
      </div>
      <div class="replyOthers">
        <div class="replylist">评论列表</div>
        <ul>
          <li v-for="reply in replys" >
            <div class="replymanicon" v-bind:style="{backgroundImage:'url('+reply.replymanImg+')'}"></div>
            <div class="reply_con">
                <div class="rep_show">
                  <span><a href="" v-text="reply.replymanNickname"></a></span>
                  <span>:</span>
                  <span v-text="reply.replycontent"></span>
                </div>
                <div class="rep_nav">
                  <div class="time" v-text="reply.replyTime"></div>
                  <a href="" v-if="reply.replyshow" @click.prevent="showreplyreply(reply.replyID)">收起回复</a>
                  <a href="" v-if="!reply.replyshow" @click.prevent="showreplyreply(reply.replyID)">回复</a>
                  <a href="">举报</a>
                </div>
                <div class="reply-input" v-if="reply.replyshow">
                  <input type="text" v-model="reply.replyreply">
                  <button>评论</button>
                </div>
              </div>

            <div class="clear"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PostDetailLeft",
        props:["pid"],
        data:function () {
          return{
            replycontent:"",
            user:{
              userid:"1",
              userimg:"https://tvax2.sinaimg.cn/crop.0.0.996.996.50/e81a6dd2ly8fvcxg0cdlpj20ro0ro0tu.jpg",
              userNickname:"疯流涕淌"
            },
            post:{
              postid:this.pid,
              posttitle:"为什么lol职业联赛很少看到石头木木之类史诗级别的团控？",
              postImg:"https://pic2.zhimg.com/50/v2-32c8c3ad2eb13b6c770d255a2a13bcb1_400x224.jpg",
              postdetailcon:'<span class=\"RichText ztext CopyrightRichText-richText\" itemprop=\"text\"><p>其实根源在于游戏的设定。</p><p><br></p><p>moba类的游戏为了维持平衡，一直很强调一个叫“收益越大，付出越大”。</p><p><br></p><p>比如你机器人空q了，那么这10几秒的cd里，他作用就大大减小。</p><p><br></p><p>而石头人和阿木木的大招这类技能，如果是裸放又非常好躲的。这缘于此类技能的设定太过于古老，是非常早期的英雄机制。</p><p><br></p><p>而如今新英雄的团控都不会像过去这些老英雄那样，简单且粗暴了。你看看加里奥，同样是大招击飞，他的配合性和互动性就高多了。</p><p><br></p><p>但这不是关键，关键在于要想提高此类大团控的命中，在如今的职业赛场，必须获得更多“信息量”。</p><p><br></p><p>比如知道adc的位置的躲草丛的石头人放R，威胁就远远比正面的石头人的R要强。</p><p><br></p><p>但问题在于：获得信息量的优先权，你得有足够的强势对线来支撑，然而大团控这些英雄因为大招太厉害，一般对线能力都不能太强，如果太强那就太bug了，因此为了这一个团控，bp里就必须为他们牺牲。</p><p><br></p><p>但牺牲换取的很可能是一个并不稳定的大招，（s3全明星若风的石头人，s5世界赛lgd的石头人上单都很好的说明了这点。）</p><p><br></p><p>那么性价比就很低了。</p><p><br></p><p>而职业赛场上的选手，也更偏向于技能组合来达到团控的“效果”。比如卡利斯塔牛头布隆，奥恩加里奥这些。</p><p><br></p><p>有这些高容错又不用牺牲队友的英雄，谁还会傻傻的去选个大团控呢？</p><p></p><p></p></span>',
              postreplynum:223,
              postcollectnum:334,
              postcollectstatus:false,
              postdianzannum:445,
              postdianzanstatus:false,
            },

            replys:[
              {
                replyID:"1",
                replymanId:"1",
                replymanImg:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1105205488,2148138679&fm=200&gp=0.jpg",
                replymanNickname:"阿正鹿丸丸",
                replyTime:"10月8日 11:34",
                replycontent:"大王也有杀境州母亲的动机  没那么大， 对大王来说  真都督死后  假都督比真都督都还真   还有利用价值",
                replyshow:false,
                replyreply:""
              },
              {
                replyID:"2",
                replymanId:"1",
                replymanImg:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1105205488,2148138679&fm=200&gp=0.jpg",
                replymanNickname:"阿正鹿丸丸",
                replyTime:"10月8日 11:34",
                replycontent:"大王也有杀境州母亲的动机  没那么大， 对大王来说  真都督死后  假都督比真都督都还真   还有利用价值",
                replyshow:false,
                replyreply:""
              },
              {
                replyID:"3",
                replymanId:"1",
                replymanImg:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1105205488,2148138679&fm=200&gp=0.jpg",
                replymanNickname:"阿正鹿丸丸",
                replyTime:"10月8日 11:34",
                replycontent:"大王也有杀境州母亲的动机  没那么大， 对大王来说  真都督死后  假都督比真都督都还真   还有利用价值",
                replyshow:false,
                replyreply:""
              }
            ]
          }
        },
        mounted:function(){
          var vm=this

          //初始加载帖子数据
          // axios.get(""+this.postid)
          //   .then(function (response) {
          //     vm.post=response.data;
          //   //  post:{
          //   //   postid:this.postid,
          //   //     posttitle:"为什么lol职业联赛很少看到石头木木之类史诗级别的团控？",
          //   //     postImg:"https://pic2.zhimg.com/50/v2-32c8c3ad2eb13b6c770d255a2a13bcb1_400x224.jpg",
          //   //     postdetailcon:'<span class=\"RichText ztext CopyrightRichText-richText\" itemprop=\"text\"><p>其实根源在于游戏的设定。</p><p><br></p><p>moba类的游戏为了维持平衡，一直很强调一个叫“收益越大，付出越大”。</p><p><br></p><p>比如你机器人空q了，那么这10几秒的cd里，他作用就大大减小。</p><p><br></p><p>而石头人和阿木木的大招这类技能，如果是裸放又非常好躲的。这缘于此类技能的设定太过于古老，是非常早期的英雄机制。</p><p><br></p><p>而如今新英雄的团控都不会像过去这些老英雄那样，简单且粗暴了。你看看加里奥，同样是大招击飞，他的配合性和互动性就高多了。</p><p><br></p><p>但这不是关键，关键在于要想提高此类大团控的命中，在如今的职业赛场，必须获得更多“信息量”。</p><p><br></p><p>比如知道adc的位置的躲草丛的石头人放R，威胁就远远比正面的石头人的R要强。</p><p><br></p><p>但问题在于：获得信息量的优先权，你得有足够的强势对线来支撑，然而大团控这些英雄因为大招太厉害，一般对线能力都不能太强，如果太强那就太bug了，因此为了这一个团控，bp里就必须为他们牺牲。</p><p><br></p><p>但牺牲换取的很可能是一个并不稳定的大招，（s3全明星若风的石头人，s5世界赛lgd的石头人上单都很好的说明了这点。）</p><p><br></p><p>那么性价比就很低了。</p><p><br></p><p>而职业赛场上的选手，也更偏向于技能组合来达到团控的“效果”。比如卡利斯塔牛头布隆，奥恩加里奥这些。</p><p><br></p><p>有这些高容错又不用牺牲队友的英雄，谁还会傻傻的去选个大团控呢？</p><p></p><p></p></span>',
          //   //     postreplynum:"223",
          //   //     postcollectnum:"334",
          //   //     postdianzannum:"224",
          //   // }
          //   })
          //   .catch(function (error) {
          //     console.log(error)
          //   })

          //初始加载评论数据
          // axios.get(""+this.postid)
          //   .then(function (response) {
          //     vm.replys=response.data
          //     // replys:[
          //     //   {
          //     //     replyID:"1",
          //     //     replymanId:"1",
          //     //     replymanImg:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1105205488,2148138679&fm=200&gp=0.jpg",
          //     //     replymanNickname:"阿正鹿丸丸",
          //     //     replyTime:"10月8日 11:34",
          //     //     replycontent:"大王也有杀境州母亲的动机  没那么大， 对大王来说  真都督死后  假都督比真都督都还真   还有利用价值",
          //     //     replyreply:""//动态绑定回复内容
          //     //   }]
          //   })
          //   .catch(function (error) {
          //     console.log(error)
          //   })

          //





        },
        methods:{
          //回复帖子
          replyPost:function () {
            axios.post("",{
              userid:this.user.userid,
              replycon:this.replycontent,
              postid:this.postid,
            })
              .then(function(response){
                alert("评论成功")
                // axios.get(""+this.postid)
                //   .then(function (response) {
                //     vm.replys=response.data
                //     // replys:[
                //     //   {
                //     //     replyID:"1",
                //     //     replymanId:"1",
                //     //     replymanImg:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1105205488,2148138679&fm=200&gp=0.jpg",
                //     //     replymanNickname:"阿正鹿丸丸",
                //     //     replyTime:"10月8日 11:34",
                //     //     replycontent:"大王也有杀境州母亲的动机  没那么大， 对大王来说  真都督死后  假都督比真都督都还真   还有利用价值",
                //     //     replyreply:""//动态绑定回复内容
                //     //   }]
                //   })
                //   .catch(function (error) {
                //     console.log(error)
                //   })
              })
          },

          //回复评论
          replyReply:function (reply) {
            for(let rpl=0;rpl<this.replys.length;rpl++){
              if(this.replys[rpl].replyID==replyID){
                replyco=replys[rpl].replyreply;
              }
            }
            axios.post("",{
              userid:this.user.userid,
              replycon:replyco,
              //时间后台传入
              postid:this.postid,
              replyid:reply.replyID
            })
              .then(function (response) {
                alert("评论成功")
                // axios.get(""+this.postid)
                //   .then(function (response) {
                //     vm.replys=response.data
                //     // replys:[
                //     //   {
                //     //     replyID:"1",
                //     //     replymanId:"1",
                //     //     replymanImg:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1105205488,2148138679&fm=200&gp=0.jpg",
                //     //     replymanNickname:"阿正鹿丸丸",
                //     //     replyTime:"10月8日 11:34",
                //     //     replycontent:"大王也有杀境州母亲的动机  没那么大， 对大王来说  真都督死后  假都督比真都督都还真   还有利用价值",
                //     //     replyreply:""//动态绑定回复内容
                //     //   }]
                //   })
                //   .catch(function (error) {
                //     console.log(error)
                //   })
              })
              .catch(function (error) {
                console.log(error)
              })
          },

          //显示/隐藏评论
          showreplyreply:function (replyID) {
            console.log(replyID)
            var vm=this
            for(let rpl=0;rpl<this.replys.length;rpl++){
              if(this.replys[rpl].replyID==replyID){
                this.replys[rpl].replyshow=!this.replys[rpl].replyshow
              }
            }
          },

          //帖子收藏
          colloectpost:function () {
            //改变图标字体样式
            this.post.postcollectstatus=!this.post.postcollectstatus

            //改变收藏数
            if(this.post.postcollectstatus==true){
              this.post.postcollectnum+=1
            }else {
              this.post.postcollectnum -= 1
            }
            //写入数据库
            // axios.post("",{
            //   userid:this.user.userid,
            //   postid:id
            // })
            //   .then(function () {
            //     alert("收藏成功")
            //   })
            //   .catch(function (error) {
            //     console.log(error)
            //   })
          },

          //帖子点赞
          danzanpost:function () {
            //切换图片
            this.post.postdianzanstatus=!this.post.postdianzanstatus

            //增加点赞数
            if(this.post.postdianzanstatus==true){
              this.post.postdianzannum+=1
            }else{
              this.post.postdianzannum-=1
            }

            //写入数据库
            // axios.post("",{
            //   userid:this.user.userid,
            //   postid:id
            // })
            //   .then(function () {
            //     alert("收藏成功")
            //   })
            //   .catch(function (error) {
            //     console.log(error)
            //   })
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
  /*----------------------------post-----------------------------*/
  .content{
    min-height: 736px;
    width: 67%;
    background-color: white;
    margin-top: 0;
    float: left;
  }
  .content .postContent{
    padding: 20px 20px 0 20px;
    box-sizing: border-box;
  }
  .content .postContent div .p_title{
    font-size: 1.2em;
    font-weight: 600;
    color:black;
    text-decoration: none;
    cursor: pointer;
  }
  .content .postContent div  button{
    display: inline-block;
    border:none;
    outline: none;
    background-color: white;
    font-size: 1.1em;
    line-height: 23px;
    margin-right: 20px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .content .postContent div  button:hover{
    color: #ffa000;
  }
  .content .postContent div  .rich{
       padding: 20px 10px;
       box-sizing: border-box;
     }
  .content .postContent div  .rich  .p_rcontent{
    padding: 20px 10px;
    box-sizing: border-box;
  }{
    padding: 20px 10px;
    box-sizing: border-box;
  }
  .content .postContent div  .rich .p_nav{
    padding: 10px 0;
    height:43px;
    box-sizing: border-box;
    border-bottom: solid 1px #dadada;
  }
  .content .postContent div .rich .p_nav svg{
    float: left;
    margin-right: 5px;
    height: 23px;
  }
  .content .postContent div .rich .p_nav button{
    float: left;
  }
  .content .postContent div .rich .p_nav .on{
    color:#ff8000;
  }
  .content .postContent div .rich .big_img {
    width: 100%;
    margin: 15px 0;
  }
  /*-------------------------------------------回复帖子---------------------------------------*/
  .content .postReply{
    padding: 0 50px 10px 20px;
    box-sizing: border-box;
    border-bottom: solid 1px #dadada;
    margin-left: 20px;
  }
  .content .postReply .img{
    width:30px;
    height:30px;
    float: left;
    background-size: cover;
    background-position: center;
    display: inline-block;
  }
  .content .postReply .replyinput{
    float: left;
    margin-left: 20px;
    width: 90%;
    height: 30px;
    display: inline-block;
    outline: none;
  }
  .content .postReply .replyinput button{
    float: left;
    width: 60px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin-left: 10px;
    border:none;
    background-color: #ff8000;
    color:white;
  }
  .content .postReply .replyinput input{
    width: 80%;
    height: 28px;
    float: left;
  }
  .content .postReply .replyOthers{
    margin-top: 20px;
    border-top:solid 1px #dadada;
    padding: 20px 10px;
    box-sizing: border-box;
  }
  .content .postReply .replyOthers ul li{
    padding: 10px ;
    box-sizing: border-box;
    border-bottom: dashed 1px #dadada;
  }
  .content .postReply .replyOthers  .replylist{
    font-size: 1.2em;
    font-weight: 400;
  }
  .content .postReply .replyOthers ul li .replymanicon{
    float: left;
    width: 30px;
    height: 30px;
    background-position: center;
    background-size: cover;
  }
  .content .postReply .replyOthers ul li .reply_con{
    float: left;
    margin-left: 10px;
    width: 85%;
  }
  .content .postReply .replyOthers ul li .reply_con .rep_show{
    margin-bottom: 10px;
  }
  .content .postReply .replyOthers ul li .reply_con .rep_show span{
    margin-right: 5px;
    font-size: 0.9em;
  }
  .content .postReply .replyOthers ul li .reply_con .rep_show span a{
    color: #ff8000;
    cursor: pointer;
  }
  .content .postReply .replyOthers ul li .reply_con .rep_nav {
    font-size: 0.8em;
    font-weight: 200;
    height: 20px;
    margin-bottom: 10px;
  }
  .content .postReply .replyOthers ul li .reply_con .rep_nav .time{
    float: left;
    margin-right: 10px;
  }
  .content .postReply .replyOthers ul li .reply_con .rep_nav a{
    float: right;
    margin-right: 10px;
    cursor: pointer;
  }
  .content .postReply .replyOthers ul li .reply_con .reply-input {
    height:30px;
    margin-bottom: 10px;
  }
  .content .postReply .replyOthers ul li .reply_con .reply-input input{
    width: 80%;
    height: 100%;
  }
  .content .postReply .replyOthers ul li .reply_con .reply-input button{
    width: 60px;
    height: 100%;
    text-align: center;
    line-height: 30px;
    margin-left: 10px;
    border:none;
    background-color: #ff8000;
    color:white;
  }
</style>
