$(function() {
    transfer.init();
    $('#Verification-code_zzs').on('focus',function  () {
    	$(this).val('');
    })
});

function toDecimal(x) {
  var f;
    if (isNaN(x)) {
        return x;
      }else {
         f = parseFloat(x);
        f = Math.round(x * 100) / 100;
    }
  return f;
}
var errmsg = [
    '转账平台错误',
    '转账金额不正确',
    'token获取失败',
    '图形验证码错误',
    '转账未完成请稍后再试',
    '余额不足',
    '钱包查询出错',
	'系统错误,请稍后再试',
	'系统维护中，请稍后操作',
    '转账成功'
];

function msg_alert (msgs) {
	$('#trans_msg').text('转账失败');
	$('#eveb_popup_transefer_ok .alert-msg').text(msgs);
	$('.eveb_popup_wrapzzcg').show();
    $('#eveb_popup_transefer_ok').show();
}

var transfer = {

    $platforms: $('p[author=game]'), //游戏平台余额
    $outAccount: $('#outAccount'), //转出
    $inAccount: $('#inAccount'), //转入
    $amount: $('#amount'), //金额
    $btnSave: $('#btn_save'), // 转账button
    $allbalance:$('#allbalance'),
    $bal_refresh:$('.bal_refresh'),
    init: function() {
        transfer.outChangeEvent();
        // 获取游戏平台余额
        transfer.getWallet('WALLET');

        //初始化下拉事件
        transfer.$outAccount.on('change', function() {
            transfer.outChangeEvent();
        });
        transfer.$inAccount.on('change', function() {
            transfer.inChangeEvent();
        });
        // 交换平台事件
        $('#switchAccount').on('click', function() {
            transfer.switchAccount();
        });
        // 提交绑定
        transfer.$btnSave.on('click', function() {
            transfer.doSave();
        });

        //一键更新
        transfer.$allbalance.on('click',function () {
            transfer.allbalance();
        });
        //单平台更新
        transfer.$bal_refresh.on('click',function () {
          var game_plats = $(this).prev().attr('game');
          transfer.getBalance(game_plats);
        });

    },
    allbalance: function() {
        $.each(transfer.$platforms, function() {
            var game = $(this).attr('game');
            transfer.getBalance(game);
        });
    },
    // 获取游戏平台余额
    getBalance: function(gamePlatform) {
        var $amount = $('#amount_' + gamePlatform);
        $amount.text('loading...');

        $.ajax({
            type: "POST",
            url: center_src + "User/getBalance",
            async: true,
            data: {
                BType: gamePlatform
            },
            xhrFields:{withCredentials:true},
            success: function(data) {
                var amounts = data.balance;
                $amount.html( toDecimal(amounts));
            }
        });
    },
    //获取中心钱包
    getWallet: function(wl) {
        var wallet = $('#wallet');
        wallet.text('loading...');
        $.ajax({
            type: "POST",
            url: center_src + "User/getBalance",
            async: true,
            data: {
                BType: wl
            },
            xhrFields:{withCredentials:true},
            success: function(data) {
                var wal = data.balance;
                wallet.html(toDecimal(wal));
            }
        });

    },
    // 转出下拉事件
    outChangeEvent: function() {
        if (transfer.$outAccount.val() == '0') {
            var maxIndex = transfer.$inAccount.find("option:last").get(0).index;
            if (maxIndex > 0) {
                transfer.$inAccount.get(0).selectedIndex = 1;
            }
        } else {
            transfer.$inAccount.get(0).selectedIndex = 0;
        }
    },
    // 转入下拉事件
    inChangeEvent: function() {
        if (transfer.$inAccount.val() == '0') {
            var maxIndex = transfer.$outAccount.find("option:last").get(0).index;
            if (maxIndex > 0) {
                transfer.$outAccount.get(0).selectedIndex = 1;
            }
        } else {
            transfer.$outAccount.get(0).selectedIndex = 0;
        }

    },
    //转换账号
    switchAccount: function() {
        var s1 = transfer.$outAccount.val();
        var s2 = transfer.$inAccount.val();

        transfer.$outAccount.val(s2);
        transfer.$inAccount.val(s1);

        transfer.$amount.val('');
        transfer.$amount.focus();
    },
    // 弹出提示
    alert: function() {
        dialog.show('#eveb_popup_transefer_ok');
    },
    validate: function() {
    	
         
        var from = transfer.$outAccount.val();
        var to = transfer.$inAccount.val();
        var amount = transfer.$amount.val();
        var img_code = document.getElementById('Verification-code_zzs').value;

        if (from == "") {
            alert('请选择转出平台');
            return false;
        }

        if (to == "") {
            alert('请选择转入平台');
            return false;
        }
        if (from == to) {
            alert('同账户不允许互转');
            return false;
        }
        if (from != "0" && to != "0") {
            alert('游戏平台账户不允许互转');
            return false;
        }
        if (amount == "") {
            alert('请填写金额');
            return false;
        }
        if (parseFloat(amount) < 10) {
            alert('金额不能小于10');
            return false;
        }
        if (parseFloat(amount) > 200000) {
            alert('金额不能大于200000');
            return false;
        }
        if (img_code == "") {
            alert('请填写验证码');
            return false;
        }

        return true;
    },
    // 弹出提示
    doSave: function() {
        if (!transfer.validate()) {
            return false;
        }
        $('.xploading_bg').show();
        $('.xploading').show();
        var tokenuuid ='';
        var from = transfer.$outAccount.val();
        var to = transfer.$inAccount.val();
        var amount = transfer.$amount.val();
        var img_code = document.getElementById('Verification-code_zzs').value;
        $.ajax({
            type: "post",
            url: center_src + 'User/getToken',
            async: true,
            data: {
                userKey: trans_token
            },
            xhrFields:{withCredentials:true},
            success: function(data) {
                tokenuuid = data.msg;
                if (from == '0') { //从平台转出
                  $.ajax({
                      type: 'post',
                      url: center_src + 'User/TransferTo',
                      data: {
                          credit: amount,
                          type: to,
                          uuid: tokenuuid,
                          imgcode: img_code
                      },
                      async: true,
                      cache: false,
                      xhrFields:{withCredentials:true},
                      success: function(t_data) {
                          if (t_data.msg == 'success') {
                              $('.xploading_bg').hide();
                              $('.xploading').hide();
                             $('#trans_msg').text('转账成功');
						     $('#eveb_popup_transefer_ok .alert-msg').text('转账成功！');
						     $('.eveb_popup_wrapzzcg').show();
						     $('#eveb_popup_transefer_ok').show();
							    transfer.getBalance(to);
                              transfer.getWallet('WALLET');
                              changeImg_zz();
                          } else if (t_data.msg == 'error'){
								msg_alert(errmsg[8]);
                              	$('.xploading_bg').hide();
                             	$('.xploading').hide();
                          }else if(t_data.msg == 'process'){
                          		msg_alert(errmsg[9]);
                              	$('.xploading_bg').hide();
                             	$('.xploading').hide();
                          }else  {
                              var arrKey = Number(t_data.msg)-1;
                              msg_alert(errmsg[arrKey]);
                              $('.xploading_bg').hide();
                              $('.xploading').hide();
                          }
                          changeImg_zz();
                      },
                      error: function() {

                          alert('请求失败！');
                          changeImg_zz();
                          $('.xploading_bg').hide();
                          $('.xploading').hide();

                      }


                  });

                } else if (to == '0') {
                  $.ajax({
                      type: 'post',
                      url: center_src + 'User/TransferFrom',
                      data: {
                          credit: amount,
                          type: from,
                          uuid: tokenuuid,
                          imgcode: img_code
                      },
                      async: true,
                      cache: false,
                      xhrFields:{withCredentials:true},
                      success: function(t_data) {
                          if (t_data.msg == 'success') {
                              $('.xploading_bg').hide();
                              $('.xploading').hide();
                              $('#trans_msg').text('转账成功');
                              $('#eveb_popup_transefer_ok .alert-msg').text('转账成功！');
                              $('.eveb_popup_wrapzzcg').show();
                              $('#eveb_popup_transefer_ok').show();
                              transfer.getBalance(from);
                              transfer.getWallet('WALLET');
                              changeImg_zz();
                          } else if (t_data.msg == 'error'){
                              msg_alert(errmsg[8]);
                              $('.xploading_bg').hide();
                              $('.xploading').hide();
                          }else if(t_data.msg == 'process'){
                              msg_alert(errmsg[9]);
                              $('.xploading_bg').hide();
                              $('.xploading').hide();
                          }else  {
                              var arrKey = Number(t_data.msg)-1;
                              msg_alert(errmsg[arrKey]);
                              $('.xploading_bg').hide();
                              $('.xploading').hide();
                          }
                          changeImg_zz();
                      },
                      error: function() {
                          alert('请求失败！');
                          changeImg_zz();
                          $('.xploading_bg').hide();
                          $('.xploading').hide();
                      }


                  });
                }
            },
            error: function() {
                alert('请求失败！');
                changeImg_zz();
                $('.xploading_bg').hide();
                $('.xploading').hide();
                return;
            }
        });



    }


};
