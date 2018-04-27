var JRG='http://192.168.0.103:84/XPJ/';
var CAGENT='BL1';
var pubilc=function () {
	this.src;
};
pubilc.prototype={
	// code 验证码
    changeImg:function (t) {
        this.src = JRG+'validateCode?timesp'+(new Date()).valueOf();
        $(t).attr("src", this.src);
    },
    checkloginindex:function(t){
        $.ajax({
            type:"get",
            url:JRG+"/checklogin.do",
            async:true,
            cache:false,
            timeout:30000,
            xhrFields:{withCredentials:true},
            success:function(data){
                if(data.msg == 'faild'){
                    window.location.href=t
                }else if(data.msg == 'outlogin'){
                    window.location.href=t
                }else if(data.msg == 'success'){
                    console.log(1);
                }
            },
            error:function(XMLHttpRequest, textStatus, errorThrown){
                window.location.href=t
            }
        })
    },
	// 检查登录状态
    checklogin:function () {
        $.ajax({
            type:"get",
            url:JRG+"/checklogin.do",
            async:true,
            cache:false,
            timeout:30000,
            xhrFields:{withCredentials:true},
            success:function(data){
                if(data.msg == 'faild'){
                    console.log('未登录或登录信息失效');
                    $('.login-hide').hide();
                    $('.login-show').show();
                    $('#money').text('');
                    $('#lebo_money').text('');
                    // window.location.href='index.html';
                    $.cookie('nima', null,{ path: '/' });
                    $.cookie('judgment', null,{  path: '/' });
                }else if(data.msg == 'outlogin'){
                    // window.location.href='index.html';
                    $('#money').text('');
                    $('#lebo_money').text('');
                    $('.login-hide').hide();
                    $('.login-show').show();
                    $.cookie('nima', null,{path: '/' });
                    $.cookie('judgment', null,{path: '/' });
                    // $.cookie('judgment', 'false', { expires: 1 , path: '/' });
                    console.log('账户已在别处登录')
                }else if(data.msg == 'success'){
                    var userName = data.userName.substring(3);
                    $('#lebo_money').text(userName);
                    $('#money').text(data.balance);
                    $.cookie('judgment', 'true', { expires: 1 , path: '/' });
                    $('.login-hide').show();
                    $('.login-show').hide();
                    console.log('登录状态正常');
                }
            },
            error:function(XMLHttpRequest, textStatus, errorThrown){
                // alert(XMLHttpRequest.readyState + + );
                $('.login-hide').css('display','block');
                $('.login-show').css('display','none');
                $.cookie('nima', null,{ path: '/' });
                $.cookie('judgment', null,{  path: '/' });
                // $.cookie('judgment', null);
                // alert('网络异常')
            }
        })
    },
    time:function (time) {
        var date,Y ,M,D,h,m,s
        date = new Date(time);
        Y = date.getFullYear() + '-';
        M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        D = date.getDate() + ' ';
        h = (date.getHours()<10? '0'+ date.getHours():date.getHours())+ ':';
        m = (date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()) + ':';
        s = (date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds());
        var fommat_time = Y + M + D + h + m + s;
        return fommat_time;
    },
	// 退出登录
	dropOut:function (t) {
        $('.xploading_bg').show();
        $('.xploading').show();
        $.ajax({
            type:"get",
            xhrFields:{withCredentials:true},
            data:{},
            timeout : 6000,
            url:JRG+'logout.do',
            cache:false,
            success:function (data) {
                // 判断登录
                Pubilc.changeImg('#checkNum_img');
                $.cookie('nima', null,{ path: '/' });
                $.cookie('judgment', null,{ path: '/' });
                window.location.href=t;
            },
            error:function (xhr, textStatus, errorThrown) {
                Pubilc.changeImg('#checkNum_img');
                $.cookie('nima', null,{ path: '/' });
                $.cookie('judgment', null,{ path: '/' });
                if(textStatus == "timeout"){
                    $('.xploading_bg').hide();
                    $('.xploading').hide();
                    changeImg();
                    alert('响应超时')
                }else{

                    $('.xploading_bg').hide();
                    $('.xploading').hide();
                    alert('网络异常')
                }
            }
        })
    }
};

var Pubilc = new pubilc();
Pubilc.changeImg('#checkNum_img');

Pubilc.checklogin();

