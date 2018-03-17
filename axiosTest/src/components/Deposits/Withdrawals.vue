<template>
    <div class='Withdrawals'>
        <div class="bankcard">
            <p class="title">您目前中心钱包账户余额为 : <span class="Money">132465</span>元 </p>
            <div class="bg-bank-card">
                <p class="Name">发哥</p>
                <p class="cardName">建设银行</p>
                <p class="cardNam">56465446465456456465</p>
            </div>
        </div>
        <div class="solid"></div>
        <div class="formWrapper">
            <form id="draw" action="">
                <p class="title-text">
                    要求打码量
                </p>
                <div class="item-form">
                    <input ref="disabled1" type="text" disabled placeholder="0">
                </div>
                <p class="title-text">
                    完成打码量
                </p>
                <div class="item-form">
                    <input ref="disabled2"  type="text" disabled placeholder="0">
                </div>
                <p class="title-text">
                    金额
                </p>
                <div class="item-form">
                    <input v-numd type="text" placeholder="金额">
                </div>
                <p class="title-pvw">提款金额 : {{min}}-{{man}} 元</p>
                <p class="title-text">
                    提款密码
                </p>
                <div class="item-form">
                    <input v-num type="password" minlength="4" maxlength="6" placeholder="资金密码">
                </div>
            </form>
            <div class="Submit">提 交</div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                min:100,
                man:500000
            }
        },
        computed: {},
        mounted: function () {
            this.$refs.disabled1.parentNode.style.background='#696969';
            this.$refs.disabled2.parentNode.style.background='#696969';
        },
        methods: {},
        created(){
        },
        components: {
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import "../../../static/css/style.less";
@import "../public/logRegister.less";
.Withdrawals{
    padding-bottom: 1.3rem;
    width: 100%;
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
    .title-text{
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.3rem;
        padding-left: 0.2rem;
        text-align: left;
        color: @text-c6;
        font-weight: 800;
    }
    .title-pvw{
        height: 0.8rem;
        line-height: 0.8rem;
        font-size: 0.28rem;
        color: @text-c3;
    }
    #draw{
        .item-form{
            border-bottom: 1px solid @border-c2;
            .box-sizing;
            border-top: 1px solid @border-c2;
        }
        .item-form>input{
            padding-left: 0.35rem;
        }
        input:disabled{
            color:@text-c4;
            background: @text-c5;
        }
    }

}
</style>