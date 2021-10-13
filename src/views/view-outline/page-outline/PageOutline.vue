<template lang="pug">
  div.page-outline
    div
      Header
    div.container(:style="{minHeight:minHeight+'px'}")
      div.outline(:style="{minHeight:minHeight+'px'}")
        a-config-provider(:locale="locale")
          router-view.page-content(:style="{height:minHeight+'px'}")
      //- Footer
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import { GlobalPropertyService } from "@/service";
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";

@Component({
  components: {
    Header,
    Footer
  },
})
export default class PageOutline extends Vue {
  globalProperty: any = GlobalPropertyService.getInstance();

  locale = zhCN;

  get minHeight(): number {
    const height = this.globalProperty.clientHeight - 49;
    return height;
  }
}
</script>
<style lang="stylus" scoped>
.page-outline
  display flex
  flex-direction column
  height 100%
  .container 
    background #EFF0F5
    flex 1
    .outline
      width 100%
      background #ffffff
      .page-content
        overflow-y auto
</style>