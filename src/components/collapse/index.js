import collapse from './src/main'

collapse.install = function (Vue) {
  Vue.component(collapse.name, collapse)
}
export default collapse
