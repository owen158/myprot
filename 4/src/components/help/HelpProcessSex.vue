<template>
    <div class='HelpProcess'>
        <Top :text="Topobj"></Top>
        <div class="detail">
            <h1>支付宝扫码流程</h1>
            <p>1)&nbsp;登录玩家中心后，进入存款专区，请点选【支付宝扫码】选项；</p>
            <p class="Hlpe_img">
                <img src="http://mobile.beike188.com/mobileYHH/image/help/HelpProcess6.png" alt="">
            </p>
            <p>2)&nbsp;输入金额后点击下一步提交订单，注意输入金额要在限额范围内。</p>
            <p class="Hlpe_img">
                <img src="http://mobile.beike188.com/mobileYHH/image/help/HelpProcess7.png" alt="">
            </p>
            <p>3)&nbsp;使用另一个手机或者保存二维码图片之后用支付宝扫一扫完成订单支付。点击完成存款提交订单；<br><span class="red">若已完成支付，在系统未返回结果前请勿点击取消订单，否则将造成金额无法入账；</span></p>
            <p class="Hlpe_img">
                <img src="http://mobile.beike188.com/mobileYHH/image/help/HelpProcess8.png" alt="">
            </p>
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