import axios from 'axios'

axios.interceptors.request.use(function (config) {
    return {
        ...config,
        headers:{
            ...config.headers,
            "authorization":`${window.localStorage.token}`  //添加个token 从本地存储获得的
        }
    }
}, function (error) {
    return Promise.reject(error);
})

export default axios