<template>
  <div class="tabBar">
    <van-tabbar v-model="tabCurrent" @change="onChange">
      <van-tabbar-item name="find" icon="service-o">发现</van-tabbar-item>
      <van-tabbar-item name="podcast" icon="bullhorn-o">播客</van-tabbar-item>
      <van-tabbar-item name="mine" icon="user-circle-o">我的</van-tabbar-item>
      <van-tabbar-item name="follow" icon="friends-o">关注</van-tabbar-item>
      <van-tabbar-item name="village" icon="guide-o">云村</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { Tabbar, TabbarItem } from 'vant'

@Component({
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
})

export default class tabBar extends Vue {
  tabCurrent = "find" as string

  onChange(event: string | HTMLDivElement) {
    this.$router.push({ path: "/" + event })
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/variables";
  .van-tabbar-item--active {
    color: $mainColor
  }
</style>
