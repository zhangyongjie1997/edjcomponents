import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Confirm from "./components/confirm";
Vue.use(Confirm);
Vue.config.productionTip = false;
new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
