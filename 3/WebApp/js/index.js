import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        //首页
//      { path: '*', component: NotFoundComponent},
//      {path: '/',component: Home,
//          children: [
//              {path: '/', redirect:'/LiveVideo',component:LiveVideo},
//              {path: '/LooteryGame',component:LooteryGame,meta: { requiresAuth: false }},
//              {path: '/LiveVideo',component:LiveVideo,meta: { requiresAuth: false }},
//              {path: '/ElectronicGames',component:ElectronicGames,meta: { requiresAuth: false }},
//              {path: '/Sportsevents',component:Sportsevents,meta: { requiresAuth: false }}
//          ]
//      },
//      {path: '/BuyColor',component:BuyColor,
//          children: [
//              {path: '/BuyColor', redirect:'/LowColor',component:LowColor},
//              {path: '/LowColor',component:LowColor,meta: { requiresAuth:false }},//传统彩
//              {path: '/AllColor',component:AllColor,meta: { requiresAuth:false }},
//              {path: '/Choose',component:Choose,meta: { requiresAuth: false }},// 快2
//
//          ]
//      },
//      //客服
//      {path: '/NoteSingle',component: NoteSingle,meta: { requiresAuth: false }},
//      //登录
//      {path: '/LogIn',component: LogIn,meta: { requiresAuth: false }},
//      //注册
//      {path: '/Registered',component: Registered,meta: { requiresAuth: false }},
        //存取款
        {path: '/Lottery',component: Lottery,
            children: [
//              {path: '/Lottery', redirect:'/deposit',component:deposit},
                {path: '/deposit',component:deposit,meta: { requiresAuth: true }},//存款
                {path: '/Withdrawals',component:Withdrawals,meta: { requiresAuth:true }},//取款
                {path: '/userBankCard',component:userBankCard,meta: { requiresAuth: true }},//我的银行卡//
                {path: '/userCapitalPwd',component:userCapitalPwd,meta: { requiresAuth: true }},//添加银行卡
           ]
        },
        //会员中心
//      {path: '/MemberCentre',component: MemberCentre,meta: { requiresAuth: true }},
//      // 全部彩种
//      {path: '/Public',component:Public,meta: { requiresAuth: true },
//          children: [
//              {path: '/userSettings',component:userSettings,
//                  children: [
//                      {path: '/userSettings', redirect:'/modifyloginpass',component:modifyloginpass},
//                      {path: '/modifyloginpass',component:modifyloginpass,meta: { requiresAuth: true }},//修改登录密码
//                      {path: '/modifybankpass',component:modifybankpass,meta: { requiresAuth: true }}//修改取款密码
//                  ]
//              },//设置
//              {path: '/interchange',component:interchange,meta: { requiresAuth: true }},//平台互转
//              {path: '/gameLimit',component:gameLimit,
//                  children: [
//                      {path: '/gameLimit', redirect:'/Capital',component:Capital},
//                      {path: '/Capital',component:Capital,meta: { requiresAuth: true }},//修改登录密码
//                      {path: '/modify',component:modify,meta: { requiresAuth: true }}//修改取款密码
//                  ]
//              },//个人信息
//
//              // {path: '/bonusDetails',component:bonusDetails,meta: { requiresAuth: true }},//奖金详情 修改 资金流水
//              // {path: '/lotteryForm',component:lotteryForm,meta: { requiresAuth: true }},//投注记录
//              {path: '/rechargeRecord',component:rechargeRecord,meta: { requiresAuth: true }},//记录
//              // {path: '/accountDetails',component:accountDetails,meta: { requiresAuth:true }},
//              // {path: '/withdrawRecord',component:withdrawRecord,meta: { requiresAuth: true }},//提现记录
//              {path: '/collection',component:collection,meta: { requiresAuth: true }},//优惠记录
//              {path: '/infoMain',component:infoMain,meta: { requiresAuth: true }},//信息公告
//              {path: '/AlipayscanPay',component:AlipayscanPay,meta: { requiresAuth: true }},//
//              {path: '/Recharge',component:Recharge,meta: { requiresAuth: true }},//支付 微信 财付通ScanCode
//              {path: '/ScanCode',component:ScanCode,meta: { requiresAuth: true }},//扫码支付
//              {path: '/ScanCodebank',component:ScanCodebank,meta: { requiresAuth: true }},//扫码支付跳转
//              {path: '/information',component:information,meta: { requiresAuth: true }},//填写存款信息
//              // 积分商城 **********************
//              {path: '/integral',component:integral,meta: { requiresAuth: true }},// 积分商城
//              {path: '/integralRecording',component:integralRecording,meta: { requiresAuth: true }},// 积分商城integralRecording
//              // 积分商城 **********************
//              {path: '/GAMEHABA',component:GAMEHABA,meta: { requiresAuth: false }},//HABA 游戏
//              {path: '/PT',component:PT,meta: { requiresAuth: true }},//PT 游戏
//              {path: '/GAMEMG',component:GAMEMG,meta: { requiresAuth: false }},//HABA 游戏
//              {path: '/BBIN',component:BBIN,meta: { requiresAuth: false }},//HABA 游戏
//              // {path: '/AlwaysColor',component:AlwaysColor,meta: { requiresAuth: false }},//官方彩
//
//
//          ]
//      },
    ]
})
