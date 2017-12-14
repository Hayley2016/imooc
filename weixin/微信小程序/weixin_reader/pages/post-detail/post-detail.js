var postsData = require('../../data/posts-data.js');
var app=getApp();
// post-detail.js
Page({
  onMusicTap: function (event) {
    var isPlay = this.data.isPlay;
    if (isPlay) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlay: false
      })
    } else {
      var music = postsData.postList[this.data.postId].music;
      wx.playBackgroundAudio({
        dataUrl: music.url,
        title: music.title,
        coverImgUrl: music.coverImg
      })
      this.setData({
        isPlay: true
      })
    }
  },
  onCollectionTap: function (event) {
    var postCollected = wx.getStorageSync('postCollectedA');
    var collected = postCollected[this.data.postData.postId];
    collected = !collected;
    postCollected[this.data.postData.postId] = collected;
    wx.setStorageSync('postCollectedA', postCollected);
    this.setData({
      collected: collected
    });
    wx.showToast({
      title: collected == false ? '收藏成功' : '取消成功',
      duration: 1000,
      icon: 'success'
    });
  },
  onShareTap: function (event) {
    wx.showActionSheet({
      itemList: [
        '分享给微信好友',
        '分享到朋友圈',
        '分享到QQ',
        '现在无法实现分享功能'
      ],
      itemColor: '#405f80',
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    isPlay: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //var globalData = app.globalData;
    var postId = options.id;
    var postData = postsData.postList[postId];
    // console.log(postData)
    this.setData({
      postData: postData,
      postId: postId
    })
    // var postCollectedA = {
    //   1: 'true',
    //   2: 'false'
    // }
    var postCollected = wx.getStorageSync('postCollectedA');
    if (postCollected) {
      var collected = postCollected[postId];
      this.setData({
        collected: collected
      })
    } else {
      var postCollected = {}
      postCollected[postId] = false;
      wx.setStorageSync('postCollectedA', postCollected)
    }
    var that = this;
    wx.onBackgroundAudioPlay(function () {
      that.setData({
        isPlay: true
      })
      app.globalData.g_isplay=true;
      app.globalData.g_currentId = postId;
    })
    wx.onBackgroundAudioPause(function () {
      that.setData({
        isPlay: false
      })
      app.globalData.g_isplay = false;
      app.globalData.g_currentId = null;
    })
    //console.log(app.globalData.g_isplay);
    if (app.globalData.g_isplay && app.globalData.g_currentId == postId){
      that.setData({
        isPlay: true
      })
    }
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