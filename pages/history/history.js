// 获取应用实例
const app = getApp()

Page({
	data: {
		history: []
	},
	onShow: function(){
		this.setData({history: wx.getStorageSync('history')})
	},
	onTapItem: function(e) {
		wx.reLaunch({
			url: `/pages/index/index?query= ${e.currentTarget.dataset.query}`
		})
	},
	onClearItem: function(){
		wx.showModal({
			title: "是否清除所有记录？",
			showCancel: true,
			success(res){
				if (res.confirm) {
					wx.startPullDownRefresh({
						complete(){
							wx.clearStorage()
						}
					})
					this.onShow();
				} else if (res.cancel) {
				  console.log('用户点击取消')
				}
			}
		})
		
	}
})
