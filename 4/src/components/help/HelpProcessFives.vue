<template>
    <div class='HelpProcess'>
        <Top :text="Topobj"></Top>
        <div class="detail">
            <h1>快捷支付流程</h1>
            <p>1) &nbsp;任意首页中点击底部存款按钮，进入存款专区；</p>
            <p class="Hlpe_img">
                <img src="http://mobile.beike188.com/mobileYHH/image/help/HelpProcess/1.png" alt="">
            </p>
            <p>2) &nbsp;点选快捷支付，输入金额后点击下一步提交订单，注意输入金额要在限额范围内；</p>
            <p class="Hlpe_img">
                <img src="http://mobile.beike188.com/mobileYHH/image/help/HelpProcess/2.png" alt="">
            </p>
            <p>3) &nbsp;输入储蓄卡号后单击下一步；</p>
            <p class="Hlpe_img">
                <img src="http://mobile.beike188.com/mobileYHH/image/help/HelpProcess/3.png" alt="">
            </p>
            <p>4)&nbsp;输入手机号验证码取款密码并点击确认支付；</p>
            <p class="Hlpe_img">
                <img src="http://mobile.beike188.com/mobileYHH/image/help/HelpProcess/4.png" alt="">
            </p>
            <p>5)&nbsp;会员中心点击查询充值；</p>
            <p class="Hlpe_img">
                <img src="http://mobile.beike188.com/mobileYHH/image/help/HelpProcess/5.png" alt="">
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
                    withdraw:'/',
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