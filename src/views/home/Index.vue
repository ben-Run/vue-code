<template>
 <article class="scroll-top-box">
   <section class="content-box">
       <p>this is content</p>
   </section>
   <scroll-top :visibility-height="triggerHeight"></scroll-top>
 </article>
</template>

<script>
export default {
  name: 'home-index',
  props: {},
  created () {},
  mounted () {},
  components: {},
  computed: {},
  data () {
    return {
      triggerHeight: 100
    };
  },
  methods: {},
  watch: {},
  filters: {},
};
</script>

<style lang='scss' scoped>
.content-box {
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f0f0f0;
  p {
    text-align: center;
    font-size: 16px;
  }
}
</style>
