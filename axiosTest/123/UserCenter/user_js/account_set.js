$(function() {
    $('.set_content .con_left li').on('click', function() {
        $('.set_content .con_left li').css({
            'background': 'none',
            'color': 'black'
        });

        $(this).css({
            'background-color': '#5f4234',
            'background-image': 'url(http://image.beike188.com/POLY/user_img/m-arrow.png)',
            'background-repeat': 'no-repeat',
            'background-position': '14px center',
            'color': 'white'
        });
        $('.set_content .con_right ').children().hide();
        $('.set_content .con_right ').children().eq($(this).index()).show();
    });

    $('#wd_get').on('click', function() {
        $('.black_wrap').show();
        $('.set_alert').show();
    });
    $('#btn_cancle').on('click', function() {
        $('.black_wrap').hide();
        $('.set_alert').hide();
    });
    
        $('.tc_off').click(function(){
    	$('.eveb_popup_wraptbdcg').hide();
    	$('.eveb_popupbdcg').hide();
    	
    });

		var login_bol = false;
		var pwd_bol = false;
		var conf_bol = false; //确认
		//登录密码验证
		function checkInput(pwd,confirm) {
			if ($('#l_OldPwd').val()=='') {
				alert('原密码不能为空');
				login_bol = false;
				return;
			};
			var pwdValue = $.trim(pwd.val());
			if (!/^[A-Za-z](?![a-zA-Z]+$)[0-9A-Za-z]{7,14}$/.test(pwdValue)) {
				alert('新密码不能为空或不正确！');
				login_bol = false;
				return;
			}else if (pwdValue == $('#l_OldPwd').val() ) {
				alert('新密码不能与原密码相同！');
				login_bol = false;
				return;
			}else{
				login_bol = true;
			}
			var confirmValue = $.trim(confirm.val());
			if (confirmValue!='') {
				if ($.trim($('#l_NewPwd').val())!= confirmValue) {
					alert('两次密码不一致！');
					login_bol = false;
					return;
				}else{
					login_bol = true;
				}
			}else{
				alert('确认密码不能为空！');
				login_bol = false;
				return;
			}


		}
		$("#changePassword").on('click',function () {
			checkInput($('#l_NewPwd'),$('#l_Confirmpwd'));
			if (login_bol) {
				$('.eveb_popup_wraptbdcg').show();
    			$('#eveb_popup_bank_bind_ok').show();
			}
			});
					
		$('#tc_confirm').on('click',function () {
					$('.eveb_popup_wraptbdcg').hide();
    				$('.eveb_popupbdcg').hide();
    			
					
				
				var password = $('#l_OldPwd').val();
				var npassword = $('#l_NewPwd').val();
				var renpassword = $('#l_Confirmpwd').val();
				if (login_bol) {
					
					$('.xploading_bg').show();
					$('.xploading').show();
						$.ajax({
							type:"post",
							url:center_src +"User/changePassword",
							data:{
								password:password,
								npassword:npassword,
								renpassword:renpassword
							},
							xhrFields:{withCredentials:true},
							success:function (data) {
								$('.xploading_bg').hide();
								$('.xploading').hide();
								if (data.msg == 'success') {
//										alert('修改成功');
//										$('.l_OldPwd').val();
//										$('.l_NewPwd').val();
                                        $('#eveb_popup_wraptbddele').show();
                                        $('#eveb_popup_bank_bind_dele').show();
                                        $('.popupbd_dele').on('click',function(){
                                        	$.ajax({
												type:"get",
												url:center_src+"logout.do",
												async:true,
												cache:false,
												xhrFields:{withCredentials:true},
												success:function  () {
													
												}
											});
											
											window.location.href = '../index.html';
											delCookie('login_judge');
									                                        	
                                        });
										
								}else {
										alert(data.msg);
								}

							},
							error:function () {
								alert('网络错误');
								$('.xploading_bg').hide();
								$('.xploading').hide();
							}
						});
				}
		});
	
		//修改提款密码
		function checkTpwd(pwd,confirm) {
			if ($('#t_OldPwd').val()=='') {
				alert('原密码不能为空！');
				pwd_bol = false;
				return;
			};
			var pwdValue = $.trim(pwd.val());
			if (!/^[0-9]{6}$/.test(pwdValue)) {
				alert('请输入六位提款密码！');
				pwd_bol = false;
				return;
			}else if (pwdValue == $('#t_OldPwd').val() ) {
				alert('新密码不能与原密码相同！');
				pwd_bol = false;
				return;
			}
			else{
				pwd_bol = true;
			}
			var confirmValue = $.trim(confirm.val());
			if (confirmValue!='') {
				if ($.trim($('#t_NewPwd').val())!= confirmValue) {
					alert('两次密码不一致！');
					pwd_bol = false;
					return;
				}else{
					pwd_bol = true;
				}
			}else{
				alert('确认密码不能为空！');
				pwd_bol = false;
				return;
			}


		}
		//修改提款密码
		$('#changeTpwd').on('click',function(){
			checkTpwd($('#t_NewPwd'),$('#t_Confirmpwd'));
			if (pwd_bol) {
				$('.eveb_popup_wraptbdcg').show();
				$('#eveb_popup_bank_bind_oktk').show();
				
			}			
		});
		$("#tk_ok").on('click',function () {
//				checkTpwd($('#t_NewPwd'),$('#t_Confirmpwd'));				
				$('.eveb_popup_wraptbdcg').hide();
				$('#eveb_popup_bank_bind_oktk').hide();
				
				var password = $('#t_OldPwd').val();
				var npassword = $('#t_NewPwd').val();
				var renpassword = $('#t_Confirmpwd').val();

				if (pwd_bol) {
						$('.xploading_bg').show();
						$('.xploading').show();
						$.ajax({
							type:"post",
							url:center_src +"User/changeQkpwd",
							data:{
								password:password,
								npassword:npassword,
								renpassword:renpassword
							},
							xhrFields:{withCredentials:true},
							success:function (data) {
								$('.xploading_bg').hide();
								$('.xploading').hide();
								if (data.msg == 'success') {
										alert('修改成功');
										$('#t_OldPwd').val('');
										$('#t_NewPwd').val('');
										$('#t_Confirmpwd').val('');
								}else {
										alert(data.msg);
								}
							},
							error:function () {
								alert('网络错误');
								$('.xploading_bg').hide();
								$('.xploading').hide();
							}
						});
				}
		});





});
