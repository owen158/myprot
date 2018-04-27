<template>
    <div class='HelpProcess HelpCardbankOne'>
        <Top :text="Topobj"></Top>
        <h2 class="G_title">所有类型的银行卡都可以绑定吗？</h2>
        <div class="detail">
            <p style="margin-top: 0">不可以！我公司目前仅支持绑定借记卡，信用卡暂不支持使用。</p>
        </div>

        <!--<router-link  style="display: block;" to="/HelpWithdrawalEight">-->
        <!--提款申请为什么会不通过？<span class="el-icon-arrow-right"></span>-->
        <!--</router-link>-->
        <!--</el-row>-->
    </div>
</template>

<script>
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                Topobj:{
                    text:'问题详情',
                    withdraw:'/HelpCardbank',
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
    .HelpCardbankOne{
        background: #fff;

    }
    .HelpProcess{
        min-height: 100%;
        font-size: 0;
        width: 100%;
        p{
            line-height: 20px;
        }
    }

</style>