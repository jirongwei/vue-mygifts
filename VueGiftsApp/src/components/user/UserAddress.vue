<template>
    <div class="allhtml">
      <div class="allcontent">
        <div class="title">
          <span>请选择收货地址</span>
          <a href="">添加地址</a>
          <div class="clear"></div>
        </div>
        <div class="content">
          <div class="noAddr" v-if="!addrs">
            <span>还没有地址信息？请去填写一个新的地址</span>
          </div>
          <ul v-if="addrs">
            <li v-for="addr in addrs" :class="{on:addr.checkaddr}">
              <div class="addrmes">
                <span class="tt">收货人:</span>
                <span v-text="addr.receiver"></span>
                <span class="tt">手机号码:</span>
                <span v-text="addr.phone"></span>
                <span class="tt">地址信息</span>
                <span v-text="addr.province"></span>
                <span v-text="addr.city"></span>
                <span v-text="addr.area"></span>
                <span v-text="addr.detailLocation"></span>
              </div>
              <div class="changeaddr">
                <!--跳到地址编辑页面-->
                <!--<router-link tap="a">修改地址</router-link>-->
                <!--<a class="choose" v-if="addr.addrid==addressid" >&nbsp;&nbsp;已选中</a>-->
                <a class="choose" v-text="addr.id==addressid?'已选中':'选择'" @click.prevent="addressid=addr.id"></a>
                <a href="">修改地址</a>
              </div>
              <div class="clear"></div>
            </li>
          </ul>
        </div>
        <div class="tijiao">
          <button class="ok" @click="$emit('getaddr',{status:true,addrid:addressid})">确定</button>
          <button class="no" @click="$emit('getaddr',{status:false,addrid:addressid})">取消</button>
          <div class="clear"></div>
        </div>

      </div>
    </div>
</template>

<script>
  import axios from 'axios'
export default {
    name: "UserAddress",
    props:["userid"],
    mounted:function(){
      let vm=this;
      // 根据userid获取地址信息
      axios.post("http://47.106.124.242:8000/user/getaddr",{
        userid:1
      })
        .then(function(response){
          console.log(response.data)
          vm.addrs=response.data
          for (let i=0;i<vm.addrs.length;i++){
            if(vm.addrs[i]["status"]==1){
              vm.addressid=vm.addrs[i]["id"]
            }
          }
        })
        .catch(function (error) {
          console.log(error)
        })

    },
    data:function () {
      return{
        //用户id
        uid:1,
        //地址id
        addressid:1,
        addrs:[
          {
            addrid:1,
            receiver:"啦啦啦",
            phone:"1221111111",
            province:"甘肃省",
            city:"兰州市",
            area:"榆中县",
            detailLocation:"甘肃省兰州市榆中县金崖镇金崖村5社13号",
            status:"1"
          },
          {
            addrid:2,
              receiver:"啦啦啦",
            phone:"1221111111",
            province:"甘肃省",
            city:"兰州市",
            area:"榆中县",
            detailLocation:"甘肃省兰州市榆中县金崖镇金崖村5社13号",
            status:"0"
          }

        ]
      }
    },
    methods:{
      changeAddr:function (addrid) {
        this.addressid=addrid
      }
    }
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  ul li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  .clear{
    clear: both;
  }
  .allhtml{
    position: fixed;
    left:0;
    top:0;
    background-color: #000;
    opacity: 0.7;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    z-index:1050;
  }
  .allhtml .allcontent{
    width: 500px;
    height: 500px;
    margin: 50px auto;
    background-color: white;
    overflow: scroll;
    position: relative;
  }
  .allhtml .allcontent .title{
    height: 60px;
    width: 100%;
    color:black;
    border-bottom: solid 1px black;
  }
  .allhtml .allcontent .title span{
    font-size: 1.5em;
    line-height: 60px;
    margin-left: 150px;
  }
  .allhtml .allcontent .title a{
    float: right;
    line-height: 60px;
  }
  .allhtml .allcontent .content{
    width: 100%;
  }
  .allhtml .allcontent .content .noAddr{
    width: 100%;
    height:450px;
  }
  .allhtml .allcontent .content .noAddr span{
    display: block;
    width: 300px;
    height: 60px;
    margin: 150px auto;
  }
  .allhtml .allcontent .content ul li{
    padding: 10px 20px;
    width: 100%;
    box-sizing: border-box;
    border-bottom: solid 1px #dadada;
  }
  .allhtml .allcontent .content ul li .addrmes{
    width: 80%;
    float: left;
    margin-bottom: 10px;

  }
  .allhtml .allcontent .content ul li .addrmes .tt{
    font-weight: 700;

  }
  .allhtml .allcontent .content ul li .addrmes span{
    margin-right:10px;
    font-size: 0.9em;
  }

  .allhtml .allcontent .content ul li .changeaddr{
    width: 20%;
    float: left;
    padding: 10px 0;
    box-sizing: border-box;
    border-left: solid 1px #dadada;
  }
  .allhtml .allcontent .content ul li .changeaddr a{
    display: block;
    cursor: pointer;
    margin-left: 10px;
  }
  .allhtml .allcontent .content ul li .changeaddr .choose{
    color: black;
  }
  .allhtml .tijiao{
    height: 40px;
    width: 100%;
    position: absolute;
    bottom:0;
    left: 0;
  }
  .allhtml .tijiao .ok{
    margin-top: 10px;
    margin-left: 50px;
    float: left;
  }
  .allhtml .tijiao .no{
    margin-top: 10px;
    margin-right: 50px;
    float: right;
  }

</style>
