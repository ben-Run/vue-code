<template>
  <li class="item">
     <slot></slot>
  </li>
</template>

<script>

/**
 * @description: 
 * @param {type} 图标部分后续在调整
 * @return: 递归组件菜单，ul 嵌套li，li 在嵌套ul...
 * @author: longbs
 */

export default {
  name: 'menuItem',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {},
  filters: {}
}
</script>

<style lang='scss' scoped>
.item {
    // margin: 7px 0;
    list-style: none;
    color: #009cff;
    border-bottom: 1px solid #009cff;
  }
.item:last-child {
    border: none;
  }
</style>
