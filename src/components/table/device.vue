<template>
  <div class="container col-xs-12">
    <div class="panel-heading b-a">
      <div class="clearfix">
        <img src="../../assets/app/img/icon_main_device.png" alt="..." class="pull-left thumb-md m-r">
        <div class="clear">
          <div class="h3 m-t-xs m-b-xs">
            <span>设备</span>
            <!--                <i class="fa fa-circle text-success pull-right text-xs m-t-sm"></i>-->
          </div>
          <small class="text-muted">main room</small>
        </div>
      </div>
    </div>
    <div class="flex-column row">
      <div class="container col-xs-12 col-md-6" v-for="(device,key,index) in devices" :key="index">
        <div class="panel panel-default">
          <div class="panel-heading">
            <div class="clearfix">
              <div class="clear">
                <div class="h3 m-t-xs m-b-xs">
                  <i class="fa fa-gears inline"></i>
                  <span>设备:{{device.device_id}}</span>
                  <!--                <i class="fa fa-circle text-success pull-right text-xs m-t-sm"></i>-->
                </div>
                <small class="text-muted">main room</small>
              </div>
            </div>
          </div>
          <div class="list-group">
            <div class="list-group-item">
              <i class="fa fa-inbox fa-fw text-muted"></i>
              <span>device_id: {{device.device_id}}</span>
            </div>
            <div class="list-group-item">
              <i class="fa fa-bar-chart fa-fw text-muted"></i>
              <span>install_data: {{device.install_data}}</span>
            </div>
            <el-collapse class="list-group-item" @change="getRecord(device)">
              <el-collapse-item >
                <div slot="title">
                  <i class="fa fa-calendar text-muted"></i>
                  <span>消毒记录</span>
                </div>
                <div class="panel-body b-b" style="padding-bottom: 10px">
                  <div class="inline" style="width: 6em;">
                    <span style="font-size: 14px">选取时段</span>
                  </div>
                  <el-date-picker
                    type="daterange"
                    v-model="device.searchDateRange"
                    @change =""
                    :picker-options="{
                    }"
                    placeholder="选择日期"
                    class="selectDur"
                  >
                  </el-date-picker>
                  <button class="btn btn-success pull-right" @click="getRecord(device)">查询</button>
                </div>
                <div class="card card-body" style="padding-top: 15px;">
                  <p class="text-muted h4" v-if="device.records.length === 0">该时段内未查询到消毒记录</p>
                  <div class="panel-body b-b" v-for="(val,Index) in device.records" :key="Index">
                    <h5>消毒记录——{{val.disinfection_record_id}}</h5>
                    <div class="row">
                      <p class="inline col-xs-4">执行用户：{{val.user_id}}</p>
                      <p class="inline col-xs-4">消毒设备：{{val.device_id}}</p>
                      <p class="inline col-xs-4">消毒模式：{{val.model}}</p>
                      <p class="col-xs-12">消毒时间段：{{val.start_time.toLocaleDateString()}}{{val.start_time.toLocaleTimeString()}}——{{val.end_time.toLocaleDateString()}}{{val.end_time.toLocaleTimeString()}}</p>
                    </div>
                  </div>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import app from "../../App";
import home from "../Home";


export default {
  name: "device",
  data() {
    return {
      devices: {},
      disinfectMods:[
        {
          mod: 0,
          name: "自动",
        },
        {
          mod: 1,
          name: "全部",
        },
        {
          mod: 2,
          name: "紫外线",
        },
        {
          mod: 3,
          name: "消毒水",
        }
      ],
      device_msg: {
        device_id: "device_id",
        install_data: "install_data"
      },
    }
  },
  mounted() {
    this.getDevices();
  },
  methods: {
    getDevices() {
      home.methods.copy(JSON.parse(sessionStorage.getItem("device_list")),this.devices);
      for (let item in this.devices){
        let record = this.devices[item];
        record.searchDateRange = [
          new Date(new Date().getTime() -86400000),
          new Date()
        ];
        record.records = [];
      }
      this.$forceUpdate();
    },
    getRecord(device) {
      let that = this
      let start = device.searchDateRange[0];
      let end = device.searchDateRange[1];

      let start_year = start.getFullYear().toString();
      let end_year = end.getFullYear().toString();
      let start_month = start.getMonth() + 1;
      let end_month = end.getMonth() + 1;
      let start_date = start.getDate();
      let end_date = end.getDate();
      if(start_month.length<2){
        start_month = "0" + start_month;
      }
      if(end_month.length<2){
        end_month = "0" + end_month;
      }
      if(start_date.length<2){
        start_date = "0" + start_date;
      }
      if(end_date.length<2){
        end_date = "0" + end_date;
      }

      const request = {
        accessToken: sessionStorage.getItem("accessToken"),
        device_id: device.device_id,
        start_date: start_year + "-" + start_month + "-" + start_date,
        end_date: end_year + "-" + end_month + "-" + end_date,
      }
      $.ajax({
        type:"GET",
        async: false,
        contentType: "application/json;charset=UTF-8",
        data: request,
        dataType: 'json',
        scriptCharset: "utf-8",
        url: app.http_root+"/device/get/records",
        success(Data){
          console.log(Data);
          switch (Data.code){
            case 0:{
              let records = device.records = [];
              for (let key in Data.records){
                records.push(Data.records[key]);
              }
              that.parseRecord(records);
            }break;

            case 1:{
              app.comment.message("IP地址改变请重新登录", "danger");
              sessionStorage.removeItem("username");
              sessionStorage.removeItem("accessToken")
              that.$router.push("/longin/sign");
            } break;

            case 2:{
              app.comment.message("凭证失效请重新登录", "danger");
              sessionStorage.removeItem("username");
              sessionStorage.removeItem("accessToken")
              that.$router.push("/longin/sign");
            }
          }
        },
        error:function (){
          app.comment.message(that.err_msg[0],"danger");
        }
      });
    },
    parseRecord(records) {
      for(let key1 in records){
        let item = records[key1];
        item.start_time = new Date(item.start_time);
        item.end_time = new Date(item.end_time);
        for (let key2 in this.disinfectMods){
          if(item.model === this.disinfectMods[key2].mod){
            item.model = this.disinfectMods[key2].name;
          }
        }
      }
      console.log(records);
      this.$forceUpdate();
    }
  }

}
</script>

<style scoped>
.container{
  max-width: none;
}
.selectDur{
  width: 220px;
}

</style>
