<template>
    <div class='userBankCard'>
        <Top :text="Topobj"></Top>
        <el-container v-show="bankcard.judgmentcardNum">
            <el-main>
                <el-row class="grid-bank">
                    <el-col :span="20">
                        <div class="bg-purple-dark">&nbsp; {{bankcard.cardNum.bank_name}} &nbsp;</div>
                        <div class="bg-purple-dark"> &nbsp; {{bankcard.cardNum.card_num}} &nbsp;</div>
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content-bank bg-purple-dark">
                        </div>
                    </el-col>
                    <!--<b class="closn el-icon-error" @click="delect"></b>-->
                </el-row>
            </el-main>
        </el-container>
        <div v-show="bankcard.judgmentcardNum" style="" class="title" >
            温馨提示 ： 如需修改绑定银行卡信息，请联系
            <router-link style="" to="/NoteSingle">
                在线客服
            </router-link>
        </div>
        <el-container v-if="bankcard.judgmentcardNum != true">
            <el-main style="background: transparent">
                <el-row>
                    <el-col :span="24">
                        <el-card :body-style="{ padding: '0px' }">
                            <router-link class="Addcard" to="/userCapitalPwd">
                                <span class="el-icon-circle-plus-outline add"></span>
                                点击此处新增银行卡
                            </router-link>
                        </el-card>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>
<script>
    import Top from '../Top/Top.vue'
    var vm,el;
    export default {
        data () {
            return {
                Topobj:{
                    text:'银行卡',
                    withdraw:'/'
                },
                userId:{
                    cardId:'',
                    password:""
                },
                ctpop:false
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
        mounted() {
        },
        methods:{
            delect:function () {
                vm=this;
                this.$prompt('请输入提款密码', '系统提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputValue:'',
                    inputPlaceholder:'提款密码',
                    inputType:'password',
                }).then(({ value }) => {
                    console.log(value)
                    vm.userId.password = value;
                    vm.userId.cardId= vm.bankcard.cardNum.id;
                    if(vm.userId.password == ""){
                        this.$message({
                        type: 'info',
                        message: '请输入资金密码'
                        });
                        return;
                    }
                    vm.$BugNewdeletebank(vm,vm.userId)
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            },
        },
        created() {
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.userBankCard{
    font-size: 0;
    width:100%;
   .el-main{
       margin-top: 5px;
       background: #fff;
   }
   .grid-bank{
       position: relative;
       .closn{
           position: absolute;
           right: -10px;
           top:-15px;
           font-size:25px;
       }
   }
    .Addcard{
        display: block;
        width: 100%;
        /*height: 100px;*/
        padding: 50px;
        color:#c8a675;
        font-size: 15px;
        .add{
            font-size: 60px;
            display: block;
            /*height: 60px;*/
            color:#c8a675;
            margin-bottom: 15px;
        }
    }
    .bg-purple-dark{
        line-height: 30px;
        font-size: 20px;
        text-align: left;
        font-weight: 600;
    }
    .grid-content-bank{
        line-height: 60px;
        font-size: 28px;
        font-weight: bold;
        color: #c8a675;
    }
    .title{
        font-size: 12px;margin-top: 8px;line-height: 17px;padding: 0 7px;
        a{
            color:red;
        }
    }
}
</style>