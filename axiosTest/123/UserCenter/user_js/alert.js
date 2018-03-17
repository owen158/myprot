$(document).ready(function() {
	/*弹窗 银行提款成功*/
	$('.wraptkcgof').click(function() {
		$('.eveb_popuptkcg').hide();
		$('.eveb_popup_wraptkcg').hide();
	});

	$('.eveb_popup_wraptkcg').click(function() {
		$('.eveb_popuptkcg').hide();
		$('.eveb_popup_wraptkcg').hide();

	});

	/*弹窗 绑定银行卡*/
	$('.popupbdyhkof').click(function() {
		$('.eveb_popupbdyhk').hide();
		$('.eveb_popup_wraptbdyhk').hide();

	});
	$('.eveb_popup_wraptbdyhk').click(function() {
		$('.eveb_popupbdyhk').hide();
		$('.eveb_popup_wraptbdyhk').hide();

	});
	/*绑定银行卡*/
	$('.eveb_withdraow_boxtk').click(function() {
        document.getElementById("eveb_bank_bind").reset();
		$('.eveb_popup_wraptbdyhk').show();
		$('.eveb_popupbdyhk').show();

	});

	/*弹窗 绑定银行卡成功*/
	$('.popupbdcg').click(function() {
		$('.eveb_popupbdcg').hide();
		$('.eveb_popup_wraptbdcg').hide();

	});
	$('.eveb_popup_wraptbdcg').click(function() {
		$('.eveb_popupbdcg').hide();
		$('.eveb_popup_wraptbdcg').hide();

	});
	/*弹窗 transfer_accounts 转账成功*/

	$('.wrapzzcg').click(function() {
		$('.eveb_popupzzcg').hide();
		$('.eveb_popup_wrapzzcg').hide();
	});
	$('.eveb_popup_wrapzzcg').click(function() {
		$('.eveb_popupzzcg').hide();
		$('.eveb_popup_wrapzzcg').hide();
	});
});
