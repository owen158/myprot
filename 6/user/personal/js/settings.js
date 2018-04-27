/**
 * Created by Administrator on 2017/5/5.
 */
var settings={};
settings.ation;
//修改登录密码
settings.modifylogin = function(u,t){//修改登录密码
    $.ajax({
        type:"post",
        url:u,
        data:t,
        cache:false,
        xhrFields:{withCredentials:true},
        success: function (data) {
            $('.xploading_bg').hide();
            $('.xploading').hide();
            if(data.msg == "success"){
                $('.panel').show();
                $('.panel-con').show();
                $('.panel-text').html('修改成功');
                $('.loginps').val('');
                $('.loginpass').val('');
                $('.loginqrpass').val('');
            }else{
                $('.panel').show();
                $('.panel-con').show();
                $('.panel-text').html(data.msg);
            }
        },
        error:function(){
            $('.panel').show();
            $('.panel-con').show();
            $('.panel-text').html('网络异常');
            $('.xploading_bg').hide();
            $('.xploading').hide();
        }
    })
};
// 修改取款密码
settings.modifycard = function(u,t){//修改取款密码
    $.ajax({
        type:"post",
        url:u,
        data:t,
        cache:false,
        xhrFields:{withCredentials:true},
        success: function (data) {
            $('.xploading_bg').hide();
            $('.xploading').hide();
            if(data.msg == "success"){
                $('.panel').show();
                $('.panel-con').show();
                $('.panel-text').html('修改成功');
                $('.cardps').val('');
                $('.cardpass').val('');
                $('.cardqrpass').val('');
            }else{
                $('.panel').show();
                $('.panel-con').show();
                $('.panel-text').html(data.msg);
            }
        },
        error:function(){
            $('.xploading_bg').hide();
            $('.xploading').hide();
            $('.panel').show();
            $('.panel-con').show();
            $('.panel-text').html('网络异常');

        }
    })
};
// 验证是否为空
settings.air=function(t) {
    if(t == ""){
        return settings.ation = false;
    }else{
        return settings.ation = true;
    }
};
// 登录密码验证
settings.loginregpass = function(obj){//密码验证
    if(!/^[A-Za-z](?![a-zA-Z]+$)[0-9A-Za-z]{7,15}$/.test(obj.val())){
        return settings.ation = false;
    }else{
        return settings.ation = true;
    }
};
// 取款密码验证
settings.cardregpass = function (obj) {
    if(!/^[0-9]{6}$/.test(obj.val())){
        return settings.ation = false;
    }else{
        return settings.ation = true;
    }
};
//修改取款密码
settings.submitcard=function() {
    var cardps,cardpass,cardqrpass,data;
    cardps = $('.cardps').val();
    cardpass = $('.cardpass').val();
    cardqrpass = $('.cardqrpass').val();
    settings.air(cardps);
    if(settings.ation == false){
        $('.panel').show();
        $('.panel-con').show();
        $('.panel-text').html('请输入取款密码');
        return;
    }
    settings.cardregpass($('.cardpass'));
    if(settings.ation == false){
        $('.panel').show();
        $('.panel-con').show();
        $('.panel-text').html('取款密码，必须为6（0-9）位数字');
        return;
    }
    settings.air(cardqrpass);
    if(settings.ation == false){
        $('.panel').show();
        $('.panel-con').show();
        $('.panel-text').html('确认密码有误,请确认！');
        return;
    }
    if(cardpass != cardqrpass){
        $('.panel').show();
        $('.panel-con').show();
        $('.panel-text').html('请再次填写新密码');
        return;
    }
    data={password:cardps,npassword:cardpass,renpassword:cardqrpass};
    settings.modifycard(JRG+'User/changeQkpwd',data);
};
settings.Submitlogin = function() {
    var loginps,loginpass,loginqrpass,data;
        loginps = $('.loginps').val();
        loginpass = $('.loginpass').val();
        loginqrpass = $('.loginqrpass').val();
        settings.air(loginps);
        if(settings.ation == false){
            $('.panel').show();
            $('.panel-con').show();
            $('.panel-text').html('请输入登录密码');
            return;
        };
        settings.loginregpass($('.loginpass'));
        if(settings.ation == false){
            var text = "非数字开头，8-15位字母，数字组成";
            $('.panel').show();
            $('.panel-con').show();
            $('.panel-text').html(text);
            return;
        };
        settings.air(loginqrpass);
        if(settings.ation == false){
            $('.panel').show();
            $('.panel-con').show();
            $('.panel-text').html('请再次填写新密码');
            return;
        };
        if(loginpass != loginqrpass ){
            $('.panel').show();
            $('.panel-con').show();
            $('.panel-text').html('确认密码有误,请确认！');
            return;
        }
        data={
            password:loginps,
            npassword:loginpass,
            renpassword:loginqrpass
        };
    $('.xploading_bg').show();
    $('.xploading').show();
    settings.modifylogin(JRG+'User/changePassword',data);
}

