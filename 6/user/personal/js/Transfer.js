/**
 * Created by Administrator on 2017/4/30.
 */
Pubilc.changeImg('#TransferImage');
var Personal=function () {
    this.token = $.cookie('nima');
    this.checkIndex;this.checkIndexout;this.checkIndexin;this.ation;this.text;this.data;this.uuid;
};
Personal.prototype={
    Content:function () {
        $('.mod').empty();
        for(i=0;i<list.length;i++){
            text = '<li game="'+list[i].type+'" class="child"><p class="sup">'+list[i].title+'</p><p class="orange '+list[i].type+'">'+list[i].text+'</p><p class="Refresh" onclick="center.Balance(this)"><img src="'+list[i].image+'" alt=""></p></li>';
            $('.mod').append(text);
            this.text = '<option value="'+list[i].type+'">'+list[i].title+'</option>';
            $('#in').append(this.text);
            $('#out').append(this.text);
            $("#out").find("option[value='CG']").attr("selected",true);
        }
    },
    // 金额验证
    validation:function (t) {
        if(t == ""){
            this.text="请输入金额";
            return this.ation =false;
        }else if(t<100){
            this.text="充值金额不能小于100";
            return this.ation =false;
        }else if(t>500000){
            this.text="充值金额不能大于500000";
            return this.ation =false;
        }else{
            return this.ation =true;
        }
    },
    // code验证
    validationcode:function (t) {
        if(t == ""){
            this.text='请输入验证码';
            this.ation = false;
            return;
        }else{
            this.ation = true;
            return;
        }
    },
    //金额取整
    ToDecimal:function (x) {
        var f = parseFloat(x);
        if (isNaN(f)) {
            return;
        }
        f = Math.round(x*100)/100;
        return f;
    },
    // 点击切换
    Conversion:function (el) {
        $('.money').val('');
        $('.code').val('');
        this.checkIndex=$(el).get(0).selectedIndex;
        if(this.checkIndex == 0){
            $("#in").find("option[value='CG']").attr("selected",true);
        }else{
            $("#in").find("option[value='中心钱包']").attr("selected",true);
        }
    },
    //点击切换
    ConversionAll:function (Out,In) {
        $('.money').val('');
        $('.code').val('');
        this.checkIndexout=$(Out).get(0).selectedIndex;
        this.checkIndexin=$(In).get(0).selectedIndex;
        if(this.checkIndexout == 1){
            $(Out).find("option[value='中心钱包']").attr("selected",true);
            $(In).find("option[value='CG']").attr("selected",true);
        }else{
            $(In).find("option[value='中心钱包']").attr("selected",true);
            $(Out).find("option[value='CG']").attr("selected",true);
        }
    },
    // ajax返回结果
    TransferText:function (Num) {
        switch (Num) {
            case '01':
                Pubilc.changeImg('#TransferImage');
                $('.panel').show();
                $('.panel-con').show();
                this.text = "转账平台错误";
                $('.panel-text').empty();
                $('.panel-text').text(this.text);
                break;
            case '02':
                Pubilc.changeImg('#TransferImage');
                $('.panel').show();
                $('.panel-con').show();
                this.text = "转账金额错误";
                $('.panel-text').empty();
                $('.panel-text').text(this.text);
                break;
            case '03':
                Pubilc.changeImg('#TransferImage');
                $('.panel').show();
                $('.panel-con').show();
                this.text = "&nbsp;token验证失败,如有疑问，请咨询 <a class='star' href='http://f88.live800.com/live800/chatClient/chatbox.jsp?companyID=779799&configID=144546&jid=9355144430'>客服</a> ";
                $('.panel-text').empty();
                $('.panel-text').append(this.text);
                break;
            case "04":
                Pubilc.changeImg('#TransferImage');
                $('.panel').show();
                $('.panel-con').show();
                this.text = "图形验证码错误";
                $('.panel-text').empty();
                $('.panel-text').text(this.text);
                break;
            case "05":
                Pubilc.changeImg('#TransferImage');
                $('.panel').show();
                $('.panel-con').show();
                this.text = "转账未完成,请稍后再试";
                $('.panel-text').empty();
                $('.panel-text').text(this.text);
                break;
            case "06":
                Pubilc.changeImg('#TransferImage');
                $('.panel').show();
                $('.panel-con').show();
                this.text = "余额不足";
                $('.panel-text').empty();
                $('.panel-text').text(this.text);
                break;
            case "07":
                Pubilc.changeImg('#TransferImage');
                $('.panel').show();
                $('.panel-con').show();
                this.text = "钱包查询出错";
                $('.panel-text').empty();
                $('.panel-text').text(this.text);
                break;
            case "error":
                Pubilc.changeImg('#TransferImage');
                $('.panel').show();
                $('.panel-con').show();
                this.text = "系统错误,请稍后再试";
                $('.panel-text').empty();
                $('.panel-text').text(this.text);
                break;
            case "success":
                Pubilc.changeImg('#TransferImage');
                $('.panel').show();
                $('.panel-con').show();
                this.text = "转账成功";
                $('.panel-text').empty();
                $('.money').val('');
                $('.code').val('');
                $('.panel-text').text(this.text);
                break;
            case "process":
                Pubilc.changeImg('#TransferImage');
                alert("维护中");
                $('.panel').show();
                $('.panel-con').show();
                this.text = "维护中";
                $('.panel-text').empty();
                $('.panel-text').text(this.text);
                break;
        }
    },
    // 转出
    TransferTo:function (Url,Data) {
        var _this = this;
        $.ajax({
            type:"post",
            xhrFields:{withCredentials:true},
            data:Data,
            url:Url,
            timeout : 5000,
            success:function (data) {
                $('.xploading_bg').hide();
                $('.xploading').hide();
                _this.text = data.msg;
                Pubilc.changeImg('#TransferImage');
                _this.TransferText(_this.text);
            },
            error:function (xhr,textStatus) {
                Pubilc.changeImg('#TransferImage');
                $('.xploading_bg').hide();
                $('.xploading').hide();
                if(textStatus == "timeout"){
                    alert('响应超时')
                }else{
                    alert('网络异常')
                }
            }
        })
    },
    //转出
    TransferFrom:function (Url,Data) {
        var _this = this;
        $.ajax({
            type:"post",
            xhrFields:{withCredentials:true},
            data:Data,
            url:Url,
            timeout : 5000,
            success:function (data) {
                $('.xploading_bg').hide();
                $('.xploading').hide();
                _this.text = data.msg;
                Pubilc.changeImg('#TransferImage');
                _this.TransferText(_this.text);
            },
            error:function (xhr,textStatus) {
                Pubilc.changeImg('#TransferImage');
                $('.xploading_bg').hide();
                $('.xploading').hide();
                if(textStatus == "timeout"){
                    alert('响应超时')
                }else{
                    alert('网络异常')
                }
            }
        })
    },
    //获取数据
    TransferData:function (money,code,token,to,Form) {
        this.validation($(money).val());
        if(this.ation === false){
            Pubilc.changeImg('#TransferImage');
            $('.panel').show();
            $('.panel-con').show();
            $('.panel-text').empty();
            $('.panel-text').text(this.text);
            return;
        }
        this.validationcode(code);
        if(this.ation === false){
            Pubilc.changeImg('#TransferImage');
            $('.panel').show();
            $('.panel-con').show();
            $('.panel-text').empty();
            $('.panel-text').text(this.text);
            return;
        }
        $('.xploading_bg').show();
        $('.xploading').show();
        var _this=this;
        $.ajax({
            type: "post",
            url:token,
            async: true,
            data: {userKey:this.token},
            xhrFields: { withCredentials: true},
            success:function (token) {
                _this.text = token.msg;
                if($('#in').val() == '中心钱包'){
                    _this.data={credit:_this.ToDecimal($(money).val()),type:$('#out').val(),imgcode:$(code).val(),uuid:_this.text};
                    _this.TransferTo(to,_this.data);
                }else if($('#out').val() == '中心钱包'){
                    _this.data={credit:_this.ToDecimal($(money).val()),type:$('#in').val(),imgcode:$(code).val(),uuid:_this.text};
                    _this.TransferFrom(Form,_this.data);
                }
            },
            error:function () {
                _this.text = '网络异常';
                $('.panel').show();
                $('.panel-con').show();
                $('.panel-text').empty();
                $('.panel-text').text(_this.text);
            }
        })
    },
    // 提交
    Transfer:function () {
        this.TransferData($('.money'),$('.code'),JRG+ 'User/getToken',JRG+'User/TransferTo',JRG+'User/TransferFrom');
    },
    //查询余额
    Balance:function (t) {
        $('.xploading_bg').show();
        $('.xploading').show();
        var Id = $(t).parent().attr('game');
        var prev =  $(t).prev();
        $(t).prev().text('loading...');
        var _this = this;
        $.ajax({
            type:"post",
            xhrFields:{withCredentials:true},
            data:{BType:Id},
            url:JRG+'/User/getBalance',
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
                    // _this.text = '响应超时';
                    // $('.panel').show();
                    // $('.panel-con').show();
                    // $('.panel-text').empty();
                    // $('.panel-text').text(_this.text);
                }else{
                    // _this.text = '网络异常';
                    // $('.panel').show();
                    // $('.panel-con').show();
                    // $('.panel-text').empty();
                    // $('.panel-text').text(_this.text);
                }
            }
        })
    },
    //查询所有余额
    BalanceAll:function () {
        var Refresh = $('.Refresh');
        for(var i=0;i<Refresh.length;i++){
            var prev = $(Refresh[i]);
            this.Balance(prev)
        }
    }
};
var center = new Personal();
center.Content();

