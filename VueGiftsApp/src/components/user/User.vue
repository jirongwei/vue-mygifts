<template>
    <div>
      <div class="container">
        <div class="user">
          <div class="img" >
            <div>About LeftHeart</div>
            <div>-</div>
            <div>关于我们</div>
          </div>
          <div class="text">
            <p>LeftHeart是一款礼品商城与礼品论坛攻略相结合的网站，本站暂时实现了以下功能：</p>
            <p>1.挑选礼物：可通过送礼对象、送礼节日、排序搜索三个条件筛选礼物，你也可以自主搜索关键词来获取你想要的礼物，
              每个礼物都有详细的信息以及细节展示</p>
            <p>2.礼物攻略：我们专门为广大用户对选择礼物难以抉择提供意见，让用户更快速的找到适合自己的
              礼物，提升用户的体验度。</p>
            <p>3.收藏礼物：你可以把喜欢的礼物添加到我的礼物里，方便下次查找。</p>
            <p>4.评论礼物：对喜欢的礼物当然要评价一下啦，当然我们的不足您也可以进行评价和回复，我们会及时反省和改进。</p>
            <p>5.积分兑换：通过评论，签到等获得积分，积分可以免费兑换等价商品。</p>
            <p>6.购物车：可以暂时把挑选商品放入购物车或更改购买数量，并对多个商品进行一次结款。</p>
            <p>7.个人中心：可以查看订单状态，也可以修改手机绑定，添加地址，完善个人资料，修改密码等。</p>
          </div>
        </div>
      </div>
      <NavBottom></NavBottom>
    </div>
</template>

<script>
  import NavBottom from '../public/NavBottom'
    export default {
        name: "user",
      components:{
        NavBottom
      }
    }
</script>

<style scoped>
  .container{
    background: #f3f3f3;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .container .img{
    height: 388px;
    margin-top: -20px;
    color: #fff;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('../../assets/my-icons/about.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0 -350px;
  }
  .text{
    margin: auto;
    margin-top: 50px;
    margin-bottom: 100px;
    width: 60%;
  }
  p{
    font-size: 16px;
  }
</style>
