// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'babel-polyfill' //e6~e5 兼容
import router from './router'

import VueCookies from 'vue-cookies'
Vue.use(VueCookies);

import store from '@/router/store'
import VueQriously from 'vue-qriously'
//轮播
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Membercentre from './components/MemberCentre/js/Membercentre'
import validation from './components/public/validation'
import ElementUI from "element-ui";
// import ELEMENT from 'element-ui'
// import "element-ui/lib/"
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import 'element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/theme-chalk/display.css';
import {Message} from 'element-ui';
// Vue.use(ELEMENT, {zhLocale});
Vue.use(ElementUI, {zhLocale});
import '../static/css/reset.css'
import '../static/css/public.less'
import '../static/css/iconfont.css'
import bug from "./router/public"

Vue.config.productionTip = false;

Vue.use(validation); //验证
Vue.use(VueQriously);
Vue.use(VueAwesomeSwiper); //轮播
Vue.use(Membercentre) //个人中心
if (process.BROWSER_BUILD) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/ssr');
  Vue.use(VueAwesomeSwiper)
}
router.beforeEach(({meta, path}, from, next) => {
  if (path === "/discount") { //优惠轮播
    store.dispatch("incrObtain", {id: 7, data: {type: 2, cagent: store.state.userNew.cagent}});
  }
  if(path === '/AppPage'){
      store.dispatch("incrObtain", {id: 6});
  }
  if (meta.requiresAuth === true) {
    bug.ReQuest.call(this, {}, store.state.userNew.jrg + 'checklogin.do', function (data) {
      if (data.msg == "faild") {
        store.dispatch('inceuserNew', {id: 0, Login: false});
        return next({path: '/Login'});
      } else if (data.msg == "islogin") {
        store.dispatch('inceuserNew', {id: 0, Login: false});
        return next({path: '/Login'});
      } else if (data.msg == "success") {
        store.dispatch('inceuserNew', {id: 1, Login: true, userkey: data.userkey, userName: data.userName});
        if(path === "/login" || path === '/Registered'){
            return next({path: '/'});
        }
        var srcH = [
              {id:5,src:'/Online'},
              {id:6,src:'/Alipay'},
              {id:7,src:'/Wechat'},
              {id:8,src:'/TenPay'},
              {id:10,src:'/BankScanCode'},
              {id:12,src:'/jdsm'},
              {id:14,src:'/kuaiJie'},
              {src:'/ScanCodebankAlipay'},
              {src:'/information'},
              {src:'/Lottery'},
          ];
        srcH.forEach(function(e,index){
          if(e.src === path){
              var objs = [];
              if(index < 7){
                  bug.ReQuest({
                      type: e.id
                  }, store.state.userNew.jrg + 'PlatformPay/getPaymentList', function (obj) {
                      if (obj.status === 'error') {
                          store.dispatch("inceuserNew", {id: 7, judgment: false, err: obj.msg, PaymentList: ''});
                          return;
                      } else {
                          store.dispatch("inceuserNew", {id: 7, judgment: true, err: obj.msg, PaymentList: obj.typeList});
                      }
                  })
              }
              if(store.state.bankcard.PlatformPay === '') {
                  bug.ReQuest.call(this, {}, store.state.userNew.jrg + "PlatformPay/paymentChannel", function (obj) {
                      if (typeof obj.MBchannel != 'undefined' || obj.MBchannel.length != 0) {
                          for (let i = 0; i < obj.MBchannel.length; i++) {
                              for (var r = 0; r < store.state.bankcard.charge.length; r++) {
                                  if (store.state.userNew.applet === false) {
                                      if (obj.MBchannel[i] === 21) continue;
                                  }
                                  if (obj.MBchannel[i] === store.state.bankcard.charge[r].sum) {
                                      objs.push(store.state.bankcard.charge[r].list);
                                      break;
                                  }
                              }
                          }
                          store.dispatch('inceuserNew', {id: 14, data: objs});
                          if (objs[0].url != '/Online') {
                              return next({path: objs[0].url});
                          }
                      } else {
                          store.dispatch('inceuserNew', {id: 14, data: ''});
                      }
                  });
              }

            }
        });

        if(path === "/information"){
          bug.ReQuest.call(this,{},store.state.userNew.jrg + "bk/getBankList.do", function (obj){
            if(obj[0].cardno){
                store.dispatch('inceuserNew', {id: 15,card:obj});
            }else{
                store.dispatch('inceuserNew', {id: 15, card:''});
            }
          })
        }
        if (path === "/ScanCodebankAlipay" || path === "/ScanCodebankWechat" || path === "/ScanCodebankTenPay") { // 存款
          let type = "";
          if (path === "/ScanCodebankAlipay") {
            type = 1;
          }
          if (path === "/ScanCodebankWechat") {
            type = 2;
          }
          if (path === "/ScanCodebankTenPay") {
            type = 3;
          }
          store.dispatch("incrObtain", {id: 4, type: type});
        }
        if (path === '/capitalRecord') { //资金记录
          let objs = {
            pageSize: 5,
            pageNo: 1,
            bdate: '',
            edate: '',
            Type: '',
            status: ''
          };
          objs.bdate = bug.datatboy('0');
          objs.edate = bug.datatboy('0');
          store.dispatch("recording", {id: 0, data: objs});
        }
        if (path === "/bettingRecord") { // 投注记录
          let objs = {
            pageSize: 5,
            pageNo: 1,
            bdate: '',
            edate: '',
            type: 'ALL'
          };
          objs.bdate = bug.datatboy('0');
          objs.edate = bug.datatboy('0');
          store.dispatch("recording", {
            id: 2,
            data: objs
          });
        }
        if (path === "/TransferRecords") { //转账记录
          let objs = {
            pageSize: 5,
            pageNo: 1,
            bdate: '',
            edate: '',
            Type: '',
            Ttype: ''
          };
          objs.bdate = bug.datatboy('0');
          objs.edate = bug.datatboy('0');
          store.dispatch("recording", {
            id: 4,
            data: objs
          });
        }
        if (path === "/rechargeRecord") {
          let objs = {
            pageSize: 5,
            pageNo: 1,
            type: '0',
            startTime: "",
            endTime: ""
          };
          objs.startTime = bug.datatboy('0');
          objs.endTime = bug.datatboy('0');
          store.dispatch("recording", {
            id: 6,
            data: objs
          });
        }
        if (path === "/withdrawRecord") {
          let objs = {
            pageSize: 5,
            pageNo: 1,
            bdate: '',
            edate: '',
            status: ''
          };
          objs.bdate = bug.datatboy('0');
          objs.edate = bug.datatboy('0');
          store.dispatch("recording", {
            id: 8,
            data: objs
          });
        }
        if (path === "/userSettings") {
          store.dispatch("incrObtain", {
            id: 2
          });
          store.dispatch("incrObtain", {
            id: 3
          });
          store.dispatch("incrObtain", {
            id: 5
          });
        }
        if (path === "/phone") {
          store.dispatch("incrObtain", {
            id: 5
          });
        }
        if (path === "/modifybankpass") {
          store.dispatch("incrObtain", {
            id: 3
          });
        }
        if (path === '/Withdrawals') { //
          store.dispatch("incrObtain", {
            id: 0
          });
        }
        if (path === "/userBankCard") { //
          store.dispatch("incrObtain", {
            id: 2
          });
        }

        if (path === "/gameLimit") { //
          store.dispatch("incrObtain", {
            id: 5
          });
        }
        if (path === "/MemberCentre") {
          store.dispatch("incrObtain", {
            id: 7,
            data: {
              type: 2,
              cagent: bug.cagent
            }
          });
          store.dispatch("incrObtain", {
            id: 1
          });
        }
        if (path === "/assetsOverview") {
          store.dispatch("incrObtain", {
            id: 1
          });
        }
        return next();
      }
    });
  } else {
    bug.ReQuest.call(this, {}, store.state.userNew.jrg + 'checklogin.do', function (data) {
      if (data.msg == "faild") {
        store.dispatch('inceuserNew', {
          id: 0,
          Login: false
        });
      } else if (data.msg == "islogin") {
        store.dispatch('inceuserNew', {
          id: 0,
          Login: false
        });
      } else if (data.msg == "success") {
        store.dispatch('inceuserNew', {
          id: 1,
          Login: true,
          userkey: data.userkey,
          userName: data.userName
        });
      }
    });
    return next();
  }

  return next();
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
  components: {
    App
  }
});
