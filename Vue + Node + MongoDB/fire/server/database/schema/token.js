const mongoose = require('mongoose')
const Schema = mongoose.Schema
const TokenSchema = new mongoose.Schema({
  name: String,
  token: String,
  expires_in: Number,
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      dafault: Date.now()
    }
  }
})
// 查询前判断
TokenSchema.pre('save', function(next) {
  if (this.isNew) {
    this.meta.createdAt = this.meta.updatedAt = Date.now()
  } else {
    this.meta.updatedAt = Date.now()
  }
  next()
})
// 添加静态方法
TokenSchema.statics = {
  async getAccessToken() {
    const token = await this.findOne({
      name: 'access_token'
    }).exec()
    return token
  },
  async saveAccessToken(data) {
    console.log('进入saveAccessToken', data)
    let token = await this.findOne({
      name: 'access_token'
    }).exec()
    console.log('查询saveAccessToken', token)
    if (token) {
      token.token = data.access_token
      token.expires_in = data.expires_in
    } else {
      console.log('创建Token实例')
      token = new Token({
        name: 'access_token',
        token: data.access_token,
        expires_in: data.expires_in
      })
      console.log('获得Token实例', token)
    }
    try {
      await token.save()
      console.log('存储成功')
    } catch (e) {
      console.log('存储失败')
      console.log(e)
    }
    return data
  }
}
// 拿到Token的数据模型
const Token = mongoose.model('Token', TokenSchema)
