/**
 * Created by Administrator on 2017/4/27.
 */
function fn(t,l) {
    var $sidebar = $(t),
        $window = $(window),
        offset = $sidebar.offset(),
        topPadding = 20;
    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            });
        } else {
            $sidebar.stop().animate({
                marginTop: 0
            });
        }
    });
    $(t).children().children('a').html('关闭');
    // css({'background-color':'#000','filter': 'alpha(opacity=0)','opacity':0});
    $(t).children().children('a').on('click',function () {
        $(this).parent().parent().hide();
    })
}
