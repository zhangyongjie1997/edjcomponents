<script>
/* eslint-disable prettier/prettier */
import style from './confirm.module.less'
import { removeNode } from '../utils'
export default {
    name: 'edj-component-confirm',
    props: {
        message: {
            type: String,
            required: false,
            default: '',
        },
        cancelText: {
            type: String,
            required: false,
            default: '',
        },
        confirmText: {
            type: String,
            required: true,
            default: '',
        },
        confirmCallback: {
            type: Function,
            required: true,
            default: () => {},
        },
        cancelCallback: {
            type: Function,
            required: false,
            default: () => {},
        },
    },
    data() {
        return {}
    },
    methods: {
        onConfirmClick() {
            this.confirmCallback()
        },
        onCancelClick() {
            this.cancelCallback()
        },
        hide() {
            this.$destroy()
            removeNode(this.$el)
        },
    },
    render(h, context = {}) {
        const data = Object.assign({}, context.props, this)
        return (
            <div class={style['confirm-box']}>
                <div class={style.confirm}>
                    <div class={style['confirm-msg']}>
                        {typeof context.scopedSlots.message !== 'undefined' ? (
                            context.scopedSlots.message()
                        ) : (
                            <p class={style.msg}>{data.message}</p>
                        )}
                        {typeof context.scopedSlots.default !== 'undefined' ? context.scopedSlots.default() : null}
                    </div>
                    <div class={style['btn-container']}>
                        {typeof data.cancelText !== 'undefined' ? (
                            <button onClick={data.cancelCallback}>{data.cancelText}</button>
                        ) : null}
                        {typeof data.confirmText !== 'undefined' ? (
                            <button
                                onClick={data.confirmCallback}
                                class={`${typeof data.cancelText !== 'undefined' ? style.borderLeft : ''}`}
                            >
                                {data.confirmText}
                            </button>
                        ) : null}
                    </div>
                </div>
            </div>
        )
    },
}
</script>
<style scoped lang="less">
@import url('./comfirm.less');
</style>