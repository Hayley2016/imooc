const app = getApp()
import { Movie } from 'class/Movie.js'
// pages/movies/movies-detail/movies-detail.js
Page({
  data: {

  },
  onLoad: function (options) {
    console.log(options.id)
    const url = app.globalData.doubanBase + '/v2/movie/subject/' + options.id
    const movie = new Movie(url)
    movie.getMovieData((movie) => {
      console.log(movie)
      this.setData({
        movie: movie
      })
    })
  },
  /*查看图片*/
  viewMoviePostImg: function (e) {
    var src = e.currentTarget.dataset.src;
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: [src] // 需要预览的图片http链接列表
    })
  },
})