
//''
var Bug = {
	linkSrc:'https://m.1yh345.com/YHH/',
	cagent : 'YHH',
	WebviewOptions: {
		id: '',
		url: ''
	},
	open: function(obj, text) {
		mui.plusReady(function() {
			mui.openWindow({
				url: obj.url,
				id: obj.id,
				styles: { // 窗口参数 参考5+规范中的WebviewStyle,也就是说WebviewStyle下的参数都可以在此设置
					width: '100%', //String类型,窗口的宽度.支持百分比、像素值，默认为100%.未设置width属性值时,可同时设置left和right属性值改变窗口的默认宽度.
					height: '100%', //String类型,窗口的高度.支持百分比、像素值，默认为100%.当未设置height属性值时,优先通过top和bottom属性值来计算窗口的高度.
					left: '0px', //String类型,窗口水平向右的偏移量.支持百分比,像素值,默认值为0px.未设置left属性值,优先通过right和width属性值来计算窗口的left位置.
					right: '0px', //String类型,窗口水平向左的偏移量.支持百分比、像素值,默认无值(根据left和width属性值来自动计算).当设置了left和width值时,忽略此属性值;当未设置width值时,可通过left和bottom属性值来确定窗口的宽度.
					top: '0px', //String类型,窗口垂直向下的偏移量.支持百分比、像素值，默认值为0px.未设置top属性值时,优先通过bottom和height属性值来计算窗口的top位置.
					bottom: '34px', //String类型,窗口垂直向上的偏移量.支持百分比,像素值,默认值无值(根据top和height属性值来自动计算).当同时设置了top和height值时,忽略此属性值;当未设置height值时,可通过top和bottom属性值来确定窗口的高度.
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
								mui.confirm('确认关闭当前'+text+'窗口？', '系统提示', btn, function(e) {
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
	},
	ajax:function(src,data,callback){
    	mui.ajax(Bug.linkSrc+src,{
    		data:data,
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			headers: {'Referer': Bug.linkSrc},              
			success:function(data){
				return callback(data)
			},
			error:function(xhr,type,errorThrown){
				plus.nativeUI.toast(type);
			}
		});
	}
}