<template>
    <div ref="help" class='G_help fixed'>
        <Top id="dast" style="position: fixed" :text="Topobj"></Top>
        <div style="margin-top: 60px;" class="G_container">
            <h2 class="title">热门分类</h2>
            <el-row>
                <el-col :span="6">
                    <div class="grid-content bg-purple-dark">
                        <router-link  style="display: block;" to="/helplogreg">
                            <span class="x-icon-help-tag01"></span>
                            <span class="G_tad_text">
                                登录注册
                            </span>
                        </router-link>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-dark">
                        <router-link  style="display: block;" to="/HelpProcess">
                        <span class="x-icon-help-tag02"></span>
                        <span class="G_tad_text">
                            存款流程
                        </span>
                        </router-link>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-dark">
                        <router-link  style="display: block;" to="/HelpWithdrawal">
                            <span class="x-icon-help-tag03"></span>
                            <span class="G_tad_text">
                                提款流程
                            </span>
                        </router-link>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-dark">
                        <router-link  style="display: block;" to="/HelpTransfer">
                            <span class="x-icon-help-tag04"></span>
                            <span class="G_tad_text">
                                转账流程
                            </span>
                        </router-link>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-dark">

                        <router-link  style="display: block;" to="/HelpAccount">
                            <span class="x-icon-help-tag05"></span>
                            <span class="G_tad_text">
                                账户安全
                        </span>
                        </router-link>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-dark">

                        <router-link  style="display: block;" to="/HelpPolicy">
                            <span class="x-icon-help-tag06"></span>
                            <span class="G_tad_text">
                            会员制度
                        </span>
                        </router-link>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-dark">

                        <router-link  style="display: block;" to="/HelpCardbank">
                            <span class="x-icon-help-tag07"></span>
                            <span class="G_tad_text">
                            银行卡相关
                        </span>
                        </router-link>
                    </div>
                </el-col>
                <el-col :span="6">

                    <div class="grid-content bg-purple-dark">
                        <router-link  style="display: block;" to="/HelpOther">
                            <span class="x-icon-help-tag08"></span>
                            <span class="G_tad_text">
                            其他问题
                            </span>
                        </router-link>

                    </div>
                </el-col>

            </el-row>

        </div>
        <h2 class="G_header_title">
            热门问题
        </h2>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/helpChildOne">
                为什么在线支付成功后额度没有立即增加？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/helpChildTwo">
                快捷支付存款未到账如何处理？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/helpChildThree">
                提款什么时候可以到账？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/helpChildFour">
                提款申请为什么会不通过？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/helpChildFives">
                为什么向游戏转账会失败？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/helpChildSex">
                你们的流水红利政策是怎么样的？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/helpChildSeven">
                有效流水在每个平台是如何计算的？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/helpChildEight">
                隐私信息是否安全？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/helpChildNine">
                我可以注册多个账号吗？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <el-row class="G_row">
            <router-link  style="display: block;" to="/helpChildTen">
                请问各个游戏的注额为多少？<span class="el-icon-arrow-right"></span>
            </router-link>
        </el-row>
        <!--<div class="Help_Footer">-->
            <!--<el-row>-->
                <!--<el-col :span="12">-->
                    <!--<div class="grid-content bg-purple">-->
                        <!--<router-link  style="display: block;position: relative" class="G_Help_footer_tad" to="/leavemsg">-->
                            <!--<span  style="position:absolute;top:5px;left: 10px" class="x-icon-help-phone"></span>意见反馈-->
                        <!--</router-link>-->
                    <!--</div>-->
                <!--</el-col>-->
                <!--<el-col :span="12">-->

                    <!--<div class="grid-content bg-purple-light">-->
                        <!--<router-link  style="display: block;position:relative" class="G_Help_footer_tad" to="/callPhone">-->
                            <!--<span style="position:absolute;top:5px;left: 10px" class="x-icon-help-opinion"></span>电话回拨-->
                        <!--</router-link>-->
                    <!--</div>-->
                <!--</el-col>-->
            <!--</el-row>-->
        <!--</div>-->
    </div>
</template>

<script>
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                Topobj:{
                    text:'帮助中心',
                    withdraw:'/LiveVideo',
                },
            }
        },
        computed: {
            userNew: function() {
                //个人
                return this.$store.state.userNew;
            },
        },
        mounted: function () {
            if(this.userNew.iphonex === '1'){
                this.$refs.help.style.top = '1.6rem';
            }
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
.G_help{
    position: fixed;
    width: 100%;
    font-size: 0;
    padding-bottom: 100px;
    background: #f2f2f2;
    .G_container{
        margin-top: 10px;
        border-bottom: 1px solid #c4c4c4;
        border-top: 1px solid #c4c4c4;
        background: #fff;
        padding: 5px 10px;
        .title{
            position: relative;
            line-height: 30px;
            margin: 15px 0;
            height: 30px;
            text-align: center;
            font-size:13px;
        }
        .title:before,.title:after{
            position: absolute;
            content: "";
            border-bottom: 1px solid #c4c4c4;
            bottom:15px;
            width:40%;
        }
        .title:before{
            right: 0;
        }
        .title:after{
            left: 0;
        }
        .G_tad_text{
            display: block;
            margin-top: 15px;
            font-size: 12px;
            text-align: center;
            margin-bottom: 35px;
        }
    }
    .G_header_title{
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        text-align: left;
        padding-left: 15px;
        color: #999;
    }
    .G_row{
        height: 54px;
        background: #fff;
        a{
            position: relative;
            display: block;
            line-height: 54px;
            font-size: 14px;
            text-align: left;
            padding-left: 15px;
            span{
                position: absolute;
                right: 5px;
                top:17px;
                font-size: 18px;
            }
        }
    }
    .G_row:not(:last-child){
        border-bottom: 1px solid #c4c4c4;
    }
    /*.Help_Footer{*/
        /*position: fixed;*/
        /*bottom:0;*/
        /*left:0;*/
        /*width: 100%;*/
        /*height: 60px;*/
        /*background: #fff;*/
        /*border-top: 1px solid #c4c4c4;*/
        /*.G_Help_footer_tad{*/
            /*width: 160px;*/
            /*height: 40px;*/
            /*text-align: center;*/
            /*line-height: 40px;*/
            /*margin: 9px auto;*/
            /*border:1px solid #c8a675;*/
            /*color: #c8a675;*/
            /*font-size: 16px;*/
            /*border-radius: 5px;*/
        /*}*/
    /*}*/
}
</style>