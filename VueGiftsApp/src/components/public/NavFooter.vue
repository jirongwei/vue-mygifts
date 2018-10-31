<template>
  <!--footer-->
  <footer class="es-footer footer">
    <div class="copyright">
      <div class="container">
        Copyright 左心房（苏州）科技股份有限公司 2017 - 2018 Edu Inc.
        <strong>
          <a href="http://www.miibeian.gov.cn/">京ICP备11018177号</a>
          <a href="#">京公网安备1101140200017</a>
        </strong>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'NavFooter',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .es-footer{
    display: block;
    position:relative;
    left:0;
    bottom:0;
    width:100%;
    background: #333;
  }

  .es-footer .copyright {
    opacity: 0.7;
    border-top: 1px solid #444;
    text-align: center;
    padding: 20px 0;
    line-height: 30px;
    color: #c1c1c1;
  }

  @media (max-width: 767px){
    .es-footer .copyright {
      padding: 10px 0;
      line-height: 20px;
    }
  }

  .es-footer .copyright a:hover{
    color: #ffffff;
  }


  .es-footer strong a{
    color: #c1c1c1;
    text-decoration: none;
  }



</style>
