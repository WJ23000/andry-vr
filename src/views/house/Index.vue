<template lang="pug">
  div.house
    div 房间模型
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ipcRenderer } from "electron"; // 渲染进程(此种引入方式会导致web端出现问题)

@Component({
  components: {
  },
})
export default class house extends Vue {
  // 关闭子窗口
  closeChild() {
    ipcRenderer.send("closeChild", "关闭子窗口");
  }
}
</script>
<style lang="stylus" scoped>
.house
  background #333333
  color #ffffff
  height 100%
  .content
    padding 12px 16px
</style>
