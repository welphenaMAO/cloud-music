<template>
  <div class='app-main'>
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <div>
          <router-view :key="key">
            <div id="pageContent"></div>
          </router-view>
        </div>
      </keep-alive>
    </transition>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from "vue-property-decorator";

  @Component({})
  export default class AppMain extends Vue{
    get cachedViews() {
      return this.$store.state.tagsVies.cachedViews
    }
    get key() {
      return this.$route.fullPath
    }
  }
</script>

<style scoped lang="scss">

</style>
