'use strict'
var Koa = require('koa')
//var path = require('path')
var wechat = require('./wechat/g.js')
var config = require('./config.js')
var weixin = require('./weixin')
// var util = require('./libs/util.js')
// var wechat_file = path.join(__dirname, './config/wechat.txt')
// var config = {
// 	wechat: {
// 		appID: 'wxaf1157dd53eb7889',
// 		appSecret: 'c32e16ebd9745bf5c8379ef9fcb7cf78',
// 		token: 'qwertyuiop123',
// 		getAccessToken: function() {
// 			return util.readFileAsync(wechat_file)
// 		},
// 		saveAccessToken: function(data) {
// 			data = JSON.stringify(data)
// 			return util.writeFileAsync(wechat_file, data)
// 		}
// 	}
// }
var app = new Koa();
app.use(wechat(config.wechat, weixin.reply))
app.listen(1234)
console.log('Listening：1234')
// 启动本地服务 node --harmony app.js
// 和谐(harmony)模式的NodeJS https://www.web-tinker.com/article/20360.html