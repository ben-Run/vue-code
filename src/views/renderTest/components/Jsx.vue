
<script>
export default {
  name: 'jsx-render',
  components: {},
  props: {},
  data () {
    return {
      id: 'jsx',
      msg: '这试jsx形式写的值',
      txt: '123456',
      classObj: {
        isActive: false
      }
    }
  },
  render (h) {
    // 这里可以先处理一些逻辑如if for 等
    // jsx 可以理解为createElement 的一个语法糖，模板上绑定的属性可以写成 createElement 第二个参数的数据对象形式，然后使用扩展运算符，这种写法还可以接受
    const button = {
      domProps: {
        type: 'submit',
        innerText: '原生按钮'
      },
      attrs: {
        id: 'baseButton'
      },
      class: ['base-input'],
      style: {
        color: '#000'
      },
      on: {
        click: this.handleSay
      }
    }
    return (
      <div class="jsx-render" id={this.id}>
        <p class="jsx">这是第四个组件 jsx</p>
        <p class={this.classObj}>{this.msg}</p>
        <el-input value={this.txt} class="txt"  onInput={this.handleInput}></el-input>
        <section class="nav-btn">
         <el-button onClick={this.handleClick}>jsx 按钮</el-button>
         <button { ...button }></button>
        </section>
        
      </div>
    )
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    handleClick () {
      this.classObj.isActive = !this.classObj.isActive
      this.msg = this.msg === '这是点击之后的改变的值' ? '这试jsx形式写的值' : '这是点击之后的改变的值'
    },
    // element-ui 的input 回调第一个参数是value
    handleInput (value) {
      this.txt = value
    },
    handleSay () {
      alert('点击的是原生的按钮')
    }
  },
  filters: {}
}
</script>

<style lang='scss' scoped>
.jsx-render {
  border-top:1px solid #ccc;
  margin-top: 20px;
  padding-top: 50px;
  #baseButton {
    padding: 7px 10px;
    margin-left: 30px;
    border-radius: 5px;
  }
  & /deep/ {
    .txt {
      width: 200px;
    }
    .isActive {
      color:red;
    }
  }
}
.jsx {
  font-size: 20px;
}
.nav-btn {
  margin-top: 20px;
}
</style>
