
<template>
 <article class="collapse-box">
   <header @click="handleChange">
     <section :class="{'border-line': borderClass}" class="title-box">
       <span class="title">{{title || ''}}</span>
       <span class="desc">{{rightDesc || ''}}</span>
       <svg-icon class="jiantou" :class="[icoDirection]" name="ico-jiantou"></svg-icon>
     </section>
   </header>
   <transition
    appear
    mode="out-in"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
    @after-leave="afterLeave">
     <div class="conent-box" v-show="show">
       <slot name="content"></slot>
     </div>
   </transition>
 </article>
</template>

<script>
/*
 * @Author: bensong.long
 * @Date: 2019-05-26 15:32:04
 * @Last Modified by: bensong.long
 * @Last Modified time: 2019-08-26 17:28:49
 * content：考虑到折叠的有可能是一堆文本，或者其他的，所以用slot 传进去，collapse 不控制
 * <collapse
        :title="item.checkType"
        :rightDesc="item.totalCount | totalCountStr"
        v-for="(item,index) in checkTypeList"
        :key="index"
        :status="index === 0 ? 'up' : 'down'">
          <template slot="content">
            <li
            @click="gotoSchoolCheckList(sc, item.checkType)"
            class="content-item" v-for="(sc, index) in item.schoolList"
            :key="`a${index}`">
             <span class="name">{{sc.schoolName}}</span>
             <span class="value">{{sc.totalCount | totalCountStr}}</span>
            </li>
          </template>
     </collapse>
 * 
 * 
 * 
 * 
 * 
 */
export default {
  name: 'collapse',
  components: {},
  props: {
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 右侧描述
    rightDesc: {
      type: String,
      default: ''
    },
    // 是否手风琴模式
    accordion: {
      type: Boolean,
      default: false
    },
    // 图标/箭头状态
    status: {
      type: String,
      default: 'down'
    }
  },
  data () {
    return {
      icoStatu: 'down',
      show: false
    }
  },
  computed: {
    borderClass () {
      return this.icoStatu === 'down'
    },
    icoDirection () {
      return this.icoStatu === 'down' ? 'toDown' : 'toUp'
    }
  },
  watch: {
    status: {
      handler (val) {
        if (val) {
          this.icoStatu = val
          this.show = !(val === 'down')
        }
      },
      immediate: true
    }
  },
  created () {},
  mounted () {},
  methods: {
    handleChange () {
      this.show = !this.show
      this.icoStatu = this.icoStatu === 'down' ? 'up' : 'down'
    },
    // 进入
    enter (el, done) {
      el.style.height = 'auto'
      let endHeight = window.getComputedStyle(el).height
      el.style.height = '0px'
      console.log(el.offsetHeight) // 20190623 勿删，删了出现问题
      // el.offsetHeight = endHeight
      el.style.height = endHeight
    },
    afterEnter (el) {
      el.style.height = null
    },
    // 离开
    leave (el) {
      el.style.height = window.getComputedStyle(el).height
      el.style.height = '0px'
    },
    afterLeave (el) {
      el.style.height = null
    }
  },
  filters: {}
}
</script>

<style lang='scss' scoped>
.collapse-box {
 header {
   // mobile use torem(15px);
  padding: 0 15px;
  background-color: white;
  .title-box {
    height: 46px;
    font-size: 17px;
    width: 100%;
    @include bg-color($--ui-font-color-content);
    @include color($--ui-color-blue);
    display: flex;
    align-items: center;
    transition: border-width .7s ease;
    .title {
      width: 60%;
      text-align: left;
      margin-right: 5px;
    }
    .desc {
      flex:1;
      text-align: right;
      margin-right: 7px;
    }
  }
 }
 .conent-box {
   transition: all .3s ease;
   overflow: hidden;
   will-change: height;
   @include bg-color($--ui-bg-header-color);
   border-bottom: 1px solid;
   @include border-color($--ui-border-color-sub);
 }
 .border-line {
   border-bottom: 1px solid;
   @include border-color($--ui-border-color-sub);
 }
 .jiantou  {
    padding: 0px 5px;
 }
}
</style>
