import Toast from './toast.vue'
import Vue from 'vue'
import { removeNode } from '../utils'

const ComponentInstance = Object.create(null)
const MessageConstructor = Vue.extend(Toast)

let instance,
    timer,
    defaultDuration = 1500

function show(options = {}) {
    if (typeof options !== 'object') {
        options = {
            message: options.toString(),
        }
    }
    instance = new MessageConstructor({
        el: document.createElement('div'),
        data: options,
    })
    document.body.appendChild(instance.$el)
    timer = setTimeout(hide, options.duration || defaultDuration)
}
function hide() {
    clearTimeout(timer)
    if (instance) {
        instance.$destroy()
        removeNode(instance.$el)
    }
}

ComponentInstance.show = show
ComponentInstance.hide = hide

ComponentInstance.install = function(Vue) {
    Vue.prototype.$toast = ComponentInstance
}

export default ComponentInstance
