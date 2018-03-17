/**
 * Created by Administrator on 2017/5/5.
 */
var panel=function () {
};
panel.prototype = {
    Down:function (parent,child) {
        $(parent).hide();
        $(child).hide();
    }
};
var shut = new panel();