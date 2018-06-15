import mongoose from 'mongoose'
import { resolve } from 'path'
import config from '../config/index.js'
import fs from 'fs'
const models = resolve(__dirname, '../database/schema')
fs.readdirSync(models)
  .filter(file => ~file.search(/^[^\.].*js$/)) // 只删选出后缀是js的文件
  .forEach(file => require(resolve(models, file)))

export const database = app => {
  console.log('进入数据库')
  mongoose.set('debug', true)
  mongoose.connect(config.db)
  mongoose.connection.on('disconnected', () => {
    mongoose.connect('数据库链接关闭', config.db)
  })
  mongoose.connection.on('error', err => {
    console.error('数据库链接失败', err)
  })
  mongoose.connection.on('open', async => {
    console.log('数据库链接成功', config.db)
  })
}
