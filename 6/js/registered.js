var jrg='http://192.168.0.7:8480/XPJ/'
var reguuidvalue;
var cagent='BL1'
var changeImg_zcn = function(){
	var src = jrg+'validateCode?timesp'+(new Date()).valueOf();
	$("#checkNum_img1").attr("src", src);
}
var changeImg = function(){
	var src = jrg+'validateCode?timesp'+(new Date()).valueOf();
	$("#checkNum_img1").attr("src", src);
}
$(function(){
	var usernam,pass,re_pass,code,real_name,pwd,mobile,email,rgdata;
	regUsername($("#username"),$("#username").next());
	regpass($("#pass"),$("#pass").next());
	regre_pass($("#re_pass"),$("#re_pass").next(),$("#pass"))
	regcode($("#code"),$("#code").next());
	regz_sUsername($("#real_name"),$("#real_name").next());
	regmobile($("#mobile"),$("#mobile").next());
	$("#checkNum_img1").attr("src", jrg+'validateCode?timesp'+(new Date()).valueOf());
	$('#register').on('click',function(){
		username = $("#username").val();
		pass = $("#pass").val();
		re_pass = $("#re_pass").val();
		code = $("#code").val();
		real_name = $("#real_name").val();
		mobile = $("#mobile").val();
		email = $("#email").val();

		pwd = $("#pwd1").val()+$("#pwd2").val()+$("#pwd3").val()+$("#pwd4").val()+$("#pwd5").val()+$("#pwd6").val()
		if(Judgmentname == false || Judgmentpass==false || Judgmentre_pass==false || Judgmentcode==false || Judgmentreal_name==false || Judgmentmobile ==false ||$("#check1").attr("checked") == undefined || pwd.length != 6){
			if($("#check1").attr("checked") == undefined){
				$("#check1").next().empty()
				var text = "<strong style='padding:2px 0 0 0;text-align:left;' class='star'>&nbsp;是或同意开户协议</strong>"
			    $("#check1").next().append(text);
			}else if(pwd.length != 6){ 
				alert('请选择取款密码')
			}
			return;
		}else{
			$('.xploading_bg').show();
			$('.xploading').show();
			$.ajax({
				type:"get",
				url:jrg+"User/getToken",
				async:true,
				xhrFields:{withCredentials:true},
				success:function  (token){
					reguuidvalue = token.msg;
					rgdata = {userName: username,mobileNo: mobile,passWord:pass,repassWord:re_pass,reguuid:reguuidvalue,imgcode:code,qkpwd:pwd,reqkpwd:pwd,cagent:cagent};
					$.ajax({
							type: "POST",
							url: jrg+"User/register",
							dataType: "json",
							data:rgdata,
							xhrFields:{withCredentials:true},
							success: function(reg) {
								$('.xploading_bg').hide();
								$('.xploading').hide();
								changeImg(this)
								var str = reg.msg;
								switch(str) {
									case '001':
										$('.xploading_bg').hide();
										$('.xploading').hide();
										alert('用户名不能为空');
										break;
									case  '002':
										$('.xploading_bg').hide();
										$('.xploading').hide();
										alert('用户名格式不正确');
										break;
									case '003':
										$('.xploading_bg').hide();
										$('.xploading').hide();
										alert('手机号不能为空');
										break;
									case '004':
										$('.xploading_bg').hide();
										$('.xploading').hide();
										alert('手机号不正确');
										break;
									case '005':
										$('.xploading_bg').hide();
										$('.xploading').hide();
										alert('密码不能为空');
										break;
									case '006':
										$('.xploading_bg').hide();
										$('.xploading').hide();
										alert('确认密码不能为空');
										break;
									case '007':
										$('.xploading_bg').hide();
										$('.xploading').hide();
										alert('两次密码不一致');
										break;
									case '008':
										$('.xploading_bg').hide();
										$('.xploading').hide();
										alert('密码格式不正确');
										break;
									case '009':
										$('.xploading_bg').hide();
										$('.xploading').hide();
										alert('账号已存在');
										break;
									case '010':
										$('.xploading_bg').hide();
										$('.xploading').hide();
										alert('调用错误');
										break;
									case '011':
										$('.xploading_bg').hide();
										$('.xploading').hide();
										alert('验证码不能为空');
										break;
									case '012':
										$('.xploading_bg').hide();
										$('.xploading').hide();
										alert('验证码错误');
										break;
									case '013':
										$('.xploading_bg').hide();
										$('.xploading').hide();
										alert('取款密码为空');
										break;
									case '014':
										$('.xploading_bg').hide();
										$('.xploading').hide();
										alert('确认取款密码为空');
										break;
									case '015':
										$('.xploading_bg').hide();
										$('.xploading').hide();
										alert('两次取款密码不一致');
										break;
									case '016':
										$('.xploading_bg').hide();
										$('.xploading').hide();
										alert('取款密码格式不正确');
										break;
									case '017':
										$('.xploading_bg').hide();
										$('.xploading').hide();
										alert('取款密码不能与登录密码相同');
										break;
									case 'success':
										$('.xploading_bg').hide();
										$('.xploading').hide();
										alert('恭喜您，注册成功');
										var tname = cagent+username;
										var tpwd = pass;
										var  savelogin = 1;
										User_login(tname,tpwd,savelogin);		
										setTimeout(function  () {
											window.location.href='index.html';
										},500)
										break;
									case 'error':
										alert('网络异常');
										break;
								}
							},
							error: function(xhr, textStatus, errorThrown) {
								changeImg(this);
								alert('网络错误');
							}
						});
				},
				error:function  () {
					alert('获取失败');
				}
			})
		}
	})
	function User_login(tname,tpwd,savelogin,imgcode) { //用户登录
			$('.xploading_bg').show();
			$('.xploading').show();
			$.ajax({
				type: "post",
				url: jrg+"login.do",
				dataType: "json",
				async: true,
				data: {tname: tname,tpwd: tpwd,savelogin: savelogin,imgcode:imgcode},
				xhrFields:{withCredentials:true},
				success: function(tdata) {
					var str = tdata.status;
					if(str == 'ok') {
						$('.xploading_bg').hide();
						$('.xploading').hide();
						var balance = tdata.balance;
						var userName = tdata.userName;
						// window.location.href='index.html';
					} else if(str == 'faild'){
						changeImg(this)
						$('.xploading_bg').hide();
						$('.xploading').hide();
						alert(tdata.errmsg);
					}
				},
				error:function  () {
					changeImg(this);
					changeImg_zcn();
					$('.xploading_bg').hide();
					$('.xploading').hide();
					alert('登录失败');
				}
			});
		}
})	
	
