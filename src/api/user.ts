import axios, { AxiosRequestConfig } from 'axios'

interface PhoneParams {
  phone: number | string
  password: string | any
  countrycode?: string | number
  md5Password?: string | number // 使用password将失效
  captcha?: number | string
}

interface EmailParams {
  email: string | any
  password: string | any
  md5Password?: string | number // 使用password将失效
}

interface QrCodeParams {
  key: string | any
  qrimg?: string | any // 额外返回二维码图片base64图片
}

// 手机号登录
export function phoneLogin(data: PhoneParams): Promise<any> {
  return axios.post('/login/cellphone', data)
}

// 邮箱登录
export function emailLogin(data: EmailParams): Promise<any> {
  return axios.post('/login', data)
}

// 二维码登录
// 二维码登录涉及到3个接口, 调用务必带上时间戳, 防止缓存

// 获取二维码key
export function getQrKey(): Promise<any> {
  return axios.get('/login/qr/key')
}

// 生成二维码
export function generateQrCode(data: QrCodeParams): Promise<any> {
  return axios.get('/login/qr/create?' + data)
}

// 二维码检测扫码状态
// 二维码过期: 800  等待扫码: 801  待确认: 802  授权登录成功(会返回cookies): 803
export function getQrCodeState(data: { key: string }): Promise<any> {
  return axios.get('/login/qr/check?' + data)
}

// 刷脸登录
export function loginBrushFace(): Promise<any> {
  return axios.get('/login/refresh')
}
