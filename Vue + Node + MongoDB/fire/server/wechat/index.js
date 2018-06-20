import mongoose from 'mongoose'
import config from '../config/index.js'
import { Wechat } from '../wechat-lib/index.js'
import WechatOAuth from '../wechat-lib/oauth.js'
const Token = mongoose.model('Token')
const Ticket = mongoose.model('Ticket')
const wechatConfig = {
  wechat: {
    appID: config.wechat.appID,
    appSecret: config.wechat.appSecret,
    token: config.wechat.token,
    // 外部查询和存取 token 的方法
    getAccessToken: async() => await Token.getAccessToken(),
    saveAccessToken: async(data) => await Token.saveAccessToken(data),
    // 外部查询和存取 ticket 的方法
    getTicket: async() => await Ticket.getTicket(),
    saveTicket: async(data) => await Ticket.saveTicket(data),
  }
}
export const getWechat = () => {
  const wechatClient = new Wechat(wechatConfig.wechat)
  return wechatClient
}
export const getOAuth = () => {
  const oauth = new WechatOAuth(wechatConfig.wechat)
  return oauth
}
console.log('进入wechat/index.js文件')
