/**
 * Created by Administrator on 2017/5/4.
 */
function GetDateStr(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1); //获取当前月份的日期，不足10补0
    var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0
    return y + "-" + m + "-" + d;
}

var begint = $(".beginTime");
var endt = $(".endTime");
for (var i = 0; i < begint.length; i++) {
    begint[i].value = GetDateStr(-30);
    endt[i].value = GetDateStr(0);
}

function today() {
    for (var i = 0; i < begint.length; i++) {
        begint[i].value = GetDateStr(-1);
        endt[i].value = GetDateStr(0);
    }
}
function weekday() {
    for (var i = 0; i < begint.length; i++) {
        begint[i].value = GetDateStr(-7);
        endt[i].value = GetDateStr(0);
    }
}

function threeDay() {
    for (var i = 0; i < begint.length; i++) {
        begint[i].value = GetDateStr(-3);
        endt[i].value = GetDateStr(0);
    }
}
var now = new Date();
var nowTime = now.getTime();
var day = now.getDay();
var oneDayLong = 24 * 60 * 60 * 1000;


// var MondayTime = nowTime - (day-2) * oneDayLong;
// var SundayTime = nowTime + (day-9) * oneDayLong;
var MondayTime = nowTime;
var SundayTime = nowTime - 7* oneDayLong;

var monday = new Date(MondayTime);
var sunday = new Date(SundayTime);
Date.prototype.toLocaleString = function() {
    return this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + this.getDate();
};
function the_week() {
    $(this).prevAll('input').eq(1).val(sunday.toLocaleString());
    $(this).prevAll('input').eq(0).val(monday.toLocaleString());
}
function Format_cov(time) {
    var date = new Date(time);
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = date.getDate() + ' ';
    h = (date.getHours()<10? '0'+ date.getHours():date.getHours())+ ':';
    m = (date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()) + ':';
    s = (date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds());
    var fommat_time = Y + M + D + h + m + s;
    return fommat_time;
}

window.onload = function () {
    $('#dep_threeDay').trigger('click');
};
$(function() {
    $('#tran_history').on('click',function () {
        $('#tra_three').trigger('click');
    });
    $('#dr_history').on('click',function () {
        $('#dr_threeDay').trigger('click');
    });

    $('#d_refreshDataList').on('click',function () {
        dep_history.getData();
    });
    $('#z_refreshDataList').on('click', function() {

        tran_history.getData();
    });
    $('#dr_refreshDataList').on('click', function() {
        dr_history.getData();
    });
});