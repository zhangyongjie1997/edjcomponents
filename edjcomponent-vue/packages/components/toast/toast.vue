<script>
/* eslint-disable prettier/prettier */
import style from './toast.module.less'
export default {
    name: 'edj-component-toast',
    data() {
        return {
            message: '',
            longTime: false,
        }
    },
    render() {
        return (
            <div class={`${style['toast-warp']} ${this.longTime ? style['toast-animate2'] : style['toast-animate']}`}>
                <div class={style['toast-message']}>{this.message}</div>
            </div>
        )
    },
}
</script>
