import Vue from "vue";
import App from "./App.vue";
// import Confirm from "../packages/components/confirm";
// import Loading from "../packages/components/loading";
// import Toast from "../packages/components/toast";
import a from "../lib/edjcomponent.umd";
import "../lib/edjcomponent.css"
Vue.use(a.components.Confirm);
// Vue.use(Loading);
// Vue.use(Toast);
Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount("#app");
