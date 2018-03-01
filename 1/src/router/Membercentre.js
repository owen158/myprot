/**
 * Created by Administrator on 2017/6/16. Bug
 */
import store from '@/router/store'
import bug from "./public"
/**
 *  2017/10/14 17:01   Bug
 *  $BugPlaygame 游戏接口
 *  $BugLogin 登录接口 login.do
 *  $BugRegister 注册接口 User/register
 *  $BugNewdropOut 退出接口
 *  $BugNewPaymentList
 *  $BugNewWithDraw
 *  $BugNewAddCard  添加银行卡
 *  $BugNewdeletebank 删除银行卡
 *  $BugNewRefresh 刷新全部余额
 *  $BugNewtransfer  平台互转 User/TransferTo - User/TransferFrom
 *  $BugNewBankPay 在线支付  bk/BankPay.do
 *  $BugNewmodifylogin 修改登录密码  User/changePassword
 *  $BugNewchangeQkpwd 修改取款密码 User/changeQkpwd
 *  $BugAliPay  支付宝  Ys/aliPay.do
 *  $BugOrder 生成订单信息  /integral/generateOrder     没测试
 *  $BugAtion 修改资料 /XUser/personalInformation
 *  $Onekey    一键转入 、转出
 *  $BugTransOnekey 一键转入 、转出 'XUser/TransferFromOnekey' 'XUser/TransferFromOnekey'
 */
function year(el) {
    if(el < 10){
        return ('0' + el);
    }else{
        return el;
    }
}
export default{
    install(Vue,options){
        Vue.prototype.$datatboy=function (time) {
            let tody = new Date();
            let day = tody.getTime()- parseFloat(time) * 60 * 60 * 24;
            let t =  new Date(day);
            return t.getFullYear()+'-'+(year(t.getMonth()+1)) +'-'+ year(t.getDate())
        };
        Vue.prototype.$digital= function (val) {//验证数字类型
            if(isNaN(parseFloat(val))){
                return false;
            }else{
                return parseFloat(val)
            }
        };
        Vue.prototype.$ajax=function (objs,src,callback) {
            bug.ReQuest(objs,src,function (obj) {
                callback(obj)
            })
        };
        Vue.prototype.$BugPlaygame = function (vm,data,src) {
            let type = "";
            if(store.state.userNew.userMoney === ""){
                store.dispatch("incrObtain",{id:0,data:{BType:"WALLET"}});
            }
            if(data.gameType === "IGLOTTERY" || data.gameType === "IGLOTTO"){
                type = 'IG';
            }else if(data.gameType === "IGPJLOTTERY" || data.gameType === "IGPJLOTTO"){
                type = 'IGPJ';
            }else if(data.gameType === 'YOPLAY'){
                type = 'AGIN';
            }else{
                type = data.gameType;
            }
            bug.mask();
            bug.NewAjax.call(this,data,src,function (Obj) {
                bug.mask(false);
                if(Obj.msg == "error"){
                    vm.$alert( '系统错误', '系统提示框', {
                        dangerouslyUseHTMLString: true
                    });
                    store.dispatch("incrgamepop",{id:0,judgment:false});
                }else if(Obj.msg =='process'){
                    vm.$alert( '维护中', '系统提示框', {
                        dangerouslyUseHTMLString: true
                    });
                    store.dispatch("incrgamepop",{id:0,judgment:false});
                }else{
                    store.dispatch("incrObtain",{id:1,data:{BType:type}});
                    store.dispatch("incrgamepop",{id:0,judgment:true});
                    store.dispatch("incrgamepop",{id:2,src:Obj.msg});
                }
            });
        }
        Vue.prototype.$BugLogin = function (vm,data) {
            bug.mask();
            bug.ReQuest.call(this, {
                tname:store.state.userNew.cagent +data.tname,
                tpwd:data.tpwd,
                imgcode:data.imgcode,
                savelogin:1,
                isMobile:1
            },'login.do', function (Obj) {
                bug.mask(false);
                if(Obj.status === "faild"){
                    vm.$alert(Obj.errmsg, '系统提示', {
                        dangerouslyUseHTMLString: true
                    });
                    vm.LoginImg();
                    return;
                }else if(Obj.status === 'ok'){
                    store.dispatch("inceuserNew",{id:2,Login:true,userName:Obj.userName.substring(3),userkey:Obj.userKey,balance:Obj.balance});
                    return vm.$router.push({path:'/'});
                }
            })
        }
        Vue.prototype.$BugRegister = function (vm,data) {
            vm.$message.closeAll();
            bug.mask();
            data.proxyname=store.state.userNew.proxyname;
            data.cagent=store.state.userNew.cagent;
            data.reqkpwd=data.qkpwd;
            bug.ReQuest.call(this , {},'User/getToken',function (Objmsg) {
                data.reguuid = Objmsg.msg;
                bug.ReQuest.call(this,data,'User/register',function (Obj) {
                    var msg=Obj.msg;
                    bug.mask(false);
                    switch (msg) {
                        case '001':
                            vm.$alert('用户名为空', '系统提示', {
                                dangerouslyUseHTMLString: true
                            });
                            vm.LoginImg();
                            break;
                        case '002':
                            vm.$alert('用户名格式不正确', '系统提示', {
                                dangerouslyUseHTMLString: true
                            });
                            vm.LoginImg();
                            break;
                        case '003':
                            vm.$alert('手机号为空', '系统提示', {
                                dangerouslyUseHTMLString: true
                            });
                            vm.LoginImg()
                            break;
                        case '004':
                            vm.$alert('手机号不正确', '系统提示', {
                                dangerouslyUseHTMLString: true
                            });
                            vm.LoginImg()
                            break;
                        case '005':
                            vm.$alert('密码为空', '系统提示', {
                                dangerouslyUseHTMLString: true
                            });
                            vm.LoginImg()
                            break;
                        case '006':
                            vm.$alert('确认密码为空', '系统提示', {
                                dangerouslyUseHTMLString: true
                            });
                            vm.LoginImg()
                            break;
                        case '007':
                            vm.$alert('两次密码不一致', '系统提示', {
                                dangerouslyUseHTMLString: true
                            });
                            vm.LoginImg()
                            break;
                        case '008':
                            vm.$alert('密码格式不正确', '系统提示', {
                                dangerouslyUseHTMLString: true
                            });
                            vm.LoginImg()
                            break;
                        case '009':
                            vm.$alert('账号已存在', '系统提示', {
                                dangerouslyUseHTMLString: true
                            });
                            vm.LoginImg()
                            break;
                        case '010':
                            vm.$alert('reguuid为空,如有疑问联系在线客服', '系统提示', {
                                dangerouslyUseHTMLString: true
                            });
                            vm.LoginImg()
                            break;
                        case '011':
                            vm.$alert('图片验证码为空', '系统提示', {
                                dangerouslyUseHTMLString: true
                            });
                            vm.LoginImg()
                            break;
                        case '012':
                            vm.$alert('图片验证码错误', '系统提示', {
                                dangerouslyUseHTMLString: true
                            });
                            vm.LoginImg()
                            break;
                        case '013':
                            vm.$alert('取款密码为空', '系统提示', {
                                dangerouslyUseHTMLString: true
                            });
                            vm.LoginImg()
                            break;
                        case '014':
                            vm.$alert('确认取款密码为空', '系统提示', {
                                dangerouslyUseHTMLString: true
                            });
                            vm.LoginImg()
                            break;
                        case '015':
                            vm.$alert('两次取款密码不一致', '系统提示', {
                                dangerouslyUseHTMLString: true
                            });
                            vm.LoginImg()
                            break;
                        case '016':
                            vm.$alert('取款密码格式不正确', '系统提示', {
                                dangerouslyUseHTMLString: true
                            });
                            vm.LoginImg()
                            break;
                        case '017':
                            vm.$alert('取款密码不能与登录密码相同', '系统提示', {
                                dangerouslyUseHTMLString: true
                            });
                            vm.LoginImg()
                            break;
                        case 'success':
                            store.dispatch("inceuserNew",{id:2,Login:true,userName:Obj.userName,userkey:Obj.userKey,balance:Obj.balance});
                            vm.$message({
                                showClose: true,
                                message:'申请成功',
                                type: 'success'
                            });
                            vm.$router.push({path:'/'});
                            break;
                        case 'error':
                            vm.$alert('网络异常', '系统提示', {
                                dangerouslyUseHTMLString: true
                            });
                            vm.LoginImg()
                            break;
                    }
                })
            })
        }
        Vue.prototype.$BugNewdropOut=function (vm,data,src) {
            bug.mask()
            bug.NewAjax.call(this, data, src, function (obj) {
                bug.mask(false);
                store.dispatch("incrwaitionValue",false);
                store.dispatch("inceuserNew",{id:2,Login:false,userName:"",userkey:"",balance:""});
                vm.$router.push({path:'/LogIn'});
            })
        }
        Vue.prototype.$BugNewPaymentList = function (vm,data) {//新添加
            bug.mask();
            store.dispatch("inceuserNew",{id:7,judgment:false,err:"",PaymentList:""});
            bug.NewAjax.call(this,data,'PlatformPay/getPaymentList',function (obj) {
                bug.mask(false)
                if(obj.status === 'error'){
                    store.dispatch("inceuserNew",{id:7,judgment:false,err:obj.msg,PaymentList:""});
                    return vm.$router.push({path:store.state.bankcard.src});
                }else {
                    store.dispatch("inceuserNew",{id:7,judgment:true,err:obj.msg,PaymentList:obj.typeList});
                    return vm.$router.push({path:store.state.bankcard.src});
                }
            })
        }
        Vue.prototype.$BugNewWithDraw=function(vm,data){
            bug.mask()
            bug.NewAjax.call(this,data,'User/WithDraw',function (obj) {
                bug.mask(false);
                if(obj.msg == "success"){
                    store.dispatch("incrObtain",{id:0,data:{BType:"WALLET"}});
                    data.credit='';
                    data.password='';
                    vm.$message({
                        showClose: true,
                        message:'申请成功',
                        type: 'success'
                    });
                    return;
                }else{
                    data.credit='';
                    data.password='';
                    vm.$message({
                        showClose: true,
                        message:obj.msg,
                        type: 'error'
                    });
                }
            })
        }
        Vue.prototype.$BugNewAddCard=function (vm,data) {
            bug.mask();
            bug.NewAjax.call(this,data,'User/addUserCard',function (obj) {
                bug.mask(false);
                if(obj.msg == 'success'){
                    store.dispatch("inceuserNew",{id:10,judgment:true});
                    vm.$message({
                        showClose: true,
                        message:'添加成功',
                        type: 'success'
                    });
                    vm.$router.push({path:'/userBankCard'});
                }else{
                    vm.addtext.password='';
                    vm.$alert(obj.msg, '系统提示', {
                        dangerouslyUseHTMLString: true
                    });
                }
            })
        }
        Vue.prototype.$BugNewdeletebank=function(vm,data) {
            bug.mask();
            bug.NewAjax.call(this,data,'User/delUserCard',function (obj) {
                bug.mask(false);
                if(obj.msg == "success"){
                    store.dispatch("inceuserNew",{id:9,cardNum:""});
                    store.dispatch("inceuserNew",{id:10,judgment:false});
                    vm.$message({
                        showClose: true,
                        message:'删除成功',
                        type: 'success'
                    });
                    vm.ctpop=false;
                    vm.userId.password="";
                    return vm.$router.push({path:'/userCapitalPwd'});
                }else{
                    vm.userId.password="";
                    vm.$alert(obj.msg, '系统提示', {
                        dangerouslyUseHTMLString: true
                    });
                }
            })
        }
        Vue.prototype.$BugNewRefresh= function(vm,data,el){
            bug.ReQuest.call(this, data,'User/getBalance', function (obj) {
                if(obj.balance == '维护中'){
                    el.innerHTML= '维护中'
                }else{
                    el.innerHTML=parseFloat(obj.balance).toFixed(2)+" "+"元"
                }
            })
        }
        Vue.prototype.$BugNewtransfer=function (vm,data,src) {
            bug.mask();
            bug.NewAjax.call(this,data,src,function (obj) {
                bug.mask(false);
                var  Num = obj.msg;
                switch (Num) {
                    case '01':
                        vm.$message({
                            showClose: true,
                            message:'转账平台错误',
                            type: 'error'
                        });
                        vm.LoginImg();
                        break;
                    case '02':
                        vm.$message({
                            showClose: true,
                            message:'转账金额错误',
                            type: 'error'
                        });
                        vm.LoginImg();
                        break;
                    case '03':
                        vm.$message({
                            showClose: true,
                            message:'token验证失败,如有疑问，请咨询客服',
                            type: 'error'
                        });
                        vm.LoginImg();
                        break;
                    case "04":
                        vm.$message({
                            showClose: true,
                            message:'图形验证码错误',
                            type: 'error'
                        });
                        vm.LoginImg();
                        break;
                    case "05":
                        vm.$message({
                            showClose: true,
                            message:'转账未完成,请稍后再试',
                            type: 'error'
                        });
                        vm.LoginImg();
                        break;
                    case "06":
                        vm.$message({
                            showClose: true,
                            message:'余额不足',
                            type: 'error'
                        });
                        vm.LoginImg();
                        break;
                    case "07":
                        vm.$message({
                            showClose: true,
                            message:'钱包查询出错',
                            type: 'error'
                        });
                        vm.LoginImg();
                        break;
                    case "error":
                        vm.$message({
                            showClose: true,
                            message:'系统错误,请稍后再试',
                            type: 'error'
                        });
                        vm.LoginImg();
                        break;
                    case "success":
                        vm.$message({
                            showClose: true,
                            message:'转账成功',
                            type: 'success'
                        });
                        store.dispatch("incrObtain",{id:0,data:{BType:"WALLET"}});
                        vm.tran={credit:'', type:'', imgcode:'', uuid:''};
                        vm.TypeInquireAll();
                        vm.LoginImg();
                        break;
                    case "process":
                        vm.$message({
                            showClose: true,
                            message:'维护中',
                            type: 'error'
                        });
                        vm.LoginImg();
                        break;
                }
            })
        }
        Vue.prototype.$BugNewBankPay=function (vm,data) {
            bug.mask();
            bug.NewAjax.call(this,data,'bk/BankPay.do',function (obj) {
                bug.mask(false);
                if(obj.status == 'success'){
                    data.name= "";
                    data.amount = "";
                    data.account = "";
                    data.type='';
                    data.caijin='';
                    data.ctime= vm.GetDateT();
                    vm.$confirm('提交成功！如有疑问，请及时联系在线客服确认存款信息，谢谢！', '系统提示', {
                        confirmButtonText: '联系在线客服',
                        cancelButtonText: '知道了',
                        type: 'warning'
                    }).then(() => {
                        vm.$router.push({path:'/NoteSingle'});
                    }).catch(() => {
                    });
                }else if(obj.status == 'faild'){
                    vm.$message({
                        showClose: true,
                        message:'失败,如有疑问，请联系在线客服',
                        type: 'error'
                    });
                }else{
                    vm.$message({
                        showClose: true,
                        message:obj.Msg,
                        type: 'error'
                    });
                }
            })
        };
        Vue.prototype.$BugNewmodifylogin=function (vm,data) {
            bug.mask();
            bug.NewAjax.call(this,data,"User/changePassword",function (obj) {
                bug.mask(false);
                if(obj.msg == "success"){
                    data.password='';
                    data.npassword='';
                    data.renpassword = "";
                    vm.$alert( '修改成功', '系统提示', {
                        dangerouslyUseHTMLString: true
                    });
                    return;
                }else{
                    vm.$alert( obj.msg, '系统提示', {
                        dangerouslyUseHTMLString: true
                    });
                }
            })
        }
        Vue.prototype.$BugNewchangeQkpwd = function(vm,data){//修改取款密码
            bug.mask();
            bug.NewAjax.call(this,data,"User/changeQkpwd",function (obj) {
                bug.mask(false);
                if(obj.msg == "success"){
                    data.password='';
                    data.npassword = '';
                    data.renpassword = "";
                    vm.$alert( '修改成功', '系统提示', {
                        dangerouslyUseHTMLString: true
                    });
                    return;
                }else{
                    vm.bankpass={password:'', npassword:'', renpassword:''};
                    vm.$alert(obj.msg, '系统提示', {
                        dangerouslyUseHTMLString: true
                    });
                }
            })
        }
        Vue.prototype.$getOrder=function (vm,data) {
            bug.mask();
            bug.NewAjax.call(this,data,'alipayPaymentScanCode/getOrder',function (obj) {
                bug.mask(false);
                if(data.status === "success"){
                    data.amount = '';
                    data.orderNum = '';
                    vm.$confirm('提交成功！如有疑问，请及时联系在线客服确认存款信息，谢谢！', '系统提示', {
                        confirmButtonText: '联系在线客服',
                        cancelButtonText: '知道了',
                        type: 'warning'
                    }).then(() => {
                        vm.$router.push({path:'/NoteSingle'});
                    }).catch(() => {
                    });
                    return;
                }else{
                    vm.$message({
                        showClose: true,
                        message:obj.msg,
                        type: 'error'
                    });
                    return;
                }
            });
        }
        Vue.prototype.$BugAliPay= function(vm,data){
            bug.mask();
            bug.NewAjax.call(this, data,'PlatformPay/scanPay', function (obj) {
                bug.mask(false);
                vm.$store.dispatch("incrpaydata",'');
                if(obj.status== 'success'){
                    vm.$store.dispatch("incealipayscanpaynum",0);
                    vm.$store.dispatch("incealipayscanpay",null);
                    if(obj.res_type == '1'){
                        vm.$store.dispatch("incealipayscanpaynum",1);
                        if(obj.html != undefined || obj.html != ""){
                            obj.html = obj.html.replace(/<body/gi, '<div')
                            obj.html = obj.html.replace(/body>/gi, 'div>')
                            vm.$store.dispatch("incealipayscanpay",obj.html);
                        }
                        vm.$router.push({path:'/AlipayscanPay'})
                        return
                    }
                    if(obj.res_type == '2'){
                        vm.$store.dispatch("incealipayscanpaynum",2);
                        obj.user_name = obj.user_name.substring(3);
                        vm.$store.dispatch("incealipayscanpay",obj);
                        vm.$router.push({path:'/AlipayscanPay'})
                        return
                    }
                    if(obj.res_type == '3'){
                        vm.$store.dispatch("incealipayscanpaynum",3);
                        obj.user_name = obj.user_name.substring(3);
                        vm.$store.dispatch("incealipayscanpay",obj);
                        vm.$router.push({path:'/AlipayscanPay'})
                        return
                    }else if(obj.res_type == '4'){
                        window.location.href=obj.html;
                        return;
                    }
                }else{
                    vm.$message({
                        showClose: true,
                        type:'error',
                        message: obj.msg
                    });
                }
            })
        }
        Vue.prototype.$BugAtion = function (vm,data) {
            bug.mask();
            bug.NewAjax.call(this,data,'/XUser/personalInformation',function (obj) {
                bug.mask(false)
                if(obj.status === 'success'){
                    vm.$alert( "保存成功", '系统提示', {
                        dangerouslyUseHTMLString: true
                    });
                    data.userName ="";
                    data.mobile = "";
                    data.email= "";
                    data.rmk = "";
                    return;
                }else{
                    vm.$alert( obj.msg, '系统提示', {
                       dangerouslyUseHTMLString: true
                    });
                }
            })
        }
    }
}
