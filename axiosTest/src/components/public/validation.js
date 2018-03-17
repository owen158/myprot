/**
 * Created by Administrator on 2017/6/12.
 */
import Vue from 'vue'
import $ from 'jquery'
var Host = document.location.host;
var strs=document.location.protocol;
var xpj_src = strs+'//'+Host+"/XPJ/";
// var xpj_src = 'http://192.168.0.228:8080/XPJ/'
Vue.directive('focus', {
    // 当绑定元素插入到 DOM 中。
    inserted: function (el) {
        // 聚焦元素
        el.onfocus=function () {
            let Value = this.attributes["name"].value;
            let Element = document.getElementsByClassName('Promptbox')[0];
            if( Value.slice(0,1)=== 'l'){//登录
                switch(Value) {
                    case 'ltname':
                        Element.innerHTML= '用户名非数字开头，5-10位字母';
                        break;
                    case 'ltpwd':
                        Element.innerHTML= '密码非数字开头，6-12, 位字母，数字组成';
                        break;
                    case 'limgcode':
                        document.getElementById('ImgCode').src=xpj_src+'validateCode?timesp'+(new Date()).valueOf();
                        Element.innerHTML= '请输入4位验证码';
                        break;
                    default:
                        Element.innerHTML= '参数有误';
                }
            }else if(Value.slice(0,1) === 'r'){//注册
                switch(Value) {
                    case 'ruserName':
                        this.parentNode.lastChild.setAttribute("class", "");
                        Element.innerHTML= '用户名非数字开头，5-10位字母，数字组成';
                        break;
                    case 'rpassWord':
                        this.parentNode.lastChild.setAttribute("class", "");
                        Element.innerHTML= '密码非数字开头，6-12, 位字母，数字组成';
                        break;
                    case 'rrepassWord':
                        this.parentNode.lastChild.setAttribute("class", "");
                        Element.innerHTML= '密码非数字开头，6-12, 位字母，数字组成';
                        break;
                    case 'rrealName':
                        this.parentNode.lastChild.setAttribute("class", "");
                        Element.innerHTML= '真实姓名必须与您的银行账户相同 2~4 位中文';
                        break;
                    case 'rmobileNo':
                        this.parentNode.lastChild.setAttribute("class", "");
                        Element.innerHTML= '请输入真实的 手机号 码';
                        break;
                    case 'rqkpwd':
                        this.parentNode.lastChild.setAttribute("class", "");
                        Element.innerHTML= '请输入4位数字资金密码';
                        break;
                    case 'rimgcode':
                        this.parentNode.lastChild.setAttribute("class", "");
                        document.getElementById('ImgCode').src=xpj_src+'validateCode?timesp'+(new Date()).valueOf();
                        Element.innerHTML= '请输入验证码';
                        break;
                    default:
                        this.parentNode.lastChild.setAttribute("class", "");
                        Element.innerHTML= '参数有误';
                }
            }
        }
    }
});
Vue.directive('num', {
    // 当绑定元素插入到 DOM 中。
    inserted: function (el) {
        // 聚焦元素
        $(el).keyup(function () {
            var reg = $(el).val().match(/^[0-9]*$/);
            var txt = '';
            if (reg != null) {
                txt = reg[0];
            }
            $(el).val(txt);
        }).change(function () {
            $(el).keypress();
            var v = $(el).val();
            if (/\.$/.test(v)) {
                $(el).val(v.substr(0, v.length - 1));
            }
        });
    }
})
Vue.directive('numd', {
    // 当绑定元素插入到 DOM 中。
    inserted: function (t) {
        // 聚焦元素
        $(t).keyup(function () {
            var reg = $(t).val().match(/\d+\.?\d{0,2}/);
            var txt = '';
            if (reg != null) {
                txt = reg[0];
            }
            $(t).val(txt);
        }).change(function () {
            $(t).keypress();
            var v = $(t).val();
            if (/\.$/.test(v)) {
                $(t).val(v.substr(0, v.length - 1));
            }
        });
    }
})
function BuurAtion(t,Ele) {
    if(!t.test(Ele.value)){
        Ele.parentNode.lastChild.setAttribute("class", "prompt iconfont icon-cuo");
    }else{
        Ele.parentNode.lastChild.setAttribute("class", "prompt iconfont icon-dui")
    }
}
Vue.directive('Blur', {
    // 当绑定元素插入到 DOM 中。
    inserted: function (el) {
        // 聚焦元素
        el.onblur=function () {
            let Value = this.attributes["name"].value;
            let Element = document.getElementsByClassName('Promptbox')[0];
            if( Value.slice(0,1)=== 'l'){//登录
                switch(Value) {
                    case 'ltname':
                        Element.innerHTML= '用户名非数字开头，5-10位字母';
                        break;
                    case 'ltpwd':
                        Element.innerHTML= '密码非数字开头，6-12, 位字母，数字组成';
                        break;
                    case 'limgcode':
                        document.getElementById('ImgCode').src=xpj_src+'validateCode?timesp'+(new Date()).valueOf();
                        Element.innerHTML= '请输入4位验证码';
                        break;
                    default:
                        Element.innerHTML= '参数有误';
                }
            }else if(Value.slice(0,1) === 'r'){//注册
                switch(Value) {
                    case 'ruserName':
                        BuurAtion(/^[A-Za-z](?![a-zA-Z]+$)[0-9A-Za-z]{4,9}$/ ,this);
                        break;
                    case 'rpassWord':
                        BuurAtion(/^[0-9A-Za-z]{6,12}$/ ,this);
                        break;
                    case 'rrepassWord':
                        if(this.value === "" || this.value !== this.parentNode.previousSibling.previousSibling.firstChild.value){
                            this.parentNode.lastChild.setAttribute("class", "prompt iconfont icon-cuo");
                        }else{
                            this.parentNode.lastChild.setAttribute("class", "prompt iconfont icon-dui")
                        }
                        break;
                    case 'rrealName':
                        BuurAtion(/^[\u4e00-\u9fa5]{2,4}$/ ,this);
                        break;
                    case 'rmobileNo':
                        BuurAtion(/^1[3|4|5|7|8][0-9]{9}$/ ,this);
                        break;
                    case 'rqkpwd':
                        BuurAtion(/^[0-9]{4}$/ ,this);
                        break;
                    case 'rimgcode':
                        BuurAtion(/^[0-9]{4}$/ ,this);
                        break;
                    default:
                        Element.innerHTML= '参数有误';
                }
            }
        }
    }
});

export default{
    install(Vue,options){
        Vue.prototype.$registeredaction = function (Fata,callback) {//注册验证
            Fata.userName = Fata.userName || "";
            Fata.passWord = Fata.passWord || "";
            Fata.repassWord = Fata.repassWord || "";
            Fata.realName = Fata.realName || "";
            Fata.mobileNo = Fata.mobileNo || "";
            Fata.qkpwd = Fata.qkpwd || "";
            Fata.imgcode = Fata.imgcode || "";
            if(!/^[A-Za-z](?![a-zA-Z]+$)[0-9A-Za-z]{4,9}$/.test(Fata.userName)){
                return callback('用户名非数字开头，5-10位字母，数字组成')
            }
            if(!/^[0-9A-Za-z]{6,12}$/.test(Fata.passWord)){
                return callback('密码非数字开头，6-12, 位字母，数字组成')
            }
            if(Fata.repassWord == "" || Fata.repassWord != Fata.passWord){
                return callback('确认密码有误，请重新输入')
            }
            if(!/^[\u4e00-\u9fa5]{2,4}$/.test(Fata.realName)){
                return callback('真实姓名必须与您的银行账户相同 2~4 位中文')
            }
            if(!/^1[3|4|5|7|8][0-9]{9}$/.test(Fata.mobileNo)){
                return callback('请输入真实的 手机号 码')
            }
            if(!/^[0-9]{4}$/.test(Fata.qkpwd)){
                return callback('请正确输入4位数字资金密码')
            }
            if(!/^[0-9]{4}$/.test(Fata.imgcode)){
                return callback('请正确输入验证码')
            }
            return callback();
        };
        Vue.prototype.$loginaction=function (Fata,callback) {//登录验证
            Fata.tname = Fata.tname || "";
            Fata.tpwd = Fata.tpwd || "";
            Fata.imgcode = Fata.imgcode || "";
            if(Fata.tname === ""){
                return callback('请输入用户名')
            }
            if(Fata.tpwd === ""){
                return callback('请输入用密码')
            }
            if(Fata.imgcode === ""){
                return callback('请输入验证码')
            }
            return callback();
        }
        Vue.prototype.$digital= function (val) {//验证数字类型
            if(isNaN(parseFloat(val))){
                return false;
            }else{
                return val
            }
        }
    }
}
