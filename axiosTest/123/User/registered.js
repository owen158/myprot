'use strict';
(function ($,src) {
    app.checklogin();
    app.changeImg('#checkNum_img1');
    $('#register').on('click',function () {
        var rqkpass;
        rqkpass =$('#pwd1').val()+$('#pwd2').val()+$('#pwd3').val()+$('#pwd4').val()+$('#pwd5').val()+$('#pwd6').val();
        var Arr ={
            userName:$('.rname').val(),//用户名
            passWord:$('.rpass').val(),//密码
            repassWord:$('.rqrpass').val(),//确认密码
            imgcode:$('.rcode').val(),//验证码
            realName:$('.realname').val(),//真实姓名
            mobileNo:$('.rmobile').val(),//手机号
            reguuid:'',//token
            qkpwd:rqkpass,//取款密码
            reqkpwd:rqkpass,//确认取款密码
            cagent:cagent,//字段
            isMobile:1,//类型
            proxyname:geturl ()//
        };
        app.regtion(Arr,function (error) {
            if(error){
                mask(error);
                app.changeImg('#checkNum_img1');
                return;
            }
            if($('.rcheckBox').attr("checked") === undefined){
                mask('是否同意用户协议');
                app.changeImg('#checkNum_img1');
                return;
            }
            app.ajax(src+"User/getToken",{},function (token) {
                Arr.reguuid = token.msg;
                app.ajax(src+"User/register",Arr,function (data) {
                    console.log(data)
                    var arrtext = ['用户名不能为空', '用户名格式不正确', '手机号不能为空', '手机号不正确', '密码不能为空', '确认密码不能为空', '两次密码不一致', '密码格式不正确', '账号已存在', 'reguuid为空', '验证码不能为空', '验证码错误', '取款密码为空', '确认取款密码为空', '两次取款密码不一致', '取款密码格式不正确', '取款密码不能与登录密码相同', '恭喜您，注册成功,', '网络异常'];
                    if(data === '网络异常'){
                        return mask('网络异常');
                    }else{
                        var str = data.msg;
                        switch (str) {
                            case '001':
                                mask(arrtext[0]);
                                app.changeImg('#checkNum_img1');
                                break;
                            case  '002':
                                mask(arrtext[1]);
                                app.changeImg('#checkNum_img1');
                                break;
                            case '003':
                                mask(arrtext[2]);
                                app.changeImg('#checkNum_img1');
                                break;
                            case '004':
                                mask(arrtext[3]);
                                app.changeImg('#checkNum_img1');
                                break;
                            case '005':
                                mask(arrtext[4]);
                                app.changeImg('#checkNum_img1');
                                break;
                            case '006':
                                mask(arrtext[5]);
                                app.changeImg('#checkNum_img1');
                                break;
                            case '007':
                                mask(arrtext[6]);
                                app.changeImg('#checkNum_img1');
                                break;
                            case '008':
                                mask(arrtext[7]);
                                app.changeImg('#checkNum_img1');
                                break;
                            case '009':
                                mask(arrtext[8]);
                                app.changeImg('#checkNum_img1');
                                break;
                            case '010':
                                mask(arrtext[9]);
                                app.changeImg('#checkNum_img1');
                                break;
                            case '011':
                                mask(arrtext[10]);
                                app.changeImg('#checkNum_img1');
                                break;
                            case '012':
                                mask(arrtext[11]);
                                app.changeImg('#checkNum_img1');
                                break;
                            case '013':
                                mask(arrtext[12]);
                                app.changeImg('#checkNum_img1');
                                break;
                            case '014':
                                mask(arrtext[13]);
                                app.changeImg('#checkNum_img1');
                                break;
                            case '015':
                                mask(arrtext[14]);
                                app.changeImg('#checkNum_img1');
                                break;
                            case '016':
                                mask(arrtext[15]);
                                app.changeImg('#checkNum_img1');
                                break;
                            case '017':
                                mask(arrtext[16]);
                                app.changeImg('#checkNum_img1');
                                break;
                            case 'success':
                                alert('注册成功！')
                                window.location.href='index.html';
                                break;
                            case 'error':
                                mask(arrtext[18]);
                                app.changeImg('#checkNum_img1');
                                break;
                            case '域名不匹配':
                                mask('域名不匹配');
                                app.changeImg('#checkNum_img1');
                                break;
                            default:
                                mask(arrtext[18]);
                                app.changeImg('#checkNum_img1');
                        }
                    }
                })
            })
        })
    })
}(jQuery,src));