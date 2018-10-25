<template>
  <div class="sidenav">
    <ul class="list-group">
      <li class="list-group-heading">个人设置</li>

      <li class="list-group-item" :obj-id="0" :class="{li_style:obj_id==='0'}">
        <a @click.prevent.stop="toRight" :current_obj="'RightBasicInfo'" :obj-id="0" :class="{a_style:obj_id==='0'}"><i class="glyphicon glyphicon-user" :obj-id="0" :class="{a_style:obj_id==='0'}"></i> 基础信息</a>
      </li>
      <li class="list-group-item" :obj-id="1" :class="{li_style:obj_id==='1'}">
        <a @click.prevent.stop="toRight" :current_obj="'RightIcon'" :obj-id="1" :class="{a_style:obj_id==='1'}"><i class="glyphicon glyphicon-picture" :obj-id="1" :class="{a_style:obj_id==='1'}"></i> 头像设置</a>
      </li>

      <li class="list-group-item" :obj-id="2" :class="{li_style:obj_id==='2'}">
        <a @click.prevent.stop="toRight" :current_obj="'RightSafe'" :obj-id="2" :class="{a_style:obj_id==='2'}"><i class="glyphicon glyphicon-lock" :obj-id="2" :class="{a_style:obj_id==='2'}"></i> 安全设置</a>
      </li>

      <li class="list-group-item" :obj-id="3" :class="{li_style:obj_id==='3'}">
        <a @click.prevent.stop="toRight" :current_obj="'RightAddress'" :obj-id="3" :class="{a_style:obj_id==='3'}"><i class="glyphicon glyphicon-map-marker" :obj-id="3" :class="{a_style:obj_id==='3'}"></i> 地址管理</a>
      </li>

    </ul>
  </div>

</template>

<script>
  import $ from 'jquery'
export default {
  name: 'SettingsLeft',
  data () {
    return {
      obj_id:'0',
      current_nav: 'RightBasicInfo'
    }
  },
  methods: {
    toRight:function (e) {

      // 改变选中样式
      let $obj = $(e.target);
      this.obj_id = $obj.parent('.list-group-item').attr('obj-id');
      this.current_nav = $obj.attr('current_obj');

      // 改变右边模块显示
      this.$emit('changeright', this.current_nav)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /*左侧导航--------sidenav-----------*/

  .a_style{
    color: #0099e5 !important;
    cursor: pointer;
  }

  .li_style{
    border-left: solid 5px #0099E5 !important;
    cursor: pointer;
  }


  div.sidenav{
    margin-top: 30px;
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
    cursor: pointer;
  }

</style>
