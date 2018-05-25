const app = getApp()
const util = require('../../utils/util.js')
// movies.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    containerShow: true,
    searchPannelShow: false,
    searchResult: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const intheatersUrl = '/v2/movie/in_theaters' + '?start=0&count=3'
    const comingsoonUrl = '/v2/movie/coming_soon' + '?start=0&count=3'
    const top250Url = '/v2/movie/top250' + '?start=0&count=3'
    this.getMoviesData(intheatersUrl, 'intheaters')
    this.getMoviesData(comingsoonUrl, 'comingsoon')
    this.getMoviesData(top250Url, 'top250')
  },
  getMoviesData: function (url, key) {
    const self = this
    const prefixUrl = app.globalData.doubanBase
    util.http(prefixUrl + url, function (data) {
      self.processDoubanData(data, key)
    })
    // wx.request({
    //   url: prefixUrl + url + '?start=0&count=3',
    //   method: 'GET',
    //   header: {
    //     'Content-Type': 'json'
    //   },
    //   success: function (res) {
    //     self.processDoubanData(res.data, key)
    //   },
    //   fail: function (err) {
    //     console.log(err)
    //   }
    // })
  },
  processDoubanData: function (moviesDouban, key) {
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
    const readyData = {}
    readyData[key] = {
      movies: movies,
      slogan: moviesDouban.title
    }
    this.setData(readyData)
  },
  onMoreTap: function (event) {
    // console.log(event)
    const slogan = event.currentTarget.dataset.slogan
    wx.navigateTo({
      url: 'more-movies/more-movies?slogan=' + slogan,
    })
  },
  onMovieTap:function(event){
    wx.navigateTo({
      url: 'movies-detail/movies-detail?id=' + event.currentTarget.dataset.id,
    })
  },
  onBindFocus: function (event) {
    this.setData({
      containerShow: false,
      searchPannelShow: true
    })
  },
  onCancelImg: function () {
    this.setData({
      containerShow: true,
      searchPannelShow: false,
      searchResult: {}
    })
  },
  onBindBlur: function (event) {
    const prefixUrl = app.globalData.doubanBase
    this.getMoviesData('/v2/movie/search?q=' + event.detail.value, 'searchResult')
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})