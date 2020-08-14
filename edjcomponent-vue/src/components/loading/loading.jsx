/* eslint-disable prettier/prettier */
import style from "./loading.module.less";
console.log(style)
function Loading () {
  return {
    name: "loading",
    functional: true,
    render (context) {
      console.log(context)
			return <div class={style["edj-loading-warp"]}>
        <div class={style["el-loading-spinner"]}>
          <svg viewBox="25 25 50 50" class={style.circular}>
            <circle cx="50" cy="50" r="20" fill="none" class={style.path}></circle>
          </svg>
        </div>
      </div>
    }
  }
}

export default Loading();