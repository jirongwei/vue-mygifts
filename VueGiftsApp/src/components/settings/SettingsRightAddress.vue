<template>
  <div class="panel panel-default panel-col" style="margin: 30px 0 70px 0">
    <div class="panel-heading">            地址管理
      <a class="btn btn-success btn-sm pull-right" data-toggle="modal" data-target="#modal" id="add-address">新增收货地址</a>
      <div class="col-sm-3 pull-right" id="create-address">
        您最多可创建20个地址
      </div>
    </div>

    <div class="panel-body">
      <div class="container-fluid">
        <div class="row address-list">
          <div class="col-xs-12 address-detail">
            <div style="width:90px;float:left;">收件人：</div>
            <div class="col-xs-4 col-sm-3 tb-order-time" style="color:black;">魏吉荣</div>
            <a class="col-xs-1 col-sm-1 pull-right" style="cursor: pointer;">
              <i class="glyphicon glyphicon-remove" style="color: #0099e5;"></i></a>
          </div>
          <div class="col-xs-13 tb-content">
            <div class="col-xs-11 tb-img-title" style="margin:10px 0 10px 0;">
              <div class="col-xs-3 not-address">所在地区：</div>
              <div class="col-xs-6 not-address-desc">
                甘肃省兰州市榆中县
              </div>
            </div>
            <div class="col-xs-11 tb-img-title" style="margin:0 0 10px 0;">
              <div class="col-xs-2 not-address-content">地址：</div>
              <div class="col-xs-5 not-address-content-desc">
                金崖镇金崖村5社13号
              </div>
            </div>
            <div class="col-xs-11 tb-img-title" style="margin:0 0 10px 0;">
              <div class="col-xs-2 not-address-content">手机：</div>
              <div class="col-xs-5 ">
                13069740206
              </div>
            </div>
            <div class="col-xs-11 tb-img-title" style="margin:0;">
              <div class="col-xs-2 not-address-content">邮编：</div>
              <div class="col-xs-5">
                730104
              </div>
            </div>
            <div class="col-xs-11 tb-img-title" style="width:98%;margin:0 0 10px 0;">
              <div class="col-xs-1 col-sm-1 tb-order-sn pull-right default-address">
                默认地址
              </div>
              <a class="btn-sm pull-right edit-address" data-toggle="modal" data-target="#modal">编辑</a>
            </div>

          </div>
        </div>
        <div class="row address-list">
          <div class="col-xs-12 address-detail">
            <div style="width:90px;float:left;">收件人：</div>
            <div class="col-xs-4 col-sm-3 tb-order-time" style="color:black;">魏吉荣</div>
            <a class="col-xs-1 col-sm-1 pull-right" style="cursor: pointer;">
              <i class="glyphicon glyphicon-remove" style="color: #0099e5;"></i></a>
          </div>
          <div class="col-xs-13 tb-content">
            <div class="col-xs-11 tb-img-title" style="margin:10px 0 10px 0;">
              <div class="col-xs-3 not-address">所在地区：</div>
              <div class="col-xs-6 not-address-desc">
                甘肃省兰州市榆中县
              </div>
            </div>
            <div class="col-xs-11 tb-img-title" style="margin:0 0 10px 0;">
              <div class="col-xs-2 not-address-content">地址：</div>
              <div class="col-xs-5 not-address-content-desc">
                金崖镇金崖村5社13号
              </div>
            </div>
            <div class="col-xs-11 tb-img-title" style="margin:0 0 10px 0;">
              <div class="col-xs-2 not-address-content">手机：</div>
              <div class="col-xs-5 ">
                13069740206
              </div>
            </div>
            <div class="col-xs-11 tb-img-title" style="margin:0;">
              <div class="col-xs-2 not-address-content">邮编：</div>
              <div class="col-xs-5">
                730104
              </div>
            </div>
            <div class="col-xs-11 tb-img-title" style="width:98%;margin:0 0 10px 0;">
              <div class="col-xs-1 col-sm-1 tb-order-sn pull-right default-address">
                默认地址
              </div>
              <a class="btn-sm pull-right edit-address" data-toggle="modal" data-target="#modal">编辑</a>
            </div>

          </div>
        </div>


      </div>
    </div>

    <!--添加地址模态框-->
    <div id="modal" class="modal in modal-address" aria-hidden="false">
      <div class="alert alert-danger bootstrap-notify-bar" id="alert-div"><button type="button" class="close" data-dismiss="alert">×</button>收货人, 手机号, 地址不能为空</div>
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
                  <input type="text" id="name" class="form-control" name="name" placeholder="填写你常用的名字">
                  <p class="help-block"></p>
                </div>
              </div>

              <div class="form-group mbl">
                <label class="control-label required col-md-2">所在地区</label>
                <div class="controls col-md-10" id="city-wrap">
                  <input type="text" id="city" name="province" class="form-control" onfocus="this.blur();">
                  <p class="help-block"></p>
                </div>
              </div>

              <div class="form-group mbl">
                <label class="control-label required col-md-2">详细地址</label>
                <div class="controls col-md-10">
                  <textarea id="address" class="form-control" name="city" placeholder="填写你的常用地址"></textarea>
                  <p class="help-block"></p>
                </div>
              </div>

              <div class="form-group mbl">
                <label class="control-label required col-md-2">手机号码</label>
                <div class="controls col-md-10">
                  <input type="number" id="mobile" class="form-control" name="mobile" placeholder="填写你常用的手机号">
                  <p class="help-block"></p>
                </div>
              </div>

              <div class="form-group mbl">
                <label class="control-label required col-md-2" for="zip-code">邮编</label>
                <div class="controls col-md-10">
                  <input type="number" id="zip-code" class="form-control" name="zcode" placeholder="邮编可以不填写">
                  <p class="help-block"></p>
                </div>
              </div>
            </form>
          </div>

          <div class="modal-footer">
            <button id="register-btn" type="button" class="btn btn-primary pull-right">提交</button>
            <button  id="back-btn" type="button" class="btn btn-link pull-right" data-dismiss="modal">取消</button>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>

  import axios from 'axios'
  export default {
  name: 'SettingsRightAddress',
  data () {
    return {



    }
  },
    mounted:function () {

    },

    methods:{



    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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

  #register-btn{
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
    display: none;
    margin-right: -15px;
  }






</style>
