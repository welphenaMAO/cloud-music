import http from 'axios'
import queryString from 'query-string'
import { isCanceled } from '@/utils/tools'
import { getToken } from '@/utils/auth'

const { domain, baseUrl: adminBaseUrl, api: apiv2BaseUrl } = window.TS

// API公共请求参数
http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

/**
 * 创建/生成一个 URL.
 * @param {string} uri
 * @param {object|string} query
 * @return {string}
 */
export function createUrl(uri, query = null) {
  let url = `${uri}` // 转换为字符串

  // 不是 URL 则拼接到 API_GATEWAY
  if (!/^https?:\/\//i.test(url)) {
    url = `${apiv2BaseUrl}${url}`
  }

  // 生成查询字符串
  if (query && typeof query === 'object') {
    query = queryString.stringify(query)
  }

  // 查询字符串连接符
  const sep = url.includes('?') ? '&' : '?'

  return query ? `${url}${sep}${query}` : url
}

// 创建一个新实例
const createInstance = (options) => {
  if (typeof options === 'string') {
    options = { baseURL: options }
  } else {
    options = options || {}
  }

  options.headers = {
    Authorization: `Bearer ${getToken()}`,
    ...options.headers || {}
  }

  const instance = http.create(options)
  // 拦截响应器
  instance.interceptors.response.use(
    response => (
      Promise.resolve(response)
    ),
    // 响应错误处理
    error => {
      const { response: { status } } = error
      switch (status) {
        // 没有权限, 直接去登陆
        case 401:
          window.location.href = '/login'
          break
        case 403:
          break
      }
      return Promise.reject(error)
    }
  )

  instance.isCancel = http.isCancel.bind(http)
  instance.CancelToken = http.CancelToken.bind(http)

  return instance
}

// 创建导出API实例
export const apiPrefix = createInstance(adminBaseUrl)








