<template>
 <article>
   <p>demo A</p>
   <p>{{desc || '无输入...'}}</p>
   <demo-b 
   v-bind="$attrs" 
   v-model="tempValue" 
   @changeMyData="changeMyData"
   @changeSend="changeSend"
   @clickb="sayHello"  >
   </demo-b>
   <h3 @click="sayH3">demo A click</h3>
 </article>
</template>

<script>
import demoB from './demoB'
export default {
  name: 'demoa',
  components: {
    demoB
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      desc: '',
      tempValue: 's'
    }
  },
  computed: {},
  watch: {},
  created () {
    console.log('a', this.$attrs)
  },
  mounted () {
    console.log('a', this.$attrs)
    this.desc = this.$attrs.desc
  },
  methods: {
    sayHello () {
      console.log('handle chick')
    },
    sayH3 () {
      console.log('handle sayh3')
    },
    changeSend (val) {
      console.log(val)
    },
    changeMyData (val) {
      this.desc = val
    }
  },
  filters: {}
}
</script>

<style lang='scss' scoped>

</style>
