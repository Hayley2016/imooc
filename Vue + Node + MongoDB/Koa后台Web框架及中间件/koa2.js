const Koa = require('koa')
const app = new Koa()
const asyncIO = () => {
    return new Promise(resolve => setTimeout(resolve, 500))
}
const mid = () => async(ctx, next) => {
    ctx.body = 'mark2'
    await next()
    ctx.body = ctx.body + ' done2'
}
app.use(mid())
app.use(async(ctx, next) => {
    await asyncIO()
    ctx.body += ' saved2'
    await next()
})
app.listen(3000)