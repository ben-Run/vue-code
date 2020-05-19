<template>
 <article>
   <p>product detail</p>
   <el-button @click="gotoIndex">回到prodectIndex</el-button>
   <router-view></router-view>
 </article>
</template>

<script>
export default {
  name: 'detail',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {
    $route: {
      handler (to, form, next) {
        console.log('detail watch')
      }
    }
  },
  created () {},
  mounted () {},
  activated () {
    console.log('detail activated')
  },
  beforeRouteEnter(to, from, next) {
    console.log('detail beforeRouteEnter')
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('detail beforeUpdate')
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log('detail beforeRouteLeave')
    next()
  },
  methods: {
    gotoIndex () {
      this.$router.push({
        path: '/product/list'
      })
    }
  },
  filters: {}
}
</script>

<style lang='scss' scoped>

</style>
