<template lang="pug">
  div.home
    div.item(
      v-for="(item,index) in exampleList", 
      :key="index",
      @click="openChild(item.path)") {{ item.name }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ExampleList } from "@/model";
import { ipcRenderer } from "electron"; // 渲染进程(此种引入方式会导致web端出现问题)

@Component({
  components: {},
})
export default class Home extends Vue {
  exampleList: any[] = [];

  created() {
    this.exampleList = ExampleList;
  }

  // 打开子窗口
  openChild(type) {
    if (type) {
      ipcRenderer.send("openChild", type);
    }
  }
}
</script>
<style lang="stylus" scoped>
.home
  display flex
  justify-content space-between
  flex-direction row
  flex-wrap wrap
  align-content flex-start
  padding 20px
  .item
    margin-bottom 20px
    width 200px
    height 60px
    line-height 60px
    text-align center
    border 2px solid #4e6ef2
</style>
