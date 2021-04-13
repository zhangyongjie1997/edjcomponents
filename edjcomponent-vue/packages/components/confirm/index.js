import Vue from 'vue'
import Confirm from './confirm'
import { removeNode } from '../utils'

const ComponentInstance = Object.create(null)
const MessageConstructor = Vue.extend(Confirm)

let instance

function show(options = {}) {
    if (typeof options === 'string') {
        options = {
            message: options,
            confirmText: '确定',
        }
    } else {
        options = Object.assign(
            {
                confirmText: '确定',
                message: 'message',
            },
            options
        )
    }
    instance = new MessageConstructor({
        el: document.createElement('div'),
        data: options,
    })
    document.body.appendChild(instance.$el)
}

function hide() {
    if (instance) {
        instance.$destroy()
        removeNode(instance.$el)
    }
}

ComponentInstance.show = show

ComponentInstance.hide = hide

ComponentInstance.install = function(Vue) {
    Vue.prototype.$confirm = ComponentInstance
    Vue.component(ComponentInstance.name, ComponentInstance)
}

export default ComponentInstance
