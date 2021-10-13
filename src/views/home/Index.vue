<template lang="pug">
  div.home
    div.content 模型主页
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GlobalPropertyService } from "@/service";

@Component({
  components: {

  },
})
export default class Home extends Vue {
  globalProperty: any = GlobalPropertyService.getInstance();
}
</script>
<style lang="stylus" scoped>
.home
  display flex
  flex-direction column
  height 100%
  .content
    background #ffffff
    flex 1
    overflow-y auto
</style>
