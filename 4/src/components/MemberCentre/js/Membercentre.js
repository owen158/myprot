/**
 * Created by Administrator on 2017/6/16. Bug
 */



import store from '@/router/store'
import bug from "../../../router/public"
/**
 *  2017/12/12 17:01   Bug
 *  $BugPlaygame 游戏接口
 *  $BugLogin 登录接口 login.do
 *  $BugRegister 注册接口 User/register
 *  $sendRegirstCode 短信验证
 *  $sendRegirstCode 短信注册登录
 *  $phonelogin 短信登录
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
 *  $sendRegirstCode 发送手机验证码    2017/12/08
 *  $                手机注册      2017/12/08    /Mobile/register.do
 */

export default {
  install(Vue, options) {
    Vue.prototype.$time = function (time) {
      return bug.datatboy(time);
    }
    Vue.prototype.$ajaxs = function () {
      bug.ReQuest.call(this, {}, store.state.userNew.jrg + 'checklogin.do', function (data) {
        if (data.msg === "faild") {} else if (data.msg === "islogin") {} else if (data.msg === "success") {
          return vm.$router.push({
            path: '/'
          });
        }
      })

    };
    // 2017/12/5 new 跳转
    Vue.prototype.$BugGameLink = function (vm, callback) { //new
      bug.ReQuest({}, store.state.userNew.jrg + 'checklogin.do', function (data) {
        if (data.msg === "faild") {
          return vm.$router.push({
            path: '/Login'
          });
        } else if (data.msg === "islogin") {
          return vm.$router.push({
            path: '/Login'
          });
        } else if (data.msg === "success") {
          return callback();
        }
      })
    }
    // 2017/12/5 new 进入游戏
    Vue.prototype.$BugPlaygame = function (vm, data, src) { //new
      bug.mask();
        var NewPage;
        // if(store.state.userNew.browser === true){
        //     NewPage = window.open("about:blank",data.gameType,"");
        // }
      bug.ajax.call(this, data, src, function (Obj) {
        bug.mask(false);
        if (Obj.msg == "error") {
          vm.$message.closeAll();
          vm.$message({
            showClose: true,
            message: '系统错误',
            type: 'error'
          });
          store.dispatch("incrgamepop", {
            id: 0,
            judgment: false
          });
                // if(store.state.userNew.browser === true){
                //     NewPage.close();
                // }
        } else if (Obj.msg == 'process') {
          vm.$message.closeAll();
          vm.$message({
            showClose: true,
            message: '维护中',
            type: 'error'
          });
          store.dispatch("incrgamepop", {id: 0, judgment: false});
                // if(store.state.userNew.browser === true){
                //     NewPage.close();
                // }
        } else {
            // if(store.state.userNew.browser === true){
            //         NewPage.location.href = Obj.msg;
            // }else{
                window.location.href = Obj.msg;
            // }

        }
      });
    }
    // 2017/12/5 new 登录
    Vue.prototype.$BugLogin = function (vm, data) {
      bug.logination.call(this, data, function (err) {
        if (err) {
          vm.$message({
            showClose: true,
            message: err,
            type: 'error'
          });
          return;
        }
        bug.mask();
        bug.ReQuest.call(this, {
          tname: store.state.userNew.cagent + data.tname,
          tpwd: data.tpwd,
          imgcode: data.imgcode,
          savelogin: 1,
          isMobile: 1,
          isImgCode: '0',
        }, store.state.userNew.jrg + 'login.do', function (Obj) {
          bug.mask(false);
          if (Obj.status === 'ok') {
            store.dispatch("inceuserNew", {
              id: 2,
              Login: true,
              userName: Obj.userName.substring(3),
              userkey: Obj.userKey,
              balance: Obj.balance
            });
            vm.$message({
              showClose: true,
              message: '已登录',
              type: 'success'
            });
            return vm.$router.push({
              path: '/'
            });
          } else if (Obj.status === "faild") {
            vm.$message({
              showClose: true,
              message: Obj.errmsg,
              type: 'error'
            });
            return;
          } else {
            vm.$message({
              showClose: true,
              message: Obj.msg,
              type: 'error'
            })
          }
        })
      })
    }
    // 2017/12/5 new 注册
    Vue.prototype.$BugRegister = function (vm, data) { //new
      bug.registeration.call(this, data, function (err) {
        if (err) {
          vm.LoginImg();
          vm.$message({
            showClose: true,
            message: err,
          })
          return;
        }
        bug.mask();
        // data.realName='会员';
        // data.repassWord = data.passWord;
        // data.proxyname=store.state.userNew.proxyname;
        // data.cagent=store.state.userNew.cagent;
        bug.ReQuest.call(this, {}, store.state.userNew.jrg + 'User/getToken', function (Objmsg) {
          data.reguuid = Objmsg.msg;
          bug.ReQuest.call(this, {
            userName: data.userName, //用户名
            passWord: data.passWord, //密码
            repassWord: data.passWord, //确认密码
            mobileNo: data.mobileNo, //手机号
            imgcode: data.imgcode, //验证码
            reguuid: data.reguuid, //token
            qkpwd: data.qkpwd, //取款密码
            reqkpwd: data.qkpwd, //确认取款密码
            realName: '会员', //真实姓名
            cagent: store.state.userNew.cagent, //字段
            isMobile: 1, //类型
            proxyname: store.state.userNew.proxyname,
            remark: 'weixin:' + data.remark
          }, store.state.userNew.jrg + 'User/register', function (Obj) {
            var msg = Obj.msg;
            bug.mask(false);
            switch (msg) {
              case '001':
                vm.$message({
                  showClose: true,
                  message: '用户名为空',
                  type: 'error'
                })
                vm.LoginImg();
                break;
              case '002':
                vm.$message({
                  showClose: true,
                  message: '用户名格式不正确',
                  type: 'error'
                })
                vm.LoginImg();
                break;
              case '003':
                vm.$message({
                  showClose: true,
                  message: '手机号为空',
                  type: 'error'
                })
                vm.LoginImg()
                break;
              case '004':
                vm.$message({
                  showClose: true,
                  message: '手机号不正确',
                  type: 'error'
                })
                vm.LoginImg()
                break;
              case '005':
                vm.$message({
                  showClose: true,
                  message: '密码为空',
                  type: 'error'
                })
                vm.LoginImg()
                break;
              case '006':
                vm.$message({
                  showClose: true,
                  message: '确认密码为空',
                  type: 'error'
                })
                vm.LoginImg()
                break;
              case '007':
                vm.$message({
                  showClose: true,
                  message: '两次密码不一致',
                  type: 'error'
                })
                vm.LoginImg()
                break;
              case '008':
                vm.$message({
                  showClose: true,
                  message: '密码格式不正确',
                  type: 'error'
                })
                vm.LoginImg()
                break;
              case '009':
                vm.$message({
                  showClose: true,
                  message: '账号已存在',
                  type: 'error'
                })
                vm.LoginImg()
                break;
              case '010':
                vm.$message({
                  showClose: true,
                  message: 'reguuid为空,如有疑问联系在线客服',
                  type: 'error'
                })
                vm.LoginImg()
                break;
              case '011':
                vm.$message({
                  showClose: true,
                  message: '图片验证码为空',
                  type: 'error'
                })
                vm.LoginImg()
                break;
              case '012':
                vm.$message({
                  showClose: true,
                  message: '图片验证码错误',
                  type: 'error'
                })
                vm.LoginImg()
                break;
              case '013':
                vm.$message({
                  showClose: true,
                  message: '取款密码为空',
                  type: 'error'
                })
                vm.LoginImg()
                break;
              case '014':
                vm.$message({
                  showClose: true,
                  message: '确认取款密码为空',
                  type: 'error'
                })
                vm.LoginImg()
                break;
              case '015':
                vm.$message({
                  showClose: true,
                  message: '两次取款密码不一致',
                  type: 'error'
                })
                vm.LoginImg()
                break;
              case '016':
                vm.$message({
                  showClose: true,
                  message: '取款密码不能与登录密码相同',
                  type: 'error'
                })
                vm.LoginImg()
                break;
              case '017':
                vm.LoginImg()
                break;
              case 'success':
                store.dispatch("inceuserNew", {
                  id: 2,
                  Login: true,
                  userName: Obj.userName,
                  userkey: Obj.userKey,
                  balance: Obj.balance
                });
                vm.$message({
                  showClose: true,
                  message: '注册成功,已登录',
                  type: 'success'
                });
                vm.$router.push({
                  path: '/'
                });
                break;
              case 'error':
                vm.$message({
                  showClose: true,
                  message: '网络异常',
                  type: 'error'
                });
                vm.LoginImg();
                break;
            }
          })
        })
      })
    }
    // 2017/12/5 new 短信验证
    Vue.prototype.$sendRegirstCode = function (vm, data, src) {
      if (!bug.mobile.test(Number(data.mobileNo))) {
        vm.$message({
          showClose: true,
          message: "手机号格式有误",
          // type: 'error'
        })
        return;
      }
      let timeNum = 59;
      var timer = null;
      data.cagent = store.state.userNew.cagent;
      bug.mask()
      bug.ReQuest.call(this, data, store.state.userNew.jrg + src, function (obj) {
        bug.mask(false)
        vm.phoneObj.judgment = true;
        if (obj.msg === 'success') {
          vm.phoneObj.judgment = true;
          timer = setInterval(function () {
            timeNum--;
            vm.phoneObj.text = "重新获取" + timeNum + "秒";
            if (timeNum <= 1) {
              vm.phoneObj.judgment = false;
              vm.phoneObj.text = "发送验证码";
              clearInterval(timer)
            }
          }, 1000);
          vm.$message({
            showClose: true,
            message: '发送成功',
            type: 'success'
          })
          return;
        } else {
          clearInterval(timer);
          vm.phoneObj.judgment = false;
          vm.phoneObj.text = "发送验证码";
          vm.$message({
            showClose: true,
            message: "系统忙，请稍后重试。。。"+obj.msg,
            type: 'error'
          })
        }
      })
    }
    // 2017/12/5 new 手机注册
    Vue.prototype.$phoneregister = function (vm, data) {
      if (data.userName != "") {
        if (!bug.username.test(data.userName)) {
          vm.$message({
            showClose: true,
            message: '用户名非数字开头，5-10位字母，数字组成',
            // type: 'error'
          })
          return;
        }
      }
      if (data.passWord != "") {
        if (!bug.pass.test(data.passWord)) {
          vm.$message({
            showClose: true,
            message: '密码须为,6～12位英文或数字，且符合a~z字元或0~9',
            // type: 'error'
          })
          return;
        }
      }
      if (!bug.mobile.test(Number(data.mobileNo))) {
        vm.$message({
          showClose: true,
          message: "手机号格式有误",
          // type: 'error'
        })
        return;

      }
      if (data.msgCode === "") {
        vm.$message({
          showClose: true,
          message: "验证码格式有误",
          // type: 'error'
        })
        return;
      }
      if (data.remark === "") {
        vm.$message({
          showClose: true,
          message: "请输入微信号",
          // type: 'error'
        });
        return;
      }
      bug.mask()
      data.cagent = store.state.userNew.cagent;
      data.proxyname = store.state.userNew.proxyname;
      bug.ReQuest.call(this, data, store.state.userNew.jrg + "/Mobile/register.do", function (obj) {
        bug.mask(false)
        if (obj.msg === 'success') {
          vm.$message({
            showClose: true,
            message: '已登录',
            type: 'success'
          });
          store.dispatch("inceuserNew", {
            id: 2,
            Login: true,
            userName: obj.userName,
            userkey: obj.userKey,
            balance: obj.balance
          });
          return vm.$router.push({
            path: '/'
          });
        } else {
          vm.$message({
            showClose: true,
            message: "系统忙，请稍后重试。。。"+obj.msg,
            type: 'error'
          })
        }
      })
    }
    // 2017/12/5 new 手机登录
    Vue.prototype.$phonelogin = function (vm, data) {
      if (!bug.mobile.test(Number(data.mobileNo))) {
        vm.$message({
          showClose: true,
          message: "手机号格式有误",
          // type: 'error'
        })
        return;
      }
      if (data.msgCode === "") {
        vm.$message({
          showClose: true,
          message: "验证码格式有误",
          // type: 'error'
        })
        return;
      }
      bug.mask();
      data.cagent = store.state.userNew.cagent;
      bug.ReQuest.call(this, data, store.state.userNew.jrg + "Mobile/login.do", function (obj) {
        bug.mask(false);
        if (obj.status === 'ok') {
          vm.$message({
            showClose: true,
            message: '已登录',
            type: 'success'
          });
          store.dispatch("inceuserNew", {
            id: 2,
            Login: true,
            userName: obj.userName,
            userkey: obj.userKey,
            balance: obj.balance
          });
          return vm.$router.push({
            path: '/'
          });
        } else {
          vm.$message({
            showClose: true,
            message: "系统忙，请稍后重试。。。"+obj.msg,
            type: 'error'
          })
        }
      })
    }
    // 2017/12/5 new 修改手机号
    Vue.prototype.$phonemodify = function (vm, data) {
      if (!bug.mobile.test(Number(data.mobileNo))) {
        vm.$message({
          showClose: true,
          message: "手机号格式有误",
          // type: 'error'
        })
        return;
      }
      if (data.msgCode === "") {
        vm.$message({
          showClose: true,
          message: "验证码格式有误",
          // type: 'error'
        })
        return;
      }
      if (!bug.pass.test(data.password)) {
        vm.$message({
          showClose: true,
          message: "请输入密码",
          // type: 'error'
        })
        return;
      }
      bug.mask();
      data.cagent = store.state.userNew.cagent;
      bug.ReQuest.call(this, data, store.state.userNew.jrg + "Mobile/changeMobile.do", function (obj) {
        bug.mask(false);
        switch (obj.msg) {
          case '新旧号码相同':
            vm.$message({
              showClose: true,
              message: '新旧号码相同',
              type: 'error'
            })
            vm.LoginImg()
            break;
          case '手机号不能为空':
            vm.$message({
              showClose: true,
              message: '手机号不能为空',
              type: 'error'
            })
            vm.LoginImg()
            break;
          case '手机号格式错误':
            vm.$message({
              showClose: true,
              message: '手机号格式错误',
              type: 'error'
            })
            vm.LoginImg()
            break;
          case '验证码为空':
            vm.$message({
              showClose: true,
              message: '验证码为空',
              type: 'error'
            })
            vm.LoginImg()
            break;
          case '密码为空':
            vm.$message({
              showClose: true,
              message: '密码为空',
              type: 'error'
            })
            vm.LoginImg()
            break;
          case '密码长度不足':
            vm.$message({
              showClose: true,
              message: '密码长度不足',
              type: 'error'
            })
            vm.LoginImg()
            break;
          case '当日只能更换一次绑定操作':
            vm.$message({
              showClose: true,
              message: '当日只能更换一次绑定操作',
              type: 'error'
            })
            vm.LoginImg()
            break;
          case '密码错误':
            vm.$message({
              showClose: true,
              message: '密码错误',
              type: 'error'
            })
            vm.LoginImg()
            break;
          case '验证码错误':
            vm.$message({
              showClose: true,
              message: '验证码错误',
              type: 'error'
            })
            vm.LoginImg()
            break;
          case '系统异常':
            vm.$message({
              showClose: true,
              message: '系统异常',
              type: 'error'
            })
            vm.LoginImg()
            break;
          case 'success':
            vm.$message({
              showClose: true,
              message: '修改成功',
              type: 'success'
            });
            vm.$router.push({
              path: '/'
            });
            break;
        }
      })
    }
    // 2017/12/5 new 退出登录
    Vue.prototype.$BugNewdropOut = function (vm) {
      bug.mask();
      bug.ajax.call(this, {}, store.state.userNew.jrg + 'logout.do', function (obj) {
        store.dispatch("inceuserNew", {
          id: 2,
          Login: false,
          userName: "",
          userkey: "",
          balance: ""
        });
        bug.mask(false);
        vm.$router.push({
          path: '/LogIn'
        });
      })
    };
    // 2017/12/5 new //申请提款
    Vue.prototype.$BugNewWithDraw = function (vm, data) {
      bug.mask();
      bug.ajax.call(this, data, store.state.userNew.jrg + 'User/WithDraw', function (obj) {
        bug.mask(false)
        if (obj.msg == "success") {
          data.credit = '';
          data.password = '';
          vm.$message({
            showClose: true,
            message: '申请成功',
            type: 'success'
          });
          store.dispatch("incrObtain", {
            id: 1,
          });
          return;
        } else {
          data.password = '';
          vm.$alert(obj.msg, '系统提示框', {
            dangerouslyUseHTMLString: true
          });
        }
      })
    }
    // 2017/12/5 new 添加银行卡
    Vue.prototype.$BugNewAddCard = function (vm, data) {
      var t = this;
      bug.Capitalation.call(this, data, function (err) {
        if (err) {
          vm.$message({
            showClose: true,
            message: err,
          })
          return;
        }
        bug.mask()
        bug.ajax.call(this, data, store.state.userNew.jrg + 'User/addUserCard', function (obj) {
          bug.mask(false);
          if (obj.msg == 'success') {
            vm.$message({
              showClose: true,
              message: '添加成功',
              type: 'success'
            });
            vm.$router.go(-1);
            return;
          } else {
            vm.$message({
              showClose: true,
              message: "系统忙，请稍后重试。。。"+obj.msg,
              // duration:3000,
              type: 'error'
            })
          }
        })
      })
    }
    // 2017/12/5 new 删除银行卡
    Vue.prototype.$BugNewdeletebank = function (vm, data) {
      var t = this;
      bug.mask();
      bug.ajax.call(this, data, store.state.userNew.jrg + 'User/delUserCard', function (obj) {
        bug.mask(false);
        if (obj.msg == "success") {
          store.dispatch("inceuserNew", {
            id: 9,
            cardNum: ""
          });
          store.dispatch("inceuserNew", {
            id: 10,
            judgment: false
          });
          vm.$message({
            showClose: true,
            message: "删除成功",
            type: 'success'
          });
          vm.userId.password = "";
          return vm.$router.push({
            path: '/userBankCard'
          });
        } else {
          vm.userId.password = "";
          vm.$message({
            showClose: true,
            message: "系统忙，请稍后重试。。。"+obj.msg,
            type: 'error'
          });
        }
      })
    }
    // 2017/12/5 new 查询所余额
    Vue.prototype.$BugNewRefresh = function (vm, data) { // new
      bug.ReQuest.call(this, data, store.state.userNew.jrg + 'User/getBalance', function (obj) {
        // bug.mask(false);
        for (let i = 0; i < vm.game.length; i++) {
          if (vm.game[i].type === data.BType) {
            if (obj.balance == '维护中') {
              vm.game[i].Money = '维护中'
            } else {
              vm.game[i].Money = parseFloat(obj.balance).toFixed(2)
            }
          }
        }
      })
    }
    // 2017/12/5 new 平台转账
    Vue.prototype.$BugNewtransfer = function (vm, data, min, man, src) {
      bug.Amount(data.credit, function (err) {
        if (err) {
          vm.$alert('输入金额范围' + min + '~' + man + "元", '系统提示框', {
            dangerouslyUseHTMLString: true
          });
          return;
        }
        bug.mask();
        vm.$BugGameLink(vm, function () {
          bug.ReQuest.call(this, {
            userKey: store.state.userNew.userkey
          }, store.state.userNew.jrg + 'User/getToken', function (uuid) {
            data.uuid = uuid.msg;
            bug.ReQuest.call(this, data, store.state.userNew.jrg + src, function (obj) {
              bug.mask(false);
              var Num = obj.msg;
              let arr = ["转账平台错误", "转账金额错误", "token验证失败,如有疑问，请咨询客服", "图形验证码错误", "转账未完成,请稍后再试", "余额不足", "钱包查询出错", "系统错误,请稍后再试", "转账成功", "维护中"];
              switch (Num) {
                case '01':
                  vm.$alert(arr[0], '系统提示框', {
                    dangerouslyUseHTMLString: true
                  });
                  break;
                case '02':
                  vm.$alert(arr[1], '系统提示框', {
                    dangerouslyUseHTMLString: true
                  });
                  break;
                case '03':
                  vm.$alert(arr[2], '系统提示框', {
                    dangerouslyUseHTMLString: true
                  });
                  break;
                case "04":
                  vm.$alert(arr[3], '系统提示框', {
                    dangerouslyUseHTMLString: true
                  });
                  break;
                case "05":
                  vm.$alert(arr[4], '系统提示框', {
                    dangerouslyUseHTMLString: true
                  });
                  break;
                case "06":
                  vm.$alert(arr[5], '系统提示框', {
                    dangerouslyUseHTMLString: true
                  });
                  break;
                case "07":
                  vm.$alert(arr[6], '系统提示框', {
                    dangerouslyUseHTMLString: true
                  });
                  break;
                case "error":
                  vm.$alert(arr[7], '系统提示框', {
                    dangerouslyUseHTMLString: true
                  });
                  break;
                case "success":
                  vm.$message({
                    showClose: true,
                    message: arr[8],
                    type: 'success'
                  });
                  vm.tran.imgcode = "";
                  vm.tran.credit = '';
                  vm.TypeInquireAll();
                  break;
                case "process":
                  vm.$message({
                    showClose: true,
                    message: arr[9],
                    type: 'error'
                  })
                  break;
              }
            })
          })
        })
      })
    } //this 对象 小大金额 url
    Vue.prototype.$Bugtransfer = function (vm, data, min, man, src, datas, srcs) {
      bug.Amount(data.credit, function (err) {
        if (err) {
          vm.$alert('输入金额范围' + min + '~' + man + "元", '系统提示框', {
            dangerouslyUseHTMLString: true
          });
          return;
        }
        bug.mask();
        let arr = ["转账平台错误", "转账金额错误", "token验证失败,如有疑问，请咨询客服", "图形验证码错误", "转账未完成,请稍后再试", "余额不足", "钱包查询出错", "系统错误,请稍后再试", "转账成功", "维护中"];
        vm.$BugGameLink(vm, function () {
          bug.ReQuest.call(this, {
            userKey: store.state.userNew.userkey
          }, store.state.userNew.jrg + 'User/getToken', function (uuid) {
            data.uuid = uuid.msg;
            bug.ReQuest.call(this, data, store.state.userNew.jrg + src, function (obj) {
              var Num = obj.msg;
              switch (Num) {
                case '01':
                  bug.mask(false);
                  vm.$alert(arr[0], '系统提示框', {
                    dangerouslyUseHTMLString: true
                  });
                  break;
                case '02':
                  bug.mask(false);
                  vm.$alert(arr[1], '系统提示框', {
                    dangerouslyUseHTMLString: true
                  });
                  break;
                case '03':
                  bug.mask(false);
                  vm.$alert(arr[2], '系统提示框', {
                    dangerouslyUseHTMLString: true
                  });
                  break;
                case "04":
                  bug.mask(false);
                  vm.$alert(arr[3], '系统提示框', {
                    dangerouslyUseHTMLString: true
                  });
                  break;
                case "05":
                  bug.mask(false);
                  vm.$alert(arr[4], '系统提示框', {
                    dangerouslyUseHTMLString: true
                  });
                  break;
                case "06":
                  bug.mask(false);
                  vm.$alert(arr[5], '系统提示框', {
                    dangerouslyUseHTMLString: true
                  });
                  break;
                case "07":
                  bug.mask(false);
                  vm.$alert(arr[6], '系统提示框', {
                    dangerouslyUseHTMLString: true
                  });
                  break;
                case "error":
                  bug.mask(false);
                  vm.$alert(arr[7], '系统提示框', {
                    dangerouslyUseHTMLString: true
                  });
                  break;
                case "success":
                  bug.ReQuest.call(this, {
                    userKey: store.state.userNew.userkey
                  }, store.state.userNew.jrg + 'User/getToken', function (uuids) {
                    datas.uuid = uuids.msg;
                    bug.ReQuest.call(this, datas, store.state.userNew.jrg + srcs, function (objs) {
                      bug.mask(false);
                      var Nums = objs.msg;
                      switch (Nums) {
                        case '01':
                          vm.$alert('因网络波动，转账未成功，金额已存入中心钱包', '系统提示框', {
                            dangerouslyUseHTMLString: true
                          });
                          vm.TypeInquireAll();
                          break;
                        case '02':
                          vm.$alert('因网络波动，转账未成功，金额已存入中心钱包', '系统提示框', {
                            dangerouslyUseHTMLString: true
                          });
                          vm.TypeInquireAll();
                          break;
                        case '03':
                          vm.$alert('因网络波动，转账未成功，金额已存入中心钱包', '系统提示框', {
                            dangerouslyUseHTMLString: true
                          });
                          vm.TypeInquireAll();
                          break;
                        case "04":
                          vm.$alert('因网络波动，转账未成功，金额已存入中心钱包', '系统提示框', {
                            dangerouslyUseHTMLString: true
                          });
                          vm.TypeInquireAll();
                          break;
                        case "05":
                          vm.$alert('因网络波动，转账未成功，金额已存入中心钱包', '系统提示框', {
                            dangerouslyUseHTMLString: true
                          });
                          vm.TypeInquireAll();
                          break;
                        case "06":
                          vm.$alert('因网络波动，转账未成功，金额已存入中心钱包', '系统提示框', {
                            dangerouslyUseHTMLString: true
                          });
                          vm.TypeInquireAll();
                          break;
                        case "07":
                          vm.$alert('因网络波动，转账未成功，金额已存入中心钱包', '系统提示框', {
                            dangerouslyUseHTMLString: true
                          });
                          vm.TypeInquireAll();
                          break;
                        case "error":
                          vm.$alert('因网络波动，转账未成功，金额已存入中心钱包', '系统提示框', {
                            dangerouslyUseHTMLString: true
                          });
                          vm.TypeInquireAll();
                          break;
                        case "success":
                          vm.$message({
                            showClose: true,
                            message: arr[8],
                            type: 'success'
                          });
                          datas.imgcode = "";
                          datas.credit = '';
                          vm.TypeInquireAll();
                          break;
                        case "process":
                          vm.$alert('因网络波动，转账未成功，金额已存入中心钱包', '系统提示框', {
                            dangerouslyUseHTMLString: true
                          });
                          vm.TypeInquireAll();
                          break;
                        default:
                          bug.mask(false);
                          break;
                      }
                    })
                  })
                  break;
                case "process":
                  bug.mask(false);
                  vm.$message({
                    showClose: true,
                    message: arr[9],
                    type: 'error'
                  })
                  break;
                default:
                  bug.mask(false);
                  break;
              }
            })
          })
        })
      })
    }
    // 2017/12/5 new 存款
    Vue.prototype.$BugNewBankPay = function (vm, data) {
      var t = this;
      bug.BankPayAtion.call(this, data, function (err) {
        if (err) {
          vm.$message({
            showClose: true,
            message: err,
          });
          return;
        }
        bug.mask();
        bug.ajax.call(this, data, store.state.userNew.jrg + 'bk/BankPay.do', function (obj) {
          bug.mask(false);
          if (obj.status == 'success') {
            data.name = "";
            data.amount = "";
            data.account = "";
            data.ctime = vm.GetDateT();
            vm.$confirm('提交成功！如有疑问，请及时联系在线客服确认存款信息，谢谢！', '系统提示', {
              confirmButtonText: '联系在线客服',
              cancelButtonText: '知道了',
              type: 'warning'
            }).then(() => {
              vm.$router.push({
                path: '/NoteSingle'
              });
            }).catch(() => {});
            return
          } else if (obj.status == 'faild') {
            vm.$confirm('失败,如有疑问，请联系在线客服', '系统提示', {
              confirmButtonText: '联系在线客服',
              cancelButtonText: '知道了',
              type: 'warning'
            }).then(() => {
              vm.$router.push({
                path: '/NoteSingle'
              });
            }).catch(() => {});
            return
          } else {
            vm.$alert(obj.Msg, '系统提示框', {
              dangerouslyUseHTMLString: true
            });
          }
        })
      })
    }
    // 2017/12/5 new 扫码提交订单
    Vue.prototype.$getOrder = function (vm, data) {
      bug.ajax.call(this, data, store.state.userNew.jrg + 'alipayPaymentScanCode/getOrder', function (obj) {
        if (obj.status === "success") {
          data.amount = '';
          data.orderNum = '';
          vm.$confirm('提交成功！如有疑问，请及时联系在线客服确认存款信息，谢谢！', '系统提示', {
            confirmButtonText: '联系在线客服',
            cancelButtonText: '知道了',
            type: 'warning'
          }).then(() => {
            vm.$router.push({
              path: '/NoteSingle'
            });
          }).catch(() => {});
          return;
        } else {
          vm.$message({
            showClose: true,
            message: obj.msg,
            type: 'error'
          })
        }
      })
    }
    // 2017/12/5 new 支付接口
    Vue.prototype.$BugAliPay = function (vm, min, man, data) {
      bug.Amount(data.acounmt, function (err) {
        if (err) {
          vm.$message({
            showClose: true,
            message: err,
            // type: 'error'
          });
          data.acounmt = '';
          return;
        }
        if (Number(data.acounmt) < min || Number(data.acounmt) > man) {
          vm.$alert('输入金额范围' + min + '~' + man + "元", '系统提示框', {
            dangerouslyUseHTMLString: true
          });
          data.acounmt = '';
          return;
        }
        bug.mask();
        bug.ajax.call(this, data, store.state.userNew.jrg + 'PlatformPay/scanPay', function (obj) {
          bug.mask(false)
          vm.$store.dispatch("incrpaydata", '');
          if (obj.status == 'success') {
            vm.$store.dispatch("incealipayscanpaynum", 0);
            vm.$store.dispatch("incealipayscanpay", null);
            if (obj.res_type == '1') {
              vm.$store.dispatch("incealipayscanpaynum", 1);
              if (obj.html != undefined || obj.html != "") {
                obj.html = obj.html.replace(/<body/gi, '<div')
                obj.html = obj.html.replace(/body>/gi, 'div>')
                vm.$store.dispatch("incealipayscanpay", obj.html);
              }
              vm.$router.push({
                path: '/AlipayscanPay'
              })
              return
            }
            if (obj.res_type == '2') {
              vm.$store.dispatch("incealipayscanpaynum", 2);
              obj.user_name = obj.user_name.substring(3);
              vm.$store.dispatch("incealipayscanpay", obj);
              vm.$router.push({
                path: '/AlipayscanPay'
              })
              return
            }
            if (obj.res_type == '3') {
              vm.$store.dispatch("incealipayscanpaynum", 3);
              obj.user_name = obj.user_name.substring(3);
              vm.$store.dispatch("incealipayscanpay", obj);
              vm.$router.push({
                path: '/AlipayscanPay'
              })
              return
            } else if (obj.res_type == '4') {
              window.location.href = obj.html;
              return;
            }
          } else {
            vm.$message({
              showClose: true,
              message: "系统忙，请稍后重试。。",
              type: 'error'
            })

          }
        })
      })
    }
    // 2017/12/5 new 修改登录密码
    Vue.prototype.$BugNewmodifylogin = function (vm, data) {
      var t = this;
      bug.changePasswordation.call(this, data, function (err) {
        if (err) {
          vm.$alert(err, '系统提示框', {
            dangerouslyUseHTMLString: true
          });
          return
        }
        bug.mask();
        bug.ajax.call(this, data, store.state.userNew.jrg + "User/changePassword", function (obj) {
          bug.mask(false);
          if (obj.msg == "success") {
            vm.mflgpas = {
              password: '',
              npassword: '',
              renpassword: ''
            };
            vm.$message({
              showClose: true,
              message: '恭喜你，修改成功',
              type: 'success'
            });
            return
          } else {
            // vm.$alert( err, '系统提示框', {
            //     dangerouslyUseHTMLString: true
            // });
            vm.$message({
              showClose: true,
              message: "系统忙，请稍后重试。。。"+obj.msg,
              type: 'error'
            });
          }
        })
      })
    }
    // 2017/12/5 new 修改提款密码
    Vue.prototype.$BugNewchangeQkpwd = function (vm, data) { //修改取款密码
      bug.changeQkpwdation.call(this, data, function (err) {
        if (err) {
          vm.$alert(err, '系统提示框', {
            dangerouslyUseHTMLString: true
          });
          return
        }
        bug.mask();
        bug.ajax.call(this, data, store.state.userNew.jrg + "User/changeQkpwd", function (obj) {
          bug.mask(false);
          if (obj.msg == "success") {
            vm.bankpass = {
              password: '',
              npassword: '',
              renpassword: ''
            };
            vm.$message({
              showClose: true,
              message: '恭喜你，修改成功',
              type: 'success'
            });
            return vm.$router.go(-1);
          } else {
            vm.$message({
              showClose: true,
              message: "系统忙，请稍后重试。。。"+obj.msg,
              type: 'error'
            });
          }
        })
      })
    }
    Vue.prototype.$BugAtion = function (vm, data) {
      let t = this;
      bug.modifyation.call(this, data, function (err) {
        if (err) {
          vm.$alert(err, '系统提示框', {
            dangerouslyUseHTMLString: true
          });
          return
        }
        bug.ajax.call(this, data, store.state.userNew.jrg + 'XUser/personalInformation', function (obj) {
          if (obj.status === 'success') {
            vm.$message({
              showClose: true,
              message: "保存成功",
              type: 'success'
            });
            data = {
              userName: '',
              mobile: '',
              email: '',
              rmk: ''
            };
            return;
          } else {
            vm.$message({
              showClose: true,
              message: "系统忙，请稍后重试。。。"+obj.msg,
              type: 'error'
            });
          }
        })
      })
    }
  }
}
