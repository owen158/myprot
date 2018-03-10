// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'babel-polyfill'//e6~e5 兼容
import router from './router'

import VueCookies from 'vue-cookies'
Vue.use(VueCookies);

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
Vue.use(Membercentre);//个人中心

import '../static/css/public.less'
import '../src/components/LogIn/style.less'
import '../static/css/iconfont.css'
import bug from "./router/public"


Vue.component('TopCounter', {
    template: '<div class="TopHeader"><div v-show="Boo" class="rnkey" v-on:click="incrementCounter"><i class="iconfont icon-mjiantou-copy"></i></div>{{title}}</div>',
    props: {
        src: {
            type: String
        },
        Boo: {
            type: Boolean
        },
        title: {
            type: String
        },
    },
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        incrementCounter: function () {
            router.push({path:this.src})
        }
    },
})


/**
 *
 * bug 2018 01 01
 *
 * ELementUl
 *
 */
import { Message } from 'element-ui';
import ELEMENT from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
Vue.use(ELEMENT,{ zhLocale });


Vue.config.productionTip = false;

if (process.BROWSER_BUILD) {
    const VueAwesomeSwiper = require('vue-awesome-swiper/ssr');
    Vue.use(VueAwesomeSwiper)
}
router.beforeEach(({meta,path}, from, next) => {
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
            if(path === "/login" || path === '/Registered'){
                return  next({path:'/'});
            }
            if (path === '/AppPage/LooteryGame' || path === '/AppPage/LiveVideo' || path === '/AppPage/ElectronicGames' || path === '/AppPage/Sportsevents' || path === '/AppPage/KaiyuanChess') {
                store.dispatch("incrObtain",{id:0,data:{BType:"WALLET"}});
            }else if (path === '/deposit') {
                //************新增 2018 03 06**********//
                bug.ReQuest.call(this,{},"PlatformPay/paymentChannel", function (obj) {//新增 2018 03 06
                    bug.mask(false);
                    let objs=[];
                    if(obj.MBchannel){
                        for(let i = 0 ;i< obj.MBchannel.length;i++){
                            switch (Number(obj.MBchannel[i])) {
                                case 21:
                                    objs.push({title:'网银支付',text:"Online payment",type:'5',src:'/Recharge',icon:'x-icon x-icon-Online'}) ;
                                    break;
                                case 22 :
                                    objs.push({title:'扫码支付',text: "Scan Code",type:'18',src:'/ScanCode',icon:'x-icon x-icon-ScanCode'});
                                    break;
                                case 23 :
                                    objs.push({title:'微信支付',text: "Wechat transfer",type:'7',src:'/Recharge',icon:'x-icon x-icon-wechat'});
                                    break;
                                case 24 :
                                    objs.push({title:'支付宝支付',text: "Alipay transfer",type:'6',src:'/Recharge',icon:'x-icon x-icon-Alipay'});
                                    break;
                                case 25 :
                                    objs.push({title:'财付通支付',text: "TenPay transfer",type:'8',src:'/Recharge',icon:'x-icon x-icon-tenpay'});
                                    break;
                                case 26 :
                                    objs.push({title:'京东支付',text:'Jingdong pay',type:'12',src:'/Recharge',icon:'x-icon x-icon-Jingdong'});
                                    break;
                                case 27 :
                                    objs.push({title:'银联扫码',text:'UnionPay Code',type:'10',src:'/Recharge',icon:'x-icon x-icon-UnionPay'});
                                    break;
                                case 28 :
                                    objs.push({title:'银行汇款',text: "Bank tranfer",type:'16',src:'/information',icon:'x-icon x-icon-Banktranfer'});
                                    break;
                                case 29 :
                                    objs.push({title:'快捷支付',text: "Quick payment",type:'14',src:'/Recharge',icon:'x-icon x-icon-Quick'});
                                    break;
                                default:
                                    objs='';
                            }
                        }
                        store.dispatch('inceuserNew', {id: 14, data: objs});
                    }else{
                        store.dispatch('inceuserNew', {id: 14, data: ''});
                    }

                });
                //************新增 2018 03 06**********//
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
