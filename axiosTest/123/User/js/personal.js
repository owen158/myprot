/**
 * Created by Administrator on 2017/4/27.
 */
$(function () {
    var franttime=function(time) {
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
    };
    var obile =function(url,eq){
        this.url = url;
        // this.name = eq.name;
        // this.pass = eq.pass;
        // this.code = eq.code;
        // this.savelogin = eq.savelogin;
        // this.gameType = eq.gameType;
        // this.gameID = eq.gameID;
        // this.model = eq.model;
    };
    obile.method('getUserInfo',function () {
        $.ajax({
            type:"get",
            xhrFields:{withCredentials:true},
            data:{},
            timeout : 3000,
            url:this.url,
            cache:false,
            success:function (data) {
                var username = data.username.substring(3);
                $('.getusername').text(username);
                if(data.email == ""){
                    data.email ='暂无'
                }
                var level = parseInt(data.vip_level);
                for(var i=0;i<level;i++){
                    $('.getlevel').append('<img src="./img/2.png" id="jsoaeig"/>')
                }
                $('.getmoney').text(data.wallet);
                $('#vip_money').text(data.wallet);
                $('.getname').text(data.realname);
                $('.getloginmailbox').text(data.email);
                $('.getnumber').text(data.mobile);
                $('.getlogintime').text(franttime(data.reg_date.time));
                $('.getloginnext').text(franttime(data.login_time.time));
            },
            error:function (xhr, textStatus, errorThrown) {

            }
        });//登录//登录
    });
    var getuser = new obile(jrg+'User/getUserInfo',{});
    getuser.getUserInfo();

});