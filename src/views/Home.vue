<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <router-link to="/login">
      <van-button type="primary" block>去登录</van-button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Button } from 'vant'

@Component({
  components: {
    [Button.name]: Button
  }
})
export default class Home extends Vue {}
</script>
