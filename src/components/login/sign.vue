<template>
  <div class="form col-xs-12 col-sm-6 col-lg-4 col-md-6 col-lg-offset-4 col-sm-offset-3">
    <form class="form-horizontal align-self-center col-xs-8 col-xs-offset-2" @submit.prevent="submitForm()">
      <h3 class="form-title text-center">室内消毒管理系统</h3>
      <h3 class="form-title text-center">登录</h3>
      <div class="col-sm-12 col-md-12 col-xs-12" >
        <div class="form-group">
          <!--        用户名图标和用户名输入框            -->
          <i class="fa fa-user" aria-hidden="true"></i>
          <input
            class="form-control rounded"
            type="text"
            id="username" name="username"
            placeholder="请输入用户名"
            v-model="param.username"
            required autofocus>
        </div>
        <!--        密码图标和密码输入框                -->
        <div class="form-group">
          <i class="fa fa-key" aria-hidden="true"></i>
          <input
            class="form-control rounded"
            type="password"
            id="password" name="password"
            placeholder="请输入密码"
            v-model="param.password"
            required>
        </div>
        <!--        验证码                -->
        <div class="form-group align-items-center">
          <div class="inline">
            <i class="fa fa-cloud" aria-hidden="true"></i>
            <input
              class="form-control rounded"
              type="text"
              id="verifyCode" name="verifyCode"
              placeholder="请输入验证码"
              v-model="param.verifyCode"
              required>
          </div>
          <img
            id="imagePic"
            class="pull-right "
            alt="Base64 encode image"
            width="55" height="30"
            style="margin-top:20px;border-radius: 5px"
            @click="getVerifyCode()"
          >
        </div>
        <br>
        <!--         登录按钮           -->
        <div class="form-group">
          <button
            class="btn btn-success btn-rounded pull-right"
            type="submit"
          >登录</button>
          <router-link
          tag="button"
          class="btn btn-info btn-rounded"
          to="/login/create"
          >
          注册
        </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import home from "../Home"
import Button from "../ui/Buttons";
import app from '../../App'

export default {
  name:"sign",
  components: {Button},
  data(){
    return {
      param: {
        username: home.username,
        password: "",
        verifyCode: ""
      },
      err_msg: [
        "验证码响应失败。",
        "验证码错误，请重试。",
        "用户名或密码错误，请重试。",
        "登录失败。"
      ]
    };
  },
  mounted() {
    this.getVerifyCode();
  },
  methods: {
    getVerifyCode(){
      let that = this;
      let xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      $.ajax({
        type:"GET",
        xhrFields: {
          withCredentials: true
        },
        crossDomain: true,
        data: {},
        dataType: 'json',
        url: app.http_root+"/verifycode",
        success(data){
          $("#imagePic").attr("src","data:image/png;base64,"+data);
        },
        error(){
          app.comment.message(that.err_msg[0],"danger");
        }
      });
    },
    submitForm() {
      let isNull = false;
      for (let i in this.param) {
        if(this.param[i]===""){
          isNull = true;
          break;
        }
      }
      if(!isNull){
        this.login();
      }
    },
    login(){
      let that = this;
      let request = {
        username: this.param.username,
        password: this.param.password,
        verifycode: this.param.verifyCode
      };
      $.ajax({
        type:"POST",
        xhrFields: {
          withCredentials: true
        },
        crossDomain: true,
        data: request,
        dataType: 'json',
        scriptCharset: "utf-8",
        url: app.http_root+"/login",
        success(Data){
          Data.accessToke = undefined;
          switch (Data.code){
            case 0:{
              sessionStorage.setItem("username",that.param.username);
              sessionStorage.setItem("accessToken",Data.accessToken);
              that.$router.push("/home/table/disinfect");
              app.comment.message("登录成功","success");
              break;
            }
            case 1:{
              app.comment.message(that.err_msg[1],"danger");
              break;
            }
            case 2:{
              app.comment.message(that.err_msg[2],"danger");
              break;
            }
          }
        },
        error: function (){
          app.comment.message(that.err_msg[3],"danger");
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
  background-color: mintcream;
}
/*当输入正确时,给输入框设置浅红色*/
input.form-control:invalid{
  background-color: #ffeeed;
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
