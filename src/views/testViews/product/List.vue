<template>
 <article>
   <p>product-list</p>
   <el-button @click="gotoDetail">内嵌的详情</el-button>
   <el-button @click="gotoOutDetail">外部的详情</el-button>
 </article>
</template>

<script>
export default {
  name: 'product-list',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    gotoDetail () {
      this.$router.push({
        path: '/product/detail'
      })
    },
    gotoOutDetail () {
      this.$router.push({
        path: '/prodectDetail'
      })
    }
  },
  filters: {}
}
</script>

<style lang='scss' scoped>

</style>
