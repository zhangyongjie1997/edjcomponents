import Loading from './loading'
import Vue from 'vue'
import { removeNode } from '../utils'

const ComponentInstance = Object.create(null)
const MessageConstructor = Vue.extend(Loading)

let instance,
    timer,
    defaultDuration = 60000

function show(options = {message: ''}) {
    if (typeof options !== 'object') {
        options = {
            message: options,
        }
    }
    instance = new MessageConstructor({
        el: document.createElement('div'),
        data: options,
    })
    document.body.appendChild(instance.$el)
    timer = setTimeout(this.close, options.duration || defaultDuration)
}

function close() {
    clearTimeout(timer)
    if (instance) {
        instance.$destroy()
        removeNode(instance.$el)
    }
}

ComponentInstance.show = show
ComponentInstance.close = close

ComponentInstance.install = function(Vue) {
    Vue.prototype.$loading = ComponentInstance
}

export default ComponentInstance
