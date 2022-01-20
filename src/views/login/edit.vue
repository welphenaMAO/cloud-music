<template>
  <div class="loginEdit">
    <van-field v-model="edit.phone" type="tel" label="手机号" />
    <van-field v-model="edit.password" type="password" label="密码" />
    <van-button round type="info" @click="login">登录</van-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { Button, Field } from 'vant'

interface editParams {
  phone: number | string
  password: string | number | any
}
@Component({
  components: {
    [Button.name]: Button,
    [Field.name]: Field
  }
})
export default class loginEdit extends Vue {
  edit: editParams = {
    phone: '',
    password: ""
  }

  login() {
    this.$http.post("/login/cellphone", {
      phone: this.edit.phone,
      password: this.edit.password
    }).then((res: any) => {
      console.log('login res ??', res)
    })
  }
}
</script>
<style scoped lang="scss">
  .loginEdit {
    border: 1px solid red;
  }
</style>
