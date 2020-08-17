import Toast from "./toast";
import Vue from "vue";
import { removeNode } from "../utils";

let MessageConstructor = Vue.extend(Toast());

let instance,
  timer,
  defaultDuration = 1500;

function show(options = {}) {
  if (typeof options === "string") {
    options = {
      message: options,
      longTime: options.duration > defaultDuration ? true : false
    };
  }
  instance = new MessageConstructor({
    data: options
  }).$mount("body");
  timer = setTimeout(close, options.duration || defaultDuration);
}
function close() {
  clearTimeout(timer);
  if (instance) {
    instance.$destroy();
    removeNode(instance.$el);
  }
}
Toast.install = function(Vue) {
  Vue.prototype.$toast = show;
};

Toast.show = show;
Toast.close = close;

export default Toast;
