require('shelljs/global')
const webpack = require('webpack')
const fs = require('fs')
const _ = require('lodash')
const { resolve } = require('path')
const r = url => resolve(process.cwd(), url)
const webpackConf = require('./webpack.conf')
const config = require('./mina-config')
const assetsPath = r('./mina')
rm('-rf', assetsPath)
mkdir(assetsPath)
var renderConf = webpackConf
var entry = () => _.reduce(config.json.pages, (en, i) => {
    en[i] = resolve(process.cwd(), './', `${i}.mina`)
    return en
},{})
renderConf.entry = entry()
renderConf.entry.app = config.app
renderConf.output = {
    path: r('./mina'),
    filename: '[name].js'
}
var compiler = webpack(renderConf)
fs.writeFileSync(r('./mina/app.json'), JSON.stringify(config.json), 'utf8')
compiler.watch({
    aggregateTimeout: 300,
    poll: true
}, (err, stats) => {
    process.stdout.write(stats.toString({
        colors: true,
        moduled: true,
        children: true,
        chunks: true,
        chunkModules: true
    }) + '\n\n')
})
/*
伪代码
rm('rf', assetsPath) // 删除目录
mkdir(assetsPath) // 新建目录
renderConf.entry // 声明入口文件
var compiler = webpack(renderConf) // 声明编译器
compiler.watch({}, (err, stats)) // 监听整个文件的变化
 */