<template>
    <div class='ScanCode'>
        <Top :text="text"></Top>
        <Ruten :RouT="RouT"></Ruten>
        <div class="solid"></div>
        <div class="item">
            <router-link class="row" to="Conflrm">
               <div class="col-2 main">
                   <b class="x-icon x-icon-tenpay"></b>

               </div>
                <div class="col-10 main text">
                    财付通
                </div>
            </router-link>
        </div>
        <div class="item">
            <router-link class="row" to="Conflrm">
                <div class="col-2 main">
                    <b class="x-icon x-icon-Alipay"></b>
                </div>
                <div class="col-10 main text">
                    支付宝
                </div>
            </router-link>
        </div>
        <div class="item">
            <router-link class="row" to="Conflrm">
                <div class="col-2 main">
                    <b class="x-icon x-icon-wechat"></b>
                </div>
                <div class="col-10 main text">
                    微信支付
                </div>
            </router-link>
        </div>
        <div class="solid"></div>
    </div>
</template>

<script>
    import Top from '../Public/Top.vue'
    import Ruten from '../Public/Ruten.vue'
    export default {
        data () {
            return {
                RouT:'/DepositsChild',
                text:{
                    title:'扫码支付',
                    text:'Scan Code'
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
            Top,
            Ruten
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import "../../../static/css/style.less";
.ScanCode{
    width: 100%;
    font-size: 0;
    padding-top: 0.9rem;
    padding-bottom: 0.8rem;
    min-height: 100%;
    background: @bg-c1;
    .item{
        height: 1.2rem;
        padding-top: 0.08rem;
        border-bottom: 1px solid @border-c2;
        border-top: 1px solid @border-c2;
        margin: 0.2rem 0;
        .box-sizing;
        .main{
            height: 100%;
        }
        .text{
            font-size: 0.3rem;
            text-align: left;
            height: 1rem;
            line-height: 1rem;
            padding-left: 0.2rem;
            font-weight: 900;
        }
    }
}
</style>