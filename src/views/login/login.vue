<template>
  <div class="login">
    <div class="main">
      <div class="leftImg">
        <div class="bankIcon">
          <img src="./../../assets/imgs/logo.png" alt>
        </div>
      </div>
      <div class="loginForm">
        <div class="title">积分商城管理系统</div>
        <div class="form">
          <div class="usm">
            <div class="icon">
              <img src="./../../assets/imgs/usname.png" alt>
            </div>
            <div class="entryDiv">
              <div
                class="placeholder"
                v-show="showUsmHolder==true"
                @click="handleClick('username')"
              >请输入账号</div>
              <input
                type="username"
                ref="username"
                class="username"
                v-model="usName"
                @focus="handleEntry('showUsmHolder',usName)"
                @blur="handleBlur('usName',usName)"
              >
            </div>
          </div>
          <div class="pwd">
            <div class="icon">
              <img src="./../../assets/imgs/pwd.png" alt>
            </div>
            <div class="entryDiv">
              <div class="placeholder" v-show="showPwdHolder" @click="handleClick('password')">请输入密码</div>
              <input
                type="password"
                ref="password"
                class="password"
                v-model="pwd"
                @focus="handleEntry('showPwdHolder',pwd)"
                @blur="handleBlur('pwd',pwd)"
              >
            </div>
          </div>
        </div>
        <div class="mean">
          <el-checkbox label="记住密码" name="type"></el-checkbox>
          <span class="help">帮助</span>
        </div>
        <div class="loginIt">
          <div class="loginBtn" @click="handleLogin()">登 录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setCookie } from "@/lib/util";
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      showPwdHolder: true,
      showUsmHolder: true,
      usName: "",
      pwd: ""
    };
  },
  components: {
    
  },
  methods: {
    ...mapActions(["login"]),
    //  获取焦点
    handleEntry(type, val) {
      if (type == "showPwdHolder") {
        this.showPwdHolder = false;
      } else {
        this.showUsmHolder = false;
      }
    },
    handleBlur(type, val) {
      if (val == "") {
        if (type == "usName") {
          this.showUsmHolder = true;
        } else {
          this.showPwdHolder = true;
        }
      }
    },
    handleClick(type) {
      if (type == "username") {
        this.$refs.username.focus();
      } else {
        this.$refs.password.focus();
      }
    },
    handleLogin() {
      if (this.usName && this.pwd) {
        this.login({
          userName: this.usName,
          password: this.pwd
        })
          .then(res => {
            this.$message({
              message: "登录成功",
              type: "success"
            });
            this.$router.push({
              path: "/"
            });
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url("./../../assets/imgs/bg.png");
  background-size: 100% 100%;
  position: relative;
}
.main {
  width: 1400px;
  height: 760px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -380px;
  margin-left: -700px;
  background-color: #fff;
}
.leftImg {
  float: left;
  width: 56%;
  height: 90%;
  background-image: url("./../../assets/imgs/leftBg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
}
.bankIcon {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 140px;
  height: 40px;
}
.bankIcon img {
  width: 100%;
  height: 100%;
}
.loginForm {
  float: right;
  width: 44%;
  height: 100%;
  text-align: center;
  position: relative;
}

.title {
  font-size: 42px;
  margin-top: 20%;
}
.form {
  width: 52%;
  margin-top: 12%;
  display: inline-block;
  text-align: left;
}
.usm,
.pwd {
  border-bottom: 1px solid #eeeeee;
  padding: 12px 0;
}
.pwd {
  margin-top: 36px;
}
.entryDiv {
  width: 75%;
  height: 30px;
  display: inline-block;
  margin-left: 14px;
  position: relative;
}
.placeholder {
  height: 100%;
  position: absolute;
  left: 0;
  top: 2px;
  line-height: 30px;
  font-size: 16px;
  color: #999999;
  z-index: 1;
}
input {
  width: 100%;
  border: none;
  outline: none;
  height: 30px;
  font-size: 18px;
  vertical-align: middle;
  z-index: 99;
}
.icon {
  display: inline-block;
  vertical-align: middle;
  width: 26px;
  height: 28px;
}
.icon img {
  height: 100%;
  width: 100%;
}
.mean {
  width: 52%;
  display: inline-block;
  margin-top: 4%;
  text-align: left;
}
.el-checkbox >>> .el-checkbox__label {
  color: #999999;
  font-size: 16px;
  vertical-align: middle;
}
.help {
  float: right;
  font-size: 16px;
  color: #999999;
  vertical-align: middle;
}
.loginBtn {
  width: 52%;
  text-align: center;
  margin: 0 auto;
  margin-top: 8.6%;
  font-size: 24px;
  height: 54px;
  line-height: 54px;
  background-color: #1890ff;
  color: #ffffff;
  border-radius: 500px;
  cursor: pointer;
}
@media screen and (max-width: 1680px) {
  .main {
    width: 1000px;
    height: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -300px;
    margin-left: -500px;
    background-color: #fff;
  }
  .title {
    font-size: 36px;
  }
  .placeholder,
  .el-checkbox >>> .el-checkbox__label,
  .help {
    font-size: 14px;
  }
  .loginBtn {
    height: 46px;
    line-height: 46px;
  }
  .bankIcon {
    top: 10px;
    left: 10px;
    width: 112px;
    height: 32px;
  }
}
</style>
