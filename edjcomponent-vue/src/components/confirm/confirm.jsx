/* eslint-disable prettier/prettier */
import Vue from "vue";
import style from "./confirm.module.less";
import { removeNode } from "../utils";
import { Plugin, Fragment } from "vue-fragment";
Vue.use(Plugin);
function Confirm () {
  return {
    name: "edj-component-confirm",
    functional: true,
    data(){
      return {
        message: "",
        cancelText: "",
        confirmText: ""
      };
    },
    methods: {
      onConfirmClick(){
        this.close();
      },
      onCancelClick(){
        alert(2)
      },
      close(){
        this.$destroy();
        removeNode(this.$el);
      }
    },
    render () {
			return (
        <Fragment>
          {this.message ? (
            <div class={style["confirm-box"]}>
              <div class={style.confirm}>
                <div class={style["confirm-msg"]}>
                  <p class={style.msg}>{this.message}</p>
                </div>
                <div class={style["btn-container"]}>
                  {this.cancelText ? (
                    <button onClick={this.onCancelClick} id="confirm-box-btn1">
                      {this.cancelText}
                    </button>
                  ) : null}
                  {this.confirmText ? (
                    <button
                      onClick={this.onConfirmClick}
                      class={`${this.cancelText ? style.borderLeft : ""}`}
                      id="confirm-box-btn2"
                    >
                      {this.confirmText}
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </Fragment>
      );
    }
  }
}

export default Confirm;