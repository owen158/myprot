var b = false;
var $reguuidValue;
var cagent = 'BL1';  
$(function() {
   $('#Verification-code_zc').focus(function(){        	 	
          	 	changeImg_zc();
          	 });
	
	var checkUseName = function(obj) {
		var username = $.trim(obj.val());
		if(!/^[A-Za-z](?![a-zA-Z]+$)[0-9A-Za-z]{4,9}$/.test(username)) {
			obj.siblings("h4").show().html('<i class="ico ico-error"></i>以字母开头，5-10位字母，数字组成');
			obj.siblings("h4").css('font-weight','bolder');
			obj.siblings("strong").hide();
//			obj.parent().find("img").attr("src", "http://image.beike188.com/POLY/images/red_icon.png");
			b = false;
		} else {
			obj.siblings("h4").hide();
//			obj.parent().find("img").attr("src", "http://image.beike188.com/POLY/images/g_icon.png");
			obj.siblings("strong").show();			
			b = true;
		}
	};
	
	
	$('#userid').on('focus',function  () { 
       $(this).siblings("strong").hide(); 
       $(this).siblings("h4").show().html('<i class="ico ico-notic"></i>以字母开头，5-10位字母，数字组成'); 
       $(this).siblings("h4").css('font-weight','lighter');
   })
	$('#password1').on('focus',function  () { 
       $(this).siblings("strong").hide(); 
       $(this).siblings("h4").show().html('<i class="ico ico-notic"></i>以字母开头，8-15位字母，数字组成'); 
       $(this).siblings("h4").css('font-weight','lighter');
   })
	$('#confirmpassword1').on('focus',function  () { 
       $(this).siblings("strong").hide(); 
       $(this).siblings("h4").show().html('<i class="ico ico-notic"></i>以字母开头，8-15位字母，数字组成'); 
       $(this).siblings("h4").css('font-weight','lighter');
   })
	$('#realname').on('focus',function  () { 
       $(this).siblings("strong").hide(); 
       $(this).siblings("h4").show().html('<i class="ico ico-notic"></i>请输入您的真实姓名'); 
       $(this).siblings("h4").css('font-weight','lighter');
   })
	$('#tel').on('focus',function  () { 
       $(this).siblings("strong").hide(); 
       $(this).siblings("h4").show().html('<i class="ico ico-notic"></i>请输入真实的手机号码'); 
       $(this).siblings("h4").css('font-weight','lighter');
   })
	$('#Verification-code_zc').on('focus',function  () { 
       $(this).siblings("strong").hide(); 
       $(this).siblings("h4").show().html('<i class="ico ico-notic"></i>请输入验证码'); 
       $(this).siblings("h4").css('font-weight','lighter');
   })
	
	
	
	$("#userid").blur(function() {
		checkUseName($(this));
	});
	
	 var checkrealname = function(obj) {
	     var checkrealname = $.trim(obj.val());
	     var reg1 = /^[\u4e00-\u9fa5]{2,4}$/;
	     if (!reg1.test(checkrealname)) {
	         obj.siblings("h4").show().html('<i class="ico ico-error"></i>必须为2-4位中文');
	         obj.siblings("h4").css('font-weight','bolder');
//	         obj.parent().find("img").attr("src", "http://image.beike188.com/POLY/images/red_icon.png");
			 obj.siblings("strong").hide();
	         b = false;
	     } else {
	         obj.siblings("h4").hide();
//	         obj.parent().find("img").attr("src", "http://image.beike188.com/POLY/images/g_icon.png");
             obj.siblings("strong").show();
	         b = true;
	     }
	 };
	 $("#realname").blur(function() {
	     checkrealname($(this));
	 });
	var checktel = function(obj) {
		var checktel = $.trim(obj.val());
		var reg2 = /^1[3,4,5,7,8]\d{9}$/;
		if(!reg2.test(checktel)) {
			obj.siblings("h4").show().html('<i class="ico ico-error"></i>请输入真实的手机号码');
			obj.siblings("h4").css('font-weight','bolder');
			obj.siblings("strong").hide();
//			obj.parent().find("img").attr("src", "http://image.beike188.com/POLY/images/red_icon.png");
			b = false;
		} else {
			obj.siblings("h4").hide();
//			obj.parent().find("img").attr("src", "http://image.beike188.com/POLY/images/g_icon.png");
            obj.siblings("strong").show();
			b = true;
		}
	};
	$("#tel").blur(function() {
		checktel($(this));
	});
	//  var checkEmail=function(obj){
	//      var email=$.trim(obj.val());
	//      if(email==''){
	//          obj.siblings("h4").show().html('<i class="ico ico-error"></i>邮箱不能为空');
	//          obj.parent().find("img").attr("src", "poly.tx1788.com/images/red_icon.png");
	//          b= false;
	//      }
	//      else if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(obj.val())) {
	//          obj.siblings("h4").show().html('<i class="ico ico-error"></i>邮箱格式不正确');
	//          obj.parent().find("img").attr("src", "poly.tx1788.com/images/red_icon.png");
	//          b= false;
	//      }else{
	//          obj.siblings("h4").hide();
	//          obj.parent().find("img").attr("src", "poly.tx1788.com/images/g_icon.png");
	//          b = true;
	//      }
	//  }
	//  $("#email").blur(function(){checkEmail($(this))});
	var checkPassword = function(obj) {
		var pwd = $.trim(obj.val());
		if(!/^[A-Za-z](?![a-zA-Z]+$)[0-9A-Za-z]{7,14}$/.test(pwd)) {
			
			obj.siblings("h4").show().html('<i class="ico ico-error"></i>以字母开头，8-15位字母，数字组成');
			obj.siblings("h4").css('font-weight','bolder');
			obj.siblings("strong").hide();
//			obj.parent().find("img").attr("src", "http://image.beike188.com/POLY/images/red_icon.png");
			b = false;
		} else {
			obj.siblings("h4").hide();
//			obj.parent().find("img").attr("src", "http://image.beike188.com/POLY/images/g_icon.png");
            obj.siblings("strong").show();
			b = true;
		}
	};
	$("#password1").blur(function() {
		checkPassword($(this));
	});

	
	var checkConfirmPassword = function(obj) {
			var confirmPwd = $.trim(obj.val());
			if($.trim($("#password1").val()) != '') {
				if($("#password1").val() != confirmPwd) {
					obj.siblings("h4").show().html('<i class="ico ico-error"></i>两次不一样');
					obj.siblings("h4").css('font-weight','bolder');
//					obj.parent().find("img").attr("src", "http://image.beike188.com/POLY/images/red_icon.png");
                    obj.siblings("strong").hide();
					b = false;
				} else {
					obj.siblings("h4").hide();
//					obj.parent().find("img").attr("src", "http://image.beike188.com/POLY/images/g_icon.png");
                    obj.siblings("strong").show();
					b = true;
				}
			}
		};
		$("#confirmpassword1").blur(function() {
		checkConfirmPassword($(this));
	});
		//  var checkQQ = function(obj) {
		//      var qq = $.trim(obj.val());
		//      if (qq != '' && !/^\d+$/.test(qq)) {
		//          obj.siblings("h4").show().html('<i class="ico ico-error"></i>格式不正确');
		//          b = false;
		//          obj.parent().find("img").attr("src", "poly.tx1788.com/images/red_icon.png");
		//      } else {
		//          obj.siblings("h4").hide();
		//          b = true;
		//      }
		//  }
		//  $("#telephone").blur(function() {
		//      checkQQ($(this));
		//  });
		//
		//  var checkQQ = function(obj) {
		//      var qq = $.trim(obj.val());
		//      if (qq != '' && !/^\d+$/.test(qq)) {
		//          obj.siblings("h4").show().html('<i class="ico ico-error"></i>格式不正确');
		//          b = false;
		//          obj.parent().find("img").attr("src", "poly.tx1788.com/images/red_icon.png");
		//      } else {
		//          obj.siblings("h4").hide();
		//          b = true;
		//      }
		//  }

	  var checkCode;

	  $("#Verification-code_zc").blur(function () {
	      checkCode($(this));
	  });
	  checkCode = function (obj) {
	      var checkCode = $.trim(obj.val());
	      if (checkCode == '' || checkCode == undefined ) {
				obj.siblings("h4").show().html('<i class="ico ico-error"></i>请输入验证码');
				obj.siblings("h4").css('font-weight','bolder');
//	          obj.parent().find("strong img").attr("src", "http://image.beike188.com/POLY/images/red_icon.png");
               obj.siblings("strong").hide();
	          b = false;
	      } else {
	          obj.siblings("h4").hide();
//	          obj.parent().find("strong img").attr("src", "http://image.beike188.com/POLY/images/g_icon.png");
              obj.siblings("strong").show();
	          b = true;
	      }
	  }; 
	
	function User_login(tname,tpwd,savelogin,imgcode) { //用户登录
		$('.xploading_bg').show();
		$('.xploading').show();
		$.ajax({
			type: "post",
			url: xpj_src+"login.do",
			dataType: "json",
			async: true,
			data: {
				tname:cagent+tname,
				tpwd: tpwd,
				savelogin: savelogin,
				imgcode:imgcode
			},
			xhrFields:{withCredentials:true},
			success: function(tdata) {
				setCookie('login_judge','true',1);
				var str = tdata.status;
				if(str == 'ok') {
				guanbi();
				$('.xploading_bg').hide();
				$('.xploading').hide();
					var balance = tdata.balance;
					var userName = tdata.userName;
					$('.login-input').css('display', 'none');//登录框
					$('.login-after').css('display', 'block');//用户登录后列表
					$('#aucount_r ').css('display', 'none');//开户
//					$('#_notice_div').css('top','0px');
//					$('.header-center span').css('color','#fff');
//					$('.header-center li').css('color','#fff');
					$('#marquee_top').css({
						'display':'block'
					});
					$('.login-after .c-blues').eq(0).html(userName.slice(3));
					$('.login-after .c-blues').eq(1).html(balance);
					 
				} else if(str == 'faild'){
					changeImg();
					changeImg_zcn();
					$('.xploading_bg').hide();
					$('.xploading').hide();
					alert(tdata.errmsg);
				}

			},
			error:function  () {
				guanbi();
				changeImg();
				changeImg_zcn();
				$('.xploading_bg').hide();
				$('.xploading').hide();
				alert('登录失败');
			}
		});
	}

		
			
		

	//    注册事件
	$("#btnSubmit").click(function() {
		
			$.ajax({
				type:"get",
				url:xpj_src+"User/getToken",
				async:true,
				xhrFields:{withCredentials:true},
				success:function  (token_data) {
					$reguuidValue = token_data.msg;
			var selectArr = $('.tgSelect');
			var tpwd = '';
			for (var i = 0; i < selectArr.length; i++) {
					if (selectArr[i].value == "-") {
							alert('请选择取款密码！');
							return;
					}
					tpwd = tpwd.concat(selectArr[i].value) ;
			}

		
		var $userName = $("#userid");
		var $password = $("#password1");
		var $rePassword = $("#confirmpassword1");
		var $phone = $("#tel");
		var $imgCode = $('#Verification-code_zc');
		var $realName = $('#realname');
		var qkpwd = tpwd;
		var reqkpwd = tpwd;
		checkUseName($userName);
		if(!b) return;
		checkrealname($realName);
		if (!b) return;
		checktel($phone);
		if(!b) return;
		checkPassword($password);
		if(!b) return;
		checkConfirmPassword($rePassword);
		if(!b) return;
		checkCode($imgCode);
		if (!b) return;
		if($("#agree:checked").length == 0) {
			$("#b_agree").show().find("span").html("如果您同意我们的条件和条款，且年满18岁，请勾选");
			b = false;
		}
		if(b) {
			$('.xploading_bg').show();
			$('.xploading').show();
			var userNameValue = $userName.val();
			var phoneValue = $phone.val();
			var passwordValue = $password.val();
			var rePasswordValue = $rePassword.val();
			var imgcode = $imgCode.val();
			var realName = $realName.val();

		register ();
		function register() {
			$.ajax({
				type: "POST",
				url: xpj_src+"User/register",
				dataType: "json",
				data: {
					userName: userNameValue,
					reguuid :$reguuidValue,
					passWord: passwordValue,
					mobileNo: phoneValue,
					repassWord: rePasswordValue,
					imgcode:imgcode,
					realName:realName,
					qkpwd:qkpwd,
					reqkpwd:reqkpwd,
					cagent:cagent
				},
				xhrFields:{withCredentials:true},
				success: function(data) {
					changeImg_zc();
					var str = data.msg;
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
						case 'success':
							$('.xploading_bg').hide();
							$('.xploading').hide();
							alert('恭喜您，注册成功');
							var tname = userNameValue;
							var tpwd = passwordValue;
							var  savelogin = 1;
							User_login(tname,tpwd,savelogin);		
							setTimeout(function  () {
								window.location.href ="../index.html";
							},500)
							break;
						case 'error':
							alert('网络异常');
							$('.xploading_bg').hide();
							$('.xploading').hide();
							break;
					}
				},
				error: function(xhr, textStatus, errorThrown) {
					changeImg_zc();
					$('.xploading_bg').hide();
					$('.xploading').hide();
					alert('网络错误');
				}
			});
		}

		}
		},
				error:function  () {
					alert('获取失败');
				}
			});
	});


	//登录
	$('#Verification-codes').focus(function(){        	 	
          	 	changeImg()
          	 });
	$('#top_login').on('click', function() {
		var tname = $('#top_uid').val();
		var tpwd = $('#top_pwd').val();
		var imgcode = $('#Verification-codes').val();
		var  savelogin = 1;
		if (tpwd == ''||tname == '') {
			alert('请输入用户名和密码');
		}else if(imgcode == ''){
			
			alert('请输入验证码');
		}else{
			User_login(tname,tpwd,savelogin,imgcode);
		}

	});
	$('#accCodes').focus(function(){
		changeImg_zcn();
	});
	$('#Login').on('click',function  () {
		var tname = $('#accountid').val();
		var tpwd = $('#accpassword').val();
		var imgcode = $('#accCodes').val();
		var  savelogin = 1;
		if (tpwd == ''||tname == '') {
			alert('请输入用户名和密码');
		}else{
			User_login(tname,tpwd,savelogin,imgcode);
		}
	});
	//回车点击登录
	var top_btn = document.getElementById('top_login');
	var login = document.getElementById('Login');
	var btn_submit = document.getElementById('btnSubmit');
	document.onkeydown = function  (e) {
		 var e = e || event;
		if (e.keyCode == 13) {
			if (document.getElementById('denglu1').style.display == 'block') {
				login.click();
			}else if($('.login-input').get(0).style.display == 'block'){top_btn.click();}

	}
};
	//注销
	$('.login-out').on('click', function() {
		
		$.ajax({
			type: "get",
			url: xpj_src+"logout.do",
			async: true,
			xhrFields:{withCredentials:true},
			success: function() {
				changeImg_zc();
				changeImg();
				changeImg_zcn();
			}
		});
		delCookie('login_judge');
		
		$('.login-input').css('display', 'block');
		$('.login-after').css('display', 'none');
		$('#aucount_r').css('display', 'block');
//		$('#_notice_div').css('top','58px');
//		$('.header-center span').css('color','#000');
//		$('.header-center li').css('color','#000');
		$('#marquee_top').css({
				'display':'none'
					});

	});

});
