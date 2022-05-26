<template>
  <div class="container col-xs-12">
    <div class="panel-heading b-a">
      <div class="clearfix">
        <img src="../../assets/app/img/icon_main_disinfect.png" alt="..." class="pull-left thumb-md m-r">
        <div class="clear">
          <div class="h3 m-t-xs m-b-xs">
            <span>消毒</span>
          </div>
          <small class="text-muted"> Disinfect</small>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading b-a">
        <span class="fa fa-asterisk fa-2x"></span>
        <span class="h3 m-auto">自动消毒</span>
        <br>
        <span class="text-muted">消毒设备会根据室内条件自动控制消毒设备的运作</span>
      </div>
      <div class="panel-body b-black">
        <span class="h4 ">自动消毒</span>
        <el-switch
          active-color="#00b3ee"
          inactive-color="#dadde5"
          v-model="autoDisinfect"
          @click="autoDisinfect = !autoDisinfect"
          class="inline pull-right"
        >
        </el-switch>
      </div>
    </div>
    <div class="panel panel-default" :class="{hidden: autoDisinfect}">
      <div class="panel-heading b-a">
        <span class="fa  fa-circle-o-notch fa-2x"></span>
        <span class="h3">计划消毒</span>
        <br>
        <span class="text-muted">在非自动模式下按指令执行消毒或定制消毒计划</span>
      </div>
      <div class="panel-body b-a b-light flex-column ">
        <div class="panel-body b-a">
          <div class="col-xs-12">
            <div class="col-xs-4 b-a text-center">
              <h4>设备</h4>
            </div>
            <div class="col-xs-4 b-a text-center">
              <h4>消毒模式</h4>
            </div>
            <div class="col-xs-4 b-a text-center">
              <h4>消毒时长</h4>
            </div>
            <div v-for="(val,key) in Disinfect" :key="val.device_id">
              <div class="col-xs-4 b-a text-center" style="height: 45px">
                <h4>设备{{val.device_id}}</h4>
              </div>
              <div class="col-xs-4 b-a text-center" style="height: 45px">
                <el-select placeholder="选择消毒模式" v-model="val.disinfectMod" style="width: 100%">
                  <el-option v-for="item in disinfectMods" :key="item.mod" :value="item.name"></el-option>
                </el-select>
              </div>
              <div class="col-xs-4 b-a text-center" style="height: 45px">
                <el-dropdown trigger="click" @command="setDuration" style="width: 100%;">
                  <span class="el-dropdown-link btn btn-default durationBtn" style="width: 100%;height: 40px;">
                    <span class="pull-left">{{val.duration}} 分钟</span>
                    <i class="el-icon-arrow-down el-icon--right pull-right"></i>
                  </span>
                  <el-dropdown-menu >
                    <el-dropdown-item :command={key:key,duration:0} >00分钟</el-dropdown-item>
                    <el-dropdown-item :command={key:key,duration:15}>15分钟</el-dropdown-item>
                    <el-dropdown-item :command={key:key,duration:30}>30分钟</el-dropdown-item>
                    <el-dropdown-item :command={key:key,duration:45}>45分钟</el-dropdown-item>
                    <el-dropdown-item :command={key:key,duration:60}>60分钟</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
          </div>
        </div>
        <div class="panel-body b-a">
<!--          <div class="col-md-6">-->
<!--            <div class="inline text-center" style="width: 8em">-->
<!--              <p>选择开始时间</p>-->
<!--            </div>-->
<!--            <el-date-picker-->
<!--              type="datetime"-->
<!--              v-model="startDate"-->
<!--              @change ="setEndDate"-->
<!--              :picker-options="{-->
<!--                  format: 'HH:mm',-->
<!--                  valueFormat:'HH:mm'-->
<!--                }"-->
<!--              placeholder="选择日期"-->
<!--              class="selectDur"-->
<!--            >-->
<!--            </el-date-picker>-->
<!--          </div>-->
<!--          <span class="col-xs-12 text-muted">消毒时段: {{startDate.toLocaleString()}}至{{endDate.toLocaleString()}}</span>-->
          <h4 class="inline">确认开始消毒</h4>
          <button class="btn btn-success pull-right" @click="startDisinfect">开始消毒</button>
        </div>
      </div>
    </div>
    <div class="panel panel-default" style="margin-top: 20px;">
      <div class="panel-body">
        <el-collapse @change="getRecord">
          <el-collapse-item>
            <div slot="title" style="height: 45px">
              <i class="fa  fa-calendar fa-2x"></i>
              <span class="h4">消毒记录</span>
<!--              <p class="text-muted" style="height: 2em;margin: 0">查看指定时段内各个消毒设备的消毒记录</p>-->
            </div>
            <div class="panel-body b-b" style="padding-bottom: 10px">
              <div class="inline" style="width: 6em;">
                <span>选取时段</span>
              </div>
              <el-date-picker
                type="daterange"
                v-model="recordDateRange"
                :picker-options="{
              }"
                placeholder="选择日期"
                class="selectDur"
              >
              </el-date-picker>
              <button class="btn btn-success pull-right" @click="getRecord">查询消毒记录</button>
            </div>
            <div class="card card-body">
              <div class="panel-body b-a" v-for="(val,key,index) in records" :key="index">
                <div class="panel-heading">
                  <h4>设备{{val.device_id}}</h4>
                  <p class="text-muted" v-if="val.records.length===0">未查询到消毒记录</p>
                </div>
                <div class="panel-body b-b" v-for="(val2,cIndex) in val.records" :key="cIndex">
                  <h4>消毒记录——{{val2.disinfection_record_id}}</h4>
                  <div style="margin-left:2rem">
                    <div class="col-xs-6 b-b" style="height: 50px">
                      <p style="font-size: 16px;margin-top: 10px;">执行用户：{{val2.user_id}}</p>
                    </div>
                    <div class="col-xs-6 b-b" style="height: 50px">
                      <p style="font-size: 16px;margin-top: 10px;">消毒设备：{{val2.device_id}}</p>
                    </div>
                    <div class="col-xs-6 b-b" style="height: 50px">
                      <p style="font-size: 16px;margin-top: 10px;">消毒模式：{{val2.model}}</p>
                    </div>
                    <div class="col-xs-6 b-b" style="height: 50px">
                      <p style="font-size: 16px;margin-top: 10px;">消毒时间段：{{val2.start_time.toLocaleDateString()}}{{val2.start_time.toLocaleTimeString()}}——{{val2.end_time.toLocaleDateString()}}{{val2.end_time.toLocaleTimeString()}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from "../bootstrap/Tab";
import Button from "../ui/Buttons";
import app from "../../App";

export default {
  name: "disinfect",
  data() {
    return {
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
      Disinfect:{},
      autoDisinfect: false,
      recordDateRange: [
        new Date(new Date().getTime() - 86400000),
        new Date()
      ],
      records: {},
    }
  },
  components:{
    Button,
    'v-tab':Tab
  },
  mounted() {
    this.getDevices();
  },
  methods: {
    setDuration(object) {
      this.Disinfect[object.key].duration = object.duration;
    },
    getDevices() {
      let that = this;
      let request = {
        accessToken: sessionStorage.getItem("accessToken")
      }
      $.ajax({
        type:"POST",
        xhrFields: {
          withCredentials: true
        },
        crossDomain: true,
        data: request,
        dataType: 'json',
        scriptCharset: "utf-8",
        url: app.http_root+"/user/getDeviceList",
        success(Data){
          switch (Data.code){
            case 0:{
              for (let key in Data.device_list){
                let device = Data.device_list[key];
                device.dateRange = [
                  new Date(),
                  new Date()
                ];
                device.disinfectMod = null;
                device.duration = 0;
                let device_record = that.records[key] = {};
                device_record.device_id = device.device_id;
                device_record.records = [];
              }
              that.Disinfect = Data.device_list;
            } break;

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
        error: function (){
          app.comment.message(that.err_msg[0],"danger");
        }
      });
    },
    startDisinfect() {
      const that = this;
      for (let key in this.Disinfect){
        if(this.Disinfect[key].duration === 0){
          continue;
        }
        let disinfectMod = 0;
        for(let i in this.disinfectMods){
          if (this.Disinfect[key].disinfectMod === this.disinfectMods[i].name){
            disinfectMod = this.disinfectMods[i].mod;
          }
        }
        const request = {
          accessToken: sessionStorage.getItem("accessToken"),
          device_id: this.Disinfect[key].device_id,
          disinfect_mode: disinfectMod,
          disinfect_duration:this.Disinfect[key].duration,
        }
        $.ajax({
          type:"POST",
          xhrFields: {
            withCredentials: true
          },
          crossDomain: true,
          data: request,
          dataType: 'json',
          scriptCharset: "utf-8",
          url: app.http_root+"/device/manager/startDisinfect",
          success(Data){
            switch (Data.code){
              case 0:{
                app.comment.message("设置成功，开始消毒。","success");
              }break;

              case 1:{
                app.comment.message("消毒水耗尽，请及时补充！","danger");
              }break;

              case 2:{
                app.comment.message("消毒水喷头异常，请处理异常后再试！","danger");
              }break;

              case 3: {
                app.comment.message("紫外线灯异常，请处理异常后再试！","danger");
              }break;

              case 4:{
                app.comment.message("轨道异常，请处理异常后再试！","danger");
              }break;

              case 5: {
                app.comment.message("室内有人员，请稍后再试。", "warning");
              } break;

              case 6:{
                app.comment.message("IP地址改变请重新登录", "danger");
                sessionStorage.removeItem("username");
                sessionStorage.removeItem("accessToken")
                that.$router.push("/longin/sign");
              } break;

              case 7:{
                app.comment.message("凭证失效请重新登录", "danger");
                sessionStorage.removeItem("username");
                sessionStorage.removeItem("accessToken")
                that.$router.push("/longin/sign");
              }
            }
          },
          error:function(){
            app.comment.message("请求失败,无法提交消毒计划！","danger")
          }
        });
      }
    },
    getRecord() {
      const that = this;
      let start = this.recordDateRange[0];
      let end = this.recordDateRange[1];

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
      for (let key in this.Disinfect){
        const request = {
          accessToken: sessionStorage.getItem("accessToken"),
          device_id: this.Disinfect[key].device_id,
          start_date: start_year+"-"+start_month+"-"+start_date,
          end_date: end_year+"-"+end_month+"-"+end_date
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
            switch (Data.code){
              case 0:{
                let record = that.records[key].records = [];
                for (let key in Data.records){
                  record.push(Data.records[key]);
                }
              } break;

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
          error: function (){
            app.comment.message(that.err_msg[0],"danger");
          }
        });
      }

      this.parseRecord();
    },
    parseRecord() {
      for (let key1 in this.records){
        if (this.records[key1].records.length){
          for( let key2 in this.records[key1].records){
            let record = this.records[key1].records[key2];
            record.start_time = new Date(record.start_time);
            record.end_time = new Date(record.end_time);
            console.log(record.TimeBeforeDisinfect);
            for (let key3 in this.disinfectMods){
              if (record.model === this.disinfectMods[key3].mod){
                record.model = this.disinfectMods[key3].name;
              }
            }
          }
        }
      }
      this.$forceUpdate();
    }
  }
}
</script>

<style scoped>
.container{
  max-width: none;
}
.m-auto{

}
.durationBtn{
  width: 100px;
}
.selectDur{
  width: 220px;
}
.panel-body{
  padding: 10px;
}
</style>
