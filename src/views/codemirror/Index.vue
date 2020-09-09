<template>

  <article class="code-mirror-wrap">
    <div class="tool-bar">
      <span class="title">请选择主题</span>
      <el-select v-model="cmTheme" placeholder="请选择" size="small" style="width:150px">
        <el-option v-for="item in cmThemeOptions" :key="item" :label="item" :value="item">
        </el-option>
      </el-select>
      <span class="title">请选择编辑模式</span>
      <el-select v-model="cmEditorMode" placeholder="请选择" size="small" style="width:150px"
        @change="onEditorModeChange">
        <el-option v-for="item in cmEditorModeOptions" :key="item" :label="item" :value="item">
        </el-option>
      </el-select>

      <el-button type="primary" size="small" style="margin-left:10x" @click="getValue">获取内容
      </el-button>
      <el-button type="primary" size="small" style="margin-left:10x" @click="setValue">修改内容
      </el-button>
    </div>

    <section class="code-wrap">
      <code-mirror-editor ref="cmEditor" :cmTheme="cmTheme" :cmMode="cmMode"
      :autoFormatJson="autoFormatJson" :jsonIndentation="jsonIndentation">
    </code-mirror-editor>
    </section>
    
  </article>
</template>

<script>
  import CodeMirrorEditor from "./DemoCodemirror.vue";
  import {
    cmThemeOptions,
    cmEditorModeOptions
  } from './constant'
  export default {
    name: 'codemirrorIndex',
    components: {
      CodeMirrorEditor
    },

    data() {
      return {
        cmTheme: "default", // codeMirror主题
        // codeMirror主题选项
        cmThemeOptions: cmThemeOptions,
        cmEditorMode: "default", // 编辑模式
        // 编辑模式选项
        cmEditorModeOptions: cmEditorModeOptions,
        cmMode: "application/json", //codeMirror模式
        jsonIndentation: 2, // json编辑模式下，json格式化缩进 支持字符或数字，最大不超过10，默认缩进2个空格
        autoFormatJson: true // json编辑模式下，输入框失去焦点时是否自动格式化，true 开启， false 关闭
      };

    },

    methods: {
      // 切换编辑模式事件处理函数
      onEditorModeChange(value) {
        this.cmMode = value === 'json' ? 'application/json' : value
      },
      //获取内容
      getValue() {
        console.log(this.$refs.cmEditor.getValue());
      },
      //修改内容
      setValue() {
        let jsonValue = {
          name: "laiy1211u",
          addr: "广东省深圳市",
          other: "nothing",
          tel: "168888888",
          intro: [{
            item1: "item1"
          }],
          name11: "laiy1211u",
          name12: "laiy1211u",
          name13: "laiy1211u",
          name14: "laiy1211u",
          name15: "laiy1211u",
          name16: "laiy1211u",
          name17: "laiy1211u",
          name18: "laiy1211u",
          name19: "laiy1211u",
          name10: "laiy1211u",
          name112: "laiy1211u",
          name133: "laiy1211u",
          name144: "laiy1211u",
          name155: "laiy1211u",
          name166: "laiy1211u",
          name177: "laiy1211u",
          name188: "laiy1211u",
          name199: "laiy1211u",
          name100: "laiy1211u",
          name1111: "laiy1211u",
          name11111: "laiy1211u",
          name1221: "laiy1211u",
          name122222: "laiy1211u",
          name122223: "laiy1211u",
          name13334: "laiy1211u",
          name1444445: "laiy1211u",
          name155556: "laiy1211u",
          name166667: "laiy1211u",
          name17778: "laiy1211u",
          name188889: "laiy1211u"
        }
        this.$refs['cmEditor'].setValue(JSON.stringify(jsonValue));
      }
    }
  }

</script>
<style>
.CodeMirror {
  min-height: 150px;
  margin-top: 20px;
  overflow-y: auto;
  text-align: left;
  max-height: 300px;
}
</style>

<style lang="scss" scoped>
.code-wrap {
  width: 800px;
  margin: 0 auto;
}
.code-mirror-wrap {
  .tool-bar {
    margin-top: 20px;
    .title {
    margin: 0 15px;
   }
  }
}

</style>
