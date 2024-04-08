//导入axios
import axios from 'axios'  //引入axios
import { ElMessage } from 'element-plus'
//创建一个axios实例
const instance = axios.create({
    headers: {
        /*  在这里，通过'content-type': 'application/x-www-form-urlencoded'将请求头
            中的content-type设置为application/x-www-form-urlencoded，表示请求体的格式为URL编码形式。 */
        'content-type': 'application/x-www-form-urlencoded'
    },
    /*  withCredentials：这是一个布尔值，指示是否发送跨域请求时携带凭据（例如，发送请求时携带浏览器的cookies）。
        在这里，将其设置为true，表示允许在跨域请求中携带凭据。*/
    withCredentials: true, // 没有配置代理服务器的话，填true就会报错，那怎么解决这个问题呢？
})

// http response 拦截器
instance.interceptors.response.use(
    response => {
        //拦截响应，做统一处理 
        console.log("请求成功")
        if (response.data.isSuccess) {
            return response.data.result
        }else{
            ElMessage.error(response.data.msg) // 展示报错信息
            return response.data.result
        } 
    },
    //接口错误状态处理，也就是说无响应时的处理
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    localStorage.removeItem('NickName');
                    localStorage.removeItem('token'); 
                    ElMessage.warning("登录已失效，请登录后刷新列表！") 
                    break
                case 500:
                    ElMessage.warning("内部服务器错误，请联系系统管理员！") 
                    break
                default:
                    return Promise.reject(error.response.data)   // 返回接口返回的错误信息 
            }
        } 
    })
export default instance