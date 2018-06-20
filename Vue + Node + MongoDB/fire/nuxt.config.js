module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [{
      // scripts里面的脚本都会被加载到页面的head里面
      src: 'http://res.wx.qq.com/open/js/jweixin-1.2.0.js'
    }]
  },
  /*
   ** Global CSS
   */
  css: [{
      src: 'static/sass/base.sass',
      lang: 'sass?indentedSyntax=true'
    },
    {
      src: 'swiper/dist/css/swiper.css'
    }
  ],
  plugins: [
    { src: '~plugins/swiper.js', ssr: false },
    { src: '~plugins/flexible.js', ssr: false }
  ],
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
