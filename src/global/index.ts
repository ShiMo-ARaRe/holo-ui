import { ref } from 'vue'
const RequestUrl = ref("http://localhost:5018/api");  // 用于获取服务器数据
const RequestJson = ref("/json"); // 用于获取本地数据（public下的json目录

const guid = () => {
    // 该函数用于生成一个全局唯一标识符（GUID）。在函数体内部，通过使用 Math.random()、位运算符和字符串处理方法，生成一个随机的唯一标识符。
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

const oriVaildImages = ref(RequestUrl.value + "/Login/GetValidateCodeImages?t="); // 是个定值，关键看t

const FormatToken = (res: string) => {
    // 在函数体内部，使用了一系列字符串处理方法，如替换、拆分和解码，来对令牌字符串进行操作和转换。最终，返回一个格式化后的令牌字符串。
    return decodeURIComponent(escape(window.atob(res.replace("-", "+").replace("_", "/").split('.')[1])));
    /*  使用 replace 函数将令牌字符串中的 "-" 替换为 "+"，将 "_" 替换为 "/"。
        这是因为在标准 Base64 编码中，"+" 和 "/" 分别用于替换 "+" 和 "/"，以便在 URL 中传递编码的数据时不产生冲突。
        
        使用 split 函数分割令牌字符串，并选择第二部分（索引为 1）。
        令牌通常由三部分组成，使用点号进行分隔，这里选择对第二部分进行解码。
        
        使用 window.atob 函数对选定的部分进行 Base64 解码。atob 函数是 JavaScript 的内置函数，用于解码 Base64 编码的字符串。
        
        使用 escape 函数对解码后的字符串进行转义，以确保它可以安全地在 URL 中传递。
        最后，使用 decodeURIComponent 函数对转义后的字符串进行解码，并将解码结果返回。 */
    
    /*  令牌由三个部分组成，使用点号进行分隔。这三个部分分别是：
        Header（头部）：包含有关令牌的元数据和算法信息的部分。
        Payload（负载）：包含有关令牌的主要信息的部分。这通常是令牌的核心内容，例如用户ID、角色、权限等。
        Signature（签名）：用于验证令牌完整性和真实性的部分。签名使用私钥对头部和负载进行加密生成，验证时使用公钥进行解密和验证。*/
    }

export {
    RequestUrl, RequestJson, oriVaildImages, guid, FormatToken
}