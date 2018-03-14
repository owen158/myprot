var Bug = {
	WebviewOptions: {
		id: '',
		url: ''
	},
	NewPage: function(obj, text) {
		mui.openWindowWithTitle(obj,{
		    id:"title",//导航栏ID,默认为title,若不指定将会使用WebviewOptions中指定的 [webviewID+ "_title"] 作为id
		    height:"44px",//导航栏高度值
		    backgroundColor:"#f7f7f7",//导航栏背景色
		    bottomBorderColor:"#cccccc",//底部边线颜色
		    title:{//标题配置
		        text:text,//标题文字
		   	},
		    back:{//左上角返回箭头
		        image:{//图片格式
		            base64Data:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAb1BMVEUAAAAAev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8AAACubimgAAAAI3RSTlMAGfUTGfQTGPMSGPIYGhgaGBsXGxcbFxwXHBccFhwWHRYdHWufDPQAAAABYktHRACIBR1IAAAAB3RJTUUH4QETEBwooeTlkQAAAJVJREFUSMft1EkSgkAQRNFGUXFWHBDBibr/HTUwD5B/48Ig1y+io7u6MqUhf5hsNEY+j5hMgZ/FJ8Xc9ovos3T96utjbfqN/Nb0O/m96Uv5g+mP8ifTn+Ur01/ka9Nf5RvTt/I309/lH6Z/yr9Mn+Q71/MT8B34K/E58Enzv8R/K98HvnF8p3lr8F7izce7lbf3kJ/lDQp9HdBhgg3PAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTAxLTE5VDE2OjI4OjQwKzA4OjAwpTDFwQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wMS0xOVQxNjoyODo0MCswODowMNRtfX0AAAAASUVORK5CYII=',//加载图片的Base64编码格式数据 base64Data 和 imgSRC 必须指定一个.否则不显示返回箭头
		            imgSrc:'',//要加载的图片路径
		            sprite:{//图片源的绘制区域，参考：http://www.html5plus.org/doc/zh_cn/nativeobj.html#plus.nativeObj.Rect
		                top:'0px',
		                left:'0px',
		                width:'100%',
		                height:'100%'
		            },
		            position:{//绘制图片的目标区域，参考：http://www.html5plus.org/doc/zh_cn/nativeobj.html#plus.nativeObj.Rect
		                top:"10px",
		                left:"10px",
		                width:"24px",
		                height:"24px"
		            }
		        },
		        click:function(){
		            console.log(obj.id)
					var wev = plus.webview.getWebviewById(obj.id);
					var btn = ["确定", "取消"];
					mui.confirm('确认关闭当前窗口？', '系统提示', btn, function(e) {
						if(e.index == 0) {
							wev.close();
						}
					});
		        }
		    }
		})
	},
	NewOpen: function(obj,pmt) {
		mui.plusReady(function() {
			mui.openWindow({
				url: obj.url,
				id: obj.id,
				styles: {
					top: 0, //新页面顶部位置
					bottom: 0, //新页面底部位置
					scalable:true,
					width: '100%', //新页面宽度，默认为100%
					height: "100%", //新页面高度，默认为100%
				},
				extras: {
					version: pmt
					//					..... //自定义扩展参数，可以用来处理页面间传值
				},
				createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
				show: {
					autoShow: true, //页面loaded事件发生后自动显示，默认为true
					//					aniShow: animationType, //页面显示动画，默认为”slide-in-right“；
					//					duration: animationTime //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
				},
				waiting: {
					autoShow: true, //自动显示等待框，默认为true
					title: '', //等待对话框上显示的提示内容
					options: {
						background: 'rgba(0,0,0,0.8)',
						width: "100%", //等待框背景区域宽度，默认根据内容自动计算合适宽度
						height: "100%", //等待框背景区域高度，默认根据内容自动计算合适高度
						//						color: 'red',
					}
				}
			})
		})
	},
	loginNewOpen:function($_){
		$_.plusReady(function() {
			$_.openWindow({
				url: '../login.html',
				id: 'login',
				preload: true,
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
	},
	NewData: function(time) { //查询记录页面专用时间插件
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
	NewEnd: function(doc, self, $) { //查询记录页面专用时间插件
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
			options.beginYear = Bug.NewData(30000).beginYear; //年
			options.beginMonth = Bug.NewData(30000).beginMonth;
			options.beginDay = Bug.NewData(30000).beginDay; //时
			options.beginHours = Bug.NewData(30000).beginHours; //分
			options.beginMinutes = Bug.NewData(30000).beginMinutes; //秒

			options.endYear = Bug.NewData(0).beginYear; //年
			options.endMonth = Bug.NewData(0).beginMonth;
			options.endDay = Bug.NewData(0).beginDay; //时
			options.endHours = Bug.NewData(0).beginHours; //分
			options.endMinutes = Bug.NewData(0).beginMinutes; //秒

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
}