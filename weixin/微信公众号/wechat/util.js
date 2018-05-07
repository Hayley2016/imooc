'use strict'
var Promise = require('bluebird')
var xml2js = require('xml2js')
var tpl = require('./tpl.js')
// 将xml数据转成json格式
exports.parseXMLAsync = function(xml) {
	return new Promise(function(resolve, reject) {
		xml2js.parseString(xml, {
			trim: true
		}, function(err, content) {
			if (err) reject(err)
			else resolve(content)
		})
	})
}
// 格式化json数据
function formatMessage(result) {
	var message = {}
	if (typeof result === 'object') {
		var keys = Object.keys(result)
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i]
			var item = result[key]
			if (!(item instanceof Array) || item.length === 0) {
				continue
			}
			if (item.length === 1) {
				var val = item[0];
				if (typeof val === 'object') {
					message[key] = formatMessage(val)
				} else {
					message[key] = (val || '').trim()
				}
			} else {
				message[key] = [];
				for (var j = 0, k = item.length; j < k; j++) {
					message[key].push(formatMessage(item[j]))
				}
			}
		}
	}
	return message
}
exports.formatMessage = formatMessage
exports.tpl = function(content, message) {
	// 简单封装原始数据
	var info = {}
	var type = 'text'
	var fromUserName = message.FromUserName
	var toUserName = message.ToUserName
	if (Array.isArray(content)) {
		type = 'news'
	}
	type = content.type || type
	info.content = content
	info.createTime = new Date().getTime()
	info.toUserName = fromUserName
	info.fromUserName = toUserName
	info.msgType = type
	return tpl.compiled(info)
}