/**
 * Created by Administrator on 2017/8/10.
 */
'use strict';
var src = document.location.protocol+'//'+document.location.host+"/XPJ/";
var cagent = 'BL1';
function geturl () {
    var url = document.location.toString();
    if (url.indexOf('?')!=-1) {
        var number1 = url.indexOf('?');
        var url2 = url.slice(number1);
        if (url2.indexOf('p')!=-1) {
            var mumber2 = url2.indexOf('p');
            var urlstring = url2.slice(mumber2+2);
            return urlstring;
        }else{
            return '';
        }
    }else{
        return '';
    }
}
(function ($,obj) {
    obj.token='';
    obj.functionName=function (mask,wrapper) {//删除遮罩层
        $(mask).remove();
        $(wrapper).remove();
    };
    obj.changeImg = function () {//刷新验证码
        $('#Imgcode').attr("src",src+'validateCode?timesp'+(new Date()).valueOf());
    };
    obj.logintion=function (Fata,callback) {//登录验证
        Fata = Fata || {};
        Fata.tname = Fata.tname || "";
        Fata.tpwd = Fata.tpwd || "";
        Fata.imgcode = Fata.imgcode || "";
        if(!/^[A-Za-z](?![a-zA-Z]+$)[0-9A-Za-z]{4,9}$/.test(Fata.tname)){
            app.changeImg();
            return callback('用户名非数字开头，5-10位字母，数字组成');
        }
        if(!/^[A-Za-z](?![a-zA-Z]+$)[0-9A-Za-z]{7,14}$/.test(Fata.tpwd)){
            app.changeImg();
            return callback('密码非数字开头，8-15, 位字母，数字组成');
        }
        if(!/^[0-9]{4}$/.test(Fata.imgcode)){
            app.changeImg();
            return callback('验证码有误，请重新输入');
        }
        return callback();
    };
    obj.regtion=function (Fata,callback) {//注册验证码
        Fata = Fata || {};
        Fata.userName = Fata.userName || "";
        Fata.passWord = Fata.passWord || "";
        Fata.repassWord = Fata.repassWord || "";
        Fata.imgcode = Fata.imgcode || "";
        Fata.realName = Fata.realName || "";
        Fata.reqkpwd = Fata.reqkpwd || "";
        Fata.mobileNo = Fata.mobileNo || "";
        if(!/^[A-Za-z](?![a-zA-Z]+$)[0-9A-Za-z]{4,9}$/.test(Fata.userName)){
            return callback('用户名非数字开头，5-10位字母，数字组成');
        }
        if(!/^[A-Za-z](?![a-zA-Z]+$)[0-9A-Za-z]{7,14}$/.test(Fata.passWord)){
            return callback('密码非数字开头，8-15, 位字母，数字组成');
        }
        if(Fata.repassWord != Fata.passWord){
            return callback('确认密码有误');
        }
        if(!/^[0-9]{4}$/.test(Fata.imgcode)){
            return callback('验证码有误，请重新输入');
        }
        if(!/^[\u4e00-\u9fa5]{2,4}$/.test(Fata.realName)){
            return callback('真实姓名必须为2-4位中文');
        }
        if(!/^[0-9]{6}$/.test(Fata.reqkpwd)){
            return callback('资金密码必须6位数字');
        }
        if(!/^1[3|4|5|7|8][0-9]{9}$/.test(Fata.mobileNo)){
            return callback('请输入真实的手机号码 ');
        }
        return callback();
    };
    obj.ajax = function (src,Fata,callback) {//ajax请求
        $.ajax({
            type:"post",
            url:src,
            data:Fata,
            timeout : 10000,
            cache:false,
            success:function (data) {
                callback(data)
            },
            error:function (xhr, textStatus, errorThrown) {
                callback('网络异常')
            }
        })
    };
    obj.checklogin = function (Num,jrg,callback) {//检查页面
        this.ajax(src+"checklogin.do",{},function (data) {
            if(Num === '1'){
                callback(data);
            }else if(Num === "2"){
                if(data.msg == 'faild'){
                    window.location.href='/index.html';
                }else if(data.msg == 'outlogin'){
                    window.location.href='/index.html';
                }else if(data.msg == 'success'){
                    callback(data.userkey)
                }else if(data === '网络异常'){
                    window.location.href='/index.html';
                }
            }
        });
    };
    obj.LoginIn = function () {//登录
        $('#loginIn').on('click',function () {
            var Arr ={tname:$('.lname').val(),tpwd:$('.lpass').val(),savelogin:1,imgcode:$('.lcode').val()};
            obj.logintion(Arr,function (error) {
                if(error){
                    dom.systemHint(error);
                    return;
                }
                Arr.tname = cagent + Arr.tname;
                dom.pageWait();
                obj.ajax(src+"login.do",Arr,function (data) {
                    if(data.status == 'ok'){
                        obj.functionName('.mask','.maskloading');
                        window.location.href = document.location.pathname
                    }else if(data.status == "faild"){
                        obj.functionName('.mask','.maskloading');
                        dom.systemHint(data.errmsg);
                    }else if(data === '网路异常'){
                        obj.functionName('.mask','.maskloading');
                        dom.systemHint('网路异常');
                    }
                })
            })
        })
    };
    obj.drop = function () {//退出请求
        dom.pageWait();//打开loading
        obj.ajax(src+"logout.do",{},function () {
            obj.functionName('.mask','.maskloading');
            window.location.href=document.location.pathname
        });
    };
    obj.loadgame =function (type,id,model) {//进入游戏
        var Fata={gameType:type,gameID:id,model:model};
        var newTab=window.open('',Fata.gameType);
        var doc =  newTab.document;
        doc.write('<!DOCTYPE html><html><head>');
        doc.write('<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />');
        doc.write('<link rel="stylesheet" type="text/css" href="style.css" />');
        // doc.write('<script type="text/javascript" src="one.js"><\/script>');
        // doc.write('<script type="text/javascript" src="two.js"></scr' + 'ipt>');
        doc.write('</head><body>');
        doc.write('<div id="somediv" style=" width:240px;height:40px;background:#fff;overflow:hidden;margin:0px auto;position:fixed; left:41%; top:21%;z-index:151;">' + '游戏正在加载中,请勿重复点击.....' + '</div>');
        doc.write('</body></html>');
        // newTab.document.write='加载中、请稍后';
        dom.pageWait();//打开loading
        app.checklogin('1',src,function (dataArr) {
            if(dataArr.msg == 'faild'){
                newTab.close();
                app.functionName('.mask','.maskloading');
                dom.systemHint('请先登录！')
            }else if(dataArr.msg == 'outlogin'){
                newTab.close();
                app.functionName('.mask','.maskloading');
                dom.systemHint('请先登录！')
            }else if(dataArr.msg == 'success'){
                app.ajax(src+'User/forwardGame',Fata,function (data) {
                    if(data.msg == "网络异常"){
                        newTab.close();
                        app.functionName('.mask','.maskloading');
                        dom.systemHint('维护中')
                    }else if(data.msg == "error"){
                        newTab.close();
                        app.functionName('.mask','.maskloading');
                        dom.systemHint('维护中')
                    }else if(data.msg =='process'){
                        newTab.close();
                        app.functionName('.mask','.maskloading');
                        dom.systemHint('维护中')
                    }else if(data.msg != "error"){
                        app.functionName('.mask','.maskloading');
                        newTab.location.href = data.msg;
                    }
                });
            }else if(dataArr === '网络异常'){
                newTab.close();
                app.functionName('.mask','.maskloading');
                dom.systemHint('网络异常');
            }
        });
    };
}(jQuery,window.app={}));