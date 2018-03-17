<template>
    <div class='bankpass'>
        <div class="formWrapper">
            <form action="">
                <div class="item-form">
                    <label for="pass"></label>
                    <input id="pass" type="password" placeholder="资金密码">
                </div>
                <div class="item-form">
                    <label for="newpass"></label>
                    <input id="newpass" type="password" placeholder="新资金密码">
                </div>
                <div class="item-form">
                    <label for="qrpass"></label>
                    <input id="qrpass" type="password" placeholder="确认密码">
                </div>
                <div class="solid"></div>
            </form>
            <div class="text-title">资金密码须为 <span class="text-c1">4位数字</span>且符合0~9字元</div>
            <div class="Submit">确 认</div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {}
        },
        computed: {},
        mounted: function () {
        },
        methods: {},
        created(){
        },
        components: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    @import "../../../static/css/style.less";
.bankpass{
    padding-top: 0.2rem;
    width: 100%;
    .text-title{
        height: 0.8rem;line-height: 0.8rem;
        font-size: 0.25rem;
        color:@text-c6
    }
}
</style>