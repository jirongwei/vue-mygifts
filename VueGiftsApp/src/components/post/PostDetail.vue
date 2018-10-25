<template>

      <div class="content">
        <post-detailleft pid="this.postid"></post-detailleft>
        <post-right></post-right>
        <div class="clear"></div>
      </div>

</template>

<script>
    export default {
        name: "PostDetail",
        data:function () {
          return{
            postid:this.$route.params.pid
          }
        },
      // create:function () {
      //   this.postid=this.$route.params.pid;
      //   // console.log(this.$route.params.pid)
      // }

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
.content{
  width: 1032px;
  margin: auto;
  margin-top: 20px;
}
</style>
