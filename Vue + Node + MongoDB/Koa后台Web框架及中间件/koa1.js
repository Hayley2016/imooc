var koa = require('koa')
var app = new koa()
var asyncIO = function(cb) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve()
        }, 500)
    })
}
var mid = function() {
    return function*(next) {
        this.body = 'markkoa'
        yield next
        this.body += ' donekoa'
    }
}
app.use(mid())
app.use(function*(next) {
	yield asyncIO()
    this.body += ' savedkoa'
    yield next
})
app.listen(3000)