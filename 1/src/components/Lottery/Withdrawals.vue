<template>
    <div class='Withdrawals' ref="BackG">
        <el-container>
            <el-main>
                <p class="drawalsTop">
                    您目前中心钱包账户余额为 : <span class="Orgrise">{{userNew.userMoney}}</span>元
                </p>
                <div class="WithdrawalsCard" v-if="bankcard.cardNum != ''">
                    <div class="CardNumBj">
                        <p class="bankname">{{bankcard.cardNum.card_username}}</p>
                        <p class="bank">{{bankcard.cardNum.bank_name}}</p>
                        <p class="bankNum">{{bankcard.cardNum.card_num}}</p>
                    </div>
                </div>
                <el-form label-position="top" label-width="80px" :model="bankcard">
                    <el-form-item label="卡号" style="margin-bottom: 0" v-if="bankcard.cardNum != ''">
                        <el-input v-model="bankcard.cardNum.card_num" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="要求打码量" style="margin-bottom: 0" v-if="bankcard.Config !=''">
                        <el-input v-model="bankcard.Config.marking_quantity" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="完成打码量" style="margin-bottom: 0" v-if="bankcard.Config !=''">
                        <el-input v-model="bankcard.Config.user_quantity" :disabled="true"></el-input>
                    </el-form-item>
                </el-form>
                <el-form label-position="top" label-width="80px" status-icon :rules="rules2" :model="tk" ref="ruleForm2">
                    <el-form-item label="提款金额 : ￥100 ~  500000" prop="credit">
                        <el-input v-model="tk.credit"></el-input>
                    </el-form-item>
                    <el-form-item label="提款密码" prop="password">
                        <el-input v-model="tk.password" type="password"></el-input>
                    </el-form-item>
                    <el-form-item style="text-align: center">
                        <el-button type="primary" @click="submitForm('ruleForm2')">提 交</el-button>
                        <el-button @click="resetForm('ruleForm2')">重 置</el-button>
                    </el-form-item>
                </el-form>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    var vm;
    export default {
        data () {
            var validatePass = (rule, value, callback) => {
                let ation=/^[0-9]{4}$/;
                if (!value) {
                    return callback(new Error('请输入提款密码'));
                }
                setTimeout( function() {
                    if (!ation.test(value)) {
                        callback(new Error('确认提款密码'));
                    }else{
                        callback();
                    }
                },300);
            };
            var validatecredit = (rule, value, callback) => {
                let name =/^[0-9]+([.]\d{1,2})?$/;
                if (!value) {
                    return callback(new Error('请输入金额'));
                }
                setTimeout( function() {
                    if (!name.test(value)) {
                        callback(new Error('请输入金额(例:1.00),最高保留两位小数'));
                    }else{
                        if(Number(value) <= 0 ){
                            return callback(new Error('请输入金额(例:1.00),最高保留两位小数,不能小于、等于0'));
                        }
                        if(Number(value) < vm.Money.min || Number(value) > vm.Money.man){
                            return callback(new Error('请输入金额'+vm.Money.min+'-'+vm.Money.man+',最高保留两位小数'));
                        }
                        callback();
                    }
                },300);
            };
            return {
                tk:{
                    credit:'',
                    password:'',
                    cardid:''
                },
                text:'',
                Money:{
                    min:100,
                    man:500000
                },
                rules2: {
                    credit: [
                        { validator: validatecredit, trigger: 'blur' }
                    ],
                    password: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                },
                obj:null,
                show:false
            }
        },
        computed: {
            bankcard:function () {
                return this.$store.state.bankcard;
            },
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            }
        },
        mounted() {
            vm=this;
            this.$nextTick(function () {
                this.setBackground()
            });
        },
        methods:{
            setBackground(){
//                this.$refs.BackG.style.minHeight = window.innerHeight+'px';
            },
            submitForm(formName) {
                this.$refs[formName].validate(function(valid) {
                    if (valid) {
                        vm.tk.cardid = vm.bankcard.cardNum.id
                        if((Number(vm.bankcard.Config.marking_quantity) > Number(vm.bankcard.Config.user_quantity)) && (Number(vm.bankcard.Config.withdraw_fee)> 0 || Number(vm.bankcard.Config.withdraw_manage_fee) > 0)){
                            vm.text ="未完成打码量,提款将收取"+vm.bankcard.Config.withdrawConfig +"%的费率,"+'且今日提款次数过多，提款将收取' + vm.bankcard.Config.withdraw_fee + '%的手续费和'+vm.bankcard.Config.withdraw_manage_fee+'元的行政费,是否继续提款？';
                            vm.$confirm( vm.text, '系统提示', {
                                confirmButtonText: '继续',
                                cancelButtonText: '取消',
                                type: 'warning'
                            }).then(() => {
                                vm.$BugNewWithDraw(vm,vm.tk)
                            }).catch(() => {
                            });
                            return;
                        }else if(Number(vm.bankcard.Config.marking_quantity) > Number(vm.bankcard.Config.user_quantity)){
                            vm.text = "未完成打码量,提款将收取"+vm.bankcard.Config.withdrawConfig +"%的费率,是否继续提款？";
                            vm.$confirm( vm.text, '系统提示', {
                                confirmButtonText: '继续',
                                cancelButtonText: '取消',
                                type: 'warning'
                            }).then(() => {
                                vm.$BugNewWithDraw(vm,vm.tk)
                            }).catch(() => {
                            });
                            return;
                        }else if(Number(vm.bankcard.Config.withdraw_fee) > 0 || Number(vm.bankcard.Config.withdraw_manage_fee) > 0){
                            vm.text = "今日提款次数过多，提款将收取"+vm.bankcard.Config.withdraw_fee +"%的费率+"+vm.bankcard.Config.withdraw_manage_fee+'的行政费,是否继续提款？';
                            vm.$confirm( vm.text, '系统提示', {
                                confirmButtonText: '继续',
                                cancelButtonText: '取消',
                                type: 'warning'
                            }).then(() => {
                                vm.$BugNewWithDraw(vm,vm.tk)
                            }).catch(() => {
                            });
                        }else{
                            vm.$BugNewWithDraw(vm,vm.tk)
                        }
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
        },
        created(){
            vm=this;
        },
        components: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import "../../../static/css/style.less";
.Withdrawals{
    width:100%;
    .Bg-BackGround;
    padding-bottom: 0.8rem;
    margin-top: 0.15rem;
    font-size: 0;
    .el-form-item{
        text-align: left;
    }
    .el-form-item__label{
        line-height: 20px;
        padding: 0;
        color:@size-color;
    }
    .el-form-item{
        margin-bottom: 17px;
    }
    .el-form--label-top .el-form-item__label{
        padding: 0;
    }
    .el-input.is-disabled .el-input__inner{
        /*background-color: #c6c9ce;*/
        /*color: #606266;*/
    }
    .drawalsTop{
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: left;
        font-size: 0.25rem;
        color:@size-color;
    }
}
.WithdrawalsCard{
    height: 2.2rem;
    .CardNumBj{
        height: 1.8rem;
        padding-top: 0.3rem;
        border-radius: 3px;
        background: url(http://192.168.0.140:82/mobileTX/images393/Lottery/cardbj.png) no-repeat;
        background-size:100% 100%;
        padding-left: 20%;
        p{
            text-align: left;
            padding-left: 0.2rem;
            color:#fff;
        }
        .bankname,.bank{
            height: 0.4rem;
            line-height: 0.4rem;
            color:#fff;
        }
        .bankname{
            font-size: 0.3rem;
            font-weight: 800;
        }
        .bank{
            font-size: 0.22rem;
        }
        .bankNum{
            height: 0.7rem;
            font-weight: 100;
            line-height: 0.7rem;
            color:#fff;
            font-size: 0.32rem;
        }
    }
}
</style>