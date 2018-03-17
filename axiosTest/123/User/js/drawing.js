/**
 * Created by Administrator on 2017/4/28.
 */
function cancel() {
    $('.add_card').hide();
    $('.add_card_content').hide();
}
function add(){
    $('.add_card').show();
    $('.add_card_content').show();
}
function carduser(t){//银行验证用户名
    var text= /^[\u4e00-\u9fa5]{2,7}$/;
    if(text.test(t)){
        return true;
    }else{
        return false;
    }
};
function cardnumber(t){// 银行验证 卡号
    var text= /^[0-9]{16,19}$/;
    if(text.test(t)){
        return true;
    }else{
        return false;
    }
}
// ---------------------添加银行卡------------------
function Addtocard() {
    var bankId =  $('#bindcard_bankId').val();
    var cardname = $('#cardname').val();
    var city_province = $('#city_province').val();
    var card_nmb = $('#card_nmb').val();
    var  province = $('#province').val();
    var city = $('#city').val();
    var pass = $('#pass').val();
    if(bankId == ""){alert('请选择银行卡.'); return;}
    if(carduser(cardname) == false){alert('请输入用户名，必须为中文');return;}
    if(province == '请选择'){alert('请选择省份'); return;}
    if(city_province == "请选择"){ alert('请填写用开户支行'); return;}
    if(cardnumber(card_nmb) == false){alert('验证不通过，卡号16或19位，请认真填写');return;}
    if(pass == ""){alert('请输入密码.'); return;}
    $('.xploading_bg').show();
    $('.xploading').show();
    $.ajax({
        type:"post",
        xhrFields:{withCredentials:true},
        data:{cardUserName: cardname,cardNum:card_nmb,cardAddress:province+','+city+','+city_province,password:pass,bankCode:bankId},
        timeout : 3000,
        url:jrg+'User/addUserCard',
        cache:false,
        success:function (data) {
            if(data.msg == 'success'){
                alert('添加成功');
                $('.add_card').hide();
                $('.add_card_content').hide();
                Inquire();
                window.location.href='personal_drawing.html';
            }else{
                alert(data.msg);
                // $('.add_card').hide();
                // $('.add_card_content').hide();
                $('.xploading_bg').hide();
                $('.xploading').hide();
            }
        },
        error:function (xhr, textStatus, errorThrown) {
            $('.xploading_bg').hide();
            $('.xploading').hide();
            alert('网络异常')
        }
    });
}
// ---------------------添加银行卡------------------


//**********************  获取银行卡  *************************
function Inquire() {
    $.ajax({
        type:"get",
        xhrFields:{withCredentials:true},
        data:{},
        timeout : 3000,
        url:jrg+'User/getUserCard',
        cache:false,
        success:function (card) {
            $(".sub-nav li").remove(".italic");
            $('#cardNmB').empty();
            if(card.length === 5){
                $('.addborder').hide();
            }else{
                $('.addborder').show();
            }
            var seltl =  '<option  value="">请选择银行卡</option>';
            $('#cardNmB').append(seltl);
            for(var i=0;i<card.length;i++){
                var text ='<li class="addbak italic"><div class="card"><p class="cardname">'+card[i].bank_name+'</p><p class="cardnmb">'+card[i].card_num+'</p></div><div class="cardinformation"><div class="name lf">'+card[i].card_username+'</div><div class="Open rf">'+card[i].card_address+'</div></div><span  id='+card[i].id+' class="delete" onclick="Delete(this)"><img src="./img/shut.png" alt=""></span></li>';
                $('.sub-nav').prepend(text);
                var selt =  '<option  value="'+card[i].id+'|'+card[i].card_username+'">'+card[i].card_num+'</option>';
                $('#cardNmB').append(selt);
            }
            // var  vl= card[0].card_username;
            //  vl = vl.split('|');
            // $('#card_name').val(vl);
            $('.xploading_bg').hide();
            $('.xploading').hide();
        },
        error:function (xhr, textStatus, errorThrown) {
            $('.xploading_bg').hide();
            $('.xploading').hide();
            // alert('网络异常')
        }
    });
}
Inquire();
//**********************  获取银行卡  *************************


// *********************  获取用户名字  *****************************
function cardNmB(t) {
    var me = $(t).val().split('|');
    $('#card_name').val(me[1]);
}
// *********************  获取用户名字  *****************************


// *************************  申请提款  ******************************
function tocard() {
   var  pass,vl,ney;
        vl = $('#cardNmB').val().split('|');
        vl = vl[0];
        pass = $('.tkpass').val();
        ney = $('.qkmoney').val();
        air($('#cardNmB').val());
        if(verification == false){alert('请选择银行卡');return};
        money(ney);
        if(verification == false){return};
        air(pass);
        if(verification == false){alert('请输入密码');return};
        $('.xploading_bg').show();
        $('.xploading').show();
        $.ajax({
            type:"get",
            xhrFields:{withCredentials:true},
            data:{password:pass,cardid:vl,credit:ney},
            timeout : 3000,
            url:jrg+'User/WithDraw',
            cache:false,
            success:function (data) {
                $('.xploading_bg').hide();
                $('.xploading').hide();
                if(data.msg == 'success'){
                    $('.tkpass').val('');
                    $('.qkmoney').val('');
                    $('#cardNmB').val('')
                }else{
                    alert(data.msg);
                }
            },
            error:function (xhr, textStatus, errorThrown) {
                $('.xploading_bg').hide();
                $('.xploading').hide();
                alert('网络异常')
            }
        });
}
// *************************  申请提款  ******************************


function Deletetcancel() {
    $('.delete_card').hide();
    $('.delete_card_content').hide();

}

var _L ='';
function Delete(t){
    $('.delete_card').show();
    $('.delete_card_content').show();
    // $('.delete_card_content').empty();
    // var tent='<div class="item"><div class="py'+" "+'lase">请输入取款密码:</div><div class="py fist fist-ipt" style="width:172px;"><input class="cardpassword" type="password"></div></div><div style="margin-top: 5px;;border-top:1px solid #bfbfbf" class="item"><div onclick="Deletetocard()" class="py Add_to btn">删除</div><div onclick="Deletetcancel(this)" class="py cancel btn">取消</div></div>'
    // $('.delete_card_content').append(tent);
    _L = $(t).attr('id');

}
// --------------------- 删除银行卡 ------------------
function Deletetocard() {
    var vl = $('.cardpassword').val();
    if(vl == ''){alert('请输入取款密码');return;}
    $.ajax({
        type:"get",
        xhrFields:{withCredentials:true},
        data:{cardId:_L,password:vl},
        timeout : 3000,
        url:jrg+'User/delUserCard',
        cache:false,
        success:function (data) {
            if(data.msg == 'success'){
                alert('删除成功!');
                Inquire();
                $('.delete_card').hide();
                $('.delete_card_content').hide();
            }else{
                alert(data.msg);
            }
        },
        error:function (xhr, textStatus, errorThrown) {
            $('.xploading_bg').hide();
            $('.xploading').hide();
            alert('网络异常')
        }
    });
}
// --------------------- 删除银行卡 ------------------
