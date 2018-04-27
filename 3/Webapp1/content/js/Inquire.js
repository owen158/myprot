function Inquire() {
	this.RechargeRecordTypes = [{
		text: '全部',
		value: '',
	}, {
		text: '网银',
		value: '网银',
	}, {
		text: '微信',
		value: '微信',
	}, {
		text: '支付宝',
		value: '支付宝',
	}, {
		text: '银行汇款',
		value: '银行汇款',
	}]
	this.RechargeRecordstatus = [{
		text: '所有',
		value: '',
	}, {
		text: '处理中',
		value: '处理中',
	}, {
		text: '交易失败',
		value: '交易失败',
	}, {
		text: '交易成功',
		value: '交易成功',
	}]
	this.WithdrawalsRecordstatus = [{
		text: '所有',
		value: '',
	}, {
		text: '交易中',
		value: '0',
	}, {
		text: '交易失败',
		value: '2',
	}, {
		text: '交易成功',
		value: '1',
	}]
	this.TransferRecordsType = [{
		text: '全部',
		value: '',
	}, {
		text: '转入平台',
		value: 'OUT',
	}, {
		text: '转入游戏',
		value: 'IN',
	}]
	this.addBand = [{
		value: '1',
		text: '中国农业银行'
	}, {
		value: '2',
		text: '中国银行'
	}, {
		value: '3',
		text: '交通银行'
	}, {
		value: '4',
		text: '中国建设银行'
	}, {
		value: '5',
		text: '中国工商银行'
	}, {
		value: '6',
		text: '中国邮政储蓄银行'
	}, {
		value: '7',
		text: '招商银行'
	}, {
		value: '8',
		text: '浦发银行'
	}, {
		value: '9',
		text: '中国光大银行'
	}, {
		value: '10',
		text: '中信银行'
	}, {
		value: '11',
		text: '平安银行'
	}, {
		value: '12',
		text: '中国民生银行'
	}, {
		value: '13',
		text: '华夏银行'
	}, {
		value: '14',
		text: '广发银行'
	}, {
		value: '15',
		text: '北京银行'
	}, {
		value: '16',
		text: '上海银行'
	}, {
		value: '17',
		text: '兴业银行'
	}]
	this.informationType = [{
			text: '网银转账',
			value: '1'
		},
		{
			text: '支付宝',
			value: '2'
		},
		{
			text: '财付通',
			value: '3'
		},
		{
			text: '微信',
			value: '4'
		},
		{
			text: 'ATM自动柜员机',
			value: '5'
		},
		{
			text: 'ATM现金入款',
			value: '6'
		},
		{
			text: '银行柜台',
			value: '7'
		}
	]
	this.Picker = '';
}
var vm;
Inquire.prototype = {
	Noel: function(el) {
		document.getElementById(el).style.display = 'block';
		return this;
	},
	PopPicker: function(Type, Types, obj) {
		vm = this;
		Types = new mui.PopPicker();
		Types.setData(obj);
		Type.addEventListener('tap', function(event) {
			Types.show(function(items) {
				Type.innerText = items[0].text;
				Type.setAttribute("data-type", items[0].value);
			});
		}, false);
		return vm;
	},
	page: function(html, objs) {
		mui.plusReady(function() {
			var page = plus.webview.getWebviewById(html);
			mui.fire(page, 'Inquire', objs);
			mui.openWindow({
				id: html,
				url: html + '.html',
				show: {
					aniShow: 'pop-in'
				},
				styles: {
					popGesture: 'hide'
				},
				waiting: {
					autoShow: false
				}
			});
		});
	}
}
var bill = new Inquire();