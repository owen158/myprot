<template>
    <div class="information" ref="BackG">
        <el-container >
            <el-main>
                <TopCounter :title="'填写存款信息'" :Boo="true" :src="'/deposit'"></TopCounter>
                <p class="A-title">
                    汇款前请联系客服确认汇款信息
                    <router-link style="color:#219be4;text-decoration: underline" to="/NoteSingle">在线客服</router-link>
                </p>
                <el-form label-position="top" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                    <el-form-item label="存款人姓名(*转账账号对应的姓名)" prop="name">
                        <el-input  :minlength=2 :maxlength=18 v-model="ruleForm.name" placeholder="姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="支付账号(*例如：***9558，可填后4位)" prop="account">
                        <el-input :minlength=4 :maxlength=19 v-model="ruleForm.account" placeholder="银行卡号"></el-input>
                    </el-form-item>
                    <el-form-item label="存款金额" prop="amount">
                        <el-input :minlength=0 :maxlength=30 v-model="ruleForm.amount" placeholder="金额"></el-input>
                    </el-form-item>
                    <el-form-item label="存款方式" prop="type" style="text-align: left">
                        <el-select v-model="ruleForm.type" placeholder="请选择存款方式">
                            <el-option label="网银转账" value="1"></el-option>
                            <el-option label="支付宝" value="2"></el-option>
                            <el-option label="财付通" value="3"></el-option>
                            <el-option label="微信" value="4"></el-option>
                            <el-option label="ATM自动柜员机" value="5"></el-option>
                            <el-option label="ATM现金入款" value="6"></el-option>
                            <el-option label="银行柜台" value="7"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="是否申请彩金" prop="caijin" >
                        <el-select v-model="ruleForm.caijin" placeholder="是否申请彩金">
                            <el-option label="不申请" value="1"></el-option>
                            <el-option label="申请" value="0"></el-option>
                        </el-select>
                    </el-form-item>
                    <div class="A-text"><br>
                        *转帐完成后请保留单据作为核对证明。<br> <br>
                        *必须填写表单内容，不能为空。<br> <br>
                        *每笔转帐请提交一次。<br> <br></div>
                    <el-form-item style="text-align: center">
                        <el-button type="primary" @click="submitForm('ruleForm')">提 &nbsp;&nbsp; 交</el-button>
                        <el-button @click="resetForm('ruleForm')">重 &nbsp; &nbsp;置</el-button>
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
            let validaterealName = (rule, value, callback) => {
                let ation=/^\D{2,18}$/;
                if (!value) {
                    return callback(new Error('真实姓名必须与您的银行账户相同 2 -18 中文'));
                }
                setTimeout( function() {
                    if (!ation.test(value)) {
                        callback(new Error('真实姓名必须与您的银行账户相同 2-18 中文'));
                    }else{
                        callback();
                    }
                },300);
            };
            let validateaccount = (rule, value, callback) => {
                let ation=/^[0-9]{4,19}$/;
                if (!value) {
                    return callback(new Error('请填写银行卡'));
                }
                setTimeout( function() {
                    if (!ation.test(value)) {
                        callback(new Error('请正确填写银行卡'));
                    }else{
                        callback();
                    }
                },300);
            };
            let validateamount = (rule, value, callback) => {
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
                        callback();
                    }
                },300);
            };
            return {
                ruleForm: {
                    name: '',
                    account: '',
                    amount:'',
                    ctime:'',
                    type:'',
                    caijin:''
                },
                rules: {
                    name: [{ validator: validaterealName, trigger: 'blur' }],
                    type: [{ required: true, message: '请选择存款方式', trigger: 'change' }],
                    account:[{validator: validateaccount, trigger: 'blur'}],
                    amount: [{ validator: validateamount, trigger: 'blur' }],
                    caijin:[{required: true, message: '是否申请彩金', trigger: 'change'}]
                },
                webApp:false
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            }
        },
        mounted() {
            vm=this;
            vm.$ajax.call(this,{},"bk/getBankList.do",function (obj) {
//               console.log(obj.bankaddress);
            });
            this.$nextTick(function () {
                this.setBackground();
            })
        },
        methods:{
            setBackground(){
                this.$refs.BackG.style.minHeight = window.innerHeight+'px';
            },
            submitForm(formName) {
                let vm = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        vm.ruleForm.ctime = vm.GetDateT();
                        vm.$BugNewBankPay(vm,vm.ruleForm);
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            GetDateT:function () {
                var d,s;
                d = new Date();
                s = d.getFullYear() + "-";             //取年份
                s = s + (d.getMonth() + 1) + "-";//取月份
                s += d.getDate() + " ";         //取日期
                s += d.getHours() + ":";       //取小时
                s += d.getMinutes() + ":";    //取分
                s += d.getSeconds();         //取秒
                return(s);
            },
        },
        components: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import "../../../static/css/style.less";
.information{
    padding-top: 0.8rem;
    width: 100%;
    .Bg-BackGround;
    font-size: 0;
    .A-title{
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.25rem;
        text-align: left;
        color:@size-info;
    }
    .el-form-item__label{
        height: 20px;
        line-height: 20px;
        padding-bottom: 0;
        color: @size-color;
    }
    .el-form-item{
        margin-bottom: 17px;
        text-align: left;
    }
    .el-form-item__content{
        line-height: 30px;
    }
    .el-input__inner{
        height: 30px;
    }
    .A-text{
        font-size: 0.25rem;
        text-align: left;
        padding-left: 0.25rem;
        color:#c78925;
    }
}
</style>
