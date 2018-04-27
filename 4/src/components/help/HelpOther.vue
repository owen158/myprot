<template>
    <div class='HelpProcess'>
        <Top :text="Topobj"></Top>
        <el-row  style="margin-top: 10px;border-top: 1px solid #c4c4c4;" class="G_row">
            <router-link  style="display: block;" to="/HelpOtherOne">
                为何我的账号会被冻结？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpOtherTwo">
                为什么我会被登出？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpOtherThree">
                为什么我浏览的页面不能正常显示？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpOtherFour">
                为什么要进行验证？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpOtherFives">
                我可以只试玩而不下注吗？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpOtherSex">
                别人可以用我的账户进行交易吗？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpOtherSeven">
                最基本的注单查询方式？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpOtherEight">
                请问各个游戏的注额为多少？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpOtherNine">
                如何证明游戏结果是实时的？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpOtherTen">
                你们的流水红利政策是怎么样的？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpOtherEleven">
                有效流水在每个平台是如何计算的？<span class="el-icon-arrow-right"></span>
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
                    text:'其他问题',
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
    padding-bottom: 30px;
}
</style>