<template>
    <div class='userBankCard'>
        <div v-if="card != 1" class="AddCard">
            <router-link class="item" to='/addbankcard'>
                <div class="add">
                    <i class="iconfont icon-iconjia"></i>
                </div>
                <p class="text">您还没绑定银行卡</p>
            </router-link>

        </div>
        <div v-if="card === 1" class="bankcard">
            <p class="title">您目前中心钱包账户余额为 : <span class="Money">132465</span>元 </p>
            <div class="bg-bank-card">
                <p class="Name">发哥</p>
                <p class="cardName">建设银行</p>
                <p class="cardNam">56465446465456456465</p>
            </div>
        </div>
        <div class="solid"></div>
    </div>
</template>
<script>

    export default {
        data () {
            return {
               card:1
            }
        },
        computed: {},
        mounted: function () {},
        methods: {},
        created(){},
        components: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import "../../../static/css/style.less";
.userBankCard{
    min-height: 100%;
    background: @bg-c1;
    /*添加*/
    .AddCard{
        width: 95%;
        height: 3rem;
        margin: 0 auto;
        background:@bg-c2;
        .box-sizing;
        .border-box(1px,@border-c2);
        .border(3px);
        .item{
            padding-top: 0.7rem;
            display: block;
            .box-sizing;
            height: 100%;
        }
        .add{
            height: 1rem;
            line-height: 1rem;
            i{
                font-size: 0.5rem;
                color:@text-c5;
                .border(5px);
            }
        }
        .text{
            font-size: 0.3rem;
            color:@text-c5;
            line-height: 1rem;
        }
    }
    /*显示*/
    .bankcard{
        padding:0 0.25rem;
        height: 2.3rem;
        .title{
            height: 0.5rem;
            line-height: 0.5rem;
            font-size: 0.25rem;
            text-align: left;
            color:@text-c5;
            .Money{
                color:@text-c3;
                padding-left: 0.2rem;
                font-size: 0.3rem;
                padding-right: 0.1rem;
            }
        }
        .bg-bank-card{
            width: 95%;
            padding-left: 1.3rem;
            margin: 0 auto;
            height: 1.8rem;
            .border-box(1px,@border-c2);
            .border(3px);
            .box-sizing;
            background: url('http://192.168.0.140/newMobel/cardbj.png') no-repeat;
            background-size: 100% 100%;
            .cardName,.cardNam,.Name{
                text-align: left;
                color:@text-c6;
            }
            .Name{
                margin-top: 0.1rem;
                font-size: 0.32rem;
                font-weight: 900;
                height: 0.6rem;
                line-height: 0.6rem;
            }
            .cardName{
                height: 0.4rem;
                line-height: 0.4rem;
                font-size: 0.23rem;
                color:@text-c5;
            }
            .cardNam{
                height: 0.4rem;
                line-height: 0.4rem;
                font-size: 0.3rem;
            }
        }
    }
}
</style>