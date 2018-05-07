'use strict'
// 生成器函数
var config = require('./config.js')
var Wechat = require('./wechat/wechat.js')
var wechatApi = new Wechat(config.wechat)
exports.reply = function*(next) {
	var message = this.weixin
	if (message.MsgType === 'event') {
		if (message.Event === 'subscribe') {
			if (message.EventKey) {
				console.log('扫二维码进来：' + message.EventKey + ' ' + message.ticket)
			}
			this.body = 'haha，你订阅了当前微信号\r\n'
		} else if (message.Event === 'unsubscribe') {
			this.body = ''
			console.log('无情取关')
		} else if (message.Event === 'LOCATION') {
			this.body = '您上报的位置是：' + message.Latitude + '' + message.Longitude + '-' + message.Precision
		} else if (message.Event === 'CLICK') {
			this.body = '您点击了菜单：' + message.EventKey
		} else if (message.Event === 'SCAN') {
			console.log('关注后扫二维码' + message.EventKey + ' ' + message.Ticket)
			this.body = '看到你扫了一下哦'
		} else if (message.Event === 'VIEW') {
			this.body = '你点击了菜单中的链接：' + message.EventKey
		}
	} else if (message.MsgType === 'text') {
		var reply = '谢谢惠顾'
		var content = message.Content
		if (content === '1') {
			reply = '111'
		} else if (content === '2') {
			reply = '222'
		} else if (content === '3') {
			reply = [{
				'title': '这是第一篇文章',
				'description': 'qwertyuio',
				'picUrl': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524896738007&di=69947cc3e53692c871509f8c515d163b&imgtype=0&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201312%2F03%2F20131203153359_RhVWs.jpeg',
				'url': 'https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140543'
			}]
		} else if (content === '4') {
			var data = yield wechatApi.uploadMaterial('image', __dirname + '/1.jpg')
			reply = {
				type: 'image',
				mediaId: data.media_id
			}
		} else if (content === '5') {
			var data = yield wechatApi.uploadMaterial('video', __dirname + '/1.mp4')
			reply = {
				type: 'video',
				title: '测试回复视屏内容',
				description: 'description',
				mediaId: data.media_id
			}
		} else if (content === '6') {
			var data = yield wechatApi.uploadMaterial('image', __dirname + '/1.jpg')
			reply = {
				type: 'music',
				title: '测试回复music内容',
				description: '音乐description',
				musicUrl: 'https://music.163.com/outchain/player?type=2&id=109566&auto=1&height=66',
				thumbMediaId: data.media_id
			}
		} else if (content === '7') {
			var data = yield wechatApi.uploadMaterial('image', __dirname + '/1.jpg', {
				type: 'image'
			})
			console.log(data)
			reply = {
				type: 'image',
				mediaId: data.media_id
			}
		} else if (content === '8') {
			var data = yield wechatApi.batchMaterial()
			console.log(data)
			reply = data
		} else if (content === '9') {
			var data = yield wechatApi.countMaterial()
			console.log(data)
			reply = data
		}
		this.body = reply
	}
	yield next
}