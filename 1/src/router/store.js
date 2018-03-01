/**
 * Created by Administrator on 2017/10/2. Bug
 */
import Vue from 'vue'

/**
 * 状态管理
 */
import Vuex from 'vuex'
Vue.use(Vuex);

/**
 * cookeis
 */
import VueCookies from 'vue-cookies'
Vue.use(VueCookies);


/**
 * 公用js
 */
import bug from "./public"


/**
 * 代理
 */
function geturl() {
    if(document.location.search.slice(0,3) === "?p="){
        $cookies.set("proxyname",document.location.search.slice(3),60 * 60 * 24 * 1);
        return document.location.search.slice(3)
    }else{
        if($cookies.get('proxyname') != null){
            return $cookies.get('proxyname')
        }else{
            return null;
        }
    }
}

/**
 * 判断APP
 */
function App() {
    if(document.location.search  === '?app=true'){
        $cookies.set("appTest",true,60 * 60 * 24 * 1);
        return  false;
    }else{
        if($cookies.get('appTest') === 'true'){
            return false;
        }else{
            return true;
        }
    }
}
export default new Vuex.Store({
    state:{
        // 平台信息
        userNew:{
            Pname:bug.name,
            proxyname:geturl(),// 代理商
            jrg:bug.xpj_src,// src
            cagent:bug.cagent,// 代理号
            userName:'',//用户名
            userMoney:'',// 用户余额
            gameMoney:'',// 游戏余额
            userkey:'',//token（保留）
            integral:'',// 积分（保留）
            Login:false,//登录状态
            data:{
                judgment:true
            },// 获取个人信息
            applet:App(),
            appsrc:bug.appsrc,
            drop:false,//退出系统提示
            text:'',//公用头部信息
        },
        Recharge:{//查询记录专用
            id:'',
            judgment:false,
            page:1,
            total:"1",
            size:5,
            column:'',
            data:{},
        },
        // 公告轮播优惠
        annouationNew:{//公告轮播
            judgment:false,
            announcement:'',
            Rotation:'',
            offer:''
        },
        // 保存game游戏 数据
        gamepop:{
            gametitle:'',
            judgment:false,
            src:'',
            data:{}
        },
        // 存取款专用
        bankcard:{// 支付专用
            PaymentList:'',//获取列表
            judgment:false,
            err:'',
            src:'',
            type:'',
            cardNum:'',
            pays:Pays,
            judgmentcardNum:false,
            Config:{
                marking_quantity:'0',
                user_quantity:'15'
            },
        },
        // 系统提示 （保留）
        CloseNew:{// 系统提示
            Closepoptext:'',
            Closepop:false,
            pages:"",
        },
        // 游戏列表
        game:[//游戏列表
            {name:'开元棋牌',type:'KYQP',id:"",model:''},
            {name:'IG 彩票（新）',type:'IGPJ',id:"",model:''},
            {name:'IG 彩票',type:'IG',id:"",model:''},
            {name:'VR 彩票',type:'VR',id:"",model:''},
            // {name:'BG 彩票/视讯',type:'BG'},
            {name:'Cagayan88视讯',type:'CG',id:"",model:''},
            {name:'DS视讯',type:'DS',id:"",model:''},
            {name:'AGIN国际厅/电子',type:'AGIN',id:"",model:'mobile'},
            {name:'申博视讯(TGP)',type:'SB',id:"3",model:''},
            {name:'OG视讯',type:'OG',id:"",model:''},
            {name:'BBIN 视讯/电子',type:'BBIN',id:"",model:''},
            {name:'PT电子',type:'PT',id:"",model:''},
            {name:'MG电子',type:'MG',id:"",model:''},
            {name:'HABA电子',type:'HABA',id:"",model:''},
            {name:'皇冠',type:'HG',id:"",model:'MB'}
        ],
        // 支付页面专用
        Scan:null,
        //支付专用
        waiting:false,//刷新等待页面
        AlipayscanPayNum:2,
        AlipayscanPay:null,//支付宝 页面
        paydata:null,//内容
        //支付专用
        // 旧的
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
        INCENEWUSERLOGINTEXT(state,value){ //New user  text 共用头部说明
            state.userNew.text = value
        },
        INCENEWUSERLOGINGOODSLIST(state,value){ //New user  text 积分商城
            state.userNew.goodsList = value
        },
        INCENEWUSERLOGINDROP(state,value){ //New user  drop 退出系统提示
            state.userNew.drop = value
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
        INCENRECHARGECOLUMN(state,value){ //New Recharge column
            state.Recharge.column = value
        },
        INCENRECHARGEID(state,value){ //New Recharge judgment
            state.Recharge.id = value
        },
        INCENEWCLOSEPOP(state,value){ //New 系统提示框
            state.CloseNew.Closepop = value
        },
        INCENEWCLOSEPOPTEXT(state,value){ //New 系统提示文本pages
            state.CloseNew.Closepoptext = value
        },
        INCENEWCLOSEPAGES(state,value){ //New 系统提示文本
            state.CloseNew.pages = value
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
        INCEBANKCARDTYPE(state,value) {//card src cardNum
            state.bankcard.type = value
        },
        INCEBANKCARDPAYS(state,value) {//card pays
            state.bankcard.pays = value
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
            }
            // else if(value.id === 4){  //  轮播   暂停
            // }else if(value.id === 5){ // 钱包余额    暂停使用
            //     commit("INCENEWUSERLOGINUSERMONEY",value.balance);
            // }
            else if(value.id === 6){ // 游戏余额
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
            }else if(value.id === 12){ // pay.js
                commit("INCEBANKCARDPAYS",value.data);
            }
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
        // 记录
        incrRecording({commit},value){
            let lotteryForm =function (obj) {
                if(parseInt(obj[0].cnt) === 0){
                    commit("INCENRECHARGEJUDGAMENT",false);
                    commit("INCENRECHARGETOTAL","0");
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
            let accountDetails = function(obj){
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
            let rechargeRecord =function (obj) {
                if(parseInt(obj[0].cnt) == 0){
                    commit("INCENRECHARGEJUDGAMENT",false);
                    commit("INCENRECHARGETOTAL","0");
                }else{
                    commit("INCENRECHARGETOTAL",obj[0].cnt);
                    let bj = obj.slice(1);
                    for (var i = 0; i < bj.length; i++) {
                        bj[i].time = bug.franttime(parseInt(bj[i].order_time.time))
                    }
                    commit("INCENRECHARGEDATA",bj);
                    commit("INCENRECHARGEJUDGAMENT",true);
                }
            }
            let withdrawRecord =function (obj){
                if(parseInt(obj[0].cnt) == 0){
                    commit("INCENRECHARGEJUDGAMENT",false);
                    commit("INCENRECHARGETOTAL","0");
                }else{
                    commit("INCENRECHARGETOTAL",obj[0].cnt);
                    let bj = obj.slice(1);
                    for (var i = 0; i < bj.length; i++) {
                        bj[i].time = bug.franttime(parseInt(bj[i].add_time.time));
                        bj[i].money =parseFloat(bj[i].administrative_fee) + parseFloat(bj[i].poundage)
                    }
                    commit("INCENRECHARGEDATA",bj);
                    commit("INCENRECHARGEJUDGAMENT",true);
                }
            }
            let  bonusDetails = function (obj) {
                if(obj.status == "failed"){
                    commit("INCENEWCLOSEPOP",true);
                    commit("INCENEWCLOSEPOPTEXT",obj.msg);
                    return;
                }
                if(parseInt(obj.total) === 0){
                    commit("INCENRECHARGEJUDGAMENT",false);
                    commit("INCENRECHARGETOTAL",obj.total);
                }else{
                    commit("INCENRECHARGETOTAL",obj.total);
                    let bj = obj.data;
                    for (var i = 0; i < bj.length; i++) {
                        bj[i].time = bug.franttime(parseInt(bj[i].addtime.time))
                    }
                    commit("INCENRECHARGEDATA",bj);
                    commit("INCENRECHARGEJUDGAMENT",true);
                }
            }
            bug.mask()
            if(value.id === 0){//投注记录
                bug.ReQuest.call(this,{
                    pageSize:value.data.pageSize,
                    pageNo:value.data.pageNo,
                    bdate:value.data.bdate+' '+'00:00:00',
                    edate:value.data.edate+' '+'23:59:59',
                    type:value.data.type
                },  'User/getBetInfo', function (objs) {
                    bug.mask(false)
                    lotteryForm(objs)
                })
            }else if(value.id === 1){//投注记录
                bug.NewAjax.call(this,{
                    pageSize:value.data.pageSize,
                    pageNo:value.data.pageNo,
                    bdate:value.data.bdate+' '+'00:00:00',
                    edate:value.data.edate+' '+'23:59:59',
                    type:value.data.type
                },  'User/getBetInfo', function (objs) {
                    bug.mask(false)
                    lotteryForm(objs)
                })
            }else if(value.id === 2){
                bug.ReQuest.call(this,value.data,   'User/getTransferInfo', function (objs) {
                    bug.mask(false)
                    accountDetails(objs)
                })
            }else if(value.id === 3){
                bug.NewAjax.call(this,value.data,  'User/getTransferInfo', function (objs) {
                    bug.mask(false)
                    accountDetails(objs)
                })
            }else if(value.id === 4){
                bug.mask()
                bug.ReQuest.call(this,value.data, "User/getReChargeInfo", function (objs) {
                    bug.mask(false)
                    rechargeRecord(objs);
                })
            }else if(value.id === 5){
                bug.NewAjax.call(this,value.data, "User/getReChargeInfo", function (objs) {
                    bug.mask(false)
                    rechargeRecord(objs);
                })
            }else if(value.id === 6){
                bug.ReQuest.call(this,value.data, "User/getWithDrawInfo", function (objs) {
                    bug.mask(false)
                    withdrawRecord(objs)
                })
            }else if(value.id === 7){
                bug.NewAjax.call(this,value.data, "User/getWithDrawInfo", function (objs) {
                    bug.mask(false)
                    withdrawRecord(objs)
                })
            }else if(value.id === 8){
                bug.ReQuest.call(this,
                    {
                        pageSize:value.data.pageSize,
                        pageNo:value.data.pageNo,
                        startTime:value.data.startTime+' '+'00:00:00',
                        endTime:value.data.endTime+' '+'23:59:59'
                    },
                    "User/queryByTreasurePage", function (objs) {
                    bug.mask(false)
                    bonusDetails(objs)
                })
            }else if(value.id === 9){
                bug.NewAjax.call(this,
                    {
                        pageSize:value.data.pageSize,
                        pageNo:value.data.pageNo,
                        startTime:value.data.startTime+' '+'00:00:00',
                        endTime:value.data.endTime+' '+'23:59:59'
                    },
                    "User/queryByTreasurePage", function (objs) {
                    bug.mask(false);
                    bonusDetails(objs)
                })
            }
        },
        // 获取数据
        incrObtain({commit},value){
            let lunbo = function (text,objs) {//轮播
                let arr = [];
                if(document.location.host.slice(0,7)  === "192.168"){//判断内网 obj
                    if(document.location.host === '192.168.0.61:393'){//判断iP 地址
                        for(let i = 0;i <objs.length ; i++){
                            if(objs[i].src1 === ''){
                                arr.push(objs[i]);
                            }
                            if(i === objs.length-1){
                                commit(text,arr);
                                return;
                            }
                        }
                    }else{
                        for(let i = 0;i <objs.length ; i++){
                            if(objs[i].src1 === bug.cagent){
                                arr.push(objs[i]);
                            }
                            if(i === objs.length-1){
                                commit(text,arr);
                                return;
                            }
                        }
                    }
                }else{// 外网 obj
                    commit(text,objs);
                }
            };
            if(value.id === 0){//余额 {BType:"WALLET"}
                bug.ReQuest.call(this,value.data,'User/getBalance', function (obj) {
                    if(obj.msg == "error"){
                        commit("INCENEWUSERLOGINUSERMONEY",'系统错误');
                        return;
                    }else if(obj.msg =='process'){
                        commit("INCENEWUSERLOGINUSERMONEY",'维护中');
                        return;
                    }else{
                        commit("INCENEWUSERLOGINUSERMONEY",parseFloat(obj.balance).toFixed(2));
                    }
                })
            }else if(value.id === 1){
                bug.ReQuest.call(this,value.data, 'User/getBalance', function (obj) {
                    if(obj.msg == "error"){
                        commit("INCENEWUSERLOGINGAMEMONEY",'系统错误');
                        return;
                    }else if(obj.msg =='process'){
                        commit("INCENEWUSERLOGINGAMEMONEY",'维护中');
                        return;
                    }else{
                        commit("INCENEWUSERLOGINGAMEMONEY",parseFloat(obj.balance).toFixed(2));
                    }
                })
            }else if(value.id === 2){//轮播
                bug.ReQuest.call(this,value.data,'mobleWebcomConfig.do', function (obj) {// 轮播
                    if(value.data.type === 2){
                        lunbo('INCEANNOUATIONOffER',obj)
                    }else if(value.data.type === 1){
                        lunbo('INCEANNOUATIONROTATION',obj)
                    }
                })
            }else if(value.id === 3){// 公告
                commit("INCEANNOUATIONANNOUNCEMENT","");
                bug.ReQuest.call(this,{cagent:bug.cagent},'gonggao.do', function (obj) {
                    let gao = "";
                    for(let i=0;i<obj.length;i++){
                        gao += (i+1)+'、'+obj[i].rmk
                    }
                    commit("INCEANNOUATIONANNOUNCEMENT",gao);
                })
            }else if(value.id === 4){//获取打码量
                bug.ReQuest.call(this,{},'User/selectWithdrawConfig', function (obj) {
                    if(obj.status == "success"){
                        commit("INCEBANKCARDCONFIG",obj);
                    }else if(obj.status == "faild"){
                    }
                })
            }else if(value.id === 5){//获取个人信息
                bug.ReQuest.call(this,{}, 'User/getUserInfo', function (obj) {
                    let time = {reg_date:'',login_time:"",vip_level:'',mobile:'',realname:'',email:'',judgment:false};
                    commit("INCENEWUSERLOGINUSERNAME",obj.username);
                    commit("INCENEWUSERLOGINUSERMONEY",parseFloat(obj.wallet).toFixed(2));
                    commit("INCENEWUSERLOGININTEGRAL",obj.integral);
                    time.reg_date = bug.franttime(parseInt(obj.reg_date.time));
                    time.login_time = bug.franttime(parseInt(obj.login_time.time));
                    time.vip_level = parseInt(obj.vip_level);
                    time.mobile = obj.mobile;
                    time.email = obj.email;
                    time.realname = obj.realname;
                    time.judgment = true;
                    commit("INCENEWUSERLOGINDATA",time);
                })
            }
        },
        incrgamepop({commit},value) {//游戏组件
            if(value.id === 0){
                commit("INCEGAMEPOP",value.judgment);
            }else if(value.id === 1){
                commit("INCEGAMEPOPTITLE",value.gametitle);
            }else if(value.id === 2){
                commit("INCEGAMEPOPSRC",value.src)
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
            }else if(value.id === 4){
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