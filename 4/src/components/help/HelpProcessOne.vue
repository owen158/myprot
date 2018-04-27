<template>
    <div class='HelpProcess'>
        <Top :text="Topobj"></Top>
        <div class="detail">
            <h1>有哪些存款途径？</h1>
            <p>公司目前提供四种方式入款，1.支付宝支付；2.快捷支付；3.微信扫码；4.支付宝扫码，请您点击线上存款选择其中一种方式入款，谢谢！（注：选择快捷支付的客户，请您在每次入款前务必与我们联络确认汇款账号，如将款项存入已过期账号，导致公司无法查收，恕不负责，请您留意，谢谢！）</p>
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