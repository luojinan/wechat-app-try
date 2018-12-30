//index.js
var app = getApp()
var API = require('../../utils/api.js')

Page({
  data: {
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.jpg',
      '/images/swiper03.jpg'
    ],
    list: []
  },
  //事件处理函数
  bindViewTap() {
  },
  toDetail(e){
    console.log('查看详情',e.currentTarget.dataset.index)
    console.log('查看详情', this.data.list[e.currentTarget.dataset.index].title)
    // 存入本地缓存
    wx.setStorageSync('title', this.data.list[e.currentTarget.dataset.index].title)
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  handleContact(e){
    console.log('免费咨询', e.currentTarget.dataset.index)
  },
  getList(){
    var that = this
    // 使用 Mock
    API.homePage('', function (res) {
      //这里既可以获取模拟的res
      console.log(res)
      that.setData({
        list: res.data
      })
    });

    console.log(this.data.list)
  },
  // 生命周期
  onLoad: function () {
    this.getList()
  }
})
