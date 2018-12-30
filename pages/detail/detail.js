// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 修改data中的变量
    this.setData({
      message: wx.getStorageSync('title')
    })
  },

})