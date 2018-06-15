import Router from 'koa-router'
import { resolve } from 'path'
import config from '../config/index.js'
import reply from '../wechat/reply.js'
import wechatMiddle from '../wechat-lib/middleware.js'
import { signature } from '../controllers/wechat.js'
export const router = app => {
  const router = new Router()
  router.all('/wechat-hear', wechatMiddle(config.wechat, reply))
  router.all('/wechat-signature', signature)
  // 测试微信素材接口
  // router.get('/upload', async(ctx, next) => {
  //   let mp = require('../wechat/index.js')
  //   let wechat = mp.getWechat()
  //   await wechat.handle('uploadMaterial', 'pic', resolve(__dirname, '../../static/img/logo.png'))
  // })
  app.use(router.routes()).use(router.allowedMethods())
}
