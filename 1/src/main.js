// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'babel-polyfill'//e6~e5 兼容
import router from './router'
import store from '@/router/store'
/**
 *
 * bug 2018 01 01
 *
 * 生成二维码
 *
 */
import VueQriously from 'vue-qriously'
Vue.use(VueQriously);

/**
 * bug 2018 01 01
 *
 * 轮播
 *
 */
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);//轮播

/**
 * API 接口
 */
import Membercentre from './router/Membercentre'
Vue.use(Membercentre)//个人中心


// import $ from 'jquery'
import '../static/css/reset.css'
import '../static/css/public.less'
import '../static/js/head'
import '../static/css/iconfont.css'
import bug from "./router/public"


/**
 *
 * bug 2018 01 01
 *
 * ELementUl
 *
 */
import { Message } from 'element-ui';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
Vue.use(ElementUI,{ zhLocale });


Vue.config.productionTip = false;

if (process.BROWSER_BUILD) {
    const VueAwesomeSwiper = require('vue-awesome-swiper/ssr');
    Vue.use(VueAwesomeSwiper)
}
router.beforeEach(({meta,path}, from, next) => {
    let text= null;
    switch (path.toLowerCase()) {
        case '/login':
            text='登录'
            break;
        case '/registered':
            text='会员注册';
            break;
        case '/notesingle':
            text='在线客服';
            break;
        case '/information':
            text='填写存款信息';
            break;
        case '/scancode':
            text='扫码支付';
            break;
        case '/scancodebank':
            text='确认支付';
            break;
        case '/alipayscanpay':
            text='支付订单';
            break;
        case '/deposit':
            text='存取款';
            break;
        case '/withdrawals':
            text='存取款';
            break;
        case '/userbankcard':
            text='存取款';
            break;
        case '/usercapitalpwd':
            text='存取款';
            break;
        case '/membercentre':
            text='会员中心';
            break;
        case '/collection':
            text='优惠活动';
            break;
        case '/gamehaba':
            text='HABA 游戏'
            break;
        case '/gamemg':
            text='MG 游戏'
            break;
        default:
            text='';
    }
    store.dispatch("inceCloseNew",{id:3,text:text});
    if(path === "/login" || path === '/Registered'){
        bug.ReQuest.call(this,{},'checklogin.do',function (data) {
            if (data.msg == "faild") {
                store.dispatch('inceuserNew', {id: 0, Login: false});
            } else if (data.msg == "islogin") {
                store.dispatch('inceuserNew', {id: 0, Login: false});
            } else if (data.msg == "success") {
                store.dispatch('inceuserNew', {id: 1, Login: true, userkey: data.userkey, userName: data.userName});
                return  next({path:'/'});
            }
        })
    }
    bug.ReQuest.call(this,{},"checklogin.do",function (data) {
        if (data.msg == "faild") {
            if (meta.requiresAuth === true) {
                store.dispatch('inceuserNew', {id: 0, Login: false});
                return next({path: '/Login'});
            } else {
                store.dispatch('inceuserNew', {id: 0, Login: false});
                return next();
            }
        } else if (data.msg == "islogin") {
            if (meta.requiresAuth === true) {
                store.dispatch('inceuserNew', {id: 0, Login: false});
                return next({path: '/Login'});
            } else {
                store.dispatch('inceuserNew', {id: 0, Login: false});
                return next();
            }
        } else if (data.msg == "success") {
            store.dispatch('inceuserNew', {id: 1, Login: true, userkey: data.userkey, userName: data.userName});
            if (path === '/AppPage/LooteryGame' || path === '/AppPage/LiveVideo' || path === '/AppPage/ElectronicGames' || path === '/AppPage/Sportsevents' || path === '/AppPage/KaiyuanChess') {
                store.dispatch("incrObtain",{id:0,data:{BType:"WALLET"}});
            }else if (path === '/deposit') {
                bug.ReQuest.call(this,{}, "User/getUserCard", function (obj) {
                    if (obj.length > 0) {
                        store.dispatch("inceuserNew", {id: 9, cardNum: obj[0]});
                        store.dispatch("inceuserNew", {id: 10, judgment: true});
                        return next();
                    } else {
                        store.dispatch("inceuserNew", {id: 9, cardNum: ""});
                        store.dispatch("inceuserNew", {id: 10, judgment: false});
                    }
                })
            }else if (path === '/Withdrawals') {
                bug.mask();
                store.dispatch("incrObtain",{id:0,data:{BType:"WALLET"}});// 获取余额
                bug.ReQuest.call(this,{},"User/getUserCard", function (obj) {
                    bug.mask(false);
                    if (obj.length > 0) {
                        store.dispatch("incrObtain",{id:4});//获取打码量
                        store.dispatch("inceuserNew", {id: 9, cardNum: obj[0]});
                        store.dispatch("inceuserNew", {id: 10, judgment: true});
                        return next();
                    } else {
                        store.dispatch("inceuserNew", {id: 9, cardNum: ""});
                        store.dispatch("inceuserNew", {id: 10, judgment: false});
                        Message({
                            showClose: true,
                            message:'请先绑定银行卡',
                            type:'info'
                        })
                        return next({path: '/userCapitalPwd'})
                    }
                })
            }else if (path === "/userBankCard") {
                bug.mask();
                bug.ReQuest.call(this,{},"User/getUserCard", function (obj) {
                    bug.mask(false);
                    if (obj.length > 0) {
                        store.dispatch("inceuserNew", {id: 9, cardNum: obj[0]});
                        store.dispatch("inceuserNew", {id: 10, judgment: true});
                        return next();
                    }else{
                        store.dispatch("inceuserNew", {id: 9, cardNum: ""});
                        store.dispatch("inceuserNew", {id: 10, judgment: false});
                        return next({path: '/userCapitalPwd'})
                    }
                })
            }else if (path === "/collection") {
                store.dispatch("incrObtain",{id:2,data:{type:2,cagent:bug.cagent}});
            }else if (path === "/gameLimit") {
                store.dispatch("incrObtain",{id:5});//获取个人信息
            }else if (path === "/MemberCentre" || path === "/interchange") {
                store.dispatch("incrObtain",{id:0,data:{BType:"WALLET"}});
            }else if(path === "/rechargeRecord"){
                let objs = null;
                switch (store.state.Recharge.id) {
                    case "lotteryForm":
                        objs = {pageSize: 5, pageNo: 1, bdate: '', edate: '', type: 'ALL'};
                        objs.bdate = bug.datatboy('0');
                        objs.edate = bug.datatboy('0');
                        store.dispatch("incrRecording",{id:0,data:objs});
                        break;
                    case "accountDetails":
                        objs = {pageSize: 5, pageNo: 1, bdate: '', edate: '', Type: '', Ttype: ''};
                        objs.bdate = bug.datatboy('0');
                        objs.edate = bug.datatboy('0');
                        store.dispatch("incrRecording",{id:2,data:objs});
                        break;
                    case "rechargeRecord":
                        objs = {pageSize: 5, pageNo: 1, bdate: '', edate: '', Type: '', status: ''};
                        objs.bdate = bug.datatboy('0');
                        objs.edate = bug.datatboy('0');
                        store.dispatch("incrRecording",{id:4,data:objs});
                        break;
                    case "withdrawRecord":
                        objs = {pageSize: 5, pageNo: 1, bdate: '', edate: '', status: ''};
                        objs.bdate = bug.datatboy('0');
                        objs.edate = bug.datatboy('0');
                        store.dispatch("incrRecording",{id:6,data:objs});
                        break;
                    case "bonusDetails":
                        objs = {pageSize: 5, pageNo: 1, startTime: "", endTime: ""};
                        objs.startTime = bug.datatboy('0');
                        objs.endTime = bug.datatboy('0');
                        store.dispatch("incrRecording",{id:8,data:objs});
                        break;
                    default:
                        text='';
                }
            }
            return next();
        }
    });
    return  next();
});
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
