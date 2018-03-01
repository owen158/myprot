import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        //首页
        { path: '*', component: resolve => require(['../components/Top/NotFoundComponent.vue'], resolve)},
        {path: '/',component: resolve => require(['../components/Home/Home.vue'], resolve),
            children: [
                {path: '/', redirect:'/AppPage/LooteryGame',component:resolve => require(['../components/Home/Apppage.vue'], resolve)},
                {path: '/AppPage/:name',component:resolve => require(['../components/Home/Apppage.vue'], resolve), props: true},
                //客服
                {path: '/NoteSingle',component: resolve => require(['../components/NoteSingle/NoteSingle.vue'], resolve),meta: { requiresAuth: false }},
                //存取款
                {path: '/Lottery',component: resolve => require(['../components/Lottery/Lottery.vue'], resolve),
                    children: [
                        {path: '/Lottery', redirect:'/deposit',component:resolve => require(['../components/Lottery/deposit.vue'], resolve)},
                        {path: '/deposit',component:resolve => require(['../components/Lottery/deposit.vue'], resolve),meta: { requiresAuth: true }},//存款
                        {path: '/Withdrawals',component:resolve => require(['../components/Lottery/Withdrawals.vue'], resolve),meta: { requiresAuth:true }},//取款
                        {path: '/userBankCard',component:resolve => require(['../components/MemberCentre/userBankCard.vue'], resolve),meta: { requiresAuth: true }},//我的银行卡//
                        {path: '/userCapitalPwd',component:resolve => require(['../components/MemberCentre/userCapitalPwd.vue'], resolve),meta: { requiresAuth: true }},//添加银行卡
                    ]
                },
                //会员中心
                {path: '/MemberCentre',component: resolve => require(['../components/MemberCentre/MemberCentre.vue'], resolve),meta: { requiresAuth: true }},
                //登录
            ]
        },
        {path: '/LogIn',component:  resolve => require(['../components/LogIn/LogIn.vue'], resolve),meta: { requiresAuth: false }},
        //注册
        {path: '/Registered',component: resolve => require(['../components/Registered/Registered.vue'], resolve),meta: { requiresAuth: false }},
        // 全部彩种
        {path: '/Public',component:resolve => require(['../components/public.vue'], resolve),meta: { requiresAuth: true },
            children: [
                {path: '/userSettings',component:resolve => require(['../components/MemberCentre/userSettings.vue'], resolve),meta: { requiresAuth: true }
                },//设置
                {path: '/interchange',component:resolve => require(['../components/MemberCentre/interchange.vue'], resolve),meta: { requiresAuth: true }},//平台互转
                {path: '/gameLimit',component:resolve => require(['../components/MemberCentre/gameLimit.vue'], resolve),meta: { requiresAuth: true }},//个人信息
                {path: '/rechargeRecord',component:resolve => require(['../components/MemberCentre/rechargeRecord.vue'], resolve),meta: { requiresAuth: true }},//记录
                {path: '/collection',component:resolve => require(['../components/MemberCentre/collection.vue'], resolve),meta: { requiresAuth: true }},//优惠记录
                {path: '/AlipayscanPay',component:resolve => require(['../components/Lottery/AlipayscanPay.vue'], resolve),meta: { requiresAuth: true }},//
                {path: '/Recharge',component:resolve => require(['../components/Lottery/Recharge.vue'], resolve),meta: { requiresAuth: true }},//支付 微信 财付通ScanCode
                {path: '/ScanCode',component:resolve => require(['../components/Lottery/ScanCode.vue'], resolve),meta: { requiresAuth: true }},//扫码支付
                {path: '/ScanCodebank',component:resolve => require(['../components/Lottery/ScanCodebank.vue'], resolve),meta: { requiresAuth: true }},//扫码支付跳转
                {path: '/information',component:resolve => require(['../components/Lottery/information.vue'], resolve),meta: { requiresAuth: true }},//填写存款信息
                {path: '/GAMEHABA',component:resolve => require(['../components/Home/game_HABA.vue'], resolve),meta: { requiresAuth: false }},//HABA 游戏
                {path: '/GAMEMG',component:resolve => require(['../components/Home/game_MG.vue'], resolve),meta: { requiresAuth: false }},//HABA 游戏
            ]
        },
    ]
})
