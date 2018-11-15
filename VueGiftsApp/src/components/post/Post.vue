<template>

  <div>
    <div class="content">
      <post-show></post-show>
      <post-right></post-right>
      <div style="clear: both"></div>
    </div>
    <NavFooter style="margin-top: 50px"></NavFooter>
  </div>

</template>

<script>
  import NavFooter from '../public/NavFooter'
    export default {
        name: "Post",
      components:{
          NavFooter
      }
    }

</script>

<style scoped>
.content{
  width: 1032px;
  margin: auto;
  margin-top: 20px;
}
</style>
