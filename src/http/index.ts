import axios from 'axios';
import { ref } from 'vue'
//需要拦截器的地方使用instance对象， 有自定义返回逻辑的地方沿用axios，在组件内部处理返回结果即可
// import instance from './filter'

//获取首页Banner轮播图
const json = ref("/json") // public的json目录下
// const http = ref("http://571ngwj57105.vicp.fun:56266/api") // 公网写法
const http = ref("http://localhost:5018/api") // 没有配置代理服务器时的写法 内网
// const http = ref("/api") // 配置了代理服务器时的写法

export const getBanners = () => {
    return axios.get(json.value + "/banner.json"); // 获取本地数据
}
export const getBanners2 = () => { // 轮播图
    return axios.get(http.value + "/Image/GetImages"); // 获取服务器数据
}
export const getFlowers = (parms: {}) => { // 鲜花列表
    return axios.post(http.value + "/Flower/GetFlowers", parms); 
}
export const Register = (parms: {}) => { // 注册
    return axios.post(http.value + "/Login/Register", parms); 
}
export const getToken = (parms: {}) => { // 根据账号密码判断是否登录成功，成功则颁发token
    return axios.post(http.value + "/Login/Check", parms); 
}

//生成一笔订单
export const CreateOrder = (parms: {}) => {
    //在header里携带token访问后端接口
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage["token"];
    return axios.post(http.value + "/Order/CreateOrder", parms);
}
//获取订单列表
export const GetOrder = () => {
    //在header里携带token访问后端接口
    // console.log("##测试用##",http.value + "/Order/GetOrder"); // 测试用
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage["token"];
    return axios.post(http.value + "/Order/GetOrder");
}