import Loading from "./loading";
import Vue from 'vue';

let MessageConstructor = Vue.extend(Loading);


let instance;
console.dir(MessageConstructor)

Loading.install = function(Vue){
  Vue.prototype.$loading = {
    show: function(options = {}){
      if (typeof options === 'string') {
        options = {
          message: options
        };
      }
      instance = MessageConstructor({
        data: options
      });
      console.log(instance)
    },
    close: function(){

    }
  }
}

export default Loading;