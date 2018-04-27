<template>
    <div class='HelpProcess HelpCardbankOne'>
        <Top :text="Topobj"></Top>
        <h2 class="G_title">我的真实姓名会被泄漏吗？</h2>
        <div class="detail">
            <p style="margin-top: 0">我公司网站绝对安全，我们决不泄漏玩家的真实姓名及其他个人资料给任何商业机构。</p>
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