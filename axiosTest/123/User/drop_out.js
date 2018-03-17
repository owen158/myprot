/**
 * Created by Administrator on 2017/5/4.
 */
function dropout(t){//退出
    $('.xploading_bg').show();
    $('.xploading').show();
    $.ajax({
        type:"get",
        xhrFields:{withCredentials:true},
        data:{},
        timeout : 6000,
        url:jrg+'logout.do',
        cache:false,
        success:function (data) {
            // 判断登录
            $.cookie('nima', null,{ path: '/' });
            $.cookie('judgment', null,{ path: '/' });
            window.location.href=t;
        },
        error:function (xhr, textStatus, errorThrown) {
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
                changeImg();
                alert('网络异常')
            }
        }
    })
}