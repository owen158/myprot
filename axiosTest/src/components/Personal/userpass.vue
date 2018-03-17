<template>
    <div class='userpass'>
        <div class="formWrapper">
            <form action="">
                <div class="item-form">
                    <label for="pass"></label>
                    <input id="pass" type="password" placeholder="登录密码">
                </div>
                <div class="item-form">
                    <label for="newpass"></label>
                    <input id="newpass" type="password" placeholder="新密码">
                </div>
                <div class="item-form">
                    <label for="qrpass"></label>
                    <input id="qrpass" type="password" placeholder="确认密码">
                </div>
                <div class="solid"></div>
            </form>
            <div class="text-title">密码须为 <span class="text-c1">6～12</span>位英文或数字且符合a~z字元或0~9</div>
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
@import "../public/logRegister.less";
.userpass{
    padding-top: 0.2rem;
    width: 100%;
    .text-title{
        height: 0.8rem;line-height: 0.8rem;
        font-size: 0.25rem;
        color:@text-c6
    }
}
</style>