<template>
    <div class='HelpProcess'>
        <Top :text="Topobj"></Top>
        <div class="detail">
            <h1>为什么向游戏转账会失败？</h1>
            <p >向游戏转账失败可能存在以下几种原因：<br>(1)第三方游戏数据异常或正在升级维护中；<br>(2)数据对接异常，暂时无法进行资金操作；<br>(3)网络连接异常，导致订单超时。<br>转账失败时，建议您重新发起请求，或稍等片刻后再进行操作！</p>
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