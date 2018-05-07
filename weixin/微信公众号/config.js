'use strict'
var path = require('path')
var util = require('./libs/util.js')
var wechat_file = path.join(__dirname, './config/wechat.txt')
var config = {
	wechat: {
		appID: 'wxaf1157dd53eb7889', // 测试 wx7d40804a6b10949c // 知了2016 wxaf1157dd53eb7889
		appSecret: 'c32e16ebd9745bf5c8379ef9fcb7cf78', // 测试 8ff4dc0ca54b738b7256567f368fc23b // 知了2016 c32e16ebd9745bf5c8379ef9fcb7cf78
		token: 'qwertyuiop123',
		getAccessToken: function() {
			return util.readFileAsync(wechat_file)
		},
		saveAccessToken: function(data) {
			data = JSON.stringify(data)
			return util.writeFileAsync(wechat_file, data)
		}
	}
}
module.exports = config