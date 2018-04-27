<template>
    <div class='HelpProcess'>
        <Top :text="Topobj"></Top>
        <el-row  style="margin-top: 10px;border-top: 1px solid #c4c4c4;" class="G_row">
            <router-link  style="display: block;" to="/HelpWithdrawalOne">
                提款流程<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpWithdrawalTwo">
                提款限额是多少？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpWithdrawalThree">
                提款什么时候可以到账？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpWithdrawalFour">
                可否提款到其他人的银行卡？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpWithdrawalFives">
                提款是否需要交纳手续费或其他费用？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpWithdrawalSex">
                当我在真人游戏赢了钱，我该如何提款？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpWithdrawalSeven">
                可以取消提款申请吗？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpWithdrawalEight">
                提款申请为什么会不通过？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
    </div>
</template>

<script>
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                Topobj:{
                    text:'提款流程',
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