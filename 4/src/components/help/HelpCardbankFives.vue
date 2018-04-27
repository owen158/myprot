<template>
    <div class='HelpProcess HelpCardbankOne'>
        <Top :text="Topobj"></Top>
        <h2 class="G_title">为什么我要设置真实姓名？</h2>
        <div class="detail">
            <p style="margin-top: 0">真实姓名是证明您身份的重要凭证之一，且真实姓名将用于匹配收款银行账号，银行卡账户名与玩家真实姓名一致时才可以取款成功！为确保您账户的安全，真实姓名一旦设置不可修改！</p>
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