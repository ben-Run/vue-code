
<!--
  作用域插槽
-->
<script>
export default {
  name: 'baseRender',
  components: {
    demoScoped: {
      name: 'demo-scoped',
      props: {
        msg: String
      },
      render (h) {
        return h('div', [
          // 在组件中定义一个作用域插槽
          this.$scopedSlots.default({
            msg: this.msg
          })
        ])
      }
    }
  },
  data () {
    return {
      msg: '我这是作用域插槽中的msg'
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
        }
      },
      [
        h('h3', '这是第三个组件'),

        h('demo-scoped', {
           props: {
            msg: this.msg
          },
          style: {
            marginTop: '15px'
          },
          // 使用作用域插槽
          scopedSlots: {
            default: function(props) {
              return h('span', {
                class: {
                  scopedSlots: true,
                  scopedSlotsAc:  props.msg === '我这是作用域插槽中的msg'
                }
              }, props.msg)
            }
          }
        }),
        h('el-button', {
          attrs: {
            type: 'primary'
          },
          style: {
            marginTop: '30px'
          },
          on: {
            click: this.changeMsg
          },
          domProps: {
            innerText: '点击改变传到scoped-slots 的值'
          }
        })
      ]
    )
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    changeMsg (e) {
      e.stopPropagation()
      this.msg = this.msg === '点击按钮触发改变之后的值' ? '我这是作用域插槽中的msg' : '点击按钮触发改变之后的值'
      console.log(this.msg)
    }
  },
  filters: {}
}
</script>

<style lang='scss' scoped>
.scopedSlots {
  color: red;
}
.scopedSlotsAc {
  color: blue;
}
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
