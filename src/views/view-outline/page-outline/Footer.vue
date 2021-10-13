<template lang="pug">
  div.footer(:class="isFixed ? 'footer-fixed' : ''")
    ul.menu-list
      li.item.px2(
        v-for="(item,index) in tabList",
        :key="index") {{item.routeName}} 
    div.copyright
      div {{ copyright }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Footer extends Vue {
  isFixed = false
  tabList = [
    {
      id: 1,
      routeName: "平台介绍",
      url: "/",
    },
    {
      id: 2,
      routeName: "联系我们",
      url: "/",
    },
    {
      id: 3,
      routeName: "用户协议",
      url: "/",
    },
    {
      id: 4,
      routeName: "服务协议",
      url: "/",
    },
    {
      id: 5,
      routeName: "隐私协议",
      url: "/",
    },
    {
      id: 6,
      routeName: "常见问题",
      url: "/",
    }
  ];
  copyright = "© Copyright 2018 浙华 | All rights reserved 浙ICP备16000000号-1"
}
</script>
<style lang="stylus" scoped>
.footer
  width 100%
  background-color #ffffff
  box-shadow: 0 1px 0 0 #DFE1E6
  .menu-list
    text-align center
    padding-top 19px
    margin 0!important
    .item
      cursor pointer
      color #252B3A
      display inline-block
      font-size 12px
    .item:hover
      color #526ECC
  .copyright
    max-width 1200px
    margin 0 auto
    text-align center
    line-height 40px
    font-size 12px
    color #575D6C
.footer-fixed
  position fixed
  bottom 0
  left 0
</style>