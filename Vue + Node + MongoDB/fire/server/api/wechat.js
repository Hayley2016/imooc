import { getWechat, getOAuth } from '../wechat'
// 拿到微信实例
const wechatApi = getWechat()
export async function getSignatureAsync(url) {
  // 先获得token
  const data = await wechatApi.fetchAccessToken()
  const token = data.access_token
  // 根据token获得临时票据 ticket
  const ticketData = await wechatApi.fetchTicket(token)
  const ticket = ticketData.ticket

  let params = wechatApi.sign(ticket, url)
  params.appId = wechatApi.appID

  return params
}
export function getAuthorizeURL(...args) {
  const oauth = getOAuth()
  return oauth.getAuthorizeURL(...args)
}
export async function getUserByCode(code) {
  const oauth = getOAuth()
  const data = await oauth.fetchAccessToken(code)
  const user = await oauth.getUserInfo(data.access_token, data.openid)
  return user
}
