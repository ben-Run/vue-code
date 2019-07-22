import hourTable from './src/main'

hourTable.install = function (Vue) {
  Vue.component(hourTable.name, hourTable)
}
export default hourTable