// g是Generator的简写
// 将原app.js改写成中间件
'use strict'
var sha1 = require('sha1')
var Wechat = require('./wechat.js')
var getRowBody = require('raw-body')
var util = require('./util.js')
module.exports = function(opts, handler) {
	var wechat = new Wechat(opts)
	return function*(next) {
		// this指的是koa框架
		var that = this
		// console.log(this)
		// 加密
		var token = opts.token
		var signature = this.query.signature
		var nonce = this.query.nonce
		var timestamp = this.query.timestamp
		var echostr = this.query.echostr
		var str = [token, nonce, timestamp].sort().join('')
		var sha = sha1(str)
		// console.log(sha)
		// console.log(this.method, sha, signature)
		if (this.method === 'GET') {
			if (sha == signature) {
				this.body = echostr + ''
			} else {
				this.body = 'wrong'
			}
		} else if (this.method === 'POST') {
			if (sha !== signature) {
				this.body = 'wrong'
				return false
			}
			// 获取微信xml数据
			var data = yield getRowBody(this.req, {
				length: this.length,
				limit: '1mb',
				encoding: this.charset
			})
			// 将xml数据转成json格式
			var content = yield util.parseXMLAsync(data)
			// console.log(data.toString())
			// console.log(content)
			// 格式化json数据
			var message = util.formatMessage(content.xml)
			// console.log(message)
			this.weixin = message
			yield handler.call(this, next)
			wechat.reply.call(this)
			// console.log(wechat)
			console.log(this.body)
		}

	}
}