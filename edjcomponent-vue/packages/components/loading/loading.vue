<script>
/* eslint-disable prettier/prettier */
import style from './loading.module.less'
export default {
    name: 'edj-component-loading',
    data() {
        return {
            message: '',
        }
    },
    render() {
        return (
            <div class={style['loading-warp']}>
                <div class={style['loading-spinner']}>
                    <svg viewBox="25 25 50 50" class={style.circular}>
                        <circle cx="50" cy="50" r="20" fill="none" class={style.path}></circle>
                    </svg>
                    {this.message ? <p>{this.message}</p> : null}
                </div>
            </div>
        )
    },
}
</script>
