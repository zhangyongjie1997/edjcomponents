import Vue from "vue";
import App from "./App.vue";
import Confirm from "../packages/components/confirm";
import Loading from "../packages/components/loading";
import Toast from "../packages/components/toast";
Vue.use(Confirm);
Vue.use(Loading);
Vue.use(Toast);
Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount("#app");
