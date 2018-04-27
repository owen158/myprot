<template>
    <div class='gameLimit'>
        <Top :text="Topobj"></Top>
        <el-row>
            <el-col :span="24"><div class="grid-content">个人基本信息</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div style="height: 63px;line-height: 63px;" class="grid-content bg-purple-dark">
                    头像
                    <sapn class="info">
                        <i style="margin-right: 0" class="x-icon-game-logo"></i><span class="" style="padding-left: 15px;"></span>
                    </sapn>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                        用户名 <span class="info">&nbsp; {{userNew.userName}}<span class="" style="padding-left: 15px;"></span></span>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <div class="bg-purple-dark" to="/modify">
                        真实姓名
                        <span class="info">
                            <b v-if="userNew.data.realname != '会员'">
                                {{userNew.data.realname}}
                                <span class="" style="padding-left: 15px;"></span>
                            </b>
                            <!--<router-link style="color: #666;" to="/userBankCard">-->
                                 <!--暂无-->
                                 <!--<span class="el-icon-arrow-right" style="padding-left: 15px;"></span>-->
                            <!--</router-link>-->
                        </span>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <router-link class="bg-purple-dark" to="/phone">
                        手机号
                        <span class="info">
                            {{ userNew.data.loginmobile != undefined ? userNew.data.loginmobile : userNew.data.mobile}}
                            <span class="el-icon-arrow-right" style="padding-left: 15px;"></span></span>
                    </router-link>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content">
                    账号信息
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    注册时间
                    <span class="info" v-if="userNew.data.reg_date">{{userNew.data.reg_date.split("+")[1]}}<span class="" style="padding-left: 15px;"></span></span>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    最后登录时间
                    <span class="info" v-if="userNew.data.login_time">{{userNew.data.login_time.split("+")[1]}}<span class="" style="padding-left: 15px;"></span></span>
                </div>
            </el-col>
        </el-row>
        <el-button type="primary" @click="dropOut" class="G-submit">退出登录</el-button>
    </div>
</template>
<script>
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                Topobj:{
                    text:'账户信息',
                    withdraw:'/'
                }
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            }
        },
        mounted() {

        },
        methods:{
            dropOut:function () {
                let vm=this;
                vm.$confirm('退出登录, 是否继续?', '系统提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    vm.$BugNewdropOut(vm);
                }).catch(() => {
//                    this.$message({
//                        type: 'info',
//                        message: '已取消'
//                    });
                });
            },
        },
        created() {
        },
        components: {
            Top,
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.gameLimit{
    font-size: 0;
    width:100%;
    .grid-content{
        height: 35px;
        line-height: 35px;
        text-align: left;
        padding-left: 16px;
        font-size: 14px;
    }
    .bg-purple-dark{
        display: block;
        position: relative;
        background: #fff;
        height: 44px;
        line-height: 44px;
        color: #000;
        font-weight: 700;
        border-bottom: 1px solid #c8c7cc;
    }
    .info{
        position: absolute;
        right: 16px;
        top:0;
        text-align: right;
        min-width: 90px;
    }
}

</style>