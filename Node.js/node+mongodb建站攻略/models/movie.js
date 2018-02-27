// 编写模型
var mongoose = require('mongoose');// 引用工具模块
var MovieSchema = require('../schemas/movie.js');// 引用模式
var Movie = mongoose.model('Movie', MovieSchema);// 编译生成模型
// ------------------------模型名称--模式
module.exports = Movie;