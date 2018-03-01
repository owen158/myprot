<template>
    <el-container class='userCapitalPwd'>
        <el-main>
            <div class="row Carpittitle" >
                 为了您账户安全，真实姓名需要与绑定银行卡姓名一致
            </div>
            <el-form label-position="top" label-width="80px" :model="addtext" :rules="rules" ref="ruleForm">
                <el-form-item label="真实姓名必须与您的银行账户相同" prop="cardUserName">
                    <el-input v-model="addtext.cardUserName" :minlength=2 :maxlength=18 placeholder="真实姓名"></el-input>
                </el-form-item>
                <el-form-item label="银行卡号" prop="cardNum">
                    <el-input v-model="addtext.cardNum" :minlength=15 :maxlength=19  placeholder="卡号"></el-input>
                </el-form-item>
                <el-form-item label="银行"  prop="bankCode">
                    <el-select v-model="addtext.bankCode" placeholder="请选择银行">
                        <el-option v-for="item in cardlist" :label="item.title" :value="item.id" placeholder="选择银行"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="开户行地址" prop="cardAddress">
                    <el-input v-model="addtext.cardAddress" :minlength=2 :maxlength=30 placeholder="地址"></el-input>
                </el-form-item>
                <el-form-item  label="取款密码" prop="password">
                    <el-input v-model="addtext.password" :minlength=4 :maxlength=4 type="password" placeholder="取款密码"></el-input>
                </el-form-item>
                <el-form-item style="text-align: center">
                    <el-button type="primary" @click="submitForm('ruleForm')">提 &nbsp;&nbsp; 交</el-button>
                    <el-button @click="resetForm('ruleForm')">重 &nbsp; &nbsp;置</el-button>
                </el-form-item>
            </el-form>
        </el-main>
    </el-container>
</template>
<script>
    var vm;
    export default {
        data () {
            let validaterealName = (rule, value, callback) => {
                let ation=/^\D{2,18}$/;
                if (!value) {
                    return callback(new Error('真实姓名必须与您的银行账户相同 2-18 中文'));
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
                    return callback(new Error('请填写银行卡号'));
                }
                setTimeout( function() {
                    if (!ation.test(value)) {
                        callback(new Error('请正确填写银行卡号'));
                    }else{
                        callback();
                    }
                },300);
            };
            let validatecardAddress = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请填写开户行地址'));
                }
                setTimeout( function() {
                    if (value.lenght < 1) {
                        callback(new Error('请正确填写银行卡号'));
                    }else{
                        callback();
                    }
                },300);

            };
            let validatepassword = (rule, value, callback) => {
                let ation=/^[0-9]{4}$/;
                if (!value) {
                    return callback(new Error('请输入取款密码'));
                }
                setTimeout( function() {
                    if (!ation.test(value)) {
                        callback(new Error('取款密码有误'));
                    }else{
                        callback();
                    }
                },300);
            };
            return {
                cities:null,
                cardlist:[
                    {title:"中国农业银行",id:"1"},
                    {title:"中国银行",id:"2"},
                    {title:"交通银行",id:"3"},
                    {title:"中国建设银行",id:"4"},
                    {title:"中国工商银行",id:"5"},
                    {title:"中国邮政储蓄银行",id:"6"},
                    {title:"招商银行",id:"7"},
                    {title:"浦发银行",id:"8"},
                    {title:"中国光大银行",id:"9"},
                    {title:"中信银行",id:"10"},
                    {title:"平安银行",id:"11"},
                    {title:"中国民生银行",id:"12"},
                    {title:"华夏银行",id:"13"},
                    {title:"广发银行",id:"14"},
                    {title:"北京银行",id:"15"},
                    {title:"上海银行",id:"16"},
                    {title:"兴业银行",id:"17"}
                ],
                addtext:{
                    cardUserName:'',
                    cardNum:'',
                    cardAddress:'',
                    password:'',
                    bankCode:''
                },
                rules: {
                    cardUserName: [{ validator: validaterealName, trigger: 'blur' }],
                    cardNum:[{validator: validateaccount, trigger: 'blur'}],
                    cardAddress: [{ validator: validatecardAddress, trigger: 'blur' }],
                    bankCode: [{ required: true, message: '请选择银行', trigger: 'change' }],
                    password:[{validator: validatepassword, trigger: 'blur'}],
                },
            }
        },
        mounted() {
            vm=this;
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            }
        },
        methods: {
            submitForm(formName) {
                let vm = this;
                console.log(formName)
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        vm.$BugNewAddCard(vm,vm.addtext);
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
        created() {
        },
        components: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import "../../../static/css/style.less";
.userCapitalPwd{
    width: 100%;
    .Bg-BackGround;
    padding-bottom: 90px;
    font-size: 0;
    .el-form-item__label{
        height: 20px;
        line-height: 20px;
        padding-bottom: 0;
        color:@size-color;
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
    .Carpittitle{
        height: 0.6rem;
        font-size: 0.22rem;
        line-height: 0.6rem;
        color:#b3b3b3;
        text-align: left;
    }

}
</style>