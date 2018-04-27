/**
 * Created by Administrator on 2017/10/2. Bug
 */
import Vue from 'vue'
import Vuex from 'vuex'
import { Message } from 'element-ui';

import bug from "./public"
/**
 *  代理商
 */
function GetRequest(value) {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    let jum = JSON.stringify(theRequest) != '{}' ? true : false;
    var type = value === 'iphonex' ?  '0' : value === 'p' ?  '' :  value === 'app' ? true :   value === 'android' ? false :'null';
    if(jum){
        for(let item in theRequest){
            if(item === value){
                $cookies.set(value,theRequest[item],60 * 60 * 24 * 1);
                return value === 'p' ? theRequest[item] : value === 'iphonex' ? theRequest[item] : value === 'app' ? theRequest[item] : value === 'android' ? theRequest[item] : 'null';
            }
        }
        return $cookies.get(value) === null ? type : $cookies.get(value);
    }else{
        return $cookies.get(value) === null ? type : $cookies.get(value);
    }
}
// alert(navigator.userAgent.toLowerCase().indexOf('qqbrowser')>-1 ? true : false)
// uc  √
// QQ ×
// 猎鹰 ×
// 搜狗 ×
// 寰宇 ×
// safari
// **************
/**
 *  判断APP
 */
Vue.use(Vuex); //管理响应
export default new Vuex.Store({
    state:{
        pChannels:[],
        userNew:{
            // android:GetRequest('android'),
            browser:GetRequest('android') === 'true' ? false : navigator.userAgent.toLowerCase().indexOf('ucbrowser')>-1 ? true : navigator.userAgent.toLowerCase().indexOf('miuibrowser')>-1 ? true : navigator.userAgent.toLowerCase().indexOf('qqbrowser')>-1 ? false : navigator.userAgent.toLowerCase('safari').indexOf('safari')>-1 ? true : false,// 判断浏览器
            iphonex:GetRequest('iphonex'),//判断X  0 否 1 是
            cardlist:'',//银行列表
            proxyname:GetRequest('p'),// 代理商
            jrg:bug.xpj_src,// src
            cagent:bug.cagent,// 代理号
            userName:'',//用户名
            userMoney:'',// 用户余额
            gameMoney:'',// 游戏余额
            userkey:'xxx',//token
            integral:'',// 积分
            Login:false,//登录状态
            data:{
                judgment:true
            },// 获取个人信息
            applet:GetRequest('app') ===  'true' ? false : true,
            appsrc:bug.appsrc,
            PC:bug.pc,
            text:'',//公用头部信息
            whether:"",//是否修改提款密码
            goodsList:''//获取积分商城列表
        },
        Recharge:{//查询记录专用
            id:'',
            judgment:false,
            page:1,
            total:0,
            size:5,
            column:'',
            data:{},
        },
        annouationNew:{//公告轮播
            judgment:false,
            announcement:'',
            Rotation:'',
            offer:'',
            offerchild:''
        },
        gamepop:{//游戏提示
            gametitle:'',
            judgment:false,
            src:'',
            data:{}
        },
        bankcard:{// 支付专用
            charge:'',
            PlatformPay:'',
            PaymentList:''
            //     [
            //     {paymentName: "HS", id: "4", minquota: 0, maxquota: 50000},
            //     {paymentName: "ZF", id: "7", minquota: 1, maxquota: 50000},
            //     {paymentName: "DDB", id: "12", minquota: 0, maxquota: 50000},
            //     {paymentName: "TCP", id: "14", minquota: 0, maxquota: 50000},
            //     {paymentName: "MKT", id: "26", minquota: 0, maxquota: 50000},
            //     {paymentName: "DC", id: "27", minquota: 0, maxquota: 50000},
            //     {paymentName: "JFK", id: "39", minquota: 0, maxquota: 50000},
            //     {paymentName: "BFT", id: "40", minquota: 0, maxquota: 50000},
            //     {paymentName: "XQ", id: "42", minquota: 100, maxquota: 50000},
            //     {paymentName: "HT", id: "53", minquota: 0, maxquota: 50000},
            //     {paymentName: "YEE", id: "54", minquota: 0, maxquota: 50000},
            //     {paymentName: "ZX", id: "56", minquota: 0, maxquota: 50000},
            //     {paymentName: "KLT", id: "69", minquota: 0, maxquota: 50000},
            //     {paymentName: "KLT", id: "85", minquota: 0, maxquota: 50000},
            //     {paymentName: "WFT", id: "88", minquota: 100, maxquota: 50000},
            //     {paymentName: "JHZ", id: "89", minquota: 0, maxquota: 50000}
            // ]
            ,//获取列表
            judgment:false,//判断是否有支付列表
            err:'',
            src:'',
            type:'',
            cardNum:'',
            pays:null,
            cardinfo:'',
            judgmentcardNum:false,
            Config:'',
        },
        CloseNew:{// 系统提示
            Closepoptext:'',
            Closepop:false,
            pages:"",
        },
        game:[//游戏列表
            {name:'IG 彩票（新）',type:'IGPJ',id:"",model:''},
            {name:'IG 彩票',type:'IG',id:"",model:''},
            {name:'VR 彩票',type:'VR',id:"",model:''},
            // {name:'BG 彩票/视讯',type:'BG'},
            {name:'Cagayan88视讯',type:'CG',id:"",model:''},
            {name:'DS视讯',type:'DS',id:"",model:''},
            {name:'AGIN国际厅',type:'AGIN',id:"",model:'mobile'},
            {name:'申博视讯(TGP)',type:'SB',id:"3",model:''},
            {name:'OG视讯',type:'OG',id:"",model:''},
            {name:'BBIN 视讯/电子',type:'BBIN',id:"",model:''},
            {name:'PT电子',type:'PT',id:"",model:''},
            {name:'MG电子',type:'MG',id:"",model:''},
            {name:'HABA电子',type:'HABA',id:"",model:''},
            {name:'皇冠',type:'HG',id:"",model:'MB'},
            {name:'开元棋牌',type:'KYQP',id:"",model:''}
        ],
        // 旧的
        Scan:1,
        //支付专用
        waiting:false,//刷新等待页面
        AlipayscanPayNum:2,
        AlipayscanPay:null,//支付宝 页面
        paydata:null,//内容
        //支付专用
        // 旧的
    },
    mutations:{
        setChannels(s, v) {
          s.pChannels = v
        },
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
        INCENEWUSERLOGINTEXT(state,value){ //New user  text 共用头部说明
            state.userNew.text = value
        },
        INCENEWUSERLOGINGOODSLIST(state,value){ //New user  text 积分商城
            state.userNew.goodsList = value
        },
        INCENEWUSERLOGINWHETHER(state,value){ //New user  drop 退出系统提示
            state.userNew.whether = value
        },
        //************新增 2018 03 06**********//
        INCENEWUSERLOGINCARDLIST(state,value){ //New user  cardlist 银行列表
            state.userNew.cardlist = value
        },
        // 查询记录Recharge
        INCENRECHARGEJUDGAMENT(state,value){ //New Recharge judgment
            state.Recharge.judgment = value
        },
        INCENRECHARGEDATA(state,value){ //New Recharge judgment
            state.Recharge.data = value
        },
        INCENRECHARGETOTAL(state,value){ //New Recharge total
            state.Recharge.total = value
        },
        INCENRECHARGECOLUMN(state,value){ //New Recharge column offerchild
            state.Recharge.column = value
        },
        INCENRECHARGEID(state,value){ //New Recharge judgment
            state.Recharge.id = value
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
        INCEANNOUATIONOffERCHILDE(state,value){ //New 优惠
            state.annouationNew.offerchild = value
        },
        INCEANNOUATION(state,value){ //New 优惠
            state.annouationNew.judgment = value
        },
        // game
        INCEGAMEPOP(state,value) {//游戏组件
            state.gamepop.judgment = value
        },
        INCEGAMEPOPTITLE(state,value) {//游戏 title
            state.gamepop.gametitle = value
        },
        INCEGAMEPOPSRC(state,value) {//游戏组件 src
            state.gamepop.src = value
        },
        INCEGAMEPOPDATA(state,value) {//游戏组件 data
            state.gamepop.data = value
        },
        INCRWAITING(state,value) {//等待页面
            state.waiting = value
        },
        INCEBANKCARDPAYMENTLIST(state,value) {//CARD data
            state.bankcard.PaymentList = value
        },
        INCEBANKCARDJUDGMENT(state,value) {//card judgment
            state.bankcard.judgment = value
        },
        INCEBANKCARDERR(state,value) {//card err
            state.bankcard.err = value
        },
        INCEBANKCARDSRC(state,value) {//card src
            state.bankcard.src = value
        },
        INCEBANKCARDPAYS(state,value) {//card pays
            state.bankcard.pays = value
        },
        INCEBANKCARDTYPE(state,value) {//card src cardNum
            state.bankcard.type = value
        },
        INCEBANKCARDCARDNUM(state,value) {//card  cardNum
            state.bankcard.cardNum = value
        },
        INCEBANKCARDCONFIG(state,value) {//card  cardNum
            state.bankcard.Config = value
        },

        INCEBANKCARDJUDGMENTCARDNUM(state,value) {//card judgment
            state.bankcard.judgmentcardNum = value
        },
        INCEBANKCARDCARDINFO(state,value) {//card  cardNum cardinfo
            state.bankcard.cardinfo = value
        },
        //************新增 2018 03 06**********//
        INCEBANKCARDPLATFORMPY(state,value) {//card  cardNum PlatformPay
            // 新增 2018 03 06
            state.bankcard.PlatformPay = value
        },
        INCEBANKCARDCHARGE(state,value) {//card  cardNum cardinfo
            state.bankcard.charge = value
        },
        // 旧
        INCEALIPAYSCANPAY(state,value){ //支付宝页面
            state.AlipayscanPay = value
        },
        INCEALIPAYSCANPAYNUM(state,value){ //支付宝页面
            state.AlipayscanPayNum = value
        },
        INCEPAYDATA(state,value) {//w微信支付宝专用
            state.paydata = value
        },
        INCESCAN(state,value) {//扫码支付银行卡列表
            state.Scan = value
        },
        // 旧
    },
    actions: {
        doSetChannels({
          commit
        }, v) {
          commit("setChannels", v)
        },
        // 新
        inceuserNew({commit},value){//个人
            if(value.id === 0){
                commit("INCENEWUSERLOGINLOGIN",value.Login)
            }else if(value.id ===1){
                commit("INCENEWUSERLOGINLOGIN",value.Login);
                commit("INCENEWUSERLOGINUSERNAME",value.userName);
                commit("INCENEWUSERLOGINTOKEN",value.userkey);
            }else if(value.id === 2){
                commit("INCENEWUSERLOGINLOGIN",value.Login);
                commit("INCENEWUSERLOGINUSERNAME",value.userName);
                commit("INCENEWUSERLOGINTOKEN",value.userkey);
                commit("INCENEWUSERLOGINUSERMONEY",value.balance);
            } else if(value.id === 3){  //  查询记录 专用 ID
                commit("INCENRECHARGEID",value.type);
            } else if(value.id === 6){ // 游戏余额
                commit("INCENEWUSERLOGINGAMEMONEY",value.balance);
            }else if(value.id === 7){ // card
                commit("INCEBANKCARDJUDGMENT",value.judgment);
                commit("INCEBANKCARDERR",value.err);
                commit("INCEBANKCARDPAYMENTLIST",value.PaymentList);
            }else if(value.id === 8){// card
                commit("INCEBANKCARDSRC",value.src);
                commit("INCEBANKCARDTYPE",value.type);
            }else if(value.id === 9){// 获取银行卡
                commit("INCEBANKCARDCARDNUM",value.cardNum);
            }else if(value.id === 10){//是否绑定银行卡
                commit("INCEBANKCARDJUDGMENTCARDNUM",value.judgment);
            }else if(value.id === 11){
                commit("INCEANNOUATIONOffERCHILDE",value.src);
            }else if(value.id === 12){
                commit("INCEBANKCARDPAYS",value.data);
            }else if(value.id === 13){//银行列表
                commit("INCENEWUSERLOGINCARDLIST",value.data);
                //************新增 2018 03 06**********//
            }else if(value.id === 14){// 新增 2018 03 06
                commit("INCEBANKCARDPLATFORMPY",value.data);
                //************新增 2018 03 06**********//
            }else if(value.id === 15){
                commit("INCEBANKCARDCARDINFO",value.card);
            }else if(value.id === 19){
                commit("INCEBANKCARDCHARGE",value.charge);
            }
            //
        },
        incrrecharge({commit},value){//个人
            if(value.id === 0){
                commit("INCENRECHARGEJUDGAMENT",value.judgment);
                commit("INCENRECHARGETOTAL",value.total);
            }else if(value.id === 1){
                commit("INCENRECHARGEDATA",value.obj);
                commit("INCENRECHARGETOTAL",value.total);
                commit("INCENRECHARGEJUDGAMENT",value.judgment);
            }
        },
        incrgamepop({commit},value) {//游戏组件
            if(value.id ===3){
                commit("INCEGAMEPOPDATA",value.data)
            }
        },
        recordingTime({commit},value){//获取记录查询时间
        },
        incrObtain({commit},value){//获取
            if(value.id === 0){//提款 获取是否绑定银行卡
                bug.ReQuest.call(this,{}, bug.xpj_src + "User/getUserCard", function (obj) {
                    if (obj.length > 0) {
                        commit("INCEBANKCARDCARDNUM",obj[0]);
                        commit("INCEBANKCARDJUDGMENTCARDNUM",true);
                        //获取打码量
                        bug.ReQuest.call(this,{}, bug.xpj_src + 'User/selectWithdrawConfig', function (obj) {
                            if(obj.status == "success"){
                                commit("INCEBANKCARDCONFIG",obj);
                            }else if(obj.status == "faild"){
                            }
                        })
                        bug.ReQuest.call(this,{BType:"WALLET"}, bug.xpj_src + 'User/getBalance', function (obj) {
                            if(obj.msg == "error"){
                                commit("INCENEWUSERLOGINUSERMONEY",'系统错误');
                            }else if(obj.msg =='process'){
                                commit("INCENEWUSERLOGINUSERMONEY",'维护中');
                            }else{
                                commit("INCENEWUSERLOGINUSERMONEY",parseFloat(obj.balance).toFixed(2));
                            }
                        })
                        return;
                    } else {
                        bug.ReQuest.call(this,{}, bug.xpj_src + "User/checkQkpwd", function (obj) {
                            if(obj.msg === "0"){
                                commit("INCENEWUSERLOGINWHETHER",true);
                                return ;
                            }else if(obj.msg === "1"){
                                commit("INCENEWUSERLOGINWHETHER",false);
                                return;
                            }else{
                                commit("INCENEWUSERLOGINWHETHER",'系统异常');
                                // 系统异常
                            }
                        })
                        // whether
                        commit("INCEBANKCARDCARDNUM","");
                        commit("INCEBANKCARDJUDGMENTCARDNUM",false);
                    }
                })
            }else if(value.id === 1){// 获取钱包余额
                bug.ReQuest.call(this,{BType:"WALLET"}, bug.xpj_src + 'User/getBalance', function (obj) {
                    if(obj.msg == "error"){
                        commit("INCENEWUSERLOGINUSERMONEY",'系统错误');
                    }else if(obj.msg =='process'){
                        commit("INCENEWUSERLOGINUSERMONEY",'维护中');
                    }else{
                        commit("INCENEWUSERLOGINUSERMONEY",parseFloat(obj.balance).toFixed(2));
                    }
                })
            }else if(value.id === 2){//获取银行卡
                bug.ReQuest.call(this,{}, bug.xpj_src + "User/getUserCard", function (obj) {
                    if (obj.length > 0) {
                        commit("INCEBANKCARDCARDNUM",obj[0]);
                        commit("INCEBANKCARDJUDGMENTCARDNUM",true);
                    } else {
                        commit("INCEBANKCARDCARDNUM","");
                        commit("INCEBANKCARDJUDGMENTCARDNUM",false);
                    }
                })
            }else if(value.id === 3){// 获取是否修改过取款密码
                bug.ReQuest.call(this,{}, bug.xpj_src + "User/checkQkpwd", function (obj) {
                    if(obj.msg === "0"){
                        commit("INCENEWUSERLOGINWHETHER",true);
                        return ;
                    }else if(obj.msg === "1"){
                        commit("INCENEWUSERLOGINWHETHER",false);
                        return;
                    }else{
                        commit("INCENEWUSERLOGINWHETHER",'系统异常');
                        // 系统异常
                    }

                })
            }else if(value.id === 4){ //获取扫码
                bug.ReQuest({type:value.type},bug.xpj_src+'alipayPaymentScanCode/getQRCode' , function (obj) {
                    if(obj.status === "success"){
                        if(obj.msg != undefined){
                            commit("INCEBANKCARDJUDGMENT",false);
                            commit("INCEBANKCARDERR","");
                            commit("INCEBANKCARDPAYMENTLIST","");
                            return;
                        }else{
                            commit("INCEBANKCARDJUDGMENT",true);
                            commit("INCEBANKCARDERR","");
                            commit("INCEBANKCARDPAYMENTLIST",obj);
                        }
                    }else{
                        commit("INCEBANKCARDJUDGMENT",false);
                        commit("INCEBANKCARDERR","");
                        commit("INCEBANKCARDPAYMENTLIST","");
                    }
                })
            }else if(value.id === 5){// 获取个人信息
                bug.ReQuest({}, bug.xpj_src + 'User/getUserInfo', function (obj) {
                    commit("INCENEWUSERLOGINUSERNAME",obj.username);
                    commit("INCENEWUSERLOGINUSERMONEY",parseFloat(obj.wallet).toFixed(2));
                    commit("INCENEWUSERLOGININTEGRAL",obj.integral);
                    obj.reg_date = bug.franttime(parseInt(obj.reg_date.time));
                    obj.login_time = bug.franttime(parseInt(obj.login_time.time));
                    obj.judgment = true;
                    commit("INCENEWUSERLOGINDATA",obj);
                })
            }else if(value.id === 6){// 公告
                commit("INCEANNOUATIONANNOUNCEMENT","");
                bug.ReQuest.call(this,{cagent:bug.cagent}, bug.xpj_src + 'gonggao.do', function (obj) {
                    commit("INCEANNOUATIONANNOUNCEMENT",obj);
                })
            }else if(value.id === 7){// 轮播
                bug.ReQuest.call(this,value.data, bug.xpj_src + 'mobleWebcomConfig.do', function (obj) {
                    if(value.data.type === 2){
                        commit("INCEANNOUATIONOffER",obj);
                        commit("INCEANNOUATION",true);
                    }else if(value.data.type === 1){
                        commit("INCEANNOUATIONROTATION",obj);
                    }
                })
            }
        },
        recording({commit},value){//记录查询
            commit("INCENRECHARGEDATA",'');
            let getReChargeInfo=function (obj) {//资金记录
                if(parseInt(obj[0].cnt) == 0){
                    commit("INCENRECHARGEJUDGAMENT",false);
                    commit("INCENRECHARGETOTAL",0);
                }else{
                    commit("INCENRECHARGETOTAL",obj[0].cnt);
                    let bj = obj.slice(1);
                    for (var i = 0; i < bj.length; i++) {
                        bj[i].time = bug.franttime(parseInt(bj[i].order_time.time))
                    }
                    commit("INCENRECHARGEDATA",bj);
                    commit("INCENRECHARGEJUDGAMENT",true);
                }
            };
            let bettingRecord =function (obj) {
                if(parseInt(obj[0].cnt) === 0){
                    commit("INCENRECHARGEJUDGAMENT",false);
                    commit("INCENRECHARGETOTAL",0);
                }else{
                    commit("INCENRECHARGETOTAL",obj[0].cnt);
                    commit("INCENRECHARGECOLUMN",obj[1]);
                    let bj = obj.slice(2);
                    for (var i = 0; i < bj.length; i++) {
                        bj[i].time = bug.franttime(parseInt(bj[i].bettime))
                    }
                    commit("INCENRECHARGEDATA",bj);
                    commit("INCENRECHARGEJUDGAMENT",true);
                }
            }
            let TransferRecords=function (obj) {
                if(parseInt(obj[0].cnt) == 0){
                    commit("INCENRECHARGEJUDGAMENT",false);
                    commit("INCENRECHARGETOTAL","0");
                }else{
                    commit("INCENRECHARGETOTAL",obj[0].cnt);
                    let bj = obj.slice(1);
                    for (var i = 0; i < bj.length; i++) {
                        bj[i].time = bug.franttime(parseInt(bj[i].t_time.time))
                    }
                    commit("INCENRECHARGEDATA",bj);
                    commit("INCENRECHARGEJUDGAMENT",true);
                }
            }
            let rechargeRecord =function(obj){
                    if(obj.status == "failed"){
                         Message.error({
                            showClose: true,
                            message: "系统忙，请稍后重试。。。"+obj.msg,
                        })
                        return;
                    }
                    if(parseInt(obj.total) === 0){
                        commit("INCENRECHARGEJUDGAMENT",false);
                        commit("INCENRECHARGETOTAL",Number(obj.total));
                    }else{
                        commit("INCENRECHARGETOTAL",Number(obj.total));
                        let bj = obj.data;
                        for (var i = 0; i < bj.length; i++) {
                            bj[i].time = bug.franttime(parseInt(bj[i].addtime.time))
                        }
                        commit("INCENRECHARGEDATA",bj);
                        commit("INCENRECHARGEJUDGAMENT",true);
                    }
                }
            let withdrawRecord =function (obj) {
                if(parseInt(obj[0].cnt) == 0){
                    commit("INCENRECHARGEJUDGAMENT",false);
                    commit("INCENRECHARGETOTAL",0);
                }else{
                    commit("INCENRECHARGETOTAL",Number(obj[0].cnt));
                    let bj = obj.slice(1);
                    for (var i = 0; i < bj.length; i++) {
                        bj[i].time = bug.franttime(parseInt(bj[i].add_time.time));
                        bj[i].money =parseFloat(bj[i].administrative_fee) + parseFloat(bj[i].poundage)
                    }
                    commit("INCENRECHARGEDATA",bj);
                    commit("INCENRECHARGEJUDGAMENT",true);
                }
            }
            bug.mask();
            if(value.id === 0){// 资金记录
                bug.ReQuest(value.data, bug.xpj_src +"User/getReChargeInfo", function (objs) {
                    getReChargeInfo(objs);
                    bug.mask(false);
                })
            }else if(value.id === 1){// 资金记录
                bug.ajax(value.data, bug.xpj_src +"User/getReChargeInfo", function (objK) {
                    getReChargeInfo(objK);
                    bug.mask(false);
                })
            }else if(value.id === 2){// 投注记录
                bug.ReQuest({pageSize:value.data.pageSize, pageNo:value.data.pageNo, bdate:value.data.bdate+' '+'00:00:00', edate:value.data.edate+' '+'23:59:59',type:value.data.type},  bug.xpj_src + 'User/getBetInfo', function (objs) {
                    bettingRecord(objs);
                    bug.mask(false);
                })
            }else if(value.id === 3){// 投注记录
                bug.ajax({pageSize:value.data.pageSize, pageNo:value.data.pageNo, bdate:value.data.bdate+' '+'00:00:00', edate:value.data.edate+' '+'23:59:59',type:value.data.type},  bug.xpj_src + 'User/getBetInfo', function (objs) {
                    bettingRecord(objs);
                    bug.mask(false);
                })
            }else if(value.id === 4){// 转账记录
                bug.ReQuest(value.data,  bug.xpj_src + 'User/getTransferInfo', function (objK) {
                    TransferRecords(objK)
                    bug.mask(false);
                })
            }else if(value.id === 5){// 转账记录
                bug.ajax(value.data,  bug.xpj_src + 'User/getTransferInfo', function (objK) {
                    TransferRecords(objK)
                    bug.mask(false);
                })
            }else if(value.id === 6){
                bug.ReQuest({pageSize:value.data.pageSize,type:value.data.type, pageNo:value.data.pageNo, startTime:value.data.startTime+' '+'00:00:00', endTime:value.data.endTime+' '+'23:59:59'}, bug.xpj_src +"User/queryByTreasurePage", function (objs) {
                       rechargeRecord(objs)
                       bug.mask(false);
                })
            }else if(value.id === 7){
                bug.ajax({pageSize:value.data.pageSize,type:value.data.type, pageNo:value.data.pageNo, startTime:value.data.startTime+' '+'00:00:00', endTime:value.data.endTime+' '+'23:59:59'}, bug.xpj_src +"User/queryByTreasurePage", function (objs) {
                       rechargeRecord(objs)
                       bug.mask(false);
                })
            }else if(value.id === 8){
                bug.ReQuest(value.data, bug.xpj_src +"User/getWithDrawInfo", function (objs) {
                    withdrawRecord(objs)
                    bug.mask(false);
                })
            }else if(value.id === 9){
                bug.ajax(value.data, bug.xpj_src +"User/getWithDrawInfo", function (objs) {
                    withdrawRecord(objs)
                    bug.mask(false);
                })
            }
        },
        inceCloseNew({commit},value){//系统提示框
            if(value.id === 0){
                commit("INCENEWCLOSEPOP",value.Closepop)
            }else if(value.id ===1){
                commit("INCENEWCLOSEPOP",value.Closepop);
                commit("INCENEWCLOSEPOPTEXT",value.Closepoptext)
            }else if(value.id === 2){
                commit("INCENEWCLOSEPAGES",value.pages);
            }else if(value.id === 3){
                commit("INCENEWUSERLOGINTEXT",value.text);
            }
            else if(value.id === 4){
                commit("INCENEWUSERLOGINDROP",value.judgment);
            }
        },
        // 旧
        incealipayscanpay({commit},value){//支付宝页面
            commit("INCEALIPAYSCANPAY",value)
        },
        incealipayscanpaynum({commit},value){//支付宝页面
            commit("INCEALIPAYSCANPAYNUM",value)
        },
        incrpaydata({commit},value) {//w微信支付宝专用
            commit("INCEPAYDATA",value)
        },
        incrscan({commit},value){//扫码支付
            commit("INCESCAN",value)
        },
        incrwaitionValue({commit},value){
            commit("INCRWAITING",value)
        }
    }
})
