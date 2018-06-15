// 服务器消息中间件
import sha1 from 'sha1'
import getRawBody from 'raw-body'
import * as util from './util'


const wechatMiddle = (opts, reply) => {
  return async(ctx, next) => {
    // require('../wechat/index.js')
    const token = opts.token
    const {
      signature,
      nonce,
      timestamp,
      echostr
    } = ctx.query
    const str = [token, timestamp, nonce].sort().join('')
    const sha = sha1(str)
    console.log('验证signature', sha === signature, sha, signature)
    if (ctx.method === 'GET') {
      if (sha === signature) {
        ctx.body = echostr
      } else {
        ctx.body = '验证signature failed'
      }
    } else if (ctx.method === 'POST') {
      if (sha !== signature) {
        ctx.body = '验证signature failed'
        return false
      }
      console.log('验证signature success')
      const data = await getRawBody(ctx.req, {
        length: ctx.length,
        limit: '1mb',
        encoding: ctx.charset
      })

      const content = await util.parseXML(data)
      const message = util.formatMessage(content.xml)
      ctx.weixin = message

      // console.log('获得数据data：', data)
      // console.log('获得数据content：', content)
      // console.log('获得数据message：', message)
      // console.log('获得数据ctx1：', ctx)
      // 组装回复信息
      await reply.apply(ctx, [ctx, next])
      // console.log('获得数据ctx2：', ctx)
      console.log('****************************这是分割线*****************************')
      const replyBody = ctx.body
      const msg = ctx.weixin
      // 将回复信息拼接成微信的格式
      const xml = util.tpl(replyBody, msg)
      ctx.status = 200
      ctx.type = 'application/xml'
      ctx.body = xml
      console.log('获得数据xml：', xml)
    }
  }
}


export default wechatMiddle
