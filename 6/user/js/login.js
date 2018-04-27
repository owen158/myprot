/**
 * Created by Administrator on 2017/5/8.
 */
//
Pubilc.changeImg('#image');
var UserLogin = function () {this.name;this.pass;this.code;this.ation;this.savelogin=1;this.image;this.src;this.text;this.data;};
UserLogin.prototype={
    //表单验证
    validation:function (obj) {
        if(obj === ""){return this.ation = false;}else{return this.ation = true;}
    },
    //提示
    _name:function (el,image) {
        this.validation(el);
        if(this.ation === false){
            Pubilc.changeImg($(image));
            $('.panel').show();
            $('.panel-con').show();
            this.text = "&nbsp;请输入<b class='star'>用户名</b>";
            $('.panel-text').empty();
            $('.panel-text').append(this.text);
        }
    },
    //提示
    _pass:function (el,image) {
        this.validation(el);
        if(this.ation === false){
            Pubilc.changeImg($(image));
            $('.panel').show();
            $('.panel-con').show();
            this.text = "&nbsp;请输入<strong class='star'>密码</strong>";
            $('.panel-text').empty();
            $('.panel-text').append(this.text);
        }
    },
    //提示
    _code:function (el,image) {
        this.validation(el);
        if(this.ation === false){
            Pubilc.changeImg($(image));
            $('.panel').show();
            $('.panel-con').show();
            this.text = "&nbsp;请输入<strong class='star'>验证码</strong>";
            $('.panel-text').empty();
            $('.panel-text').append(this.text);
        }
    },
    //提交
    // ulr data 当前页面 ，image
    Loginajax:function (Url,dt,t,image) {
        var _this = this;
        $.ajax({
            type:"post",
            xhrFields:{withCredentials:true},
            url:Url,
            data:dt, // {tname:this.name,tpwd:this.pass,savelogin:this.savelogin,imgcode:this.code},
            timeout : 3000,
            async:true,
            cache:false,
            success:function (data) {
                if(data.status == 'ok'){
                    $.cookie('nima', data.userKey, { expires: 1 , path: '/' });
                    setTimeout(function  () {
                        $('.xploading_bg').hide();
                        $('.xploading').hide();
                        window.location.href=t;
                    },500);
                }else if(data.status == "faild"){
                    Pubilc.changeImg($(image));
                    $('.xploading_bg').hide();
                    $('.xploading').hide();
                    $('.panel').show();
                    $('.panel-con').show();
                    _this.text = data.errmsg;
                    $('.panel-text').empty();
                    $('.panel-text').text(In.text);
                }
            },
            error:function (xhr, textStatus, errorThrown) {
                if(textStatus == "timeout"){
                    $('.xploading_bg').hide();
                    $('.xploading').hide();
                    Pubilc.changeImg($(image));
                    $('.panel').show();
                    $('.panel-con').show();
                    _this.text = '响应超时';
                    $('.panel-text').empty();
                    $('.panel-text').text(In.text);
                }else{
                    $('.xploading_bg').hide();
                    $('.xploading').hide();
                    Pubilc.changeImg($(image));
                    $('.panel').show();
                    $('.panel-con').show();
                    _this.text = '网络异常';
                    $('.panel-text').empty();
                    $('.panel-text').text(In.text);
                }
            }
        });
    },
    //页面提交
    Mit:function (Url) {
        this.name = $('#username').val();
        this.pass = $('#passwd').val();
        this.code = $('#vlcodes').val();
        this._name(this.name,'#checkNum_img');
        if(this.ation === false){ return;};
        this._pass(this.pass,'#checkNum_img');
        if(this.ation === false){ return;};
        this._code(this.code,'#checkNum_img');
        if(this.ation === false){ return;};
        $('.xploading_bg').show();$('.xploading').show();
        this.data={tname:CAGENT+this.name,tpwd:this.pass,savelogin:this.savelogin,imgcode:this.code};
        this.Loginajax(JRG+"login.do",this.data,Url,'#checkNum_img');
    },
    Panel:function (Url) {
        this.name = $('.user-name').val();
        this.pass = $('.pass').val();
        this.code = $('.codel').val();
        this._name(this.name,'#image');
        if(this.ation === false){ return;};
        this._pass(this.pass,'#image');
        if(this.ation === false){ return;};
        this._code(this.code,'#image');
        if(this.ation === false){ return;};
        $('.xploading_bg').show();$('.xploading').show();
        this.data={tname:CAGENT+this.name,tpwd:this.pass,savelogin:this.savelogin,imgcode:this.code};
        this.Loginajax(JRG+"login.do",this.data,Url,'#image');
    }
};
var In = new UserLogin();
