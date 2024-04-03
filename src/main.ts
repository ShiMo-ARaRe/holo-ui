import { createApp } from 'vue' // 工厂函数，用于创建 Vue 应用
import App from './App.vue' // 根组件
import ElementPlus from 'element-plus' // 导入 ElementPlus
import 'element-plus/dist/index.css' // 导入样式
import router from './routes' // 引入路由
import store from './vuex/store' // 引入仓库


const app = createApp(App) // 创建 Vue 应用实例

app.use(ElementPlus) // 使用 ElementPlus 插件
app.use(router) // 使用路由
app.use(store) //挂载vuex

app.mount('#app') // 将根组件挂载到指定的 DOM 元素上
