import Vue from "vue";
import Confirm from "./confirm";
import { removeNode } from "../utils";
let MessageConstructor = Vue.extend(Confirm());

function show(options = {}) {
  if (typeof options === "string") {
    options = {
      message: options,
      confirmText: "确定"
    };
  } else {
    options = Object.assign(
      {
        confirmText: "确定",
        message: "message"
      },
      options
    );
  }
  new MessageConstructor({
    data: options
  }).$mount("body");
}

function close() {
  if (Confirm.vm) {
    Confirm.vm.$distroy();
    removeNode(Confirm.vm.$el);
  }
}

Confirm.install = function(Vue) {
  Vue.prototype.$confirm = show;
};

Confirm.show = show;

Confirm.close = close;

export default Confirm;
