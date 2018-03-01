<template>
    <div class='MemberCentre' ref="BackG">
        <Top :text="userNew.text"></Top>
        <div class="A-title MemberBox">
            <div  v-if="userNew.Login === false" class="row MemberTitle">
                <div class="col-2 userlf A-user">
                    <i class="iconfont icon-touxiang"></i>
                </div>
                <div class="col-10 A-login-hide userrf">
                    <router-link to="/LogIn">
                        登录
                    </router-link>
                    <span>/</span>
                    <router-link  to="/Registered">
                        注册
                    </router-link>
                </div>
            </div>
            <div v-if="userNew.Login === true" class="row MemberTitle">
                <div class="col-2 A-user">
                    <i class="iconfont icon-touxiang"></i>
                </div>
                <div class="col-10 A-login-show">
                    <div class="col-10">
                        <h2 class=" A-name">{{userNew.userName}}</h2>
                        <p class="A-Money"><b class="iconfont icon-shangchengxitongtubiaozitihuayuanwenjian84"></b>{{userNew.userMoney}}</p>
                    </div>
                    <div @click="Refreshmoney()" class="col-2 A-tran">
                        <i class="iconfont icon-shuaxin1"></i>
                    </div>
                </div>
            </div>
            <div class="row A-MemberTransfer">
                <div class="col-4 A-tad">
                    <router-link  to="/deposit" >
                        充值
                    </router-link>
                </div>
                <div class="col-4 A-tad">
                    <router-link  to="/Withdrawals" >
                        提现
                    </router-link>
                </div>
                <div class="col-4 A-tad">
                    <router-link to="/interchange" >
                        平台互转
                    </router-link>
                </div>
            </div>
            <div class="row A-content" >
                <div class="col-3" v-for="v in user_">
                    <a href="javascript:void(0)" @click="pages($event)" :data-src="v.url" >
                        <p class="A-img">
                            <i :class="v.img"></i>
                        </p>
                        <p class="A-text">
                            {{v.title}}
                        </p>
                    </a>
                </div>
                <div class="col-3">
                    <a @click="dropOut()" href="javascript:void(0)">
                        <p class="A-img">
                            <i class="iconfont icon-tuichu"></i>
                        </p>
                        <p class="A-text">
                            退出
                        </p>
                    </a>
                </div>
            </div>
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
                    {img:'icon-gerenziliao iconfont',title:'个人资料',url:'/gameLimit'},
                    {img:'iconfont icon-yinhangqia',title:'银行卡',url:'/userBankCard'},
                    {img:'iconfont icon-xiugaimima',title:'修改密码',url:'/userSettings'},
                    {img:'iconfont  icon-jilu',title:'投注记录',url:'/lotteryForm'},
                    {img:'iconfont icon-jilu1',title:'转账记录',url:"/accountDetails"},
                    {img:'iconfont icon-chongzhijilu',title:'充值记录',url:'/rechargeRecord'},
                    {img:'iconfont icon-jilu2-copy-copy',title:'提款记录',url:'/withdrawRecord'},
//                    {img:'iconfont icon-jifenduihuanjilu',title:'积分兑换记录',url:'/integralRecording'},
                    {img:'iconfont icon-liushuizijin',title:'资金流水',url:"/bonusDetails"},
                    {img:'iconfont icon-youhuihuodong',title:'优惠活动',url:'/collection'},
//                    {img:'iconfont icon-jifenshangchengtubiao',title:'积分商城',url:'/integral'}
                ],
                one:[
                    {img:'iconfont icon-06',title:'投注记录',url:'/lotteryForm'},
                    {img:'iconfont icon-jilu2-copy-copy',title:'转账记录',url:"/accountDetails"},
                    {img:'iconfont icon-chongzhijilu',title:'充值记录',url:'/rechargeRecord'},
                    {img:'iconfont icon-jilu',title:'提款记录',url:'/withdrawRecord'},
                ],
                two:[
                    {img:'iconfont icon-liushuizijin',title:'资金流水',url:"/bonusDetails"},
                    {img:'iconfont icon-youhuihuodong',title:'优惠活动',url:'/collection'}
                ]
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            }
        },
        mounted() {
            this.setBackground()
        },
        methods:{
            setBackground(){
                this.$refs.BackG.style.minHeight = window.innerHeight+'px';
            },
            dropOut:function () {
                vm=this;
                this.$confirm('是否继续退出?', '系统提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    vm.$BugNewdropOut(vm,{},'logout.do');
                }).catch(() => {
                });
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
                        store.dispatch("incrObtain",{id:0,data:{BType:"WALLET"}});
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
                vm.$store.dispatch("incrObtain",{id:0,data:{BType:"WALLET"}});
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
<style lang='less' scoped>
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
    .Bg-BackGround;
    padding-top: 0.8rem;
    .MemberTitle{
        font-size: 0;
        height: 2rem;
        /*background: @bg-c3;*/
        background: url("http://192.168.0.140:82/mobileTX/images393/mybg.jpg") no-repeat;
        background-size: 100% 100%;
        padding: 0.15rem;
        .A-user{
            height: 1.7rem;
            line-height:1.7rem;
            i{
                font-size: 0.8rem;
                color:@colorOne;
            }
        }
        .A-login-show,.A-login-hide,.A-tran{
            height: 1.7rem;
        }
        .A-login-hide{
            a,span{
                float: left;
                line-height: 1.7rem;
                font-size: 0.3rem;
                color: @colorOne;
            }
            span{
                margin: 0 0.15rem;
            }
        }
        .A-login-show{
            .A-name{
                font-size: 0.3rem;
                text-align: left;
                margin-top: 0.3rem;
                height: 0.6rem;
                line-height: 0.6rem;
                color:@text-c3;
            }
            .A-Money{
                height: 0.5rem;
                line-height: 0.5rem;
                text-align: left;
                color: #f39c12;
                font-size: 0.35rem;
                b{
                    color:@text-c3;
                    font-size: 0.45rem;
                }
            }
        }
        .A-tran{
            line-height: 1.7rem;
            i{
                font-size: 0.5rem;
                color:@text-c3;
            }
        }
    }
    .A-MemberTransfer{
        .A-tad{
            height: 0.8rem;
            .Bg-Nav-Title;
            a{
                margin-top: 0.1rem;
                display: block;
                line-height: 0.6rem;
                font-size: 0.35rem;
                color:@size-color;
            }
        }
        .A-tad:not(:nth-child(1)){
            a{
                border-left: 1px solid #fff;
            }
        }
    }
    .A-content{
        width: 100%;
        a{
            display: block;
            width: 90%;
            .border(1px,@border);
            background: #fff;
            border-radius: 3px;
            margin: 0.15rem auto;
            .A-img{
                width: 100%;
                line-height: 1rem;
                height: 1rem;
                i{
                    font-size: 0.6rem;
                    color:@colorOne
                }
            }
            .A-text{
                height:0.5rem ;
                line-height: 0.5rem;
                text-align: center;
                font-size: 0.3rem;
                color:@colorOne;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
}
</style>
