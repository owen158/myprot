<template>
    <div class='HelpProcess'>
        <Top :text="Topobj"></Top>
        <div class="detail">
            <h1>提款申请为什么会不通过？</h1>
            <p>防止部分玩家利用我公司进行洗钱等非法资金操作，为避免部分玩家以套利为目的参与活动，我司对于所有的提款均会进行审核，申请不通过的主要因素考虑如下：<br>1、判断有效投注额是否达到存款，优惠的流水要求；（各游戏和局/未接受/取消注单，不纳入有效投注计算。）<br>2、取款信息是否符合取款者信息；<br>3、投注是否异常，存在恶意刷流水套利行为；<br>4、同一用户多账户行为；</p>
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
                    withdraw:'/HelpWithdrawal',
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