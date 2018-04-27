<template>
    <div class='AlipayscanPay'>
        <Top :text="Topobj"></Top>
        <!--<Top :text="userNew.text"></Top>-->
        <!--<withdraw :src="withdraw"></withdraw>-->
        <div  v-if="AlipayscanPayNum === 1">
            <div style="font-size: 0.35rem;" id="alipay1"></div>
        </div>
        <div v-if="AlipayscanPayNum === 2">
            <div v-if="AlipayscanPay != null" style="margin: 0.5rem;" class="row">
                <div class="codeImg row">
                    <qriously :value="AlipayscanPay.qrcode" :size="200" />
                </div>
                <div  style="font-size: 0.25rem;text-align: left;margin-top:0.5rem;" class='row'>
                    <div class="col-6">
                        用户名：<span>{{AlipayscanPay.user_name}}</span>
                    </div>
                    <div class="col-6">
                        金额： <span>{{AlipayscanPay.acount}}</span>
                    </div>
                </div>
                <div style="font-size: 0.25rem;height: 0.6rem;line-height: 0.6rem;text-align: left" class="order_no row">
                    订单号：<span>{{AlipayscanPay.order_no}}</span>
                </div>
            </div>
        </div>
        <div v-if="AlipayscanPayNum === 3">
            <div v-if="AlipayscanPay != null" style="margin: 0.5rem;" class="row">
                <div class="codeImg row" >
                    <img  :src="AlipayscanPay.qrcode_url" alt="">
                </div>
                <div  style="font-size: 0.25rem;text-align: left;margin-top:0.5rem;" class='row'>
                    <div class="col-6">
                        用户名：<span>{{AlipayscanPay.user_name}}</span>
                    </div>
                    <div class="col-6">
                        金额： <span>{{AlipayscanPay.acount}}</span>
                    </div>
                </div>
                <div style="font-size: 0.25rem;height: 0.6rem;line-height: 0.6rem;text-align: left" class="order_no row">
                    订单号：<span>{{AlipayscanPay.order_no}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    var vm;
    import withdraw from '../public/return.vue'
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                Topobj:{
                    text:'支付',
                    withdraw:'/'
                }
//                withdraw:'/deposit',
            }
        },
        computed: {
            AlipayscanPay:function () {//游戏组件
                return this.$store.state.AlipayscanPay;
            },
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            },
            AlipayscanPayNum:function () {
                return this.$store.state.AlipayscanPayNum
            }
        },
        methods() {
        },
        mounted() {
            vm = this;
            if(vm.AlipayscanPay == null || vm.AlipayscanPay == '' || vm.AlipayscanPay == undefined){
                vm.$router.go(-1);
            }else{
                if(vm.AlipayscanPayNum ===1){
                    $('#alipay1').append(vm.AlipayscanPay);
                    $('#actform').submit();
                    return;
                }
            }
        },
        components: {
            Top,
            withdraw
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.AlipayscanPay{
    color:#222;
    width:100%;
    .AlipayscanPayType3{
        width:100%;
    }
    .codeImg{
        width:100%;
        text-align: center;
        min-height: 3rem;
        img{
            width:50%;
            height: 3rem;
            vertical-align: middle;
        }
    }
}
</style>