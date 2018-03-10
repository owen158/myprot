<template>
    <div class='userSettings add' ref="BackG">
        <TopCounter :title="'修改密码'" :Boo="true" :src="'/MemberCentre'"></TopCounter>
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="登录密码" name="first">
                <el-container class='modifyloginpass'>
                    <el-main>
                        <el-form label-position="top" label-width="80px" :model="mflgpas" status-icon :rules="rules" ref="ruleForm">
                            <el-form-item label="原密码" prop="password">
                                <el-input v-model="mflgpas.password" type="password" :minlength=6 :maxlength=12></el-input>
                            </el-form-item>
                            <el-form-item label="新密码" prop="npassword">
                                <el-input v-model="mflgpas.npassword" type="password" :minlength=6 :maxlength=12 placeholder="新密码须为6～12位英文或数字"></el-input>
                            </el-form-item>
                            <el-form-item label="确认密码" prop="renpassword">
                                <el-input v-model="mflgpas.renpassword" type="password" :minlength=6 :maxlength=12 placeholder="确认密码"></el-input>
                            </el-form-item>
                            <p style="text-align: left" class="A-text">密码须为<span class="Orgrise">6～12位英文或数字</span>且符合a~z字元或0~9</p>
                            <el-form-item style="text-align: center">
                                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                                <el-button @click="resetForm('ruleForm')">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </el-main>
                </el-container>
            </el-tab-pane>
            <el-tab-pane label="取款密码" name="second">
                <el-container class='modifybankpass'>
                    <el-main>
                        <el-form label-position="top" label-width="80px" :model="bankpass" status-icon :rules="rule" ref="ruleForm2s">
                            <el-form-item label="原密码" prop="password">
                                <el-input v-model="bankpass.password" type="password" :minlength=4 :maxlength=4></el-input>
                            </el-form-item>
                            <el-form-item label="新密码" prop="npassword">
                                <el-input v-model="bankpass.npassword" type="password" placeholder="取款密码必须为4位数字的组合" :minlength=4 :maxlength=4></el-input>
                            </el-form-item>
                            <el-form-item label="确认密码" prop="renpassword">
                                <el-input v-model="bankpass.renpassword" type="password" placeholder="确认密码" :minlength=4 :maxlength=4></el-input>
                            </el-form-item>
                            <p style="text-align: left" class="A-text">取款密码须为<span class="Orgrise">4位数字</span>且符合0~9字元</p>
                            <el-form-item style="text-align: center">
                                <el-button type="primary" @click="submitForms('ruleForm2s')">提交</el-button>
                                <el-button @click="resetForms('ruleForm2s')">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </el-main>
                </el-container>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    var vm;
    export default {
        data () {
            let validatepassword = (rule, value, callback) => {
                let tion =/^[0-9A-Za-z]{6,12}$/;
                if (!value) {
                    return callback(new Error('密码须为,6～12位英文或数字，且符合a~z字元或0~9'));
                }
                setTimeout( function() {
                    if (!tion.test(value)) {
                        callback(new Error('密码须为,6～12位英文或数字，且符合a~z字元或0~9'));
                    }else{
                        callback();
                    }
                },300);
            };
            let validatenpassword = (rule, value, callback) => {
                let tion =/^[0-9A-Za-z]{6,12}$/;
                if (!value) {
                    return callback(new Error('新密码须为,6～12位英文或数字，且符合a~z字元或0~9'));
                }
                setTimeout( function() {
                    if (!tion.test(value)) {
                        callback(new Error('新密码须为,6～12位英文或数字，且符合a~z字元或0~9'));
                    }
                    if(value === vm.mflgpas.password){
                        callback(new Error('新密码须为,6～12位英文或数字，不能和旧密码一样'));
                    }
                    callback();
                },300);
            };
            let validaterenpassword = (rule, value, callback) => {
                let tion =/^[0-9A-Za-z]{6,12}$/;
                if (!value) {
                    return callback(new Error('新密码须为,6～12位英文或数字，且符合a~z字元或0~9'));
                }
                setTimeout( function() {
                    if (!tion.test(value)) {
                        callback(new Error('新密码须为,6～12位英文或数字，且符合a~z字元或0~9'));
                    }
                    if(value !=vm.mflgpas.npassword){
                        callback(new Error('确认密码有误'));
                    }
                    callback();
                },300);
            };
            let validatetpwds = (rule, value, callback) => {
                let tion =/^[0-9]{4}$/;
                if (!value) {
                    return callback(new Error('请输入新密码'));
                }
                setTimeout( function() {
                    if (!tion.test(value)) {
                        callback(new Error('取款密码须为4位数字，且符合0~9字元'));
                    }else{
                        callback();
                    }
                },300);
            };
            let validatenpasswords = (rule, value, callback) => {
                let tion =/^[0-9]{4}$/;
                if (!value) {
                    return callback(new Error('请输入新取款密码'));
                }
                setTimeout( function() {
                    if (!tion.test(value)) {
                        callback(new Error('新取款密码须为4位数字，且符合0~9字元'));
                    }
                    if(value === vm.bankpass.password){
                        callback(new Error('新密码须为,4位数字，不能和旧密码一样'));
                    }
                    callback();
                },300);
            };
            let validaterenpasswords = (rule, value, callback) => {
                let tion =/^[0-9]{4}$/;
                if (!value) {
                    return callback(new Error('确认取款密码'));
                }
                setTimeout( function() {
                    if (!tion.test(value)) {
                        callback(new Error('取款密码须为4位数字，且符合0~9字元'));
                    }
                    if(value !=vm.bankpass.npassword){
                        callback(new Error('确认密码有误'));
                    }
                    callback();
                },300);
            };
            return {
                activeName2: 'first',
                transitionName: 'slide-left',
                mflgpas:{
                    password:'',
                    npassword:'',
                    renpassword:''
                },
                rules:{
                    password: [{ validator: validatepassword, trigger: 'blur' }],
                    npassword:[{ validator: validatenpassword, trigger: 'blur' }],
                    renpassword:[{ validator: validaterenpassword, trigger: 'blur' }],
                },
                bankpass:{
                    password:'',
                    npassword:'',
                    renpassword:''
                },
                rule:{
                    password: [{ validator: validatetpwds, trigger: 'blur' }],
                    npassword:[{ validator: validatenpasswords, trigger: 'blur' }],
                    renpassword:[{ validator: validaterenpasswords, trigger: 'blur' }],
                }
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            }
        },
        mounted() {
            vm = this;
            this.setBackground()
        },
        methods:{
            setBackground(){
                this.$refs.BackG.style.minHeight = window.innerHeight+'px';
            },
            setBackground(){
                this.$refs.BackG.style.minHeight = window.innerHeight+'px';
            },
            handleClick(tab, event) {
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        vm.$BugNewmodifylogin(vm,vm.mflgpas)
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            submitForms(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        vm.$BugNewchangeQkpwd(vm,vm.bankpass)
                    } else {
                        return false;
                    }
                });
            },
            resetForms(formName) {
                this.$refs[formName].resetFields();
            },
        },
        components: {
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import "../../../static/css/style.less";
.userSettings{
    padding-top: 0.8rem;
    .Bg-BackGround;
    width:100%;
    font-size: 0;
    .A-text{
        font-size: 0.25rem;
        line-height: 0.5rem;
        text-align: left;
        color:@size-color;
    }
}
</style>