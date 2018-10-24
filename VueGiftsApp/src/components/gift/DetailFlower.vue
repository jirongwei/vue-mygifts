<template>

  <div class="container">
    <div class="row">
      <div class="col-md-5 col-sm-12 col-xs-12">
        <div class="preview">
          <!-- Tab panes -->
          <div class="tab-content preview-booth pt10">
            <!--礼物循环模板-->
            <div role="tabpanel" class="tab-pane mod-pic" :class="{'active':index===0}" :id="'list-p'+index"  v-for="(img,index) in giftImages">
              <img  :src="img.pic_url" width="375" height="375"  class="sImg">
            </div>
          </div>

          <!-- Nav tabs -->
          <ul class="nav nav-tabs preview-thumb clearfix " role="tablist">
            <!--礼物循环模板-->
            <li role="presentation" v-for="(img,index) in giftImages">
              <a :href="'#list-p'+index" :aria-controls="'list-p'+index" role="tab" data-toggle="tab">
                <img  :src="img.pic_url" style="display: inline;" width="75" height="75">
              </a>
            </li>

          </ul>

        </div>
      </div>
      <div class="col-md-7 col-sm-12 col-xs-12 pt10">
        <div class="property hidden-xs hidden-sm">

          <div class="property-hd">
            <h1 v-text="giftData.gift_name">忘情巴黎--33枝红玫瑰</h1>
            <p class="mod-info active" v-text="giftData.gift_tip">浪漫唯美 女神挚爱</p>
          </div>

          <div class="property-sell">
            <dl class="property-sell-price clearfix">
              <dt class="vm-metatit">心&nbsp;&nbsp;房&nbsp;&nbsp;价：
              </dt>
              <dd>
                <div class="mod-price">
                  <small>¥</small>
                  <span id="J_price" class="vm-money" v-text="giftData.new_price"></span>
                </div>
                <div class="old-price">
                  <small>¥</small>
                  <span id="price" class="vm-money" v-text="giftData.price"></span>
                </div>
              </dd>
            </dl>
            <dl class="property-sell-coupon clearfix" id="J_prodPromo" style="">
              <dt class="vm-metatit">寄<span class="s-space"></span><span class="s-space"></span>语：
              </dt>
              <dd>
                <p id="J_promoInner">
                  <span class="vm-tag multiple"><em v-text="giftData.remark"></em></span></p>
              </dd>
            </dl>
          </div>

          <div class="property-sibling">
            <dl class="property-sibling-item">
              <dt class="vm-metatit">
                类<span class="s-space"></span><span class="s-space"></span>别：
              </dt>
              <dd class="clearfix">
                <a href="javascript:;" class="prop selected" v-text="giftData.type_id__typename"></a>
              </dd>
            </dl>
          </div>

          <div class="property-set">
            <dl class="property-set-sale">
              <dt class="vm-metatit">材料：</dt>
              <dd class="clearfix">
                <a v-text="giftData.descr">
                </a>
              </dd>
            </dl>
            <dl class="property-set-sale">
              <dt class="vm-metatit">包装：</dt>
              <dd class="clearfix">
                <a v-text="giftData.gift_package">
                </a>
              </dd>
            </dl>

          </div>

          <div class="property-service">
            <dl class="property-service-item clearfix">
              <dt class="vm-metatit">支<span class="s-space"></span><span class="s-space"></span>持：
              </dt>
              <dd class="mod-bd" id="J_prodService">
                <span><i class="glyphicon glyphicon-ok-circle" aria-hidden="true"></i>花呗分期</span>
                <span><a href="#" target="_blank"><i class="glyphicon glyphicon-ok-circle" aria-hidden="true"></i>百城速达</a></span>
                <span><i class="glyphicon glyphicon-ok-circle" aria-hidden="true"></i>顺丰包邮</span>
                <span><i class="glyphicon glyphicon-ok-circle" aria-hidden="true"></i>7天无理由退货</span>
              </dd>
            </dl>

            <dl class="property-service-provider clearfix">
              <dt class="vm-metatit">附<span class="s-space"></span><span class="s-space"></span>送：
              </dt>
              <dd class="clearfix">
                <span ></span>
                下单填写留言，即免费赠送精美贺卡！
              </dd>
            </dl>

            <dl class="property-service-provider clearfix">
              <dt class="vm-metatit">服<span class="s-space"></span><span class="s-space"></span>务：
              </dt>
              <dd class="clearfix">
                <span></span>
                本商品由 左心房 负责发货并提供售后服务
              </dd>
            </dl>
          </div>

          <div class="property-buy">
            <p class="vm-message"></p>
            <dl class="property-buy-quantity">
              <dt class="vm-metatit">数<span class="s-space"></span><span class="s-space"></span>量：</dt>
              <dd class="clearfix">
                <div class="mod-control">
                  <a title="减少" href="javascript:;" class="vm-minus" @click="numSub" :class="{disabled:isDisabled}">-</a>
                  <input name="m" data-max="5" type="text" v-model="gift_num">
                  <a title="增加" href="javascript:;" class="vm-plus" @click="numAdd">+</a>
                </div>
              </dd>
            </dl>
            <div class="property-buy-action">
              <router-link to="/giftCart">
                <button type="submit" class="btn btn-danger btn-lg mr20" @click="addCart">立即购买</button>
              </router-link>
            </div>
          </div>

        </div>

      </div>
    </div>

    <!--礼物详情、用户评论-->
    <div class="row" id="gift-detail-content">
      <ul class="nav nav-tabs clearfix">
        <li class="active"><a href="#gift-info" data-toggle="tab" :info-id="0" :class="{GiftDetailNav:curr_info_id==='0'}" @click="detailChange">礼物详情</a></li>
        <li><a href="#gift-comment" data-toggle="tab" :info-id="1" :class="{GiftDetailNav:curr_info_id==='1'}" @click="detailChange">礼物评论</a></li>
      </ul>
    </div>

    <div class="row">
      <div class="tab-content">
        <div class="tab-pane active" id="gift-info">
          <!--详情左侧-->
          <div class="gift-detail">
            <div class="gift-detail-left">
              <img :src="img.pic_url" v-for="img in giftImages" style="width: 500px;height: auto;display: block">
            </div>

            <div class="gift-detail-right">

                <div class="block">
                  <h3>
                    推荐理由
                    <span class="clear">STYLE NOTES</span>
                  </h3>
                  <p>
                  </p><p>AZALEA系列设计灵感来自杜鹃花，寓意爱与喜悦。弹力真丝缎面睡衣，将LEAVERS蕾丝与乔其纱褶皱工艺完美结合。后背细肩带及排扣设计更添女性优雅魅力。</p>
                  <p></p>

                </div>

                <div class="block">
                  <h3>
                    品牌故事
                    <span class="clear">BRAND STORY</span>
                  </h3>
                  <p>
                  </p><p>“一个女人，在脱下外衣时，仍然是美丽的，而且是最富有魅力的，性感的。受着神灵的爱护和眷顾，必须把庸俗和色情分得很清楚。”这样的内衣哲学恐怕也只有La Perla能够读写的如此淋漓尽致。<br>LA PERLA集团创立于1954年，它是世界高端内衣、女装、泳装生产厂家之一，更是时尚的奠基者。LA PERLA品牌内衣具有深厚的文化内涵和惟美的艺术气息，成功地令内衣真正显示出女性的妩媚，把内衣潮流及时地带进年轻人的世界。因其高贵的风格和悠久的历史，被业内誉为内衣商品中的“劳斯莱斯”。</p>
                  <p></p>

                </div>

                <div class="block">
                  <h3>
                    商品详情
                    <span class="clear">DETAILS</span>
                  </h3>
                  <p>
                  </p><p style="white-space: normal;">礼盒包含：</p><p style="white-space: normal;">AZALEA白色蕾丝吊带裙*1</p><p style="white-space: normal;">大双层永生花盒*1</p><p style="white-space: normal;"><br></p><p style="white-space: normal;">吊带裙</p><p style="white-space: normal;">面料：92.3%桑蚕丝、7.7%氨纶；</p><p style="white-space: normal;">辅料：91.3%桑蚕丝、8.7%氨纶；</p><p style="white-space: normal;">蕾丝：86.6%锦纶、13.4%氨纶；</p><p style="white-space: normal;">产地：克罗地亚</p><p><br></p>
                  <p></p>

                </div>

                <div class="block">
                  <h3>
                    运输说明
                    <span class="clear">DELIVERY</span>
                  </h3>
                  <p>
                    普通商品均由上海仓统一出库，付款后24小时内发货，预售或定制商品请参考页面预售发货时间，送达时效以快递公司实际配送为准，详情可以登录官网或者APP查询物流进度。特别提醒：法定节假日店休不发货，如遇店铺大型活动，发货时效稍有延后，具体可咨询在线客服。鲜花由上海仓统一使用联邦快递进行配送（部分特殊产品会由门店配送）。具体配送时间以联邦快递实际配送为准，详情可以登录官网或者APP查询物流进度。
                  </p>

                </div>

                <div class="block">
                  <h3>
                    退换货说明
                    <span class="clear">RETURN &amp; EXCHANGE</span>
                  </h3>
                  <p>
                  </p><p>如有质量问题，请在签收后7日内联系客服。阅读《退换货流程》（http://www.thebeastshop.com/autopage/pc-returnpolicy.htm）</p>
                  <p></p>

                </div>

            </div>

          </div>

        </div>

        <div class="tab-pane" id="gift-comment">
          <div class="div-trend" v-for="com in comments_list">
            <div class="user-pic">
              <!--<img :src="require(`../assets/user-icon/${com.userinfo__icon}`)" alt="">-->
              <img src="../../assets/user-icon/head_icon_1.jpg" alt="">
            </div>
            <div class="trend-right">

              <div class="trend-header">
                <div class="trend-user">
                  <a href="#" v-text="com.userinfo__nickname"></a>
                </div>
                <div class="trend-time">{{getPublishTime(com.comment_time)}}</div>
              </div>

              <div class="trend-address">
                <div class="user-address" v-text="com.userinfo__address__detailLocation"></div>
                <div class="comment-level">
                  评价等级:
                  <span class="glyphicon glyphicon-heart" aria-hidden="true" style="color:orangered" v-for="i of com.credit"></span>
                </div>
              </div>

              <div class="trend-content" v-text="com.comment"></div>
            </div>
          </div>


          <!--加载更多按钮-->
          <div class="load-more" @click="getCommentsMore" v-if="showMoreBtn">
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
          </div>

          <div class="load-more-nothing" v-if="!showMoreBtn">没有更多了~~~</div>


        </div>
      </div>

    </div>


  </div>



</template>

<script>

  import axios from 'axios'
export default {
  name: 'DetailFlower',
  data () {
    return {
      // 获取礼物id
      gift_id:this.$route.params.giftid,
      // 接受礼物详情数据
      giftData:[],
      giftImages:[],

      // 加入购物车数量
      gift_num:'1',
      isDisabled:true,

      // 礼物详情点击事件
      curr_info_id:'0',

      // 用户评论显示
      comment_page:1,
      comments_list:[],
      showMoreBtn:true,



    }
  },

  mounted:function(){
    this.getGiftDetail();
    this.getgiftsComment();
  },
  methods:{
    // 渲染礼物详情页面渲染数据
    getGiftDetail:function () {
      let vm = this;
      axios.get(this.GLOBAL.HOST+'gift/getgift/'+this.gift_id+'/')
        .then(function (response) {
          vm.giftData=response.data.gift_detail[0];
          vm.giftImages=response.data.gift_images;

          // 将多张图片循环插入数组
          // for (let i =0 ; i < response.data.gift_images.length; i++){
          //   vm.giftImages.push(response.data.gift_images[i].pic_url)
          // }
        })
        .catch(function (error) {
          console.log(error)
        });
    },

    // 获取用户评论
    getgiftsComment:function(){
      let vm=this;
      axios.get(this.GLOBAL.HOST+'gift/giftcomments/'+this.gift_id+','+this.comment_page+'/')
        .then(function (response) {
          vm.comments_list=response.data.comments;
        })
        .catch(function (error) {
          console.log(error)
        });
    },

    // 加载更多评论
    getCommentsMore:function(){
      let vm=this;
      this.comment_page+=1;
      axios.get(this.GLOBAL.HOST+'gift/giftcomments/'+this.gift_id+','+this.comment_page+'/')
        .then(function (response) {
          // 判断返回数据是否存在
          if(response.data.comments.length){
            for(let com in response.data.comments){
              vm.comments_list.push(response.data.comments[com])
            }
          }else{
            // 没有更多礼物评论，提示消息
            vm.showMoreBtn=false;
          }
        })
        .catch(function (error) {
          console.log(error)
        });
    },

    // 加入购物车数量
    numAdd:function () {
        this.gift_num++;
        this.isDisabled=false;
    },
    numSub:function () {
      if(this.gift_num===1){
        this.isDisabled=true;
      }else{
       this.gift_num--;
      }
    },

    // 点击加入购物车
    addCart:function(){
      // 用户id 这里默认 1
      let cart={
        userinfo_id:1,
        gifts_id:this.gift_id,
        cart_num:this.gift_num
      };
      axios({
        method:'POST',
        url:this.GLOBAL.HOST+'gift/addcart/',
        data:cart
      })
      .then(function (response) {

      })
      .catch(function (error) {
        console.log(error)
      });
    },

    // 礼物详情nav点击事件
    detailChange:function (e) {
      let $detail_id = $(e.target).attr('info-id');
      this.curr_info_id = $detail_id;
    },

  },


  computed:{
    // 时间戳转化为时间
    getPublishTime(){
      return function(stamp) {

          let time = new Date(stamp);
          let y = time.getFullYear();
          let m = time.getMonth()+1;
          let d = time.getDate();
          let h = time.getHours();
          let mm = time.getMinutes();
          let s = time.getSeconds();
          return y+'-'+this.convertTime(m)+'-'+this.convertTime(d)+' '+this.convertTime(h)+':'+this.convertTime(mm)+':'+this.convertTime(s);
        }
    },
    convertTime(){
      return function (value) {
        return value<10?'0'+value:value;
      }
    }






  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /*公共*/
  body{
    background: #fff;
    padding-top: 0;
  }
  a {
    color: #666;
  }

  .pt10{
    padding-top:10px
  }
  /*公共*/

  /*产品购买*/
  .preview .preview-booth {
    margin:25px 50px;
    width:395px;
    height:395px
  }
  .preview .preview-thumb {
    overflow:hidden;
    text-align:center;
    margin-top:10px
  }
  .preview .preview-thumb li {
    display:inline-block;
    *zoom:1;
    border:1px solid transparent;
    margin:0 5px
  }
  .nav-tabs > li{
    display:inline-block;
    float: none;
  }
  .nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover{
    background-color: #dcdcdc;
    border-bottom-width: 1px;
    border-color: #dcdcdc #dcdcdc #dcdcdc;
    color: #dcdcdc;
  }
  .nav-tabs{
    border:none;
  }
  .nav-tabs > li > a:hover{

  }
  .preview .preview-thumb a {
    display:block;
    position:relative;
    overflow:hidden;
    text-align:center
  }
  .preview .preview-thumb img {
    position:relative;
    max-width:75px;
    max-height:75px
  }

  .crumbs a {
    color:#999
  }

  .property {
    position:relative;
    float:left;
    width:675px;

  }
  .property .vm-metatit {
    float:left;
    padding-left:10px;
    width:75px;
    font-size:12px;
    line-height:34px;
  }
  .property .s-space {
    padding:0 6px
  }
  .property-set {
    padding-bottom:16px
  }
  .property-set-sale,.property-sibling-item {
    margin-bottom:6px
  }
  .property-sell-coupon dd {
    padding-top:15px
  }

  .property-hd h1,.property-out .mod-hd h1 {
    margin-bottom:10px;
    font-size:24px;
    line-height:1.2;
    font-weight:400;
    color:#000
  }

  .property-hd .mod-info,.property-out .mod-hd .mod-info {
    font-size:16px;
    color:#999
  }
  .property-hd .mod-info.active,.property-out .mod-hd .mod-info.active {
    color:#e22841
  }
  .property-hd .mod-price,.property-out .mod-hd .mod-price {
    margin-top:10px;
    color:#e02b41;
    font-size:16px;
    line-height:18px
  }

  .property-hd .mod-party span,.property-out .mod-hd .mod-party span {
    float:right;
    color:#e02b41
  }

  .property-sell-price dd {
    padding-top:10px
  }

  .property-out .mod-bd {
    height:680px;
    border:1px solid #dcdcdc
  }
  .mod-bd .glyphicon{
    color: #07c4f8;
  }

  .property-sell {
    position:relative;
    margin-bottom:26px;
    background:#f5f5f5
  }
  .property-sell .vm-metatit {
    height:55px
  }
  .property-sell-price {
    height:55px;
    overflow:hidden
  }
  .property-sell-price .vm-metatit {
    line-height:62px
  }
  .property-sell-price .mod-price {
    float:left
  }
  .property-sell-price .mod-price {
    color:#e02b41
  }

  .property-sell-price .old-price{
    text-decoration: line-through;
  }

  .property-sell-price .mod-original small,.property-sell-price .mod-price small {
    font-family:arial;
    font-style:normal
  }
  .property-sell-price .mod-price {
    margin-right:8px
  }
  .property-sell-price .mod-price small {
    font-size:24px
  }
  .property-sell-price .mod-price .vm-money {
    color:#e02b41;
    font-size:24px
  }

  .property-sell-price .mod-activity .vm-activity em {
    line-height:18px;
    color:#00c3f5
  }
  .property-sell-price dt{
    font-weight:normal;
  }
  .property-sell-coupon .vm-tag.multiple {
    background-image:url(../../assets/my-icons/vm3.png);
  }
  .property-sell-coupon .vm-tag.multiple em {
    background-color:#f04160;
    background-image:url(../../assets/my-icons/vm3.png);
    font-style:normal;
  }

  .property-sell-coupon {
    margin-left:10px;
    border-top:1px solid #dcdcdc
  }
  .property-sell-coupon .vm-metatit {
    padding-left:0;
    line-height:50px
  }
  .property-sell-coupon p {
    display:inline-block;
    overflow:hidden;
    cursor:pointer;
    vertical-align:middle
  }
  .property-sell-coupon .vm-tag {
    background: rgba(0, 0, 0, 0) url(../../assets/my-icons/vm3.png) no-repeat scroll left top;
    display: inline-block;
    margin-right: 10px;
    padding-left: 10px;
    vertical-align: middle;
  }
  .property-sell-coupon .vm-tag em {
    background: #f2973c url(../../assets/my-icons/vm3.png) no-repeat scroll right top;
    color: #fff;
    display: inline-block;
    line-height: 20px;
    padding-right: 10px;
  }

 .property-set-sale,.property-sibling-item {
    width:570px
  }
  .package-tab a,.property-huabei-bd a,.property-set-sale a,.property-sibling-item a {
    position:relative;
    float:left;
    min-width:50px;
    padding:0 8px;
    margin:0 6px 10px 0;
    background-color:#fff;
    white-space: normal;
    line-height:32px;
    border:1px solid #dcdcdc;
    border-radius:4px;
    color:#666;
    text-decoration:none
  }
  .package-tab a.selected,.property-huabei-bd a.selected,.property-set-sale a.selected,.property-sibling-item a.selected {
    border-color:#00c3f5
  }
  .package-tab a.disabled,.property-huabei-bd a.disabled,.property-set-sale a.disabled,.property-sibling-item a.disabled {
    cursor:default;
    border-color:#e0e0e0;
    border-style:dashed;
    color:#e0e0e0
  }
  .property-sibling-item dd {
    overflow:hidden
  }

  .property-set-sale .vm-sale-img img {
    position:absolute;
    top:3px;
    left:10px
  }
  .property-set-sale .vm-sale-img span {
    display:inline-block
  }
  .property-set-sale .vm-sale-img.disabled img {
    opacity:.5;
    filter:alpha(opacity=50)
  }
  .property-set-sale dd {
    overflow:hidden
  }
  .property-set-sale.s-large a {
    padding:0 30px
  }
  .property-set-package dd {
    overflow:hidden
  }

  .package-tab.selected a {
    border-bottom:none;
    border-bottom-left-radius:0;
    border-bottom-right-radius:0;
    height:57px;
    background:#fff
  }

  .package-content ul {
    margin-bottom:-5px;
    overflow:hidden
  }
  .package-content ul>li {
    float:left;
    position:relative;
    width:182px;
    height:160px;
    text-align:center;
    font-size:12px
  }

  .package-content .vm-prop p {
    height:24px;
    margin-bottom:5px;
    text-align:center;
    overflow:hidden
  }
  .package-content .vm-prop a {
    display:inline-block
  }
  .package-content .vm-prop a.selected {
    border-color:#00c3f5
  }

  .property-service {
    border-top:1px solid #dcdcdc;
    border-bottom:1px solid #dcdcdc;
    padding:23px 0
  }
  .property-service .property-service-provider{
    padding-top:18px;
  }
  .property-service .vm-metatit {
    line-height:18px
  }
  .property-service .property-service-item .mod-bd span {
    position:relative;
    float:left;
    padding-left:22px;
    margin-right:20px
  }
  .property-buy .mod-control,.property-related li {
    margin-right:30px;
    float:left
  }
  .property-service .property-service-item .mod-bd span i {
    position:absolute;
    left:0;
    top:2px
  }
  .property-service .property-service-suda .vm-metatit {
    line-height:34px
  }

  .property-huabei .vm-metatit {
    line-height:44px
  }

  .property-huabei .property-huabei-bd a {
    padding:4px 8px;
    cursor:pointer;
    min-width:82px
  }
  .property-huabei .property-huabei-bd a>span {
    display:block;
    line-height:18px
  }

  .property-buy .property-buy-action {
    margin-top:17px
  }

  .property-buy .property-buy-action button{
    outline: none;
  }

  .property-buy .vm-message {
    position:relative;
    font-size:16px;
    margin-left:10px;
    color:#e02b41
  }

  .property-buy .mod-control {
    position:relative;
    z-index:1;
    height:40px;
    width:80px;
    border-radius:3px;
    overflow:hidden
  }
  .property-buy .mod-control a {
    position:absolute;
    top:0;
    right:0;
    width:20px;
    height:16px;
    line-height:16px;
    font-size:14px;
    text-decoration:none;
    text-align:center;
    border:1px solid #dcdcdc;
    color:#666
  }
  .property-buy .mod-control a.disabled {
    cursor:default;
    color:#e0e0e0
  }
  .property-buy .mod-control input {
    position:absolute;
    top:0;
    left:0;
    width:53px;
    height:38px;
    padding:0;
    line-height:40px;
    font-size:12px;
    text-align:center;
    color:#333;
    border:1px solid #dcdcdc;
  }
  .property-buy .vm-service a,.property-related li a:hover {
    color:#00c3f5
  }
  .property-buy .mod-control .vm-minus {
    top:22px
  }

  .property-buy .vm-tips em {
    cursor:pointer
  }
  .property-buy .btn {
    padding-left:0;
    padding-right:0;
    width:128px
  }
  .property-buy-quantity {
    margin-bottom:26px
  }

  /*礼物详情部分*/
  #gift-detail-content{
    margin-top: 100px;
    margin-bottom: 20px;
  }

  #gift-detail-content li{
    float: left;
    position: relative;
    z-index: 1;
    margin-right: 35px;
  }

  #gift-detail-content li a{
    display: block;
    padding: 0 20px;
    line-height: 59px;
    font-size: 16px;
    color: #333;
    text-decoration: none;
    transition: color .3s;
    background: none;
    border: none;
  }

  #gift-detail-content li a:hover{
    color: #00c3f5;
  }

  /*礼物详情nav切换状态*/

  .GiftDetailNav{
    color: #00c3f5 !important;
    border-bottom: 2px solid #00c3f5 !important;
  }

  #gift-info .gift-detail, #gift-info .gift-detail .gift-detail-left {
    margin: 0 auto 20px;
    width: 600px;
    padding: 50px 0 0 60px;
    background: #fff;
    border-radius: 20px;
    text-align: justify;
  }

  #gift-info .gift-detail .gift-detail-left{
    padding: 0 60px 40px 0;
  }


  #gift-info .gift-detail{
    position: relative;
    margin-left: 0;
    filter: drop-shadow(0px 0px 15px #bbb);
  }

  #gift-info .gift-detail:before{
    content: '';
    display: block;
    position: absolute;
    right:-60px;
    top:0;
    width: 60px;
    height: 50px;
    background: linear-gradient(42deg, #ddd 30%, rgba(0,0,0,0) 40%);

  }

  #gift-info .gift-detail-right{
    position: absolute;
    top: 0;
    right: 0;
    margin-right: -400px;
    width: 270px;
    min-height: 500px;
    float: right;
  }

  #gift-info .gift-detail-right .block{
    margin-bottom: 35px;
  }

  #gift-info .block h3{
    font-size: 13px;
    font-weight: lighter;
    font-family: "Times New Roman", "Microsoft YaHei", Times, serif, simhei;
    color: #212121;
    border-bottom: 1px solid black;
    margin: 10px 0 10px;
    display: block;
    height: 35px;
    line-height: 1.35;
    padding: 0;
  }

  #gift-info .block span{
    display: block;
    clear: both;
    width: 100%;
    height: 0;
  }

  #gift-info .block p{
    color: #828282;
    line-height: 1.5;
  }

  /*礼物评论部分*/
  #gift-comment{
    width: 100%;
    margin-bottom: 20px;
    position: relative;
  }

  #gift-comment .div-trend{
    padding: 24px;
    margin: 0 100px 8px;
    position: relative;
    overflow: hidden;
    background: #FFF;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.1);
    border-radius: 8px;
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
    margin-left: 15px;
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

  .trend-right .trend-address .user-address{
    width: 40%;
    margin-left: 15px;
    font-size: 13px;
    padding-top: 5px;
    float: left;
  }

  .trend-right .trend-address .comment-level{
    float: left;
    padding-top: 5px;
    margin-left: 120px;
    font-size: 13px;
  }

  .trend-right .trend-content{
    clear: both;
    text-align: left;
    padding-top: 15px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #1c1f21;
    line-height: 24px;
    word-wrap: break-word;
    text-indent: 2em;
  }

  /*加载更过按钮*/
  #gift-comment{
    position: relative;
  }

  #gift-comment .load-more{
    width: 50px;
    height: 50px;
    margin: 10px auto 0;
    border: solid 1px gray;
    border-radius: 50%;
    cursor: pointer;
    text-align: center;
  }

  #gift-comment .load-more span{
    font-size: 44px;
    color: gray;
    line-height: 42px;
    margin-left: 3px;
  }

  #gift-comment .load-more:hover{
    border: solid 2px gray;
  }

  #gift-comment .load-more-nothing{
    text-align: center;
    font-size: 18px;
    margin-top: 10px;
  }


</style>
