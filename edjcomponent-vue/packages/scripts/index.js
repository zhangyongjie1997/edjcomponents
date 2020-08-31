import * as utils from "./utils";
import * as request from "./request/request";

export default {
  utils,
  request
};

function Promise(fn) {
  this.cbs = [];
  this.data = undefined;
  const resolve = value => {
    setTimeout(() => {
      this.data = value;
      this.cbs.forEach(cb => cb(value));
    }, 0);
  };
  fn(resolve.bind(this));
}

Promise.prototype.then = function(onResolved) {
  return new Promise(resolve => {
    this.cbs.push(() => {
      const res = onResolved(this.data);
      if (res instanceof Promise) {
        res.then(resolve);
      } else {
        resolve(res);
      }
    });
  });
};
