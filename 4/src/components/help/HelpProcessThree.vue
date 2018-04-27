<template>
    <div class='HelpProcess'>
        <Top :text="Topobj"></Top>
        <div class="detail">
            <h1>存款是否需要交纳手续费或其他费用？</h1>
            <p>澳门银河接收快捷支付（包含支付宝转账、银行转账、银行存款、银行柜台存款、ATM机自动转账等）、在线支付、微信扫码、支付宝扫码等方式。当您通过支付宝、微信、网银、ATM方式存款成功后，存款手续金额由澳门银河承担，让您存款无忧。使用柜台存款的客户选择收款方支付将不享受存款手续费回馈。</p>
        </div>
    </div>
</template>

<script>
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                Topobj:{
                    text:'问题详情',
                    withdraw:'/HelpProcess',
                },
            }
        },
        computed: {},
        mounted: function () {
        },
        methods: {},
        created(){
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    @import "style.less";

.HelpProcess{
    font-size: 0;
    width: 100%;
    p{
        line-height: 18px;
    }
}

</style>