/**
 * 演示程序当前的 “注册/登录” 等操作，是基于 “本地存储” 完成的
 * 当您要参考这个演示程序进行相关 app 的开发时，
 * 请注意将相关方法调整成 “基于服务端Service” 的实现。
 **/
(function($, owner) {
	/**
	 * 用户登录
	 **/
	owner.login = function(loginInfo, callback) {
		callback = callback || $.noop;
		loginInfo = loginInfo || {};
		loginInfo.tname = loginInfo.tname || '';
		loginInfo.tpwd = loginInfo.tpwd || '';
		if (!/^[A-Za-z](?![a-zA-Z]+$)[0-9A-Za-z]{4,15}$/.test(loginInfo.tname)) {
			return callback('账号最短为 5 个字符');
		}
		if (!/^[0-9A-Za-z]{6,12}$/.test(loginInfo.tpwd)) {
			return callback('密码最短为 6 个字符');
		}
		callback()
//		var users = JSON.parse(localStorage.getItem('$users') || '[]');
//		console.log(users);
//		var authed = users.some(function(user) {
//			return loginInfo.tname == user.tname && loginInfo.password == user.password;
//		});
//		if (authed) {
//			return owner.createState(loginInfo.tname, callback);
//		} else {
//			return callback('用户名或密码错误');
//		}
	};
	owner.createState = function(obj, callback) {
		var state = owner.getState();
		state.name = obj.userName;
		state.token = obj.userkey;
		owner.setState(state);
		return callback();
	};

	/**
	 * 新用户注册
	 **/
	owner.reg = function(regInfo, callback) {
//		userName:'',//用户名
//      passWord: '',//密码
//      repassWord:'',//确认密码
//      mobileNo:'',//手机号
//      imgcode:'',//验证码
//      reguuid:'',//token
//      qkpwd:'',//取款密码
//      reqkpwd:'',//确认取款密码
//      realName:'',//真实姓名
//      cagent:'',//字段
//      isMobile:1,//类型
//      proxyname:''//
		callback = callback || $.noop;
		regInfo = regInfo || {};
		regInfo.userName = regInfo.userName || '';
		regInfo.passWord = regInfo.passWord || '';
		regInfo.repassWord = regInfo.repassWord || '';
		regInfo.realName = regInfo.realName || '';
		regInfo.mobileNo = regInfo.mobileNo || '';
		regInfo.qkpwd = regInfo.qkpwd || '';
		if (!/^[A-Za-z](?![a-zA-Z]+$)[0-9A-Za-z]{4,12}$/.test(regInfo.userName)) {
			return callback('用户名非数字开头，5-13位字母，数字组成');
		}
		if (!/^[0-9A-Za-z]{6,12}$/.test(regInfo.passWord)) {
			return callback('密码须为,6～12位英文或数字，且符合a~z字元或0~9');
		}
		if (regInfo.repassWord != regInfo.passWord ) {
			return callback('请再次确认登录密码');
		}
		if(!/^[\u4e00-\u9fa5]{2,17}$/.test(regInfo.realName)){
			return callback('真实姓名必须与您的银行账户相同中文');
		}
		if(!/^1[3|4|5|7|8][0-9]{9}$/.test(regInfo.mobileNo)){
			return callback('请输入真实的 手机号 码');
		}
		if(!/^[0-9]{4}$/.test(regInfo.qkpwd)){
			return callback('请正确输入4位数字取款密码');
		}
//		var users = JSON.parse(localStorage.getItem('$users') || '[]');
//		users.push(regInfo);
//		localStorage.setItem('$users', JSON.stringify(users));
//		var users = JSON.parse(localStorage.getItem('$users') || '[]');
		return callback();
	};

	/**
	 * 获取当前状态
	 **/
	owner.getState = function() {
		var stateText = localStorage.getItem('$state') || "{}";
		return JSON.parse(stateText);
	};
	/**
	 * 设置当前状态
	 **/
	owner.setState = function(state) {
		state = state || {};
		localStorage.setItem('$state', JSON.stringify(state));
		//var settings = owner.getSettings();
		//settings.gestures = '';
		//owner.setSettings(settings);
	};

	var checkEmail = function(email) {
		email = email || '';
		return (email.length > 3 && email.indexOf('@') > -1);
	};

	/**
	 * 找回密码
	 **/
	owner.forgetPassword = function(email, callback) {
		callback = callback || $.noop;
		if (!checkEmail(email)) {
			return callback('邮箱地址不合法');
		}
		return callback(null, '新的随机密码已经发送到您的邮箱，请查收邮件。');
	};
	/**
	 * 获取应用本地配置
	 **/
	owner.setSettings = function(settings) {
		settings = settings || {};
		localStorage.setItem('$settings', JSON.stringify(settings));
	}
	/**
	 * 设置应用本地配置
	 **/
	owner.getSettings = function() {
			var settingsText = localStorage.getItem('$settings') || "{}";
			return JSON.parse(settingsText);
		}
		/**
		 * 获取本地是否安装客户端
		 **/
	owner.isInstalled = function(id) {
		if (id === 'qihoo' && mui.os.plus) {
			return true;
		}
		if (mui.os.android) {
			var main = plus.android.runtimeMainActivity();
			var packageManager = main.getPackageManager();
			var PackageManager = plus.android.importClass(packageManager)
			var packageName = {
				"qq": "com.tencent.mobileqq",
				"weixin": "com.tencent.mm",
				"sinaweibo": "com.sina.weibo"
			}
			try {
				return packageManager.getPackageInfo(packageName[id], PackageManager.GET_ACTIVITIES);
			} catch (e) {}
		} else {
			switch (id) {
				case "qq":
					var TencentOAuth = plus.ios.import("TencentOAuth");
					return TencentOAuth.iphoneQQInstalled();
				case "weixin":
					var WXApi = plus.ios.import("WXApi");
					return WXApi.isWXAppInstalled()
				case "sinaweibo":
					var SinaAPI = plus.ios.import("WeiboSDK");
					return SinaAPI.isWeiboAppInstalled()
				default:
					break;
			}
		}
	}
//	owner.ajax=function(src,data,callback){
//		$.ajax(Reg.src+src,{
//  		data:data,
//			dataType:'json',//服务器返回json格式数据
//			type:'post',//HTTP请求类型
//			timeout:10000,//超时时间设置为10秒；
//			headers: {'Referer': Reg.src},              
//			success:function(data){
//				return callback(data)
//			},
//			error:function(xhr,type,errorThrown){
//				//异常处理；
//				console.log(type);
//			}
//		});
//	}
}(mui, window.app = {}));