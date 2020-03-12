
import dialogDrag from './dialogDrag.js'


// 指令集
const Directives = {
  'dialogDrag': dialogDrag, // 弹窗拖拽
}

export default {
  install (Vue, opts = {}) {
    Object.keys(Directives).forEach(k => {
      Vue.directive(k, Directives[k])
    })
  }
}
