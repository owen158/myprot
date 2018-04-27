Pubilc.changeImg('#checkNum_img1');
var register=function () {this.ation;this.token;this.text;this.src;this.data;this.name;this.pass;this.Qrpass;this.mobile;this.Chines;this.code;this.Wpass;this.Indata};
register.prototype={
    //获取、失去焦点验证
    verification:function (name,pass,qrpass,code,chinessname,mobile) {
        this._regUsername(name);
        this._regPass(pass);
        this._regQrpass(qrpass,pass);
        this._regcode(code);
        this._regChinesename(chinessname);
        this._regmobile(mobile)
    },
    //验证用户名
    _regUsername: function(obj){
        obj.focus(function(){
            $(this).next().empty();
            var text = "&nbsp;用户名非数字开头，<strong class='star'>5-10</strong>, 位字母，数字组成";
            $(this).next().append(text);
        });
        obj.blur(function(){
            if(!/^[A-Za-z](?![a-zA-Z]+$)[0-9A-Za-z]{4,12}$/.test(obj.val())){
                $(obj).next().empty();
                var text = "&nbsp;用户名非数字开头，<strong class='star'>5-10</strong>, 位字母，数字组成";
                $(obj).next().append(text);
            }else{
                $(obj).next().empty();
                var text = "<strong class='starok'>&nbsp;OK</strong>";
                $(obj).next().append(text);
            }
        });
    },
    //返回 Boolean
    regUsername_guuidvalue:function (obj) {
        if(!/^[A-Za-z](?![a-zA-Z]+$)[0-9A-Za-z]{4,12}$/.test(obj.val())){
            this.text = "&nbsp;用户名非数字开头，<strong class='star'>5-10</strong>, 位字母，数字组成";
            return this.ation = false;
        }else{
            return this.ation = true;
        }
    },
    //验证密码
    _regPass:function (obj) {
        // 密码验证
        obj.blur(function(){
            if(!/^[A-Za-z](?![a-zA-Z]+$)[0-9A-Za-z]{7,15}$/.test(obj.val())){
                $(obj).next().empty();
                var text = "&nbsp;密码非数字开头，<strong class='star'>8-15</strong>, 位字母，数字组成";
                $(obj).next().append(text);
            }else{
                $(obj).next().empty();
                var text = "<strong class='starok'>&nbsp;OK</strong>";
                $(obj).next().append(text);
            }
        });
        obj.focus(function(){
            $(this).next().empty();
            var text = "&nbsp;密码非数字开头，<strong class='star'>8-15</strong>, 位字母，数字组成";
            $(this).next().append(text);
        });
    },
    //返回 Boolean
    regPass_guuidvalue:function (obj) {
        if(!/^[A-Za-z](?![a-zA-Z]+$)[0-9A-Za-z]{7,15}$/.test(obj.val())){
            this.text = "&nbsp;密码非数字开头，<strong class='star'>8-15</strong>, 位字母，数字组成"
            return this.ation = false;
        }else{
            return this.ation = true;
        }
    },
    //验证确认密码
    _regQrpass:function (obj,pass) {
        obj.blur(function(){
            if(obj.val() === pass.val() && obj.val() != ""){
                $(this).next().empty();
                var text = "<strong class='starok'>&nbsp;OK</strong>";
                $(this).next().append(text);
            }else if(obj.val() == ''){
                $(this).next().empty();
                var text = "&nbsp;密码非数字开头，<strong class='star'>8-15</strong>, 位字母，数字组成";
                $(this).next().append(text);
            }else if(obj.val() != pass.val()){
                $(this).next().empty();
                var text = "&nbsp;<strong class='star'>密码不一致</strong>";
                $(this).next().append(text);
            }
        });
        obj.focus(function(){
            $(this).next().empty();
            var text = "&nbsp;密码非数字开头，<strong class='star'>8-15</strong>, 位字母，数字组成";
            $(this).next().append(text);
        })
    },
    //返回 Boolean
    regQrpass_guuidvalue:function (obj,pass){
        if(obj.val() === pass.val() && obj.val() != ""){
            return this.ation = true;
        }else if(obj.val() == ''){
            this.text = "&nbsp;确认密码非数字开头，<strong class='star'>8-15</strong>, 位字母，数字组成"
            return this.ation = false;
        }else if(obj.val() != pass.val()){
            this.text = "&nbsp;<strong class='star'>密码不一致</strong>"
            return this.ation = false;
        }
    },
    //验证验证码
    _regcode:function (obj) {
        obj.blur(function(){
            if(obj.val().length != 4){
                $(obj).next().empty();
                var text = "&nbsp;请输入<strong class='star'>验证码</strong>";
                $(obj).next().append(text);
            }else{
                $(obj).next().empty();
                var text = "<strong class='starok'>&nbsp;OK</strong>";
                $(obj).next().append(text);
            }
        });
        obj.focus(function(){
            $(this).next().empty();
            var text = "&nbsp;请输入<strong class='star'>验证码</strong>";
            $(this).next().append(text);
        })

    },
    //返回 Boolean
    regcode_guuidvalue:function (obj) {
        if(obj.val().length != 4){
            this.text = "&nbsp;<strong class='star'>请输入验证码</strong>"
            return this.ation = false;
        }else{
            return this.ation = true;
        }
    },
    //验证中文名字
    _regChinesename:function (obj) {
        obj.blur(function(){
            if(!/^[\u4e00-\u9fa5]{2,4}$/.test(obj.val())){
                $(this).next().empty()
                var text = "&nbsp;必须为<strong class='star'>2-4</strong>,位中文"
                $(this).next().append(text);
            }else{
                $(this).next().empty();
                var text = "<strong class='starok'>&nbsp;OK</strong>";
                $(this).next().append(text);
            }
        });
        obj.focus(function(){
            $(this).next().empty();
            var text = "&nbsp;必须为<strong class='star'>2-4</strong>,位中文";
            $(this).next().append(text);
        })
    },
    //返回 Boolean
    regChinesename_guuidvalue:function (obj) {
        if(!/^[\u4e00-\u9fa5]{2,4}$/.test(obj.val())){
            this.text = "&nbsp;必须为<strong class='star'>2-4</strong>,位中文"
            return this.ation = false;
        }else{
            return this.ation = true;
        }
    },
    //验证手机号
    _regmobile:function (obj) {
        obj.blur(function(){
            if(!/^1[3|4|5|7|8][0-9]{9}$/.test(obj.val())){
                $(this).next().empty()
                var text = "&nbsp;请输入真实的<strong class='star'>手机号</strong>码"
                $(this).next().append(text);
            }else{
                $(this).next().empty()
                var text = "<strong class='starok'>&nbsp;OK</strong>"
                $(this).next().append(text);
            }
        });
        obj.focus(function(){
            $(this).next().empty();
            var text = "&nbsp;请输入真实的<strong class='star'>手机号</strong>码";
            $(this).next().append(text);
        })
    },
    //返回 Boolean
    regmobile_guuidvalue:function (obj) {
        if(!/^1[3|4|5|7|8][0-9]{9}$/.test(obj.val())){
            this.text = "<strong class='star'>&nbsp;请输入真实的手机号码</strong>"
            return this.ation = false;
        }else{
            return this.ation = true;
        }
    },
    // 获取文本信息验证
    regtext:function (name,pass,Qrpass,code,Chinesname,Wpass,mobile,check) {
        this.name = $(name).val();
        this.pass = $(pass).val();
        this.Qrpass = $(Qrpass).val();
        this.code = $(code).val();
        this.mobile = $(mobile).val();
        this.regUsername_guuidvalue($(name));
        if(this.ation === false){
            Pubilc.changeImg('#checkNum_img1');
            $('.panel').show();
            $('.panel-con').show();
            $('.panel-text').empty();
            $('.panel-text').append(this.text);
            return;
        }
        this.regPass_guuidvalue($(pass));
        if(this.ation === false){
            Pubilc.changeImg('#checkNum_img1');
            $('.panel').show();
            $('.panel-con').show();
            $('.panel-text').empty();
            $('.panel-text').append(this.text);
            return;
        }
        this.regQrpass_guuidvalue($(Qrpass),$(pass));
        if(this.ation === false){
            Pubilc.changeImg('#checkNum_img1');
            $('.panel').show();
            $('.panel-con').show();
            $('.panel-text').empty();
            $('.panel-text').append(this.text);
            return;
        }
        this.regcode_guuidvalue($(code));
        if(this.ation === false){
            Pubilc.changeImg('#checkNum_img1');
            $('.panel').show();
            $('.panel-con').show();
            $('.panel-text').empty();
            $('.panel-text').append(this.text);
            return;
        }
        this.regChinesename_guuidvalue($(Chinesname))
        if(this.ation === false){
            Pubilc.changeImg('#checkNum_img1');
            $('.panel').show();
            $('.panel-con').show();
            $('.panel-text').empty();
            $('.panel-text').append(this.text);
            return;
        }
        if($.trim(Wpass).length != 6){
            Pubilc.changeImg('#checkNum_img1');
            $('.panel').show();
            $('.panel-con').show();
            $('.panel-text').empty();
            $('.panel-text').append("&nbsp;取款密码必须为<strong class='star'>6</strong>,数字");
            return;
        }
        if($(check).attr("checked") == undefined){
            Pubilc.changeImg('#checkNum_img1');
            $('.panel').show();
            $('.panel-con').show();
            $('.panel-text').empty();
            $('.panel-text').append("&nbsp;<strong class='star'>是否同意用户协议</strong>");
            return;
        }
        this.regmobile_guuidvalue($(mobile));
        if(this.ation === false){
            Pubilc.changeImg('#checkNum_img1');
            $('.panel').show();
            $('.panel-con').show();
            $('.panel-text').empty();
            $('.panel-text').append(this.text);
            return;
        }
        $('.xploading_bg').show();
        $('.xploading').show();
        this.data={userName: this.name,mobileNo: this.mobile,passWord:this.pass,repassWord:this.Qrpass,reguuid:"",imgcode:this.code,qkpwd:$.trim(Wpass),reqkpwd:Wpass,cagent:CAGENT};
        this.Indata ={tname:CAGENT+this.name,tpwd:this.pass,imgcode:this.code,savelogin:In.savelogin};
        this.regloginajax(JRG+"User/getToken",JRG+"User/register",this.data,JRG+"login.do",this.Indata,'../index.html',"#checkNum_img1");
    },
    // 请求并登录
    regloginajax:function (tokenUrl,regUrl,regData,loginUrl,InData,Url,image) {
        $.ajax({
            type:"get",
            url:tokenUrl,
            async:true,
            xhrFields:{withCredentials:true},
            success:function  (token){
                regData.reguuid =token.msg;
                $.ajax({
                    type: "POST",
                    url:regUrl,
                    dataType: "json",
                    data:regData,
                    xhrFields:{withCredentials:true},
                    success: function(reg) {
                        $('.xploading_bg').hide();
                        $('.xploading').hide();
                        var str = reg.msg;
                        switch(str) {
                            case '001':
                                Pubilc.changeImg('#checkNum_img1');
                                $('.panel').show();
                                $('.panel-con').show();
                                $('.panel-text').empty();
                                $('.panel-text').text('用户名不能为空');
                                break;
                            case  '002':
                                Pubilc.changeImg('#checkNum_img1');
                                $('.panel').show();
                                $('.panel-con').show();
                                $('.panel-text').empty();
                                $('.panel-text').text('用户名格式不正确');
                                break;
                            case '003':
                                Pubilc.changeImg('#checkNum_img1');
                                $('.panel').show();
                                $('.panel-con').show();
                                $('.panel-text').empty();
                                $('.panel-text').text('手机号不能为空');
                                break;
                            case '004':
                                Pubilc.changeImg('#checkNum_img1');
                                $('.panel').show();
                                $('.panel-con').show();
                                $('.panel-text').empty();
                                $('.panel-text').text('手机号不正确');
                                break;
                            case '005':
                                Pubilc.changeImg('#checkNum_img1');
                                $('.panel').show();
                                $('.panel-con').show();
                                $('.panel-text').empty();
                                $('.panel-text').text('密码不能为空');
                                break;
                            case '006':
                                Pubilc.changeImg('#checkNum_img1');
                                $('.panel').show();
                                $('.panel-con').show();
                                $('.panel-text').empty();
                                $('.panel-text').text('确认密码不能为空');
                                break;
                            case '007':
                                Pubilc.changeImg('#checkNum_img1');
                                $('.panel').show();
                                $('.panel-con').show();
                                $('.panel-text').empty();
                                $('.panel-text').text('两次密码不一致');
                                break;
                            case '008':
                                Pubilc.changeImg('#checkNum_img1');
                                $('.panel').show();
                                $('.panel-con').show();
                                $('.panel-text').empty();
                                $('.panel-text').text('密码格式不正确');
                                break;
                            case '009':
                                Pubilc.changeImg('#checkNum_img1');
                                $('.panel').show();
                                $('.panel-con').show();
                                $('.panel-text').empty();
                                $('.panel-text').text('账号已存在');
                                break;
                            case '010':
                                Pubilc.changeImg('#checkNum_img1');
                                $('.panel').show();
                                $('.panel-con').show();
                                $('.panel-text').empty();
                                $('.panel-text').text('reguuid为空');
                                break;
                            case '011':
                                Pubilc.changeImg('#checkNum_img1');
                                $('.panel').show();
                                $('.panel-con').show();
                                $('.panel-text').empty();
                                $('.panel-text').text('验证码不能为空');
                                break;
                            case '012':
                                Pubilc.changeImg('#checkNum_img1');
                                $('.panel').show();
                                $('.panel-con').show();
                                $('.panel-text').empty();
                                $('.panel-text').text('验证码错误');
                                break;
                            case '013':
                                Pubilc.changeImg('#checkNum_img1');
                                $('.panel').show();
                                $('.panel-con').show();
                                $('.panel-text').empty();
                                $('.panel-text').text('取款密码为空');
                                break;
                            case '014':
                                Pubilc.changeImg('#checkNum_img1');
                                $('.panel').show();
                                $('.panel-con').show();
                                $('.panel-text').empty();
                                $('.panel-text').text('确认取款密码为空');
                                break;
                            case '015':
                                Pubilc.changeImg('#checkNum_img1');
                                $('.panel').show();
                                $('.panel-con').show();
                                $('.panel-text').empty();
                                $('.panel-text').text('两次取款密码不一致');
                                break;
                            case '016':
                                $('.panel').show();
                                $('.panel-con').show();
                                $('.panel-text').empty();
                                $('.panel-text').text('取款密码格式不正确');
                                Pubilc.changeImg('#checkNum_img1');
                                break;
                            case '017':
                                $('.panel').show();
                                $('.panel-con').show();
                                $('.panel-text').empty();
                                $('.panel-text').text('取款密码不能与登录密码相同');
                                Pubilc.changeImg('#checkNum_img1');
                                break;
                            case 'success':
                                $('.panel').show();
                                $('.panel-con').show();
                                $('.panel-text').empty();
                                $('.panel-text').text('恭喜您，注册成功,');
                                $('.xploading_bg').show();
                                $('.xploading').show();
                                // var tname = cagent+dt.userName;
                                // var tpwd = dt.passWord;
                                // var code = dt.imgcode;
                                // var savelogin = 1;
                                // this.data={
                                //     tname:tname,
                                //     tpwd:tpwd,
                                //     imgcode:code,
                                //     savelogin:savelogin
                                // };
                                // (tokenUrl,regUrl,regData,loginUrl,InData,Url,image)
                                // this.Loginajax(JRG+"login.do",this.data,Url,'#checkNum_img');
                                // this.regloginajax(JRG+"User/getToken",JRG+"User/register",this.data,JRG+"login.do",this.Indata,'../index.html',"#checkNum_img1");
                                In.Loginajax(loginUrl,InData,Url,image);
                                // b.loginajax(jrg+"login.do",this.data);
                                break;
                            case 'error':
                                Pubilc.changeImg('#checkNum_img1');
                                $('.panel').show();
                                $('.panel-con').show();
                                $('.panel-text').empty();
                                $('.panel-text').text('网络异常');
                                break;
                        }
                    },
                    error: function(xhr, textStatus, errorThrown) {
                        Pubilc.changeImg('#checkNum_img1');
                        $('.panel').show();
                        $('.panel-con').show();
                        $('.panel-text').empty();
                        $('.panel-text').text('网络错误');
                    }
                });
            },
            error:function  () {
                Pubilc.changeImg('#checkNum_img1');
                $('.panel').show();
                $('.panel-con').show();
                $('.panel-text').empty();
                $('.panel-text').text('网络错误');
            }
        })
    },
    //请求注册
    reglogin:function () {
        this.Wpass = $("#pwd1").val()+$("#pwd2").val()+$("#pwd3").val()+$("#pwd4").val()+$("#pwd5").val()+$("#pwd6").val();
                        // 用户名     密码   确认密码   验证码     中文名     取款密码    手机号  确认注册
        this.regtext("#regusername",'#pass','#re_pass','#code','#Chinesname',this.Wpass,"#mobile","#check1");
    }
};
var Reg = new register();
Reg.verification($("#regusername"),$('#pass'),$('#re_pass'),$('#code'),$("#Chinesname"),$("#mobile"));



