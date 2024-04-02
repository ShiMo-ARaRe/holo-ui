/* eslint-disable */  //用来告诉 ESLint 禁用规则检查，这意味着在这个文件中不会对代码进行 ESLint 规则的检查。
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 这段代码是用于声明 Vue 单文件组件的模块类型的 TypeScript 声明文件。
// 它允许在代码中导入以 .vue 结尾的文件，并为这些文件提供类型信息，使得在开发过程中可以更好地进行类型检查和类型推断。
