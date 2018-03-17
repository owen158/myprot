/**
 * Created by Administrator on 2017/6/8.
 */
import store from '@/router/store'
export default{
    install(Vue,options){
        Vue.prototype.$ajax=function (vm,Fata,url,callback) {//页面跳转
            vm.$http.post(url,Fata)
                .then(function (response) {
                    callback(response.data)
                })
                .catch(function (error) {
                    callback('错误')
                });
        };
        //登录
        Vue.prototype.$login = function (vm,data,src) {
            let t= this;
            t.$loginaction.call(this,data,function (err) {
                if(err){
                    vm.LoginImg();
                    store.dispatch("incesystemtext",err);
                    store.dispatch("inceation",'1');
                    return;
                }
                data.tname = store.state.cagent+ data.tname;
                t.$ajax.call(this,vm,data,src,function (obj) {
                    if(obj.status === "faild"){
                        store.dispatch("incesystemtext",obj.errmsg);
                        store.dispatch("inceation",'1');
                        return;
                    }else{
                        store.dispatch("incelogin",true);
                        store.dispatch('inceuser',{id:'1',userName:obj.userName,userMoney:obj.balance});
                        return vm.$router.push({path:'/'});
                    }
                })
            })
        };
        // 注册
        Vue.prototype.$register = function (vm,data,src) {
            let t= this;
            t.$registeredaction.call(this,data,function (err) {
                if(err){
                    vm.LoginImg();
                    store.dispatch("incesystemtext",err);
                    store.dispatch("inceation",'1');
                    return;
                }
                t.$ajax.call(this,vm,{},'User/getToken',function (token) {
                    data.cagent = store.state.cagent;
                    data.reqkpwd = data.qkpwd;
                    data.reguuid = token.msg;
                    t.$ajax.call(this,vm,data,src,function (obj) {
                        switch (obj.msg) {
                            case '001':
                                store.dispatch("incesystemtext",'用户名为空');
                                store.dispatch("inceation",'1');
                                vm.LoginImg();
                                break;
                            case '002':
                                store.dispatch("incesystemtext",'用户名格式不正确');
                                store.dispatch("inceation",'1');
                                vm.LoginImg();
                                break;
                            case '003':
                                store.dispatch("incesystemtext",'手机号为空');
                                store.dispatch("inceation",'1');
                                vm.LoginImg();
                                break;
                            case '004':
                                store.dispatch("incesystemtext",'手机号不正确');
                                store.dispatch("inceation",'1');
                                vm.LoginImg();
                                break;
                            case '005':
                                store.dispatch("incesystemtext",'密码为空');
                                store.dispatch("inceation",'1');
                                vm.LoginImg();
                                break;
                            case '006':
                                store.dispatch("incesystemtext",'确认密码为空');
                                store.dispatch("inceation",'1');
                                vm.LoginImg();
                                break;
                            case '007':
                                store.dispatch("incesystemtext",'两次密码不一致');
                                store.dispatch("inceation",'1');
                                vm.LoginImg();
                                break;
                            case '008':
                                store.dispatch("incesystemtext",'密码格式不正确');
                                store.dispatch("inceation",'1');
                                vm.LoginImg();
                                break;
                            case '009':
                                store.dispatch("incesystemtext",'账号已存在');
                                store.dispatch("inceation",'1');
                                vm.LoginImg();
                                break;
                            case '010':
                                store.dispatch("incesystemtext",'reguuid为空,如有疑问联系在线客服');
                                store.dispatch("inceation",'1');
                                vm.LoginImg();
                                break;
                            case '011':
                                store.dispatch("incesystemtext",'图片验证码为空');
                                store.dispatch("inceation",'1');
                                vm.LoginImg();
                                break;
                            case '012':
                                store.dispatch("incesystemtext",'图片验证码错误');
                                store.dispatch("inceation",'1');
                                vm.LoginImg();
                                break;
                            case '013':
                                store.dispatch("incesystemtext",'取款密码为空');
                                store.dispatch("inceation",'1');
                                vm.LoginImg();
                                break;
                            case '014':
                                store.dispatch("incesystemtext",'确认取款密码为空');
                                store.dispatch("inceation",'1');
                                vm.LoginImg();
                                break;
                            case '015':
                                store.dispatch("incesystemtext",'两次取款密码不一致');
                                store.dispatch("inceation",'1');
                                vm.LoginImg();
                                break;
                            case '016':
                                store.dispatch("incesystemtext",'取款密码格式不正确');
                                store.dispatch("inceation",'1');
                                vm.LoginImg();
                                break;
                            case '017':
                                store.dispatch("incesystemtext",'取款密码不能与登录密码相同');
                                store.dispatch("inceation",'1');
                                vm.LoginImg();
                                break;
                            case 'success':
                                store.dispatch("incelogin",true);
                                store.dispatch("incesystemtext",'注册成功');
                                store.dispatch("inceation",'1');
                                store.dispatch('inceuser',{id:'4',userName:obj.userName,userMoney:obj.balance,token:obj.userKey});
                                vm.$router.push({path:'/'});
                                break;
                            case 'error':
                                store.dispatch("incesystemtext",'网络异常');
                                store.dispatch("inceation",'1');
                                vm.LoginImg();
                                break;
                        }
                    })
                })
            })
        }
        Vue.prototype.$balance = function (vm,data,src) {
            let t = this;
            t.$ajax.call(this,vm,data,src,function (obj) {
                if(obj.balance == '维护中'){
                    if(data.BType === "WALLET"){
                        store.dispatch('inceuser',{id:'3',userMoney:'维护中'});
                    }else{
                        store.dispatch('inceuser',{id:'4',gameMoney:'维护中'});
                    }
                }else{
                    if(data.BType === "WALLET"){
                        store.dispatch('inceuser',{id:'3',userMoney:parseFloat(obj.balance).toFixed(2)});
                    }else{
                        store.dispatch('inceuser',{id:'4',gameMoney:parseFloat(obj.balance).toFixed(2)});
                    }
                }
            })
        }
        Vue.prototype.$palyGame=function (vm,data,src) {
            let t = this;
            t.$ajax.call(this,vm,{},'checklogin.do',function (check) {
                if(check === "错误"){
                    store.dispatch("inceonloadding",false);
                }else if(check.msg == "faild"){
                    store.dispatch("inceonloadding",false);
                    return vm.$router.push({path:'/login'})
                }else if(check.msg == "islogin"){
                    store.dispatch("inceonloadding",false);
                    return vm.$router.push({path:'/login'})
                }else if(check.msg == "success"){
                    t.$balance(vm,{BType:'WALLET'},'User/getBalance');
                    t.$ajax.call(this,vm,data,src,function (obj) {
                        if(obj === "错误"){
                            store.dispatch("inceonloadding",false);
                        }else if(obj.msg == "error"){
                            store.dispatch("inceonloadding",false);
                            store.dispatch("incesystemtext",'系统错误');
                            store.dispatch("inceation",'1');
                        }else if(obj.msg =='process'){
                            store.dispatch("inceonloadding",false);
                            store.dispatch("incesystemtext",'维护中');
                            store.dispatch("inceation",'1');
                        }else{
                            let BType;
                            store.dispatch("inceonloadding",false);
                            if(data.gameType === "IGLOTTERY" || data.gameType === "IGLOTTO" ){
                                BType = 'IG'
                            }else if(data.gameType === 'IGPJLOTTERY' || data.gameType === "IGPJLOTTO" ){
                                BType = 'IGPJ'
                            }else{
                                BType = data.gameType
                            }
                            t.$balance(vm,{BType:BType},'User/getBalance');
                            store.dispatch('inceuser',{id:'7',src:obj.msg,judgment:true});
                        }
                    });
                }
            })
        }
        // 获取网银列表   Deposits
        Vue.prototype.$getPaymentList = function (vm,data,src) {
            let t = this;
            t.$ajax.call(this,vm,data,src,function (obj) {
                if(obj === "错误"){
                    store.dispatch("incesystemtext",'支付接口暂停使用');
                    store.dispatch("inceation",'1');
                    return;
                }else if(data.status === 'error'){
                    store.dispatch("incesystemtext",obj.msg);
                    store.dispatch("inceation",'1');
                    return;
                }else{
                    store.dispatch("inceRecharge",{id:data.type,data:obj.typeList});
                    vm.$router.push({path:'/Recharge'})
                }
            })
        }
    }
}