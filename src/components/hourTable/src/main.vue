<template>
 <article class="hour-table-box">
   <slot name="header"></slot>

   <slot>
     <section class="hour-table-content">
       <el-form :model="form" ref="form" @validate="showValidateInfo">
         <el-row type="flex" class="tb-row" v-if="form.valueList.length > 0">
           <section class="tb-col" v-for="(item,index) in form.valueList" :key="`${index}`">
             <div class="tb-col-item">
               <div class="item-title">{{item.title}}</div>
               <el-form-item
               v-if="item.type === 'input'"
               :prop="'valueList.' + index + '.value'"
                :rules="[
                    { pattern: item.pattern, message: item.message, trigger: 'blur'}
                    ]"
                :show-message="false"
                class="item-value">
                <el-input
                  v-model="item.value"
                  :key="`a${index}`"
                  placeholder=""
                  size="mini"
                  :max="999999999">
                </el-input>
               </el-form-item>
               <div v-else class="item-value-desc">{{item.value}}</div>
             </div>
           </section>
         </el-row>
       </el-form>
     </section>
   </slot>
   <slot name="footer"></slot>
 </article>
</template>
<script>

/*
* @Author: bensong.long
 * @Date: 2019-07-22
 * @Last Modified by: bensong.long
 * @Last Modified time: 2019-08-26 17:29:52
 * 通用带标题表格组件
 * 示例：
 * 1、通过配置数据使用, 如 type: text => span, input => input，标题配置title, 值配置 value
 * 2、form 表单支持验证 配置 pattern
 * 3、默认一行5列
 * import hourTableTitle from '@/components/HourTableTitle/index.js'
 * <hour-table-title :data-list="valueList" ref="formTableData"></hour-table-title>
 function initDataPrice () {
  let _valueList = []
  let _monthStr = '月份'
  let _priceStr = '居间费（元）'
  let _year = new Date().getFullYear()
  let _month = 0
  for (let i = 1; i <= 15; i++) {
    if (i === 1 || i === 6 || i === 11) {
      _valueList.push({
        title: _monthStr,
        value: _priceStr,
        type: 'text'
      })
    } else {
      ++_month
      _valueList.push({
        title: `${_year}-${String(_month).padStart(2, '0')}`,
        value: '',
        type: 'input',
        pattern: /^[+-]?[0-9]+([.]{1}[0-9]{1,2}){0,1}$/,
        message: '值须为数值，支持2位小数'
      })
    }
  }
  return _valueList
}
*/
export default {
  name: 'hourTableTitle',
  props: {
    dataList: {
      type: Array,
      required: true,
      default: _ => []
    }
  },
  created () {},
  mounted () {},
  components: {},
  computed: {},
  data () {
    return {
      form: {
        valueList: []
      }
    }
  },
  methods: {
    showValidateInfo (val, result, msg) {
      if (!result && !!msg) {
        this.$message.error(msg)
      }
    },
    // 检查
    checkData () {
      let result = false
      this.$refs['form'].validate((valid) => {
        if (!valid) {
          this.$message.error('操作失败，请输入合法的数值！')
        }
        result = valid
      })
      return result
    },
    // clearValidate
    resetFields () {
      this.$refs['form'].resetFields()
    }
  },
  watch: {
    dataList: {
      handler (val) {
        if (Array.isArray(val)) {
          this.form.valueList = val
        }
      },
      immediate: true
    }
  },
  filters: {}
}
</script>

<style lang='scss' scoped>
.hour-table-content {
  box-sizing: border-box;
  border-top: 1px solid;
  border-left: 1px solid;
  @include border-color(#f0f0f0);
  & /deep/ {
    .el-form-item__content {
      line-height: initial;
    }
  }
}

.tb-row {
  box-sizing: border-box;
  flex-wrap: wrap;
  width: 100%;
  .tb-col {
    box-sizing: border-box;
    width: 20%;
    height: 70px;
    line-height: initial;
    & /deep/ {
      .el-form-item {
        margin-bottom: 0;
      }
    }
  }
  .tb-col-item {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid;
    border-right: 1px solid;
    @include border-color(#f0f0f0);
    .item-title {
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid;
      @include border-color(#f0f0f0);
      @include color($--ui-color-blue);
    }
    .item-value, .item-value-desc {
      height: 40px;
    }
    .item-value {
      box-sizing: border-box;
      & /deep/ {
        .el-form-item__content {
          padding: 5px;
        }
        .el-input__inner {
          text-align: center;
          border: 1px solid #f0f0f0;
        }
      }
    }
    .item-value-desc {
      display: flex;
      align-items: center;
      justify-content: center;
      @include border-color();
      @include color($--ui-color-blue);
    }
  }
}
.footer {
  margin-top: 37px;
  text-align: center;
  & /deep/ .btn-save {
    margin-left: 30px;
  }
}
</style>
