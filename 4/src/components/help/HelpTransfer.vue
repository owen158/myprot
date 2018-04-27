<template>
    <div class='HelpProcess'>
        <Top :text="Topobj"></Top>
        <el-row  style="margin-top: 10px;border-top: 1px solid #c4c4c4;" class="G_row">
            <router-link  style="display: block;" to="/HelpTransferOne">
                什么是转账？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpTransferTwo">
                为什么游戏前要先进行转账？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpTransferThree">
                游戏和游戏之间可以互相转账吗？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpTransferFour">
                为什么向游戏转账会失败？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpTransferFives">
                转账流程<span class="el-icon-arrow-right"></span>
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
                    text:'转账流程',
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