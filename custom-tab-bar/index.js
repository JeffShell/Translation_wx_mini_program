Component({
  data: {
    active: 0,
		list: [
			{	
				pagePath: "/pages/index/index",
				text: "翻译"
			},
			{
				pagePath: "/pages/history/history",
				text: "历史"
			}
		]
  },
	methods: {
    onChange: function (event) {
      const data = event.currentTarget.dataset
      const url = data.path
			const that = this
			wx.switchTab({url})
			that.setData({active: data.index})
		}
  }
});