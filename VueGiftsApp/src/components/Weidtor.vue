<template>
  <div>
    <div ref="editor" style="text-align:left" class="eidtor">

    </div>
    <button class="finish" @click="$emit('getcontent',{htmls:this.editorContentHTML,texts:this.editorContentTXT})">完成啦！</button>
  </div>
</template>

<script>
  import E from 'wangeditor'
  export default {
    name: 'weditor',
    data () {
      return {
        editorContentHTML: '',
        editorContentTXT:''
      }
    },
    methods: {
      getContent: function () {

      }

    },
    mounted() {
      var editor = new E(this.$refs.editor);
      editor.customConfig.menus = [
        'bold',  // 粗体
        'fontSize',  // 字号
        'fontName',  // 字体
        'italic',  // 斜体
        'underline',  // 下划线
        'strikeThrough',  // 删除线
        'foreColor',  // 文字颜色
        'backColor',  // 背景颜色
        'link',  // 插入链接
        'justify',  // 对齐方式
        'quote',  // 引用
        'emoticon',  // 表情
        'image',  // 插入图片
        'code',  // 插入代码
        'undo',  // 撤销
        'redo'  // 重复
      ];
      editor.customConfig.onchange = (html) => {

        this.editorContentHTML = html;
        this.editorContentTXT=editor.txt.text()
      }
      editor.create()
    }
  }
</script>

<style scoped>
  .eidtor{
    width:600px;
    margin: 10px auto;
    background-color: white;
  }
  .finish{
    width: 100px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    color: #8a8a8a;
    margin-left: 250px;
  }
</style>
