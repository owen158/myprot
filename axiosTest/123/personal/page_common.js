//var xpj_src = "http://bl.tx1788.com/XPJ/";
var xpj_src = "http://192.168.0.61:83/XPJ/";
var domin = document.domain; 
	//cookie方法封装
	function getCookie(cookie_name) {
	 	if (document.cookie.length>0) {
	 		c_start = document.cookie.indexOf(cookie_name+'=');
	 		if (c_start!=-1) {
	 			c_start = c_start +cookie_name.length+1;
	 			c_end = document.cookie.indexOf(';',c_start);
	 			if (c_end == -1 ) c_end = document.cookie.length;
	 			return unescape(document.cookie.substring(c_start,c_end));	
	 		};
	 	};
	 	return '';
	}
	function setCookie (name,value,days) {
		var exday = new Date();
		 exday.setDate(exday.getDate()+days);
		document.cookie = name+'='+escape(value)+((days == null)? "" : ";expires="+ exday.toGMTString())+ "domin="+domin+";path=/";
	}
	
	//删除cookies
function delCookie(name)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString()+"domin="+domin+";path=/" ;
}
$(function  () {
		
		$.ajax({
			type:"get",
			url:xpj_src+"checklogin.do",
			async:true,
			cache:false,
			contentType: 'text/plain',
			xhrFields:{withCredentials:true},
			success:function  (data) {
				var str = data.msg;
				if (str == 'success') {
					var balance = data.balance;
					var userName = data.userName;
					$('.login-input').css('display','none');
					$('.login-after').css('display','block');
					$('#aucount_r ').css('display', 'none');
//					$('#_notice_div').css('display','none');
					$('#marquee_top').css({
						'display':'block'
					});
					$('.login-after .c-blues').eq(0).html(userName.slice(3));
					$('.login-after .c-blues').eq(1).html(balance);
				}
				else if(str == 'faild'){
				$.ajax({
					type:"get",
					url:xpj_src+"checkcookie.do",
					async:true,
					cache:false,
					xhrFields:{withCredentials:true},
					success:function  (check_data) {
						if (check_data.msg == 'success') {
							var balance = check_data.balance;
							var userName = check_data.userName;
							$('.login-input').css('display','none');
					$('.login-after').css('display','block');
					$('#aucount_r ').css('display', 'none');
//					$('#_notice_div').css('display','none');
					$('#marquee_top').css({
						'display':'block'
					});
					$('.login-after .c-blues').eq(0).html(userName.slice(3));
					$('.login-after .c-blues').eq(1).html(balance);
								}
						if (check_data.msg == 'faild') {
							delCookie('login_judge');
							$('.login-input').css('display', 'block');
							$('#aucount_r').css('display', 'block');


						}
							}
				});
				}
				else if(str == 'outlogin'){
					$('.xploading_bg').hide();
					$('.xploading').hide();
					$('.login-input').css('display', 'block');
					$('.login-after').css('display', 'none');
					$('#aucount_r ').css('display', 'block');
//					$('#_notice_div').css('display','block');
					$('#marquee_top').css({
						'display':'none'
					});
					alert('账号在别地登录！');
				}
			}
		});
		$('.imgObjs').attr("src",xpj_src+"validateCode?timesp"+(new Date()).valueOf());
		
		
 
		$(' #m4 .sub li').eq(4).on('click',function  () {
			var txwinow =  window.open('','BBIN2');
			var img = '<p style="text-align: center;margin-top: 100px;font-weight: bold;">'+'游戏正在加载中,请稍后.....'+'</p>'+'<div  style="position: absolute;width: 276px;left: 50%;margin-left: -138px;margin-top: 200px;">'+'<img src="http://image.beike188.com/POLY/images/game_loading.gif"/>'+'</div>';
			txwinow.document.write(img);
			$.ajax({
			type:"get",
			url:xpj_src+"checklogin.do",
			async:true,
			cache:false,
			xhrFields:{withCredentials:true},
			success:function  (data) {
				if (data.msg == 'success') {
					$.ajax({
						type:"get",
						url:xpj_src+"User/forwardGame",
						async:true,
						data:{gameID:"2",gameType:"BBIN"},
						xhrFields:{withCredentials:true},
						success:function  (g_data) {
							if (g_data=='error') {
								alert('系统错误');
								txwinow.close();
							}else if(g_data=='process'){
								alert('系统维护中');
								txwinow.close();
							}else{
								txwinow.location.href = g_data.msg;
							}
						},
						error:function  () {
							txwinow.close();
							alert('游戏加载失败');
						}
					});
				}else if(data.msg == 'faild'){
					ClickSports();
					txwinow.close();
				}else if(data.msg == 'outlogin'){
					txwinow.close();
					$('.xploading_bg').hide();
					$('.xploading').hide();
					$('.login-input').css('display', 'block');
					$('.login-after').css('display', 'none');
					$('#aucount_r ').css('display', 'block');
//					$('#_notice_div').css('display','block');
					$('#marquee_top').css({
						'display':'none'
					});
					alert('账号在别地登录！');
				}
			}
		});

		})
		$(' #m4 .sub li').eq(3).on('click',function  () {
			var txwinow =  window.open('','SB2');
			var img = '<p style="text-align: center;margin-top: 100px;font-weight: bold;">'+'游戏正在加载中,请稍后.....'+'</p>'+'<div  style="position: absolute;width: 276px;left: 50%;margin-left: -138px;margin-top: 200px;">'+'<img src="http://image.beike188.com/POLY/images/game_loading.gif"/>'+'</div>';
			txwinow.document.write(img);
			$.ajax({
			type:"get",
			url:xpj_src+"checklogin.do",
			async:true,
			cache:false,
			xhrFields:{withCredentials:true},
			success:function  (data) {
				if (data.msg == 'success') {
				$.ajax({
						type:"get",
						url:xpj_src+"User/forwardGame",
						async:true,
						data:{gameID:"2",gameType:"SB"},
						xhrFields:{withCredentials:true},
						success:function  (g_data) {
							if (g_data=='error') {
								alert('系统错误');
								txwinow.close();
							}else if(g_data=='process'){
								alert('系统维护中');
								txwinow.close();
							}else{
								txwinow.location.href = g_data.msg;
							}

						},
						error:function  () {
							alert('游戏加载失败');
							txwinow.close();
						}
					});
				}else if(data.msg == 'faild'){
					ClickSports();
					txwinow.close();
				}else if(data.msg == 'outlogin'){
					txwinow.close();
					$('.xploading_bg').hide();
					$('.xploading').hide();
					$('.login-input').css('display', 'block');
					$('.login-after').css('display', 'none');
					$('#aucount_r ').css('display', 'block');
//					$('#_notice_div').css('display','block');
					$('#marquee_top').css({
						'display':'none'
					});
					alert('账号在别地登录！');
				}
			}
		});
		})


		$('.wraperl').on('click',function  () {
			$('#zhuce_btn').trigger('click');
		})
		
		


		function getFloat() {
//			 $("#service a").hover(function() {
//				$(this).find("span").show();
//			}, function() {
//				$(this).find("span").hide();
//			})
//			 $('.service_top').on('click',function  () {
//			 	 $("html,body").animate({scrollTop:0}, 400);
//			 })
			 $('#service_left_span').on('click',function(){
			 	
			 	$('#service_left').hide();
			 	
			 });
			 $('#service_right_span').on('click',function(){ 
              
             $('#service').hide(); 
              
          });
			 
	}
		getFloat()
		
		
	
	

	})
