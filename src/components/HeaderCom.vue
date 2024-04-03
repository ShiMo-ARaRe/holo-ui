<template>
  <div>
    <el-row>
      <el-col :span="24">
        <ul>
          <li v-if="store.state.NickName == undefined" @click="OpenLogin">
            <!-- underline="false" 是用来控制链接文本是否显示下划线的属性。 -->
            <el-link :underline="false">登录</el-link>
          </li>
          <li v-if="store.state.NickName == undefined" @click="OpenRegister">
            <el-link :underline="false">注册</el-link>
          </li>
          <li v-if="store.state.NickName != undefined"> 
            <el-link :underline="false">{{store.state.NickName}}</el-link>
          </li>
          <li v-if="store.state.NickName != undefined">
            <el-link :underline="false" href="/personcenter">个人中心</el-link>
          </li>
          <li v-if="store.state.NickName != undefined" @click="LogOut">
            <el-link :underline="false">注销</el-link>
          </li>
        </ul>
      </el-col>
    </el-row>


    <el-row>
      <!-- 共24块，每个col占8块，相当于平分 -->
      <el-col :span="8">
        <el-link :underline="false" href="/">
          <!-- 指定了图片的适应方式为 contain。这意味着图片将被缩放以适应容器，同时保持其原始比例，直到完全适应容器为止。 -->
          <el-image
            style="width: 200px; height: 100px"
            src="/images/zhaoxi_logo.png"
            fit="contain"
          ></el-image>
        </el-link>
      </el-col>
      <el-col :span="8">
        <!-- 设置输入框的尺寸为大号,输入框中的占位符文本为 "商品搜索",在输入框的值发生变化时触发 change 事件-->
        <el-input
          v-model="SearchInput"
          class="w-50 m-2"
          style="margin-top: 30px"
          size="large"
          placeholder="商品搜索"
          :suffix-icon="Search"
          @change="change"
        />
        <!-- 将输入框的后缀图标设置为 Search。这里使用了动态绑定，:suffix-icon 的值会被解析为 Vue 实例中的 Search 变量的值。 -->
      </el-col>
      <el-col :span="8">
        <div class="service-item">
          <a id="header-chat" href="javascript:void(0);">
            <span class="icon icon-headset"></span>
            <span class="service-item-info">在线客服</span>
          </a>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <!-- 一个行（<el-row>）和一个列（<el-col>）。在列中，有一个水平导航菜单（<el-menu>)。
         <el-col>具有一个属性:span="18"，表示该列占用父容器的宽度的18个网格单元。这意味着它将占用父容器宽度的18/24，即3/4。 -->
      <el-col :span="18">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-header"
          mode="horizontal"
          router
        >
        <!-- :default-active="activeIndex"：这是一个动态绑定的属性，通过:前缀表示，将activeIndex变量的值绑定到default-active属性上。
          activeIndex是一个变量，用于指定默认选中的菜单项的索引。
          class="el-menu-header"：这个属性用于设置菜单的样式类为el-menu-header。你可以在CSS文件中定义这个类，以自定义菜单的样式。
          mode="horizontal"：这个属性用于设置菜单的模式。在这个例子中，菜单的模式被设置为水平模式，即菜单项水平排列。
          router：这个属性指示菜单将与Vue Router集成，以支持路由导航。当用户点击菜单项时，它将根据路由配置导航到相应的页面。 -->
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/loveflower">爱情鲜花</el-menu-item>
          <el-menu-item index="/birthdayflower">生日鲜花</el-menu-item>
          <el-menu-item index="/friendflower">友情鲜花</el-menu-item>
          <el-menu-item index="/weddingflower">婚庆鲜花</el-menu-item>
        </el-menu>
      </el-col>
      <!-- 创建一个具有水平导航菜单的网页布局，用于在网页中导航到不同的页面。每个菜单项都具有一个索引，点击不同的菜单项将导航到相应的页面。 -->
    </el-row>

    <LoginCom />
    <RegisterCom />
  </div>
</template>

<script setup>
import { ElMessage } from "element-plus"; // 消息提示组件
import { ref } from "vue"; // 响应式
import { onMounted } from "vue"; // 挂载完毕后执行

import LoginCom from "./LoginCom.vue";
import RegisterCom from "./RegisterCom.vue";
import { useStore } from 'vuex' // VueX 提供的辅助函数，用于在组件中获取存储实例（store）

const store = useStore()
const OpenLogin = () => {
  store.commit('OpenLogin')
}
const OpenRegister = () => {
  store.commit('OpenRegister')
}
const LogOut=()=>{
  //清理vuex状态 //清理localStorage
  localStorage.removeItem('NickName');
  localStorage.removeItem('token');
  store.commit('SettingNickName', undefined)
}

//属性
const SearchInput = ref(""); // 默认搜索框为空
const activeIndex = ref('/'); // 默认选中首页

//方法
const change = () => {
  // 使用 Element UI 的消息提示组件 ElMessage 来显示一个消息提示的代码。
  ElMessage("你搜索的是：" + SearchInput.value);
};

onMounted(() => {
  activeIndex.value = window.location.pathname; // 根据当前路径设置activeIndex的值，不设置的话刷新会出现一点bug
});

</script>

<style lang="scss">
ul {
  list-style: none; //移除列表项前面的默认符号
  padding-left: 80%; //设置了列表项容器的左内边距为父容器宽度的 80%
  li {
    // 嵌套的规则，用于设置列表项（li）的样式
    float: left; // 浮动
    margin-left: 20px;
  }
}
.service-item {
  display: inline-block;
  font-size: 14px;
  color: #71797f;
  vertical-align: top;
  line-height: 47px;
  margin-top: 25px;
  margin-left: -200px;
  a {
    text-decoration: none;
    color: inherit;
  }
  .icon-headset {
    background-position: -34px -102px;
    width: 24px;
    height: 24px;
    margin-top: 12px;
    margin-right: 8px;
    display: inline-block;
    background-image: url(//localhost:8080/images/common_sprite.png);
    background-repeat: no-repeat;
    vertical-align: top;
  }
}
.el-menu-header {
  margin-left: 30% !important; //设置.el-menu-header的左外边距为30%。!important用于提高样式的优先级，确保这个样式规则被应用。
  border-bottom: 0px !important; //设置.el-menu-header的下边框为0像素宽度，即隐藏下边框。
  .el-menu-item {
    width: 170px !important; //设置.el-menu-item的宽度为170像素。
  }
}
</style>