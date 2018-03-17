//var center_src = "http://bl.tx1788.com/XPJ/";
//var xpj_src = "http://bl.tx1788.com/XPJ/";
var center_src = "http://192.168.0.61:83/XPJ/";
var xpj_src = "http://192.168.0.61:83/XPJ/";
var trans_token;
var balance;
var domin = document.domain; 

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
		$('#imgObj_zz').attr("src",center_src+"validateCode?timesp"+(new Date()).valueOf());
	$.ajax({
		type:"get",
		url:center_src+"checklogin.do",
		async:true,
		cache:false,
		xhrFields:{withCredentials:true},
		success:function  (data) {
			var str = data.msg;
			if (str == 'success') {
				trans_token = data.userkey;
				balance = data.balance;
				var userName = data.userName;
				$('.header_info .first').text(userName.slice(3));
				$('#lev_em').text(balance);
				$('.eveb_tipnum').text(balance+"元");
			}else if (str == 'faild'){

				window.location.href = '../vzt6.html';
				return;
			}else if(str == 'outlogin'){
				alert('账户在已在别处登录');
				window.location.href = '../vzt6.html';
				return;
			}
		},
		error:function  () {
			window.location.href = '../vzt6.html';
			return;
		}
	});
	//注销
	$('.header_info .last').on('click',function  () {
		$.ajax({
			type:"get",
			url:center_src+"logout.do",
			async:true,
			cache:false,
			xhrFields:{withCredentials:true},
			success:function  () {
				
			}
		});
		
		window.location.href = '../vzt6.html';
		delCookie('login_judge');
	})


    


})

/*点击修改提款密码，显示提款密码*/
$(function(){
	getUrl();	
function GetUrlPara()
　　{
　　　　var url = document.location.toString();
　　　　var arrUrl = url.split("?");
　　　　var para = arrUrl[1];
　　　　return para;
　　}
		 //获取url中的参数
		 function getUrl(){
		 	var li_index = GetUrlPara();
		 	if (li_index == undefined) return;
			var li_number = parseInt(li_index.replace(/[^0-9]/g,''));
			$('.con_left li').eq(li_number).trigger('click');		
		 }
        
			
		});

