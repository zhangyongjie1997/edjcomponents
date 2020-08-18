import Toast from "./toast";
import Vue from "vue";
import { removeNode } from "../utils";

const ComponentInstance = Toast();
let MessageConstructor = Vue.extend(ComponentInstance);

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
    el: document.createElement("div"),
    data: options
  });
  document.body.appendChild(instance.$el);
  timer = setTimeout(close, options.duration || defaultDuration);
}
function close() {
  clearTimeout(timer);
  if (instance) {
    instance.$destroy();
    removeNode(instance.$el);
  }
}

ComponentInstance.show = show;
ComponentInstance.close = close;

ComponentInstance.install = function(Vue) {
  Vue.prototype.$toast = ComponentInstance;
};

export default ComponentInstance;
