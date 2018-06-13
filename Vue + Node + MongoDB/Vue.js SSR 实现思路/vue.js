// vueSSR的实现流程
// 伪代码
// app.js
const app = new Vue({})
const store new Vuex.Store({})
const router = new Router({
    routers: [
        { path: '/p1', component: Page1 },
        { path: '/p2', component: Page2 },
        { path: '/p3', component: Page3 }
    ]
})
// entry-server.js // 服务器入口文件
export default context = {
    router.push(context.url)
    return Promise.all(router.getMatchedComponents().map(
        component => {
            if (component.fetchServerData) {
                return component.fetchServerData(store)
            }
        }
    )).then(() => {
        context.state = store.state
        return app
    })
}
store.replaceState(window.__INITISL_STATE__)
app.$mount('#app')