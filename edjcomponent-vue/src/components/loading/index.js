import Loading from "./loading";
import Vue from "vue";
import { removeNode } from "../utils";

let MessageConstructor = Vue.extend(Loading());

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
    data: options
  }).$mount("body");
  timer = setTimeout(this.close, options.duration || defaultDuration);
}

function close() {
  clearTimeout(timer);
  if (instance) {
    instance.$destroy();
    removeNode(instance.$el);
  }
}

Loading.install = function(Vue) {
  Vue.prototype.$loading = {
    show,
    close
  };
};

Loading.show = show;
Loading.close = close;

export default Loading;
