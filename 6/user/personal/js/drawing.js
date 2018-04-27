/**
 * Created by Administrator on 2017/5/16.
 */
var drawing=function () {
this.ation;
this.text;
}
drawing.prototype={
    // 用户名验证
    userAtion:function (t) {
        var text = /^[\u4e00-\u9fa5]{2,4}$/
        if(t === ""){
            this.text = '请输入用户名';
            return this.ation = false;
        }else if(!text.test(t)){
            this.text = '用户名必须为中文 2-4 位';
            return this.ation = false;
        }else{
            return this.ation = true;
        }
    },
    numberAtion:function (t) {
        if( /^[0-9]{16}$/.test(t) ||  /^[0-9]{19}$/.test(t)){
            return this.ation = true;
        }else{
            this.text = '卡号16位 || 19位，请认真填写';
            return this.ation = false;
        }
    },
    addUser:function () {
        var bankId =  $('#bindcard_bankId').val();
        var cardname = $('#cardname').val();
        var city_province = $('#city_province').val();
        var card_nmb = $('#card_nmb').val();
        var  province = $('#province').val();
        var city = $('#city').val();
        var pass = $('#pass').val();
        if(bankId === ""){
            this.text = '请选择银行卡类型.';
            $('.panel').show();
            $('.panel-con').show();
            $('.panel-text').empty();
            $('.panel-text').text(center.text);
            return;
        }
        this.userAtion(cardname);
        if(this.ation === false){
            $('.panel').show();
            $('.panel-con').show();
            $('.panel-text').empty();
            $('.panel-text').text(this.text);
            return;
        }
    }
}
var Drawing = new drawing();
