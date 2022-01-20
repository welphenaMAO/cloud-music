// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
if(window && !window.TS) {
  const apiDomain = process.env.NODE_ENV === 'production' ? 'https://api.imjad.cn/cloudmusic/' : 'https://api.imjad.cn/cloudmusic/'

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window['TS'] = {
    api: apiDomain,
    baseURL: apiDomain,
    domain: apiDomain,
    user: {}
  }
}
