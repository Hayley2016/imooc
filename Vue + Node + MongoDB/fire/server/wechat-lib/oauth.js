import request from 'request-promise'
const base = 'https://api.weixin.qq.com/sns/'
const api = {
  authorize: 'https://open.weixin.qq.com/connect/oauth2/authorize?',
  accessToken: base + 'oauth2/access_token?',
  userinfo: base + 'userinfo?'
}
export default class WechatOAuth {
  constructor(opts) {
    this.appID = opts.appID
    this.appSecret = opts.appSecret
  }
  // 请求
  async request(options) {
    options = Object.assign({}, options, { json: true })
    try {
      const response = await request(options)
      console.info(response)
      return response
    } catch (error) {
      console.error('error' + error)
    }
  }
  // 第一步：用户同意授权，获取code
  getAuthorizeURL(scope = 'snsapi_base', target, state) {
    const url = `${api.authorize}appid=${this.appID}&redirect_uri=${encodeURIComponent(target)}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`
    return url
  }
  // 第二步：通过code换取网页授权access_token
  async fetchAccessToken(code) {
    const url = `${api.accessToken}appid=${this.appID}&secret=${this.appSecret}&code=${code}&grant_type=authorization_code`
    const data = await this.request({ url: url })
    return data
  }
  // 第四步：拉取用户信息(需scope为 snsapi_userinfo)
  async getUserInfo(token, openID, lang = 'zh_CN') {
    const url = `${api.userinfo}access_token=${token}&openid=${openID}&lang=${lang}`
    const data = await this.request({ url: url })
    return data
  }
}
