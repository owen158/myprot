/**
 * Created by Administrator on 2017/4/27.
 */
$('#bank li').on('click',function () {
    $(this).addClass('active').siblings('.active').removeClass('active');
    var Id=$(this).attr('mank');
    $(Id).addClass('active').siblings('.active').removeClass('active');
});
$('#list li').on('click',function () {
    $(this).addClass('active').siblings('.active').removeClass('active');
    var Id=$(this).attr('mank');
    $(Id).addClass('active').siblings('.active').removeClass('active');
})
$('#check_box').find('input[type=checkbox]').bind('click', function(){
    $('#check_box').find('input[type=checkbox]').not(this).attr("checked", false);
});
//提交存款
function Submit(t) {
    var money = $('#card_mony').val();
    var vl = $('#check_box input:checked').val();
    if(money == ""){
        alert('请输入金额')
    }else if(money <100){
        alert('充值金额不能小于100')
    }else if(money > 500000){
        alert('充值金额不能大于500000')
    }else if(vl == '' || vl == undefined){
        alert('请选择银行类型')
    }else{

        $('.xploading_bg').show();
        $('.xploading').show();
        $.ajax({
            type:"post",
            xhrFields:{withCredentials:true},
            data:{payType:t,bankCode:vl,amount:money},
            timeout : 3000,
            url:jrg+'User/ReChangePay',
            cache:false,
            success:function (data) {
                $('.xploading_bg').hide();
                $('.xploading').hide();
                if(data.msg == 'error'){
                    alert('系统异常')
                }else{
                    window.location.href = data.msg
                }
            },
            error:function (xhr, textStatus, errorThrown) {
                $('.xploading_bg').hide();
                $('.xploading').hide();
                alert('网络异常')
            }
        });
    }
}
function Recharge(t,inp) {
    var money = $(inp).val();
    if(money == ""){
        alert('请输入金额')
    }else if(money <100){
        alert('充值金额不能小于100')
    }else if(money > 500000){
        alert('充值金额不能大于500000')
    }else{
        $('.xploading_bg').show();
        $('.xploading').show();
        $.ajax({
            type:"post",
            xhrFields:{withCredentials:true},
            data:{payType:t,amount:money},
            timeout : 3000,
            url:jrg+'/User/ReChangePay',
            cache:false,
            success:function (data) {
                $('.xploading_bg').hide();
                $('.xploading').hide();
                if(data.msg == 'error'){
                    alert('系统异常')
                }else{
                    window.location.href = data.msg
                }
            },
            error:function (xhr, textStatus, errorThrown) {
                $('.xploading_bg').hide();
                $('.xploading').hide();
                alert('网络异常')
            }
        });
    }
}
//提交存款
