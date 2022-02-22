<template>
  <div class="navBar">
    <van-nav-bar :title="title" fixed @click-left="onClickLeft">
        <template #left>
          <van-icon name="arrow-left" size="18" />
        </template>
        <template #center>
          <span>首页1234</span>
        </template>
        <template #right>
          <van-icon name="search" size="18" />
        </template>
    </van-nav-bar>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { NavBar, Icon } from 'vant'
import json from "@/configs/app.jsonc"

@Component({
  components: {
    [Icon.name]: Icon,
    [NavBar.name]: NavBar
  }
})

export default class navBar extends Vue {
  title = document.title
  onClickLeft() {
    console.log("route ??", this.$route)
    // this.$router.go(-1)
  }

  beforeRouteEnter(to, from, next) {
    console.log("to ??", to)
    console.log("from ??", from)
    console.log("next ??", next)
  }

  beforeMount() {
    console.log("json 数据呀 ??", json)
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/variables";
</style>
