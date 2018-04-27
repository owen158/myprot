// BOF CS popup

var CsPopup = {};

CsPopup.open = function(timeout) {

	setTimeout(function() {
		jQuery.colorbox({
			className: 'cs-popup',
			inline:true,
			href:"#bitcoin-cs-popup",
			opacity: 0,
			transition : 'none',
			fixed: true,
			innerWidth: 620,
			innerHeight: 460,
			overlayClose: false,
			trapFocus: false,
			scrolling: false,
			onComplete: function() {
				jQuery('#cboxOverlay').remove();
				jQuery('.cs-popup').css({'z-index': 16000});
				$('#colorbox').delay(20000).fadeOut();
			}
		});
	}, timeout);

}



CsPopup.checkCookie = function (checkCount) {
	if (checkCount === 0) {
		return true;
	}
	return true;
}

CsPopup.init = function (timeout, checkCount) {
	var timeout = parseInt(timeout) * 1000;
	checkCount = checkCount ? checkCount : 0;
	
	var isEnable = CsPopup.checkCookie(checkCount);
	
	if (isEnable) {
		if (checkCount > 0) {
			var date = new Date();
			var minutes = 180;
			count = 1;
			count++;
			date.setTime(date.getTime() + (minutes * 60 * 1000));
		}
		CsPopup.open(timeout);
		
	}
}

/*
CsPopup.checkCookie = function (checkCount) {
	var flag = parseInt(jQuery.cookie("bccs"));
	if (checkCount === 0) {
		return true;
	}
	if (flag >= 5) {
		return false;
	}
	return true;
}

CsPopup.init = function (timeout, checkCount) {
	var timeout = parseInt(timeout) * 1000;
	checkCount = checkCount ? checkCount : 0;
	
	var isEnable = CsPopup.checkCookie(checkCount);
	
	if (isEnable) {
		if (checkCount > 0) {
			var date = new Date();
			var minutes = 180;
			var count = parseInt(jQuery.cookie("bccs"));
			if (isNaN(count)) {
				count = 1;
			}
			count++;
			date.setTime(date.getTime() + (minutes * 60 * 1000));
			jQuery.cookie("bccs", count, { expires : date });
		}
		CsPopup.open(timeout);
	}
}*/