<template>
  <div class="container col-xs-12">
    <div class="panel-heading b-a">
      <div class="clearfix">
        <img src="../../assets/app/img/icon_main_environment.png" alt="..." class="pull-left thumb-md m-r">
        <div class="clear">
          <div class="h3 m-t-xs m-b-xs">
            <span>室内环境</span>
          </div>
          <small class="text-muted">environment</small>
        </div>
      </div>
    </div>
    <div class="card col-xs-12 col-lg-6 b-a text-center" style="padding: 0">
        <img
          id="VideoPic"
          class="card-img-top "
          src="../../assets/app/img/img_monitor.png"
          style="background-size: cover;height: 600px"
          alt="监控"
        >
      <div class="panel-body b-a text-left" style="width:100%;">
        <div >
          <h4 class="card-title">监控和控制</h4>
          <p class="card-text">点击下面按钮可查看实时查看监控摄像头的画面</p>
        </div>
        <div class="monitor-control-btn panel-heading">
          <div class="b-b flex-column" style="padding-bottom: 15px">
            <button class="btn btn-info" @click="onMonitorBtnClicked">
              <span>{{ start_msg }}</span>
            </button>
            <div class="inline">
              <el-dropdown trigger="click" @command="setID" >
                  <span class="el-dropdown-link btn btn-primary durationBtn" style="width: 8em;">
                    <span>设备{{current_wsID}} </span>
                    <i class="el-icon-arrow-down el-icon--right pull-right"></i>
                  </span>
                <el-dropdown-menu >
                  <el-dropdown-item v-for="(i,key_i) in devices" :key="key_i" :command=i.device_id >设备{{ i.device_id }}</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div class="pull-right">
              <button class="btn btn-default " :class="{disabled:MonitorPlaying===false}" @click="lastMonitor">
                <i class="fa fa-backward"></i>
                <small class="text-muted">上个镜头</small>
              </button>

              <button class="btn btn-default " :class="{disabled:MonitorPlaying===false}" @click="nextMonitor">
                <small class="text-muted">下个镜头</small>
                <i class="fa fa-forward"></i>
              </button>
              <button class="btn btn-default " :class="{disabled:MonitorPlaying===false}" @click="turnLeft">
                <i class="fa  fa-rotate-left "></i>
                <small class="text-muted">左旋10°</small>
              </button>
              <button class="btn btn-default " :class="{disabled:MonitorPlaying===false}" @click="turnRight">
                <small class="text-muted">右旋10°</small>
                <i class="fa  fa-rotate-right "></i>
              </button>
            </div>
          </div>
          <div class="" style="margin-top: 15px">
            <div class="inline">
              <div type="btn" class="btn btn-info" style="width: 8em" @click="DisinfectBtnClicked">
                <small>{{ disinfect_btn }}</small>
              </div>
              <div class="inline">
                <el-dropdown trigger="click" @command="setDisinfectMode">
                  <span class=" el-dropdown-link btn btn-primary" style="width: 8em;">
                    <span v-if="set_disinfect_mod != null">{{disinfectMods[set_disinfect_mod].name}} </span>
                    <span v-else>模式</span>
                    <i class="el-icon-arrow-down el-icon--right pull-right"></i>
                  </span>
                  <el-dropdown-menu >
                    <el-dropdown-item v-for="(i,key_i) in disinfectMods" :key="key_i" :command=i.mod >{{i.name}}</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>

            <button class="btn btn-info" style="margin-left: 15px" @click=LockBtnClicked>
              <small>{{lock_btn}}</small>
            </button>
            <button class="btn btn-info" @click="peopleLeave" style="margin-left: 20px">遣散人群</button>
            <div class="pull-right">
              <el-input v-model="audio_msg" placeholder="发送语音信息" style="width: 200px;"></el-input>
              <button class="btn btn-info" @click="audioMessage">发送</button>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="panel panel-default col-xs-12 col-lg-6" style="height:795px;">
      <div class="panel-heading">
        <div class="clearfix">
          <div class="clear">
            <div class="h3 m-t-xs m-b-xs">
              <i class="fa fa-info inline"></i>
              <span>室内环境</span>
              <!--                <i class="fa fa-circle text-success pull-right text-xs m-t-sm"></i>-->
            </div>
            <small class="text-muted">main room</small>
          </div>
        </div>
      </div>

      <div class="panel-body" v-if="!deviceOnline">
        <h4 class="text-muted">设备未连接！</h4>
      </div>
      <div class="panel-body" style="margin-top: 15px">
        <div  v-for="(item,key,index) in room_state" :key="index">
          <div class="col-xs-6 b-a text-center" style="height: 50px">
            <div style="width: 200px;margin: auto;">
              <div class="pull-left">
              <i class="fa" :class="room_state_keys.icon[key]" style="margin-top:15px; "></i>
              <span style="margin-top:15px; ">{{room_state_keys.name[key]}}</span>
              </div>
            </div>
          </div>
          <div class="col-xs-6 b-a text-center" style="height: 50px">
            <div style="width: 200px;margin: auto;">
              <div class="pull-left">
                <p style="margin-top: 15px">{{item}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="panel panel-default col-xs-12" style="margin-top: 20px;">
      <div class="panel-body">
        <el-collapse @change="getData">
          <el-collapse-item>
            <div slot="title" style="height: 45px">
              <i class="fa  fa-book fa-2x"></i>
              <span class="h4">室内环境记录</span>
              <!--              <p class="text-muted" style="height: 2em;margin: 0">查看指定时段内各个消毒设备的消毒记录</p>-->
            </div>
            <div class="panel-body b-b" style="padding-bottom: 10px">
              <div class="inline" style="width: 6em;">
                <span>选取时段</span>
              </div>
              <el-date-picker
                type="daterange"
                v-model="DateRange"
                :picker-options="{
              }"
                placeholder="选择日期"
                class="selectDur"
              >
              </el-date-picker>
              <button class="btn btn-success pull-right" @click="getData">查询记录</button>
            </div>
            <div class="card card-body">
              <div class="panel-body b-a" v-for="(val,key,index) in room_data" :key="index">
                <div class="panel-heading">
                  <h4>设备{{val.device_id}}</h4>
                  <p class="text-muted" v-if="val.data.length===0">未查询到消毒记录</p>
                </div>
                <div class="panel-body b-b"  v-for="(val2,cIndex) in val.data" :key="cIndex">
                  <h5>记录——{{val2.data_id}}</h5>
                  <div v-for="(val3,key3,index3) in val2" :key="index3" class="inline col-xs-4 b-b" style="height: 45px;margin-top: 10px">
                    <p class="inline">{{data_msg[key3]}}:{{val3}}</p>
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
import app from "../../App";
import home from "../Home";
export default {
  name: "environment",
  data() {
    return {
      devices: {},
      room_data: {},
      MonitorPlaying: false,
      deviceOnline: false,
      ws: null,
      audio_msg: "",
      current_wsID: 1,
      start_msg: "查看监控画面",
      room_state: {},
      send_msg: {},
      disinfect_btn: "开始消杀",
      disinfect_btn_state: false,
      set_disinfect_mod: null,
      lock_btn: "锁定房间",
      lock_btn_state: false,
      room_state_keys:{
        name:{
          DeviceID: "设备",
          DisinfectMode:"消毒模式",
          DisinfectStartTime:"本次消毒开始时间",
          MaxPeopleNumber: "室内最多人数",
          MaxPeopleTemperature: "室内人员最高体温",
          PeopleNumber: "室内人数",
          ResidualVentilationTime: "剩余通风时间",
          ResidualWater: "消毒水水位",
          RoomLock: "房间关闭状态",
          RoomShidu:"室内湿度",
          RoomTemperature: "室内温度",
          TimeBeforeDisinfect: "距离消毒开始时间"
        },
        icon: {
          DeviceID: "fa-cube",
          DisinfectMode:"fa-cubes",
          DisinfectStartTime:"el-icon-time",
          MaxPeopleNumber:  "fa-group",
          MaxPeopleTemperature:  "icon-arrow-up",
          PeopleNumber: "fa-child",
          ResidualVentilationTime: "fa-leaf",
          ResidualWater:  "fa-tint",
          RoomLock: "fa-lock",
          RoomShidu:"fa-eraser",
          RoomTemperature:  "fa-flask",
          TimeBeforeDisinfect: "fa-moon-o"
        }
      },
      start_disinfect_err: [
        "消毒水耗尽",
        "消毒水喷头异常",
        "紫外线灯异常",
        "轨道异常",
        "室内有人"
      ],
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
      data_msg:{
        data_id: "数据记录",
        device_id: "设备id",
        humidity: "空气湿度",
        people_count: "室内人数",
        people_tem_max: "人员最高体温",
        temp: "室内温度",
        time: "记录时间",
        user_id: "用户id",
      },
      DateRange: [
        new Date(new Date().getTime() - 864000000),
        new Date()
      ],
    }
  },
  created() {

  },
  mounted() {
    home.methods.copy(JSON.parse(sessionStorage.getItem("device_list")),this.devices);
    home.methods.copy(this.devices,this.room_data);
    this.current_wsID = this.devices[0].device_id;

    this.send_msg = {
      Code: 7
    };
    this.webSock(this.send_msg);
    this.getData();
  },
  methods: {
    setID(ID) {
      this.current_wsID = ID;
      this.webSock(this.send_msg);
    },

    onMonitorBtnClicked() {
      this.MonitorPlaying = !this.MonitorPlaying;
      if(this.MonitorPlaying){
        this.getVideo();
        this.start_msg = "关闭监控画面";
      } else {
        this.stopVideo();
        this.start_msg = "查看监控画面";
      }
    },
    webSock(msg) {
      const that = this;
      if (this.ws != null){
        this.ws.close();
      }
      this.ws = new WebSocket(app.ws_root+"/GetMonitor/"+this.current_wsID);

      that.deviceOnline = true;

      this.ws.onopen = function () {
        that.ws.send(JSON.stringify(msg));
      };

      this.ws.onmessage = function (evt) {

        that.deviceOnline = true;
        let msg = JSON.parse(evt.data);
        console.log(msg);
        switch (msg.Code){
          case -1:{ //error
            app.comment.message(msg.Param,"warning")
            that.ws.close();
          }break;

          case 0: { //video
            if (that.MonitorPlaying) {
              $('#VideoPic').attr("src","data:image/jpg;base64,"+msg.Param);
            }else {
              that.send_msg = {
                Code: 0,
                Param: "Stop"
              };
              that.ws.send(JSON.stringify(that.send_msg));
            }
          }break;

          case 4:  {

            msg.Param = parseInt(msg.Param);
            switch (msg.Param){
              case 1: {
                app.comment.message(that.start_disinfect_err[0]+"，无法开始消杀。","danger");
              } break;
              case 2: {
                app.comment.message(that.start_disinfect_err[1]+"，无法开始消杀。","danger");
              } break;
              case 3: {
                app.comment.message(that.start_disinfect_err[2]+"，无法开始消杀。","danger");
              } break;
              case 4: {
                app.comment.message(that.start_disinfect_err[3]+"，无法开始消杀。","danger");
              } break;
              case 5: {
                app.comment.message(that.start_disinfect_err[4]+"，无法开始消杀。","danger");
              } break;
            }
            that.disinfect_btn_state = false;
            that.disinfect_btn = "开始消毒";
          }break;

          case 5:{ //tip
            app.comment.message(msg.Param);
          }break;

          case 7:{ //room_state
            let data = JSON.parse(msg.Param);
            that.parseRoomState(data);
            that.room_state = data;
          }break;

          default: {
            app.comment.message("error","danger");
          }
        }
      };

      this.ws.onclose = function () {
        that.deviceOnline = false;
      };

      this.ws.onerror = function () {
        app.comment.message("请求错误","danger");
      };
    },
    setDisinfectMode(mod) {
      this.set_disinfect_mod = mod;
    },
    DisinfectBtnClicked() {
        console.log(this.disinfect_btn_state);
        if(this.disinfect_btn_state){
          this.stopDisinfect();
          this.disinfect_btn = "开始消杀";
          app.comment.message("停止消杀","success");
        } else {
          if(this.set_disinfect_mod !== null){
            this.startDisinfect(this.set_disinfect_mod);
            this.disinfect_btn = "停止消杀";
            app.comment.message("开始消杀","success");
          }else {
            app.comment.message("未选择消毒模式！","danger");
          }
        }
      },
    LockBtnClicked() {
      if(this.lock_btn_state){
        this.unlockRoom(this.set_disinfect_mod);
        this.lock_btn = "锁定房间";
        app.comment.message("房间已解锁","success");
      } else {
        this.lockRoom();
        this.lock_btn = "解锁房间";
        app.comment.message("房间已锁定","warning");
      }
    },
    getVideo() {
      this.send_msg = {
        Code: 0,
        Param: "Start"
      }
      if(this.ws === null || this.ws.readyState === this.ws.CLOSED){
        this.webSock(this.send_msg);
      }else {

        this.ws.send(JSON.stringify(this.send_msg));

      }
    },
    stopVideo() {
      this.send_msg = {
        Code: 0,
        Param: "Stop"
      }
      if(this.ws != null){
        this.ws.send(JSON.stringify(this.send_msg));
      }
    },
    nextMonitor() {
      this.send_msg = {
        Code: 1,
        Param: "Next"
      }
      if(this.ws != null){
        this.ws.send(JSON.stringify(this.send_msg));
      }
    },
    lastMonitor() {
      this.send_msg = {
        Code: 1,
        Param: "Last"
      }
      if(this.ws != null){
        this.ws.send(JSON.stringify(this.send_msg));
      }
    },
    turnLeft() {
      this.send_msg = {
        Code: 1,
        Param: "Left"
      }
      if(this.ws != null){
        this.ws.send(JSON.stringify(this.send_msg));
      }
    },
    turnRight() {
      this.send_msg = {
        Code: 1,
        Param: "Right"
      }
      if(this.ws != null){
        this.ws.send(JSON.stringify(this.send_msg));
      }
    },
    startDisinfect(mode){
     this.send_msg = {
        Code: 4,
        Param: mode
      }
      if(this.ws != null){
        this.ws.send(JSON.stringify(this.send_msg));
      }
    },
    stopDisinfect() {
      this.send_msg = {
        Code: 5
      }
      if(this.ws != null){
        this.ws.send(JSON.stringify(this.send_msg));
      }
    },
    lockRoom() {

      this.send_msg = {
        Code: 2,
        Param: "Lock"
      }
      console.log(this.send_msg);
      if(this.ws != null){
        this.ws.send(JSON.stringify(this.send_msg));
      }
    },
    unlockRoom() {
      this.send_msg = {
        Code: 2,
        Param: "Unlock"
      }
      if(this.ws != null){
        this.ws.send(JSON.stringify(this.send_msg));
      }
    },
    peopleLeave() {
      const that = this;
      that.send_msg = {
        Code: 3,
        Param: 1
      }
      if(this.ws != null){
        this.ws.send(JSON.stringify(that.send_msg));
        app.comment.message("遣散消息已发送。","success");
      }
    },
    audioMessage() {
      const that = this;
      that.send_msg = {
        Code: 3,
        Param: this.audio_msg
      }

      if(this.ws != null){
        this.ws.send(JSON.stringify(that.send_msg));
        app.comment.message("语音消息已发送。","success");
      }
    },


    closeWebSocket() {
      this.ws.close();
    },
    getData() {
      let that = this
      let start = this.DateRange[0];
      let end = this.DateRange[1];

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

      for (let key in this.devices){
        const request = {
          accessToken: sessionStorage.getItem("accessToken"),
          device_id: this.devices[key].device_id,
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
          url: app.http_root+"/device/get/data",
          success(Data){
            switch (Data.code){
              case 0:{
                let data = that.room_data[key].data = [];
                for (let i in Data.data){
                  data.push(Data.data[i]);
                }
                if (data.length){
                  that.parseData(data);
                }
                that.$forceUpdate();
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
      }
    },
    parseRoomState(data){
      let item = data;
      item.ResidualWater = item.ResidualWater + "%";
      item.RoomShidu = item.RoomShidu + "%";
      item.DeviceID = item.DeviceID + " 号";
      item.PeopleNumber =  item.PeopleNumber + " 人";
      item.MaxPeopleNumber =  item.MaxPeopleNumber + " 人";
      item.MaxPeopleTemperature = String(item.MaxPeopleTemperature).substr(0,4) + " ℃";
      item.RoomTemperature = String(item.RoomTemperature).substr(0,4) + " ℃";
      if (item.RoomLock){
        this.lock_btn_state = true;
        this.lock_btn="解锁房间";
        item.RoomLock = "已锁定";
      } else {
        item.RoomLock = "未锁定";
        this.lock_btn_state = false;
        this.lock_btn="锁定房间";
      }
      if(item.TimeBeforeDisinfect > 0){
        item.TimeBeforeDisinfect = parseInt(item.TimeBeforeDisinfect);
        let hour = item.TimeBeforeDisinfect/3600;
        if(hour<1){
          hour = 0;
        }
        let min = item.TimeBeforeDisinfect/60;
        if(min<1){
          min = 0;
        }
        let sec = item.TimeBeforeDisinfect%60;
        if(sec<1){
          sec = 0;
        }
        item.TimeBeforeDisinfect = hour + "小时" +min +"分钟"+ sec + "秒";
      }else{
        item.TimeBeforeDisinfect = "——";
      }
      if(item.ResidualVentilationTime > 0){
        item.ResidualVentilationTime = parseInt(item.ResidualVentilationTime);
        let hour = item.ResidualVentilationTime/60;
        if(hour<1){
          hour = 0;
        }
        let min = item.ResidualVentilationTime%60;
        if(min<1){
          min = 0;
        }
        item.ResidualVentilationTime = hour + "小时" +min +"分钟";
      }else{
        item.ResidualVentilationTime = "——";
      }
      if(item.DisinfectMode !== -1){
        this.disinfect_btn_state = true;
        this.disinfect_btn = "停止消杀";
        for (let key in this.disinfectMods){
          if(item.DisinfectMode === this.disinfectMods[key].mod){
            item.DisinfectMode = this.disinfectMods[key].name;
          }
        }
      } else {
        item.DisinfectMode = "——";
        this.disinfect_btn_state = false;
        this.disinfect_btn = "开始消杀";
      }
      if(String(item.DisinfectStartTime).substr(0,4)==="0001"){
        item.DisinfectStartTime = "——";
      }else {
        item.DisinfectStartTime =String(item.DisinfectStartTime).substr(0,19)
      }

    },

    parseData(data){
      for (let key in data){
        let item = data[key];
        item.time = new Date(item.time).toLocaleString();
        item.temp = item.temp+" ℃";
        item.people_count =  item.people_count + " 人";
        item.people_tem_max = item.people_tem_max + " ℃";
      }
    },
  },
  beforeDestroy() {
    if(this.ws != null){
      this.ws.close();
    }
  }

}
</script>

<style scoped>
.selectDur{
  width: 220px;
}
.monitor-control-btn{
  margin-top: 20px;
}
</style>
