/**
 * Created by Administrator on 2017/5/16.
 */
$('#check_box').find('input[type=checkbox]').bind('click', function(){
    $('#check_box').find('input[type=checkbox]').not(this).attr("checked", false);
});
var bank=function(){this.money;this.vl;this.text;this.src;this.data;};
bank.prototype={
    //网银转账
    ReChangePay:function (t) {
        this.money = $('#card_mony').val();
        this.vl = $('#check_box input:checked').val();
        center.validation(this.money);
        if(center.ation === false){
            $('.panel').show();
            $('.panel-con').show();
            $('.panel-text').empty();
            $('.panel-text').text(center.text);
            return;
        }
        if(this.vl == '' || this.vl == undefined){
            this.text = '请选择银行类型';
            $('.panel').show();
            $('.panel-con').show();
            $('.panel-text').empty();
            $('.panel-text').text(this.text);
            return;
        }
        $('.xploading_bg').show();
        $('.xploading').show();
        this.money = center.ToDecimal(this.money);
        this.data={payType:t,bankCode:this.vl,amount:this.money};
        this.ReChangePayAjax(JRG+'User/ReChangePay',this.data)
    },
    //支付宝、微信转账
    ReChange_Pay:function (t,el) {
        this.money = $(el).val();
        center.validation(this.money);
        if(center.ation === false){
            $('.panel').show();
            $('.panel-con').show();
            $('.panel-text').empty();
            $('.panel-text').text(center.text);
            return;
        }
        $('.xploading_bg').show();
        $('.xploading').show();
        this.money = center.ToDecimal(this.money);
        this.data={payType:t,amount:this.money};
        this.ReChangePayAjax(JRG+'User/ReChangePay',this.data)
    },
    //请求
    ReChangePayAjax:function (Url,Data) {
        var _this=this;
        $.ajax({
            type:"post",
            xhrFields:{withCredentials:true},
            data:Data,
            timeout : 3000,
            url:Url,
            cache:false,
            success:function (data) {
                $('.xploading_bg').hide();
                $('.xploading').hide();
                if(data.msg == 'error'){
                    _this.text ='系统异常';
                    $('.panel').show();
                    $('.panel-con').show();
                    $('.panel-text').empty();
                    $('.panel-text').text(_this.text);
                }else{
                    window.location.href = data.msg
                }
            },
            error:function (xhr, textStatus, errorThrown) {
                $('.xploading_bg').hide();
                $('.xploading').hide();
                _this.text ='网络异常';
                $('.panel').show();
                $('.panel-con').show();
                $('.panel-text').empty();
                $('.panel-text').text(_this.text);
            }
        });
    },
    //赋值input
    Downactive:function (t,el) {
        $(el).empty();
        $(t).addClass('active').siblings('.active').removeClass('active');
        this.text = parseInt($(t).text());
        $(el).val(this.text);

    }
};
var Bank = new bank();
Bank.Downactive('.WOne','#chargepay');
Bank.Downactive('.AOne','#charge');


