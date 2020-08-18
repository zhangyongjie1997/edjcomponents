/* eslint-disable prettier/prettier */
import style from "./confirm.module.less";
import { removeNode } from "../utils";
function Confirm() {
  return {
    name: "edj-component-confirm",
    functional: true,
    props: {
      message: {
        type: String,
        required: false,
        default: undefined
      },
      cancelText: {
        type: String,
        required: false,
        default: undefined
      },
      confirmText: {
        type: String,
        required: true,
        default: ""
      },
      confirmCallback: {
        type: Function,
        required: true,
        default: () => {}
      },
      cancelCallback: {
        type: Function,
        required: false,
        default: () => {}
      }
    },
    data() {
      return {
        message: "",
        cancelText: "",
        confirmText: "",
        cancelCallback: () => {},
        confirmCallback: () => {}
      };
    },
    methods: {
      onConfirmClick() {
        this.confirmCallback();
      },
      onCancelClick() {
        this.cancelCallback();
      },
      close() {
        this.$destroy();
        removeNode(this.$el);
      }
    },
    render(h, context = {}) {
      const data = Object.assign({}, context.props, this);
      console.log(context);
      return (
        <div class={style["confirm-box"]}>
          <div class={style.confirm}>
            <div class={style["confirm-msg"]}>
              {
                typeof context.scopedSlots.message !== "undefined"
                  ? context.scopedSlots.message()
                  : <p class={style.msg}>{data.message}</p>
              }
              {
                typeof context.scopedSlots.default !== "undefined"
                  ? context.scopedSlots.default()
                  : null
              }
            </div>
            <div class={style["btn-container"]}>
              {
                typeof data.cancelText !== "undefined" 
                ? (<button onClick={data.cancelCallback}>
                    {data.cancelText}
                  </button>)
                : null
              }
              {
                typeof data.confirmText !== "undefined"
                  ? (<button
                      onClick={data.confirmCallback}
                      class={`${typeof data.cancelText !== "undefined" ? style.borderLeft : ""}`}
                      >
                      {data.confirmText}</button>)
                  : null
              }
            </div>
          </div>
        </div>
      );
    },
  };
}

export default Confirm;
