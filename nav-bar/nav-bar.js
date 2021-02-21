const app = getApp()
Component({
  data: {
    statusBarHeight: null,
    ButtonHeight: null,
    System: null,
    Buer: null

  },
  onLoad: function () {

    // star
    wx.getSystemInfo({
      success: (result) => {
        this.setData({ statusBarHeight: result.statusBarHeight })
        let height = wx.getMenuButtonBoundingClientRect().height
        this.setData({ ButtonHeight: height })
        this.setData({ System: result.system })
        this.setData({ Buer: this.data.System.indexOf('iOS') })
      },
    })

    // End
  },

})