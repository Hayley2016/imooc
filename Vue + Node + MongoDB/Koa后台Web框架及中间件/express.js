var express = require('express')
var app = express()
var asyncIO = function(cb) {
    setTimeout(function() {
        cb()
    }, 500)
}
var mid = function(req, res, next) {
    req.body = 'mark'
    next()
    // res.send(req.body + ' done')
}
// 使用中间件
app.use(mid)
app.use(function(req, res, next) {
    // 内联中间件
    asyncIO(function() {
        // express回调式的中间件形式有缺陷  异步流程并没有阻止进程 直接返回了 mark done
        req.body += ' saved'
        res.send(req.body + ' done')
        // next()
    })
})
app.listen(3000)
// 回调层次问题 若异步个数多时，尤其是有并发的异步，层层的回调会让测试和维护变得非常困难，
// 特别是异常的处理，都交给了下一层的控制单元来处理，不太透明，
// 所以说express的回调式的中间件形式一直让很多工程师不爽
// 再加上JavaScript的语言支持、特性强大，koa横空出世