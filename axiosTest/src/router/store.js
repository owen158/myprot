/**
 * Created by Administrator on 2017/9/24.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import qs from 'qs'
import axios from 'axios'
Vue.use(Vuex);//管理响应
var Host = document.location.host;
var strs=document.location.protocol;
var xpj_src = strs+'//'+Host+"/XPJ/";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.transformRequest = [function(data) {
    return qs.stringify(data)
}];
Vue.prototype.$http = axios;
axios.defaults.baseURL =xpj_src;
var bug = {
    geturl:function () {
        var url = document.location.toString();
        if (url.indexOf('?')!=-1) {
            var number1 = url.indexOf('?');
            var url2 = url.slice(number1);
            if (url2.indexOf('p')!=-1) {
                var mumber2 = url2.indexOf('p');
                var urlstring = url2.slice(mumber2+2);
                // $cookies.set("proxyname",urlstring,60 * 60 * 24 * 1);
            }
        }
    },
    ajax:function(objs,src,callback) {
        axios.post(src,objs)
            .then(function (response) {
                callback(response.data)
            })
            .catch(function (error) {
                callback('错误')
            });
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
        return t.getFullYear()+'-'+(year(t.getMonth()+1)) +'-'+ year(t.getDate())
    },
    year:function(el) {
        if(el < 10){
            return ('0' + el);
        }else{
            return el;
        }
    },
}
bug.geturl();
var cagent = 'BL1'
// $cookies.get('proxyname')
export default new Vuex.Store({
    state:{
        userNew:{
            proxyname:"",
            jrg:xpj_src,
            cagent:cagent,
            userName:'',
            userMoney:'',
            gameMoney:'',
            userkey:'',
            integral:'',
            Login:false,
            data:'',
            // applet:applet,
            appsrc:'https://www.txw-app.com/ttc.html',
            // PC:pc
        },
        CloseNew:{
            Closepoptext:'',
            Closepop:false,
            Loding:false
        },
        annouationNew:{//公告轮播
            announcement:'',
            Rotation:'',
            offer:''
        },
        cagent:'BL1',
        jrg:xpj_src,
        onLoading:false,
        system:false,
        login:null,
        systemtext:'',
        gamepages:{
            title:'',
            judgment:false,
            src:''
        },
        Recharge:{

        },
        user:{
            userName:'',
            userMoney:'',
            token:'',
            gameMoney:''
        }
    },
    mutations:{
        // 新
        INCENEWUSERLOGINUSERNAME(state,value){ //New user  Name
            state.userNew.userName = value.substring(3)
        },
        INCENEWUSERLOGINUSERMONEY(state,value){ //New user  Money
            state.userNew.userMoney = value
        },
        INCENEWUSERLOGINGAMEMONEY(state,value){ //New user  gameMoney
            state.userNew.gameMoney = value
        },
        INCENEWUSERLOGINLOGIN(state,value){ //New user  Login
            state.userNew.Login = value
        },
        INCENEWUSERLOGINTOKEN(state,value){ //New user  token
            state.userNew.userkey = value
        },
        INCENEWUSERLOGININTEGRAL(state,value){ //New user  integral
            state.userNew.integral = parseFloat(value)
        },
        INCENEWUSERLOGINDATA(state,value){ //New user  data
            state.userNew.data = value
        },

        INCEANNOUATIONANNOUNCEMENT(state,value){ //New 公告
            state.annouationNew.announcement = value
        },
        INCEANNOUATIONROTATION(state,value){ //New 轮播
            state.annouationNew.Rotation = value
        },
        INCEANNOUATIONOffER(state,value){ //New 优惠
            state.annouationNew.offer = value
        },

        INCENEWCLOSEPOP(state,value){ //New 系统提示框
            state.CloseNew.Closepop = value
        },
        INCENEWCLOSEPOPTEXT(state,value){ //New 系统提示文本pages
            state.CloseNew.Closepoptext = value
        },
        INCENEWCLOSELODING(state,value){ //New 系统提示文本pages
            state.CloseNew.Loding = value
        },
        // INCENEWCLOSEPAGES(state,value){ //New 系统提示文本
        //     state.CloseNew.pages = value
        // },
        INCEONLOADING(state,value){//loadding 加载
            state.onLoading = value
        },
        INCESYSTEM(state,value){//系统提示
            state.system = value
        },
        INCELOFIN(state,value){//登录状态
            state.login = value
        },
        INCERECHARGE(state,value){//存取款专用
            state.Recharge = value
        },
        INCETOKEN(state,value){//获取 uer token
            state.user.token = value
        },
        INCEUSERNAME(state,value){//获取用户名 user name
            state.user.userName =value.substring(3);
        },
        INCEUSERMONEY(state,value){//获取中心钱包余额 user money
            state.user.userMoney = value
        },
        INCEGAMEMONEY(state,value){//获取游戏钱包余额 user money
            state.user.gameMoney = value
        },
        INCEGAMETITLE(state,value){//获取game titele Home
            state.gamepages.title =value;
        },
        INCEGAMESRC(state,value){//获取game src Home
            state.gamepages.src =value;
        },
        INCEGAMEJUD(state,value){//进入游戏框是否显示 titele Home
            state.gamepages.judgment = value
        },
        INCESYSTEMTEXT(state,value){//系统提示组件
            state.systemtext = value
        }
    },
    actions: {
        inceCloseNew({commit},value){//系统提示框
            if(value.id === 0){
                commit("INCENEWCLOSEPOP",value.Closepop)
            }else if(value.id ===1){
                commit("INCENEWCLOSEPOP",value.Closepop);
                commit("INCENEWCLOSEPOPTEXT",value.Closepoptext)
            }
        },
        incrajax({commit},value) {//游戏组件
            commit("INCESYSTEM",true)
            if(value.id === 0) {//优惠
                bug.ajax({type:2,cagent:cagent}, xpj_src + 'mobleWebcomConfig.do', function (obj) {
                    commit("INCESYSTEM",false)
                    if(obj === 0){
                    }else if(obj=== 1){
                    }else{
                        commit("INCEANNOUATIONOffER",obj);
                    }
                })
            }else if(value.id === 2){//轮播
                commit("INCEANNOUATIONROTATION","");
                bug.ajax({type:1,cagent:cagent}, xpj_src + 'mobleWebcomConfig.do', function (obj) {
                    commit("INCESYSTEM",false)
                    if(obj === 0){
                    }else if(obj=== 1){
                    }else{
                        commit("INCEANNOUATIONROTATION",obj);
                    }
                })
            }else if(value.id === 3){//获取优惠bnner
                commit("INCEANNOUATIONANNOUNCEMENT","");
                bug.ajax({cagent:cagent}, xpj_src + 'gonggao.do', function (obj) {
                    commit("INCESYSTEM",false)
                    if(obj === 0){
                    }else if(obj=== 1){
                    }else{
                        let gao = "";
                        for(let i=0;i<obj.length;i++){
                            gao += (i+1)+'、'+obj[i].rmk
                        }
                        commit("INCEANNOUATIONANNOUNCEMENT",gao);
                    }
                })
            }else{
                console.log("参数有误")
            }
        },
        inceonloadding({commit},value){//loadding 加载
            commit("INCEONLOADING",value);
        },
        incelogin({commit},value){
            commit("INCELOFIN",value);//系统提示
        },
        inceuser({commit},value){
            if(value.id === "1"){
                commit("INCEUSERNAME",value.userName);//用户名
                commit("INCEUSERMONEY",value.userMoney);//用户余额
            }else if(value.id === "2"){
                commit("INCEUSERNAME",value.userName);//用户名,
                commit("INCETOKEN",value.token);//用户名
            }else if(value.id === "3"){
                commit("INCEUSERMONEY",value.userMoney);//用户余额
            }else if(value.id === "4"){
                commit("INCEGAMEMONEY",value.gameMoney);//游戏余额
            }else if(value.id === "5"){
                commit("INCEGAMETITLE",value.title);//游戏 gamepages
            }else if(value.id === "6"){//游戏 gamepages
                commit("INCEGAMEJUD",value.judgment)
            }else if(value.id === "7"){//游戏 gamepages
                commit("INCEGAMEJUD",value.judgment);
                commit("INCEGAMESRC",value.src)
            }
        },
        inceation({commit},value){
            var InValue = parseInt(value);
            if(InValue === 1){
                return commit("INCESYSTEM",true);//系统提示开启
            } else if(InValue === 2){
                return commit("INCESYSTEM",false);//系统提示关闭
            }
        },
        incesystemtext({commit},value){
            commit("INCESYSTEMTEXT",value);//系统提示
        },
        inceRecharge({commit},value){
            commit("INCERECHARGE",value);//系统提示
        },
    }
})