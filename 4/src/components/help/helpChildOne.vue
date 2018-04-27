<template>
    <div class='helplogreg HelpChildOne'>
        <Top :text="Topobj"></Top>
        <h2 class="G_title">为什么在线支付成功后额度没有立即增加？</h2>
        <div class="detail" style="padding-top: 0">
            <p style="margin-top: 0">这是因为在线支付系统需要经过密锁切换及内部验证程序，而这也是我们的保安程序之一，所以请您不必担心，款项一定不会丢失。如果您在在线支付超过30分钟后仍然还未收到您的款项，请与我们客服联系处理。</p>
        </div>
    </div>
</template>

<script>
    import Top from '../Top/Top.vue'
    export default {
        data() {
            return {
                Topobj: {
                    text: '问题详情',
                    withdraw: '/help',
                },
            }
        },
        computed: {},
        mounted: function() {},
        methods: {},
        created() {},
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    @import "style.less";
    .HelpChildOne{
        height: 100%;
        background: #fff;
        .G_title{
            font-size: 14px;
        }
    }
    .helplogreg {
        font-size: 0;
        width: 100%;
        p{
            line-height: 20px;
            font-size: 13px;
        }

    }
</style>