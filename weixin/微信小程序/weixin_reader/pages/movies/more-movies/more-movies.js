const util = require('../../../utils/util.js')
const app = getApp()
// pages/movies/more-movies/more-movies.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slogan: '',
    requestUrl: '',
    totalCount: 0,
    movies: {},
    isEmpty: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const slogan = options.slogan
    this.data.slogan = slogan
    let url = ''
    switch (slogan) {
      case '正在上映的电影-北京':
        url = '/v2/movie/in_theaters'
        break
      case '即将上映的电影':
        url = '/v2/movie/coming_soon'
        break
      case '豆瓣电影Top250':
        url = '/v2/movie/top250'
        break
    }
    const prefixUrl = app.globalData.doubanBase
    this.data.requestUrl = prefixUrl + url
    util.http(prefixUrl + url, this.processDoubanData)
  },
  processDoubanData: function (moviesDouban) {
    let movies = []
    for (let i in moviesDouban.subjects) {
      const item = moviesDouban.subjects[i]
      const title = item.title.length >= 6 ? (item.title.substring(0, 6) + '...') : item.title
      const data = {
        title: title,
        average: item.rating.average,
        coverageUrl: item.images.large,
        movieId: item.id,
        stars: util.converToStarsArray(item.rating.stars)
      }
      movies.push(data)
    }
    let totalMovies = {}
    if (!this.data.isEmpty) {
      totalMovies = this.data.movies.concat(movies)
    } else {
      totalMovies = movies
      this.data.isEmpty = false
    }
    this.setData({
      movies: totalMovies
    })
    wx.hideNavigationBarLoading()
    wx.stopPullDownRefresh()
    this.data.totalCount += 20
  },
  onScrollLower: function () {
    const nextUrl = this.data.requestUrl + '?start=' + this.data.totalCount + '&count=20'
    util.http(nextUrl, this.processDoubanData)
    wx.showNavigationBarLoading()
  },
  onPullDownRefresh: function () {
    console.log('上拉刷新')
    const refreshUrl = this.data.requestUrl + '?start=' + 0 + '&count=20'
    util.http(refreshUrl, this.processDoubanData)
    this.data.isEmpty = true
    this.data.movies = {}
    this.data.totalCount = 0
    wx.showNavigationBarLoading()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.slogan
    })
  },
  onMovieTap: function (event) {
    wx.navigateTo({
      url: '../movies-detail/movies-detail?id=' + event.currentTarget.dataset.id,
    })
  }
})