
<!--
  createElement 属性、事件触发
-->
<script>
export default {
  name: 'baseRender',
  components: {},
  data () {
    return {
      msg: '输入一个值试试吧'
    }
  },
  render (h) {
    return h(
      'article',
      {
        class: 'wrapper',
        style: {
          fontSize: '14px',
           color:'#606266'
        },
        // DOM 属性 如 value, innerHTML, innerText等, 是这个DOM元素作为对象, 其附加的内容
        domProps: {
          // innerText: '这是第二个组件'
          // innerHTML: '这是第二个组件'
        }
      },
      [
        h('h3', '这是第二个组件'),
        h(
          'input',
          {
            class: [
              {
	             'second': true
              }, 'blue-color'],
              domProps: {
                value: this.msg
              },
	        //【style】和`v-bind:style`一样的 API
	        // 接收一个字符串、对象或对象组成的数组
	         style: {
	          color: 'green'
	         },
            attrs: {
              id: 'second',
              placeholder: '请输入...',
            },
            on: {
              input: this.getMsg
            }
          }
        ),

        h('button', 
          {
            class: {
              'btn-nav': true
            },
            on: {
	            click: this.clickHandler
	           },
           }, '触发emitm，同步msg'
        )
      ]
    )
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
  },
  methods: {
    getMsg (e) {
      this.msg = e.target.value
    },
    clickHandler () {
      this.$emit('change-data', this.msg)
    }
  },
  filters: {}
}
</script>

<style lang='scss' scoped>
.wrapper {
   margin-top: 30px;
   border-top: 1px solid #ccc;
   padding-top: 20px;
 .btn-nav {
   padding: 7px 10px;
   border-radius: 5px;
   margin-top: 20px;
   cursor: pointer;
   color:#1989fa;
   margin-left: 50px;
 }
 .second {
   border: 1px solid #ccc;
   padding: 7px 10px;
 }
 .blue-color {
   color:blue;
 }
}
</style>
