import axios, { AxiosRequestConfig } from 'axios'
// import NProgress from 'nprogress'
// import qs from 'qs'

// 允许跨域设置，不然可能因为拿不到cookie而报错
axios.defaults.withCredentials = true
// 这里的地址就是刚刚启动起来的服务器地址
axios.defaults.baseURL = 'http://localhost:3000/'

axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    const token = window.sessionStorage.getItem('token')

    if(token) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      config.headers.token = token
    }
    return config
  },
  (error) => {
    return error
  }
)

// 请求拦截
// axios.interceptors.request.use(
//   (config): AxiosRequestConfig<any> => {
//     // meth 没有这个属性, 已在声明文件中加
//     if(config.meth === "post" && !(config.data instanceof FormData)) {
//       config.headers = {
//         "Content-Type": "application/x-www-form-urlencoded"
//       }
//       // 这里是，后端要求传数组的时候做的设置
//       config.data = qs.stringify(config.data, { arrayFormat: 'repeat' })
//     }
//     return config
//   }, error => {
//     return Promise.reject(error)
//   }
// )

// 响应拦截
axios.interceptors.response.use(
  res => {
    // 这里根据返回的状态码做一些拦截操作
    return res
  }, err => {
    return Promise.reject(err)
  }
)

export default axios
