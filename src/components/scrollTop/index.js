import scrollTop from './src/main'

scrollTop.install = function (Vue) {
  Vue.component(scrollTop.name, scrollTop)
}
export default scrollTop