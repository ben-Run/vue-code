<template>
 <article>
   <p >demo B</p>
   <demo-c v-bind="$attrs"  v-on="$listeners" ></demo-c>
 </article>
</template>

<script>
import demoC from './demoC'
export default {
  inheritAttrs: false,
  name: 'demob',
  components: {demoC},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {
    console.log(`b`, this.$attrs)
  },
  mounted () {
    console.log(`b`, this.$attrs)
    console.log('b listeners', this.$listeners)
  },
  methods: {
  },
  filters: {}
}
</script>

<style lang='scss' scoped>

</style>
