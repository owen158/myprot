import Vue from 'vue'
import Router from 'vue-router'


import Hello from '@/components/Hello'
// 访问页面不存在
import NotFoundComponent from '@/components/NotFoundComponent.vue'
// 首页
import Home from '../components/Home/Home.vue'

import LiveVideo from '../components/Home/LiveVideo.vue'
// 彩票页面
import LooteryGame from '../components/Home/LooteryGame.vue'
// 传统彩
import AllColor from '../components/Home/AllColor.vue'
// 官方彩
import AlwaysColor from '../components/Home/AlwaysColor.vue'
import Traditional from '../components/Home/Traditional.vue'
import ElectronicGames from '../components/Home/ElectronicGames.vue'
import LowColor from '../components/Home/LowColor.vue'
// 公用页面
import publicPage from '../components/Public/publicPage.vue'
// 个人资料
import personalVip from '../components/Personal/personalVip.vue'

// 修改密码
import modifyPass from '../components/Personal/modifyPass.vue'
// 投注记录
import LotteryForm from '../components/Personal/LotteryForm.vue'
// 转账记录
import accountDetails from '../components/Personal/accountDetails.vue'
// 充值记录
import rechargeRecord from '../components/Personal/rechargeRecord.vue'
// 提款记录
import withdrawRecord from '../components/Personal/withdrawRecord.vue'
// 资金流水
import bonusDetails from '../components/Personal/bonusDetails.vue'
// 优惠活动
import collection from '../components/Personal/collection.vue'
// 平台互转
import  Transfer from '../components/Personal/Transfer.vue'

// 客服页面
import Service from '../components/Service/Service.vue'

// 存取款页面
import Deposits from '../components/Deposits/Deposits.vue'
import userpass from '../components/Personal/userpass.vue'
import bankpass from '../components/Personal/bankpass.vue'
// 存款页面
import DepositsChild from '../components/Deposits/DepositsChild.vue'
// 银行卡
import userBankCard from '../components/Deposits/userBankCard.vue'
// 提款页面
import addbankcard from '../components/Deposits/addbankcard.vue'
import Withdrawals from '../components/Deposits/Withdrawals.vue'
import ScanCode from '../components/Deposits/ScanCode.vue'
import Conflrm from '../components/Deposits/Conflrm.vue'
import BankTransfer from '../components/Deposits/BankTransfer.vue'
import Recharge from '../components/Deposits/Recharge.vue'
// 会员中心
import Personal from '../components/Personal/Personal.vue'

// 登录
import Login from '../components/Login/Login.vue'

// 注册
import Registered from '../components/Registered/Registered.vue'

Vue.use(Router);
export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '*', component: NotFoundComponent},
        // 首页
        {path: '/', component:Home},
        {path: '/Service', name: 'Service', component:Service,meta: { requiresAuth: false }},
        {path: '/Deposits', name: 'Deposits', component:Deposits,
            children: [
                {path: '/Deposits', redirect:'DepositsChild',component:DepositsChild,meta: { requiresAuth: true }},
                {path: '/DepositsChild',component:DepositsChild,meta: { requiresAuth: true }},
                {path: '/Withdrawals',component:Withdrawals,meta: { requiresAuth: true }},
                {path: '/userBankCard',component:userBankCard,meta: { requiresAuth: true }},
                {path: '/userBankCard',component:userBankCard,meta: { requiresAuth: true }},

            ]
        },
        {path: '/Personal', name: 'Personal', component:Personal,meta: { requiresAuth: true }},
        {path: '/publicPage',component:publicPage,
            children: [
                {path: '/personalVip',component:personalVip,meta: { requiresAuth: true }},
                {path: '/LotteryForm',component:LotteryForm,meta: { requiresAuth: true }},
                {path: '/accountDetails',component:accountDetails,meta: { requiresAuth: true }},
                {path: '/rechargeRecord',component:rechargeRecord,meta: { requiresAuth: true }},
                {path: '/withdrawRecord',component:withdrawRecord,meta: { requiresAuth: true }},
                {path: '/bonusDetails',component:bonusDetails,meta: { requiresAuth: true }},
                {path: '/collection',component:collection,meta: { requiresAuth: true }},
                {path: '/ScanCode',component:ScanCode,meta: { requiresAuth: true }},//扫码支付
                {path: '/Conflrm',component:Conflrm,meta: { requiresAuth: true }},//扫码支付子页面
                {path: '/BankTransfer',component:BankTransfer,meta: { requiresAuth: true }},//银行汇款
                {path: '/Recharge',component:Recharge,meta: { requiresAuth: true }},//银行汇款
                {path: '/modifyPass',component:modifyPass,
                    children: [
                        {path: '/modifyPass', redirect:'/userpass',component:userpass,meta: { requiresAuth: false }},
                        {path: '/userpass',component:userpass,meta: { requiresAuth:false }},//传统彩
                        {path: '/bankpass',component:bankpass,meta: { requiresAuth:false }},//传统彩
                    ]
                },
                {path: '/Transfer',component:Transfer,meta: { requiresAuth: true }},
                // 游戏
                {path: '/Traditional',component:Traditional,
                    children: [
                        {path: '/Traditional', redirect:'/AllColor',component:AllColor,meta: { requiresAuth: false }},
                        {path: '/AllColor',component:AllColor,meta: { requiresAuth:false }},//传统彩
                        {path: '/LowColor',component:LowColor,meta: { requiresAuth:false }},//传统彩
                    ]
                },
                {path: '/AlwaysColor',component:AlwaysColor,meta: { requiresAuth: false }},
                {path: '/addbankcard',component:addbankcard,meta: { requiresAuth: true }},
                {path: '/LooteryGame',component:LooteryGame,meta: { requiresAuth: false }},
                {path: '/LiveVideo',component:LiveVideo,meta: { requiresAuth: false }},
                {path: '/ElectronicGames',component:ElectronicGames,meta: { requiresAuth: false }},
            ]
        },
        {path: '/Login', name: 'Login', component: Login,meta: { requiresAuth: false }},
        {path: '/Registered', name: 'Registered', component: Registered,meta: { requiresAuth: false }},
  ]
})
