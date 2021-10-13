import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import antdUI from "./antdUI";
import request from "@/utils/request";
import "ant-design-vue/dist/antd.css";
import "./styles/common.styl";
import "animate.css";
import { BASE_API, HOST } from "./config/config";

antdUI();

Vue.config.productionTip = false;

// 定义全局属性
Vue.prototype.$BASE_API = BASE_API;
Vue.prototype.$LOGIN = HOST["LOGIN"];
Vue.prototype.$HOST = HOST;
request.defaults.baseURL = BASE_API;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
