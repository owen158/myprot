/**
 * Created by Administrator on 2017/10/28.
 */
import { Loading } from 'element-ui';
import { Message } from 'element-ui';
/**
 * 内网地址 192.168.0.61:393
 */

/**
 * cagent 代理号
 * 内网 BL1
 * 外网  :（TXC）
 */

let cagent =document.location.host.slice(0,7)  === "192.168" ? 'BL1' : 'TXC';

/**
 * 内网API XPJ
 * 外网API 使用平台代理号
 * @type {string}
 */
let databases = document.location.protocol+'//'+document.location.host+"/"+(document.location.host.slice(0,7) ===  "192.168" ? 'XPJ' : cagent)+"/";
let bug ={
    //**************************************************************
    cagent:cagent,
    name:'公用版天下网络',
    appsrc:'',//app
    //**************************************************************
    username:/^[A-Za-z](?![a-zA-Z]+$)[0-9A-Za-z]{4,9}$/,//用户名
    pass:/^[0-9A-Za-z]{6,12}$/,//密码
    realName:/^[\u4e00-\u9fa5]{2,4}$/,//真实姓名
    mobile:/^1[3|4|5|7|8][0-9]{9}$/,//手机号
    code:/^[0-9]{4}$/,//验证码
    qkpwd:/^[0-9]{4}$/,//取款密码
    email:/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,
    card:/^[0-9A-Za-z]{15,19}$/,//卡号
    cardNum:/^[0-9]{4,19}$/,
    xpj_src:databases,
    NewAjax:function(objs,src,callback) {
        bug.ReQuest.call(this,{},'checklogin.do',function (obj) {
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
            timeout : 10000,
            url:databases+src,
            async:true,
            cache:false,
            success:function (data) {
                callback(data);
            },
            error:function (xhr,textStatus) {
                if(textStatus=='timeout'){
                    bug.mask(false);
                    Message.closeAll();
                }else{
                    bug.mask(false);
                    Message.closeAll();
                }
            }
        })
    },
    franttime:function(time) {
        var date,Y ,M,D,h,m,s;
        date = new Date(time);
        Y = date.getFullYear() + '-';
        M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        D = date.getDate() + ' ';
        h = (date.getHours()<10? '0'+ date.getHours():date.getHours())+ ':';
        m = (date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()) + ':';
        s = (date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds());
        var fommat_time = Y + M + D + h + m + s;
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
    mask:function(Boo) {// lodding
        var loadingInstance=null;
        var option ={
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        };
        loadingInstance =  Loading.service(option);
        if(Boo===false){
            setTimeout(function () {
                loadingInstance.close();
            },100)
        }
    }
};
export default bug;