$(document).ready(function() {  
	getcardList ();
	/*弹窗 银行提款成功*/
	var bankName = []; 
	var checkCard = false;

	function checkcard() {
//		var bankCode = $('#bindcard_bankId').val();
		var account = document.eveb_bank_bind.bindcard_account.value;
		var reg = /^(\d{16}|\d{19})$/;
		var numReg = /^[0-9]{6}$/;
		var usernamereg = /^[\u4e00-\u9fa5]{2,4}$/;
		var cardNum = $('#bindcard_account').val();
		var cardAddress = $('#bindcard_openingBank').val();
		var cardUserName = $('#bindcard_accountHolder').val();
		var bankCode = $('#bindcard_bankId').val();
		var password = $('#bindcard_password').val();
		var province1 = $('#province1').val();
		if(bankCode == 0) {
			checkCard = false;
			alert('请选择银行！');
			return;
		} else {
			checkCard = true;
		}
       if(cardUserName == ''){
          checkCard = false;
			alert('请填写开户名');
			return;
       }else if(!usernamereg.test(cardUserName)){
       
            checkCard = false;
			alert('必须为2-4位中文');
			return;  
       }else{
          checkCard = true;
       }
		if(cardAddress == '') {
			checkCard = false;
			alert('请填写开户支行');
			return;
		} else {
			checkCard = true;
		}

		if(province1 == '') {
			checkCard = false;
			alert('请选择开户地');
			return;

		} else {
			checkCard = true;

		}
		if(!reg.test(account)) {
			checkCard = false;
			alert("银行卡号格式错误，应该是16或者19位数字！");
			return;

		} else {
			checkCard = true;
		}
		if(password == '') {
			checkCard = false;
			alert('请输入6位取款密码');
			return;

		} else if(!numReg.test(password)){
			checkCard = false;
			alert('密码错误！请重新输入!');
			return;
		}else{
			checkCard = true;
		}
	}

	$('#btn_save_bank_card').on('click', function() {
		checkcard();
//		var bankCode = $('#bindcard_bankId option').val();
		var cardNum = $('#bindcard_account').val();
		var cardAddress = $('#bindcard_openingBank').val();
		var cardUserName = $('#bindcard_accountHolder').val();
		var bankCode = $('#bindcard_bankId').val();
		var password = $('#bindcard_password').val();

		if(checkCard) {
			$.ajax({
				type: "post",
				url: center_src + "User/addUserCard",
				data: {
					cardUserName: cardUserName,
					bankCode: bankCode,
					cardNum: cardNum,
					cardAddress: cardAddress,
					password: password

				},
				xhrFields:{withCredentials:true},
				success: function(addcard) {
					var cardMsg = addcard.msg;
					if(cardMsg == 'success') {
                       $('#eveb_popup_bank_bind').hide();
                       $('.eveb_popup_wraptbdyhk').hide();
                       $('.eveb_popup_wraptbdcg').show();
                       $('.eveb_popupbdcg').show();
						getcardList ();
					} else {
						alert(cardMsg);
					}

				},
				error: function() {
					alert('网络错误');
				}
			});
		}
	})
	//获取银行卡列表
	function getcardList () {
		$.ajax({
		type:"post",
		url:center_src + "User/getUserCard",
		async:true,
		xhrFields:{withCredentials:true},
		success:function(data){
			if ($('.eveb_withdraow_boxtk').siblings().length>0) {
				$('.eveb_withdraow_boxtk').siblings().remove();
			}
			if ($('#selectNum').siblings().length>0) {
				$('#selectNum').siblings().remove();
			}
		
		$('#amountnum').val('');
		$('#withdrawalPwdnum').val('');
		
		var bankOption;
		var bankList;
		for (var i = 0; i < data.length; i++) {
		
			bankOption ="<option value="+ data[i].id+">"+ data[i].card_num+"</option>";
			$('<div class="eveb_withdraow_box" bankid ='+ data[i].id+'><div class="eveb_withdraow_box_top">'+'<strong>'+data[i].bank_name+'</strong>'+'<span class="eveb_withdraw_x">'+'</span>'+'<p class="withdraw_bank">' + data[i].card_num + '</p>'+'</div>'+'<em>'+'<div class="fl">开户人：<strong class="withdraw_name">' + data[i].card_username + '</strong>'+'</div>'+'<div class="fr">'+'开户行:'+'<strong>' + data[i].card_address + '</strong>'+'</div>'+'</em>'+'</div>').insertBefore('.eveb_withdraow_boxtk');
			$('.bankAccountNoFormat').append(bankOption);
			bankName.push(data[i].card_username);
			
		 }
//		$('#bankAccountName').val(data[0].card_username);

		}

	});
	}
	$('#bankAccountNoFormat').on('change',function(){
		var bankAccountNoFormat = document.getElementById('bankAccountNoFormat');
		var sldex = bankAccountNoFormat.selectedIndex;
		$('#bankAccountName').val(bankName[sldex-1]);
		
	})

	var bankCode;
	$('.eveb_withdraw_x').live('click',function  () {
			bankCode = $(this).parent().parent().attr("bankid");
//			document.getElementById("delebank").reset();
				$('#login_pwd').val('');
			$('.eveb_popup_wraptbddete').show();
			$('.set_alertdele').show();
	})
    $('#btn_cancledele').click(function(){
    	$('.eveb_popup_wraptbddete').hide();
		$('.set_alertdele').hide();

    });
		/*银行卡删除成功*/
    $('.popupbd_dele').click(function(){
    	$('.eveb_popup_wraptbddele').hide();
        $('.eveb_popupbddele').hide();
				/*没有银行卡时开户人和卡号清空*/
        var bankID=$('.eveb_withdraow_box').attr('bankid');
				if(bankID ==undefined){
						document.getElementById("eveb_withdraw").reset();

					}


    });

	//删除银行卡
	var deleBank = false;
	function DeleBank () {
		var bankReg = /^[0-9]{6}$/;
		var password = $('#login_pwd').val();
		if(password == '') {
				deleBank = false;
				alert('请输入6位取款密码');
				return;

			} else if(!bankReg.test(password)){
				deleBank = false;
				alert('密码错误！请重新输入!');
				return;
			}else{
				deleBank = true;
			}
	}

		$('#btn_getpwddele').on('click',function(){
			DeleBank ();
			var bankID = bankCode;
			var password = $('#login_pwd').val();
            if(deleBank){

            	$.ajax({
                     type:"post",
                     url:center_src +"User/delUserCard",
                     async:true,
                     xhrFields:{withCredentials:true},
                     data:{
                        cardId:bankID,
                        password:password
                     },
                     success:function (data) {
						var dataMsg=data.msg;
                     	if(dataMsg =='success'){
                            $('.eveb_popup_wraptbddete').hide();
                            $('.set_alertdele').hide();
							$('#eveb_popup_wraptbddele').show();
                            $('#eveb_popup_bank_bind_dele').show();
		                    getcardList ();
                     	} else {
							alert(dataMsg);
						}
                    },
					error: function() {
							alert('网络错误');
					}
                 });

            }
	    });
     /*提款金额*/
    function CreDitnum(){ 	
    	creDitnum = false;
        var passwordReg = /^[0-9]{6}$/;
        var credit=$('#amountnum').val();
        var password=$('#withdrawalPwdnum').val();
        var selectNum=$('#bankAccountNoFormat').val();
        if(selectNum == ''){
	    	creDitnum = false;
	    	alert('请选择卡号');
	    	return;	    	
	    }else{
	    	creDitnum = true;
	    }
	    if (credit == "") {
	    	creDitnum = false;
	    	alert('请输入提款金额！');
	    	return;
	    	
	    }else if(parseFloat(credit)<100){
	    	creDitnum = false;
	    	alert('提款金额不能少于100');
	    	return;
	    }else if(parseFloat(credit)>500000){
	        creDitnum = false;
	    	alert('提款金额不能大于500,000');
	    	return;    
	    }else{
	       creDitnum = true;
	    }	    
	    if (password == '') {
	    	creDitnum = false;
	    	alert('请输入提款密码！');
	    	return;
	    	
	    } else if(!passwordReg.test(password)){
	    	
	    	creDitnum = false;
	    	alert('请输入6位数字提款密码！');
	    	return;
	    }else{
	    	creDitnum = true;
	    	
	    }  
	    
	    
    }
    
    $('#btn_save').on('click',function(){
    	CreDitnum();
    	var cardid = $('#bankAccountNoFormat').val();
    	var credit=$('#amountnum').val();
        var password = $('#withdrawalPwdnum').val();
        if(creDitnum){
        	 $('.xploading_bg').show();
             $('.xploading').show();
        	$.ajax({
                     type:"post",
                     url:center_src +"User/WithDraw",
                     async:true,
                     xhrFields:{withCredentials:true},
                     data:{
                        cardid:cardid,
                        password:password,
                        credit:credit
                     },
                     success:function (creditNum) {
						var creditNums=creditNum.msg;
                     	if(creditNums == 'success'){
                     		$('.xploading_bg').hide();
                            $('.xploading').hide();
                           alert('提款成功');
//		                     getcardList ();
                     	} else {
                     		$('.xploading_bg').hide();
                            $('.xploading').hide();
							alert(creditNums);
						}
                    },
					error: function() {
						alert('网络错误');
						$('.xploading_bg').hide();
                         $('.xploading').hide();
					}
                 });
        	
        	
        }
    	
    	
    })
    
    
});
