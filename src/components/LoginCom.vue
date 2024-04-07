<template>
  <!-- :before-close是一个特殊属性，用于在关闭对话框之前执行一个自定义的函数。 -->
  <el-dialog
    v-model="IsShowLogin"
    title="登录"
    width="30%"
    :before-close="handleClose"
  >
    <el-form :model="form" label-width="120px">
      <el-form-item label="用户名">
        <el-input v-model="form.UserName" />
      </el-form-item>
      <el-form-item label="密码">
        <!-- show-password用于在密码输入框中显示一个切换密码可见性的按钮。 -->
        <el-input v-model="form.Password" type="password" show-password />
      </el-form-item>
      <el-form-item label="验证码">
        <el-input v-model="form.ValidateCode" />
        <!-- vaildImages固定为http://localhost:5018/api/Login/GetValidateCodeImages?t= 的形式，也就是说这个验证码图片来自于服务器-->
        <el-image
          style="width: 200px; height: 100px"
          :src="vaildImages"
          @click="ChangeImage"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="Submit">确定</el-button>
        <el-button @click="CloseLogin">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from "vue"; // 计算属性，响应式，挂载后
import { useStore } from "vuex"; //VueX 提供的辅助函数，用于在组件中获取存储实例（store）
import { getToken } from "../http/index";
import { ElMessage } from "element-plus"; // 消息提示框
import { oriVaildImages, guid, FormatToken } from "../global/index"; // 

//每当vaildImages改变，:src="vaildImages"就会自动向服务器发请求，验证码图片就会自动更新
const vaildImages = ref(oriVaildImages.value);
let ValidateKey = "";
//组件加载事件
onMounted(() => {
  const t = guid();
  ValidateKey = t;
  vaildImages.value = oriVaildImages.value + t;
});
//点击切换验证码事件
const ChangeImage = () => {
  const t = guid();
  ValidateKey = t;
  vaildImages.value = oriVaildImages.value + t;
};
//vuex
// useStore 是一个 VueX 提供的辅助函数，用于在组件中获取存储实例（store）。
// 在 VueX 4 中，存储实例通过函数调用的方式获取，而不是直接导入。
// 这是因为 VueX 4 使用了 Vue 3 的 Composition API，而 Composition API 中的函数调用方式更适合在组件中使用。
const store = useStore();
const IsShowLogin = computed(() => store.state.IsShowLogin); // 创建了一个计算属性 IsShowLogin

// 它接受一个名为 done 的回调函数作为参数，该回调函数不接受任何参数并且没有返回值（即 () => void 表示没有返回值）。
// 通过调用 done() 方法来执行传递进来的回调函数，完成对话框的关闭操作。
const handleClose = (done: () => void) => { // 对话框右上角x号绑定的方法
  store.commit("CloseLogin");
  done(); // 关闭对话框
};
const CloseLogin = () => { // 取消按钮绑定的方法
  store.commit("CloseLogin");
};
const form = ref(); // 表单提交的数据
form.value = {
  UserName: "FFF",
  Password: "111111",
  ValidateCode: "", // 验证码
};
const Submit = async () => {
  var data = { // 真正给后端的数据
    UserName: form.value.UserName,
    Password: form.value.Password,
    ValidateKey: ValidateKey, // guid
    ValidateCode: form.value.ValidateCode, // 验证码
  };
  var res = (await getToken(data)).data; //拿到token就表明登陆成功
  if (res.isSuccess) {
    ElMessage({
      message: "登录成功！",
      type: "success",
    });
    let user = JSON.parse(FormatToken(res.result)); // 处理令牌，以获取令牌中携带的用户信息
    localStorage["token"] = res.result; // 将token存放到本地
    //设置全局变量的值
    store.commit("SettingNickName", user.NickName); // 先放到仓库
    //再设置localStorage，保证页面刷新后vuex的值可以从里面读，避免刷新后状态丢失
    localStorage["NickName"] = user.NickName;// 用于登陆成功后展示
    //登录成功后隐藏登录框
    store.commit("CloseLogin");
  } else {
    ElMessage.error(res.msg); // 登录失败，显示错误信息
  }
};
</script>