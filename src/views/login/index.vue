<template>
  <div class='login'>
    <div v-if="flag">
      <div class="logo">
        <img src="https://via.placeholder.com/80x80/333444?text=LOGO" alt="Logo">
      </div>
      <ul class="main">
        <li @click="phoneLogin">
          <van-button type="primary" block>手机号登录</van-button>
        </li>
        <li @click="register">
          <van-button type="default" block>注册</van-button>
        </li>
      </ul>
      <div class="otherLogin">
        <p>其它登录方式</p>
        <ul class="otherList">
          <li>
            <img src="https://via.placeholder.com/40x40/333444?text=WeChart" alt="WeChart">
            <span>微信</span>
          </li>
          <li>
            <img src="https://via.placeholder.com/40x40/333444?text=QQ" alt="QQ">
            <span>QQ</span>
          </li>
          <li>
            <img src="https://via.placeholder.com/40x40/333444?text=xinlang" alt="xinlang">
            <span>新浪微博</span>
          </li>
          <li>
            <img src="https://via.placeholder.com/40x40/333444?text=netEase" alt="netEase">
            <span>网易邮箱</span>
          </li>
        </ul>
      </div>
    </div>
    <router-view v-else></router-view>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Button from 'vant/lib/button'
@Component({
  components: {
    [Button.name]: Button
  }
})
export default class Login extends Vue {
  flag = true
  // 手机号登录
  phoneLogin() {
    console.log("手机号登录...", this)
    this.flag = false
    this.$router.push("/login/edit/phone")
  }

  // 注册
  register() {
    console.log("注册...")
  }
}
</script>

<style lang="scss" scoped>
  // @import "@/assets/css/variables.scss";
  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    background: url('../../assets/images/login/bg.jpg') no-repeat center/cover;
    box-sizing: border-box;
    .logo {
      width: 80px;
      height: 80px;
      min-width: 80px;
      min-height: 80px;
      margin: auto;
      border-radius: 50%;
      overflow: hidden;
      box-sizing: border-box;
    }

    .main {
      margin: 50px auto 150px;
      li {
        margin: 0 20px 30px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .otherLogin {
      margin-top: auto;
      img {
        border-radius: 50%;
      }
      p {
        margin-top: 30px;
      }
      .otherList {
        display: flex;
        justify-content: center;
        margin: 30px auto;
        li {
          margin: 0 20px;
        }
        span {
          display: block;
          width: 100%;
          font-size: 12px;
          text-align: center;
        }
      }
    }
  }
</style>
