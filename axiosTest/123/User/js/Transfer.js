/**
 * Created by Administrator on 2017/4/30.
 */
function tranchangeImg() {
    var src = jrg+'validateCode?timesp'+(new Date()).valueOf();
    $('#trancaptcha').attr("src", src);
}
$(function () {
    var i,text,text_in,textout;
    $('.mod').empty();
    for(i=0;i<list.length;i++){
        text = '<li game="'+list[i].type+'" class="child"><p class="sup">'+list[i].title+'</p><p class="orange '+list[i].type+'">'+list[i].text+'</p><p class="Refresh" onclick="Refresh_child(this)"><img src="'+list[i].image+'" alt=""></p></li>';
        $('.mod').append(text);
        textin = '<option value="'+list[i].type+'">'+list[i].title+'</option>';
        $('#in').append(textin);
        $('#out').append(textin);
        $("#out").find("option[value='CG']").attr("selected",true);
    }
});

function Refresh_child(t){
    var Id = $(t).parent().attr('game');
    var prev =  $(t).prev();
    $('.xploading_bg').show();
    $('.xploading').show();
    $.ajax({
        type:"post",
        xhrFields:{withCredentials:true},
        data:{BType:Id},
        url:jrg+'/User/getBalance',
        timeout : 5000,
        success:function (data) {
            $('.xploading_bg').hide();
            $('.xploading').hide();
            if(!isNaN(data.balance)){
                data.balance = parseInt(data.balance)
            }
            prev.html(data.balance)
        },
        error:function (xhr,textStatus) {
            $('.xploading_bg').hide();
            $('.xploading').hide();
            if(textStatus == "timeout"){
                alert('响应超时')
            }else{
                alert('网络异常')
            }
        }
    })
}
function Conversionall() {
    var checkIndexout=$("#out").get(0).selectedIndex;
    var checkIndexin=$("#in").get(0).selectedIndex;
    if(checkIndexout == 1){
        $("#out").find("option[value='中心钱包']").attr("selected",true);
        $("#in").find("option[value='CG']").attr("selected",true);
    }else{
        $("#in").find("option[value='中心钱包']").attr("selected",true);
        $("#out").find("option[value='CG']").attr("selected",true);
    }
}
function Conversionin() {
    var checkIndex=$("#in").get(0).selectedIndex;
    if(checkIndex == 0){
        $("#out").find("option[value='CG']").attr("selected",true);
    }else{
        $("#out").find("option[value='中心钱包']").attr("selected",true);

    }
}
var prompt=['转账平台错误','转账金额错误','token验证失败','图形验证码错误','转账未完成,请稍后再试','余额不足','钱包查询出错']
//     01:,
//     02:,
//     03:,
//     04:,
//     05:,
//     06:,
//     07:,
//     error:系统错误,请稍后再试,
//     success:成功
// process:维护中
function Transfer() {
    var In = $('#in').val();
    var out = $('#out').val();
    var ken = $.cookie('nima');
    var ney = $('.money').val();
    var de = $('.code').val();
    money($('.money').val());
    if(verification == false){
        tranchangeImg();
        return;
    }
    code($('.code').val());
    if(verification == false){
        tranchangeImg();
        return;
    }
    $('.xploading_bg').show();
    $('.xploading').show();
    $.ajax({
        type: "post",
        url: jrg+ 'User/getToken',
        async: true,
        data: {userKey: ken},
        xhrFields: { withCredentials: true},
        success: function(data) {
            token = data.msg;
            // var d= {credit: ney,type: out,uuid: token,imgcode: de}
            if($('#in').val() == '中心钱包'){
                $('.xploading_bg').show();
                $('.xploading').show();
                $.ajax({
                    type:"post",
                    xhrFields:{withCredentials:true},
                    data:{credit: ney,type: out,uuid: token,imgcode: de},
                    url:jrg+'User/TransferTo',
                    timeout : 5000,
                    success:function (d_ata) {
                        tranchangeImg();
                        $('.xploading_bg').hide();
                        $('.xploading').hide();
                        switch (d_ata.msg) {
                            case '01':
                                alert('转账平台错误');
                                break;
                            case '02':
                                alert('转账金额错误');
                                break;
                            case '03':
                                alert('token验证失败,如有疑问，请咨询客服');
                                break;
                            case "04":
                                alert('图形验证码错误');
                                break;
                            case "05":
                                alert('转账未完成,请稍后再试');
                                break;
                            case "06":
                                alert('图形验证码错误');
                                break;
                            case "07":
                                alert("钱包查询出错");
                                break;
                            case "error":
                                alert("系统错误,请稍后再试");
                                break;
                            case "success":
                                alert("转账成功");
                                break;
                            case "process":
                                alert("维护中");
                                break;
                        }
                    },
                    error:function (xhr,textStatus) {
                        tranchangeImg();
                        $('.xploading_bg').hide();
                        $('.xploading').hide();
                        if(textStatus == "timeout"){
                            alert('响应超时')
                        }else{
                            alert('网络异常')
                        }
                    }
                })
            }else if($('#out').val() == '中心钱包'){
                $('.xploading_bg').show();
                $('.xploading').show();
                $.ajax({
                    type:"post",
                    xhrFields:{withCredentials:true},
                    data:{credit: ney,type: out,uuid: token,imgcode: de},
                    url:jrg+'User/TransferFrom',
                    timeout : 5000,
                    success:function (d_ata) {
                        tranchangeImg();
                        $('.xploading_bg').hide();
                        $('.xploading').hide();
                        switch (d_ata.msg) {
                            case '01':
                                alert('转账平台错误');
                                break;
                            case '02':
                                alert('转账金额错误');
                                break;
                            case '03':
                                alert('token验证失败,如有疑问，请咨询客服');
                                break;
                            case "04":
                                alert('图形验证码错误');
                                break;
                            case "05":
                                alert('转账未完成,请稍后再试');
                                break;
                            case "06":
                                alert('图形验证码错误');
                                break;
                            case "07":
                                alert("钱包查询出错");
                                break;
                            case "error":
                                alert("系统错误,请稍后再试");
                                break;
                            case "success":
                                alert("转账成功");
                                break;
                            case "process":
                                alert("维护中");
                                break;
                        }
                    },
                    error:function (xhr,textStatus) {
                        tranchangeImg();
                        $('.xploading_bg').hide();
                        $('.xploading').hide();
                        if(textStatus == "timeout"){
                            alert('响应超时')
                        }else{
                            alert('网络异常')
                        }
                    }
                })
            }
        },
        error:function () {
            tranchangeImg();
            alert('网络异常')
        }
    })

}
function Fay(t) {

}
function  Conversionout() {
    var checkIndex=$("#out").get(0).selectedIndex;
    if(checkIndex == 0){
        $("#in").find("option[value='CG']").attr("selected",true);
    }else{
        $("#in").find("option[value='中心钱包']").attr("selected",true);
    }
}

