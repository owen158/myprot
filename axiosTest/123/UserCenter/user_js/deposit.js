// JavaScript Document
// 调用转账类型函数
var _TRANS_TYPE = {
    bank: '1',
    alipay: '2',
    weixin: '3'
};
$(document).ready(function() {
    $(".tabnav li").click(function() {
        $(".tabnav li").eq($(this).index()).addClass("cur").siblings().removeClass('cur');
        $(".tabcontent").hide().eq($(this).index()).show();
    });
    $(".tabnav2 li").click(function() {
        $(".tabnav2 li").eq($(this).index()).addClass("cur2").siblings().removeClass('cur2');
        $(".tabcontent2").hide().eq($(this).index()).show();


    });

    $(".tabcontent2_wx dd").click(function() {
        $(".tabcontent2_wx dd").eq($(this).index()).addClass("wxbj").siblings().removeClass('wxbj');
        var rum = $(this).text();
        $('.num1').val(rum);

    });

    $(".tabcontent2_wx2 dd").click(function() {
        $(".tabcontent2_wx2 dd").eq($(this).index()).addClass("wxbj").siblings().removeClass('wxbj');
        var rum = $(this).text();
        $('.num2').val(rum);

    });
		pay.payInit();

});

var pay = {
		payInit:function () {
			  pay.initBankEvent();
				$('.submitPay').on('click',function () {
					pay.btnPay();
				});
				$('.alisubmitPay').on('click',function () {
					pay.aliPay();
				});

		},
    initBankEvent: function() {
        $('.eveb_bank_list3 label').on('click', function(event) {
            var $input = $(this).find('input');
            $input.prop("checked", true); // ie6下面使用
            $('#payBankCode').val($input.attr('bankcode'));
        });
    },
    Paycheck: function() {
        var min = $('#thirdPayDepositSingleMin').val();
        var max = $('#thirdPayDepositSingleMax').val();
        var platform = $("input[name='payPlatform']:checked");
        var amount = $('#online_amount').val();

        if (amount == '') {
            alert('请填写充值金额');
            $('#online_amount').focus();
            return false;
        }
        if (platform.length < 1) {
            alert("请选择银行");
            return false;
        }
        if (parseFloat(amount) < min) {
            alert("充值金额不能小于" + min);
            return false;
        }
        if (parseFloat(amount) > max) {
            alert("充值金额不能大于" + max);
            return false;
        }

        return true;
    },
		aliCheck:function () {
			var min = $('#thirdPayDepositSingleMin').val();
			var max = $('#thirdPayDepositSingleMax').val();
			var amount = $('.num').val();

			if (amount == '') {
					alert('请填写充值金额');
					$('#online_amount').focus();
					return false;
			}
			if (parseFloat(amount) < min) {
					alert("充值金额不能小于" + min);
					return false;
			}
			if (parseFloat(amount) > max) {
					alert("充值金额不能大于" + max);
					return false;
			}

			return true;
		},
		btnPay:function () {
				if (!pay.Paycheck()) {
						return false;
				}
				var amount = $('#online_amount').val();
				var bankCode = $('#payBankCode').val();
				var payType = _TRANS_TYPE.bank;
				var txwinow = window.open('',bankCode);
				$.ajax({
						type: "POST",
						url: center_src + "User/ReChangePay",
						async: true,
						data: {
								payType:payType,
								bankCode:bankCode,
								amount:amount
						},
						xhrFields:{withCredentials:true},
						success: function(data) {
								var url = data.msg;
								window.location.href = "user_center.html";
								txwinow.location.href = url;
						},
						error:function () {
							txwinow.close();
						}
				});


		},
		aliPay:function () {
			if (!pay.aliCheck()) {
				return false;
			}
			var payType;
			var amount;
			if ($('#pay_Judge').hasClass('.cur2')) {
				payType = _TRANS_TYPE.winxin;
				amount = $('.num_weixin').val();
			}
			else{payType = _TRANS_TYPE.alipay;
				amount = $('.num_alipay').val();
			}
			var txwinow = window.open('',payType);
			$.ajax({
					type: "POST",
					url: center_src + "User/ReChangePay",
					async: true,
					data: {
							payType:payType,
							amount:amount
					},
					xhrFields:{withCredentials:true},
					success: function(data) {

							var url = data.msg;
							window.location.href = "user_center.html";
							txwinow.location.href = url;
					},
					error:function () {
						txwinow.close();
					}
			});
		}

};








//点击关闭弹窗
// $(document).ready(function(e) {
//
//     $('.icon_mini').click(function() {
//         $('.eveb_popup').hide();
//         $('.eveb_popup_wrap').hide();
//
//     });
//     $('.eveb_popup_wrap').click(function() {
//         $('.eveb_popup').hide();
//         $('.eveb_popup_wrap').hide();
//
//     });
//     $('.button_medium').click(function() {
//         $('.eveb_popup').hide();
//         $('.eveb_popup_wrap').hide();
//
//
//     });
// });
/*// 弹出层
var dialog = {
    scrollHeight: $(document).height(),
    // 初始化
    init: function () {
        $(window).resize(function () {
            $('.eveb_popup_wrap').height(dialog.scrollHeight);
        })
    },
    //弹窗 定位
    position: function (_target) {
        var popupW = $(_target).width() / 2;
        var popupH = $(_target).height() / 2;
        $(_target).css('margin-left', -popupW).css('margin-top', -popupH);
    },
    //弹窗 显示
    show: function (_target) {
        $('.eveb_popup_wrap').height(dialog.scrollHeight);
        dialog.position(_target);
        $('.eveb_popup').fadeOut('fast');
        $('.eveb_popup_wrap').fadeIn('fast');
        $(_target).fadeIn('fast');
        $(".eveb_popup_wrap,.eveb_popup_hd a.icon_close,.eveb_popup_bd a[name='pop_close']").click(function () {
            dialog.hide();
        })
    },
    //弹窗 关闭
    hide: function () {
        $('.eveb_popup_wrap').fadeOut('fast');
        $('.eveb_popup').fadeOut('fast');
    }
};*/
