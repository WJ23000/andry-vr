<template lang="pug">
  div.header.bg-primary
    div.content.flex.justify-between
      div.flex
        div.flex.mr4
          img.logo.mr2(:src="logo") 
          div.f3.white.bold VR应用实例
      div.flex
        div.exit(@click="customMin")
          a-icon(type="minus")
        //- div.exit(@click="customMaxReset(true)" v-if="type")
        //-   a-icon(type="switcher")
        //- div.exit(@click="customMaxReset(false)" v-else)
        //-   a-icon(type="border")
        div.exit(@click="showExit")
          a-icon(type="close")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ipcRenderer, shell } from "electron"; // 渲染进程(此种引入方式会导致web端出现问题)

@Component({
  components: {},
})
export default class Header extends Vue {
  logo = require("../../../assets/andry.png");
  type = true; // 窗口默认还原

  created() {}

  // 最小化
  customMin() {
    // 触发主进程最小化事件
    ipcRenderer.send("custom-min", "最小化");
  }

  // 最大化/还原
  customMaxReset(value) {
    if (value) {
      // 触发主进程最大化事件
      // ipcRenderer.send("custom-max", "最大化");
      this.type = false;
    } else {
      // 触发主进程还原事件
      // ipcRenderer.send("custom-reset", "还原");
      this.type = true;
    }
  }

  // 关闭客户端
  showExit() {
    ipcRenderer.send("close", "关闭客户端");
  }

  // 打开子窗口
  openChild(type) {
    let data;
    switch (type) {
      case "feedBack":
        data = { path: type, width: 440, height: 360 };
        ipcRenderer.send("openChild", data);
        break;
      case "about":
        data = { path: type, width: 440, height: 360 };
        ipcRenderer.send("openChild", data);
        break;
      case "weather":
        data = { path: type, width: 800, height: 460 };
        ipcRenderer.send("openChild", data);
        break;
      default:
        break;
    }
  }
}
</script>
<style lang="stylus" scoped>
.header
  height 48px
  border-bottom 1px solid #f6f6f6
  -webkit-app-region drag // 允许鼠标拖动
  .content
    height 100%
    display flex
    justify-content space-between
    align-items center
    padding 0px 0px 0px 16px
    .weather
      margin-left 60px
      cursor default
      -webkit-app-region no-drag // 禁止鼠标拖动
    .search
      -webkit-app-region no-drag // 禁止鼠标拖动
    .exit
      width 48px
      height 48px
      line-height 48px
      color #ffffff
      text-align center
      -webkit-app-region no-drag // 禁止鼠标拖动
      &:hover
        background rgba(0, 0, 0, 0.3)
        color #ffffff
  img
    width 24px
    height 24px
.header__right--header
  width 28px
  height 28px
  background rgba(0, 0, 0, 0)
  border-radius 50%
.header__right--name
  height 18px
  font-size 12px
  font-weight 400
  line-height 18px
  color #ADB0B8
.header__right--option
  white-space nowrap
  padding 10px 20px
  border-bottom 1px solid #f3f2f6
.header__right--option:hover
  color #4e6ef2
</style>
<style lang="stylus">
.custom-popover
  .ant-popover-inner-content
    padding 0
.avatar-pop-wrap
  position relative
.avatar-pop .ant-popover-arrow
  right 0px !important
</style>
