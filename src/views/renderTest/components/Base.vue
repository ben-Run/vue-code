
<!--
  render: return vnode
  createElement => h
  标签、组件选项对象  String | object
  数据对象   string | object 当为string 时当作一个文本渲染
  child vnode节点  String | Array 也可以使用字符串来生成文本虚拟节点

  render 语法有点繁琐，使用jsx 可以用来优化， < 当作标签， {} 当作表达式
  基础示例 简单的渲染用法
  包含 标签，props，slot以及createElement和点击事件
-->
<script>
export default {
  name: 'baseRender',
  components: {},
  props: {
    level: {
      type: [String, Number],
      required: true
    }
  },
  data () {
    return {
      msg: Math.ceil(Math.random() * 1000)
    }
  },
  render (h) {
    this.$slots.subtitle = this.$slots.subtitle || []
    return h(
      'article',
      // '我是文本渲染',
      {
        class: 'wrapper',
        style: {
          fontSize: '14px',
           color:'#606266'
        }
      },
      [
        h('h' + this.level, {}, [
          'render 基本用法,',
        ...this.$slots.default, // $slot 是一个vnode 数组
        ...this.$slots.subtitle,
        '，此处是data的值: ',
        this.msg
        ]),

        h('button', 
          {
            class: {
              'btn-nav': true
            },
            on: {
	            click: this.clickHandler
	           },
           }, '点我改变内部data值'
        )
      ]
    )
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    console.log(this.$slots.default)
  },
  methods: {
    clickHandler () {
      this.msg = Math.ceil(Math.random() * 1000)
    }
  },
  filters: {}
}
</script>

<style lang='scss' scoped>
.wrapper {
 .btn-nav {
   padding: 7px 10px;
   border-radius: 5px;
   margin-top: 20px;
   cursor: pointer;
   color:#1989fa;
 }
}
</style>
