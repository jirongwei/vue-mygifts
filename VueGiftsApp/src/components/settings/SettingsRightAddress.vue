

<template>
  <div class="panel panel-default panel-col" style="margin: 30px 0 145px 0">
    <div class="panel-heading">            地址管理
      <a class="btn btn-success btn-sm pull-right" data-toggle="modal" data-target="#modal" id="add-address" :current-id="0" @click="addAddr">新增收货地址</a>
      <div class="col-sm-3 pull-right" id="create-address">
        您最多可创建20个地址
      </div>
    </div>

    <div class="panel-body">
      <div class="container-fluid">
        <!--地址模板-->
        <div class="row address-list" v-for="addr in list_address">
          <div class="col-xs-12 address-detail">
            <div style="width:90px;float:left;">收件人：</div>
            <div class="col-xs-4 col-sm-3 tb-order-time" style="color:black;" v-text="addr.receiver"></div>
            <a class="col-xs-1 col-sm-1 pull-right" style="cursor: pointer;">
              <i class="glyphicon glyphicon-remove" :obj-id="addr.id" @click="getAddrId" style="color: #0099e5;"></i>
            </a>
          </div>
          <div class="col-xs-13 tb-content">
            <div class="col-xs-11 tb-img-title" style="margin:10px 0 10px 0;">
              <div class="col-xs-3 not-address">所在地区：</div>
              <div class="col-xs-6 not-address-desc" v-text="addr.province+'-'+addr.city+'-'+addr.area"></div>
            </div>
            <div class="col-xs-11 tb-img-title" style="margin:0 0 10px 0;">
              <div class="col-xs-2 not-address-content">地址：</div>
              <div class="col-xs-5 not-address-content-desc" v-text="addr.detailLocation"></div>
            </div>
            <div class="col-xs-11 tb-img-title" style="margin:0 0 10px 0;">
              <div class="col-xs-2 not-address-content">手机：</div>
              <div class="col-xs-5 " v-text="addr.phone"></div>
            </div>
            <div class="col-xs-11 tb-img-title" style="margin:0;">
              <div class="col-xs-2 not-address-content">邮编：</div>
              <div class="col-xs-5" v-text="addr.postcode"></div>
            </div>
            <div class="col-xs-11 tb-img-title" style="width:98%;margin:0 0 10px 0;">
              <div class="col-xs-1 col-sm-1 tb-order-sn pull-right default-address" v-if="addr.status">
                默认地址
              </div>
              <a class="btn-sm pull-right edit-address" data-toggle="modal" data-target="#modal" :id="addr.id" :current-id="1" @click="addrEdit">编辑</a>
            </div>

          </div>
        </div>


      </div>
    </div>

    <!--添加地址模态框-->
    <div id="modal" class="modal in modal-address" aria-hidden="false">
      <div class="alert alert-danger bootstrap-notify-bar" id="alert-div" v-text="err_message"  v-if="alertStatus">
        <button type="button" class="close" data-dismiss="alert">×</button>
      </div>
      <div class="modal-dialog ">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4>添加新地址</h4>
          </div>
          <div class="my-address-modal"></div>
          <div class="modal-body">

            <form class="form-horizontal">

              <div class="form-group mbl">
                <label class="control-label required col-md-2">收货人</label>
                <div class="controls col-md-10">
                  <input v-model="add_receiver" type="text" id="name" class="form-control" name="name" placeholder="填写你常用的名字">
                  <p class="help-block"></p>
                </div>
              </div>

              <div class="form-group mbl">
                <label class="control-label required col-md-2">所在地区</label>
                <div class="controls col-md-10" id="city-wrap">
                  <!--省市区三级联动-->
                  <v-distpicker v-if="current_id==='0'" :placeholders="placeholders" @province="changeProvince" @city="changeCity"
                                 @area="changeArea" class=""></v-distpicker>

                  <v-distpicker v-if="current_id==='1'" :province="select.province" :city="select.city" :area="select.area" @province="changeProvince" @city="changeCity"
                                @area="changeArea" class=""></v-distpicker>

                  <p class="help-block"></p>
                </div>
              </div>

              <div class="form-group mbl">
                <label class="control-label required col-md-2">详细地址</label>
                <div class="controls col-md-10">
                  <textarea v-model.lazy="add_detail" id="address" class="form-control" name="city" placeholder="填写你的常用地址"></textarea>
                  <p class="help-block"></p>
                </div>
              </div>

              <div class="form-group mbl">
                <label class="control-label required col-md-2">手机号码</label>
                <div class="controls col-md-10">
                  <input v-model.lazy="add_phone" type="number" id="mobile" class="form-control"
                         @blur="checkA" name="mobile" placeholder="填写你常用的手机号">
                  <p class="help-block"></p>
                </div>
              </div>

              <div class="form-group mbl">
                <label class="control-label required col-md-2" for="zip-code">邮编</label>
                <div class="controls col-md-10">
                  <input v-model.lazy="add_post" type="number" id="zip-code" class="form-control" name="zcode" placeholder="邮编可以不填写">
                  <p class="help-block"></p>
                </div>
              </div>
            </form>
          </div>

          <div class="modal-footer">
            <button id="register-btn1" type="button" class="btn btn-primary pull-right" v-if="current_id==='0' && !addTrue" data-dismiss="modal" @click="addAddress()">提交</button>
            <button id="register-btn2" type="button" class="btn btn-primary pull-right"  v-if="current_id==='0' && addTrue" @click="addAddress()">提交</button>
            <button id="register-btn3" type="button" class="btn btn-primary pull-right" v-if="current_id==='1' && !editTrue" data-dismiss="modal" @click="updateAddress()">修改</button>
            <button id="register-btn4" type="button" class="btn btn-primary pull-right" v-if="current_id==='1' && editTrue" @click="updateAddress()">修改</button>
            <button  id="back-btn" type="button" class="btn btn-link pull-right" data-dismiss="modal">取消</button>
          </div>
        </div>
      </div>


    </div> <!---->
    <MakeSureDel v-if="showTip" @quxiaoclick="showTip=false" @sureclick="delAddr()"></MakeSureDel>
  </div>
</template>

<script>

  import axios from 'axios'
  import VDistpicker from 'v-distpicker'
  import '../../../static/js/message'
  import MakeSureDel from './MakeSureDel'


  export default {
  name: 'SettingsRightAddress',
  data () {
    return {
      showTip: false,
      // 存放地址列表
      list_address:[],
      err_message:'',
      showError:false,
      alertStatus:false,
      reg_telephone:/^1[3456789]\d{9}$/,
      addTrue:true,
      editTrue:true,
      current_id:'',


      placeholders: {
        province: '------- 省 --------',
        city: '--- 市 ---',
        area: '--- 区 ---',
      },
      select: { province: '广东省', city: '广州市', area: '海珠区' },

      // 获取地址列表
      addr_province:'',
      addr_city:'',
      addr_area:'',


      // 获取添加地址信息
      add_receiver:'',
      add_phone:'',
      add_detail:'',
      add_post:'',

      // 获取修改id
      edit_id:'',
      update_msg:[],

      // 删除地址id
      del_id:'',
    }
  },
    components:{VDistpicker, MakeSureDel},

    mounted:function () {
      this.getAllAddress();
    },
    methods:{
      // 添加地址获取当前id
      addAddr:function(e){
        this.add_receiver = '';
        this.add_detail = '';
        this.add_phone = '';
        this.add_post = '';
        let $obj = $(e.target).attr('current-id');
        this.current_id = $obj;
      },

      // 编辑地址获取当前id
      addrEdit:function(e){
        this.add_receiver = '';
        this.add_detail = '';
        this.add_phone = '';
        this.add_post = '';
        let $obj = $(e.target).attr('current-id');
        let $obj_id = $(e.target).attr('id');
        this.current_id = $obj;
        this.edit_id = $obj_id;
        this.getUpdateAddress();
      },

      // 获取省、市、县
      changeProvince(data) {
        this.addr_province = data.value;
      },
      changeCity(data) {
        this.addr_city = data.value;
      },
      changeArea(data) {
        this.addr_area = data.value;
      },

      // 获取用户所有地址
      getAllAddress:function () {
        let vm = this;
        axios({
          method:'POST',
          url:this.GLOBAL.HOST+'user/getaddress/',
          headers:{"token":sessionStorage.getItem("token")}
        })
        .then(function (response) {
          if(response.data.code === '410'){
            $.message({
              message:'登录过期,请重新登录！',
              type:'warning'
            });
            this.$router.push({path:'/'});
          }else if(response.data.address){
            vm.list_address = response.data.address;
          }
        })
        .catch(function (error) {
          console.log(error)
        });
      },
      // 自动检测
      checkA:function () {
        if(this.check_form()){
          if(this.current_id==='0'){
            this.addTrue = false;
          }else{
            this.editTrue = false;
          }
        }
      },
      // 添加地址
      addAddress:function () {
        let vm = this;
        if(this.check_form()){
          let addMsg = {
            "receiver": this.add_receiver,
            "province": this.addr_province,
            "city": this.addr_city,
            "area": this.addr_area,
            "detailLocation": this.add_detail,
            "phone": this.add_phone,
            "postcode": this.add_post,
          };
          axios({
            method:'POST',
            url:this.GLOBAL.HOST+'user/addaddr/',
            data:addMsg,
            headers:{"token":sessionStorage.getItem("token")}
          })
          .then(function (response) {
            if(response.data.code == '808'){
              $.message({
                message:'添加成功！',
                type:'success'
              });
              vm.getAllAddress();
            }else if(response.data.code == '403'){
              $.message({
                message:'添加失败！',
                type:'error'
              });
            }else if(response.data.code == '410'){
              $.message({
                message:'登录过期,请重新登录！',
                type:'warning'
              });
              this.$router.push({path:'/'});
            }
          })
          .catch(function (error) {
            console.log(error)
          });
        }
      },

      // 获取用户当前修改地址
      getUpdateAddress:function(){
        let vm = this;
        axios({
          method:'POST',
          url:this.GLOBAL.HOST+'user/getupdate/'+vm.edit_id+'/',
          headers:{"token":window.sessionStorage.getItem("token")}
        })
        .then(function (response) {
          if(response.data.update_addr){
            vm.update_msg = response.data.update_addr[0];
            console.log(vm.update_msg);

            vm.add_receiver = vm.update_msg.receiver;
            vm.select.province = vm.update_msg.province;
            vm.select.city = vm.update_msg.city;
            vm.select.area = vm.update_msg.area;
            vm.add_detail = vm.update_msg.detailLocation;
            vm.add_phone = vm.update_msg.phone;
            vm.add_post = vm.update_msg.postcode;
          }else if(response.data.code == '403'){
            $.message({
              message:'获取失败！',
              type:'error'
            });
          }else if(response.data.code == '410'){
            $.message({
              message:'登录过期,请重新登录！',
              type:'warning'
            });
            this.$router.push({path:'/'});
          }
        })
        .catch(function (error) {
          console.log(error)
        });
      },

      // 修改地址
      updateAddress:function(){
         let vm =this;
         if(this.check_form()){
           axios({
             method:'POST',
             url:this.GLOBAL.HOST+'user/updateaddress/'+vm.edit_id+'/',
             headers:{"token":window.sessionStorage.getItem("token")},
             data:{
               "receiver":vm.add_receiver,
               "province":vm.addr_province,
               "city":vm.addr_city,
               "area":vm.addr_area,
               "detailLocation":vm.add_detail,
               "phone":vm.add_phone,
               "postcode":vm.add_post
             }
           })
             .then(function (response) {
               if(response.data.code == '808'){
                 $.message({
                   message:'修改成功！',
                   type:'success'
                 });
                 vm.getAllAddress();
               }else if(response.data.code == '403'){
                 $.message({
                   message:'修改失败！',
                   type:'error'
                 });

               }else if(response.data.code == '410'){
                 $.message({
                   message:'登录过期,请重新登录！',
                   type:'warning'
                 });
                 this.$router.push({path:'/'});
               }
             })
             .catch(function (error) {
               console.log(error)
             });
         }else{
           vm.editTrue = false;
         }

      },

      // 删除地址获取当前地址id
      getAddrId:function(e){
        this.showTip = true;
        let $obj = $(e.target).attr('obj-id');
        this.del_id = $obj;
        console.log(this.del_id);
      },

      // 删除地址
      delAddr:function(){
        this.showTip = false;
        let vm = this;
        axios({
          method:'POST',
          url:this.GLOBAL.HOST+'user/deladdr/'+vm.del_id+'/',
          headers:{"token":window.sessionStorage.getItem("token")}
        })
          .then(function (response) {
            if(response.data.code === '808'){
              $.message({
                message:'删除成功！',
                type:'success'
              });
              vm.getAllAddress();
            }else if(response.data.code === '403'){
              $.message({
                message:'删除失败！',
                type:'error'
              });

            }else if(response.data.code === '410'){
              $.message({
                message:'登录过期,请重新登录！',
                type:'warning'
              });
              this.$router.push({path:'/'});
            }
          })
          .catch(function (error) {
            console.log(error)
          });
      },
      
      // 检验数据合法性
      check_form:function () {
        if(!this.add_receiver || !this.add_phone || !this.add_detail){
          this.alertStatus = true;
          this.err_message ='收货人, 手机号, 地址不能为空';
          setTimeout(()=>{
            this.alertStatus = false;
          },3000)
        }
        else if(!this.reg_telephone.test(this.add_phone)){
          this.alertStatus = true;
          this.err_message = '请输入正确的手机号';
          setTimeout(()=>{
            this.alertStatus = false;
          },3000);
        }
        else{
          this.err_message = '';
          return true
        }
      }

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .myAddress{
    width: 100%;
    background-color: white;
    border-top: 4px solid rgba(245,245,245,1);
    color:#333;
  }

  div.panel-default > div.panel-heading {
    position: relative;
    font-size: 16px;
    padding: 15px 0;
    border-bottom: 2px solid #f5f5f5;
    color: #919191;
    text-indent: 20px;
    background: #fff;
  }

  .panel-col {
    min-height: 420px;
  }

  .btn-success {
    border-color: #56bb2b;
    background-color: #70d445;
    color: #fff;
    margin-right: 20px;
  }

  #create-address{
    font-size:11px;
    line-height:28px;
    margin-right: -10px;
  }

  #add-address{
    text-align: center;
    text-indent: -0px;
  }

  .modal-address{
    display: none;
    width: 100%;
    height: 100%;
    background: #292929;
  }

  .modal-content{
    margin-top: 100px !important;
  }

  .address-list{
    width: 100%;
    color: #333333;
    border: 1px solid #f1f1f1;
    margin-bottom: 15px;
  }

  .address-detail{
    background: #f5f5f5;
    height: 31px;
    line-height: 31px;
    color: #aaa;
    overflow: hidden;
    border-bottom-color: #f5f5f5;
    border: 1px solid #e5e5e5;
  }

  .tb-order-time {
    margin-left: -35px;
    height: 20px;
    line-height: 27px;
    padding: 2px 0 0;
  }

  .not-address {
    width: 70px !important;
    padding: 0 !important;
  }

  .not-address-content {
    margin-left: 28px !important;
    padding: 0 !important;
    width: 45px !important;
  }

  div.tb-img-title div.default-address{
    width:80px;
    line-height:20px;
    background:#ffaa45;
    margin-top:4px;
    text-align:center;
    color:white;
    font-size:12px;
  }

  div.tb-img-title a.edit-address{
    cursor: pointer;
    margin-right:10px;
    text-decoration: none;
    color: #0099e5;
  }

  /*地址模态框---*/
  .form-control {
    color: #616161 !important;
    border-color: #e1e1e1 !important;
  }

  #register-btn1,#register-btn2,#register-btn3,#register-btn4{
    background: #0099e5;
    color: #fff;
    border: none;
  }


  #back-btn{
    color: #313131;
    transition: all 0.3s ease;
    text-decoration: none;
  }

  #alert-div{
    text-align: center;
    background: #ffd3d5;
    margin-right: -15px;
  }








</style>
