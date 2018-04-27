/**
 * Created by Administrator on 2017/6/12. bug
 */
import Vue from 'vue'
import stort from '../../router/store'
import $ from 'jquery'
function year(el) {
    if(el < 10){
        return ('0' + el);
    }else{
        return el;
    }
}
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
Vue.filter('currencyDisplay', {
    // model -> view
    // 在更新 `<input>` 元素之前格式化值
    read: function(val) {
        return '$'+val.toFixed(2)
    },
    // view -> model
    // 在写回数据之前格式化值
    write: function(val, oldVal) {
        var number = +val.replace(/[^\d.]/g, '')
        return isNaN(number) ? 0 : parseFloat(number.toFixed(2))
    }
})
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
                        document.getElementById('ImgCode').src=stort.state.userNew.jrg+'validateCode?timesp'+(new Date()).valueOf();
                        Element.innerHTML= '请输入4位验证码';
                        break;
                    default:
                        Element.innerHTML= '参数有误';
                }
            }else if(Value.slice(0,1) === 'r'){//注册
                switch(Value) {
                    case 'ruserName':
                        Element.innerHTML= '用户名非数字开头，须为5-10位字母或数字组成';
                        break;
                    case 'rpassWord':
                        Element.innerHTML= '密码非数字开头，须为6-12位字母或数字组成';
                        break;
                    case 'rrepassWord':
                        Element.innerHTML= '两次密码必须相同';
                        break;
                    case 'rrealName':
                        Element.innerHTML= '真实姓名必须与您的银行账户相同 2~4 位中文，否则不能出款！';
                        break;
                    case 'rmobileNo':
                        Element.innerHTML= '请输入真实的 手机号 码';
                        break;
                    case 'rqkpwd':
                        Element.innerHTML= '请输入4位数字资金密码';
                        break;
                    case 'rimgcode':
                        document.getElementById('ImgCode').src=stort.state.userNew.jrg+'validateCode?timesp'+(new Date()).valueOf();
                        Element.innerHTML= '请输入验证码';
                        break;
                    default:
                        Element.innerHTML= '参数有误';
                }
            }else if(Value === "imgcode"){
                document.getElementById('ImgCode').src=stort.state.userNew.jrg+'validateCode?timesp'+(new Date()).valueOf();
            }
        }
    }
});
export default{
    install(Vue,options){
        // Vue.prototype.$loginaction=function (Fata,callback) {//登录验证
        //     Fata.tname = Fata.tname || "";
        //     Fata.tpwd = Fata.tpwd || "";
        //     Fata.imgcode = Fata.imgcode || "";
        //     if(Fata.tname === ""){
        //         return callback('请输入用户名')
        //     }
        //     if(Fata.tpwd === ""){
        //         return callback('请输入用密码')
        //     }
        //     if(Fata.imgcode === ""){
        //         return callback('请输入验证码')
        //     }
        //     return callback();
        // };
        // Vue.prototype.$registeredaction = function (Fata,callback) {//注册验证
        //     Fata.userName = Fata.userName || "";
        //     Fata.passWord = Fata.passWord || "";
        //     Fata.repassWord = Fata.repassWord || "";
        //     Fata.realName = Fata.realName || "";
        //     Fata.mobileNo = Fata.mobileNo || "";
        //     Fata.qkpwd = Fata.qkpwd || "";
        //     Fata.imgcode = Fata.imgcode || "";
        //     if(!/^[A-Za-z](?![a-zA-Z]+$)[0-9A-Za-z]{4,9}$/.test(Fata.userName)){
        //         return callback('用户名非数字开头，5-10位字母，数字组成')
        //     }
        //     if(!/^[0-9A-Za-z]{6,12}$/.test(Fata.passWord)){
        //         return callback('密码须为,6～12位英文或数字，且符合a~z字元或0~9')
        //     }
        //     if(Fata.repassWord == "" || Fata.repassWord != Fata.passWord){
        //         return callback('确认密码有误，请重新输入')
        //     }
        //     if(!/^[\u4e00-\u9fa5]{2,4}$/.test(Fata.realName)){
        //         return callback('真实姓名必须与您的银行账户相同 2~4 位中文')
        //     }
        //     if(!/^1[3|4|5|7|8][0-9]{9}$/.test(Fata.mobileNo)){
        //         return callback('请输入真实的 手机号 码')
        //     }
        //     if(!/^[0-9]{4}$/.test(Fata.qkpwd)){
        //         return callback('请正确输入4位数字资金密码')
        //     }
        //     if(!/^[0-9]{4}$/.test(Fata.imgcode)){
        //         return callback('请正确输入验证码')
        //     }
        //     return callback();
        // };
        // Vue.prototype.$Capital = function (Fata,callback) {//注册卡验证
        //     Fata.cardUserName = Fata.cardUserName || "";
        //     Fata.cardNum = Fata.cardNum || "";
        //     Fata.bankCode = Fata.bankCode || "";
        //     Fata.password  = Fata.password  || "";
        //     if(!/^[\u4e00-\u9fa5]{2,4}$/.test(Fata.cardUserName)){
        //         Fata.cardUserName = "";
        //         return callback('真实姓名必须与您的银行账户相同 2~4 位中文')
        //     }
        //     if(!/^[0-9A-Za-z]{15,19}$/.test(Fata.cardNum)){
        //         Fata.cardNum = ""
        //         return callback('请正确填写银行卡，卡号长度15~19位')
        //     }
        //     if(Fata.bankCode === ""){
        //         return callback('请选择银行卡类型')
        //     }
        //     if(!/^[0-9]{4,6}$/.test(Fata.password)){
        //         Fata.password = "";
        //         return callback('请输入资金密码')
        //     }
        //     return callback();
        // }
        // Vue.prototype.$changePassword = function (Fata,callback) {
        //     Fata.password = Fata.password || "";
        //     Fata.npassword =Fata.npassword || "";
        //     Fata.renpassword = Fata.renpassword || "";
        //     if(Fata.password ===""){
        //         return callback('请输入旧密码');
        //     }
        //     if(!/^[0-9A-Za-z]{6,12}$/.test(Fata.npassword) || Fata.npassword === Fata.password){
        //         return callback('新密码须为,6～12位英文或数字，且符合a~z字元或0~9')
        //     }
        //     if(Fata.renpassword === "" || Fata.renpassword != Fata.npassword){
        //         return callback('确认密码有误')
        //     }
        //     return callback();
        // }
        // Vue.prototype.$changeQkpwd = function (Fata,callback) {
        //     Fata.password =Fata.password || "";
        //     Fata.npassword = Fata.npassword || "";
        //     Fata.renpassword = Fata.renpassword || "";
        //     if(Fata.password === ""){
        //         Fata.password = "";
        //         return callback('请输入资金密码')
        //     }
        //     if(!/^[0-9]{4}$/.test(Fata.npassword) || Fata.npassword === Fata.password){
        //         Fata.npassword = "";
        //         return callback('请输入新资金密码,不能与旧密码相同')
        //     }
        //     if(Fata.renpassword === "" || Fata.renpassword != Fata.npassword){
        //         Fata.renpassword = "";
        //         return callback('请确认资金密码')
        //     }
        //     return callback();
        // }
        // Vue.prototype.$BankPayAtion = function (Fata,callback) {
        //     Fata.name = Fata.name || "";
        //     Fata.account = Fata.account || "";
        //     Fata.amount = Fata.amount || "";
        //     Fata.type = Fata.type || "";
        //     Fata.caijin = Fata.caijin || "";
        //     if(!/^[\u4e00-\u9fa5]{2,4}$/.test(Fata.name)){
        //         Fata.name = "";
        //         return callback('真实姓名必须与您的银行账户相同 2~4 位中文')
        //     }
        //     if(!/^[0-9]{4,19}$/.test(Fata.account)){
        //         Fata.account = "";
        //         return callback('请正确填写银行卡')
        //     }
        //     Fata.amount = this.$digital(Fata.amount);
        //     if(Fata.amount === false){
        //         Fata.amount = "";
        //         return callback('请输入存款金额')
        //     }
        //     if(Fata.amount　== 0 || Fata.amount < 0){
        //         Fata.amount = "";
        //         return callback('请输入存款金额，不能小于0')
        //     }
        //     if(Fata.type === ""){
        //         Fata.type = "";
        //         return callback('请选择存款方式');
        //     }
        //     return callback();
        // }
        Vue.prototype.$datatboy=function (time) {
            let tody = new Date();
            let day = tody.getTime()- parseFloat(time) * 60 * 60 * 24;
            let t =  new Date(day);
            return t.getFullYear()+'-'+(year(t.getMonth()+1)) +'-'+ year(t.getDate())
        }
        Vue.prototype.$digital= function (val) {//验证数字类型
            if(isNaN(parseFloat(val))){
                return false;
            }else{
                return parseFloat(val)
            }
        }
    }
}
