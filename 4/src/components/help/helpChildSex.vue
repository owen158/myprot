<template>
    <div class='helplogreg HelpChildOne'>
        <Top :text="Topobj"></Top>
        <h2 class="G_title">你们的流水红利政策是怎么样的？</h2>
        <div class="detail" style="padding-top: 0">
            <p style="margin-top: 0">目前我们有以下红利：<br>新用户首存红利<br>澳门银河娱乐场、钻石厅娱乐场有周返水红利<br>快乐彩周返水红利<br>体育周返水红利<br>银行转账存提款“报销”存款手续费优惠红利</p>
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