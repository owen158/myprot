$.fn.scrollTo = function(b) {
	var c = {
		toT: 0,
		durTime: 500,
		delay: 30,
		callback: null
	};
	var d = $.extend(c, b),
		timer = null,
		_this = this,
		curTop = _this.scrollTop(),
		subTop = d.toT - curTop,
		index = 0,
		dur = Math.round(d.durTime / d.delay),
		smoothScroll = function(t) {
			index++;
			var a = Math.round(subTop / dur);
			if (index >= dur) {
				_this.scrollTop(t);
				window.clearInterval(timer);
				if (d.callback && typeof d.callback == 'function') {
					d.callback()
				}
				return
			} else {
				_this.scrollTop(curTop + index * a)
			}
		};
	timer = window.setInterval(function() {
		smoothScroll(d.toT)
	}, d.delay);
	return _this
};
/*$(function() {
	$(".mainScroll,.gameScroll").scroll(function() {
		var a = $(this).height();
		var b = $(this).scrollTop();
		if (b > a) {
			$(".goto-top").show()
		} else {
			$(".goto-top").hide()
		}
	});
	$(".goto-top").click(function(e) {
		e.preventDefault();
		$(".content").scrollTo({
			toT: 0
		}, 100)
	})
});*/