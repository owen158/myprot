<template>
    <div class='HelpProcess'>
        <Top :text="Topobj"></Top>
        <h2 class="G_title">转账流程</h2>
        <div class="detail">
            <p >当您在“澳门银河”成功存款后，即可进行转账操作。您只需根据以下提示，按下列步骤操作即可进行转账：</p>
            <h1>方式一：</h1>
            <p>1)&nbsp;登录“澳门银河”（或已处于登录状态），点击会员中心 “转账”项。</p>
            <p class="Hlpe_img">
                <img src="http://mobile.beike188.com/mobileYHH/image/help/HelpProcess15.png" alt="">
            </p>
            <p>或者选择资产总览中的平台列表</p>
            <p class="Hlpe_img">
                <img src="http://mobile.beike188.com/mobileYHH/image/help/HelpProcess16.png" alt="">
            </p>
            <p>2)&nbsp;点击下拉框选择需要转出和转入的平台，输入金额。</p>
            <p class="Hlpe_img">
                <img src="http://mobile.beike188.com/mobileYHH/image/help/HelpProcess17.png" alt="">
            </p>
            <p>3)&nbsp;点击确定转账，提示转账成功即可完成转账。</p>
            <p class="Hlpe_img">
                <img src="http://mobile.beike188.com/mobileYHH/image/help/HelpProcess18.png" alt="">
            </p>
            <h1>方式二：</h1>
            <p>1)&nbsp;登录“澳门银河”（或已处于登录状态），选择需要进入的游戏。</p>
            <p class="Hlpe_img">
                <img src="http://mobile.beike188.com/mobileYHH/image/help/HelpProcess19.png" alt="">
            </p>
            <p>2)&nbsp;点击进入游戏，弹出财务互转页面。</p>
            <p class="Hlpe_img">
                <img src="http://mobile.beike188.com/mobileYHH/image/help/HelpProcess20.png" alt="">
            </p>
            <p>3)&nbsp;点击下拉框选择需要转出的平台，输入金额。此时转入的平台为即将进入的游戏平台，不可进行更改；</p>
            <p class="Hlpe_img">
                <img src="http://mobile.beike188.com/mobileYHH/image/help/HelpProcess21.png" alt="">
            </p>
            <p>4)&nbsp;点击确定转账，提示转账成功即可完成转账。</p>
            <p class="Hlpe_img">
                <img src="http://mobile.beike188.com/mobileYHH/image/help/HelpProcess22.png" alt="">
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
                    withdraw:'/HelpTransfer',
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
            line-height: 17px;
        }
    }

</style>