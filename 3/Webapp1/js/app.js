/**
 * 演示程序当前的 “注册/登录” 等操作，是基于 “本地存储” 完成的
 * 当您要参考这个演示程序进行相关 app 的开发时，
 * 请注意将相关方法调整成 “基于服务端Service” 的实现。
 **/
//?_bid=278&_wvx=10&_wvxBclr=0xf7f7f8
(function($, owner) {
	owner.linkSrc = 'http://192.168.0.61:393/XPJ/'
	owner.cagent = 'BL1'
	owner.Client = 'https://f18.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=880208&configID=73642&jid=2412543991&s=1'
	owner.Options = {
		id: '',
		url: ''
	}
	owner.CARDLISTS = {
		QFT: [{
				value: "102",
				text: "中国工商银行"
			},
			{
				value: "103",
				text: "中国农业银行"
			},
			{
				value: "104",
				text: "中国银行"
			},
			{
				value: "105",
				text: "中国建设银行"
			},
			{
				value: "302",
				text: "中信银行"
			},
			{
				value: "309",
				text: "兴业银行"
			},
			{
				value: "403",
				text: "中国邮政储蓄"
			},
			{
				value: "308",
				text: "招商银行"
			},
			{
				value: "306",
				text: "广发银行"
			},
			{
				value: "303",
				text: "光大银行"
			},
			{
				value: "307",
				text: "平安银行"
			},
			{
				value: "301",
				text: "交通银行"
			},
			{
				value: "305",
				text: "民生银行"
			},
			{
				value: "370",
				text: "北京银行"
			},
			{
				value: "304",
				text: "华夏银行"
			},
			{
				value: "390",
				text: "南京银行"
			},
			{
				value: "502",
				text: "东亚银行"
			},
			{
				value: "310",
				text: "浦发银行"
			},
			{
				value: "420",
				text: "上海银行"
			},
			{
				value: "430",
				text: "兰州银行"
			},
			{
				value: "319",
				text: "徽商银行"
			},
			{
				value: "450",
				text: "青岛银行"
			},
			{
				value: "460",
				text: "浙江银行"
			},
			{
				value: "201",
				text: "国家开发银行"
			},
			{
				value: "202",
				text: "中国进出口银行"
			},
			{
				value: "203",
				text: "中国农业发展银行"
			},
			{
				value: "318",
				text: "渤海银行"
			},
			{
				value: "402",
				text: "北京农商银行"
			},
			{
				value: "512",
				text: "宁波银行"
			},
			{
				value: "514",
				text: "杭州银行"
			}
		],
		GC: [{
				value: "102",
				text: "中国工商银行"
			},
			{
				value: "103",
				text: "中国农业银行"
			},
			{
				value: "103",
				text: "中国农业发展银行"
			},
			{
				value: "104",
				text: "中国银行"
			},
			{
				value: "105",
				text: "中国建设银行"
			},
			{
				value: "106",
				text: "中信银行"
			},
			{
				value: "309",
				text: "兴业银行"
			},
			{
				value: "403",
				text: "中国邮政储蓄银行"
			},
			{
				value: "310",
				text: "招商银行"
			},
			{
				value: "320",
				text: "广发银行"
			},
			{
				value: "340",
				text: "平安银行"
			},
			{
				value: "350",
				text: "交通银行"
			},
			{
				value: "360",
				text: "中国民生银行"
			},
			{
				value: "370",
				text: "北京银行"
			},
			{
				value: "380",
				text: "华夏银行"
			},
			{
				value: "390",
				text: "南京银行"
			},
			{
				value: "400",
				text: "东亚银行"
			},
			{
				value: "410",
				text: "浦发银行"
			},
			{
				value: "420",
				text: "上海银行"
			},
			{
				value: "430",
				text: "兰州银行"
			}
		],
		YS: [{
				value: "1031000",
				text: "农业银行"
			},
			{
				value: "1021000",
				text: "工商银行"
			},
			{
				value: "1051000",
				text: "建设银行"
			},
			{
				value: "3012900",
				text: "交通银行"
			},
			{
				value: "1041000",
				text: "中国银行"
			},
			{
				value: "3085840",
				text: "招商银行"
			},
			{
				value: "3051000",
				text: "民生银行"
			},
			{
				value: "3031000",
				text: "光大银行"
			},
			{
				value: "3131000",
				text: "北京银行"
			},
			{
				value: "3071000",
				text: "平安银行"
			},
			{
				value: "3222900",
				text: "上海农村商业银行"
			},
			{
				value: "3093910",
				text: "兴业银行"
			},
			{
				value: "4031000",
				text: "中国邮政"
			},
			{
				value: "3102900",
				text: "浦发银行"
			},
			{
				value: "3021000",
				text: "中信银行"
			},
			{
				value: "3065810",
				text: "广发银行"
			},
			{
				value: "3133010",
				text: "南京银行"
			},
			{
				value: "3133320",
				text: "宁波银行"
			},
			{
				value: "5021000",
				text: "东亚银行"
			}
		],
		HS: [{
				value: "CMB",
				text: "招商银行"
			},
			{
				value: "ICBC",
				text: "工商银行"
			},
			{
				value: "CCB",
				text: "建设银行"
			},
			{
				value: "BOC",
				text: "中国银行"
			},
			{
				value: "ABC",
				text: "农业银行"
			},
			{
				value: "BOCM",
				text: "交通银行"
			},
			{
				value: "SPDB",
				text: "浦发银行"
			},
			{
				value: "CGB",
				text: "广发银行"
			},
			{
				value: "CITIC",
				text: "中信银行"
			},
			{
				value: "CEB",
				text: "光大银行"
			},
			{
				value: "CIB",
				text: "兴业银行"
			},
			{
				value: "PAYH",
				text: "平安银行"
			},
			{
				value: "CMBC",
				text: "民生银行"
			},
			{
				value: "HXB",
				text: "华夏银行"
			},
			{
				value: "PSBC",
				text: "邮储银行"
			},
			{
				value: "BCCB",
				text: "北京银行"
			},
			{
				value: "SHBANK",
				text: "上海银行"
			}
		],
		SHB: [{
				value: "ABC",
				text: "农业银行"
			},
			{
				value: "ICBC",
				text: "工商银行"
			},
			{
				value: "CCB",
				text: "建设银行"
			},
			{
				value: "BCOM",
				text: "交通银行"
			},
			{
				value: "BOC",
				text: "中国银行"
			},
			{
				value: "CMB",
				text: "招商银行"
			},
			{
				value: "CMBC",
				text: "民生银行"
			},
			{
				value: "CEBB",
				text: "光大银行"
			},
			{
				value: "BOB",
				text: "北京银行"
			},
			{
				value: "SHB",
				text: "上海银行"
			},
			{
				value: "NBB",
				text: "宁波银行"
			},
			{
				value: "HXB",
				text: "华夏银行"
			},
			{
				value: "CIB",
				text: "兴业银行"
			},
			{
				value: "PSBC",
				text: "中国邮政银行"
			},
			{
				value: "SPABANK",
				text: "平安银行"
			},
			{
				value: "SPDB",
				text: "浦发银行"
			},
			{
				value: "ECITIC",
				text: "中信银行"
			},
			{
				value: "HZB",
				text: "杭州银行"
			},
			{
				value: "GDB",
				text: "广发银行"
			}
		],
		ZF: [{
				value: "ABC",
				text: "农业银行"
			},
			{
				value: "ICBC",
				text: "工商银行"
			},
			{
				value: "CCB",
				text: "建设银行"
			},
			{
				value: "BCOM",
				text: "交通银行"
			},
			{
				value: "BOC",
				text: "中国银行"
			},
			{
				value: "CMB",
				text: "招商银行"
			},
			{
				value: "CMBC",
				text: "民生银行"
			},
			{
				value: "CEBB",
				text: "光大银行"
			},
			{
				value: "BOB",
				text: "北京银行"
			},
			{
				value: "SHB",
				text: "上海银行"
			},
			{
				value: "NBB",
				text: "宁波银行"
			},
			{
				value: "HXB",
				text: "华夏银行"
			},
			{
				value: "CIB",
				text: "兴业银行"
			},
			{
				value: "PSBC",
				text: "中国邮政"
			},
			{
				value: "SPABANK",
				text: "平安银行"
			},
			{
				value: "SPDB",
				text: "浦发银行"
			},
			{
				value: "ECITIC",
				text: "中信银行"
			},
			{
				value: "HZB",
				text: "杭州银行"
			},
			{
				value: "GDB",
				text: "广发银行"
			}
		],
		TCP: [{
				value: "POST",
				text: "邮政储蓄银行"
			},
			{
				value: "ICBC",
				text: "工商银行"
			},
			{
				value: "ECITIC",
				text: "中信银行"
			},
			{
				value: "CIB",
				text: "兴业银行"
			},
			{
				value: "CCB",
				text: "建设银行"
			},
			{
				value: "BOC",
				text: "中国银行"
			},
			{
				value: "ABC",
				text: "中国农业银行"
			},
			{
				value: "CEB",
				text: "中国光大银行"
			},
			{
				value: "CGB",
				text: "广发银行"
			},
			{
				value: "HXB",
				text: "华夏银行"
			},
			{
				value: "PINGANBANK",
				text: "平安银行"
			},
			{
				value: "SHB",
				text: "上海银行"
			},
			{
				value: "BOCO",
				text: "交通银行"
			},
			{
				value: "CMBC",
				text: "中国民生银行"
			},
			{
				value: "CMBCHINA",
				text: "招商银行"
			},
			{
				value: "BCCB",
				text: "北京银行"
			}
		],
		DDB: [{
				value: "ABC",
				text: "农业银行"
			},
			{
				value: "ICBC",
				text: "工商银行"
			},
			{
				value: "CCB",
				text: "建设银行"
			},
			{
				value: "BCOM",
				text: "交通银行"
			},
			{
				value: "BOC",
				text: "中国银行"
			},
			{
				value: "CMB",
				text: "招商银行"
			},
			{
				value: "CMBC",
				text: "民生银行"
			},
			{
				value: "CEBB",
				text: "光大银行"
			},
			{
				value: "BOB",
				text: "北京银行"
			},
			{
				value: "SHB",
				text: "上海银行"
			},
			{
				value: "NBB",
				text: "宁波银行"
			},
			{
				value: "HXB",
				text: "华夏银行"
			},
			{
				value: "CIB",
				text: "兴业银行"
			},
			{
				value: "PSBC",
				text: "中国邮政银行"
			},
			{
				value: "SPABANK",
				text: "平安银行"
			},
			{
				value: "SPDB",
				text: "浦发银行"
			},
			{
				value: "ECITIC",
				text: "中信银行"
			},
			{
				value: "HZB",
				text: "杭州银行"
			},
			{
				value: "GDB",
				text: "广发银行"
			}
		],
		GST: [{
				value: "ABC",
				text: "农业银行"
			},
			{
				value: "ICBC",
				text: "工商银行"
			},
			{
				value: "CCB",
				text: "建设银行"
			},
			{
				value: "PSBC",
				text: "中国邮政银行"
			},
			{
				value: "BOC",
				text: "中国银行"
			},
			{
				value: "CMB",
				text: "招商银行"
			},
			{
				value: "BCOM",
				text: "交通银行"
			},
			{
				value: "SPDB",
				text: "浦发银行"
			},
			{
				value: "CEBB",
				text: "光大银行"
			},
			{
				value: "ECITIC",
				text: "中信银行"
			},
			{
				value: "SPABANK",
				text: "平安银行"
			},
			{
				value: "CMBC",
				text: "民生银行"
			},
			{
				value: "HXB",
				text: "华夏银行"
			},
			{
				value: "GDB",
				text: "广发银行"
			}
		],
		MKT: [{
				value: "ABC",
				title: "农业银行"
			},
			{
				value: "BOC",
				text: "中国银行"
			},
			{
				value: "BOCOM",
				text: "交通银行"
			},
			{
				value: "CCB",
				text: "建设银行"
			},
			{
				value: "ICBC",
				text: "工商银行"
			},
			{
				value: "PSBC",
				text: "中国邮政银行"
			},
			{
				value: "SPDB",
				text: "浦发银行"
			},
			{
				value: "CEBBANK",
				text: "光大银行"
			},
			{
				value: "ECITIC",
				text: "中信银行"
			},
			{
				value: "PINGAN",
				text: "平安银行"
			},
			{
				value: "CMBCS",
				text: "民生银行"
			},
			{
				value: "HXB",
				text: "华夏银行"
			},
			{
				value: "CGB",
				text: "广发银行"
			},
			{
				value: "BCCB",
				text: "北京银行"
			},
			{
				value: "BOS",
				text: "上海银行"
			},
			{
				value: "CIB",
				text: "兴业银行"
			}
		],
		BFT: [{
				value: "ICBC",
				text: "工商银行"
			},
			{
				value: "ABC",
				text: "农业银行"
			},
			{
				value: "BOC",
				text: "中国银行"
			},
			{
				value: "CCB",
				text: "建设银行"
			},
			{
				value: "COMM",
				text: "交通银行"
			},
			{
				value: "CMB",
				text: "招商银行"
			},
			{
				value: "SPDB",
				text: "浦发银行"
			},
			{
				value: "CIB",
				text: "兴业银行"
			},
			{
				value: "CMBC",
				text: "民生银行"
			},
			{
				value: "GDB",
				text: "广发银行"
			},
			{
				value: "CNCB",
				text: "中信银行"
			},
			{
				value: "CEB",
				text: "光大银行"
			},
			{
				value: "HXB",
				text: "华夏银行"
			},
			{
				value: "PSBC",
				text: "中国邮政银行"
			},
			{
				value: "PAB",
				text: "平安银行"
			},
			{
				value: "BOBJ",
				text: "北京银行"
			},
			{
				value: "BONB",
				text: "宁波银行"
			}
		],
		XQ: [{
				value: "icbc",
				text: "工商银行"
			},
			{
				value: "abc",
				text: "农业银行"
			},
			{
				value: "ccb",
				text: "建设银行"
			},
			{
				value: "boc",
				text: "中国银行"
			},
			{
				value: "comm",
				text: "交通银行"
			},
			{
				value: "cmb",
				text: "招商银行"
			},
			{
				value: "cmbc",
				text: "民生银行"
			},
			{
				value: "cib",
				text: "兴业银行"
			},
			{
				value: "spdb",
				text: "浦发银行"
			},
			{
				value: "hxb",
				text: "华夏银行"
			},
			{
				value: "ecitic",
				text: "中信银行"
			},
			{
				value: "ceb",
				text: "光大银行"
			},
			{
				value: "gdb",
				text: "广发银行"
			},
			{
				value: "post",
				text: "中国邮政银行"
			},
			{
				value: "sdb",
				text: "深发展银行"
			},
			{
				value: "bea",
				text: "东亚银行"
			},
			{
				value: "nb",
				text: "宁波银行"
			},
			{
				value: "nb",
				text: "北京银行"
			},
			{
				value: "pingan",
				text: "平安银行"
			},
			{
				value: "bjrcb",
				text: "北京农村商业银行"
			}
		],
		HT: [{
				value: "ABC",
				text: "中国农业银行"
			},
			{
				value: "BOC",
				text: "中国银行"
			},
			{
				value: "BOCOM",
				text: "交通银行"
			},
			{
				value: "CCB",
				text: "中国建设银行"
			},
			{
				value: "ICBC",
				text: "中国工商银行"
			},
			{
				value: "PSBC",
				text: "中国邮政储蓄银行"
			},
			{
				value: "CMBC",
				text: "招商银行"
			},
			{
				value: "SPDB",
				text: "浦发银行"
			},
			{
				value: "CEBBANK",
				text: "中国光大银行"
			},
			{
				value: "ECITIC",
				text: "中信银行"
			},
			{
				value: "PINGAN",
				text: "平安银行"
			},
			{
				value: "CMBCS",
				text: "中国民生银行"
			},
			{
				value: "HXB",
				text: "华夏银行"
			},
			{
				value: "CGB",
				text: "广发银行"
			},
			{
				value: "BCCB",
				text: "北京银行"
			},
			{
				value: "BOS",
				text: "上海银行"
			},
			{
				value: "CIB",
				text: "兴业银行"
			}
		],
		YEE: [{
				value: "ICBC-NET-B2C",
				text: "工商银行"
			},
			{
				value: "CMBCHINA-NET-B2C",
				text: "招商银行"
			},
			{
				value: "CCB-NET-B2C",
				text: "建设银行"
			},
			{
				value: "BOCO-NET-B2C",
				text: "交通银行[借]"
			},
			{
				value: "CIB-NET-B2C",
				text: "兴业银行"
			},
			{
				value: "CMBC-NET-B2C",
				text: "中国民生银行"
			},
			{
				value: "CEB-NET-B2C",
				text: "光大银行"
			},
			{
				value: "BOC-NET-B2C",
				text: "中国银行"
			},
			{
				value: "PINGANBANK-NET-B2C",
				text: "平安银行"
			},
			{
				value: "ECITIC-NET-B2C",
				text: "中信银行"
			},
			{
				value: "SDB-NET-B2C",
				text: "深圳发展银行"
			},
			{
				value: "GDB-NET-B2C",
				text: "广发银行"
			},
			{
				value: "SHB-NET-B2C",
				text: "上海银行"
			},
			{
				value: "SPDB-NET-B2C",
				text: "上海浦东发展银行"
			},
			{
				value: "HXB-NET-B2C",
				text: "华夏银行「借」"
			},
			{
				value: "BCCB-NET-B2C",
				text: "北京银行"
			},
			{
				value: "ABC-NET-B2C",
				text: "中国农业银行"
			},
			{
				value: "POST-NET-B2C",
				text: "中国邮政储蓄银行「借」"
			}
		],
		OK: [{
				value: "ICBC",
				text: "工商银行"
			},
			{
				value: "CMB",
				text: "招商银行"
			},
			{
				value: "CCB",
				text: "建设银行"
			},
			{
				value: "BOC",
				text: "中国银行"
			},
			{
				value: "ABC",
				text: "农业银行"
			},
			{
				value: "BOCM",
				text: "交通银行"
			},
			{
				value: "SPDB",
				text: "浦发银行"
			},
			{
				value: "CGB",
				text: "广发银行"
			},
			{
				value: "CTITC",
				text: "中信银行"
			},
			{
				value: "CEB",
				text: "光大银行"
			},
			{
				value: "CIB",
				text: "兴业银行"
			},
			{
				value: "SDB",
				text: "平安银行"
			},
			{
				value: "CMBC",
				text: "民生银行"
			},
			{
				value: "HXB",
				text: "华夏银行"
			},
			{
				value: "PSBC",
				text: "邮储银行"
			},
			{
				value: "BCCB",
				text: "北京银行"
			},
			{
				value: "SHBANK",
				text: "上海银行"
			},
			{
				value: "BOHAI",
				text: "渤海银行"
			},
			{
				value: "SHNS",
				text: "上海农商"
			}
		],
		GH: [{
				value: "ICBC",
				text: "工商银行"
			},
			{
				value: "ABC",
				text: "农业银行"
			},
			{
				value: "CCB",
				text: "建设银行"
			},
			{
				value: "BOC",
				text: "中国银行"
			},
			{
				value: "CMB",
				text: "招商银行"
			},
			{
				value: "BCCB",
				text: "北京银行"
			},
			{
				value: "BOCO",
				text: "交通银行"
			},
			{
				value: "CIB",
				text: "兴业银行"
			},
			{
				value: "NJCB",
				text: "南京银行"
			},
			{
				value: "CMBC",
				text: "民生银行"
			},
			{
				value: "CEB",
				text: "光大银行"
			},
			{
				value: "PINGANBANK",
				text: "平安银行"
			},
			{
				value: "CBHB",
				text: "渤海银行"
			},
			{
				value: "HKBEA",
				text: "东亚银行"
			},
			{
				value: "NBCB",
				text: "宁波银行"
			},
			{
				value: "CTTIC",
				text: "中信银行"
			},
			{
				value: "GDB",
				text: "广发银行"
			},
			{
				value: "SHB",
				text: "上海银行"
			},
			{
				value: "SPDB",
				text: "上海浦东发展银行"
			},
			{
				value: "PSBS",
				text: "中国邮政"
			},
			{
				value: "HXB",
				text: "华夏银行"
			},
			{
				value: "BJRCB",
				text: "北京农村商业银行"
			},
			{
				value: "SRCB",
				text: "上海农商银行"
			},
			{
				value: "SDB",
				text: "深圳发展银行"
			},
			{
				value: "CZB",
				text: "浙江稠州商业银行"
			},
			{
				value: "SRCB",
				text: "上海农商行"
			}
		],
		KLT: [{
				value: "cmb",
				text: "招商银行"
			},
			{
				value: "icbc",
				text: "工商银行"
			},
			{
				value: "ccb",
				text: "建设银行"
			},
			{
				value: "abc",
				text: "农业银行"
			},
			{
				value: "comm",
				text: "交通银行"
			},
			{
				value: "boc",
				text: "中国银行"
			},
			{
				value: "cmbc",
				text: "民生银行"
			},
			{
				value: "pdb",
				text: "上海浦东发展银行"
			},
			{
				value: "hxb",
				text: "华夏银行"
			},
			{
				value: "cgb",
				text: "广东发展银行"
			},
			{
				value: "cib",
				text: "兴业银行"
			},
			{
				value: "ceb",
				text: "光大银行"
			},
			{
				value: "citic",
				text: "中信银行"
			},
			{
				value: "pingan",
				text: "平安银行"
			},
			{
				value: "bob",
				text: "北京银行"
			},
			{
				value: "bos",
				text: "上海银行"
			},
			{
				value: "psbc",
				text: "邮政储蓄"
			}
		],
		SYF: [{
				value: "962",
				text: "中信银行"
			},
			{
				value: "963",
				text: "中国银行"
			},
			{
				value: "964",
				text: "中国农业银行"
			},
			{
				value: "965",
				text: "中国建设银行"
			},
			{
				value: "966",
				text: "中国工商银行（仅限工行手机签约客户）"
			},
			{
				value: "967",
				text: "中国工商银行（全国范围）"
			},
			{
				value: "968",
				text: "浙商银行"
			},
			{
				value: "969",
				text: "浙江稠州商业银行"
			},
			{
				value: "970",
				text: "招商银行"
			},
			{
				value: "971",
				text: "邮政储蓄"
			},
			{
				value: "972",
				text: "兴业银行"
			},
			{
				value: "973",
				text: "顺德农村信用合作社"
			},
			{
				value: "974",
				text: "深圳发展银行"
			},
			{
				value: "975",
				text: "上海银行"
			},
			{
				value: "976",
				text: "上海农村商业银行"
			},
			{
				value: "977",
				text: "浦东发展银行"
			},
			{
				value: "978",
				text: "平安银行"
			},
			{
				value: "979",
				text: "南京银行"
			},
			{
				value: "980",
				text: "民生银行"
			},
			{
				value: "981",
				text: "交通银行"
			},
			{
				value: "982",
				text: "华夏银行"
			},
			{
				value: "983",
				text: "杭州银行"
			},
			{
				value: "984",
				text: "广州市农村信用社|广州市商业银行"
			},
			{
				value: "985",
				text: "广东发展银行"
			},
			{
				value: "986",
				text: "光大银行"
			},
			{
				value: "987",
				text: "东亚银行"
			},
			{
				value: "988",
				text: "渤海银行"
			},
			{
				value: "989",
				text: "北京银行"
			},
			{
				value: "990",
				text: "北京农村商业银行"
			},
		],
		TJF: [{
				bankcode: "ABC",
				text: "中国农业银行"
			},
			{
				bankcode: "BOC",
				text: "中国银行"
			},
			{
				bankcode: "CBHB",
				text: "渤海银行"
			},
			{
				bankcode: "CCB",
				text: "中国建设银行"
			},
			{
				bankcode: "CEB",
				text: "光大银行"
			},
			{
				bankcode: "CIB",
				text: "兴业银行"
			},
			{
				bankcode: "CMB",
				text: "招商银行"
			},
			{
				bankcode: "CMBC",
				text: "民生银行"
			},
			{
				bankcode: "CNCB",
				text: "中信银行"
			},
			{
				bankcode: "COMM",
				text: "交通银行"
			},
			{
				bankcode: "GDB",
				text: "广发银行"
			},
		],
		JCF: [{
				value: "ICBC",
				text: "工商银行"
			},
			{
				value: "CMBCHINA",
				text: "招商银行"
			},
			{
				value: "ABC",
				text: "农业银行"
			},
			{
				value: "CCB",
				text: "建设银行"
			},
			{
				value: "BCCB",
				text: "北京银行"
			},
			{
				value: "BOCO",
				text: "交通银行"
			},
			{
				value: "CMBC",
				text: "中国民生银行"
			},
			{
				value: "PINGANBANK",
				text: "平安银行"
			},
			{
				value: "CIB",
				text: "兴业银行"
			},
			{
				value: "NJCB",
				text: "南京银行"
			},
			{
				value: "CEB",
				text: "光大银行"
			},
			{
				value: "BOC",
				text: "中国银行"
			},
			{
				value: "CGB",
				text: "广发银行"
			},
			{
				value: "SHB",
				text: "上海银行"
			},
			{
				value: "SPDB",
				text: "上海浦东发展银行"
			},
			{
				value: "POST",
				text: "中国邮政"
			},
			{
				value: "CBHB",
				text: "渤海银行"
			},
			{
				value: "HKBEA",
				text: "东亚银行"
			},
			{
				value: "ECITIC",
				text: "中信银行"
			},
			{
				value: "NBCB",
				text: "宁波银行"
			},
			{
				value: "BJRCB",
				text: "北京农村商业银行"
			},
			{
				value: "HXB",
				text: "华夏银行"
			},
			{
				value: "CZ",
				text: "浙商银行"
			},
			{
				value: "HZBANK",
				text: "杭州银行"
			},
			{
				value: "NCBBANK",
				text: "南洋商业银行"
			},
			{
				value: "SCCB",
				text: "河北银行"
			},
			{
				value: "BOCDBANK",
				text: "成都银行"
			},
			{
				value: "HKB",
				text: "汉口银行"
			}
		],
		ZTB: [{
				value: "ABC",
				text: "农业银行"
			},
			{
				value: "ICBC",
				text: "工商银行"
			},
			{
				value: "CCB",
				text: "建设银行"
			},
			{
				value: "BCOM",
				text: "交通银行"
			},
			{
				value: "BOC",
				text: "中国银行"
			},
			{
				value: "CMB",
				text: "招商银行"
			},
			{
				value: "CMBC",
				text: "民生银行"
			},
			{
				value: "CEBB",
				text: "光大银行"
			},
			{
				value: "BOB",
				text: "北京银行"
			},
			{
				value: "SHB",
				text: "上海银行"
			},
			{
				value: "NBB",
				text: "宁波银行"
			},
			{
				value: "HXB",
				text: "华夏银行"
			},
			{
				value: "CIB",
				text: "兴业银行"
			},
			{
				value: "PSBC",
				text: "中国邮政银行"
			},
			{
				value: "SPABANK",
				text: "平安银行"
			},
			{
				value: "SPDB",
				text: "浦发银行"
			},
			{
				value: "ECITIC",
				text: "中信银行"
			},
			{
				value: "HZB",
				text: "杭州银行"
			},
			{
				value: "GDB",
				text: "广发银行"
			},
		],
		RX: [{
				value: "ICBC",
				text: "工商银行"
			},
			{
				value: "ABC",
				text: "农业银行"
			},
			{
				value: "CCB",
				text: "建设银行"
			},
			{
				value: "BOC",
				text: "中国银行"
			},
			{
				value: "CMB",
				text: "招商银行"
			},
			{
				value: "BCCB",
				text: "北京银行"
			},
			{
				value: "BOCO",
				text: "交通银行"
			},
			{
				value: "CIB",
				text: "兴业银行"
			},
			{
				value: "NJCB",
				text: "南京银行"
			},
			{
				value: "CMBC",
				text: "民生银行"
			},
			{
				value: "CEB",
				text: "光大银行"
			},
			{
				value: "PINGANBANK",
				text: "平安银行"
			},
			{
				value: "CBHB",
				text: "渤海银行"
			},
			{
				value: "HKBEA",
				text: "东亚银行"
			},
			{
				value: "NBCB",
				text: "宁波银行"
			},
			{
				value: "CTTIC",
				text: "中信银行"
			},
			{
				value: "GDB",
				text: "广发银行"
			},
			{
				value: "SHB",
				text: "上海银行"
			},
			{
				value: "SPDB",
				text: "上海浦东发展银行"
			},
			{
				value: "PSBS",
				text: "中国邮政"
			},
			{
				value: "HXB",
				text: "华夏银行"
			},
			{
				value: "BJRCB",
				text: "北京农村商业银行"
			},
			{
				value: "SRCB",
				text: "上海农商银行"
			},
			{
				value: "SDB",
				text: "深圳发展银行"
			},
			{
				value: "CZB",
				text: "浙江稠州商业银行"
			},
		],
		DD: [{
				bankcode: "POST",
				text: "中国邮政储蓄银行"
			},
			{
				bankcode: "ICBC",
				text: "中国工商银行"
			},
			{
				bankcode: "ECITIC",
				text: "中信银行"
			},
			{
				bankcode: "CCB",
				text: "中国建设银行"
			},
			{
				bankcode: "BOC",
				text: "中国银行"
			},
			{
				bankcode: "ABC",
				text: "中国农业银行"
			},
			{
				bankcode: "CEB",
				text: "中国光大银行"
			},
			{
				bankcode: "CGB",
				text: "广发银行"
			},
			{
				bankcode: "HXB",
				text: "华夏银行"
			},
			{
				bankcode: "SHB",
				text: "上海银行"
			},
			{
				bankcode: "BOCO",
				text: "交通银行"
			},
			{
				bankcode: "CMBC",
				text: "中国民生银行"
			},
			{
				bankcode: "BCCB",
				text: "北京银行"
			},
			{
				bankcode: "NBB",
				text: "宁波银行"
			},
			{
				bankcode: "SPDB",
				text: "浦发银行"
			},
			{
				bankcode: "HZB",
				text: "杭州银行"
			},
		],
		SF: [{
				value: "ABC",
				text: "中国农业银行"
			},
			{
				value: "BOC",
				text: "中国银行"
			},
			{
				value: "BOCOM",
				text: "交通银行"
			},
			{
				value: "CCB",
				text: "中国建设银行"
			},
			{
				value: "ICBC",
				text: "中国工商银行"
			},
			{
				value: "PSBC",
				text: "中国邮政储蓄银行"
			},
			{
				value: "CMBC",
				text: "招商银行"
			},
			{
				value: "SPDB",
				text: "浦发银行"
			},
			{
				value: "CEBBANK",
				text: "中国光大银行"
			},
			{
				value: "ECITIC",
				text: "中信银行"
			},
			{
				value: "PINGAN",
				text: "平安银行"
			},
			{
				value: "CMBCS",
				text: "中国民生银行"
			},
			{
				value: "HXB",
				text: "华夏银行"
			},
			{
				value: "CGB",
				text: "广发银行"
			},
			{
				value: "BJBANK",
				text: "北京银行"
			},
			{
				value: "BOS",
				text: "上海银行"
			},
			{
				value: "CIB",
				text: "兴业银行"
			},
		],
		YJH: [{
				value: "BOC",
				text: "中国银行"
			},
			{
				value: "ABC",
				text: "农业银行"
			},
			{
				value: "CCB",
				text: "建设银行"
			},
			{
				value: "ICBC",
				text: "工商银行"
			},
			{
				value: "PSBC",
				text: "邮政储蓄"
			},
			{
				value: "CEB",
				text: "光大银行"
			},
			{
				value: "CITIC",
				text: "中信银行"
			},
			{
				value: "CMBC",
				text: "民生银行"
			},
			{
				value: "SHB",
				text: "上海银行"
			},
			{
				value: "BOB",
				text: "北京银行"
			},
		],
		WF: [{
				value: "ABC",
				text: "农业银行"
			},
			{
				value: "ICBC",
				text: "工商银行"
			},
			{
				value: "CCB",
				text: "建设银行"
			},
			{
				value: "BCOM",
				text: "交通银行"
			},
			{
				value: "BOC",
				text: "中国银行"
			},
			{
				value: "CMB",
				text: "招商银行"
			},
			{
				value: "CMBC",
				text: "民生银行"
			},
			{
				value: "CEBB",
				text: "光大银行"
			},
			{
				value: "BOB",
				text: "北京银行"
			},
			{
				value: "SHB",
				text: "上海银行"
			},
			{
				value: "NBB",
				text: "宁波银行"
			},
			{
				value: "HXB",
				text: "华夏银行"
			},
			{
				value: "CIB",
				text: "兴业银行"
			},
			{
				value: "PSBC",
				text: "中国邮政银行"
			},
			{
				value: "SPABANK",
				text: "平安银行"
			},
			{
				value: "SPDB",
				text: "浦发银行"
			},
			{
				value: "ECITIC",
				text: "中信银行"
			},
			{
				value: "HZB",
				text: "杭州银行"
			},
			{
				value: "GDB",
				text: "广发银行"
			},
		],
		AN: [{
				value: '01040000',
				text: '中国银行'
			},
			{
				value: '01020000',
				text: '工商银行'
			},
			{
				value: '01050000',
				text: '建设银行'
			},
			{
				value: '03060000',
				text: '广发银行'
			},
			{
				value: '01000000',
				text: '邮储银行'
			},
			{
				value: '01030000',
				text: '农业银行'
			},
			{
				value: '03050000',
				text: '民生银行'
			},
			{
				value: '03030000',
				text: '光大银行'
			},
			{
				value: '04031000',
				text: '北京银行'
			},
			{
				value: '03010000',
				text: '交通银行'
			},
			{
				value: '04012900',
				text: '上海银行'
			},
		]
	};
	owner.MBchannel = [{
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

	owner.datatboy = function(time) {
		let tody = new Date();
		let day = tody.getTime() - parseFloat(time) * 60 * 60 * 24;
		let t = new Date(day);
		return t.getFullYear() + '-' + (this.year(t.getMonth() + 1)) + '-' + this.year(t.getDate())
	}
	owner.year = function(el) {
		if(el < 10) {
			return('0' + el);
		} else {
			return el;
		}
	}
	owner.game = [ //游戏列表
		{
			text: 'IG 彩票（新）',
			value: 'IGPJ',
		},
		{
			text: 'IG 彩票',
			value: 'IG',

		},
		{
			text: 'VR 彩票',
			value: 'VR',

		},
		// {name:'BG 彩票/视讯',type:'BG'},
		{
			text: 'Cagayan88视讯',
			value: 'CG',

		},
		{
			text: 'DS视讯',
			value: 'DS',

		},
		{
			text: 'AGIN国际厅',
			value: 'AGIN',

		},
		{
			text: '申博视讯(TGP)',
			value: 'SB',

		},
		{
			text: 'OG视讯',
			value: 'OG',

		},
		{
			text: 'BBIN 视讯/电子',
			value: 'BBIN',

		},
		{
			text: 'PT电子',
			value: 'PT',

		},
		{
			text: 'MG电子',
			value: 'MG',

		},
		{
			text: 'HABA电子',
			value: 'HABA',
		},
		{
			text: '皇冠',
			value: 'HG',
		},
		{
			text: '开元棋牌',
			value: 'KYQP',
		}
	]
	owner.mask = $.createMask() //callback为用户点击蒙版时自动执行的回调；\
	owner.ajax = function(src, data, callback) {
		console.log(owner.linkSrc + src)
		$.ajax(owner.linkSrc + src, {
			data: data,
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 30000, //超时时间设置为10秒；
			headers: {
				'Referer': owner.linkSrc
			},
			success: function(data) {
				return callback(data)
			},
			error: function(xhr, type, errorThrown) {
				owner.mask.close();
				plus.nativeUI.closeWaiting();
				plus.nativeUI.toast(type);
			}
		});
	}
	/**
	 * 用户登录
	 **/
	owner.login = function(loginInfo, callback) {
		callback = callback || $.noop;
		loginInfo = loginInfo || {};
		loginInfo.tname = loginInfo.tname || '';
		loginInfo.tpwd = loginInfo.tpwd || '';
		if(!/^[A-Za-z0-9]{4,10}$/.test(loginInfo.tname)) {
			return callback('请输入手机号/用户名');
		}
		if(!/^[0-9A-Za-z]{6,12}$/.test(loginInfo.tpwd)) {
			return callback('密码最短为 6 个字符');
		}
		//		var users = JSON.parse(localStorage.getItem('$users') || '[]');
		//		var authed = users.some(function(user) {
		//			return loginInfo.account == user.account && loginInfo.password == user.password;
		//		});
		//		if (authed) {
		//			return owner.createState(loginInfo.account, callback);
		//		} else {
		//			return callback('用户名或密码错误');
		//		}
		return callback();
	};

	owner.createState = function(obj, callback) {
		var state = owner.getState();
		state.name = obj.userName.substring(3);
		state.userKey = obj.userKey;
		state.balance = obj.balance;
		owner.setState(state);
		return callback();
	};
	/**
	 * 新用户注册
	 **/
	owner.reg = function(regInfo, callback) {
		callback = callback || $.noop;
		regInfo = regInfo || {};
		regInfo.account = regInfo.account || '';
		regInfo.password = regInfo.password || '';
		if(regInfo.account.length < 5) {
			return callback('用户名最短需要 5 个字符');
		}
		if(regInfo.password.length < 6) {
			return callback('密码最短需要 6 个字符');
		}
		if(!checkEmail(regInfo.email)) {
			return callback('邮箱地址不合法');
		}
		var users = JSON.parse(localStorage.getItem('$users') || '[]');
		users.push(regInfo);
		localStorage.setItem('$users', JSON.stringify(users));
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

	owner.addbankcard = function(bank, callback) {
		callback = callback || $.noop;
		bank = bank || {};
		bank.cardUserName = bank.cardUserName || ''
		bank.cardNum = bank.cardNum || '';
		bank.cardAddress = bank.cardAddress || '';
		bank.password = bank.password || '';
		bank.bankCode = bank.bankCode || '';
		if(!/^\D{2,18}$/.test(bank.cardUserName)) {
			return callback('真实姓名必须与您的银行账户相同 2-18 中文');
		}
		if(!/^[0-9]{4,19}$/.test(bank.cardNum)) {
			return callback('请正确填写银行卡号');
		}
		if(bank.cardAddress.length < 1) {
			return callback('请填写开户行地址');
		}
		if(bank.bankCode === '') {
			return callback('请选择银行')
		}
		if(!/^[0-9]{4}$/.test(bank.password)) {
			return callback('请输入取款密码')
		}
		return callback();
	}
	/**
	 * 获取银行卡信息
	 **/
	owner.getBankCard = function() {
		var stateText = localStorage.getItem('$BankCard') || "{}";
		return JSON.parse(stateText);
	};
	/**
	 * 设置银行卡信息
	 **/
	owner.setBankCard = function(state) {
		state = state || {};
		localStorage.setItem('$BankCard', JSON.stringify(state));
		//var settings = owner.getSettings();
		//settings.gestures = '';
		//owner.setSettings(settings);
	};
	owner.getUserBalance = function() {
		var stateText = localStorage.getItem('$UserBalance') || "{}";
		return JSON.parse(stateText);
	}
	owner.setUserBalance = function(state) {
		state = state || {};
		localStorage.setItem('$UserBalance', JSON.stringify(state));
	}
	owner.setBankJudgment = function(state) {
		state = state || {};
		localStorage.setItem('$BankJudgment', JSON.stringify(state));
	}
	owner.getBankJudgment = function() {
		var stateText = localStorage.getItem('$BankJudgment') || "{}";
		return JSON.parse(stateText);
	};
	// 支付列表
	owner.getPayment = function() {
		var stateText = localStorage.getItem('$Payment') || "{}";
		return JSON.parse(stateText);
	};
	// 支付列表
	owner.setPayment = function(state) {
		state = state || {};
		localStorage.setItem('$Payment', JSON.stringify(state));
		//var settings = owner.getSettings();
		//settings.gestures = '';
		//owner.setSettings(settings);
	};
	owner.getRecords = function() {
		var stateText = localStorage.getItem('$Records') || "{}";
		return JSON.parse(stateText);
	}
	owner.setRecords = function(state) {
		state = state || {};
		localStorage.setItem('$Records', JSON.stringify(state));
		//var settings = owner.getSettings();
		//settings.gestures = '';
		//owner.setSettings(settings);
	};
	owner.getConfig = function() {
		var stateText = localStorage.getItem('$Config') || "{}";
		return JSON.parse(stateText);
	};
	owner.setConfig = function(state) {
		state = state || {};
		localStorage.setItem('$Config', JSON.stringify(state));
	}
	owner.getUserInfo = function() {
		var stateText = localStorage.getItem('$UserInfo') || "{}";
		return JSON.parse(stateText);
	}
	owner.setUserInfo = function(state) {
		state = state || {};
		localStorage.setItem('$UserInfo', JSON.stringify(state));
	}
	var checkEmail = function(email) {
		email = email || '';
		return(email.length > 3 && email.indexOf('@') > -1);
	};

	/**
	 * 找回密码
	 **/
	owner.forgetPassword = function(email, callback) {
		callback = callback || $.noop;
		if(!checkEmail(email)) {
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
		if(id === 'qihoo' && mui.os.plus) {
			return true;
		}
		if(mui.os.android) {
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
			} catch(e) {}
		} else {
			switch(id) {
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
	/**
	 * 游戏
	 * */
	owner.openWindow = function(id, obj) {
		mui.plusReady(function() {
			mui.openWindow({
				id: id,
				url: id,
				extras: {
					name: obj
				},
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
		})
	}
	owner.open = function(obj, text) {
		$.plusReady(function() {
			$.openWindow({
				url: obj.url,
				id: obj.id,
				styles: { // 窗口参数 参考5+规范中的WebviewStyle,也就是说WebviewStyle下的参数都可以在此设置
					width: '100%', //String类型,窗口的宽度.支持百分比、像素值，默认为100%.未设置width属性值时,可同时设置left和right属性值改变窗口的默认宽度.
					height: '100%', //String类型,窗口的高度.支持百分比、像素值，默认为100%.当未设置height属性值时,优先通过top和bottom属性值来计算窗口的高度.
					left: '0px', //String类型,窗口水平向右的偏移量.支持百分比,像素值,默认值为0px.未设置left属性值,优先通过right和width属性值来计算窗口的left位置.
					right: '0px', //String类型,窗口水平向左的偏移量.支持百分比、像素值,默认无值(根据left和width属性值来自动计算).当设置了left和width值时,忽略此属性值;当未设置width值时,可通过left和bottom属性值来确定窗口的宽度.
					scalable: true,
					top: '0px', //String类型,窗口垂直向下的偏移量.支持百分比、像素值，默认值为0px.未设置top属性值时,优先通过bottom和height属性值来计算窗口的top位置.
					bottom: '0px', //String类型,窗口垂直向上的偏移量.支持百分比,像素值,默认值无值(根据top和height属性值来自动计算).当同时设置了top和height值时,忽略此属性值;当未设置height值时,可通过top和bottom属性值来确定窗口的高度.
					zindex: 0, //Number类型,窗口的堆叠顺序值.拥有更高堆叠顺序的窗口总是会处于堆叠顺序较低的窗口的前面,拥有相同堆叠顺序的窗口后调用show方法则在前面.
					margin: 'auto', //String类型,窗口的边距.用于定位窗口的位置.auto:居中.若设置了left、right、top、bottom则对应
					titleNView: { // 窗口的标题栏控件
						autoBackButton: false,
						titleText: text, // 标题栏文字,当不设置此属性时，默认加载当前页面的标题，并自动更新页面的标题
						titleColor: "#fef7ea", // 字体颜色,颜色值格式为"#RRGGBB",默认值为"#000000"
						titleSize: "17px", // 字体大 小,默认17px
						backgroundColor: "#734e31", // 控件背景颜色,颜色值格式为"#RRGGBB",默认值为"#F7F7F7"
						progress: { // 标题栏控件的进度条样式
							color: "#00FF00", // 进度条颜色,默认值为"#00FF00"  
							height: "2px" // 进度条高度,默认值为"2px"         
						},
						splitLine: { // 标题栏控件的底部分割线，类似borderBottom
							color: "#CCCCCC", // 分割线颜色,默认值为"#CCCCCC"  
							height: "1px" // 分割线高度,默认值为"2px"
						},
						buttons: [{
							float: "left",
							text: "返回",
							fontSize: "13px",
							fontSrc: "_www/fonts/iconfont.ttf",
							onclick: function() {
								var wev = plus.webview.getWebviewById(obj.id);
								var btn = ["确定", "取消"];
								$.confirm('确认关闭当前' + text + '窗口？', '系统提示', btn, function(e) {
									if(e.index == 0) {
										wev.close();
									}
								});
							}
						}]
					},
				}
			});
		})
	}
	owner.newOpenWindow = function(url, name, acounmt, id, code) {
		var src;
//		var a = document.createElement('a');
		switch(name) {
			case "DC":
				src = url + "?bankcode=B2C&acounmt=" + acounmt + "&payId=" + id;
				break;
			case "YEE":
				src = url + "?bankcode=MODE2C&acounmt=" + acounmt + "&payId=" + id;
				break;
			case "JH":
				src = url + "?bankcode=4&acounmt=" + acounmt + "&payId=" + id;
				break;
			case "YLX":
				src = url + "?bankcode=04&acounmt=" + acounmt + "&payId=" + id;
				break;
			case "XZF":
				src = url + "?bankcode=0&mobile=mobile&acounmt=" + acounmt + "&payId=" + id;
				break;
			case "JFK":
				src = url + "?bankcode=1003&appSence=1002&acounmt=" + acounmt + "&payId=" + id;
				break;
			case "AK":
				src = url + "?bankcode=H5_ONLINE_BANK_PAY&mobile=mobile&acounmt=" + acounmt + "&payId=" + id;
				break;
			case "BFT":
				src = url + "?bankcode=" + code + "&mobile=WAP_PAY_B2C&acounmt=" + acounmt + "&payId=" + id;
				break;
			case "XQ":
			case "WF":
			case "GC":
				src = url + "?bankcode=" + code + "&mobile=mobile&acounmt=" + acounmt + "&payId=" + id;
				break;
			default:
				src = url + "?bankcode=" + code + "&acounmt=" + acounmt + "&payId=" + id;
		}
//		a.setAttribute('href', src);
//		a.setAttribute('target', 'blank');
//		a.setAttribute('id', src);
//		// 防止反复添加
//		if(!document.getElementById(src)) {
//			document.body.appendChild(a);
//		}
//		a.click();
//		console.log(src)
//		mui.plusReady(function() {
//			mui.openWindow({
//				id: src,
//				url: src,
//				extras: {
////					name: obj
//				},
//				show: {
//					aniShow: 'pop-in'
//				},
//				styles: {
//					popGesture: 'hide'
//				},
//				waiting: {
//					autoShow: false
//				}
//			});
//		})
		this.Options.id = name;
		this.Options.url = src
		this.open(this.Options,'网银支付')
//		plus.runtime.openURL();
//		this.
	}
	owner.startData = function(time) { //查询记录页面专用时间插件
			var options = null;
			var tody = new Date();
			var day = tody.getTime() - parseFloat(time) * 60 * 60 * 24;
			var t = new Date(day);
			//          月份
			var FullYear = t.getFullYear(); //年
			var Month = t.getMonth() + 1; //月份
			var inDay = t.getDate(); //日
			var inHours = t.getHours(); // 时
			var Minutes = t.getMinutes(); //分

			Month = Month < 10 ? "0" + Month : Month;
			inDay = inDay < 10 ? "0" + inDay : inDay;
			inHours = inHours < 10 ? "0" + inHours : inHours;
			Minutes = Minutes < 10 ? "0" + Minutes : Minutes;
			return options = {
				beginYear: FullYear,
				beginMonth: Number(Month),
				beginDay: Number(inDay),
				beginHours: Number(inHours),
				beginMinutes: Number(Minutes),
			}
		},
		owner.EndData = function(doc, self) { //查询记录页面专用时间插件
			if(self.picker) {
				self.picker.show(function(rs) {
					doc.innerText = rs.text;
					self.picker.dispose();
					self.picker = null;
				});
			} else {
				var optionsJson = self.getAttribute('data-options') || '{}';
				var options = JSON.parse(optionsJson);
				var now = new Date();
				options.beginYear = owner.startData(30000).beginYear; //年
				options.beginMonth = owner.startData(30000).beginMonth;
				options.beginDay = owner.startData(30000).beginDay; //时
				options.beginHours = owner.startData(30000).beginHours; //分
				options.beginMinutes = owner.startData(30000).beginMinutes; //秒

				options.endYear = owner.startData(0).beginYear; //年
				options.endMonth = owner.startData(0).beginMonth;
				options.endDay = owner.startData(0).beginDay; //时
				options.endHours = owner.startData(0).beginHours; //分
				options.endMinutes = owner.startData(0).beginMinutes; //秒

				var id = self.getAttribute('id');
				/*
				 * 首次显示时实例化组件
				 * 示例为了简洁，将 options 放在了按钮的 dom 上
				 * 也可以直接通过代码声明 optinos 用于实例化 DtPicker
				 */
				self.picker = new $.DtPicker(options);
				//						$( & quot;# serverTime & quot;).on('tap', function() {
				self.picker.show(function(rs) {
					/*
					 * rs.value 拼合后的 value
					 * rs.text 拼合后的 text
					 * rs.y 年，可以通过 rs.y.vaue 和 rs.y.text 获取值和文本
					 * rs.m 月，用法同年
					 * rs.d 日，用法同年
					 * rs.h 时，用法同年
					 * rs.i 分（minutes 的第二个字母），用法同年
					 */
					doc.innerText = rs.text;
					doc.setAttribute("data-type", rs.text);
					/* 
					 * 返回 false 可以阻止选择框的关闭
					 * return false;
					 */
					/*
					 * 释放组件资源，释放后将将不能再操作组件
					 * 通常情况下，不需要示放组件，new DtPicker(options) 后，可以一直使用。
					 * 当前示例，因为内容较多，如不进行资原释放，在某些设备上会较慢。
					 * 所以每次用完便立即调用 dispose 进行释放，下次用时再创建新实例。
					 */
					self.picker.dispose();
					self.picker = null;
				});
			}
		}
	owner.DropOut = function() {
		//		银行卡
		owner.setBankCard({})
		//		用户信息
		owner.setState({});
		//		支付列表
		owner.setPayment({})
		//		钱包
		owner.setBankJudgment({});
		//		打码量
		owner.setConfig({});
		//		个人信息
		owner.setUserInfo({})
		//记录
		owner.setRecords({});
	}
	// 退出
	owner.check = function() {
		if(mui.os.ios) {
			//			owner.DropOut();
			mui.openWindow({
				url: '_www/login.html',
				id: 'login',
				show: {
					aniShow: 'pop-in'
				},
				waiting: {
					autoShow: false
				}
			});
			return;
		}
		var btnArray = [{
			title: "注销当前账号"
		}, {
			title: "直接关闭应用"
		}];
		plus.nativeUI.actionSheet({
			cancel: "取消",
			buttons: btnArray
		}, function(event) {
			var index = event.index;
			switch(index) {
				case 1:
					//注销账号
					//					owner.DropOut();
					/*
					 * 注意：
					 * 1、因本示例应用启动页就是登录页面，因此注册成功后，直接显示登录页即可；
					 * 2、如果真实案例中，启动页不是登录页，则需修改，使用mui.openWindow打开真实的登录页面
					 */
					plus.webview.getLaunchWebview().show("pop-in");
					//若启动页不是登录页，则需通过如下方式打开登录页
					//						mui.openWindow({
					//							url: 'login.html',
					//							id: 'login',
					//							show: {
					//								aniShow: 'pop-in'
					//							}
					//						});
					break;
				case 2:
					plus.runtime.quit();
					break;
			}
		});
	}
	//钱包余额
	owner.getBalance = function(callback) {
		owner.ajax('User/getBalance', {
			BType: "WALLET"
		}, function(balance) {
			if(balance.msg == "error") {
				plus.nativeUI.toast('系统错误');
			} else if(balance.msg == 'process') {
				plus.nativeUI.toast('维护中');
			} else {
				owner.setUserBalance({balance: parseFloat(balance.balance).toFixed(2)})
				return callback(parseFloat(balance.balance).toFixed(2))
				//					 = app.getUserBalance().balance
			}
		})
	}
	//时间转换
	owner.franttime = function(time) {
		var date, Y, M, D, h, m, s;
		date = new Date(time);
		Y = date.getFullYear() + '-';
		M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
		D = date.getDate() + 1 < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
		h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
		m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
		s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
		var fommat_time = Y + M + D + h + m + s;
		return fommat_time;
	}
	owner.GetDateT = function() {
		var d, s;
		d = new Date();
		s = d.getFullYear() + "-"; //取年份
		s += (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) + "-" : (d.getMonth() + 1) + "-"; //取月份
		s += d.getDate() < 10 ? '0' + d.getDate() + " " : d.getDate() + " "; //取日期
		s += d.getHours() < 10 ? '0' + d.getHours() + ":" : d.getHours() + ":"; //取小时
		s += d.getMinutes() < 10 ? '0' + d.getMinutes() + ":" : d.getMinutes() + ":"; //取分
		s += d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds(); //取秒
		return(s);
	}
}(mui, window.app = {}));