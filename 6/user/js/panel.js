/**
 * Created by Administrator on 2017/5/5.
 */
var panel=function () {
};
panel.prototype = {
    Down:function (parent,child) {
        $(parent).hide();
        $(child).hide();
    },
    Downactive:function (el) {
       $(el).addClass('active').siblings('.active').removeClass('active');
       $($(el).attr('mank')).addClass('active').siblings('.active').removeClass('active');
    },
    DownShow:function (parent,child) {
        $(parent).show();
        $(child).show();
    },
};
var shut = new panel();
