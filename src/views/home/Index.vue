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

     <div class="box menu-box">
       <h3>menu</h3>
       <section class="menu-content">
         <menu-box :menu-data="item" v-for="(item,index) in menuList" :key="index" ></menu-box>
       </section>
     </div>

     <div class="box" v-newloading="showPop">
       <el-button @click="showPop = !showPop">显示</el-button>
       <el-button @click="showPop = !showPop">隐藏</el-button>
     </div>
   </section>

   <scroll-top :visibility-height="triggerHeight"></scroll-top>

   <!-- $attrs -->
   <demo-a title='title' desc='desc' v-bind="$attrs"></demo-a>
   <section class="btn-nav-wrapper">
     <el-button type="primary" @click="gotoRender">去render 看看</el-button>
   </section>
   
 </article>
</template>

<script>
import { initDataPrice, dataList, menuList } from './constant'
import demoA from './demoA'
export default {
  name: 'home-index',
  props: {},
  created () {
    this.init()
  },
  mounted () {
    console.log('index:',this.$attrs)
  },
  components: {
    demoA
  },
  computed: {},
  data () {
    return {
      triggerHeight: 100, // 配置触发的高度
      valueList: [],
      collapseList: [],
      menuList: menuList,
      showPop: false
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
    },
    gotoRender () {
      this.$router.push({
        path: '/render'
      })
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
.box {
  width: 80%;
  margin: 10px auto;
  padding: 10px 0;
  border: 1px solid #ccc;
}
.menu-content {
  width: 250px;
  height: 300px;
  margin: 0 auto;
  background-color: #f0f0f0;
}
.content-hourTable {
  width: 80%;
  margin: 20px auto;
}
.content-item {
  padding-top: 30px;
  margin-bottom: 60px;
}

.content-box {
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
  font-size: 14px;
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
.btn-nav-wrapper {
  margin-top: 30px;
}
</style>
