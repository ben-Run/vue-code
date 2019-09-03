<template>
 <article class="scroll-top-box">
   <section class="main-content" v-if="visible"
   @click.stop="handleChilk"
   :style="{'right': styleRight,'bottom': styleBottom}">
     <i class="el-icon-caret-top ico"></i>
     <slot>
       <span class="scroll-desc">顶部</span>
     </slot>
   </section>
 </article>
</template>

<script>

export default {
  name: 'scrollTop',
  props: {
    right: {
      type: Number,
      default: 40
    },
    bottom: {
      type: Number,
      default: 40
    },
    target: {
      type: String,
      default: ''
    },
    visibilityHeight: {
      type: Number,
      default: 300
    }
  },
  created () {},
  mounted () {
    this.init()
    this.container.addEventListener('scroll', this.handleScroll, false)
  },
  beforeDestroy () {
    this.container.removeEventListener('scroll', this.handleScroll)
  },
  components: {},
  computed: {
    styleBottom () {
      return `${this.bottom}px`
    },
    styleRight () {
      return `${this.right}px`
    }
  },
  data () {
    return {
      el: null,
      container: null,
      visible: false
    }
  },
  methods: {
    init () {
      this.container = document
      this.el = document.documentElement
      if (this.target) {
        this.el = document.querySelector(this.targent)
        if (!this.el) {
          throw new Error(`当前DOM文档中找不到对象:${this.target}`)
        }
        this.container = this.el
      }
    },
    handleScroll () {
      this.visible = this.el.scrollTop > this.visibilityHeight
    },
    handleChilk (e) {
      let el = this.el
      let step = 20
      let interval = setInterval(_ => {
        if (el.scrollTop <= 0) {
          clearInterval(interval)
          return
        }
        step += 20
        el.scrollTop -= step
      }, 20)
      this.$emit('click', e)
    }
  },
  watch: {},
  filters: {},
}
</script>

<style lang='scss' scoped>
.main-content {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: fixed;
  box-shadow: 0px 0px 7px rgba(118, 118, 118, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background-color .5s ease-out;
  .ico {
    font-size: 16px;
    @include color($--ui-color-blue);
  }
  &:hover {
    cursor: pointer;
    @include color($--ui-color-white);
    @include bg-color($--ui-color-primary);
    .ico {
      @include color($--ui-color-white);
    }
  }
}
.scroll-desc {
  font-size: 8px;
}
</style>
