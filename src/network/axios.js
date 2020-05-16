import axios from 'axios'

export function request (config) {
    // 创建 axios 实例
    const instance = axios.create({
        baseURL: 'http://localhost:3000',
        timeout: 5000,
        withCredentials: true // 跨域
    })

    instance.interceptors.request.use(res => {
        // 为请求头对象添加 Token验证的 Authorization字段
        // res.headers.Authorization = window.sessionStorage.getItem('token')
        return res
    }, err => {
        console.log(err);
    })

    // 响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })

    // 发送网络请求
    return instance(config)
}

