import Router from 'koa-router'
import sha1 from 'sha1'
import config from '../config/index.js'
export const router = app => {
  const router = new Router()
  console.log(config)
  router.get('/wechat-hear', (ctx, next) => {
    const token = config.wechat.token
    const {
      signature,
      nonce,
      timestamp,
      echostr
    } = ctx.query
    const str = [token, timestamp, nonce].sort().join('')
    const sha = sha1(str)
    console.log(sha === signature, sha, signature)
    if (sha === signature) {
      ctx.body = echostr
    } else {
      ctx.body = 'failed'
    }
  })
  // router.post('/wechat-hear', (ctx, next) {

  // })
  app.use(router.routes())
  app.use(router.allowedMethods())
}
