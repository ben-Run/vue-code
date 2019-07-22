<template>
 <article class="scroll-top-box">
   <section class="content-box">
       <p>this is content</p>
       <section class="content-hourTable">
        <hour-table-title :data-list="valueList" ref="formTableData"></hour-table-title>
      </section>
   </section>
   <scroll-top :visibility-height="triggerHeight"></scroll-top>
 </article>
</template>

<script>
import { initDataPrice } from './constant'
export default {
  name: 'home-index',
  props: {},
  created () {
    this.init()
  },
  mounted () {},
  components: {},
  computed: {},
  data () {
    return {
      triggerHeight: 100, // 配置触发的高度
      valueList: []
    };
  },
  methods: {
    init () {
      this.initHourTableData()
    },
    initHourTableData () {
      this.valueList = initDataPrice()
    }
  },
  watch: {},
  filters: {},
};
</script>

<style lang='scss' scoped>
.content-hourTable {
  margin: 0 auto;
  width: 50%;
}
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
