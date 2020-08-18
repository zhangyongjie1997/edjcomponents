import Vue from "vue";
import App from "./App.vue";
import Confirm from "./components/confirm";
import Loading from "./components/loading";
import Toast from "./components/toast";
Vue.use(Confirm);
Vue.use(Loading);
Vue.use(Toast);
Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount("#app");
