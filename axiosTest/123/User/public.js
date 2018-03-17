/**
 * Created by Administrator on 2017/8/11.
 */
(function ($,src) {
    app.checklogin('1',src,function (data) {
        if(data.msg == 'faild'){
            $('#header-bot').append(dom.islogin(data.msg));
            app.changeImg();
            app.LoginIn();
        }else if(data.msg == 'outlogin'){
            $('#header-bot').append(dom.islogin(data.msg));
            app.changeImg();
            app.LoginIn();
        }else if(data.msg == 'success'){
            $('#header-bot').append(dom.islogin(data.msg,data.userName));
        }else if(data === '网络异常'){
            $('#header-bot').append(dom.islogin(data.msg));
            app.changeImg();
            app.LoginIn();
            dom.systemHint('网络异常')
        }
    });
    $('#Imgcode').on('click',function () {
        app.changeImg();
    });
}(jQuery,src));