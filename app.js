// app.js
App({
	onLaunch: function(){
		this.globalData.curLang = wx.getStorageSync("curLang") || this.globalData.langList[0]
	},
	globalData: {
		onChange(event) {
			this.setData({ active: event.detail });
		},
		curLang: {},
		langList: [
			{
				'chs': '英文',
				'lang': 'en',
				'index': 0
			},
			{
				'chs': '中文',
				'lang': 'zh',
				'index': 1
			},
			{
				'chs': '日语',
				'lang': 'jp',
				'index': 2
			},
			{
				'chs': '韩语',
				'lang': 'kor',
				'index': 3
			},
			{
				'chs': '法语',
				'lang': 'fra',
				'index': 4
			},
			{
				'chs': '西班牙语',
				'lang': 'spa',
				'index': 5
			},
			{
				'chs': '阿拉伯语',
				'lang': 'ara',
				'index': 6
			},
			
		]
	}
})
