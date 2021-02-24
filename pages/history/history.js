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
		const that = this
		wx.showModal({
			title: "是否清除所有记录？",
			showCancel: true,
			success(res){
				if (res.confirm) {
					if(that.data.history){
						wx.clearStorage()
						that.onShow();
					} else {
						wx.showToast({
							title: "没有记录哦",
							icon: 'none',
							duration: 1000,
						})
					}
				}
			}
		})
		
	}
})
