<template>
 <article class="render-wrapper">
   <base-render level="1">这是默认的标题
    <span class="render-wrapper--subtitle" slot="subtitle">我是subtitle</span>
   </base-render>

   <!-- 第二个 -->
   <second @change-data="changeData"></second>
   <h3 class="second">{{this.msg}}</h3>

   <!-- 第三个 -->
   <three>
     <span message="测试scopedSlots，我是传入的message" slot-scope="props">{{props}}</span>
   </three>

   <!-- 第四个 -->
   <jsx></jsx>
 </article>
</template>

<script>
import baseRender from './components/Base'
import second from './components/Second'
import three from './components/Three'
import Jsx from './components/Jsx'

export default {
  name: 'renderIndex',
  components: {
    baseRender,
    second,
    three,
    Jsx
  },
  props: {},
  data () {
    return {
      msg: '这是一个默认值',
      slotProps: {
        text: '作用域插槽传递'
      }
    }
  },
  computed: {
  },
  watch: {},
  created () {},
  mounted () {},
  methods: {
    changeData (val) {
      this.msg = val
    }
  },
  filters: {}
}
</script>

<style lang='scss' scoped>
.render-wrapper {
  width: 80%;
  border:1px solid #ccc;
  margin: 0 auto;
  padding: 20px 0;
  &--subtitle {
    color: red;
    font-size: 28px;
    margin: 0 10px;
  }
  .second {
    margin-top: 20px;
    color: red;
  }
}
</style>
