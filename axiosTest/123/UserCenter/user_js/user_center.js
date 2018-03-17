//时间格式转换
function Format_cov(time) {
    var date = new Date(time);
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = date.getDate() + ' ';
    h = (date.getHours()<10? '0'+ date.getHours():date.getHours())+ ':';
    m = (date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()) + ':';
    s = (date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds());
    var fommat_time = Y + M + D + h + m + s;
    return fommat_time;
}
function userCenter(){
	$.ajax({                    
            type:"post",
			url:center_src+"User/getUserInfo",
			async:true,
			cache:false,
			xhrFields:{withCredentials:true},
			success:function  (usercenter) {
				var emainNumber = usercenter.email;//email
				var realname = usercenter.realname;
				var loginTime = Format_cov(usercenter.login_time.time);//上次登录时间
                var Mobile = usercenter.mobile;//手机号
                var regDate = Format_cov(usercenter.reg_date.time);//注册时间
                var userName = usercenter.username;//用户名
                var vipLevel = usercenter.vip_level;//会员等级
                var Wallet = usercenter.wallet;//账户余额
                $('#username').text(userName.slice(3));
                $('#set_username').text(realname);
                $('#userregdate').text(regDate);
                $('#userlogintime').text(loginTime);
                $('#userWallet').text(Wallet);
                $('#setregDate').text(regDate);
               if (emainNumber == '') {
               	   $('#useremail').text('暂无');
               	   $('#setemail').text('暂无');
               	
               } else{
               	 $('#useremail').text(emainNumber);
               	 $('#setemail').text(emainNumber);
               	
               }
              if (Mobile == '') {
              	$('#userMobile').text('暂无');
              	$('#setmoile').text('暂无');
              	
              } else{
              	$('#userMobile').text(Mobile);
              	$('#setmoile').text(Mobile);
              }
               
              /*会员等级*/
			   var arr = new Array('一星','二星','三星','四星','五星');
			   var arr2 = new Array('21px','42px','63px','84px','105px');
//             $('.vipLevel').text(arr[vipLevel-1]);
               $('.vipLevel_img').css('width',arr2[vipLevel-1]);

			},
			error:function  () {
				alert('网络错误');
			}
           
          });
	
	
}
userCenter();
