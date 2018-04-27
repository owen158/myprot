<template>
    <div class='helplogreg HelpChildOne'>
        <Top :text="Topobj"></Top>
        <h2 class="G_title">有效流水在每个平台是如何计算的？</h2>
        <div class="detail" style="padding-top: 0">
            <p style="margin-top: 0">有效流水计算： 1.百家乐项目，若单局输赢的绝对值大于75%本金，以本金作为有效投注额。 2.其他盘口按单局本金计算有效投注额。当投注净输时，按净输金额绝对值计算流水；当投注净赢金额&lt;75%，则按净赢金额计算流水，净赢金额&gt;=75%，以全额投注金额计算流水。</p>
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