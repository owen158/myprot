/**
 * Created by Administrator on 2017/10/28.
 */
import store from '@/router/store'
import { Loading } from 'element-ui';
import { Message } from 'element-ui';


import $ from "jquery"

// 192.168.0.61:319
/**
 * 代理号
 */
let cagent =document.location.host.slice(0,7)  === "192.168" ? 'YHH' : "YHH";

/**
 * API 接口
 */
let databases = document.location.host.slice(0,7) ===  "192.168" ? 'XPJ' : cagent;
let bug ={
    cagent:cagent,
    appsrc:'https://www.txw-app.com/yhh.html',//app 链接地址
    username:/^[A-Za-z](?![a-zA-Z]+$)[0-9A-Za-z]{4,9}$/,//用户名
    pass:/^[0-9A-Za-z]{6,12}$/,//密码
    realName:/^[\u4e00-\u9fa5]{2,4}$/,//真实姓名
    mobile:/^1[3|4|5|7|8][0-9]{9}$/,//手机号
    code:/^[0-9]{4}$/,//验证码
    qkpwd:/^[0-9]{4}$/,//取款密码
    email:/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,
    card:/^[0-9A-Za-z]{15,19}$/,//卡号
    cardNum:/^[0-9]{4,19}$/,
    xpj_src:document.location.protocol+'//'+document.location.host+"/"+databases+"/",
    pc:document.location.protocol+'//'+document.location.hostname.slice(2)+"?PC=true",
    ajax:function(objs,src,callback) {//checklogin 验证
        bug.ReQuest.call(this,{},store.state.userNew.jrg+'checklogin.do',function (obj) {
            if(obj.msg == "faild"){
                window.location.href = document.location.protocol+'//'+document.location.host+"/Login"
            }else if(obj.msg == "islogin"){
                window.location.href = document.location.protocol+'//'+document.location.host+"/Login"
            }else if(obj.msg == "success"){
                bug.ReQuest.call(this,objs,src,function (data) {
                    callback(data);
                })
            }
        })
    },
    ReQuest:function (objs,src,callback) {//不做checklogin 验证
        $.ajax({
            type:"post",
            data:objs,
            // timeout : 10000,
            url:src,
            async:true,
            cache:false,
            success:function (data) {
                callback(data);
            },
            error:function (xhr,textStatus) {
                if(textStatus=='timeout'){
                    bug.mask(false);
                    Message.closeAll();
                    // Message.error({
                    //     showClose: true,
                    //     message: '服务器响应超时，请稍后重试',
                    // })
                }else{
                    bug.mask(false);
                    Message.closeAll();
                    // Message.error({
                    //     showClose: true,
                    //     message: '服务器响应超时',
                    // })
                }
            }
        })
    },
    franttime:function(time) {
        var arr=['星期天','星期一','星期二','星期三','星期四','星期五','星期六'];
        var date,Y ,M,D,h,m,s, Day;
        date = new Date(time);
        Y = date.getFullYear() + '-';
        Day=arr[Number(date.getDay())] + "+";
        M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        D = date.getDate()<10 ? '0'+date.getDate() + ' ' : date.getDate() + ' ';
        h = (date.getHours()<10? '0'+ date.getHours():date.getHours())+ ':';
        m = (date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()) + ':';
        s = (date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds());
        var fommat_time =Day + Y + M + D + h + m + s;
        return fommat_time;
    },
    datatboy:function(time) {
        let tody = new Date();
        let day = tody.getTime()- parseFloat(time) * 60 * 60 * 24;
        let t =  new Date(day);
        return t.getFullYear()+'-'+(this.year(t.getMonth()+1)) +'-'+ this.year(t.getDate())
    },
    year:function(el) {
        if(el < 10){
            return ('0' + el);
        }else{
            return el;
        }
    },
    registeration:function (Fata,callback) {//注册验证
        Fata.userName = Fata.userName || "";
        Fata.passWord = Fata.passWord || "";
        Fata.repassWord = Fata.repassWord || "";
        Fata.realName = Fata.realName || "";
        Fata.mobileNo = Fata.mobileNo || "";
        Fata.qkpwd = Fata.qkpwd || "";
        Fata.imgcode = Fata.imgcode || "";
        Fata.remark = Fata.remark || "";
        if(!bug.username.test(Fata.userName)){
            return callback('用户名非数字开头，5-10位字母，数字组成')
        }
        if(!bug.pass.test(Fata.passWord)){
            return callback('密码须为,6～12位英文或数字，且符合a~z字元或0~9')
        }
        if(Fata.remark === ""){
            return callback('请输入微信号')
        }
        if(!bug.mobile.test(Fata.mobileNo)){
            return callback('请输入真实的 手机号 码')
        }
        if(!bug.code.test(Fata.imgcode)){
            return callback('请正确输入验证码')
        }
        return callback();
    },
    logination:function (Fata,callback) {//登录验证
        Fata.tname = Fata.tname || "";
        Fata.tpwd = Fata.tpwd || "";
        // Fata.imgcode = Fata.imgcode || "";
        if(Fata.tname === ""){
            return callback('请输入用户名')
        }
        if(Fata.tpwd === ""){
            return callback('请输入用密码')
        }
        // if(Fata.imgcode === ""){
        //     return callback('请输入验证码')
        // }
        return callback();
    },
    Capitalation:function (Fata,callback) {//添加银行卡验证
        Fata.cardUserName = Fata.cardUserName || "";
        Fata.cardNum = Fata.cardNum || "";
        Fata.bankCode = Fata.bankCode || "";
        Fata.cardAddress = Fata.cardAddress || "";
        Fata.password  = Fata.password  || "";
        if(!bug.realName.test(Fata.cardUserName)){
            Fata.cardUserName = "";
            return callback('真实姓名必须与您的银行账户相同 2~4 位中文')
        }
        if(!bug.card.test(Fata.cardNum)){
            Fata.cardNum = "";
            return callback('请正确填写银行卡，卡号长度15~19位')
        }
        if(Fata.bankCode === ""){
            return callback('请选择银行卡类型')
        }
        if(Fata.cardAddress === ""){
            return callback('请填写开户行地址')
        }
        if(!bug.qkpwd.test(Fata.password)){
            Fata.password = "";
            return callback('请输入资金密码')
        }
        return callback();
    },
    changePasswordation:function (Fata,callback) {//修改登录密码
        Fata.password = Fata.password || "";
        Fata.npassword =Fata.npassword || "";
        Fata.renpassword = Fata.renpassword || "";
        if(Fata.password ===""){
            return callback('请输入原密码');
        }
        if(!bug.pass.test(Fata.npassword) || Fata.npassword === Fata.password){
            Fata.npassword='';
            return callback('不能与旧密码相同，请重新输入')
        }
        if(Fata.renpassword === "" || Fata.renpassword != Fata.npassword){
            Fata.renpassword='';
            return callback('确认密码有误')
        }
        return callback();
    },
    changeQkpwdation: function (Fata,callback) {//修改取款密码
        Fata.password =Fata.password || "";
        Fata.npassword = Fata.npassword || "";
        Fata.renpassword = Fata.renpassword || "";
        if(store.state.userNew.whether === false){
            if(Fata.password === ""){
                Fata.password = "";
                return callback('请输入原密码')
            }
            if(!bug.qkpwd.test(Fata.npassword) || Fata.npassword === Fata.password){
                Fata.npassword = "";
                return callback('请输入新提款密码,不能与旧密码相同')
            }
        }else if(store.state.userNew.whether === true){
            if(!bug.qkpwd.test(Fata.npassword)){
                Fata.npassword = "";
                return callback('请输入新提款密码')
            }
        }
        if(Fata.renpassword === "" || Fata.renpassword != Fata.npassword){
            Fata.renpassword = "";
            return callback('请确认提款密码')
        }
        return callback();
    },
    Amount:function (sum,callback) {
        var amount = sum;
        if(amount!= null && amount != "" &&amount!="0"){
            var exp = /^(([1-9]\d*)|\d)(\.\d{1,2})?$/;
            if(!exp.test(amount)){
            return callback('请输入存款金额');
            }
        }else{
            return callback('请输入存款金额');
        }
        return callback()
    },
    BankPayAtion: function (Fata,callback) {//填写存款信息
        Fata.name = Fata.name || "";
        Fata.account = Fata.account || "";
        Fata.amount = Fata.amount || "";
        Fata.type = Fata.type || "";
        Fata.caijin = Fata.caijin || "";
        if(!bug.realName.test(Fata.name)){
            Fata.name = "";
            return callback('真实姓名必须与您的银行账户相同 2~4 位中文')
        }
        if(!bug.cardNum.test(Fata.account)){
            Fata.account = "";
            return callback('请正确填写银行卡')
        }

        // 单笔限额(元) -
        var amount = Fata.amount;
        if(amount!= null && amount != "" &&amount!="0"){
            var exp = /^(([1-9]\d*)|\d)(\.\d{1,2})?$/;
            if(!exp.test(amount)){
                return callback('请输入存款金额');
            }
        }else{
            return callback('请输入存款金额');
        }
        if(Number(Fata.amount) < 100 || Number(Fata.amount) >2000000){
            Fata.amount = "";
            return callback('请输入存款金额，100 - 2000000')
        }
        if(Fata.type === ""){
            Fata.type = "";
            return callback('请选择存款方式');
        }
        return callback();
    },
    modifyation:function (obj,callback) {//修改资料
        obj.userName = obj.userName || "";
        obj.mobile = obj.mobile || "";
        obj.email = obj.email || "";
        if(!bug.realName.test(obj.userName)){
            obj.userName = "";
            return callback('姓名必须 2~4 位中文')
        }
        if(obj.userName === "默认"){
            obj.userName = "";
            return callback("‘默认’用户名已被占用")
        }
        if(!bug.mobile.test(obj.mobile)){
            obj.mobile = "";
            return callback('格式有误，请输入有效手机号')
        }
        if(obj.mobile === "13800000000"){
            obj.mobile = "";
            return callback('‘13800000000’手机号已被占用')
        }
        if(!bug.email.test(obj.email)){
            obj.email = "";
            return callback('邮箱格式有误，请重新输入')
        }
        if(obj.email === store.state.userNew.data.email && obj.userName === store.state.userNew.data.realname && obj.mobile === store.state.userNew.data.mobile){
            obj.mobile = "";
            obj.userName = "";
            obj.email = "";
            return callback('与旧资料重复。')
        }
        return callback();
    },
    Orderation:function (obj,prov,callback) {//生成订单信息
        obj.deliverName = obj.deliverName || "";//姓名
        obj.deliverPhone = obj.deliverPhone || "";// 手机号
        obj.deliverAddress = obj.deliverAddress || "";// 收货地址
        obj.deliverRmk = obj.deliverRmk || "";// 备注
        prov.province =  prov.province || "";//省
        prov.city = prov.city || "";// 市
        if(prov.province === ""){
            return callback('请选择省份')
        }
        if(prov.city === ""){
            return callback('请选择市')
        }
        if(prov.Address === ""){
            return callback('请填写配送详细地址')
        }
        obj.deliverAddress = obj.deliverAddress +','+  prov.Address;
        if(!bug.realName.test(obj.deliverName)){
            obj.deliverName = "";
            return callback('真实姓名必须 2~4 位中文')
        }
        if(!bug.mobile.test(obj.deliverPhone)){
            obj.deliverPhone = "";
            return callback('格式有误，请输入有效手机号')
        }
        return callback();
    },
    mask:function(Boo) {
        var loadingInstance=null;
        var option ={
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        }
        loadingInstance =  Loading.service(option);
        if(Boo===false){
            setTimeout(function () {
                loadingInstance.close();
            },100)
        }
    }
};
export default bug;