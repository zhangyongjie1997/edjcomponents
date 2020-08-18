import Loading from "./loading";
import Vue from "vue";
import { removeNode } from "../utils";

const ComponentInstance = Loading();
let MessageConstructor = Vue.extend(ComponentInstance);

let instance,
  timer,
  defaultDuration = 60000;

function show(options = {}) {
  if (typeof options === "string") {
    options = {
      message: options
    };
  }
  instance = new MessageConstructor({
    el: document.createElement("div"),
    data: options
  });
  document.body.appendChild(instance.$el);
  timer = setTimeout(this.close, options.duration || defaultDuration);
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
  Vue.prototype.$loading = ComponentInstance;
};

export default ComponentInstance;
