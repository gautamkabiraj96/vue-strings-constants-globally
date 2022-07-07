import Vue from "vue";
import App from "./App.vue";
import stringConstants from "./string-constants";

Vue.use(stringConstants);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
