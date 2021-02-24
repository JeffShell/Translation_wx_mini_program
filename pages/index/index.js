// 获取应用实例
import {translate} from '../../utils/api.js'
const app = getApp()

Page({
	data:{
		query: '',
		hideClearIcon: true,
		result: [],
		curLang: {},
		active: 0,
		numberWords: 0,
		canUse: true
	},  
	onLoad: function(options){
		if(options.query){
			this.setData({query: options.query})
		}
	},
	onShow: function(){
		if(this.data.curLang.lang !== app.globalData.curLang.lang){
			this.setData({curLang: app.globalData.curLang})
			this.onConfirm()
		}
	},
	onInput: function(e){
		let word = e.detail.value
		this.setData({'numberWords': word.length})
		this.setData({'query': word})
		if(this.data.query.length > 0){
			this.setData({'hideClearIcon': false})
		} else {
			this.setData({'hideClearIcon': true})
		}
	},
	onTapClose: function(){
		this.setData({query: '', hideClearIcon: true})
	},
	onConfirm: function(){
		if (!this.data.query) return
		translate(this.data.query, {from: 'auto', to: this.data.curLang.lang}).then(res => {
			this.setData({'result': res.trans_result})
			let history = wx.getStorageSync('history') || []
			history.unshift({query: this.data.query, result: res.trans_result[0].dst})
			history.length = history.length > 10 ? 10 : history.length
			wx.setStorageSync('history', history)
		})
	},
	throttle: function(){
		if(this.data.canUse){
			this.onConfirm.apply(this, arguments)
			this.setData({"canUse": false})
			setTimeout(()=>{
				this.setData({"canUse": true})
			}, 1500)
		}
	}
})
