<template>
    <div class='Personal'>
        <Top :text ='text'></Top>
        <div class="solid"></div>
        <div class="userwrapper row">
            <div class="col-2 item photo">
                <span class="iconfont icon-touxiang"></span>
            </div>
            <div class="col-9 item user">
                <p class="name">gar020</p>
                <p class="wallet"><i class="iconfont icon-shangchengxitongtubiaozitihuayuanwenjian84"></i><span class="money">4564</span></p>
            </div>
            <div class="col-1 item Refresh ">
                <i class="iconfont icon-shuaxin"></i>
            </div>
        </div>
        <div class="solid"></div>
        <div class="row title">
            <router-link class="col-4 tad Recharge" to="/Deposits">
                充值
            </router-link>
            <router-link class="col-4 tad withdraw" to="/userBankCard">
                提现
            </router-link>
            <router-link class="col-4 tad Transfer" to="/Transfer">
                平台互转
            </router-link>
        </div>
        <div class="ListBox row">
            <div class="col-3 item" v-for="v in List">
                <router-link class="main " :to="v.to">
                    <p class="title-Login"><span :class="v.Class"></span></p>
                    <p class="title-text">{{v.title}}</p>
                </router-link>
            </div>
            <div class="col-3 item">
                <a class="main">
                    <p class="title-Login"><span class="iconfont icon-tuichu"></span></p>
                    <p class="title-text">退出</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
//
    import Top from '../Public/Top.vue'
    export default {
        data () {
            return {
                text:{
                    title:'个人中心',
                    text:'PERSONAL CENTER'
                },
                List:[
                    {Class:'iconfont icon-gerenziliao',title:'个人资料',to:'/personalVip'},
                    {Class:'iconfont icon-yinhangqia',title:'银行卡',to:"/userBankCard"},
                    {Class:'iconfont icon-xiugaimima',title:'修改密码',to:'/modifyPass'},
                    {Class:'iconfont icon-jilu2-copy-copy',title:'投注记录',to:'/lotteryForm'},
                    {Class:'iconfont icon-jilu1',title:'转账记录',to:'/accountDetails'},
                    {Class:'iconfont icon-chongzhijilu',title:'充值记录',to:'/rechargeRecord'},
                    {Class:'iconfont icon-kuanyi20guanqiantixianjilu',title:'提款记录',to:'/withdrawRecord'},
                    {Class:'iconfont icon-liushuizijin',title:'资金流水',to:'/bonusDetails'},
                    {Class:'iconfont icon-youhuihuodong',title:'优惠活动',to:'/collection'},
                ]
            }
        },
        computed: {
        },
        mounted:function(){
        },
        methods:{
        },
        created(){
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    @import "../../../static/css/style.less";
.Personal{
    /*background: #f5f5f9;*/
    font-size:0;
    .userwrapper{
        padding:0.15rem;
        .item{
            height: 1.4rem;
            color:@text-c6;
            text-align: left;
        }
        .photo,.user,.Refresh{
            padding-top: 0.2rem;
        }
        .photo{
            text-align:center;
            span{
                font-size: 0.8rem;
            }
        }
        .user{
            p{
                height: 0.4rem;
                line-height: 0.4rem;
            }
            .name{
                font-size: 0.35rem;
            }
            .wallet{
                i{
                    font-size: 0.4rem;
                    color:@text-c3;
                }
                .money{
                    font-size: 0.25rem;
                }
            }
        }
        .Refresh{
            text-align: center;
            line-height: 0.8rem;
            i{
                font-size: 0.6rem;
            }
        }
    }
    .title{
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
        height: 0.8rem;
        /*border-top: 1px solid #e5e5e5;*/
        /*border-bottom: 1px solid #e5e5e5;*/
        /*box-shadow: 0px 3px 3px #e5e5e5;*/
        background: @bg-c2;
        .tad{
            font-size: 0.3rem;
            display: block;
            margin-top: 0.2rem;
            line-height: 0.4rem;
            font-weight: 700;
            text-align: center;
        }
        .Recharge{
            color:darkred;
        }
        .withdraw{
            color:#42b983;
            border-left: 1px solid @text-c7;
            border-right: 1px solid @text-c7;
        }
        .Transfer{
            color:@text-c5;
        }
    }
    .ListBox{
        .item{
            height: 1.8rem;
            padding:0.15rem;
            .main{
                /*background: #42b983;*/
                display: block;
                width: 100%;
                background: @bg-c5;
                -webkit-border-radius:3px;
                -moz-border-radius:3px;
                border-radius:3px;
                height: 100%;
                box-shadow: 0px 0px 5px @text-c1;
                .title-Login{
                    height: 1rem;
                    text-align: center;
                    line-height: 1rem;
                    span{
                        font-size: 0.7rem;
                        color:@text-c5
                    }
                }
                .title-text{
                    height: 0.5rem;
                    line-height: 0.5rem;
                    font-size: 0.25rem;
                    color:@text-c3;
                    text-align: center;
                }
            }
        }
    }
}
</style>