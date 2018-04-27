<template>
    <div class='MemberCentre row' style="background: #efeff4;font-size: 0px;">
        <el-header style="height: 4.14rem;padding: 0 0.4rem">
            <el-row :gutter="24" style="line-height: 0.4rem;">
                <el-col :span="12" :offset="6"><div class="grid-content bg-purple" style="color: #fff;font-size: 0.25rem;margin-top: 0.6rem">&nbsp;{{userNew.userName}}&nbsp;</div></el-col>
            </el-row>
            <el-row class="G-MemberCentre-Nav">
                <el-row  class="logo">
                    <el-col :span="11" style="height: 0.02rem;"></el-col>
                    <el-col :span="2" style="height: 0.02rem;" >
                        <span class="logobox" style="display: inline-block;width: 0.02rem;height: 0.02rem;"><span class="x-icon-Mem-logo"></span></span>
                    </el-col>
                    <el-col :span="11" style="height:0.02rem;"></el-col>
                </el-row>
                <el-row class="G-MemberCentre-Nav-capital">
                    <el-col :span="12" class="G-M-N-L">
                        <div class="grid-content bg-purple G-M-N-L-sup"> &nbsp;{{userNew.userMoney}}&nbsp;</div>
                        <div class="grid-content bg-purple-light  G-M-N-L-sub">账户余额(元)</div>
                    </el-col>
                    <el-col :span="12" class="G-M-N-R">
                        <div class="grid-content bg-purple  G-M-N-L-sup"> &nbsp;&nbsp;</div>
                        <div class="grid-content bg-purple-light  G-M-N-L-sub">
                            <router-link style="display: block" class="" to="/assetsOverview">
                                总资产(元) <span class="rf Hre el-icon-arrow-right"></span>
                            </router-link>
                        </div>
                    </el-col>
                </el-row>
                <div class="G-M-N-lin"></div>
                <el-row class="Hicon">
                    <el-col :span="8" >
                        <router-link class="G-M-NA" to="/interchange">
                            <div class="grid-content bg-purple Micon">
                                <span class="x-icon-Mem-tad1 "></span>
                            </div>
                            <div class="grid-content bg-purple text">转账</div>
                        </router-link>
                    </el-col>
                    <el-col :span="8" >
                        <router-link class="G-M-NA" to="/Withdrawals">
                            <div class="grid-content bg-purple Micon">
                                <span class="x-icon-Mem-tad2"></span>
                            </div>
                            <div class="grid-content bg-purple text">提款</div>
                        </router-link>
                    </el-col>
                    <el-col :span="8" >
                        <router-link class="G-M-NA" to="/Lottery">
                            <div class="grid-content bg-purple Micon">
                                <span  class="x-icon-Mem-tad3"></span>
                            </div>
                            <div class="grid-content bg-purple text">存款</div>
                        </router-link>
                    </el-col>
                </el-row>
            </el-row>
        </el-header>
        <div class="G-Mroot">
            <el-row class="Hicon">
                <el-col :span="8"  v-for="v in user_">
                    <router-link class="G-M-NA" :to="v.url">
                        <div class="grid-content bg-purple Micon">
                            <span :class="v.img"></span>
                        </div>
                        <div class="grid-content bg-purple text">{{v.title}}</div>
                    </router-link>
                </el-col>
                <el-col :span="8">
                    <b class="G-M-NA" @click="ImgOffer()">
                        <div class="grid-content bg-purple Micon">
                            <span class="x-icon-Mem-tad14"></span>
                        </div>
                        <div class="grid-content bg-purple text">高级代理人</div>
                    </b>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    var b=true,el,Type,vm;
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                user_:[
                    {img:'x-icon-Mem-tad4',title:'资金流水',url:"/rechargeRecord"},
                    // {img:'x-icon-Mem-tad4',title:'资金流水',url:"/bonusDetails"},
                    {img:'x-icon-Mem-tad5',title:'投注记录',url:'/bettingRecord'},
                    {img:'x-icon-Mem-tad6',title:'充值记录',url:'/capitalRecord'},
                    {img:'x-icon-Mem-tad11',title:'转账记录',url:"/TransferRecords"},
                    {img:'x-icon-Mem-tad12',title:'提款记录',url:'/withdrawRecord'},
                    {img:'x-icon-Mem-tad8',title:'账户信息',url:'/gameLimit'},
                    {img:'x-icon-Mem-tad9',title:'安全设置',url:'/userSettings'},
//                    {img:'x-icon-Mem-tad14',title:'高级代理人',url:'/apply'},
//                    {img:'iconfont icon-yinhangqia',title:'银行卡',url:'/userBankCard'},
//                    {img:'iconfont icon-jifenduihuanjilu',title:'积分兑换记录',url:'/integralRecording'},
                    {img:'x-icon-Mem-tad10',title:'优惠活动',url:'/discount'},
//                    {img:'x-icon-Mem-tad7',title:'消息中心',url:'/'},
                    {img:'x-icon-Mem-tad13',title:'帮助中心',url:'/help'},
//                    {img:'iconfont icon-jifenshangchengtubiao',title:'积分商城',url:'/integral'}
                ]
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            },
            annouationNew:function () {//判断登录
                return this.$store.state.annouationNew;
            }
        },
        mounted() {
        },
        methods:{
            Boo:function (event) {//检验登录状态 、执行操作
                var vm = this;
//                this.$store.dispatch("incrementWithValue");
            },
            Card:function (event) {//检验登录状态 、执行操作
                var vm = this;
//                this.$store.dispatch("incrementWithValue");
            },
            ImgOffer(){
                let vm = this;
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                vm.$store.dispatch("inceuserNew",{id:11,src:""});
                setTimeout(() => {
                    loading.close();
                    vm.$store.dispatch("inceuserNew",{id:11,src:this.annouationNew.offer[0].img2});
                    vm.$router.push({path:'/newuser'});
                }, 1000);
            },
            pages:function (event) {
                let vm,el,src,objs;
                vm = this;
                el = event.currentTarget;
                src = el.getAttribute('data-src');
                switch (src) {
                    case '/lotteryForm':
                         vm.$store.dispatch("inceuserNew",{id:3,type:'lotteryForm'});
                        vm.$router.push({path:'/rechargeRecord'});
                        break;
                    case '/accountDetails':
                        vm.$store.dispatch("inceuserNew",{id:3,type:"accountDetails"});
                        vm.$router.push({path:'/rechargeRecord'});
                        break;
                    case '/rechargeRecord':
                        vm.$store.dispatch("inceuserNew",{id:3,type:"rechargeRecord"});
                        vm.$router.push({path:'/rechargeRecord'});
                        break;
                    case '/withdrawRecord':
                        vm.$store.dispatch("inceuserNew",{id:3,type:"withdrawRecord"});
                        vm.$router.push({path:'/rechargeRecord'});
                        break;
                    case '/bonusDetails':
                        vm.$store.dispatch("inceuserNew",{id:3,type:"bonusDetails"});
                        vm.$router.push({path:'/rechargeRecord'});
                        break;
                    case '/integralRecording':
                        vm.$store.dispatch("inceuserNew",{id:3,type:"integralRecording"});
                        vm.$router.push({path:'/rechargeRecord'});
                        break;
                    case '/interchange':
                        vm.$store.dispatch("incrObtain", {id: 0});
                        vm.$router.push({path:src});
                        break;
                    case '/gameLimit':
                        vm.$router.push({path:src});
                        break;
                    case '/collection':
                        vm.$router.push({path:src});
                        break;
                    case '/integral':
                        vm.$router.push({path:src});
                        break;
                    default:
                        vm.$router.push({path:src});
                }
            },
            Refreshmoney:function () {
                vm=this;
                vm.$store.dispatch("incrObtain", {id: 0});
            }

        },
        created() {
        },
        components: {
            Top
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import "../../../static/css/style.less";
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-active {
    opacity: 0
}
.MemberCentre, .MemberBox,.MemberTitle{
    width:100%;
    font-size: 0;
}
.MemberCentre{
    padding-bottom:1.4rem;
    .el-header{
        padding-top:0.4rem;
        background: #cda469;
    }
    .G-Mroot{
        margin-top: 2rem;
        padding: 0.4rem;
    }
    .G-M-NA{
        display: block;
    }
    .Hicon{
        background: #fff;
        padding: 0.2rem 0;
        -webkit-border-radius: 0.2rem;
        -moz-border-radius: 0.2rem;
        border-radius: 0.2rem;;
        .Micon{
            margin: 0.4rem 0 0rem 0;
        }
        .text{
            height: 0.5rem;
            line-height: 0.5rem;
            font-size: 0.22rem;
        }
    }
    .G-MemberCentre-Nav{
        position: relative;
        background: #fff;
        margin-top: 0.92rem;
        -webkit-border-radius: 0.2rem;
        -moz-border-radius: 0.2rem;
        border-radius: 0.2rem;;
        .logobox{
            position: relative;
            span{
                right:-35px;
                top:-39px;
                position: absolute;
            }
        }
        .G-MemberCentre-Nav-capital{
            padding: 1rem 0.6rem 0.3rem 0.6rem;
            .G-M-N-L-sup{
                font-size: 0.3rem;
                line-height: 0.5rem;
                font-weight: bold;
            }
            .Hre{
                height: 0.4rem;
                line-height: 0.4rem;
                font-size: 0.38rem;
            }
            .G-M-N-L-sub{
                font-size: 0.24rem;
                line-height: 0.4rem;
                color: #9f9f9f;
            }
            .G-M-N-L{
                position: relative;
                text-align: left;
            }
            .G-M-N-R{
                text-align: left;
                padding-left: 0.3rem;
            }
            .G-M-N-L:after{
                content: "";
                position: absolute;
                height: 0.5rem;
                right: 0;
                top:0.21rem;
                border-right:1px solid #dedede;
            }
        }
        .G-M-N-lin{
            width: 90%;
            margin: 0 auto;
            height: 0.02rem;
            background-color: #dedede;
        }

    }
}
</style>
