<template>
  <!-- :before-close是一个特殊属性，用于在关闭对话框之前执行一个自定义的函数。 -->
  <el-dialog
    v-model="IsShowRegister"
    title="注册"
    width="480px"
    :before-close="handleClose"
  >
    <el-form :model="form" label-width="120px">
      <el-form-item label="昵称">
        <el-input v-model="form.NickName" />
      </el-form-item>
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
        <el-button @click="CloseRegister">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>


<script lang="ts" setup>
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { Register } from "../http/index";
import { ElMessage } from "element-plus";
import { oriVaildImages, guid, FormatToken } from "../global/index";

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

//vuex 这下面和登录的逻辑差不多
const store = useStore();
const IsShowRegister = computed(() => store.state.IsShowRegister);
const handleClose = (done: () => void) => {
  store.commit("CloseRegister");
  done();
};
const form = ref();
form.value = {
  NickName: "",
  UserName: "",
  Password: "",
};
const Submit = async () => {
  console.log(form.value);
  var data = {
    UserName: form.value.UserName,
    NickName: form.value.NickName,
    Password: form.value.Password,
    ValidateKey: ValidateKey,
    ValidateCode: form.value.ValidateCode,
  };
  var res = (await Register(data)).data;
  if (res.isSuccess) {
    ElMessage({
      message: "注册成功！",
      type: "success",
    });
    let user = JSON.parse(FormatToken(res.result)); // 处理令牌，以获取令牌中携带的用户信息
    localStorage["token"] = res.result; // 将token存放到本地
    //设置全局变量的值
    store.commit("SettingNickName", user.NickName); // 先放到仓库
    //再设置localStorage，保证页面刷新后vuex的值可以从里面读，避免刷新后状态丢失
    localStorage["NickName"] = user.NickName;
    //登录成功后隐藏注册框
    store.commit("CloseRegister"); // 上面逻辑就是注册成功后自动登录
  } else {
    ElMessage.error(res.msg);
  }
};
const CloseRegister = () => {
  store.commit("CloseRegister");
};
</script>