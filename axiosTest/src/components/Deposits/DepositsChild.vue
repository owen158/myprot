<template>
    <div class='DepositsChild'>
        <div @click="submit($event)" class="item col-4" data-type="5">
                <p class="sup">
                    <b class="x-icon x-icon-Online"></b>
                </p>
                <div class="sub">
                    <b class="text-top">网银支付</b>
                    <span class="text-bom">Online payment</span>
                </div>
        </div>
        <div @click="submit($event)" class="item col-4" data-type="6">
                <p class="sup">
                    <b class="x-icon-Alipay x-icon"></b>
                </p>
                <div class="sub">
                    <b class="text-top">支付宝</b>
                    <span class="text-bom">Alipay</span>
                </div>

        </div>
        <div class="item col-4">
            <router-link class="" to="/ScanCode">
                <p class="sup">
                    <b class="x-icon x-icon-ScanCode"></b>
                </p>
                <div class="sub">
                    <b class="text-top">扫码支付</b>
                    <span class="text-bom">Scan Code</span>
                </div>
            </router-link>
        </div>
        <div @click="submit($event)" class="item col-4" data-type="7">
                <p class="sup">
                    <b class="x-icon x-icon-wechat"></b>
                </p>
                <div class="sub">
                    <b class="text-top">微信支付</b>
                    <span class="text-bom">Wechat</span>
                </div>
        </div>
        <div @click="submit($event)" class="item col-4" data-type="8">
                <p class="sup">
                    <b class="x-icon x-icon-tenpay"></b>
                </p>
                <div class="sub">
                    <b class="text-top">财付通</b>
                    <span class="text-bom">Tenpay</span>
                </div>
        </div>
        <div class="item col-4">
            <router-link class="" to="/BankTransfer">
                <p class="sup">
                    <b class="x-icon x-icon-Banktranfer"></b>
                </p>
                <div class="sub">
                    <b class="text-top">银行汇款</b>
                    <span class="text-bom">Bank tranfer</span>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
    var vm;
    export default {
        data () {
            return {
                text:'存款',
                RouT:'/Deposits'
            }
        },
        computed: {
            jrg:function () {////url
                return this.$store.state.jrg;
            },
        },
        mounted: function () {
        },
        methods: {
            submit:function (event) {
                vm =this;
                vm.$getPaymentList(vm,{type:event.currentTarget.getAttribute('data-type')},vm.jrg+'PlatformPay/getPaymentList');
            }
        },
        created(){},
        components: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import "../../../static/css/style.less";
.DepositsChild{
    width: 100%;
    font-size: 0rem;
    .item{
        background: @bg-c5;
        height: 2.2rem;
        border: 1px solid @border-c2;
        .box-sizing;
        border-left:none;
        a{
            display: block;
            width: 100%;
            height: 100%;
        }
        .sup{
            padding-top: 0.2rem;
            height: 1.35rem;
        }
        .sub{
            height: 0.9rem;
            .text-top,.text-bom{
                display: block;
            }
            .text-top{
                height: 0.45rem;
                line-height: 0.45rem;
                color: @text-c6;
                font-size: 0.3rem;
            }
            .text-bom{
                height: 0.35rem;
                line-height: 0.35rem;
                font-size: 0.25rem;
                color:@text-c5;
            }
        }
    }
    .item:nth-child(n+4){
        border-top:none;
    }
    .item:nth-child(3n+0){
        border-right:none;
    }
}
</style>