// var jrg='http://192.168.0.61:83/XPJ/';
// var jrg='http://192.168.0.61:83/XPJ/';
var JRG='http://192.168.0.61:83/XPJ/';
var cagent='BL1';
// var JRG='http://192.168.0.7:8480/XPJ/';
var CAGENT='BL1';
var pubilc=function () {
    this.src;
    this.token='';
};
pubilc.prototype={
    // code 验证码
    changeImg:function (t) {
        this.src = JRG+'validateCode?timesp'+(new Date()).valueOf();
        $(t).attr("src", this.src);
    },
    checkloginindex:function(t){
        var _this = this;
        $.ajax({
            type:"get",
            url:JRG+"checklogin.do",
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
                    return  _this.token = data.userkey;
                }
            },
            error:function(XMLHttpRequest, textStatus, errorThrown){
                window.location.href=t
            }
        })
    },
    // 检查登录状态
    checklogin:function () {
        var _this = this;
        $.ajax({
            type:"get",
            url:JRG+"checklogin.do",
            async:true,
            cache:false,
            timeout:30000,
            xhrFields:{withCredentials:true},
            success:function(data){
                if(data.msg == 'faild'){
                    $('.login-hide').hide();
                    $('.login-show').show();
                    $('#money').text('');
                    console.log(1);
                    $('#lebo_money').text('');
                }else if(data.msg == 'outlogin'){
                    $('#money').text('');
                    $('#lebo_money').text('');
                    $('.login-hide').hide();
                    $('.login-show').show();
                    alert('账户已在别处登录')
                }else if(data.msg == 'success'){
                    // cagent
                    var userName = data.userName.substring(3);
                    $('#lebo_money').text(userName);
                    $('#money').text(data.balance);
                    $('.login-hide').show();
                    $('.login-show').hide();
                    return  _this.token = data.userkey;
                }
            },
            error:function(XMLHttpRequest, textStatus, errorThrown){
                $('.login-hide').css('display','block');
                $('.login-show').css('display','none');
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
                Pubilc.changeImg('#code');
                window.location.href=t;
            },
            error:function (xhr, textStatus, errorThrown) {
                Pubilc.changeImg('#code');
                if(textStatus == "timeout"){
                    $('.xploading_bg').hide();
                    $('.xploading').hide();
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
Pubilc.checklogin();
Pubilc.changeImg($('#captcha'));
function chageimg(t) {
    this.src = JRG+'validateCode?timesp'+(new Date()).valueOf();
    $(t).attr("src", this.src);
}
