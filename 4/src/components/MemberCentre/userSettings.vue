<template>
    <div class='userSettings'>
        <Top :text="Topobj"></Top>
        <el-row style="margin-top: 5px;">
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <router-link to="/modifybankpass">
                        提款密码
                        <div class=" rf">
                            <span v-if="typeof userNew.whether === 'boolean'">{{userNew.whether === true ? "未设置" : "已设置"}}</span>
                            <span v-if="typeof userNew.whether === 'string'">{{userNew.whether}}</span>
                            <span style="padding-left: 8px;" class="el-icon-arrow-right"></span>
                        </div>
                    </router-link>
                </div>
            </el-col>
        </el-row>
        <div class="line-w"></div>
        <el-row >
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <router-link to="/modifyloginpass">
                        登录密码 <span class="el-icon-arrow-right rf"></span>
                    </router-link>
                </div>
            </el-col>
        </el-row>
        <div class="line-w"></div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <router-link to="/phone">
                        手机号码
                        <div class="rf">
                            <span style="padding-right:8px;">
                                {{ userNew.data.loginmobile != undefined ? userNew.data.loginmobile : userNew.data.mobile}}
                            </span>
                            <span class="el-icon-arrow-right"></span>
                        </div>
                    </router-link>
                </div>
            </el-col>
        </el-row>
        <div class="line-w"></div>
        <el-row style="margin-top:5px;">
            <el-col :span="24">
                <div class="grid-content bg-purple-dark" @click="addPass()">
                    <div class="texts">
                        银行卡
                        <div class="rf">
                            <b v-if="bankcard.judgmentcardNum" style="padding-right:8px;">{{bankcard.cardNum.bank_name}} ({{bankcard.cardNum.card_num.slice(-4)}})</b>
                            <b v-if="!bankcard.judgmentcardNum" style="padding-right:8px;">尚未绑定</b>
                            <span class="el-icon-arrow-right"></span>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <div class="line-w"></div>
    </div>
</template>
<script>
    var vm;
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                Topobj:{
                    text:'安全设置',
                    withdraw:'/'
                }
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            },
             bankcard:function () {
                return this.$store.state.bankcard;
            }
        },
        methods:{
            addPass(){
                if(!this.bankcard.judgmentcardNum){
                    if(this.userNew.whether === true){
                        this.$confirm('请先设置提款密码', '系统提示', {
                            confirmButtonText: '设置',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            this.$router.push({path:'/modifybankpass'})

                        }).catch(() => {
                                this.$message({
                                showClose: true,
                                message: '已取消'
                            });
                        });

                    }else{
                        return this.$router.push({path:'/userBankCard'})
                    }
                }else{
                    return this.$router.push({path:'/userBankCard'})
                }
            }
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.userSettings{
    width:100%;
    font-size: 0;
    .bg-purple-dark{
        background: #fff;
        a,.texts{
            display: block;
            padding: 18px 10px;
            text-align: left;
            font-size: 14px;
            color: #333;
        }
    }
}
</style>