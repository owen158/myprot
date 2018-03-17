	
	function loadgame(gameType,gameID,model) {
		if (getCookie('login_judge')=='') {
			ClickSports();
			return;
		}
		var txwinow =  window.open('',gameType+gameID);
		var img = '<p style="text-align: center;margin-top: 100px;font-weight: bold;">'+'游戏正在加载中,请勿重复点击.....'+'</p>'+'<div  style="position: absolute;width: 276px;left: 50%;margin-left: -138px;margin-top: 200px;">'+'<img src="http://image.beike188.com/POLY/images/game_loading.gif"/>'+'</div>';
		txwinow.document.body.innerHTML='';
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
							data:{gameType:gameType,gameID:gameID},
							xhrFields:{withCredentials:true},
							success:function  (g_data) {
								if (g_data.msg=='error') {
									alert('系统错误');
									txwinow.close();
								}else if(g_data.msg=='process'){
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
					$('.xploading_bg').hide();
					$('.xploading').hide();
					$('.login-input').css('display', 'block');
					$('.login-after').css('display', 'none');
					$('#aucount_r ').css('display', 'block');
					$('#marquee_top').css('display','none');
					$('#_notice_div').css({
							'display':'block'
						});
					txwinow.close();
					changeImg_zc();
					changeImg();
					changeImg_zcn();
					alert('账号在别地登录！');
				}
			}
		});
		
		
	}

