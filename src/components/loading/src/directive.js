import Vue from 'vue'
import Loading from './loading.vue'

const Mask = Vue.extend(Loading)
const loadingObj = {}

loadingObj.install = Vue => {
  // el: 指令所绑定的元素 binding: 一个对象 vnode:Vue 编译生成的虚拟节点
  Vue.directive('newloading', {
    bind (el, binding, vnode) {
      const mask = new Mask({
        el: document.createElement('div'),
        data: {
        }
      })
      el.instance = mask
      el.mask = mask.$el
      el.maskStyle = {}
      document.body.append(el.mask)
    },
    update (el, binding, vnode) {
      Vue.nextTick(() => {
        el.instance.visible = binding.value
      })
    }
  })
}
export default loadingObj
