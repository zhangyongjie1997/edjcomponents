/* eslint-disable prettier/prettier */
import style from "./toast.module.less";
function Toast () {
  return {
    name: "edj-component-toast",
    functional: true,
    data () {
      return {
        message: "",
        longTime: false
      };
    },
    render () {
			return <div class={`${style["toast-layer"]} ${this.longTime ? style["toastAnimate2"] : style["toastAnimate"]}`}>
        <div class={style["container-toast"]}>{this.message}</div>
      </div>
    }
  }
}

export default Toast;