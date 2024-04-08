// 安装TS
// npm install -g typescript
// 使用TS
// vue add typescript
// 第一个选No，后面全选Yes


// 安装SCSS
// npm install sass-loader node-sass --save
/*  SCSS（Sass）相对于纯 CSS 具有以下几个优势：

变量和嵌套：SCSS 允许定义变量和使用嵌套规则。通过使用变量，你可以在整个样式表中重用和维护相同的值，从而提高可维护性和代码重用性。
嵌套规则使得你可以在样式表中使用层级结构，使代码更具可读性和组织性。

Mixins 和继承：SCSS 提供了 Mixins 和继承的功能。Mixins 允许你定义可重用的代码块，并在需要时将其混合到不同的选择器中。
继承使得你可以从一个选择器继承样式，从而减少代码重复。

导入和模块化：SCSS 允许你将样式表拆分为多个模块，并使用 @import 指令将它们组合在一起。
这样可以提高代码的组织性和可维护性，并使得样式表的管理更加方便。

运算和函数：SCSS 支持数学运算和自定义函数。这使得你可以在样式表中执行简单的算术操作，例如计算宽度或间距。
自定义函数还允许你在样式表中编写自己的逻辑，以便更好地控制样式的生成。

更强大的选择器：SCSS 提供了比纯 CSS 更多的选择器选项，如父选择器（&），兄弟选择器（+ 和 ~）等。
这使得你可以更精确地选择并应用样式，提高了灵活性和可扩展性。

注释和易读性：SCSS 支持多行注释和行内注释，使得你可以更好地注释样式代码，提高代码的可读性和可理解性。
*/

// 安装Element
// npm install element-plus --save

// 安装路由
// npm install vue-router@next --save

// 安装axios
// npm install axios --save 

// 安装vuex
// npm install vuex@next --save

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // lintOnSave:false, //关闭语法检查

  transpileDependencies: true,
  // 告诉 Vue.js 构建工具，在构建项目时将指定的依赖库进行转译（transpile）处理，
  // 以确保它们与项目中使用的现代 JavaScript 语法兼容。

  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:5018/api',
  //       // 允许跨域
  //       changeOrigin: true,
  //       ws: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // }

})
