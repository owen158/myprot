<template>
    <div class='HelpProcess HelpCardbankOne'>
        <Top :text="Topobj"></Top>
        <h2 class="G_title">如何更换已绑定的银行卡？</h2>
        <div class="detail">
            <p style="margin-top: 0">银行卡更换与绑定流程基本一致，具体操作步骤详见如何绑定银行卡？其中，仅支持更换为账户名与真实姓名一致的银行卡，否则取款将失败！<br>温馨提示：<br>若由于玩家绑定的银行卡账户名与您填写的真实姓名不一致，而导致出款失败或延迟，请玩家自行负责！</p>
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