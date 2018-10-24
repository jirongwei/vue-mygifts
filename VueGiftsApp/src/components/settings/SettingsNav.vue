<template>
  <div class="sidenav">
    <ul class="list-group">
      <li class="list-group-heading">个人设置</li>

      <li class="list-group-item my-item-basic" style="border-left: solid 5px #0099E5;">
        <a href="#" style="color: #0099e5;"><i class="glyphicon glyphicon-user" style="color: #0099e5;"></i> 基础信息</a>
      </li>
      <li class="list-group-item my-item-icon">
        <a href="#" class="personnal-user"><i class="glyphicon glyphicon-picture"></i> 头像设置</a>
      </li>

      <li class="list-group-item my-item-safe">
        <a href="#"><i class="glyphicon glyphicon-lock"></i> 安全设置</a>
      </li>
      <li class="list-group-item  my-item-order">
        <a href="#"><i class="glyphicon glyphicon-th-list"></i> 订单管理</a>
      </li>
      <li class="list-group-item my-item-address">
        <a href="#"><i class="glyphicon glyphicon-map-marker"></i> 地址管理</a>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'SettingsNav',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /*左侧导航--------sidenav-----------*/
  div.sidenav{
    background: #fff;
  }

  div.sidenav ul li{
    border: none;
  }

  div.sidenav ul.list-group li:first-child{
    list-style: none;
    color: #919191;
    margin: 0 0 10px 20px;
    padding-top: 15px;
    font-size: 16px;
  }

  div.sidenav ul.list-group li a{
    display: block;
    text-decoration: none;
    padding: 10px 15px 10px 35px;
    font-size: 16px;
    border: none;
    color: #616161;
  }

  div.sidenav ul.list-group li a i{
    color: #616161;
  }

  div.sidenav ul.list-group li.list-group-heading~:hover{
    background: rgba(211, 211, 211, 0.29);
  }

</style>
