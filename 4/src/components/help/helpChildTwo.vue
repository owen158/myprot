<template>
    <div class='helplogreg HelpChildOne'>
        <Top :text="Topobj"></Top>
        <h2 class="G_title">快捷支付存款未到账如何处理？</h2>
        <div class="detail" style="padding-top: 0">
            <p style="margin-top: 0">由于跨行汇款的到账时间是取决银方面办理速度，一般都是有1-8小时的到账时间，请您耐心等待。如果已成功汇款，可能是由于第三方支付公司还没有收到您的款项，请麻烦发送小票的扫描件或是清晰照片（如果是网银汇款请发送汇款回单的截图）给我们，我们会马上为您提交到第三方支付公司进行查询。</p>
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