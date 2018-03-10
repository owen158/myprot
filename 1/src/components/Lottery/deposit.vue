<template>
    <div class='deposit row'>
        <!--//************新增 2018 03 06**********//-->
        <div class="col-4 A-main" @click="PageJump($event)" v-for="v in bankcard.PlatformPay" :data-src="v.src"
             v-if="v.src === '/Online' ? userNew.applet : true" :data-type="v.type">
            <p class="A-img">
                <i :class="v.icon"></i>
            </p>
            <p class="A-title">{{v.title}}</p>
            <p class="A-text">{{v.text}}</p>
        </div>
        <div class="" v-if="bankcard.PlatformPay === ''" style="font-size: 0.25rem;line-height: 0.5rem;text-align: center">
            未开通支付渠道
            <router-link to="/NoteSingle" style="color: red;">
                在线客服
            </router-link>
        </div>
        <!--//************新增 2018 03 06**********//-->
    </div>
</template>
<script>
    export default {
        data() {
            return {
            };
        },
        computed: {
            userNew: function () {
                //判断登录
                return this.$store.state.userNew;
            },
            bankcard() {//新增 2018 03 06
                return this.$store.state.bankcard; //刷新
            }
        },
        mounted: function () {
        },
        methods: {
            PageJump: function (event) {
                //************新增 2018 03 06**********//
                let el, vm, type;
                vm = this;
                el = event.currentTarget.getAttribute("data-src");
                type = event.currentTarget.getAttribute("data-type");
                if(type === '5' || type === '6' || type === '7' || type === '8' || type === '10' || type === '12' || type === '14' ){
                    vm.$store.dispatch("inceuserNew", {id: 8, src: el, type: type});
                    vm.$BugNewPaymentList(vm, {type: type});
                }else{
                    vm.$router.push({path: el});
                }
                //************新增 2018 03 06**********//
            }
        },
        components: {}
    };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
    @import "../../../static/css/style.less";
    .deposit {
        margin-top: 0.2rem;
        width: 100%;

        .A-main {
            height: 2.2rem;
            background: #fff;
            .A-img {
                height: 1.3rem;
                padding-top: 0.3rem;
            }

            .A-title {
                height: 0.5rem;
                line-height: 0.5rem;
                font-size: 0.25rem;
                color: #999;
            }
            .A-text {
                height: 0.3rem;
                line-height: 0.3rem;
                font-size: 0.3rem;
                color: #333;
            }
        }
        .A-main:nth-child(1n+1){
            border-right:1px solid #d1dbe5;
        }
        .A-main:nth-child(1n+1){
            border-right:1px solid #d1dbe5;
        }
        .A-main:nth-child(2){
            border-top:1px solid #d1dbe5;
        }
        .A-main:nth-child(1){
            border-top:1px solid #d1dbe5;
        }
        .A-main:nth-child(3){
            border-top:1px solid #d1dbe5;
        }
        .A-main:nth-child(1n+0){
            border-bottom:1px solid #d1dbe5;
        }
        .A-main:nth-child(3n){
            border-right:none;
        }
    }
</style>
