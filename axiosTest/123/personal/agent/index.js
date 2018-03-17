// JavaScript Document

$(function () {
	//导航
	$(".nav").slide({ type:"menu",  titCell:".m", targetCell:".sub", delayTime:300, triggerTime:0,returnDefault:true});
	
	//浏览器判断
	$(".browser").show();
	$(".browser .closed").click(function(){
		$(".browser").hide();
	});
	getNotice();
	// getFooter();
});

//banner
$(function () {
	$(".banner").hover(function(){ jQuery(this).find(".prev,.next").stop(true,true).fadeTo("show",1) },function(){ $(this).find(".prev,.next").fadeOut() });

	/* 调用SuperSlide */
	$(".banner").slide({ titCell:".banner_btn ul", mainCell:".banner_img ul", effect:"fold",  autoPlay:true, autoPage:true, trigger:"click",
		startFun:function(i){
			var curLi = jQuery(".banner .banner_img li").eq(i); /* 当前大图的li */
			if( !!curLi.attr("_src") ){
				curLi.css("background-image",curLi.attr("_src")).removeAttr("_src") /* 将_src地址赋予li背景，然后删除_src */
			}
		}
	});
});

function getNotice() {
    var $notice = $('#_notice');
    if ($notice.length == 0) {
        return;
    }
    $.post('/news/getnotices?r=' + new Date().getTime(), { pageIndex: 0, pageSize: 10 }, function (data) {
        if (data.success == false || data.count == 0) {
            $notice.html('<li><a href="#">暂无公告</a></li>');
            return;
        }
        var html = [];
        $.each(data.list, function (index, item) {
            html.push('<li><a href="#">', item.Content_RemoveHtml, '</a></li>');
        });
        $notice.html(html.join(''));
        //最新公告
        $("#_notice_div").slide({ mainCell: ".infoList", autoPage: true, effect: "leftMarquee", interTime: 50, autoPlay: true });
    });
};

// function getFooter() {
//     $.post('/news/getpagefooter', {}, function (data) {
//         if (data.success == false) {
//             $('#page_footer').html('');
//             return;
//         }
//         $('#page_footer').html(data.responseText);
//     });
// }