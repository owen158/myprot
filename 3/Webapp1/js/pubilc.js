Function.prototype.method = function(name, fn) {
	this.prototype[name] = fn;
	return this;
}
var Anim = function() {
	this.MBchannel = [];
	//	this.judgment = false;
	//	this.Error = ''
	this.card = '';
	this.JH = [{
			value: "55",
			text: "55元"
		},
		{
			value: "105",
			text: "105元"
		},
		{
			value: "255",
			text: "255元"
		},
		{
			value: "505",
			text: "505元"
		},
		{
			value: "980",
			text: "980元"
		},
		{
			value: "1505",
			text: "1505元"
		},
		{
			value: "2580",
			text: "2580元"
		},
		{
			value: "3580",
			text: "3580元"
		},
		{
			value: "4980",
			text: "4980元"
		},
		{
			value: "5990",
			text: "5990元"
		},
		{
			value: "7990",
			text: "7990元"
		},
		{
			value: "9990",
			text: "9990元"
		}
	];
	this.MBchannel = [{
			sum: 21,
			title: '网银支付',
			text: "Online payment",
			type: '5',
			src: 'Payment.html',
			icon: 'x-icon x-icon-Online',
			scancode: ''
		},
		{
			sum: 22,
			title: '扫码支付',
			text: "Scan Code",
			type: '44',
			src: 'scancode.html',
			icon: 'x-icon x-icon-ScanCode',
			scancode: ''
		},
		{
			sum: 23,
			title: '微信支付',
			text: "Wechat transfer",
			type: '7',
			src: 'Payment.html',
			icon: 'x-icon x-icon-wechat',
			scancode: 'wx'

		},
		{
			sum: 24,
			title: '支付宝支付',
			text: "Alipay transfer",
			type: '6',
			src: 'Payment.html',
			icon: 'x-icon x-icon-Alipay',
			scancode: 'ali'
		},
		{
			sum: 25,
			title: '财付通支付',
			text: "TenPay transfer",
			type: '8',
			src: 'Payment.html',
			icon: 'x-icon x-icon-tenpay',
			scancode: 'cft'
		},
		{
			sum: 26,
			title: '京东支付',
			text: 'Jingdong pay',
			type: '12',
			src: 'Payment.html',
			icon: 'x-icon x-icon-Jingdong',
			scancode: 'jd'
		},
		{
			sum: 27,
			title: '银联扫码',
			text: 'UnionPay Code',
			type: '10',
			src: 'Payment.html',
			icon: 'x-icon x-icon-UnionPay',
			scancode: 'yl'
		},
		{
			sum: 28,
			title: '银行汇款',
			text: "Bank tranfer",
			type: '66',
			src: 'information.html',
			icon: 'x-icon x-icon-Banktranfer',
			scancode: ''
		}, {
			sum: 29,
			title: '快捷支付',
			text: "Quick payment",
			type: '14',
			src: 'Payment.html',
			icon: 'x-icon x-icon-Quick',
			scancode: 'kj'
		}
	]
	
}

Anim.method('MBchanne', function(Num, Arr) {
	this.MBchannel = [];
	for(let i = 0; i < Num.length; i++) {
		for(var r = 0; r < Arr.length; r++) {
			if(Num[i] === 21) {
				continue;
			}
			if(Num[i] === Arr[r].sum) {
				this.MBchannel.push(Arr[r]);
			}
		}
	}
	return this;
}).method('Payment', function() {
	var fragment = document.createDocumentFragment();
	document.getElementsByClassName('mui-table-view')[0].innerHTML = '';
	var ele = document.getElementsByClassName('mui-table-view')[0];
	this.MBchannel.forEach((e) => {
		var parent = document.createElement('li');
		parent.className = "mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
		var a_ = document.createElement('a');
		a_.setAttribute('dataType', e.type)
		a_.setAttribute('dataSrc', e.src)
		var span_ = document.createElement('span');
		span_.className = e.icon;
		var One = document.createElement('div');
		One.className = 'mui-media-body';
		One.textContent = e.text;
		var Two = document.createElement('div');
		Two.className = 'mui-media-body';
		Two.textContent = e.title;
		a_.appendChild(span_);
		a_.appendChild(One);
		a_.appendChild(Two);
		parent.appendChild(a_);
		fragment.appendChild(parent);
	})
	ele.appendChild(fragment)
	return this;
})

var vm = '';
//银行卡
Anim.method('getUserCard', function(callback) {
	plus.nativeUI.showWaiting();
	app.ajax("User/getUserCard", {}, function(data) {
		plus.nativeUI.closeWaiting();
		if(data.length > 0) {
			callback(data)
		} else {
			callback('error')
		}
	})
}).method('cardHtml', function(data) {
	document.getElementById('showCard').innerHTML = '';
	var fragment = document.createDocumentFragment();
	data.forEach(function(e) {
		var p1 = document.createElement('p');
		p1.textContent = e.card_username;
		var p2 = document.createElement('p');
		p2.textContent = e.card_num;
		var p3 = document.createElement('p');
		p3.textContent = e.bank_name;
		fragment.appendChild(p1);
		fragment.appendChild(p2);
		fragment.appendChild(p3);
	})
	document.getElementById('showCard').appendChild(fragment);
	return this;
}).method('Obtain', function() {
	vm = this;
	app.ajax('User/selectWithdrawConfig', {}, function(Config) {
		if(Config.status == "success") {
			WithdrawConfig = Config;
			document.getElementById('marking_quantity').value = Config.marking_quantity
			document.getElementById('user_quantity').value = Config.user_quantity
			app.setConfig(Config);
			app.getBalance(function(data) {
				document.getElementById('userMoney').textContent = data;
				return vm
			})
		} else if(Config.status == "faild") {
			document.getElementById('marking_quantity').style.display = 'none';
			document.getElementById('user_quantity').style.display = 'none';
			return vm;
		}
	})
});
Anim.method('infoPaymentHtml', function(obj) {
	var fragment = document.createDocumentFragment();
	var ele = document.getElementsByClassName('mui-table-view')[0];
	obj.forEach(function(e, index) {
		var parent = document.createElement('li');
		parent.className = 'mui-table-view-cell';
		parent.setAttribute('data-ID', e.paymentName);
		var a = document.createElement('a');
		a.className = 'mui-navigate-right'
		a.textContent = '支付' + (index + 1) + ' ' + '(支付范围' + e.minquota + '-' + e.maxquota + ')';
		a.setAttribute('data-ID', e.id);
		parent.appendChild(a);
		fragment.appendChild(parent);
	})
	ele.appendChild(fragment);
}).method('PaymentOnline', function(type) {
	if(this.banklist(type) === false) {
		document.getElementById('Bank').style.display = 'none';
	} else {
		BankTypes.setData(this.banklist(type));
		document.getElementById('Bank').style.display = 'block';
		BankType.addEventListener('tap', function(event) {
			BankTypes.show(function(items) {
				BankType.innerText = items[0].text;
				BankType.setAttribute("data-type", items[0].value);
			});
		}, false);
	}
}).method('banklist', function(type) {
	BankType.innerText = '选择银行';
	BankType.setAttribute("data-type", '');
	for(var item in CARDLISTS) {
		if(item === type) {
			return CARDLISTS[item];
		}
	}
	return false;
}).method('PaymentActiveClass', function(el) {
	var els = document.getElementById('GroupList').children;
	for(var i = 0; i < els.length; i++) {
		if(els[i].getAttribute('class').indexOf('mui-selected') != -1) {
			return i;
		}
	}
	return this;
}).method('PaymentOnlineListName', function(el) {
	return el === "DC" ? true : el === "YEE" ? true : el === "JH" ? true : el === "XZF" ? true : el === "JFK" ? true : el === "AK" ? true : el === 'YLX' ? true : false;
}).method('PaymentJudgmentJH', function(type, el) {
	if(type === '6') {
		if(el === 'JH') {
			document.getElementById('JH').style.display = 'block';
			document.getElementById('NOJH').style.display = 'none';
		} else {
			document.getElementById('JH').style.display = 'none';
			document.getElementById('NOJH').style.display = 'block';
		}
	} else {
		document.getElementById('JH').style.display = 'none';
		document.getElementById('NOJH').style.display = 'block';
	}
	return this;
});

//游戏 

Anim.method('HomeGameHtml', function(objs, el) {
	var fragment = document.createDocumentFragment();
	el.innerHTML = '';
	objs.forEach(function(e) {
		var parent = document.createElement('div');
		parent.setAttribute('data-id', e.id)
		parent.setAttribute('data-type', e.type)
		parent.setAttribute('data-mobile', e.mobile)
		parent.setAttribute('data-title', e.title)
		parent.className = 'mui-col-sm-4 box mui-col-xs-4';
		var img = document.createElement('img');
		img.setAttribute('src', e.src);
		parent.appendChild(img);
		fragment.appendChild(parent);
	})
	el.appendChild(fragment);
	return this;
}).method('HomeClickGame', function() { // 点击
	vm = this;
	var obj = new Object();
	mui('.mui-row').on('tap', '.box', function(e) {
		obj.gameType = this.getAttribute('data-type'),
			obj.model = this.getAttribute('data-mobile'),
			obj.gameID = this.getAttribute('data-id');
		if(obj.gameType === 'MG' || obj.gameType === 'HABA') {
			app.openWindow(obj.gameType + 'Game.html', '');
			return;
		}
		vm.GameLInk(obj, this.getAttribute('data-title'))
	});
}).method('GameHtml', function(objs, el) { // MG HABA
	var fragment = document.createDocumentFragment();
	el.innerHTML = '';
	objs.forEach(function(e) {
		var parent = document.createElement('div');
		parent.setAttribute('data-id', e.GameID);
		parent.className = 'mui-col-sm-4 box mui-col-xs-4';
		var div = document.createElement('div');
		div.className = 'bg_game';

		//		bg_game.png
		var IconImg = document.createElement('p');
		IconImg.className = 'IconImgs';
		var img = document.createElement('img');
		img.setAttribute('src', e.src);
		var infoTitle = document.createElement('p');
		infoTitle.className = 'infoTitles';
		infoTitle.textContent = e.title;
		IconImg.appendChild(img);
		//		parent.appendChild(IconImg);
		div.appendChild(infoTitle);
		div.appendChild(IconImg)
		parent.appendChild(div);
		fragment.appendChild(parent);
	})
	el.appendChild(fragment);
	return this;
}).method('clickGame', function(obj, info) { // 点击
	vm = this;
	mui('.mui-row').on('tap', '.box', function(e) {
		obj.gameID = this.getAttribute('data-id');
		vm.GameLInk(obj, info)
	});
}).method('GameLInk', function(objs, text) { // 游戏链接
	plus.nativeUI.showWaiting();
	app.ajax('checklogin.do', {}, function(tokenmsg) {
		if(tokenmsg.msg == "faild") {
			app.check();
		} else if(tokenmsg.msg == "islogin") {
			app.check();
		} else if(tokenmsg.msg == "success") {
			app.setState(tokenmsg);
			app.ajax('User/getToken', {
				userKey: tokenmsg.userkey
			}, function(token) {
				objs.uuid = token.msg;
				app.ajax('User/forwardGame', objs, function(data) {
					plus.nativeUI.closeWaiting();
					if(data.msg == "error") {
						plus.nativeUI.toast('系统错误');
					} else if(data.msg == 'process') {
						plus.nativeUI.toast('维护中');
					} else {
						plus.runtime.openURL(data.msg)
						//						app.Options.url = data.msg
						//						app.Options.id = 'EnterGame'
						//						app.open(app.Options, text);
					}
				})
			})
		}
	})
})

var sum = 0;
//公告
Anim.method('gonggao', function() {
	vm = this;
	app.ajaxs('gonggao.do', {
		cagent: app.cagent
	}, function(data) {
		var fragment = document.createDocumentFragment();
		document.getElementById('Marquee-List').innerHTML = '';
		data.forEach(function(e, index) {
			var parent = document.createElement('li');
			parent.textContent = (index + 1) + ':' + e.rmk;
			fragment.appendChild(parent);
		})
		document.getElementById('Marquee-List').appendChild(fragment);
		vm.testlunbo().notrmk();
	})
}).method('testlunbo', function() {
	var speed = 3000;
	var childrens = document.getElementById('Marquee-List').children;
	document.getElementById('Marquee-List').style.height = childrens.length * 40 + 'px'

	function Marquee() {
		if(childrens.length * 40 - 40 === sum) {
			sum = 0;
			document.getElementById('Marquee-List').style.top = sum + 'px';;
		} else {
			sum += 40;
			document.getElementById('Marquee-List').style.top = -sum + 'px';

		}
	}
	var MyMar = setInterval(Marquee, speed);
	document.getElementById('sliderTest').onmouseover = function() {
		clearInterval(MyMar)
	};
	document.getElementById('sliderTest').onmouseout = function() {
		MyMar = setInterval(Marquee, speed)
	};
	return vm;
}).method('notrmk', function() {
	mui('#Marquee-List').on('tap', 'li', function(e) {
		mui.alert(this.innerText, '系统提示', function() {});
	})
})

var bug = new Anim();