// var src = jrg+'validateCode?timesp'+(new Date()).valueOf();
// $('#captcha').attr("src", src);

var UserLogin = function () {
	this.name;this.pass;this.code;this.ation;this.savelogin=1;this.image;this.src;this.text;this.data;
};
UserLogin.prototype={
    validation:function (obj) {
		if(obj === ""){
			return this.ation = false;
		}else{
			return this.ation = true;
		}
    },
	// 获取表单
    Obtain:function (url,Nme) {
        var name,pass,code;
        if(Nme === "0"){
            console.log(0)
            name = $('#name').val();
            pass = $('#pass').val();
            code = $('#code').val();
        }else if(Nme === "1"){
            console.log(1)
            name = $('.user-name').val();
            pass = $('.passwor').val();
            code = $('.codel').val();
        }
		this.name =name;
        this.pass =pass;
        this.code =code;
        this.validation(this.name);
        if(this.ation === false){
            Pubilc.changeImg($('#image'));
            Pubilc.changeImg($('#captcha'));

            $('.panel').show();
            $('.panel-con').show();
            this.text = "&nbsp;请输入<strong class='star'>用户名</strong>";
            $('.panel-text').empty();
            $('.panel-text').append(this.text);
            console.log(456);
            return;
        }
        this.validation(this.pass);
        if(this.ation === false){
            Pubilc.changeImg($('#image'));
            Pubilc.changeImg($('#captcha'));
            $('.panel').show();
            $('.panel-con').show();
            this.text = "&nbsp;请输入<strong class='star'>密码</strong>";
            $('.panel-text').empty();
            $('.panel-text').append(this.text);
            return;
		}
        this.validation(this.code);
        if(this.ation === false){
            Pubilc.changeImg($('#image'));
            Pubilc.changeImg($('#captcha'));
            $('.panel').show();
            $('.panel-con').show();
            this.text = "&nbsp;请输入<strong class='star'>验证码</strong>";
            $('.panel-text').empty();
            $('.panel-text').append(this.text);
            return;
        }
        $('.xploading_bg').show();
        $('.xploading').show();
        this.data={tname:cagent+this.name,tpwd:this.pass,savelogin:this.savelogin,imgcode:this.code};
        In.Loginajax(JRG+"login.do",this.data,url);
    },
	//提交
	Loginajax:function (Url,Data,t) {
        $.ajax({
            type:"post",
            xhrFields:{withCredentials:true},
            url:Url,
            data:Data, // {tname:this.name,tpwd:this.pass,savelogin:this.savelogin,imgcode:this.code},
            timeout : 10000,
            cache:false,
            success:function (data) {
                $('.xploading_bg').hide();
                $('.xploading').hide();
                if(data.status == 'ok'){
                    setTimeout(function  () {
                        window.location.href=t;
                    },500);
                }else if(data.status == "faild"){
                    Pubilc.changeImg($('#captcha'));
                    Pubilc.changeImg($('#image'));
                    $('.panel').show();
                    $('.panel-con').show();
                    In.text = data.errmsg;
                    $('.panel-text').empty();
                    $('.panel-text').text(In.text);
                }
            },
            error:function (xhr, textStatus, errorThrown) {
                $('.xploading_bg').hide();
                $('.xploading').hide();
                if(textStatus == "timeout"){
                    Pubilc.changeImg($('#captcha'));
                    Pubilc.changeImg($('#image'));
                    $('.panel').show();
                    $('.panel-con').show();
                    In.text = '响应超时';
                    $('.panel-text').empty();
                    $('.panel-text').text(In.text);
                }else{
                    Pubilc.changeImg($('#captcha'));
                    Pubilc.changeImg($('#image'));
                    $('.panel').show();
                    $('.panel-con').show();
                    In.text = '网络异常';
                    $('.panel-text').empty();
                    $('.panel-text').text(In.text);
                }
            }
        });
    },
    code:function (img) {
        Pubilc.changeImg($(img));
    }
};

var In = new UserLogin();
// 验证码

// 登录游戏
function loadgame(type,id,model) {
    var da={gameType:type,gameID:id,model:model};
    var newTab=window.open('',da.gameType+da.gameID);
    var  doc =  newTab.document;
    doc.write('<!DOCTYPE html><html><head>');
    doc.write('<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />');
    doc.write('<link rel="stylesheet" type="text/css" href="style.css" />');
    // doc.write('<script type="text/javascript" src="one.js"><\/script>');
    // doc.write('<script type="text/javascript" src="two.js"></scr' + 'ipt>');
    doc.write('</head><body>');
    doc.write('<div id="somediv">' + '游戏正在加载中,请勿重复点击.....' + '</div>');
    doc.write('</body></html>');
    newTab.document.write='加载中、请稍后';
    $.ajax({
        type:"get",
        url:JRG+"checklogin.do",
        async:true,
        cache:false,
        xhrFields:{withCredentials:true},
        success:function  (data) {
            if (data.msg == 'success') {
                $.ajax({
                    type:"post",
                    data:da,
                    xhrFields:{withCredentials:true},
                    url:JRG+'User/forwardGame',
                    timeout : 3000,
                    cache: false,
                    success: function (dat) {
                        $('.xploading_bg').hide();
                        $('.xploading').hide();
                        if(dat.msg == "error"){
                            newTab.close();
                            $('.panel').show();
                            $('.panel-con').show();
                            $('.panel-text').empty();
                            $('.panel-text').append('系统错误');
                        }else if(dat.msg =='process'){
                            newTab.close();
                            $('.panel').show();
                            $('.panel-con').show();
                            $('.panel-text').empty();
                            $('.panel-text').append('维护中');
                        }else if(dat.msg != "error"){
                            newTab.location.href = dat.msg;
                        }
                    },
                    error:function (xhr,textStatus) {
                        $('.xploading_bg').hide();
                        $('.xploading').hide();
                        if(textStatus=='timeout'){
                            newTab.close();
                            $('.panel').show();
                            $('.panel-con').show();
                            $('.panel-text').empty();
                            $('.panel-text').append('游戏加载失败');
                        }else{
                            newTab.close();
                            $('.panel').show();
                            $('.panel-con').show();
                            $('.panel-text').empty();
                            $('.panel-text').append('游戏加载失败');
                        }
                    }
                })
            }else if(data.msg === 'faild'){
                newTab.close();
                $('.xploading_bg').hide();
                $('.xploading').hide();
                $('.login-panel').show();
                $('.login-panel-con').show();
                $('.panel').show();
                Pubilc.changeImg($('#image'));
                Pubilc.changeImg($('#captcha'));
                $('.panel-con').show();
                $('.panel-text').empty();
                $('.panel-text').append('您尚未登录，请先登录再进行游戏');
            }else if(data.msg == 'outlogin'){
                newTab.close();
                $('.xploading_bg').hide();
                $('.xploading').hide();
                $('.panel').show();
                $('.panel-con').show();
                $('.panel-text').empty();
                Pubilc.changeImg($('#image'));
                Pubilc.changeImg($('#captcha'));
                $('.panel-text').append('账户已在别处登录');
            }
        }
    })
}

//************** 登录 ***************

