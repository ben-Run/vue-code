<template>
<transition>
  <article class="mask-box" v-show="visible">
    <section class="mask-content">
      <p>{{txt}}</p>
    </section>
  </article>
</transition>

</template>

<script>
export default {
  name: 'loading',
  props: {},
  data () {
    return {
      visible: false,
      txt: null,
      spinner: null
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {},
  filters: {}
}
</script>

<style lang='scss' scoped>
.mask-box {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
