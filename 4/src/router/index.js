import Vue from 'vue'
// import VueRouter from 'vue-router'
import Router from 'vue-router'
// function dynamicPropsFn (route) {
//     const now = new Date()
//     return {
//         name: (now.getFullYear() + parseInt(route.params.years)) + '!'
//     }
// }
Vue.use(Router);
export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    //首页
    {
      path: '*',
      component: resolve => require(['../components/Top/NotFoundComponent.vue'], resolve),
    },
    {
      path: '/',
      component: resolve => require(['@/components/Home/Home.vue'], resolve),
      children: [{
          path: '/',
          redirect: '/AppPage',
          component: resolve => require(['../components/Home/AppPage.vue'], resolve),
        },
        {
          path: '/AppPage',
          component: resolve => require(['../components/Home/AppPage.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //首页
        {
          path: '/MemberCentre',
          component: resolve => require(['@/components/MemberCentre/MemberCentre.vue'], resolve),
          meta: {
            requiresAuth: true
          }
        }, //会员中心
        {
          path: '/NoteSingle',
          component: resolve => require(['@/components/NoteSingle/NoteSingle.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //客服
        {
          path: '/classification',
          component: resolve => require(['../components/BuyCoolor/classification.vue'], resolve),
          children: [{
              path: '/',
              redirect: '/LiveVideo',
              component: resolve => require(['../components/Home/LiveVideo.vue'], resolve),
            },
            {
              path: '/LooteryGame',
              component: resolve => require(['../components/Home/LotteryGame.vue'], resolve),
              meta: {
                requiresAuth: false
              }
            },
            {
              path: '/LiveVideo',
              component: resolve => require(['../components/Home/LiveVideo.vue'], resolve),
              meta: {
                requiresAuth: false
              }
            },
            {
              path: '/Sportsevents',
              component: resolve => require(['../components/Home/Sportsevents.vue'], resolve),
              meta: {
                requiresAuth: false
              }
            },
            {
              path: '/ElectronicGames',
              name: 'ElectronicGames',
              component: resolve => require(['../components/Home/ElectronicGames.vue'], resolve),
              meta: {
                requiresAuth: false
              }
            },
            {
              path: '/qipai',
              name: 'qipai',
              component: resolve => require(['../components/Home/qipai.vue'], resolve),
              meta: {
                requiresAuth: false
              }
            },

          ]
        },
      ]
    },
    {
      path: '/Lottery',
      component: resolve => require(['@/components/Lottery/Lottery.vue'], resolve),
      children: [{
          path: '/Lottery',
          redirect: '/Online',
          component: resolve => require(['../components/Lottery/Online.vue'], resolve),
        },
        {
          path: '/Online',
          component: resolve => require(['../components/Lottery/Online.vue'], resolve),
          meta: {
            requiresAuth: true
          }
        }, //网银
        {
          path: '/Alipay',
          component: resolve => require(['../components/Lottery/Alipay.vue'], resolve),
          meta: {
            requiresAuth: true
          }
        }, //支付宝
        {
          path: '/jdsm',
          component: resolve => require(['../components/Lottery/jdsm.vue'], resolve),

          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/kuaiJie',
          component: resolve => require(['../components/Lottery/kuaiJie.vue'], resolve),

          meta: {
            requiresAuth: true
          }
        }, //快捷支付
        {
          path: '/BankScanCode',
          component: resolve => require(['../components/Lottery/BankScanCode.vue'], resolve),
          meta: {
            requiresAuth: true
          }
        }, //银联扫码
        {
          path: '/Wechat',
          component: resolve => require(['../components/Lottery/Wechat.vue'], resolve),
          meta: {
            requiresAuth: true
          }
        }, //微信
        {
          path: '/TenPay',
          component: resolve => require(['../components/Lottery/TenPay.vue'], resolve),
          meta: {
            requiresAuth: true
          }
        }, //财付通
        {
          path: '/information',
          component: resolve => require(['../components/Lottery/information.vue'], resolve),
          meta: {
            requiresAuth: true
          }
        }, //填写存款信息
        {
          path: '/ScanCode',
          component: resolve => require(['../components/Lottery/ScanCode.vue'], resolve),
          children: [{
              path: '/ScanCode',
              redirect: '/ScanCodebankAlipay',
              component: resolve => require(['../components/Lottery/ScanCodebankAlipay.vue'], resolve),
            }, //优惠
            {
              path: '/ScanCodebankAlipay',
              component: resolve => require(['../components/Lottery/ScanCodebankAlipay.vue'], resolve),
              meta: {
                requiresAuth: true
              }
            }, //优惠
            {
              path: '/ScanCodebankWechat',
              component: resolve => require(['../components/Lottery/ScanCodebankWechat.vue'], resolve),
              meta: {
                requiresAuth: true
              }
            }, //优惠
            {
              path: '/ScanCodebankTenPay',
              component: resolve => require(['../components/Lottery/ScanCodebankTenPay.vue'], resolve),
              meta: {
                requiresAuth: true
              }
            }, //优惠
          ]
        },
      ]
    },
    //help
    {
      path: '/help',
      component: resolve => require(['../components/help/help.vue'], resolve),
    },
    //客服
    {
      path: '/publicpageAPp',
      component: resolve => require(['../components/public/publicpage.vue'], resolve),
      children: [{
          path: '/helpChildOne',
          component: resolve => require(['../components/help/helpChildOne.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //
        {
          path: '/helpChildTwo',
          component: resolve => require(['../components/help/helpChildTwo.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //
        {
          path: '/helpChildThree',
          component: resolve => require(['../components/help/helpChildThree.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //
        {
          path: '/helpChildFour',
          component: resolve => require(['../components/help/helpChildFour.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //
        {
          path: '/helpChildFives',
          component: resolve => require(['../components/help/helpChildFives.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //
        {
          path: '/helpChildSex',
          component: resolve => require(['../components/help/helpChildSex.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //
        {
          path: '/helpChildSeven',
          component: resolve => require(['../components/help/helpChildSeven.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //
        {
          path: '/helpChildEight',
          component: resolve => require(['../components/help/helpChildEight.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //
        {
          path: '/helpChildNine',
          component: resolve => require(['../components/help/helpChildNine.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //

        {
          path: '/helpChildTen',
          component: resolve => require(['../components/help/helpChildTen.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //
        //

        {
          path: '/helplogreg',
          component: resolve => require(['../components/help/helplogreg.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //优惠
        {
          path: '/helplogregone',
          component: resolve => require(['../components/help/helplogregone.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //优惠
        {
          path: '/helplogregTwo',
          component: resolve => require(['../components/help/helplogregTwo.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //优惠
        {
          path: '/helplogregThree',
          component: resolve => require(['../components/help/helplogregThree.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //
        {
          path: '/helplogregFour',
          component: resolve => require(['../components/help/helplogregFour.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //helplogregFour
        {
          path: '/helplogregFives',
          component: resolve => require(['../components/help/helplogregFives.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //优惠
        {
          path: '/helplogregSix',
          component: resolve => require(['../components/help/helplogregSix.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //取款
        {
          path: '/helplogregSeven',
          component: resolve => require(['../components/help/helplogregSeven.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpProcess',
          component: resolve => require(['../components/help/HelpProcess.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//

        {
          path: '/HelpProcessOne',
          component: resolve => require(['../components/help/HelpProcessOne.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpProcessTwo',
          component: resolve => require(['../components/help/HelpProcessTwo.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpProcessThree',
          component: resolve => require(['../components/help/HelpProcessThree.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpProcessFour',
          component: resolve => require(['../components/help/HelpProcessFour.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpProcessFives',
          component: resolve => require(['../components/help/HelpProcessFives.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpProcessSex',
          component: resolve => require(['../components/help/HelpProcessSex.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpProcessSeven',
          component: resolve => require(['../components/help/HelpProcessSeven.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpProcessEight',
          component: resolve => require(['../components/help/HelpProcessEight.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpProcessNine',
          component: resolve => require(['../components/help/HelpProcessNine.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpProcessTen',
          component: resolve => require(['../components/help/HelpProcessTen.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpProcessEleven',
          component: resolve => require(['../components/help/HelpProcessEleven.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//

        {
          path: '/HelpWithdrawal',
          component: resolve => require(['../components/help/HelpWithdrawal.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpWithdrawalOne',
          component: resolve => require(['../components/help/HelpWithdrawalOne.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpWithdrawalTwo',
          component: resolve => require(['../components/help/HelpWithdrawalTwo.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpWithdrawalThree',
          component: resolve => require(['../components/help/HelpWithdrawalThree.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpWithdrawalFour',
          component: resolve => require(['../components/help/HelpWithdrawalFour.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpWithdrawalFives',
          component: resolve => require(['../components/help/HelpWithdrawalFives.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpWithdrawalSex',
          component: resolve => require(['../components/help/HelpWithdrawalSex.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpWithdrawalSeven',
          component: resolve => require(['../components/help/HelpWithdrawalSeven.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpWithdrawalEight',
          component: resolve => require(['../components/help/HelpWithdrawalEight.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//

        {
          path: '/HelpTransfer',
          component: resolve => require(['../components/help/HelpTransfer.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpTransferOne',
          component: resolve => require(['../components/help/HelpTransferOne.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpTransferTwo',
          component: resolve => require(['../components/help/HelpTransferTwo.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpTransferThree',
          component: resolve => require(['../components/help/HelpTransferThree.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpTransferFour',
          component: resolve => require(['../components/help/HelpTransferFour.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpTransferFives',
          component: resolve => require(['../components/help/HelpTransferFives.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//

        {
          path: '/HelpAccount',
          component: resolve => require(['../components/help/HelpAccount.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpAccountOne',
          component: resolve => require(['../components/help/HelpAccountOne.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpAccountTwo',
          component: resolve => require(['../components/help/HelpAccountTwo.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpAccountThree',
          component: resolve => require(['../components/help/HelpAccountThree.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpAccountFour',
          component: resolve => require(['../components/help/HelpAccountFour.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpAccountFives',
          component: resolve => require(['../components/help/HelpAccountFives.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpAccountSex',
          component: resolve => require(['../components/help/HelpAccountSex.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//


        {
          path: '/HelpPolicy',
          component: resolve => require(['../components/help/HelpPolicy.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//

        {
          path: '/HelpCardbank',
          component: resolve => require(['../components/help/HelpCardbank.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //我的银行卡//
        {
          path: '/HelpCardbankOne',
          component: resolve => require(['../components/help/HelpCardbankOne.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        },
        {
          path: '/HelpCardbankTwo',
          component: resolve => require(['../components/help/HelpCardbankTwo.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        },
        {
          path: '/HelpCardbankThree',
          component: resolve => require(['../components/help/HelpCardbankThree.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        },
        {
          path: '/HelpCardbankFour',
          component: resolve => require(['../components/help/HelpCardbankFour.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        },
        {
          path: '/HelpCardbankFives',
          component: resolve => require(['../components/help/HelpCardbankFives.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        },
        {
          path: '/HelpCardbankSex',
          component: resolve => require(['../components/help/HelpCardbankSex.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        },
        {
          path: '/HelpCardbankSeven',
          component: resolve => require(['../components/help/HelpCardbankSeven.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        },


        {
          path: '/HelpOther',
          component: resolve => require(['../components/help/HelpOther.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        },
        {
          path: '/HelpOtherOne',
          component: resolve => require(['../components/help/HelpOtherOne.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        },
        {
          path: '/HelpOtherTwo',
          component: resolve => require(['../components/help/HelpOtherTwo.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        },
        {
          path: '/HelpOtherThree',
          component: resolve => require(['../components/help/HelpOtherThree.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        },
        {
          path: '/HelpOtherFour',
          component: resolve => require(['../components/help/HelpOtherFour.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        },
        {
          path: '/HelpOtherFives',
          component: resolve => require(['../components/help/HelpOtherFives.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        },
        {
          path: '/HelpOtherSex',
          component: resolve => require(['../components/help/HelpOtherSex.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        },
        {
          path: '/HelpOtherSeven',
          component: resolve => require(['../components/help/HelpOtherSeven.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        },
        {
          path: '/HelpOtherEight',
          component: resolve => require(['../components/help/HelpOtherEight.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        },
        {
          path: '/HelpOtherNine',
          component: resolve => require(['../components/help/HelpOtherNine.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        },
        {
          path: '/HelpOtherTen',
          component: resolve => require(['../components/help/HelpOtherTen.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        },
        {
          path: '/HelpOtherEleven',
          component: resolve => require(['../components/help/HelpOtherEleven.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        },
        {
          path: '/FirstDeposit',
          component: resolve => require(['../components/help/FirstDeposit.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        },
        {
          path: '/apply',
          component: resolve => require(['../components/help/apply.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //代理页面


        {
          path: '/callPhone',
          component: resolve => require(['../components/help/callPhone.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        },
        {
          path: '/leavemsg',
          component: resolve => require(['../components/help/leavemsg.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        },



        {
          path: '/userSettings',
          component: resolve => require(['../components/MemberCentre/userSettings.vue'], resolve),
          meta: {
            requiresAuth: true
          }
        }, //安全设置
        {
          path: '/assetsOverview',
          component: resolve => require(['../components/MemberCentre/assetsOverview.vue'], resolve),
          meta: {
            requiresAuth: true
          }
        }, //总资产
        {
          path: '/modifyloginpass',
          component: resolve => require(['../components/MemberCentre/modifyloginpass.vue'], resolve),
          meta: {
            requiresAuth: true
          }
        }, //修改登录密码
        {
          path: '/modifybankpass',
          component: resolve => require(['../components/MemberCentre/modifybankpass.vue'], resolve),
          meta: {
            requiresAuth: true
          }
        }, //修改取款密码
        {
          path: '/phone',
          component: resolve => require(['../components/MemberCentre/phone.vue'], resolve),
          meta: {
            requiresAuth: true
          }
        }, //修改手机号
        {
          path: '/AlipayscanPay',
          component: resolve => require(['../components/Lottery/AlipayscanPay.vue'], resolve),
          meta: {
            requiresAuth: true
          }
        }, //
        {
          path: '/modify',
          component: resolve => require(['../components/MemberCentre/modify.vue'], resolve),
          meta: {
            requiresAuth: true
          }
        }, //修改取款密码
        {
          path: '/userCapitalPwd',
          component: resolve => require(['../components/MemberCentre/userCapitalPwd.vue'], resolve),
          meta: {
            requiresAuth: true
          }
        }, //添加银行卡
        {
          path: '/userBankCard',
          component: resolve => require(['../components/MemberCentre/userBankCard.vue'], resolve),
          meta: {
            requiresAuth: true
          }
        }, //我的银行卡//
        {
          path: '/infoMain',
          component: resolve => require(['../components/MemberCentre/infoMain.vue'], resolve),
          meta: {
            requiresAuth: true
          }
        }, //信息公告
        {
          path: '/gamepublic',
          component: resolve => require(['../components/public/poppublic.vue'], resolve),
          meta: {
            requiresAuth: true
          }
        }, // 游戏入口显示页
        {
          path: '/Withdrawals',
          component: resolve => require(['../components/Lottery/Withdrawals.vue'], resolve),
          meta: {
            requiresAuth: true
          }
        }, //取款
        {
          path: '/gameLimit',
          component: resolve => require(['../components/MemberCentre/gameLimit.vue'], resolve),
          meta: {
            requiresAuth: true
          }
        }, // 账户信息
        {
          path: '/capitalRecord',
          component: resolve => require(['../components/MemberCentre/capitalRecord.vue'], resolve),
          meta: {
            requiresAuth: true
          }
        }, // 资金记录
        {
          path: '/bettingRecord',
          component: resolve => require(['../components/MemberCentre/bettingRecord.vue'], resolve),
          meta: {
            requiresAuth: true
          }
        }, // 投注记录
        {
          path: '/TransferRecords',
          component: resolve => require(['../components/MemberCentre/TransferRecords.vue'], resolve),
          meta: {
            requiresAuth: true
          }
        }, // 转账记录
        {
          path: '/rechargeRecord',
          component: resolve => require(['../components/MemberCentre/rechargeRecord.vue'], resolve),
          meta: {
            requiresAuth: true
          }
        }, //充值记录
        {
          path: '/withdrawRecord',
          component: resolve => require(['../components/MemberCentre/withdrawRecord.vue'], resolve),
          meta: {
            requiresAuth: true
          }
        }, //提现记录


        {
          path: '/BuyColor:id',
          component: resolve => require(['@/components/BuyCoolor/BuyColor.vue'], resolve),
          name: 'BuyColor',
          meta: {
            requiresAuth: false
          }
        }, //传统彩discount


        {
          path: '/newuser',
          component: resolve => require(['../components/help/newuser.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //MG 游戏

        {
          path: '/GAMEHABA',
          component: resolve => require(['../components/Home/game_HABA.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //HABA 游戏
        {
          path: '/GAMEMG',
          component: resolve => require(['../components/Home/game_MG.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //MG 游戏
        {
          path: '/test',
          component: resolve => require(['../components/public/test.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //MG 游戏

        {
          path: '/discount',
          component: resolve => require(['../components/BuyCoolor/discount.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //优惠
        //我的银行卡// HelpOtherEight
      ]
    }, //
    {
      path: '/about',
      component: resolve => require(['../components/help/about.vue'], resolve),
      children: [{
          path: '/about',
          redirect: 'aboutOne',
          component: resolve => require(['../components/help/aboutOne.vue'], resolve),
        }, //优惠
        {
          path: '/aboutOne',
          component: resolve => require(['../components/help/aboutOne.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //优惠
        {
          path: '/aboutTwo',
          component: resolve => require(['../components/help/aboutTwo.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //优惠
        {
          path: '/aboutThree',
          component: resolve => require(['../components/help/aboutThree.vue'], resolve),
          meta: {
            requiresAuth: false
          }
        }, //优惠
        //     {path: '/DiscountThree',component:resolve=>require(['../components/BuyCoolor/DiscountThree.vue'],resolve),meta: { requiresAuth: false }},//优惠
        //     {path: '/DiscountFour',component:resolve=>require(['../components/BuyCoolor/DiscountFour.vue'],resolve),meta: { requiresAuth: false }},//优惠
        //     //     // {path: '/userBankCard',component:resolve=>require(['../components/MemberCentre/userBankCard.vue'],resolve),meta: { requiresAuth: true }},//我的银行卡//
        //     //     // {path: '/userCapitalPwd',component:resolve => require(['../components/MemberCentre/userCapitalPwd.vue'], resolve),meta: { requiresAuth: true }},//添加银行卡
      ]
    }, //
    //登录
    {
      path: '/interchange',
      component: resolve => require(['../components/MemberCentre/interchange.vue'], resolve),
      meta: {
        requiresAuth: true
      }
    }, //平台互转
    {
      path: '/LogIn',
      component: resolve => require(['../components/LogIn/LogIn.vue'], resolve),
      meta: {
        requiresAuth: false
      }
    },
    //注册
    {
      path: '/Registered',
      component: resolve => require(['../components/Registered/Registered.vue'], resolve),
      meta: {
        requiresAuth: false
      }
    },
    //存取款
  ]
})
