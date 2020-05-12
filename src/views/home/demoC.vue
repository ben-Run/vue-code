<template>
 <article class="demo-c">
   <p  @click="handleSend">demo C</p>
   输入：<input v-model="desc" @input="handleInput" />
 </article>
</template>

<script>

export default {
  inheritAttrs: false,
  name: 'democ',
  components: {},
  props: {},
  data () {
    return {
      desc: ''
    }
  },
  computed: {},
  watch: {},
  created () {
    console.log(`c`, this.$attrs)
  },
  mounted () {
    console.log(`c`, this.$attrs)
    console.log(`c listeners`,this.$listeners)
  },
  methods: {
    handleSend () {
      this.$emit('changeSend', '在组件C中传递过来的事件')
    },
    handleInput() {
      // $listeners 包含父级作用域事件监听器，传进来之后自动触发相应事件
      this.$emit("changeMyData", this.desc); // 在组件A中传递过来的事件
      this.$emit('changeSend', this.desc)
    }
  },
  filters: {}
}
</script>

<style lang='scss' scoped>
.demo-c {
  padding: 30px 0;
  border: 1px solid red;
}
p {
  cursor: pointer;
  padding: 5px 0;
}
input {
    border: 1px solid #ccc;
    height: 25px;
    padding: 5px;
}
</style>
