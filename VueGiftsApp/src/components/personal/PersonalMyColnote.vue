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
          <li class="active">
            <router-link to="/personalmycollection">
              <a href="#" >我的收藏</a>
            </router-link>

          </li>

          <li>
            <router-link to="">
              <a href="#" >我的点赞</a>
            </router-link>

          </li>

          <li>
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
          <collection-note></collection-note>
        </div>


      </div>



  </div>











</template>

<script>

export default {
  name: 'PersonalMyColnote',
  data () {
    return {

    }
  }
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

</style>
