import menuBox from './src/main.vue'

menuBox.install = function (Vue) {
  Vue.component(menuBox.name, menuBox)
}
export default menuBox
