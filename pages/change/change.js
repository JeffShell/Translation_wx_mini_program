//logs.js
const app = getApp()
Page({
  data: {
    curLang: {},
    langList: app.globalData.langList
  },
  onShow: function () {
		console.log('change：')
		console.log(app.globalData.curLang)
    this.setData({ curLang: app.globalData.curLang })

  },
  onTapItem: function(e) {
    let langObj = e.currentTarget.dataset
    wx.setStorageSync('language', langObj)
    this.setData({'curLang': langObj})
    app.globalData.curLang = langObj
    wx.switchTab({ url: '/pages/index/index'})
  }
})
