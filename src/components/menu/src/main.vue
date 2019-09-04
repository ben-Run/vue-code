<template>
 <article class="menu-box" :class="{'menu-inline': menuInline}">
   <ul>
     <menu-item>
       <span class="item-title" v-if="!menuData.children" >{{menuData.title}}</span>
       <section v-else>
         <span class="item-title" @click="handleToggleShow">{{menuData.title}}</span>
         <menu-box
          v-for="(child,index) in menuData.children" :key="`a${index}`"
          :menu-data="child"
          :menu-inline="true"
          v-show="toggleShow"
          :class="{'isOpened': isOpened}">
         </menu-box>
       </section>
     </menu-item>
   </ul>
 </article>
</template>

<script>
import menuItem from './menuItem'

export default {
  name: 'menuBox',
  components: {
    menuItem
  },
  props: {
    menuData: {
      type: Object,
      required: true,
      default: _ => {}
    },
    menuInline: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      toggleShow: false // 状态
    }
  },
  computed: {
    isOpened () {
      return this.toggleShow
    }
  },
  watch: {},
  created () {},
  mounted () {},
  methods: {
    handleToggleShow() {
      // toggle 状态的是否展开
      this.toggleShow = !this.toggleShow
    }
  },
  filters: {}
}
</script>

<style lang='scss' scoped>
.menu-box {
    cursor: pointer;
    max-width: 250px;
    margin: 0 auto;
    background-color: transparent;

    .item-title {
      font-size: 16px;
      width: 100%;
      height: 100%;
      display: block;
      padding: 5px;
    }
    .isOpened {
      background: rgba(204,204,204,0.6)
    }
  }
</style>
