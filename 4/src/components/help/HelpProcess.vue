<template>
    <div class='HelpProcess'>
        <Top :text="Topobj"></Top>
        <h2 class="G_hlep_title">
            我们一直将保护客户隐私及安全性作为首要宗旨，所有支付交易的处理均采用了最高标准的数据加密方式，采用128位SSL加密技术和严格的安全管理体系，确保客户安全得到最完善的保障。
        </h2>
        <el-row  style="margin-top: 10px;border-top: 1px solid #c4c4c4;" class="G_row">
            <router-link  style="display: block;" to="/HelpProcessOne">
                有哪些存款途径？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpProcessTwo">
                存款未到账如何处理？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpProcessThree">
                存款是否需要交纳手续费或其他费用？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpProcessFour">
                为什么在线支付成功后额度没有立即增加？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpProcessFives">
                快捷支付流程<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpProcessSex">
                支付宝扫码流程<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpProcessSeven">
                微信扫码流程<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/HelpProcessEight">
                支付宝支付流程<span class="el-icon-arrow-right"></span>
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
                    text:'存款流程',
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