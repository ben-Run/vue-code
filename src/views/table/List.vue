
<script>
export default {
  name: 'tableList',
  components: {},
  props: {},
  render (h) {
    return h('div', {
    }, 
    [
      h('span', '子 span render'),
      h('p', {
        style: {
          color: 'red',
          fontSize: '16px'
        },
        attrs: {
          class: 'p',
          id: 'xx'
        },
        on: {
          'click': _ => {
            console.log(this.$slots.default)
            this.clk()
          }
        }
      }, '子 span p'),
      h('section', {
        style: {
          margin:' 20px',
          color: 'blue',
          fontSize: '22px'
        },
        domProps: {
          innerHTML: this.desc
        }
      })
    ]
    )
  },
  data () {
    return {
      desc: 'section 块状 section'
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
  },
  methods: {
    clk (val) {
      console.log('handle p is click')
    }
  },
  filters: {}
}
</script>

<style lang='scss' scoped>

</style>
