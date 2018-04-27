<template>
    <div class='HelpProcess'>
        <Top :text="Topobj"></Top>
        <el-row  style="margin-top: 10px;border-top: 1px solid #c4c4c4;" class="G_row">
            <router-link  style="display: block;" to="/HelpAccountOne">
                我进行游戏有安全保障吗？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpAccountTwo">
                隐私保护规则<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpAccountThree">
                投注规则与规定<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpAccountFour">
                博彩责任<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpAccountFives">
                规则与条款<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpAccountSex">
                用户隐私协议<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>

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
                    text:'账户安全',
                    withdraw:'/help',
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
    }

</style>