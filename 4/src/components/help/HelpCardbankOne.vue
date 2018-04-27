<template>
    <div class='HelpProcess HelpCardbankOne'>
        <Top :text="Topobj"></Top>
        <h2 class="G_title">如何绑定银行卡？</h2>
        <div class="detail">
            <p >具体操作流程如下：<br>(1)登录玩家中心后，依次点选 “账户管理-&gt;银行卡信息”；<br>(2)根据页面提示填写相关银行卡信息；<br>(3)确认信息无误后，点击“确认”即可完成绑定</p>
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