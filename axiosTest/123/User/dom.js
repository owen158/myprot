/**
 * Created by Administrator on 2017/8/11.
 */
(function ($,obj) {
    obj.mask=function () {//遮罩层
      $('body').append('<div class="mask"></div>')
    };
    obj.systemHint=function (text) {//系统提示框
        obj.mask();
        $('body').append('<div class="mask-con maskWrapper"><div class="wrapper"><div class="Notice">系统提示</div><div class="mask-text">'+text+'</div><div class="mask－onfirm"><span onclick="app.functionName('+"'.mask'"+','+"'.maskWrapper'"+')">确定</span></div></div></div>')
    };
    obj.pageWait=function () {//Loading...
        obj.mask();
        $('body').append('<div class="maskloading"><img src="/images/Refresh.gif" />Loading... </div>')
    };
    obj.islogin=function (success,userName) {//登录框
        if(success === 'success'){
            return '<div class="LoginOut">用户名:<span class="UserName">'+userName.slice(3)+'</span>可用余额:<span class="UserMoney">456465</span><a href="/User/personal/personal_home.html">会员中心</a><a href="">提款</a><a href="">存款</a><a href="">额度转换</a><a href="javascript:void(0)" onclick="app.drop()">退出</a></div>';
        }else{
            return '<div class="LoginIn"><div class="item itemName"><input type="text" class="lname" placeholder="账户名"></div><div class="item itemPass"><input type="password" class="lpass" placeholder="密码"></div> <div class="item itemCode"><input type="text" class="lcode" placeholder="验证码"><img onclick="app.changeImg()" id="Imgcode" src="" alt=""></div><div class="main" id="loginIn">登录</div> <div class="main"><a href="registered.html">注册</a></div></div>';
        }
    };
}(jQuery,window.dom={}));
