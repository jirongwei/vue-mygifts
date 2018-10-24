<template>

  <div class="show-nothing">
    <div class="nothing-image"></div>
    <p>暂时还没有该状态的内容</p>
    <p>可以去<a href="#">个人设置</a>页面填写自己喜欢的哟~</p>
  </div>




</template>

<script>
  export default {
    name: 'PersonalNothing',
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*没有该状态内容显示div*/
  .show-nothing{
    position: relative;
    padding-top: 50px;
  }

  .nothing-image{
    margin: auto;
    width: 200px;
    height: 230px;
    background: url("../../assets/my-icons/nothing.png") center no-repeat;
  }

  .show-nothing p{
    margin: auto;
    text-align: center;
    line-height: 2;
    font-size: 18px;
    font-family: '微软雅黑';
    color: #666;
  }

  .show-nothing a{
    text-decoration: none;
    color: #0099e5;
  }

</style>
