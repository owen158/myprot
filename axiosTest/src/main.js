// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import qs from 'qs'
import axios from 'axios'
import validation from '@/components/Public/validation'
Vue.use(validation);
import start from '@/components/public/start'

import store from '@/router/store'
import '../static/css/reset.css'
// import '../static/css/style.less'
import '../static/css/iconfont.css'
import '../static/css/icon.css'
import '../static/js/head'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.transformRequest = [function(data) {
    return qs.stringify(data)
}];
Vue.prototype.$http = axios;
axios.defaults.baseURL =store.state.userNew.jrg;
// axios



Vue.config.productionTip = false;
router.beforeEach(({meta,path}, from, next) => {
    // if(path != '/LooteryGame' || path != '/AllColor' || path != '/LowColor' ){
    //     store.dispatch("inceonloadding",true);
    // }
    let page =  !!meta.requiresAuth;
    axios.get('checklogin.do')
        .then(function (response) {
            let msg = response.data.msg;
            if(msg === "faild"){
                store.dispatch("incelogin",false);
                if(page === true){
                    return  next({path: '/login' });
                }else{
                    return  next();
                }
            }else if(msg === "islogin"){
                store.dispatch("incelogin",false);
                if(page === true){
                    return  next({path: '/login' });
                }else{
                    return  next();
                }
            }else{
                store.dispatch("incelogin",true);
                store.dispatch('inceuser',{id:'2',userName:response.data.userName,token:response.data.userkey});
                return  next();
            }
        })
        .catch(function (error) {
        // if(store.state.login === null){
        //     return  next({path: '/login' });
        // }
    });
    return  next();
});
Vue.use(start);//管理响应

/* eslint-disable no-new */
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
    setTimeout(function () {
        store.dispatch("inceonloadding",false);
    },500)
});
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});

