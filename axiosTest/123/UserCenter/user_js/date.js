function GetDateStr(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1); //获取当前月份的日期，不足10补0
    var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0
    return y + "-" + m + "-" + d;
}

var begint = $('.beginTime');
var endt = $('.endTime'); 

function today() { 
begint.val(GetDateStr(-1)); 
endt.val(GetDateStr(0)); 
    
} 
function weekday() { 
begint.val(GetDateStr(-7)); 
endt.val(GetDateStr(0)); 
} 

function threeDay() { 
begint.val(GetDateStr(-3)); 
endt.val(GetDateStr(0)); 
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
// $('.the_week').on('click', function() {
//     $(this).prevAll('input').eq(1).val(sunday.toLocaleString());
//     $(this).prevAll('input').eq(0).val(monday.toLocaleString());
// });
function the_week() {
    $(this).prevAll('input').eq(1).val(sunday.toLocaleString());
    $(this).prevAll('input').eq(0).val(monday.toLocaleString());
}
//时间格式转换
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
// 时间格式转换2
function Format_cov2(time) {
    var fommat_time = time + ' 00' + ':00' + ':00';
    return fommat_time;
}
// 获取当前时分秒

var nowTime = new Date();
$('#bet_endTime').val(Format_cov(nowTime));
$('#bet_beginTime').val(Format_cov2(GetDateStr(-1)));

function oDay () {
$('#bet_endTime').val(Format_cov(nowTime));
$('#bet_beginTime').val(Format_cov2(GetDateStr(-1)));
}

function tDay () {
$('#bet_endTime').val(Format_cov(nowTime));
$('#bet_beginTime').val(Format_cov2(GetDateStr(-3)));
}

function wDay () {
	$('#bet_endTime').val(Format_cov(nowTime));
$('#bet_beginTime').val(Format_cov2(GetDateStr(-7)));
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
    $('#bet_history').on('click',function  () {
    	 $('#bet_refreshDataList').trigger('click');
    })

    $('#d_refreshDataList').on('click',function () {
      dep_history.getData();
    });
    $('#z_refreshDataList').on('click', function() {

      tran_history.getData();
    });
     $('#dr_refreshDataList').on('click', function() {
      dr_history.getData();
    });
    bet_history.btnData.on('click',function  () {
    	bet_history.getData();
    })
});

//转账历史记录

var tran_history = {
    //获取转账筛选按钮
    btnData: $('#z_refreshDataList'),
    //获取数据，分页
    getData: function() {
    	$('.xploading_bg').show();
    	$('.xploading').show();
        var typeValue = $('#game_type').val();
        var gameValue = $('#gamePlatform').val();
        var beginTime = $('#z_beginTime').val();
        var endTime = $('#z_endTime').val();
        var pageNO = 1;
        $.ajax({
            type: "post",
            url: center_src + "User/getTransferInfo",
            async: true,
            data: {
                pageSize: 10,
                bdate: beginTime,
                edate: endTime,
                pageNo: pageNO,
                Ttype: typeValue,
                Type: gameValue
            },
            xhrFields:{withCredentials:true},
            success: function(data) {
            	$('.xploading_bg').hide();
    	        $('.xploading').hide();
                var totalBa = data[0].total;
                var cnt = data[0].cnt;
                var zp = ' <th id ="zp" colspan="6">没有符合条件的记录</th>';
                //没有条件符合的记录
                if (cnt === 0) {
                    $('#z_mainBody').empty();
                    $('#z_fenb').empty();
                    $('#zp').remove();
                    $('#z_mainBody').append(zp);
                    $('#z_Subtotal').text(0);
                    $('#z_Total').text(0);
                    return;
                }
                laypage({
                    cont: 'z_fenb',
                    pages: Math.ceil(cnt / 10),
                    curr: 1,
                    skin: '#fff', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
                    groups: 3, //连续显示分页数
                    skip:true,
                    first: false,
                    last: false,
                    prev: '<',
                    next: '>',
                    jump: function(e) {
                        $.ajax({
                            type: "post",
                            url: center_src + "User/getTransferInfo",
                            async: true,
                            data: {
                                pageSize: 10,
                                bdate: beginTime,
                                edate: endTime,
                                pageNo: e.curr,
                                Ttype: typeValue,
                                Type: gameValue
                            },
                            xhrFields:{withCredentials:true},
                            success: function(z_data) {
                            	$('.xploading_bg').hide();
    	                        $('.xploading').hide();
                                //计算当页小计
                                var subtotal = 0;
                                var Dvalue;
                                //显示总页数
   								$('.pagecontainer').remove();
                                var allPage = '<div class ="pagecontainer">共<span id="allpages"></span>页</div>';
                                if ($('.pagecontainer').length == 0) {
                                $('#z_fenb .laypage_main ').append(allPage);
                                }
                                $('#allpages').text(Math.ceil(cnt / 10));
                                $('#z_mainBody').empty();
                                $('#zp').remove();
                                var z_tds;
                                for (var i = 1; i < z_data.length; i++) {
                                    z_tds = '<tr><th>' + Format_cov(z_data[i].t_time.time) + '</th><th>' + z_data[i].t_money + '</th><th>' + z_data[i].old_money + '</th><th>' + z_data[i].new_money + '</th><th>' + z_data[i].type + '</th><th>' + z_data[i].t_type + '</th></tr>';
                                    $('#z_mainBody').append(z_tds);
                                    Dvalue = z_data[i].new_money - z_data[i].old_money;
                                    subtotal = subtotal + Dvalue;
                                }

                                $('#z_Subtotal').text(subtotal);
                                $('#z_Total').text(z_data[0].total);
                            }

                        });
                    }
                });
            },
            error:function () {
            	$('.xploading_bg').hide();
    	        $('.xploading').hide();
                alert('数据加载失败');
            }
        });


    }
};


var dep_history = {
    //获取转账筛选按钮
    btnData: $('#d_refreshDataList'),
    //获取数据，分页
    getData: function() {
    	$('.xploading_bg').show();
    	$('.xploading').show();
        var Type = $('#dpType').val();
        var status = $('#dpStatus').val();
        var beginTime = $('#d_beginTime').val();
        var endTime = $('#d_endTime').val();
        var pageNO = 1;
        $.ajax({
            type: "post",
            url: center_src + "User/getReChargeInfo",
            async: true,
            data: {
                pageSize: 10,
                bdate: beginTime,
                edate: endTime,
                pageNo: pageNO,
                Type: Type,
                status:status
            },
            xhrFields:{withCredentials:true},
            success: function(data) {
            	$('.xploading_bg').hide();
    	        $('.xploading').hide();
                var z_totalBa = data[0].total;
                var z_cnt = data[0].cnt;
                var dp = ' <th id ="dp" colspan="4">没有符合条件的记录</th>';
                //没有条件符合的记录
                if (z_cnt == 0) {
                    $('#d_mainBody').empty();
                    $('#d_fenb').empty();
                    $('#dp').remove();
                    $('#d_mainBody').append(dp);
                    $('#d_Subtotal').text(0);
                    $('#d_Total').text(0);
                    return;
                }
                laypage({
                    cont: 'd_fenb',
                    pages: Math.ceil(z_cnt / 10),
                    curr: 1,
                    skin: '#fff', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
                    groups: 3, //连续显示分页数
                    skip:true,
                    first: false,
                    last: false,
                    prev: '<',
                    next: '>',
                    jump: function(e) {
                        $.ajax({
                            type: "post",
                            url: center_src + "User/getReChargeInfo",
                            async: true,
                            data: {
                                pageNo: e.curr,
                                pageSize: 10,
                                bdate: beginTime,
                                edate: endTime,
                                Type: Type,
                                status:status
                            },
                            xhrFields:{withCredentials:true},
                            success: function(z_data) {
                            	$('.xploading_bg').hide();
    	                        $('.xploading').hide();
                                //计算当页小计
                                var subtotal = 0;
                                var Dvalue;
                                //显示总页数
                                $('.d_pagecontainer').remove();
                                var dallPage = '<div class ="d_pagecontainer">共<span id="dallpages"></span>页</div>';
                                if ($('.d_pagecontainer').length == 0) {
                                	$('#d_fenb .laypage_main').append(dallPage);
                                }
                                $('#dallpages').text(Math.ceil(z_cnt / 10));
                                $('#d_mainBody').empty();
                                $('#dp').remove();
                                var z_tds;
                                for (var i = 1; i < z_data.length; i++) {
                                    z_tds = '<tr><th>' + Format_cov(z_data[i].order_time.time) + '</th><th>' + z_data[i].order_amount + '</th><th>' + z_data[i].pay_type + '</th><th>' + z_data[i].trade_status + '</th></tr>';
                                    $('#d_mainBody').append(z_tds);
                                    Dvalue = z_data[i].order_amount;
                                    subtotal = subtotal + Dvalue;
                                }

                                $('#d_Subtotal').text(subtotal);
                                $('#d_Total').text(z_data[0].total);
                            }

                        });
                    }
                });
            },
            error:function () {
            	$('.xploading_bg').hide();
    	        $('.xploading').hide();
              alert('数据加载失败');
            }
        });


    }
};
var dr_history = {
    //获取转账筛选按钮
    btnData: $('#dr_refreshDataList'),
    //获取数据，分页
    getData: function() {
    	$('.xploading_bg').show();
    	$('.xploading').show();
        var status = $('#drStatus').val();
        var beginTime = $('#dr_beginTime').val();
        var endTime = $('#dr_endTime').val();
        var pageNO = 1;
        $.ajax({
            type: "post",
            url: center_src + "User/getWithDrawInfo",
            async: true,
            data: {
                pageSize: 10,
                bdate: beginTime,
                edate: endTime,
                pageNo: pageNO,
                status:status
            },
            xhrFields:{withCredentials:true},
            success: function(data) {
            	$('.xploading_bg').hide();
    	        $('.xploading').hide();
                var dr_totalBa = data[0].total;
                var dr_cnt = data[0].cnt;
                var dr = ' <th id ="dp" colspan="4">没有符合条件的记录</th>';
                //没有条件符合的记录
                if (dr_cnt == 0) {
                    $('#dr_mainBody').empty();
                    $('#dr_fenb').empty();
                    $('#dr').remove();
                    $('#dr_mainBody').append(dr);
                    $('#dr_Subtotal').text(0);
                    $('#dr_Total').text(0);
                    return;
                }
                laypage({
                    cont: 'dr_fenb',
                    pages: Math.ceil(dr_cnt / 10),
                    curr: 1,
                    skin: '#fff', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
                    groups: 3, //连续显示分页数
                    skip:true,
                    first: false,
                    last: false,
                    prev: '<',
                    next: '>',
                    jump: function(e) {
                        $.ajax({
                            type: "post",
                            url: center_src + "User/getWithDrawInfo",
                            async: true,
                            data: {
                                pageNo: e.curr,
                                pageSize: 10,
                                bdate: beginTime,
                                edate: endTime,
                                status:status
                            },
                            xhrFields:{withCredentials:true},
                            success: function(z_data) {
                            	$('.xploading_bg').hide();
    	                        $('.xploading').hide();
                                //计算当页小计
                                var subtotal = 0;
                                var Dvalue;
                                //显示总页数
                                $('.dr_pagecontainer').remove();
                                var drllPage = '<div class ="dr_pagecontainer">共<span id="drallpages"></span>页</div>';
                                if ($('.dr_pagecontainer').length == 0) {
                                	$('#dr_fenb .laypage_main').append(drllPage);
                                }
                                $('#dallpages').text(Math.ceil(dr_cnt / 10));
                                $('#dr_mainBody').empty();
                                $('#dr').remove();
                                var z_tds;
                                for (var i = 1; i < z_data.length; i++) {
                                    z_tds = '<tr><th>' + Format_cov(z_data[i].add_time.time) + '</th><th>' + z_data[i].amount + '</th><th>' + z_data[i].card_num + '</th><th>' + z_data[i].status + '</th></tr>';
                                    $('#dr_mainBody').append(z_tds);
                                    Dvalue = z_data[i].amount;
                                    subtotal = subtotal + Dvalue;
                                }
                                $('#dr_Subtotal').text(subtotal);
                                $('#dr_Total').text(z_data[0].total);
                            }

                        });
                    }
                });
            },
            error:function () {
              $('.xploading_bg').hide();
    	      $('.xploading').hide();
              alert('数据加载失败');
            }
        });


    }
};


var bet_history = {
    //获取转账筛选按钮
    btnData: $('#bet_refreshDataList'),
    //获取数据，分页
    getData: function() {
    	$('.xploading_bg').show();
    	$('.xploading').show();
        var typeValue = $('#bet_type').val();
        var beginTime = $('#bet_beginTime').val();
        var endTime = $('#bet_endTime').val();
        var pageNO = 1;
        $.ajax({
            type: "post",
            url: center_src + "User/getBetInfo",
            async: true,
            data: {
                pageSize: 10,
                bdate: beginTime,
                edate: endTime,
                pageNo: pageNO,
                type: typeValue
            },
            xhrFields:{withCredentials:true},
            success: function(data) {
            	$('.xploading_bg').hide();
    	        $('.xploading').hide();
                var cnt = data[0].cnt;
                var betp = ' <th id ="betp" colspan="6">没有符合条件的记录</th>';
                //没有条件符合的记录
                if (cnt === 0) {
                    $('#bet_mainBody').empty();
                    $('#bet_fenb').empty();
                    $('#betp').remove();
                    $('#bet_mainBody').append(betp);
                    $('#bet_Subtotal').text(0);
                    $('#bet_Total').text(0);
                    $('#payOut').text(0);
                    return;
                }
                laypage({
                    cont: 'bet_fenb',
                    pages: Math.ceil(cnt / 10),
                    curr: 1,
                    skin: '#fff', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
                    groups: 3, //连续显示分页数
                    skip:true,
                    first: false,
                    last: false,
                    prev: '<',
                    next: '>',
                    jump: function(e) {
                        $.ajax({
                            type: "post",
                            url: center_src + "User/getBetInfo",
                            async: true,
                            data: {
                                pageSize: 10,
                                bdate: beginTime,
                                edate: endTime,
                                pageNo: e.curr,
                                type: typeValue
                            },
                            xhrFields:{withCredentials:true},

                            success: function(z_data) {
                            	$('.xploading_bg').hide();
    	                        $('.xploading').hide();
                                //计算当页小计
                                var subtotal = 0;
                                var Dvalue = 0;
                                var pacai = 0;
                                //显示总页数
   								$('.bet_pagecontainer').remove();
                                var sallPage = '<div class ="bet_pagecontainer">共<span id="bet_allpages"></span>页</div>';
                                if ($('.bet_pagecontainer').length == 0) {
                                $('#bet_fenb .laypage_main ').append(sallPage);
                                }
                                $('#bet_allpages').text(Math.ceil(cnt / 10));
                                $('#bet_mainBody').empty();
                                $('#betp').remove();
                                var z_tds;
                                for (var i = 1; i < z_data.length; i++) {
                        
                                    z_tds = '<tr><th>' + Format_cov(parseInt(z_data[i].bettime)) + '</th><th>' + z_data[i].type + '</th><th>' + z_data[i].betAmount + '</th><th>' + z_data[i].Payout + '</th><th>' + z_data[i].netAmount + '</th><th>'+z_data[i].validBetAmount+'</th></tr>';
                                    $('#bet_mainBody').append(z_tds);
                                    subtotal = subtotal+ parseFloat(z_data[i].betAmount);
                                    Dvalue = Dvalue + parseFloat(z_data[i].netAmount);
                                    pacai = pacai + parseFloat(z_data[i].validBetAmount);
                                }
                                $('#bet_Subtotal').text(subtotal.toFixed(2));
                                $('#bet_Total').text(Dvalue.toFixed(2));
                                $('#payOut').text(pacai.toFixed(2));
                            }

                        });
                    }
                });
            },
            error:function () {
            	$('.xploading_bg').hide();
    	        $('.xploading').hide();
                alert('数据加载失败');
            }
        });


    }
};