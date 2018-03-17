/**
 * Created by Administrator on 2017/5/5.
 */
// var obile =function(url,eq){
//     this.url = url;
//     this.name = eq.name;
//     this.pass = eq.pass;
//     this.code = eq.code;
//     this.savelogin = eq.savelogin;
//     this.gameType = eq.gameType;
//     this.gameID = eq.gameID;
//     this.model = eq.model;
// };
// obile.method("logingame",function (t) {//登录
//
// });
$('.login-panel-con .guanbi').on('click',function () {
    $('.login-panel').hide();
    $('.login-panel-con').hide();
})
function loging(u,t,l) {
    $.ajax({
        type:"post",
        xhrFields:{withCredentials:true},
        data:t,
        timeout : 3000,
        url:u,
        cache:false,
        success:function (data) {
            if(data.status == 'ok'){
                $.cookie('nima', data.userKey, { expires: 1 , path: '/' });
                codeimg();
                setTimeout(function  () {
                    $('.xploading_bg').hide();
                    $('.xploading').hide();
                    $('.login-panel').hide();
                    $('.login-panel-con').hide();
                    window.location.href=l;
                },500);
            }else if(data.status == "faild"){
                $('.xploading_bg').hide();
                $('.xploading').hide();
                alert(data.errmsg);
                codeimg();
            }
        },
        error:function (xhr, textStatus, errorThrown) {
            codeimg();
            if(textStatus == "timeout"){
                $('.xploading_bg').hide();
                $('.xploading').hide();
                changeImg();
                alert('响应超时');
            }else{
                $('.xploading_bg').hide();
                $('.xploading').hide();
                changeImg();
                alert('网络异常')
            }
        }
    });
}
function userlogin(t) {
    var name = $('.user-name').val();
    var pass = $('.pass').val();
    var code = $('.codel').val();
    console.log(code);
    if(name == ''){
        codeimg();
        alert('请输入用户名');
        return;
    }
    if(pass == ""){
        codeimg();
        alert('请输入密码');
        return;
    }
    if(code == ''){
        codeimg();
        alert('请输入验证码');
        return;
    }
    $('.xploading_bg').show();
    $('.xploading').show();
    var data = {tname:cagent+name,tpwd:pass,imgcode:code,savelogin:1};
    loging(jrg+'login.do',data,t);
}