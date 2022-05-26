<template>
  <div class="form col-xs-12 col-sm-8 col-lg-4 col-lg-offset-4 col-sm-offset-2 hidden-md-and-down">
    <form class="form-horizontal col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-offset-2" @submit="submitForm">
      <h3 class="form-title text-center">室内消毒管理系统</h3>
      <h3 class="form-title text-center">注册</h3>
      <div class="col-sm-12 col-md-12" >
        <div class="form-group" id="nameDiv">
          <!--        用户名图标和用户名输入框            -->
          <i class="fa fa-user" aria-hidden="true"></i>
          <input
            class="form-control rounded"
            type="text" name="username"
            id="username"
            placeholder="请输入用户名"
            v-model="param.name"
            @change="matchUsername()"
            required autofocus>
        </div>
        <!--        邮箱图标和邮箱输入框                -->
        <div class="form-group" id="phoneDiv">
          <i class="fa  fa-tablet" aria-hidden="true"></i>
          <input
            class="form-control rounded"
            type="text"
            name="password"
            id="phone"
            v-model="param.phone"
            placeholder="请输入电话号码"
            @change="matchPhone()"
            required>
        </div>

        <!--        地址               -->
        <div class="form-group" id="addrDiv">
          <i class="fa  fa-location-arrow" aria-hidden="true"></i>
          <input
            class="form-control rounded"
            type="text"
            name="password"
            id="addr"
            v-model="param.addr"
            placeholder="请输入地址"
            @change="matchAddr()"
            required>
        </div>
        <!--        密码图标和密码输入框                -->
        <div class="form-group" id="passwdDiv">
          <i class="fa fa-key" aria-hidden="true"></i>
          <input
            class="form-control rounded"
            type="password"
            name="password"
            id="password"
            v-model="param.passwd"
            placeholder="请输入密码"
            @focusout="matchPasswd"
            @change="confirmPasswd"
            required>
        </div>
        <!--        密码图标和确认密码输入框                -->
        <div class="form-group" id="confirmDiv">
          <i class="fa icon-loop" aria-hidden="true"></i>
          <input
            class="form-control rounded"
            type="password"
            name="password"
            id="confirm"
            title="我是提示内容!"
            v-model="param.confirm"
            placeholder="请再次输入密码"
            @focusout="confirmPasswd"
            required>
        </div>
        <!--        邀请码                -->
        <div class="form-group" id="inviteDiv">
          <i class="fa icon-loop" aria-hidden="true"></i>
          <input
            class="form-control rounded"
            type="text"
            name="invite"
            id="invite"
            title="我是提示内容!"
            v-model="param.inviteCode"
            placeholder="请次输入邀请码"
            @change="matchInvite()"
            required>
        </div>
        <!--        验证码                -->
        <div class="form-group align-items-center" id="verifyDiv">
          <div class="inline">
            <i class="fa fa-cloud" aria-hidden="true"></i>
            <input
              class="form-control rounded"
              type="text"
              id="verifyCode" name="verifyCode"
              placeholder="请输入验证码"
              v-model="param.verifycode"
              @change="matchVerify()"
              required>
          </div>
          <img
            id="imagePic"
            class="pull-right "
            alt="Base64 encode image"
            width="50" height="30"
            style="margin-top:20px;border-radius: 5px"
            @click="getVerifyCode()"
          >
        </div>

        <br>
        <!--         登录按钮           -->
        <div class="form-group">
          <router-link
            tag="button"
            class="btn btn-info btn-rounded"
            to="/login/sign">
            回到登录
          </router-link>
          <button class="btn btn-success btn-rounded pull-right" @click="submitForm()">注册</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import app from '../../App'
export default {
  name:"sign",
  data(){
    return {
      param: {
        name: "",
        passwd: "",
        confirm: "",
        phone:"",
        addr:"",
        inviteCode: "",
        verifycode: ""
      },
      ACC:{
        name:   false,
        phone:  false,
        addr:   false,
        passwd: false,
        confirm:    false,
        inviteCode: false,
        verifycode: false
      },
      err_msg:[
        "用户名不能为空，请输入用户名。", //0
        "用户名以存在，请重新输入用户名。", //1
        "号码格式错误，请重新输入。",     //2
        "地址不能为空，请输入地址。",    //3
        "密码不能为空，请输入密码。",    //4
        "两次输入密码不相同,请重新输入。", //5
        "请输入邀请码。",  //6
        "请输入验证码。",  //7
        "该用户名已经存在", //8
        "邀请码无效",    //9
        "验证码错误",     //10
        "获取验证码错误"     //11
      ],
      phoneNum: new RegExp(/^1[3456789]\d{9}$/),
    };
  },
  mounted() {
    this.getVerifyCode();
  },
  methods: {
    matchUsername() {
      if (this.param.name) {
        let that = this;
        let request = {
          username: this.param.name
        };
        $.ajax({
          type: "GET",
          xhrFields: {
            withCredentials: true
          },
          crossDomain: true,
          data: request,
          dataType: 'json',
          scriptCharset: "utf-8",
          url: app.http_root+"/checkUsername",
          success(Data) {
            that.haveOne(!Data.code, that.ACC.name, "nameDiv", that.err_msg[1])
          },
          error(data) {
            app.comment.message("验证码响应失败 "+ data, "error");
          }
        });
      } else {
        this.haveOne(this.param.name, this.ACC.name, "nameDiv", this.err_msg[0]);
      }

    },
    matchPhone() {
      this.haveOne(this.phoneNum.test(this.param.phone), this.ACC.phone, "phoneDiv", this.err_msg[2])
    },
    matchAddr() {
      this.haveOne(this.param.addr, this.ACC.addr, "addrDiv", this.err_msg[3]);
    },
    matchPasswd() {
      this.haveOne(this.param.passwd, this.ACC.passwd, "passwdDiv", this.err_msg[4]);
    },
    confirmPasswd() {
      let bool = this.ACC.passwd !== "" && this.param.confirm === this.param.passwd;
      console.log("bool:" + bool);
      this.haveOne(bool, this.param.confirm, "confirmDiv", this.err_msg[5]);
    },
    matchInvite() {
      this.haveOne(this.param.inviteCode, this.ACC.inviteCode, "inviteDiv", this.err_msg[6])
    },
    matchVerify() {
      console.log(this.param.verifycode);
      this.haveOne(this.param.verifycode, this.ACC.verifycode, "verifyDiv",this.err_msg[7])
    },
    haveOne(bool, key, ID, msg) {
      /**
       * @param key 对象
       * @param ID domID
       * @param ID 错误消息
       */
      if (bool) {
        key = true;
        document.getElementById(ID).classList.remove("has-error");
        document.getElementById(ID).classList.add("has-success");
      } else {
        key = false;
        app.comment.message(msg, "warning")
        document.getElementById(ID).classList.add("has-error");
      }
    },
    getVerifyCode() {
      let xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      $.ajax({
        type: "GET",
        xhrFields: {
          withCredentials: true
        },
        crossDomain: true,
        data: {},
        dataType: 'json',
        url: app.http_root+"/verifycode",
        success(data) {
          $("#imagePic").attr("src", "data:image/png;base64," + data);
        },
        error() {
          app.comment.message("验证码响应失败", "error");
        }
      });
    },
    submitForm() {
      let canRegister = true;
      for (let i in this.ACC) {
        if (!this.ACC[i]) {
          canRegister = false;
        }
      }
      if (canRegister) {
        this.register();
      }
    },
    register() {
      let that = this;
      let request = {
        username: this.param.name,
        password: this.param.passwd,
        address: this.param.addr,
        phone_number: this.param.phone,
        invitation_code: this.param.inviteCode,
        verifycode: this.param.verifycode
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
        url: app.http_root+"/register",
        success(Data){
          switch (Data.code){
            case 0:{
              that.$router.push("/login/sign");
              app.comment.message("注册成功","success");
            }break;

            case 1:{
              app.comment.message(that.err_msg[8],"danger")

            }break;

            case 2:{
              app.comment.message(that.err_msg[9],"danger")
            }break;

            case 3:{
              app.comment.message(that.err_msg[10],"danger")

            }
          }
        },
        error(){
          app.comment.message(that.err_msg[11],"danger");
        }
      });
    }
  }
}
</script>

<style scoped>

.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
/*给表单的边框设置大小,颜色和不透明度*/
.form {
  background-color: rgba(255, 255, 255, 0.6);
  margin-top: 15vh;
  border-radius: 10px;
}

.form-control{
  border-width: 2px;
}
/*设置字体和大小*/
label {
  font-family: Arial,serif;font-size: 15px
}
/*当输入正确时,给输入框设置浅绿色*/
input.form-control:valid{
..
  background-color: mintcream;
}
/*当输入正确时,给输入框设置浅红色*/
input.form-control:invalid {
  background-color: rgb(245, 244, 230);
}
/*设置图标为行内元素，并设置大小和颜色*/
.fa{
  display: inline-block;
  top: 27px;
  left: 6px;
  position: relative;
  color: #575757;
}
/*为几个输入框设置padding,防止和图标重合*/
input[type="text"],input[type="password"],input[type="email"]{
  padding-left:26px;
}
.form-title{
  padding-top:20px;
}


</style>
