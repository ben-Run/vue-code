<template>
 <article class="scroll-top-box">
   <section class="content-box">
     <div class="content-item">
       <h3>hourTable</h3>
       <section class="content-hourTable">
        <hour-table-title :data-list="valueList" ref="formTableData"></hour-table-title>
      </section>
     </div>

     <div class="collapse">
       <h3>collapse</h3>
       <collapse
        v-for="(item,index) in collapseList"
        :title="item.unserName"
        :rightDesc="item.desc"
        :key="index"
        :status="index === 0 ? 'up' : 'down'"
        class="collapse-box">
          <template slot="content">
            <li
            v-for="(t, index) in item.list"
            @click="gotoDetail(t)"
            class="content-item-collapse"
            :key="`a${index}`">
             <span class="name">{{t.title}}</span>
             <span class="value">{{t.desc}}</span>
            </li>
          </template>
     </collapse>
     </div>
   </section>

   <scroll-top :visibility-height="triggerHeight"></scroll-top>
 </article>
</template>

<script>
import { initDataPrice, dataList } from './constant'
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
      valueList: [],
      collapseList: []
    };
  },
  methods: {
    init () {
      this.initHourTableData()
      this.initCollapse()
    },
    initHourTableData () {
      this.valueList = initDataPrice()
    },
    initCollapse () {
      this.collapseList = dataList
    },
    gotoDetail (val) {
      console.log(val)
    }
  },
  watch: {},
  filters: {},
};
</script>

<style lang='scss' scoped>
h3 {
  margin-bottom: 10px;
}

.content-item {
  padding-top: 30px;
  margin-bottom: 60px;
}
.content-hourTable {
  margin: 0 auto;
  width: 50%;
}
.content-box {
  height: 800px;
  border: 1px solid #f0f0f0;
  p {
    text-align: center;
    font-size: 16px;
  }
}

.collapse {
  padding-top: 30px;
  margin-top: 30px;
  width: 500px;
  margin: 0 auto;
  border: 1px solid;
  @include border-color($--ui-border-color-sub);
  & .collapse-box:first{
    border: 1px solid;
    @include border-color($--ui-border-color-sub);
  }
}
.content-item-collapse {
  font-size: 17px;
  padding: 7px 15px;
  display: flex;
  align-items: center;
  .name {
    width: 50%;
    text-align: left;
  }
  .value {
    width: 50%;
    text-align: right;
    padding-right: 16px;
  }
}
</style>
