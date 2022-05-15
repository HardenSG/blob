<template>
  <div class="backImg">
    <div class="container">
      <div class="form-box">
        <div class="register-box" v-show="registerBox">
          <h1>注册</h1>
          <form class="personRegister">
            <input type="text" name="name" placeholder="姓名" v-model="name" />
            <input type="text" placeholder="密码" v-model="pwd" />
            <input
              type="text"
              name="pwd"
              placeholder="确认密码"
              v-model="configPwd"
            />
            <input
              type="email"
              name="email"
              placeholder="邮箱"
              v-model="email"
            />
            <button class="sendCode" @click="sendCode">发送</button>
            <input type="text" placeholder="验证码" v-model="code" />
            <button class="register" @click="register">注册</button>
          </form>
        </div>

        <div class="login-box" v-show="loginBox">
          <h1>登录</h1>
          <form class="personLogin">
            <input
              type="email"
              name="logEmail"
              placeholder="邮箱"
              v-model="admin"
            />
            <input
              type="password"
              name="logPwd"
              placeholder="密码"
              v-model="password"
            />
            <button class="login" @click="login">登录</button>
          </form>
        </div>
      </div>

      <div class="con-box leftyemian">
        <h2>Register</h2>
        <img src="../assets/3.webp" />
        <p>已有帐号</p>
        <button id="login" @click="loginSlide">去登陆</button>
      </div>

      <div class="con-box rightyemian">
        <h2>Login</h2>
        <img src="../assets/3.webp" />
        <button id="register" @click="registerSlide">去注册</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref , ComponentInternalInstance } from "vue";
import request from "@/utils/request";
import { getCurrentInstance } from "@vue/runtime-core";
export default {
  setup() {
    //login's data
    let admin = ref("");
    let password = ref("");

    //login or register's flag
    let registerBox = ref(false);
    let loginBox = ref(true);

    //register's data
    let email = ref("");
    let name = ref("");
    let pwd = ref("");
    let configPwd = ref("");
    let code = ref("");

    
    const { proxy } = getCurrentInstance() as ComponentInternalInstance

    /**
     * 
     * @param 登录接口
     */
    function login(e) {
        
      e.preventDefault();

      console.log(proxy?.$store);

    //   发起login请求
      new request( 'http://localhost:8082/api/login' , {
            email:admin.value,
            password:password.value
        },false).post().then( res => {
          const re = res as any
          console.log(re);
          
            if ( re.status == 200 ) {
                alert(re.msg)
                sessionStorage.setItem('token',JSON.stringify(re.token))
                proxy?.$store.dispatch('changeLogAction',true)
                proxy?.$store.dispatch('changeAdminAction','yandeqiang')
                proxy?.$store.dispatch('changeHeaderAdvAction','http://36.133.40.168:8083/email.png')
            }
      } )
    }

    /**
     * 
     * @param 注册接口
     */
    function register(e) {
      e.preventDefault();

      // 发起register 请求
      new request(
        "http://localhost:8082/api/register",
        {
          email: email.value,
          name: name.value,
          password: configPwd.value,
          code: code.value,
        },
        false
      ).post().then( ( res )  => {
          const re = res as any
          if (re.status === 200) {
            alert(re.msg);
            sessionStorage.setItem("token", JSON.stringify(re.token));
          } else {
            alert(re.msg);
          }
        });
    }
        
    /**
     * 
     * @param 发送验证码接口
     */
    function sendCode(e) {
      e.preventDefault();

      const regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        
      if (regEmail.test(email.value)) {
        console.log(1);
        //封装axios发起 sendCode请求
        const req = new request(
          "http://localhost:8082/api/sendCode",
          { email: email.value },
          false
        ).post();
        req.then( ( res ) => {
          console.log(res);
        });
      }
    }

    /**
     * registerSlide and LoginSlide都是切换
     */
    function registerSlide() {

      //类型判别为HTMLElement就不会再报空对象的错了
      const box = <HTMLElement>document?.querySelector(".form-box")

      box.style.transform = "translateX(80%)";

      loginBox.value = false;

      registerBox.value = true;

    }

    function loginSlide() {
       const box = <HTMLElement>document?.querySelector(".form-box")

       box.style.transform = "translateX(0%)";

      registerBox.value = false;

      loginBox.value = true;
    }
    
    return{
        admin ,
        password ,

        registerBox ,
        loginBox ,

        email ,
        name ,
        pwd ,
        configPwd ,
        code ,

        login,
        register,
        sendCode,
        registerSlide,
        loginSlide
    }
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.backImg {
  display: flex;
  width: 100vw;
  height: 100vh;
  background: url("../assets/1.webp");
  background-size: cover;
  // background-attachment:fixed;
  // background-size: 100% 100%;
  justify-content: center;
  align-items: center;
}
.container {
  position: relative;
  background-color: #fff;
  width: 650px;
  height: 455px;
  border-radius: 5px;
  box-shadow: 5px, 5px, 5px rgba(0, 0, 0, 0.1);
  background: url(../assets/1.webp) center center;
}

.form-box {
  position: absolute;
  top: -10%;
  left: 5%;
  background: url(../assets/2.webp) center center;
  width: 320px;
  height: 550px;
  border-radius: 5px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  transition: 0.5s ease-in-out;
}

.login-box .register-box {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 200px;
}

.hidden {
  display: none;
  transition: 0.5s;
}

h1 {
  text-align: center;
  margin-bottom: 25px;
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 5px;
}

input {
  background-color: transparent;
  width: 70%;
  color: #fff;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding: 10px 0;
  text-indent: 10px;
  margin: 8px 0;
  font-size: 14px;
  letter-spacing: 2px;
  margin-left: 15%;
}

input::placeholder {
  color: rgb(255, 400, 610);
}

input:focus {
  color: yellow;
  outline: none;
  border-bottom: 1px solid #a262ad80;
  transition: 0.5s;
}

input:focus::-moz-placeholder {
  opacity: 0;
}

.form-box button {
  width: 70%;
  margin-top: 35px;
  background-color: #f6f6f6;
  outline: none;
  border-radius: 8px;
  padding: 13px;
  color: a262ad;
  letter-spacing: 2px;
  border: none;
  cursor: pointer;
  margin-left: 15%;
}

.form-box button:hover {
  background-color: #a262ad;
  color: #f6f6f6;
  transition: background-color 0.5s ease;
}

.con-box {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.leftyemian {
  left: -2%;
}

.rightyemian {
  right: -2%;
}

.con-box h2 {
  color: #8e9aaf;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 3px;
  text-align: center;
  margin-bottom: 4px;
}

.con-box p {
  font-size: 12px;
  letter-spacing: 2px;
  color: #8e9aaf;
  text-align: center;
}

.con-box img {
  width: 150px;
  height: 150px;
  opacity: 0.9;
  margin: 40px 0;
}

.con-box button {
  margin-top: 3%;
  background-color: #fff;
  color: #a262ad;
  border: 1px solid #d3b7d8;
  padding: 6px 10px;
  border-radius: 5px;
  letter-spacing: 1px;
  outline: none;
  cursor: pointer;
}

.sendCode {
  position: absolute;
  right: 20px;
  bottom: 40%;
  width: 60px !important;
  height: 30px !important;
  padding: 0 !important;
}

.con-box button:hover {
  background-color: #d3b7d8;
  color: #fff;
}
</style>