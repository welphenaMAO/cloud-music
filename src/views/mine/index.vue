<template>
  <div class="mine">
    我的页面
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  components: {
  }
})

export default class Mine extends Vue {

}
</script>

<style lang="scss" scoped>
  .mine {
    color: red;
  }
</style>
